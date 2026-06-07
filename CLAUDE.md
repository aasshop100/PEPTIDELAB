# PeptideLab — Project Documentation

## Project Overview
E-commerce peptide store at **peptidelab.world** (GitHub Pages). Static HTML/CSS/JS site — no framework, no build step. Orders go through EmailJS. Cart persists in `localStorage`.

## File Structure
| File | Purpose |
|---|---|
| `index.html` | Main storefront — hero, products, about, reviews, shipping, FAQ, contact |
| `cart.html` | Cart + order form → sends via EmailJS |
| `proofs.html` | Proof of delivery gallery with lightbox |
| `calculator.html` | Peptide reconstitution & dosage calculator |
| `privacy.html` / `terms.html` | Legal pages |
| `thankyou.html` | Post-order confirmation page |
| `script.js` | All product data + rendering logic |
| `style.css` | All styles — uses CSS variables in `:root` |

## Current Theme (as of 2026-05-29)
White/black/gray — clean minimal, inspired by baojuchem.com layout.

```css
--bg: #ffffff
--surface: #ffffff       /* cards, sections */
--surface2: #f7f7f7      /* inner card elements, dropdowns */
--border: #e0e0e0
--accent: #111111        /* black — replaces old cyan */
--accent2: #888888       /* gray — replaces old green */
--text: #1a1a1a
--text-muted: #777777
```

**Logo:** PEPTIDE = black `#111111`, LAB = gray `#888888`

## EmailJS Setup
| Key | Value |
|---|---|
| Service ID | (in cart.html) |
| Admin template | `template_gdh1w1b` — order notification to store |
| Customer template | `template_moknerc` — confirmation to buyer |

**Template variables used:**
`{{customer_name}}`, `{{customer_email}}`, `{{customer_phone}}`, `{{customer_address}}`, `{{customer_city}}`, `{{customer_state}}`, `{{customer_zip}}`, `{{customer_country}}`, `{{payment_method}}`, `{{{items_table_html}}}` (unescaped HTML), `{{subtotal}}`, `{{shipping}}`, `{{discount}}`, `{{bank_fee}}`, `{{total}}`, `{{full_address}}`, `{{notes}}`

## Telegram
Group: **https://t.me/peptidelabworld**
Popup appears after 3s (once per session via `sessionStorage`). Floating button bottom-right.

## Product Image Rules
| Image file | Used for |
|---|---|
| `samplepic.jpg` | Default — all products without a specific photo |
| `ghk1.jpg` | GHK-Cu |
| `lemon1.jpg` | Lemon Bottle |
| `glow1.jpg` | GLOW, KLOW, AHK-Cu |
| `lipo.jpg` | LC120, LC526 (Lipo C Plus), Lipo C with B12 Plus |

Image container: `aspect-ratio: 1/1`, `object-fit: contain`, `background: #ffffff`

---

## Session Log

### 2026-06-07 — Telegram popup redesign + proof gallery update

#### Completed
- Updated Telegram popup on `index.html` — new title "DOMESTIC WAREHOUSES", eyebrow "Now Available"
- Added warehouse pill list (🇦🇺 Australia / 🇺🇸 USA / 🇪🇺 Europe) with gray card styling
- Updated popup body copy to: "Join our Telegram community for the latest product releases, updates, and announcements, or send us an email to check product availability, pricing, and shipping options."
- Added `.tg-popup-warehouses` styles to `style.css` (pill list, gap, border, border-radius)
- Added 3 new images to `proofs.html`: `proof31.jpg` (top of delivery section), `ship11.jpg` + `ship12.jpg` (bottom of pre-shipment section)
- Committed and pushed all changes — commit `da02192`

---

### 2026-05-29 — Full payment system + EmailJS templates

#### Completed
- Added USDT TRC20 live checkout via NOWPayments (same flow as BTC)
- Updated Shipping & Payment section on index.html — Bitcoin instant, bank transfer via Telegram +10%
- Updated FAQ payment answer to match
- Set up Make.com webhook backup — Gmail alert to lstrmrcd@gmail.com on every confirmed payment
- Connected NOWPayments IPN to Make.com webhook URL: `https://hook.eu1.make.com/th4pc042xqiriq66oi53p4ld1luhbhyk`
- IPN secret key generated: `kRbxQzyw7ITqh+Vme+W0stdGpoOAZ9VW` (saved in NOWPayments dashboard)
- Disabled custody — payments now auto-forward directly to BTC wallet
- Added USDT TRC20 payout wallet: `TYTKUPjWeBTVwkdkBWcHV6MWaj1A5XLHnS`
- Updated admin EmailJS template (`template_gdh1w1b`) — new white/black/gray theme
- Updated customer EmailJS template (`template_moknerc`) — "Payment Confirmed", tracking 2–3 days, delivery 15–20 days
- Added Make.com filter — only sends Gmail alert when payment_status = "finished" OR "confirmed" (no more spam on pending payments)

#### NOWPayments Account Status
- Live API key: `AMR6DQS-1W3dandG-Q05A056-KQHZAQH`
- BTC payout wallet: `15TaeVPBDpQcxpW9Ndc1fAK4AuBei28yTL`
- USDT TRC20 payout wallet: `TYTKUPjWeBTVwkdkBWcHV6MWaj1A5XLHnS`
- Custody: Disabled ✅
- Account verification: **Pending** (KYC not completed yet)

---

### 2026-05-29 — NOWPayments Bitcoin integration

#### Completed
- Created NOWPayments account, connected BTC payout wallet (`15TaeVPBDpQcxpW9Ndc1fAK4AuBei28yTL`)
- Integrated NOWPayments into cart.html — live Bitcoin checkout with QR code, address, 20min timer, auto-polling
- Removed Bank Transfer from payment dropdown (BTC + USDT TRC20 only)
- Added 0.5% crypto processing fee row to order summary when BTC selected
- Added "keep tab open" warning banner on payment overlay
- USDT TRC20 keeps existing EmailJS manual flow unchanged
- Confirmed NOWPayments minimum BTC payment is ~$10+ USD

#### Commits
| Hash | Description |
|---|---|
| `f99c4ed` | Add NOWPayments Bitcoin checkout to cart.html |
| `53fd3b0` | Add keep-tab-open warning to Bitcoin payment overlay |
| `2fc130d` | Revert test changes (HGH $15 variant + FREESHIP code) |

---

### 2026-05-29 — Full redesign + bug fixes

#### Theme Overhaul
- Replaced dark cyberpunk theme (dark navy bg, cyan `#00c8ff` accents) with clean white/black/gray
- Changed all root CSS variables
- Removed ALL hardcoded cyan/green values throughout `style.css`, `proofs.html`, `calculator.html`, `cart.html`
- Logo updated: PEPTIDE black, LAB gray
- Badge colors updated (recovery/growth → neutral dark gray; cognitive/longevity kept purple/yellow)

#### Layout Changes
- Removed marquee strip (peptide name ticker between hero and products)
- Shipping & Payment section: changed from 4-column grid to 2 centered cards (flex, 380px each)
- Product image container: changed from fixed `160px` height to `aspect-ratio: 1/1` square (matches reference site baojuchem.com)
- Image container background: set to `#ffffff` (fixes gray bar artifact on live site)

#### Product Images
- Bulk-replaced all product images using Node.js script (preserved encoding)
- Assigned: ghk1, lemon1, glow1, lipo to specific products; samplepic.jpg to all others
- Pushed all 5 new image files to GitHub

#### Bug Fixes
- **proofs.html**: `h1` "Proof of Delivery" and `h2` "Ready to Order?" were white-on-white (invisible) → fixed to `#111111`
- **calculator.html**: `h1`, two `h2` card headings, result values, guide `h2`, four guide `h4` headings all white-on-white → fixed to `#111111`. Also fixed cyan badge backgrounds.
- **Search icon**: Replaced blue 🔍 emoji with neutral gray SVG
- **Email table (cart.html)**: Order confirmation email rows had old dark-theme colors (`#e8f4f8` text + cyan borders) → updated to `#1a1a1a` text + `#e0e0e0` borders
- **Reviewer avatars**: False positive in audit — initials are on dark gradient circle, not white bg

#### EmailJS Customer Template
- Rebuilt from scratch to match white/black/gray theme
- Added **JOIN OUR TELEGRAM COMMUNITY** button (black pill → `https://t.me/peptidelabworld`)
- Removed "RESEARCH GRADE PEPTIDES" subheading from header
- Admin template pending update (user to send current code)

#### Commits Pushed
| Hash | Description |
|---|---|
| `52ef04d` | Fix invisible white text on proofs and calculator pages |
| `4d2af5e` | Fix search icon and email template colors |
| `4cef6ba` | Fix product image gray bars: set image container bg to white |
| `8043d83` | Add new product images (samplepic, lipo, glow1, ghk1, lemon1) |
| `8c73d18` | Update all product card images with new photo assignments |
| `a73d4f5` | Redesign to clean white/black/gray theme, remove marquee, center shipping cards |

---

## Pending / Future Plans

### 🔴 Next Session (Priority)
- [ ] Add real product photos to replace `samplepic.jpg` placeholders
- [ ] Verify account on NOWPayments (KYC) — needed for payouts

### 🟡 Soon
- [ ] Real test of Bitcoin payment end-to-end (confirmed NOWPayments minimum is ~$10+ USD worth of BTC)
- [ ] Cookie banner on mobile is large — may want to slim it down

---

## NOWPayments Integration (LIVE as of 2026-05-29)

### Setup
- **Provider:** NOWPayments (nowpayments.io) — account created by Lester
- **API Key:** `AMR6DQS-1W3487G-Q05A056-KQHZAQH` (live, in cart.html)
- **Payout wallet:** BTC — `15TaeVPBDpQcxpW9Ndc1fAK4AuBei28yTL`
- **Fee:** 0.5% (BTC → BTC, no conversion) — passed to customer
- **Minimum payment:** ~$10+ USD worth of BTC (NOWPayments enforces this)
- **Bank transfer:** Removed from checkout. Note to be added on index.html pointing to Telegram

### How It Works (Built & Live)
1. Customer selects Bitcoin (BTC) at checkout
2. Clicks "Place Order" → browser calls NOWPayments API → creates invoice
3. Payment overlay shows: BTC amount, QR code, wallet address, 20min countdown
4. Warning shown: *"Keep this tab open until confirmed"*
5. Browser polls NOWPayments every 15 seconds
6. On confirmation: EmailJS fires (admin + customer emails) → cart cleared → redirect to thankyou.html
7. NOWPayments forwards BTC to merchant wallet

### Known Limitation
- Emails only fire if customer keeps the browser tab open during confirmation (10–30 min)
- Make.com webhook can be added later as a backup if needed

---

## Notes & Conventions
- **No build step** — edit files directly, commit, push to deploy via GitHub Pages
- **Cache busting**: not implemented — hard refresh (`Ctrl+Shift+R`) needed on live site after pushes
- **Encoding**: Always use Node.js (not PowerShell `Set-Content`) for bulk JS edits to preserve UTF-8 emoji characters
- **CSS overrides**: Light theme overrides live at the bottom of `style.css` under `/* ========== LIGHT THEME OVERRIDES ========== */`
- **Inline styles**: `proofs.html`, `calculator.html`, `cart.html` each have their own `<style>` block — changes to those pages must be made in the file, not in `style.css`
