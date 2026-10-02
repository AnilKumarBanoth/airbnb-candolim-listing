# Playpower Take-Home Task: Airbnb-Clone App

A pixel-perfect, production-grade recreation of the Airbnb listing page and its two overlay views (Photo Tour and Lightbox) for **"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"**.

Built as part of the **Playpower AI-Native Developer Assessment**.

---

## 🌟 Key Features & Views

### 1. Main Listing Page
- **Navigation Header**: Sticky Airbnb brand logo, pill search bar, language toggle, and responsive profile menu.
- **Listing Title & Actions**: Exact property title with interactive **Share** (with copy link & social shortcuts) and **Save** (persisted wishlisting with animated heart).
- **Hero Photo Grid**: Authentic 5-photo layout with hover zoom, rounded container, and bottom-right `"Show all photos"` action button.
- **Content Column**:
  - Room statistics and host badge (*"Hosted by Mirashya Homes"* - Superhost).
  - Highlight cards (Guest favourite, Fast Wi-Fi 120 Mbps, Self check-in with keypad, Free cancellation).
  - Expandable property description.
  - "Where you'll sleep" bedroom card.
  - "What this place offers" amenity grid + interactive **"Show all 35 amenities"** modal with live search filter.
  - Interactive calendar preview with preselected reservation range.
  - Verified guest reviews with 6-category rating metrics and authentic review cards.
  - Candolim neighborhood location guide and map pin.
  - House rules, safety features, and cancellation policies.
- **Sticky Booking Card**:
  - Dynamic nightly rate calculation (`₹4,850/night`).
  - Interactive check-in / checkout date inputs.
  - Guest counter dropdown (adults, children, infants) with capacity limits.
  - Radiant Airbnb rose gradient **Reserve** button with confirmation feedback.
  - Dynamic price breakdown calculation (nights × price, 10% promo discount, cleaning fee, service fee, and total).
  - Floating 10% promo toast banner at bottom-right with dismiss control.

### 2. Full-Screen Photo Tour Overlay
- Opened immediately from **"Show all photos"** or any hero image.
- Sticky top navigation with back button, share, and save.
- Horizontal category pill navigation:
  - `Living room 1`, `Living room 2`, `Full kitchen`, `Bedroom`, `Full bathroom`, `Gym`, `Exterior`, `Pool`, `Additional photos`.
- Smooth scroll to category on pill selection.
- Room amenities subtitle for each category.
- Clicking any photo opens the **Lightbox Viewer** with that exact image selected.

### 3. Full-Screen Lightbox Viewer
- Minimalist photo viewer with dark ambient backdrop.
- Full keyboard navigation:
  - `←` (`ArrowLeft`): Previous photo.
  - `→` (`ArrowRight`): Next photo.
  - `Esc` (`Escape`): Close lightbox / back to gallery.
- Circular previous/next arrow buttons.
- Photo index counter (`1 / 20`) with category indicator and captions.
- Bottom thumbnail strip for instant jumping across photos.

---

## 🏗️ Production Architecture Deliverables

Alongside the application code, this project provides a production-grade architecture blueprint for scaling a vacation-rental marketplace to 100M+ users:

- **Visual Diagram**: [`architecture-diagram.svg`](./architecture-diagram.svg)
- **Interactive Viewer & PDF Exporter**: [`architecture-viewer.html`](./architecture-viewer.html) (Open in any browser and click *"Print / Save as PDF"*).
- **Architecture Specification**: [`ARCHITECTURE.md`](./ARCHITECTURE.md) (Details edge caching, Saga distributed transactions, Redis Redlock for zero double-bookings, Kafka event streaming, and geo-spatial search).

---

## 🤖 AI Sub-Agent & Skill Configs

Per task instructions, custom AI sub-agent and skill configuration files are included under [`.agents/skills/`](./.agents/skills/):
- [`.agents/skills/airbnb-ui-fidelity/SKILL.md`](./.agents/skills/airbnb-ui-fidelity/SKILL.md)
- [`.agents/skills/production-architecture/SKILL.md`](./.agents/skills/production-architecture/SKILL.md)
- [`.agents/skills/code-quality-gate/SKILL.md`](./.agents/skills/code-quality-gate/SKILL.md)

The AI prompt sequence is documented in [`PROMPT_SEQUENCE.md`](./PROMPT_SEQUENCE.md).

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation & Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized production bundle in `./dist`.

---

## 📦 Submission Package

To generate the required submission zip file containing all source code, architecture diagrams, and documentation:
```bash
npm run package-submission
# or via powershell:
# powershell -ExecutionPolicy Bypass -File ./scripts/package.ps1
```
This generates `airbnb-clone-submission.zip` ready for email submission.
