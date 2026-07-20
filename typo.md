# ApMoSys Landing Page Typography System

This document outlines the typographic standards, scales, and implementation details specifically used across the ApMoSys Enterprise Landing Page.

## 1. Font Families

The landing page utilizes a dual-font system mapped via Tailwind CSS configuration:

*   **Primary Font (Headings):** Defined via the `font-heading` Tailwind class. Used exclusively for large, impactful text such as Hero section titles, section headers, and the main navbar logo.
*   **Secondary Font (Body):** The default sans-serif font (often `font-sans`). Used for paragraph text, descriptions, navigation links, and microcopy to ensure maximum legibility.

## 2. Typography Scale & Responsive Behavior

The landing page employs a fluid typography scale that adapts based on the user's device screen size (Mobile -> Tablet -> Desktop).

### Headings (H1 - H3)
Used in the `Hero` and `CoreServices` components.
*   **H1 (Hero Main Title):** `text-3xl` (Mobile) -> `md:text-5xl` (Tablet) -> `lg:text-6xl` (Desktop)
*   **H2 (Section Titles):** `text-4xl` (Mobile) -> `sm:text-5xl` (Tablet) -> `lg:text-6xl` (Desktop)
*   **H3 (Card/Mega-Menu Titles):** `text-2xl` to `text-3xl`

### Body Text (Paragraphs & Descriptions)
*   **Hero Descriptions (Large Body):** `text-base` (Mobile) -> `md:text-lg` (Tablet) -> `lg:text-xl` (Desktop)
*   **Standard Paragraphs:** `text-base` (16px) or `text-sm` (14px)
*   **Microcopy (Nav dropdowns, Card desc):** `text-[13px]` to `text-[14px]` for dense information layouts.

## 3. Font Weights

*   **Normal (400):** Used for large, elegant Hero titles and standard paragraph text.
*   **Medium (500):** Used for interactive elements (Buttons, Navbar Links) and Card titles (e.g., Core Services boxes).
*   **Semibold (600):** Used for the main Brand Logo (`ApMoSys.`) and prominent Mega-Menu section headers.
*   **Bold (700):** Used sparingly for high-emphasis sub-headers.

## 4. Leading (Line Height) & Tracking (Letter Spacing)

*   **Line Heights:** 
    *   `leading-[1.1]` or `leading-tight`: Applied to large headings to prevent visual separation between multi-line titles.
    *   `leading-snug`: Applied to medium-length card descriptions (Core Services).
    *   `leading-relaxed`: Applied to long-form paragraph text to improve readability.
*   **Letter Spacing:**
    *   `tracking-normal`: Used for standard text.
    *   `tracking-tight`: Applied to specific UI elements (like the `TrustedBy` marquee text) for a more compact, modern look.

## 5. Text Colors & Contrast

Typography colors are strictly tied to the established dark and light themes:

*   **Dark Theme Sections (Hero, Footer, Navbar, Core Services):**
    *   Primary Text: `text-white`
    *   Secondary Text: `text-gray-200` or `text-gray-300` (for descriptions)
    *   Muted Text: `text-gray-400`
*   **Light Theme Sections (TrustedBy, Mega-Menu internals):**
    *   Primary Text: `text-[#242A56]` (Deep Navy) or `text-black`
*   **Brand Accents:**
    *   Blue Accent: `text-[#3B82F6]` (Used for hover states in Core Services)
    *   Red Accent: `text-primary-red` (Used for the dot in the ApMoSys logo)

## 6. CSS / Tailwind Implementation Notes

When building new components for the landing page, always adhere to these Tailwind utility patterns:
*   Always group responsive font sizes together (e.g., `text-base md:text-lg lg:text-xl`).
*   Ensure text on dark backgrounds (`bg-[#0A1128]` or `bg-[#0F172A]`) utilizes a drop shadow (`drop-shadow-sm` or `drop-shadow-md`) if layered over an image to guarantee accessibility.
