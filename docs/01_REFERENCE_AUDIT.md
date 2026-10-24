# Reference Website Audit: Santhosh & Vanathi Wedding Website

- **Audited Target URL:** [https://wedding.santhoshnc.me/](https://wedding.santhoshnc.me/)
- **Auditor:** Senior Full-Stack Engineer, Creative Director & QA Baseline Team
- **Project Target:** Vignesh & Sowmi (Gowri) Wedding Website
- **Phase:** Phase 0 — Foundation, Reference Audit & Design Baseline
- **Audit Date:** October 2026

---

## 1. Executive Summary & Verification Methodology

The reference website at `https://wedding.santhoshnc.me/` was audited by inspecting its live document object model (DOM), complete CSS stylesheet (`css/style.css`), client-side JavaScript architecture (`js/main.js`), and media assets.

Every observation in this audit is classified into one of three strict verification levels:
- **[VERIFIED FROM REFERENCE]**: Confirmed by direct inspection of the live DOM, style rules, or script execution.
- **[PROPOSED ADAPTATION]**: Deliberately refined or personalized for Vignesh & Sowmi to elevate aesthetics, performance, cultural resonance, and code quality.
- **[NOT YET VERIFIED]**: External constraints or media properties not directly verifiable without runtime telemetry or couple feedback.

---

## 2. Comprehensive Section-by-Section Reference Audit

### 2.1 Overall Visual Style and Mood
- **[VERIFIED FROM REFERENCE]**:
  - The reference site blends romantic Tamil cinematic pop-culture celebration with modern interactive web elements.
  - Core aesthetic uses a clean white/ivory base (`--bg-color: #fff`, `--primary-color: #ffffff`) with high-energy pink/magenta accents (`--accent-color: #ff80ab`, `#ff4081`, `#e91e63`) and frosted glass panels (`--glass-bg: rgba(255, 255, 255, 0.4)` with `backdrop-filter: blur(10px)`).
  - Mood is youthful, playful, and emotionally celebratory, incorporating cinematic dialogs (Vadivelu/Tamil movie references), FLAMES game nostalgia, and traditional Tamil poetry (Thirukkural).
- **[PROPOSED ADAPTATION]**:
  - Transition from the reference's dominant neon/bubblegum pink (`#ff80ab`) toward a more regal, timeless South Indian wedding palette inspired by Vignesh & Sowmi's actual photographs: **warm temple gold** (`#D4AF37`), **sacred turmeric/mustard** (`#E5A93C`), **rich royal emerald** (`#1B4D3E`), **deep vermilion/kumkum** (`#8B1E2D`), and **pure warm ivory/kalyana mandapam cream** (`#FAF7F2`).
  - Maintain the playful warmth and cultural charm while introducing a more editorial, high-end wedding invitation feel.

### 2.2 Main Page Sections & Sequence
- **[VERIFIED FROM REFERENCE]**:
  The reference site renders sequentially:
  1. **Fullscreen Cinematic Loader / Gate**: Black overlay with photo crossfade, Tamil title "*Kalyanam panna porom… adhuvum mass ah panna porom!*", and interactive entry trigger button "*Arambikalama!!*".
  2. **Landing Hero Section**: Ambient background, couple names in script font, wedding date, romantic intro copy, countdown clock, and dual CTA buttons ("*Download Invitation*" and "*Watch Trailer*").
  3. **Sticky Scroll Couple Encounter**: Sticky pin section (`.sticky-scroll-section`) where cutout characters of groom and bride slide inward across the viewport, meet with a romantic glow, and reveal a corner Thirukkural card.
  4. **Wedding Roadmap (Timeline)**: Vertical path with an animated heart following a dotted line, charting milestones (*First Meet*, *Engagement*, *Eternal Bond*, *Wedding Day*) paired with memes/animations.
  5. **Interactive Dashboard with Sticky Tabbed Navigation**:
     - *Tab 1: Meme Mode* — Random Tamil marriage memes on button click.
     - *Tab 2: Love Destiny* — Animated letter cancellation FLAMES calculator.
     - *Tab 3: Events* — 3D tilt cards for Reception and Muhurtham.
     - *Tab 4: Location* — "Love Airlines" boarding pass styled ticket with QR code and Google Maps link.
  6. **Invitation Download Trigger Section**: Secondary prominent invitation CTA.
  7. **Scratch Card Section**: HTML5 interactive canvas scratch card revealing developer agency credits.
  8. **Site Footer**: Humorous Tamil tagline "*Kaththukita moththa vithaiyu erakirukom*", love credits, and developer portfolio links.
  9. **Modals**: Fullscreen popup modal for video trailer / invitation image.
- **[PROPOSED ADAPTATION]**:
  - For Phase 0 and Phase 1, preserve this compelling narrative sequence while modularizing each section into independent, typed React components.
  - Allow guest navigation to skip directly to critical details (Events & Venues) without being forced through game interactions if they are looking for date/location on their phone while traveling.

### 2.3 Navigation Structure
- **[VERIFIED FROM REFERENCE]**:
  - Floating top-right controls: Music toggle button (`#music-toggle` with audio icon) and bilingual Language toggle button (`#lang-toggle` displaying "த" or "EN").
  - In-page dashboard navigation: Pill-shaped frosted glass bar (`.dashboard-nav`) with four tab buttons that smooth-scroll to their respective sections (`#meme-sec`, `#destiny-sec`, `#events-sec`, `#location-sec`).
- **[PROPOSED ADAPTATION]**:
  - Implement a sticky/floating top navigation bar with clean accessible links to: *Home*, *Our Story*, *Events & Muhurtham*, *Venues & Map*, and *Celebration / FLAMES*.
  - Keep the floating music toggle with clear active/muted audio states, respecting user gesture constraints and `prefers-reduced-motion`.

### 2.4 Hero Section Composition
- **[VERIFIED FROM REFERENCE]**:
  - Centered hero layout with full-bleed image background under dark gradient overlay.
  - Eyebrow kicker: "*Wedding Invitation*".
  - Couple Names: Large cursive display font (*Great Vibes*).
  - Date and subtitle in elegant serif (*Playfair Display* / *Cormorant Garamond*).
  - Glass-morphic live countdown panel with 4 time units (Days, Hours, Minutes, Seconds).
  - Action buttons with subtle glowing border hover effect (`.glow-btn`).
- **[PROPOSED ADAPTATION]**:
  - For Vignesh & Sowmi, use their authentic couple portrait (`IMG-20260612-WA0001.jpg.jpeg`) in the traditional mandapam courtyard with high-fidelity, artful composition.
  - Use gold foil typography accents, warm ivory backdrops, and subtle ornamental traditional border frames.

### 2.5 Typography Hierarchy
- **[VERIFIED FROM REFERENCE]**:
  - Display Script: `'Great Vibes', cursive` (Used for couple names and destiny results).
  - Primary Headings: `'Cormorant Garamond', serif` and `'Playfair Display', serif`.
  - Body Text: `'Montserrat', sans-serif` and `'Inter', sans-serif`.
  - Tamil Script: `'Tiro Tamil', serif` (Used for Thirukkural, Tamil translations, and cultural phrases).
  - Decorative Title: `'Abril Fatface', serif` (Used for loader heading).
- **[PROPOSED ADAPTATION]**:
  - Standardize the font pairing via Google Fonts with optimized `next/font`:
    - Display Serif: **Cinzel Decorative** / **Playfair Display** (majestic, regal wedding invitations).
    - Romantic Script: **Great Vibes** (classic couple signature).
    - Body Sans: **Inter** / **Plus Jakarta Sans** (clean, crisp legibility on mobile screens).
    - Tamil Typography: **Tiro Tamil** or **Noto Serif Tamil** (authentic Tamil literary typesetting for Thirukkural and invitation poetry).

### 2.6 Color Palette and Background Treatments
- **[VERIFIED FROM REFERENCE]**:
  - Primary Pink: `#ff80ab`
  - Hot Pink / Accent: `#ff4081`, `#e91e63`
  - Dark Pink: `#c2185b`
  - Background: `#ffffff`
  - Text: `#000000` (high contrast)
  - Glass Panels: `rgba(255, 255, 255, 0.4)` to `0.85` with `backdrop-filter: blur(12px)`.
- **[PROPOSED ADAPTATION]**:
  - Vignesh & Sowmi's photos feature gold sarees, teal accents, and temple granite pillars. We formulate a harmonized palette:
    - *Temple Gold*: `#C59B27` / `#D4AF37`
    - *Deep Maroon / Kunkumam*: `#7D1824`
    - *Royal Emerald*: `#1B4D3E`
    - *Silken Ivory*: `#FAF8F5`
    - *Deep Charcoal / Text*: `#1A1A1A`
    - *Warm Muted Gold Border*: `rgba(197, 155, 39, 0.3)`

### 2.7 Image Layouts and Aspect Ratios
- **[VERIFIED FROM REFERENCE]**:
  - Loader image: Full-screen background cover (`100vw x 100vh`).
  - Couple character cutouts: Transparent PNG silhouettes moving across the viewport.
  - Roadmap media: 4:3 and 1:1 rounded image/gif containers.
  - Boarding pass: Ticket stub with 1:1 QR code and 4:3 boarding meme image.
- **[PROPOSED ADAPTATION]**:
  - Respect the authentic source asset dimensions:
    - Couple Portrait: 3:4 aspect ratio (`1200 x 1600`).
    - Bride Portrait: 9:16 aspect ratio (`720 x 1280`).
    - Groom Portrait: 3:4 aspect ratio (`1200 x 1600`).
    - Invitation Card: 9:16 aspect ratio (`720 x 1280`).
  - Implement container aspect ratios (`aspect-[3/4]`, `aspect-[9/16]`) with `object-fit: cover` and intentional focal point centering (`object-position: center 20%`) to guarantee no faces or clothing are cropped awkwardly.

### 2.8 Event Countdown or Date Presentation
- **[VERIFIED FROM REFERENCE]**:
  - JavaScript `setInterval` calculating difference against fixed timestamp: `new Date("May 27, 2026 09:00:00")`.
  - Displays Days, Hours, Minutes, Seconds with `padStart(2, '0')`.
- **[PROPOSED ADAPTATION]**:
  - Target Date for Vignesh & Sowmi:
    - Reception: **10 November 2026 at 6:00 PM IST** (`2026-11-10T18:00:00+05:30`).
    - Muhurtham: **11 November 2026 at 4:30 AM IST** (`2026-11-11T04:30:00+05:30`).
  - Use SSR-safe countdown calculation in React (handling hydration mismatches gracefully) with countdown to the nearest milestone (Reception, then automatically transitioning to Muhurtham).

### 2.9 Ceremony and Reception Information Architecture
- **[VERIFIED FROM REFERENCE]**:
  - Event cards in a 2-column responsive grid (`.events-grid`).
  - Each card features: Event Title, Calendar Date, Time with clock icon, Venue Name with pin icon, and descriptive landmark text.
  - 3D interactive tilt effect on mouse movement (`.tilt-card`).
- **[PROPOSED ADAPTATION]**:
  - Event 1: **Reception**
    - Date: Tuesday, 10th November 2026
    - Time: 6:00 PM onwards
    - Venue: Namperumal Thirumana Mandapam, Vaiyappamalai
  - Event 2: **Marriage (Muhurtham)**
    - Date: Wednesday, 11th November 2026
    - Time: 4:30 AM to 6:00 AM (Auspicious Brahma Muhurtham)
    - Venue: Sri Arulmigu Kailasanathar Thirukovil, Elur
  - Include quick "Add to Google Calendar", "Apple Calendar (.ics)", and "Get Directions" buttons.

### 2.10 Animations, Hover States, Scroll Effects, Transitions
- **[VERIFIED FROM REFERENCE]**:
  - GSAP ScrollTrigger for pinned scroll animations, roadmaps, and section fade-ins.
  - Canvas-confetti bursts on entrance, scratch reveal, and FLAMES completion.
  - Floating CSS keyframe heart particles ascending vertically.
  - 3D card tilt via mousemove perspective calculations.
- **[PROPOSED ADAPTATION]**:
  - Implement smooth, performant CSS and lightweight React hooks.
  - Support `prefers-reduced-motion` strictly: ensure all critical information is fully accessible without triggering animations.

### 2.11 Mobile and Desktop Differences
- **[VERIFIED FROM REFERENCE]**:
  - Desktop: 2-column event grid, wide boarding pass layout, expansive sticky scroll.
  - Mobile: Single-column stack, boarding pass notch shifts to vertical layout, character sizes scale down.
- **[PROPOSED ADAPTATION]**:
  - Mobile-first CSS: Ensure touch targets are at least 48x48px, text size remains easily readable on compact screens, and no horizontal overflow occurs.

### 2.12 Audio or Music Behavior
- **[VERIFIED FROM REFERENCE]**:
  - Background audio element `#bg-music` loops `music/audio.mpeg`.
  - Autoplay is gated behind the user clicking the "Enter" button (`#enter-btn`) to comply with browser autoplay policies.
  - Floating mute/unmute button tracks audio state.
  - Pauses automatically when modal videos play, resumes when closed.
- **[PROPOSED ADAPTATION]**:
  - Strictly observe user privacy and browser policies: Never autoplay audio unprompted. Provide clear audio state controls.

### 2.13 Interactive Elements & Expected Behavior
- **[VERIFIED FROM REFERENCE]**:
  - **FLAMES Cosmic Calculator**: Strips common letters between Groom and Bride names with staged timing, plays suspense heartbeat animation, and reveals "Marriage" with confetti.
  - **Random Meme Mode**: Cycles through an array of wedding memes.
  - **Scratch Card**: HTML5 Canvas with destination-out composite mode tracking pixel clearance.
  - **Boarding Pass Ticket**: Stylized wedding invitation boarding pass with QR code linking to Google Maps.
  - **Language Switcher**: Toggles all `data-i18n` elements between English and Tamil.
- **[PROPOSED ADAPTATION]**:
  - Recreate FLAMES calculator personalized for Vignesh & Sowmi / Gowri in typed React.
  - Design the Boarding Pass ticket for Namperumal Thirumana Mandapam (Vaiyappamalai) & Sri Arulmigu Kailasanathar Thirukovil (Elur).
  - Implement bilingual English/Tamil dictionary for the invitation poem and event titles.

### 2.14 Accessibility Considerations
- **[VERIFIED FROM REFERENCE]**:
  - Good: High text contrast on white backgrounds, semantic buttons used for triggers.
  - Areas for improvement: Some background videos and unlabelled emojis (`🕊️`, `❤️`) lacked proper ARIA roles; canvas scratch card has no keyboard alternative; floating characters need `aria-hidden="true"`.
- **[PROPOSED ADAPTATION]**:
  - Full WCAG AA compliance: All icons have `aria-hidden="true"` or accessible labels; all images have descriptive alt text; all interactive controls are keyboard navigable with visible `:focus-visible` outlines.

### 2.15 Elements Worth Adapting vs Elements to Improve
| Feature | Status in Reference | Adaptation for Vignesh & Sowmi |
|---|---|---|
| **Loader / Entrance Gate** | Pop-culture Tamil intro | Elegant traditional entry with couple's blessing and music option |
| **Hero & Countdown** | Great Vibes + countdown | Traditional ivory & gold hero with live dual countdown |
| **Thirukkural Poetry** | Included in sticky scroll | Central cultural feature with English and Tamil explanation |
| **Invitation Poetry** | None (used video) | Feature the authentic poem from the couple's printed invitation |
| **FLAMES Calculator** | Highly engaging custom JS | Typed React component with authentic couple names and confetti |
| **Events Presentation** | 3D tilt cards | Elegant cards with calendar add and verified venue badges |
| **Boarding Pass** | Creative flight ticket | Retain and adapt with Vaiyappamalai / Elur routing |
| **Language Toggle** | Basic DOM string replacement | Robust React state with full English/Tamil i18n support |
