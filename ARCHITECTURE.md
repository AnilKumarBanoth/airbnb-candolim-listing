# Production Architecture Specification: Vacation-Rental Marketplace (Airbnb-Scale)

## Executive Summary
This document details the high-level system architecture designed to scale a global vacation-rental marketplace to **100M+ monthly active users (MAU)**, **10M+ property listings**, and **50,000+ bookings per minute** during peak holiday surges, maintaining **99.99% availability (SLA)** and sub-100ms global read latencies.

The architecture diagram is visually modeled in [`architecture-diagram.svg`](./architecture-diagram.svg) and can be viewed or exported to PDF using [`architecture-viewer.html`](./architecture-viewer.html).

---

## 1. Frontend & Global Edge Scaling Strategy

### 1.1 Anycast CDN & Edge Caching
- **Global CDN Network (Cloudflare / CloudFront)**:
  - 300+ Point of Presence (PoP) edge locations terminate TLS 1.3 connections close to users, slashing round-trip time (RTT).
  - **Static & Media Delivery**: Property hero images, room photo tours, thumbnails, JavaScript chunks, and fonts are cached at the edge with immutable cache headers (`Cache-Control: public, max-age=31536000, immutable`).
  - **Dynamic Edge Optimization**: Next.js Incremental Static Regeneration (ISR) with edge Stale-While-Revalidate (SWR) for high-traffic listing pages (such as Candolim, Goa).
  - **Edge Image Optimizer**: Real-time image resizing, compression, and WebP/AVIF transcoding based on client `Accept` headers and viewport width (`srcset`).

### 1.2 Web Application Architecture
- **React & Next.js Hybrid Model**:
  - Server-Side Rendering (SSR) & Static Generation (SSG) for SEO crawlability and First Contentful Paint (FCP < 800ms).
  - Client-side React hydration for interactive components: Date Picker, Guest Selector, Dynamic Pricing Calculations, Fullscreen Photo Tour, and Lightbox.
  - Micro-frontend architecture allowing independent deployments of Search, Listing Details, Checkout, and Host Management modules.

---

## 2. API Gateway & Backend-For-Frontend (BFF)

### 2.1 API Gateway Layer
- **Envoy / Kong Ingress Gateway**:
  - **Rate Limiting**: Distributed Token Bucket algorithm powered by Redis clusters to prevent denial-of-service and scraping bots.
  - **Authentication**: JWT validation with public key rotation (JWKS) via OAuth 2.0 / OIDC identity provider.
  - **SSL Termination & HTTP/3 (QUIC)** support for rapid mobile handshakes.

### 2.2 BFF (Backend-For-Frontend) Layer
- **GraphQL Federation (Apollo Router)**:
  - Aggregates data from underlying microservices (Listings, Pricing, Host, Reviews) into a single, cohesive client query, preventing network over-fetching and mobile waterfall latency.

---

## 3. Core Microservices Architecture

### 3.1 Listing & Content Service
- Master repository for property metadata, spatial geometry, room taxonomies (`Living room 1`, `Full kitchen`, `Bedroom`), amenity catalogs, and high-resolution photo references.
- **CQRS Pattern (Command Query Responsibility Segregation)**:
  - Write commands emit change-data-capture (CDC) events to sync with Elasticsearch and read-optimized caches.

### 3.2 Search & Discovery Service
- **Elasticsearch / OpenSearch Cluster**:
  - Sharded across multi-AZ nodes by geographic region (Geohash / H3 Hexagonal Hierarchical Spatial Index).
  - Executes spatial polygon boundary filters, distance scoring, date-availability bitmaps, and price range aggregations in under 25ms.

### 3.3 Reservation & Booking Engine (Concurrency & Race Conditions)
- **Preventing Double-Booking**:
  - Multi-node distributed locking using **Redis Redlock** with fencing tokens on `listing_id:checkin_date:checkout_date`.
  - Database-level isolation (`SERIALIZABLE` or optimistic locking with version columns).
- **Saga Orchestration Pattern**:
  - Coordinates multi-step checkout workflow across distributed services:
    1. Lock Inventory (`BookingService`)
    2. Authorize Payment (`PaymentService`)
    3. Update Calendar Availability (`AvailabilityService`)
    4. Dispatch Confirmation (`NotificationService`)
  - Automated compensating transactions if any step fails (e.g., auto-release inventory lock if card payment fails).

### 3.4 Dynamic Pricing & Calendar Service
- Evaluates base nightly rates, seasonal surge multipliers, weekend adjustments, cleaning fees, and host discount rules (e.g. 10% promo).
- Generates bi-directional iCal calendar synchronizations for external host distribution channels.

### 3.5 Payment & Ledger Service
- PCI-DSS Level 1 compliant tokenized card vault.
- Strict idempotency key enforcement (`Idempotency-Key: <uuid>`) on every transaction to prevent duplicate charges.
- Multi-currency settlement and automated escrow disbursements to hosts post-check-in.

### 3.6 Reviews & Trust Service
- Verified-booking review verification pipeline.
- Automated NLP sentiment analysis, profanity filters, and Superhost eligibility recalculation.

---

## 4. Asynchronous Event Streaming & Messaging

### 4.1 Apache Kafka Cluster
- Partitioned event log providing guaranteed at-least-once delivery and horizontal scalability.
- **Key Event Topics**:
  - `bookings.created`, `bookings.confirmed`, `bookings.cancelled`
  - `payments.settled`, `payments.refunded`
  - `listings.updated`, `availability.changed`
  - `notifications.dispatch`

### 4.2 Background Consumers
- **Search Sync Worker**: Debezium CDC listener syncing relational database changes to Elasticsearch within 150ms.
- **Notification Worker**: Sends transactional emails (SendGrid), WhatsApp messages (Twilio), and push alerts (FCM/APNS).
- **Analytics Ingestion**: Flushes anonymized event streams to snowflake/ClickHouse for real-time business intelligence and dynamic price recommendations.

---

## 5. Storage & Persistence Layer

| Data Category | Technology | Strategy & Scaling |
|---|---|---|
| **Transactional OLTP** | AWS Aurora PostgreSQL | Multi-AZ primary with auto-scaling read replicas; PgBouncer connection pooling; partitioned by `booking_id` & `user_id`. |
| **In-Memory Cache** | Redis Enterprise Cluster | Sub-millisecond latency for hot listing caches, session stores, rate limits, and Redlock synchronization. |
| **Search & Geospatial** | Elasticsearch / OpenSearch | Clustered by geo-shards with read replicas for instant faceted queries. |
| **Media & Object Storage** | AWS S3 / Cloud Storage | High-res property photos stored with multi-region replication and CloudFront origin access control. |
| **Analytics & Data Lake** | Snowflake / ClickHouse | Columnar data lakehouse for machine-learning pricing models and demand forecasting. |

---

## 6. Deployment, CI/CD & Observability

- **Container Orchestration**: Kubernetes (EKS / GKE) with Horizontal Pod Autoscalers (HPA) scaling pods based on CPU and request latency metrics.
- **Infrastructure as Code (IaC)**: Terraform modular blueprints for reproducible multi-region staging and production environments.
- **CI/CD Pipeline**: GitHub Actions for automated unit testing, bundle analysis, Docker container builds, and ArgoCD GitOps progressive canary rollouts.
- **Observability Stack**:
  - **Distributed Tracing**: OpenTelemetry / Jaeger for end-to-end trace correlation across all microservices.
  - **Metrics**: Prometheus & Grafana dashboards tracking p95/p99 latency, booking throughput, and error rates.
  - **Centralized Logging**: FluentBit routing logs to Elasticsearch/Kibana with structured JSON formatting.
