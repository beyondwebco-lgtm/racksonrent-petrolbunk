# Racks on Rent — Design System

This document outlines the core tokens, typography, and component structures used across the Racks on Rent Petrol Bunk platform. The design system is centralized in `app/globals.css` using Tailwind's CSS variable setup.

## 1. Color Palette

### Brand Yellow (Flipkart-Inspired)
The primary action color, providing an energetic and commercial feel.
- **Base:** `#F8D706` (`var(--yellow)`)
- **Bright:** `#F8E831` (`var(--yellow-bright)`)
- **Soft (Backgrounds):** `#FFF8C7` (`var(--yellow-soft)`)
- **Pale (Highlights):** `#FFFDF0` (`var(--yellow-pale)`)
- **Hover:** `#E8C900` (`var(--yellow-hover)`)

### Brand Dark (Charcoals & Maroons)
Used for typography, dark mode strips, and brand identity retention.
- **Black:** `#111111` (`var(--black)`) — Used for primary headings and dark strips.
- **Charcoal:** `#242424` (`var(--charcoal)`) — Used for secondary dark backgrounds.
- **Maroon:** `#650000` (`var(--maroon)`) — Legacy brand identity, used selectively for headings on light sections.
- **Maroon Dark:** `#650000` (`var(--maroon-dark)`) — Deep contrast for maroon elements.

### Surfaces & Text
- **Surface (White):** `#FFFFFF` (`var(--surface)`)
- **Surface (Warm):** `#FFFEF8` (`var(--surface-warm)`)
- **Border:** `#E8E3D5` (`var(--border)`)
- **Text (Primary):** `#111111` (`var(--text)`)
- **Text (Muted):** `#66645D` (`var(--text-muted)`)

---

## 2. Typography

The platform utilizes three distinct fonts loaded via `next/font/google`:

1. **Manrope** (`--font-manrope`): Default sans-serif for body copy, buttons, and UI elements.
2. **Archivo Black** (`--font-archivo`): Heavy, commercial sans-serif used for major structural headings (Hero, Pricing, Roles).
3. **DM Serif Display** (`--font-dm-serif`): Elegant, editorial serif used for premium content sections (Showcase, Categories, FAQ).

### Fluid Typography Utilities
- `.hero-title`: `clamp(2.4rem, 5.5vw, 5.5rem)`
- `.section-title-archivo`: Archivo Black heading, `clamp(2rem, 4vw, 3.75rem)`
- `.section-title-dm`: DM Serif heading, `clamp(2rem, 4vw, 3.75rem)`
- `.card-title`: Component headers, `clamp(1rem, 1.3vw, 1.25rem)`
- `.body-copy`: Readable paragraph text, `clamp(0.95rem, 1.1vw, 1.075rem)`

---

## 3. Component Utilities

### Buttons
- `.btn-primary`: Yellow background, black text. Used for main calls to action (e.g., "List Your Space").
- `.btn-secondary`: Black background, white text. Used for secondary actions (e.g., "Showcase Your Brand").

### Cards
- `.card-base`: Standardized white card with subtle border and shadow on hover.

### Sections
- `.section-padding`: Standard top/bottom padding `clamp(4rem, 8vw, 8rem)`.
- `.container-main`: Standard max-width container (`1200px`) with responsive side padding.

---

## 4. Section Rhythm

To prevent visual fatigue, the homepage alternates backgrounds systematically:
1. **Hero:** White (`#FFFFFF`)
2. **Showcase:** Pale Yellow (`#FFF8C7`)
3. **Categories:** White (`#FFFFFF`)
4. **Space Types:** Warm White (`#FFFEF8`)
5. **How It Works:** Charcoal (`#111111`)
6. **Roles:** White (`#FFFFFF`)
7. **Advantages:** Warm White (`#FFFEF8`)
8. **Pricing:** Pale Yellow (`#FFF8C7`)
9. **FAQ:** White (`#FFFFFF`)

---

## 5. Animations

All animations respect `prefers-reduced-motion` at the OS level.
- `.animate-reveal-up`: Standard slide-up fade (550ms)
- `.animate-cta-btn-1` / `.animate-cta-btn-2`: Staggered button entrances
- `.nav-link-hover`: Custom yellow underline sliding effect on hover
