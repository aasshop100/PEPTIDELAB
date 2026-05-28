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
- [ ] Update **admin EmailJS template** (`template_gdh1w1b`) to match new theme (user to send current code)
- [ ] Add real product photos to replace `samplepic.jpg` placeholders across all products
- [ ] Consider adding discount code section visibility improvements
- [ ] Cookie banner on mobile is large — may want to slim it down
- [ ] Deleted image files (`bpc10mgghkcu50mgtb50010mg.png`, `ll37.png`, `survodutide.png`, `thymalinthymulin.png`) are still showing as deleted in git — can be cleaned up with `git rm`

## Notes & Conventions
- **No build step** — edit files directly, commit, push to deploy via GitHub Pages
- **Cache busting**: not implemented — hard refresh (`Ctrl+Shift+R`) needed on live site after pushes
- **Encoding**: Always use Node.js (not PowerShell `Set-Content`) for bulk JS edits to preserve UTF-8 emoji characters
- **CSS overrides**: Light theme overrides live at the bottom of `style.css` under `/* ========== LIGHT THEME OVERRIDES ========== */`
- **Inline styles**: `proofs.html`, `calculator.html`, `cart.html` each have their own `<style>` block — changes to those pages must be made in the file, not in `style.css`
