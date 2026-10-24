# Content & Asset Manifest: Source Verification & Data Model

- **Project:** Vignesh & Sowmi (Gowri) Wedding Website
- **Baseline Date:** October 2026
- **Status:** Phase 0 Baseline Verified

---

## 1. Source Asset Manifest

All four authentic assets supplied in the workspace have been verified, documented, and safely preserved in bit-for-bit duplicate in `source-assets/` and `public/images/original/`.

| Original Filename | Format | Dimensions | File Size | Verified Subject & Content | Web Derivative Path | Optimization Strategy |
|---|---|---|---|---|---|---|
| `IMG-20250210-WA0016.jpg.jpeg` | JPEG | 720 × 1280 (9:16) | 96,819 bytes (~96.8 KB) | **Bride's Individual Portrait**: Authentic photograph of the bride (Sowmi / Gowri) in a traditional pink silk saree with mint-green zari border and traditional jewelry, standing beside a wooden doorway. | `/images/optimized/bride-portrait.jpg` | Preserved full resolution, responsive `sizes` attribute, focal point centered at 25% from top to prevent head cropping. |
| `IMG-20261019-WA0000.jpg.jpeg` | JPEG | 1200 × 1600 (3:4) | 185,985 bytes (~186.0 KB) | **Groom's Individual Portrait**: Authentic photograph of the groom (Vignesh) in a striped casual button-down shirt against a monochrome floral mural backdrop. | `/images/optimized/groom-portrait.jpg` | Full resolution retained, responsive container with subtle golden frame styling. |
| `IMG-20260612-WA0001.jpg.jpeg` | JPEG | 1200 × 1600 (3:4) | 310,261 bytes (~310.2 KB) | **Couple's Traditional Photograph**: Authentic couple photograph taken together in an auspicious temple mandapam courtyard with stone pillars. Bride in golden yellow saree and temple jewelry; groom in turquoise blue shirt. | `/images/optimized/couple-traditional.jpg` | High-priority hero image loading (`priority`), full natural aspect ratio with sacred double border. |
| `image.png.jpeg` | JPEG | 720 × 1280 (9:16) | 56,989 bytes (~57.0 KB) | **Official Physical Wedding Invitation**: Folded invitation leaf containing the couple's poetry, Reception, and Marriage details. | `/images/optimized/invitation-card.jpg` | High-fidelity digital reproduction with modal zoom view for reading original Tamil calligraphy and English poetry. |

### Asset Preservation Rules
- **Rule 1**: The original source files are **never** destructively cropped, retouched, compressed with quality loss, or modified.
- **Rule 2**: No AI face generation, beautification filters, or stock models are ever substituted for the couple.

---

## 2. Wedding Content Manifest (Extracted vs Provisional Data)

Below is the exact transcription of the physical invitation card (`image.png.jpeg`), compared against the provisional prompt text:

### 2.1 The Couple
- **Groom**:
  - *Invitation Text*: **Vignesh**
  - *Tamil Transcription*: **விக்னேஷ்**
  - *Status*: **CONFIRMED & VERIFIED**
- **Bride**:
  - *Invitation Printed Text*: **Gowri**
  - *User Brief Text*: **Sowmi** (or Sowmya)
  - *Cultural Context*: In South India, individuals frequently have an official birth/astrological name (e.g. Gowri) used on formal temple wedding cards, alongside an official school/work or beloved family name (e.g. Sowmi / Sowmya).
  - *Action*: Flagged in `config/wedding.ts` as `Sowmi (Gowri)` pending the couple's preferred presentation for digital invites.

---

### 2.2 Event 1: Reception
- **Date**: **10-11-2026, Tuesday** (10th November 2026) — *VERIFIED*
- **Time**: **6.00 pm onwards** (18:00 IST) — *VERIFIED*
- **Venue Name**:
  - *Provisional text*: Numpennural Thirumana Mandapam
  - *Actual verified text from image*: **Namperumal Thirumana Mandapam** (நம்பெருமாள் திருமண மண்டபம்) — *VERIFIED*
- **Location**:
  - *Provisional text*: Vijayap...
  - *Actual verified text from image*: **Vaiyappamalai** (வையப்பமலை, a prominent town in Namakkal district, Tamil Nadu) — *VERIFIED*

---

### 2.3 Event 2: Marriage (Muhurtham)
- **Date**: **11-11-2026, Wednesday** (11th November 2026) — *VERIFIED*
- **Time**: **4.30 am to 6.00 am** (Auspicious Brahma Muhurtham) — *VERIFIED*
- **Venue Name**:
  - *Provisional text*: Sri Arunlinga Kailasamuthar Thirukovil
  - *Actual verified text from image*: **Sri Arulmigu Kailasanathar Thirukovil** (ஸ்ரீ அருள்மிகு கைலாசநாதர் திருக்கோவில்) — *VERIFIED*
- **Location**:
  - *Provisional text*: Ealur
  - *Actual verified text from image*: **Elur** (ஏளூர், Namakkal district, Tamil Nadu) — *VERIFIED*

---

### 2.4 Authentic Invitation Poetry
The invitation card contains the following custom romantic stanzas:

```text
"Two hearts,
Two stories,
Now choosing one way
A promise of forever
Beginning on this day.

Through laughter and dreams,
through all life may bring,
Vignesh found his Gowri,
and Gowri found her Vignesh.

And so begins their forever hand in hand, heart to heart,
With love as their journey and this day as their start."

— Vignesh & Gowri
```

---

## 3. List of Uncertainties Requiring Couple Confirmation

1. **Bride's Preferred Display Name**:
   - Would the couple prefer the website to display:
     - Option A: **"Vignesh & Sowmi"**
     - Option B: **"Vignesh & Gowri"**
     - Option C: **"Vignesh & Sowmi (Gowri)"**
2. **Exact Google Maps Location URLs**:
   - Exact Google Maps place IDs or share links for *Namperumal Thirumana Mandapam, Vaiyappamalai* and *Sri Arulmigu Kailasanathar Thirukovil, Elur*.
3. **RSVP & Family Contact Numbers**:
   - Any phone numbers or WhatsApp links the couple wishes to make available to guests for queries, transport, or accommodation assistance.
4. **Music Selection**:
   - Preferred nadaswaram / mangala vaathiyam or romantic background song for the audio player.
