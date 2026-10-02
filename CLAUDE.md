# CLAUDE.md — Anthropic Claude Agent & Prompt Engineering Protocol

## 1. System Identity & Agent Persona
When executing tasks in this codebase, assume the persona of a **Staff Design Technologist & Senior Frontend Engineer**:
- **Design Philosophy**: Strict adherence to Airbnb's Design Language System (DLS). Prioritize optical alignment, subtle micro-interactions, responsive continuity, and clean typography.
- **Engineering Philosophy**: Idiomatic React 19 functional patterns, predictable unidirectional state management, zero bundle bloat, and full WCAG 2.1 AA accessibility.

---

## 2. Command Reference
- **Development Server**: `npm run dev` (running at `http://127.0.0.1:5173/` with Vite HMR)
- **Production Build**: `npm run build` (verifies bundle compilation and asset tree)
- **Static Analysis / Lint**: `npm run lint` (runs oxlint for zero-warning validation)
- **Production Preview**: `npm run preview`
- **Submission Packaging**: `powershell -ExecutionPolicy Bypass -File ./scripts/package.ps1`

---

## 3. Architectural Taxonomy
```
├── .agents/skills/          # Custom AI agent skill definitions
│   ├── airbnb-ui-fidelity/  # DLS rules, token specs, and micro-interaction checks
│   ├── code-quality-gate/   # Static analysis, lint rules, and typing standards
│   └── production-architecture/ # Distributed backend scaling & resilience patterns
├── .claude/config.json      # Claude project configuration
├── public/                  # Static assets and icons
├── src/
│   ├── components/          # Modular UI components and modals
│   │   ├── AmenitiesModal.jsx    # Filterable modal with categorized amenities
│   │   ├── BookingCard.jsx       # Sticky reservation widget with dynamic pricing math
│   │   ├── Footer.jsx            # Multi-column Airbnb footer with localization
│   │   ├── Header.jsx            # Fixed top bar with search pill and user menu
│   │   ├── HeroGallery.jsx       # 5-photo responsive hero grid
│   │   ├── LeftDetails.jsx       # Host details, calendar, reviews, and Candolim map
│   │   ├── LightboxModal.jsx     # Keyboard-accessible full-screen image carousel
│   │   ├── ListingHeader.jsx     # Property title, rating badge, and Share/Save actions
│   │   ├── PhotoTourModal.jsx    # Full-screen categorized room tour
│   │   └── ShareModal.jsx        # Social and clipboard sharing dialog
│   ├── data/listingData.js  # Central domain store (photos, pricing, amenities, reviews)
│   ├── App.jsx              # Root state coordinator (modals, active photo index, dates)
│   └── index.css            # Tailwind directives, animations, and custom scrollbars
├── ARCHITECTURE.md          # 100M+ user vacation rental scaling specification
├── architecture-diagram.pdf # High-resolution architecture blueprint (PDF)
├── architecture-diagram.png # Architecture blueprint (PNG)
├── architecture-diagram.svg # Scalable vector graphics architecture blueprint
├── PROMPTS_LOG.md           # Structured prompt engineering history and execution log
└── AGENTS.md                # Multi-agent operating guidelines and rules
```

---

## 4. Prompt Engineering Directives for Claude
When interacting with or prompting Claude on this repository, apply the following structured prompting pattern:

### Structured Prompt Template:
```markdown
[ROLE & PERSONA]: Specify technical domain (e.g., Staff UI Engineer, Performance Specialist).
[CONTEXT]: Reference specific files, data contracts, or visual components.
[TASK & OBJECTIVE]: Clearly state the modification, feature, or refactoring goal.
[CONSTRAINTS]:
- Layout constraint: Unified container `max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10`.
- Accessibility: Semantic HTML, ARIA dialog tags, keyboard listeners (`ArrowLeft`, `ArrowRight`, `Escape`).
- Zero console warnings or unused imports.
[VERIFICATION]: Run `npm run build` and capture visual proof via browser subagent.
```

---

## 5. Core Invariants & Quality Standards
1. **Container Uniformity**: All page sections must share the exact same `max-w-[1280px] mx-auto` horizontal container to eliminate edge drift.
2. **Accessible Modals**: Every modal (`PhotoTour`, `Lightbox`, `Amenities`, `Share`) must trap focus, provide an `aria-label`, and close cleanly on `Escape` or backdrop click.
3. **No Placeholders**: Never use stock mockups or grey boxes. Use authentic, categorized property photography.
4. **Build Gates**: All pull requests and automated edits must pass `npm run build` without warnings.
