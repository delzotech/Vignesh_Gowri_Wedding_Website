# Phase 4 — Technical & Visual Stability Audit
**Project:** Vignesh & Sowmi (Gowri) Wedding Website  
**Date:** October 2026  
**Auditor:** Senior Creative Frontend Engineer & QA Specialist  
**Status:** In Progress / Remediated

---

## 1. Executive Summary

A comprehensive code, layout, and visual audit was conducted across all files, components, state hooks, SVG coordinate maths, accessibility attributes, and animation lifecycles.

Eight specific defects and enhancement opportunities were identified spanning layout boundaries, storytelling UX, state clamping, and responsive microcopy.

---

## 2. Prioritized Defect Log

### Defect 1: SVG Speech Bubble Boundary Overflow / Clipping
- **Location:** [`components/wedding/GroomJourney.tsx`](file:///c:/Users/deeks/Downloads/Vignesh-Sowmya_Wedding_Website/components/wedding/GroomJourney.tsx) (lines 730–740)
- **Severity:** Medium
- **Reproduction Steps:**
  1. Load Groom Journey map.
  2. At initial state (`progress = 0.05`), the groom character coordinate is at `x = 70`.
  3. The speech bubble was rendered with a static width of `190px` centered at `x = -95`.
  4. At `70 - 95 = -25`, the left tip of the speech bubble projected slightly outside the `viewBox="0 0 1000 550"` coordinate space.
- **Root Cause:** Hardcoded static center offset without accounting for route boundary coordinates near the map edges.
- **Fix:** Implement dynamic coordinate clamping (`bubbleOffsetX`) that shifts the bubble rightward when `x < 110` and leftward when `x > 890`.
- **Status:** **Resolved**

---

### Defect 2: Countdown Timer Negative Value Computation on Expired State
- **Location:** [`components/wedding/CountdownTimer.tsx`](file:///c:/Users/deeks/Downloads/Vignesh-Sowmya_Wedding_Website/components/wedding/CountdownTimer.tsx) (lines 69–76)
- **Severity:** Low
- **Reproduction Steps:**
  1. When an event timestamp passes, `currentDiff` becomes negative.
  2. `Math.floor(negativeValue)` yields negative integers (e.g. `-1` instead of `0`).
- **Root Cause:** Calculating days/hours/minutes from an unclamped negative millisecond difference before passing into `UnitBox`.
- **Fix:** Pre-clamp `const safeDiff = Math.max(0, currentDiff);` before calculating units, and display a celebratory milestone indicator if the event has commenced.
- **Status:** **Resolved**

---

### Defect 3: Static Unsealed Invitation Card Lacking Storytelling Moment
- **Location:** [`components/wedding/AestheticInvitationCard.tsx`](file:///c:/Users/deeks/Downloads/Vignesh-Sowmya_Wedding_Website/components/wedding/AestheticInvitationCard.tsx)
- **Severity:** High (Phase D.4 Requirement)
- **Reproduction Steps:**
  1. Navigate to `#invitation`.
  2. The card was displayed in full without a sealed moment or unboxing reveal.
- **Root Cause:** Component directly mounted open without the interactive wax-seal envelope ceremony requested in Phase D.4.
- **Fix:** Add a decorative sealed envelope state with golden wax seal button ("Break Seal & Open Sacred Invitation ✉️"), smooth unfolding animation, and optional re-seal toggle.
- **Status:** **Resolved**

---

### Defect 4: Missing "Operation: Wedding Day" Control Room Dashboard
- **Location:** [`components/wedding/WeddingControlRoom.tsx`](file:///c:/Users/deeks/Downloads/Vignesh-Sowmya_Wedding_Website/components/wedding/WeddingControlRoom.tsx) & [`app/page.tsx`](file:///c:/Users/deeks/Downloads/Vignesh-Sowmya_Wedding_Website/app/page.tsx)
- **Severity:** High (Phase D.1 Requirement)
- **Reproduction Steps:**
  1. Milestone cards were presented only as traditional event cards without the playful control-panel presentation.
- **Root Cause:** Feature specified in Phase D.1 was not yet implemented.
- **Fix:** Create a high-tech/traditional fusion control-room dashboard highlighting the two verified milestones: "The Grand Welcome" (Reception, 10 Nov) and "The Main Event" (Muhurtham, 11 Nov) with "Forever: Activated".
- **Status:** **Resolved**

---

### Defect 5: Generic Tamil Wedding Fun Corner Lacking Dedicated Humour Modules
- **Location:** [`components/wedding/KalyanaKalattaa.tsx`](file:///c:/Users/deeks/Downloads/Vignesh-Sowmya_Wedding_Website/components/wedding/KalyanaKalattaa.tsx)
- **Severity:** High (Phase D.2 Requirement)
- **Reproduction Steps:**
  1. Kalyana Kalattaa contained only memes, FLAMES, and scratch card.
  2. Missing the specified Wedding Weather Report, Wedding Mission Checklist, The Feast Forecast, and The Family Photo Challenge.
- **Root Cause:** Older Phase 2 placeholder implementation.
- **Fix:** Restructure into a family-friendly Tamil Wedding Fun Corner featuring:
  - Fictional Wedding Weather Report (*"100% chance of blessings, happy tears, and extra servings"*).
  - Interactive Wedding Mission Checklist with local completion state.
  - The Feast Forecast with dessert decisions announcement and animated reveal.
  - The Family Photo Challenge prompts (Smile, Grand Pose, Blessing, Candid Feast).
- **Status:** **Resolved**

---

### Defect 6: Fragmented Story Copy Across Components
- **Location:** Multiple files (`GroomJourney.tsx`, `WeddingTickets.tsx`, `app/page.tsx`)
- **Severity:** Medium
- **Root Cause:** Text strings hardcoded locally across multiple components instead of a single source of truth.
- **Fix:** Centralize all microcopy in [`config/storyContent.ts`](file:///c:/Users/deeks/Downloads/Vignesh-Sowmya_Wedding_Website/config/storyContent.ts).
- **Status:** **Resolved**

---

### Defect 7: Groom's Journey Title & Dialogue Alignment
- **Location:** [`components/wedding/GroomJourney.tsx`](file:///c:/Users/deeks/Downloads/Vignesh-Sowmya_Wedding_Website/components/wedding/GroomJourney.tsx)
- **Severity:** High (Phase C Alignment)
- **Reproduction Steps:**
  1. Section header was "The Journey to My Forever" rather than the specified signature title: "ONE GROOM. ONE DESTINATION. A LIFETIME TOGETHER."
  2. Dialogues used earlier Phase 3 drafts instead of the updated Phase C lines (*"Destination locked. Confidence: 100%. Navigation skills: under review."*, etc.).
- **Fix:** Update titles, subtitles, start button, checkpoint dialogues, and reunion lines to match Phase C specifications.
- **Status:** **Resolved**

---

### Defect 8: Boarding Pass Passenger Identity & Storytelling Microcopy
- **Location:** [`components/wedding/WeddingTickets.tsx`](file:///c:/Users/deeks/Downloads/Vignesh-Sowmya_Wedding_Website/components/wedding/WeddingTickets.tsx)
- **Severity:** Low
- **Root Cause:** Passenger field displayed "Vignesh & Sowmi" instead of honoring the guest ("Our Honored Guest & Family"), and lacked the Phase E sentiment (*"Your seat is reserved in the story. Your blessings are the real VIP pass."*).
- **Fix:** Update passenger identity and add the poetic VIP pass tagline.
- **Status:** **Resolved**

---

## 3. Verification Protocol

1. **TypeScript Typecheck:** `npm run typecheck` (`tsc --noEmit`) - zero errors.
2. **Production Build:** `npm run build` (`next build`) - clean static generation.
3. **Browser Automation Testing:** Full interactive run-through verifying start, advance, slider, sealed invitation reveal, control room, fun corner checklist, photo prompts, and reunion celebration.
