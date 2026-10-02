# AGENTS.md — AI Agent Operating Guidelines & Project Context

## Project Overview
This repository contains a high-fidelity, production-grade replica of the Airbnb listing:
**"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"** located in Candolim, Goa, India.

The project is built with:
- **React 19**
- **Vite 8**
- **Tailwind CSS 3.4** (with custom Airbnb design token extensions)
- **Lucide React** (icons)

## Architecture & Code Organization
- `src/App.jsx`: Root application state manager (modal triggers, photo tour state, lightbox index, reservation dates, guest counts).
- `src/components/Header.jsx`: Fixed/sticky top navigation bar with search pill and user menu.
- `src/components/ListingHeader.jsx`: Listing title, location link, rating badges, and Share / Save interactive buttons.
- `src/components/HeroGallery.jsx`: 5-photo responsive hero layout with rounded corners and "Show all photos" trigger.
- `src/components/LeftDetails.jsx`: Main content column containing Host information, Highlights, Expandable Description, Amenities preview, Calendar picker, Reviews breakdown, and Candolim Location map.
- `src/components/BookingCard.jsx`: Sticky booking sidebar with price calculations, date inputs, guest selector, and price breakdown.
- `src/components/PhotoTourModal.jsx`: Full-screen modal categorizing gallery photos by room/space.
- `src/components/LightboxModal.jsx`: Accessible, keyboard-navigable (`ArrowLeft`, `ArrowRight`, `Escape`) photo viewer with bottom thumbnails.
- `src/components/AmenitiesModal.jsx`: Filterable dialog listing all 35+ amenities organized by section.
- `src/components/ShareModal.jsx`: Share listing overlay with direct copy link feedback and social links.
- `src/data/listingData.js`: Centralized data store for photos, pricing, amenities, host details, and reviews.

## Core Directives for Autonomous Agents
1. **Design Token Adherence**:
   - Primary Accent: `#FF385C` (Airbnb Rausch / Coral).
   - Primary Text: `#222222` (Neutral 900).
   - Secondary Text: `#717171` (Neutral 500).
   - Dividers & Borders: `#EBEBEB` and `#DDDDDD`.
2. **Layout & Centering Constraints**:
   - Always enforce `max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10` for main content containers to maintain horizontal continuity across header, gallery, details, reviews, and footer.
3. **Accessibility**:
   - Ensure all interactive elements have semantic buttons, proper ARIA labels, and keyboard handlers.
4. **Build & Quality Gates**:
   - Zero linter errors (`npm run lint`).
   - Zero build warnings or bundle failures (`npm run build`).
