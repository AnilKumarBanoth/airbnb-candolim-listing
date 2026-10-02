---
name: production-architecture
description: High-scale vacation rental marketplace architectural patterns covering frontend scaling, microservices, distributed reservations, search sharding, and resilience.
---

# Production Marketplace Architecture Skill

## 1. Core Architectural Pillars
When architecting a production vacation-rental marketplace at Airbnb scale:

### A. Frontend Layer & Edge Delivery
- **Global Anycast Edge CDN** (Cloudflare / AWS CloudFront):
  - Edge caching of static assets and stale-while-revalidate for ISR listing pages.
  - Image Optimization CDN (on-the-fly WebP/AVIF resizing and responsive srcset).
  - DDoS protection and bot mitigation (WAF).
- **Client Application**:
  - React/Next.js with hybrid rendering: SSG for static listing metadata, client-side hydration for dynamic booking dates/pricing.

### B. API Gateway & Backend for Frontend (BFF)
- GraphQL / REST Gateway with Envoy / Kong.
- Token-based Authentication (OAuth 2.0 / JWT) with rate-limiting buckets (Token Bucket algorithm).
- Circuit breaker pattern (Netflix Hystrix / Resilience4j) to prevent cascading microservice failures.

### C. Domain Microservices
1. **Search & Discovery Service**:
   - Elasticsearch / OpenSearch cluster with geo-point indexing and polygon filters.
   - Dynamic price range and amenities aggregation.
2. **Listing & Content Service**:
   - Master metadata repository, localized descriptions, multi-room photo management.
3. **Reservation & Booking Engine**:
   - Distributed locking via Redis Redlock to eliminate double-booking race conditions during checkout.
   - Distributed transaction coordination via Saga Pattern (Orchestrator model) across Inventory, Payment, and Notification services.
4. **Payment & Ledger Service**:
   - PCI-DSS compliant vault, idempotency keys on all payment requests, multi-currency settlement.
5. **Pricing & Availability Engine**:
   - Dynamic pricing rules, seasonal surge, host discounts, real-time availability calendars.
6. **Reviews & Trust Service**:
   - Verified stay review submission, anti-fraud review screening, host superhost scoring.

### D. Data & Event Infrastructure
- **OLTP Database**: PostgreSQL with read replicas and Citus sharding for horizontal scale.
- **In-Memory Cache**: Redis Cluster for session state, price cache, and distributed locks.
- **Event Bus**: Apache Kafka for asynchronous decoupled events (`ReservationCreated`, `PaymentSucceeded`, `ReviewSubmitted`, `iCalSyncRequested`).
- **Object Storage**: AWS S3 / Google Cloud Storage with multi-region replication.
