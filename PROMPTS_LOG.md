# AI Prompt Engineering Log & Execution Trajectory

This document records the structured prompt engineering sequence utilized during the end-to-end development, visual redesign, architectural scaling, and quality verification of the **Playpower Airbnb Take-Home Assignment** (*"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"*).

Each phase reflects structured prompt engineering patterns, including **Role/Persona Framing**, **Context Grounding**, **Boundary Constraints**, **Chain-of-Thought (CoT) Guidelines**, and **Deterministic Output Specifications**.

---

## 1. System Ingestion & Design System Scaffolding

### Prompt 1.1: Environment & Token Architecture Definition
```markdown
[ROLE & PERSONA]
You are a Staff Frontend Architect and Design System Specialist with deep expertise in Airbnb's visual language, React 19, and Tailwind CSS.

[OBJECTIVE]
Scaffold a production-grade single-page application replicating the Airbnb listing for "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10". Establish a modular design token foundation mirroring Airbnb's Design Language System (DLS).

[TECHNICAL CONSTRAINTS & REQUIREMENTS]
1. Framework: React 19 with Vite 8 tooling; zero legacy bundle bloat.
2. Design Tokens in tailwind.config.js:
   - Primary Brand Accent: Rausch (#FF385C)
   - Typography Stack: Inter / System Sans-Serif with strict font-weight and line-height scales.
   - Neutral Hierarchy: Charcoal (#222222), Subdued Grey (#717171), Muted (#B0B0B0), Dividers (#EBEBEB, #DDDDDD).
   - Custom utilities: Smooth modal transitions, subtle elevations (shadow-card, shadow-modal), and button active scaling.
3. Clean separation of concerns between presentation, layout wrappers, and data sources.

[DELIVERABLE]
Generate tailwind.config.js, src/index.css, and root App.jsx layout scaffolding. Ensure clean build and zero runtime dependencies on unvetted libraries.
```

---

## 2. Listing Data Schema & Asset Pipeline

### Prompt 2.1: Domain Data Modeling & Media Curation
```markdown
[ROLE & PERSONA]
You are a Senior Full-Stack Engineer and Content Modeler.

[CONTEXT]
We need an authentic, structured data store representing the listing "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10" in Goa, India.

[INSTRUCTIONS]
Create `src/data/listingData.js` adhering to the following schema:
1. Property Meta: Title, rating (4.92), review count (68+), superhost status, guest capacity (2 guests · 1 bedroom · 1 bed · 1 bath).
2. Media Assets:
   - Curation of high-resolution, CDN-hosted imagery categorized by room spaces:
     * Living Room, Bedroom, Private Jacuzzi/Bathroom, Swimming Pool & Deck, Patio/Exterior.
   - Flattened gallery array with unique IDs, high-res URLs, aspect ratios, and semantic alt labels.
3. Pricing & Booking Policy:
   - Base night rate (₹3,850), promotional discount rate (-10%), cleaning fee (₹650), Airbnb service fee (₹420).
4. Amenities Matrix:
   - 35+ items categorized into: Bathroom, Bedroom & Laundry, Entertainment, Heating/Cooling, Home Safety, Internet, Outdoor.
5. Ratings Breakdown:
   - 6 category scores (Cleanliness, Accuracy, Communication, Location, Check-in, Value) with star distributions.

[QUALITY CRITERIA]
No dead image URLs or generic placeholder graphics. All assets must accurately reflect the advertised luxury boutique apartment in Candolim.
```

---

## 3. Core Component Architecture & Interaction Design

### Prompt 3.1: Component Hierarchy & Accessible Modals
```markdown
[ROLE & PERSONA]
You are a Lead Frontend Engineer specializing in WCAG 2.1 AA accessibility and state management.

[OBJECTIVE]
Implement the core visual components and modal overlays for the listing experience:

[COMPONENT BREAKDOWN]
1. `Header.jsx`: Sticky navigation containing the Airbnb brand mark, minimized search pill, host CTA, language selector, and user profile pill with notification badge.
2. `HeroGallery.jsx`: Modern 5-photo grid (1 dominant primary, 4 secondary) with rounded borders, subtle hover transitions, and an interactive "Show all photos" floating trigger.
3. `PhotoTourModal.jsx`: Full-screen categorized room tour with horizontal category chips (All, Bedroom, Living Room, Jacuzzi, Pool), smooth tab switching, and photo grids.
4. `LightboxModal.jsx`: Accessible carousel viewer supporting:
   - Full keyboard navigation: [ArrowLeft] Previous, [ArrowRight] Next, [Escape] Close.
   - Live photo index counter ("X / Y").
   - Bottom thumbnail strip with active indicator.
5. `BookingCard.jsx`: Sticky reservation widget calculating nights, discounts, service fees, and grand total in real-time.
6. `AmenitiesModal.jsx` & `ShareModal.jsx`: Accessible modal dialogs with category navigation and clipboard API integration.

[STATE ARCHITECTURE]
Centralize active modal states, date selection ranges, guest counts, and active lightbox indices in `App.jsx` using predictable unidirectional data flow.
```

---

## 4. Senior Design Technologist Visual Redesign

### Prompt 4.1: UI/UX Modernization & Micro-Interactions
```markdown
[ROLE & PERSONA]
Act as a Principal Design Technologist and UI/UX Director with 20 years of experience designing world-class travel platforms.

[TASK]
Conduct a comprehensive aesthetic audit and upgrade of the entire application. Elevate the interface from an MVP to a premier, modern Airbnb web experience.

[KEY FOCUS AREAS]
1. Visual Polish:
   - Introduce subtle micro-animations (active button scales, image zoom on hover, pill active highlights).
   - Modernize iconography using clean SVG line icons with balanced optical weights.
   - Refine the Host and Guest Favorite badges with subtle borders and premium typography.
2. Booking Sidebar Experience:
   - Ensure the card is sticky at `top-24` to prevent clipping behind the global header during scroll.
   - Include date input trigger, dynamic nights calculation, clear breakdown rows, and high-contrast "Reserve" CTA.
3. Review & Map Sections:
   - Upgrade review ratings to a balanced 3-column scorecard with metric sliders and verified guest cards.
   - Replace generic map tiles with high-definition aerial coastal view of Candolim, Goa with localized landmarks.

[VERIFICATION]
Inspect components across desktop, tablet, and mobile breakpoints to ensure zero layout breakage or awkward word wrapping.
```

---

## 5. Geometry, Centering & Layout Continuity Audit

### Prompt 5.1: Mathematical Alignment & Responsive Container Continuity
```markdown
[ROLE & PERSONA]
You are a Senior Layout & CSS Specialist.

[DIAGNOSTIC & TASK]
Inspect the rendered DOM for horizontal alignment discrepancies across all 5 scroll sections:
1. Header & Search Pill
2. Hero Gallery & Title Block
3. Content Split (Left Detail Column vs Right Sticky Card)
4. Reviews & Rating Grid
5. Location, Host Info, Things to Know, and Global Footer

[EXECUTION STEPS]
1. Unified Container Grid:
   - Wrap all major sections in `max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10` to guarantee strict horizontal continuity.
2. Two-Column Proportions:
   - Left details column: `flex-1 min-w-0 xl:max-w-[680px]`.
   - Right booking widget: `w-[370px]` fixed width with sticky positioning.
3. Calendar Widget Geometry:
   - Audit the date picker grid calculation. Compute the exact first-day weekday offset so day numbers align perfectly with day-of-week headers (Su/Mo/Tu/We/Th/Fr/Sa).

[VERIFICATION CRITERIA]
Zero horizontal scrollbars, zero unaligned margins, and continuous vertical guide alignment from top navigation to bottom footer.
```

---

## 6. Verification, Architecture Scaling & Packaging

### Prompt 6.1: Automated Verification, Enterprise Architecture & Deliverables
```markdown
[ROLE & PERSONA]
You are a Principal Cloud Architect and Release Engineer.

[TASKS]
1. Automated Quality Gate:
   - Run `npm run build` and linter checks to ensure zero errors and zero warnings.
   - Launch automated browser subagent to capture high-resolution scroll snapshots across all sections.
2. Enterprise Architecture Documentation:
   - Produce a production architecture specification (`ARCHITECTURE.md`) and diagrams (`architecture-diagram.svg`, `architecture-diagram.pdf`, `architecture-diagram.png`) detailing:
     * Global Anycast Edge & CDN caching.
     * API Gateway with JWT verification and rate limiting.
     * Event-driven microservices via Apache Kafka.
     * Double-booking prevention using distributed Redis locks (Redlock algorithm).
     * Sharded Elasticsearch clusters for geosearch.
3. Deliverables Packaging:
   - Configure agent skill profiles in `.agents/skills/` (`airbnb-ui-fidelity`, `production-architecture`, `code-quality-gate`).
   - Create AI configuration guides (`AGENTS.md`, `CLAUDE.md`, `.claude/config.json`).
   - Bundle all source files, diagrams, configs, and prompt histories into a clean zip archive excluding `node_modules`.
```
