# Racks on Rent — Theme & Color System

This document specifies the complete color palette, CSS tokens, Tailwind variables, and usage guidelines for the Racks on Rent web application.

---

## 🎨 Core Brand Color Palette

| Color Name | Hex Code | CSS Variable | Tailwind Utility | Primary Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Deep Maroon** | `#6B0F1A` | `--color-primary-maroon` | `bg-[#6B0F1A]`, `text-[#6B0F1A]` | Primary Brand Color, Section Headers, Maroon Cards, Primary Buttons |
| **Dark Maroon** | `#3D0710` | `--color-dark-maroon` | `bg-[#3D0710]`, `text-[#3D0710]` | Primary Headings, Dark Maroon Backgrounds, High-Contrast Text |
| **Maroon Border / Dark Accent** | `#520a13` | `--color-maroon-dark-border` | `border-[#520a13]` | Card Borders, Hover States on Maroon elements |
| **Lemon Yellow** | `#FAFA33` | `--color-lemon-yellow` | `bg-[#FAFA33]`, `text-[#FAFA33]` | Accent Brand Color, Yellow Cards, Primary CTA Buttons, Badges |
| **Flipkart Yellow** | `#FAFA33` | `--color-flipkart-yellow` | `bg-[#FAFA33]`, `text-[#FAFA33]` | Popular Product Category Cards (Vibrant Brand Yellow Theme) |
| **Flipkart Yellow Border** | `#E5CE00` | `--color-flipkart-yellow-border` | `border-[#E5CE00]` | Category Card Border for Flipkart Yellow |
| **Yellow Border** | `#E6D900` | `--color-yellow-border` | `border-[#E6D900]` | Borders for Lemon Yellow Cards & Buttons |
| **Hover Lemon Yellow** | `#F2E500` | `--color-yellow-hover` | `hover:bg-[#f2e500]` | Hover States for Yellow Buttons & Interactive Cards |
| **Soft Lemon** | `#FFFBCC` | `--color-soft-lemon` | `bg-[#FFFBCC]`, `text-[#FFFBCC]` | Light Yellow Highlights, Subtle Badges |
| **Cream Background** | `#FFFDF5` | `--color-warm-white` | `bg-[#FFFDF5]` | Section Backgrounds, Page Surface Background |
| **Pure White** | `#FFFFFF` | `--color-pure-white` | `bg-white`, `text-white` | High-contrast Text on Maroon, Card Surfaces, Icons |

---

## 🖤 Neutral & Typography Colors

| Color Name | Hex Code | CSS Token | Usage |
| :--- | :--- | :--- | :--- |
| **Dark Text** | `#1F1F1F` | `--color-dark-text` | Body Text, Paragraphs |
| **Muted Text** | `#5F5F5F` | `--color-muted-text` | Subtitles, Captions, Secondary Labels |
| **Soft Border** | `#F0E2E4` | `--color-soft-border` | Light Dividers, Subtle Cards |
| **Neutral Border** | `#E5E7EB` | `border-neutral-200` | Subtle Outer Borders |
| **Antique Gold** | `#B8913A` | `--color-gold-border` | Metallic 3D Logo Borders & Accents |
| **Gold Inlay** | `#C9A84C` | `--color-gold-inlay` | Beveled Gold Highlights |

---

## 🛠️ CSS Variables (`globals.css`)

```css
@theme inline {
  --color-primary-maroon: #6B0F1A;
  --color-dark-maroon: #3D0710;
  --color-lemon-yellow: #FAFA33;
  --color-soft-lemon: #FFFBCC;
  --color-warm-white: #FFFDF5;
  --color-soft-border: #F0E2E4;
  --color-dark-text: #1F1F1F;
  --color-muted-text: #5F5F5F;

  --color-primary: var(--color-primary-maroon);
  --color-heading: var(--color-primary-maroon);
  --color-primary-dark: var(--color-dark-maroon);
  --color-background-maroon: var(--color-dark-maroon);
  --color-accent: var(--color-lemon-yellow);
  --color-accent-light: var(--color-soft-lemon);
  --color-background-soft: var(--color-soft-lemon);
  --color-background: var(--color-warm-white);
  --color-surface: var(--color-warm-white);
  --color-border: var(--color-soft-border);
  --color-text: var(--color-dark-text);
  --color-text-muted: var(--color-muted-text);
}
```

---

## 📐 Color Application & Theme Rules

1. **Alternating Grid Pattern**:
   When rendering cards in a grid layout (e.g. *Popular Product Categories*, *Platform Benefits*, *Featured Opportunities*, *About Us Stats*), alternate card styling between:
   - **Maroon Card**: `bg-[#6B0F1A] text-white border-[#520a13]` with Lemon Yellow icon box (`bg-[#FAFA33] text-[#3D0710] border-[#E6D900]`)
   - **Yellow Card**: `bg-[#FAFA33] text-[#3D0710] border-[#E6D900]` with Deep Maroon icon box (`bg-[#6B0F1A] text-white border-[#520a13]`)

2. **White Background Replacement Rule**:
   Sections or cards using `#FFFFFF` (`bg-white`) are styled using the brand palette (**Deep Maroon** `#6B0F1A` or **Lemon Yellow** `#FAFA33`), while preserving cream backgrounds (`#FFFDF5`).

3. **CTA Buttons**:
   - **Primary Action**: `bg-[#FAFA33] text-[#3D0710] font-bold border border-[#E6D900] hover:bg-[#f2e500]`
   - **Secondary Action (Dark context)**: `bg-[#6B0F1A] text-white font-bold hover:bg-[#520a13]`
