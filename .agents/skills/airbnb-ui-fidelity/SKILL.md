---
name: airbnb-ui-fidelity
description: Guidelines and automated checks for pixel-perfect Airbnb design fidelity, layout, micro-interactions, and visual tokens.
---

# Airbnb UI Fidelity Skill

## Overview
This skill governs the visual and behavioral standards required to reproduce Airbnb's production design system accurately.

## 1. Design Tokens & Typography
- **Font Stack**: `Plus Jakarta Sans`, `Circular`, `-apple-system`, `BlinkMacSystemFont`, `Roboto`, `sans-serif`.
- **Colors**:
  - Brand Primary (Rausch): `#FF385C`
  - Brand Dark: `#D70466`
  - Text Primary: `#222222`
  - Text Secondary: `#717171`
  - Text Subtle: `#B0B0B0`
  - Border: `#DDDDDD` / `#EBEBEB`
  - Background Light: `#F7F7F7`
- **Border Radii**:
  - Cards: `16px` (`rounded-2xl`)
  - Buttons: `8px` (`rounded-lg`) or Full Pill (`rounded-full`)
  - Hero Gallery: `16px` (`rounded-2xl`)

## 2. Component Parity Guidelines
1. **Hero Gallery (5-Photo Grid)**:
   - 1 dominant hero image on the left (50% width).
   - 4 supplementary images in a 2x2 grid on the right (50% width).
   - Subtle hover zoom (`scale-102` with cubic-bezier transition).
   - "Show all photos" floating button positioned at the bottom-right corner with 9-dot grid icon.
2. **Sticky Reservation Card**:
   - Floating position with dynamic price calculations based on selected dates and guest count.
   - Radiant gradient on Reserve button (`radial-gradient(#FF385C -> #E00B41 -> #D70466)`).
   - Special promo discount calculations (-10%).
3. **Photo Tour (Full-screen Overlay)**:
   - Horizontal category pills (`Living room 1`, `Living room 2`, `Full kitchen`, `Bedroom`, `Full bathroom`, `Gym`, `Exterior`, `Pool`, `Additional photos`).
   - Sticky top bar with Back, Share, and Save actions.
   - Smooth category scroll-into-view on pill click.
4. **Lightbox (Single Photo Viewer)**:
   - Centered large view with smooth fade/scale animation.
   - Arrow navigation (left/right circular buttons).
   - Full keyboard controls (`ArrowLeft`, `ArrowRight`, `Escape`).
   - Counter display (`X / Total`) with category subtitle.

## 3. Accessibility Standards
- Keyboard focus states and traps for modal overlays.
- `aria-modal="true"`, `role="dialog"`, descriptive `aria-label` attributes.
- Body scroll locking during active modal states.
