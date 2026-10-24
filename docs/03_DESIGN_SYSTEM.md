# Design System Baseline: Vignesh & Sowmi Wedding Celebration

- **Project:** Vignesh & Sowmi (Gowri) Wedding Website
- **Version:** 1.0.0 (Phase 0 Baseline)
- **Design Philosophy:** Regally South Indian, modernly minimal, emotionally warm, and fully accessible.

---

## 1. Color Palette Tokens

The color palette is deliberately derived from the couple's genuine wedding photographs (golden zari yellow silk saree, turquoise blouse, vermilion kumkum details, and sacred granite mandapam):

| Token Name | Hex Code | HSL Equivalent | Role & Context |
|---|---|---|---|
| `--color-gold-500` | `#C59B27` | `hsl(44, 67%, 46%)` | **Primary Accent**: Temple gold foil headers, borders, key highlights |
| `--color-gold-400` | `#CFB05C` | `hsl(44, 55%, 58%)` | **Lighter Gold**: Hover states, glowing accents, badges |
| `--color-gold-200` | `#E7D8AE` | `hsl(44, 56%, 79%)` | **Subtle Gold Border**: Frosted glass borders, divider lines |
| `--color-ivory-100` | `#FDFCF9` | `hsl(45, 40%, 99%)` | **Crisp Ivory**: Card foreground, modals |
| `--color-ivory-200` | `#FAF7F2` | `hsl(38, 40%, 96%)` | **Page Canvas**: Warm, paper-like background replacing harsh pure white |
| `--color-maroon-700` | `#7D1824` | `hsl(353, 68%, 29%)` | **Sacred Kumkum / Muhurtham**: Wedding ceremony badges, date pills |
| `--color-emerald-700` | `#1B4D3E` | `hsl(161, 48%, 21%)` | **Traditional Silk Green**: Reception accent, secondary festive highlight |
| `--color-charcoal-900` | `#1A1A1A` | `hsl(0, 0%, 10%)` | **Primary Body Text**: High contrast WCAG AAA legible dark text |
| `--color-charcoal-700` | `#4A4A4A` | `hsl(0, 0%, 29%)` | **Secondary Text**: Meta information, dates, addresses |

---

## 2. Typography Hierarchy

### 2.1 Font Families
1. **Romantic Script (`font-script`)**: `'Great Vibes', cursive`
   - Role: Couple's joint signature, "Vignesh & Sowmi", emotional decorative flourishes.
2. **Display Serif (`font-serif`)**: `'Playfair Display', 'Cormorant Garamond', Georgia, serif`
   - Role: Hero headings, section titles, event names, countdown numbers.
3. **Body Sans (`font-sans`)**: `'Inter', 'Montserrat', -apple-system, sans-serif`
   - Role: Time, addresses, descriptions, buttons, navigational UI.
4. **Tamil Literary Font (`font-tamil`)**: `'Tiro Tamil', 'Noto Serif Tamil', serif`
   - Role: Thirukkural verses, Tamil event names, cultural subtitles.

### 2.2 Type Scale
- **Display 1 (Hero Title)**: `clamp(2.75rem, 8vw, 5.5rem)` / Line-height: `1.1`
- **Heading 1 (Section Titles)**: `clamp(2rem, 5vw, 3.25rem)` / Line-height: `1.2`
- **Heading 2 (Card Titles)**: `clamp(1.5rem, 3.5vw, 2.25rem)` / Line-height: `1.25`
- **Heading 3 (Sub-sections)**: `1.25rem` / `1.5rem` / Line-height: `1.3`
- **Body Large**: `1.125rem` (18px) / Line-height: `1.6`
- **Body Regular**: `1rem` (16px) / Line-height: `1.5`
- **Caption / Meta**: `0.875rem` (14px) / Line-height: `1.4`

---

## 3. Spacing, Containers & Layout Breakpoints

### 3.1 Container Widths
- **Max Canvas Width**: `1280px` (`max-w-7xl`)
- **Reading Column Width**: `768px` (`max-w-3xl`) for poetry and invitation stanzas
- **Card Grid Container**: `1024px` (`max-w-5xl`) for dual Reception & Muhurtham cards

### 3.2 Responsive Breakpoints
- **Mobile (`sm`)**: `< 640px` (single-column fluid stacking, full-width touch cards)
- **Tablet (`md`)**: `640px - 1023px` (compact grid, side-by-side portraits)
- **Desktop (`lg`)**: `1024px - 1279px` (full layout, side-by-side event tilt cards)
- **Large Desktop (`xl`)**: `≥ 1280px` (generous whitespace, 64px section padding)

---

## 4. Elevation, Glassmorphism & Borders

- **Glass Surface**: `background: rgba(253, 252, 249, 0.75); backdrop-filter: blur(12px);`
- **Gold Border**: `1px solid rgba(197, 155, 39, 0.28)`
- **Rounded Corners**:
  - Small elements / badges: `rounded-full` or `rounded-md` (6px)
  - Interactive cards: `rounded-2xl` (16px)
  - Hero panels & portraits: `rounded-3xl` (24px)
- **Shadows**:
  - Subtle Elevation: `box-shadow: 0 10px 30px -10px rgba(197, 155, 39, 0.18)`
  - Hover Card: `box-shadow: 0 20px 40px -15px rgba(197, 155, 39, 0.25)`

---

## 5. Image Presentation & Aspect Ratios

- **Original Couple Photograph**: Formatted in `aspect-[3/4]` or natural ratio with a sacred double gold border frame.
- **Individual Portraits**: Formatted in portrait aspect `aspect-[3/4]` or `aspect-[9/16]` with soft inner vignettes and no face cropping.
- **Invitation Card**: Presented with zoomable light-box view to allow elderly family members to read original print easily.

---

## 6. Motion & Accessibility Principles

- **Micro-interactions**: Subtle hover scaling (`scale-[1.02]`), gentle floating animations for sacred motifs, and smooth countdown transitions.
- **Reduced Motion**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- **Focus Indicators**: All interactive elements (buttons, links, audio toggles) feature high-contrast gold focus rings (`focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:outline-none`).
- **Color Contrast**: All body text achieves a minimum contrast ratio of `7.5:1` against ivory canvas (exceeding WCAG AAA `7:1`).
