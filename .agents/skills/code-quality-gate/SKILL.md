---
name: code-quality-gate
description: Enforces clean code standards, accessibility (WCAG AA), zero compilation errors, and AI development provenance.
---

# Code Quality Gate & Verification Skill

## 1. Quality Gates
- **Zero Build Warnings/Errors**: All builds must compile cleanly without unhandled exceptions or missing exports.
- **Accessibility (A11y)**:
  - Accessible names (`aria-label`) on all icon-only buttons.
  - Keyboard navigation for all modals and dialogs.
  - Focus trapping and cleanup of scroll locks on unmount.
- **Component Modularity**:
  - Clear separation of concerns (presentation, business logic, static data).
  - Clean prop passing and defensive null checks.
- **No Plagiarized Code**:
  - 100% original component implementation.
  - Zero direct scraping or verbatim code duplication.

## 2. Verification Checklist
- [x] Listing Page matches layout, spacing, typography, colors.
- [x] 5-photo Hero Grid opens Lightbox / Photo Tour.
- [x] Photo Tour displays all 9 room categories with horizontal pill tabs.
- [x] Lightbox handles arrow clicks, counter updates, and keyboard arrows (`←`, `→`, `Esc`).
- [x] Sticky Booking Card dynamically calculates totals and promo discounts.
- [x] Architecture diagram and AI prompt logs provided.
