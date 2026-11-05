# PeptideLab — Project Documentation

> ⚠️ **THIS REPO IS PUBLIC** (`aasshop100/PEPTIDELAB`) and GitHub Pages publishes every file in it.
> **Never put an API key, secret, password or private note in this repo.** Anything committed here
> stays in git history forever, even after the file is deleted. See "Security" below.

## Project Overview
E-commerce peptide store at **peptidelab.world** (GitHub Pages). Static HTML/CSS/JS — no framework, no build step.
**v2.0 (2026-11-05)** rebuilt the site around **warehouse-first ordering**: the customer picks one of 7 domestic
warehouses, sees only that warehouse's price list, and the cart is locked to it. Orders are emailed via EmailJS.
Payment is **crypto only, handled manually** — no payment processor. Cart persists in `localStorage`.

## File Structure
| File | Purpose |
|---|---|
| `index.html` | Storefront — hero, warehouse picker, price table |
| `cart.html` | Cart + order form → EmailJS. Country gating, manual crypto details |
| `calculator.html` | Peptide reconstitution calculator (cellgenic-style) |
| `privacy.html` / `terms.html` | Legal pages |
| `thankyou.html` | Post-order page — payment instructions, TRON-only warning |
| `script.js` | `WAREHOUSES` + `CATALOG` data, warehouse picker, price table, cart helpers |
| `style.css` | All styles. **v2 rules are appended at the very bottom** and override v1 |
| `catalog-archive.js` | v1 product catalog, kept for reference. **Not loaded by any page** |

## Theme
White/black/gray, unchanged from v1.

```css
--bg: #ffffff        --surface: #ffffff     --surface2: #f7f7f7
--border: #e0e0e0    --accent: #111111      --accent2: #888888
--text: #1a1a1a      --text-muted: #777777
```
**Logo:** PEPTIDE = black `#111111`, LAB = gray `#888888`

---

## Warehouse model (the core of v2)
Seven warehouses, each with **its own catalog and its own price for the same product code**.
`TR10` is $113 in US Warehouse 1 and $118 in Canada — that is intended, not a bug.

| ID | Name | Scope | Freight | Delivery | SKUs |
|---|---|---|---|---|---|
| `us1` | US Warehouse 1 | USA Domestic Only | $30 | 3–7 days | 20 |
| `us2` | US Warehouse 2 | USA Domestic Only | $30 | 3–7 days | 15 |
| `us3` | US Warehouse 3 | USA Domestic Only | $30 | 3–7 days | 29 |
| `us4` | US Warehouse 4 | USA Domestic Only | $30 | 3–7 days | 11 |
| `ca` | Canada Warehouse | Canada Domestic Only | $30 | 5–9 days | 10 |
| `au` | Australia Warehouse | Australia Domestic Only | $30 | 3–7 days | 14 |
| `pl` | Poland Warehouse | 24 selected EU countries | $30 | 6–9 days | 8 |

**Rules that hold the model together:**
- **One warehouse per order.** Switching warehouse with a non-empty cart prompts, then empties the cart
  (`selectWarehouse()` in `script.js`). Mixing is impossible by design — each warehouse ships separately.
- **Freight is charged once** because an order only ever comes from one warehouse.
- **Country gating is enforced at checkout**, not just displayed. The country dropdown is built from the
  warehouse's `ships` array, and submit is blocked if the country is not in it.
- Prices are **per 10-vial kit**, in USD. Quantity 2 = 20 vials. There is no single-vial option.
- Selection is stored in `localStorage` under `peptidelab_warehouse`; the cart under `peptidelab_cart`.
  Every cart line carries `warehouseId` + `warehouseName`.

**To change stock or pricing:** edit `CATALOG` in `script.js`, commit, push. No build, no database.
Adding a warehouse means a new `WAREHOUSES` entry **and** a matching `CATALOG` key.

---

## Payment — crypto only, MANUAL
There is **no payment processor**. NOWPayments was removed in v2.0.

- Customer picks **USDT (TRON / TRC-20)** or **Bitcoin (BTC)** at checkout and places the order.
- EmailJS sends the admin + customer emails. **You then quote the exact amount by email within 24 hours**,
  or the customer messages WhatsApp for it.
- Receiving addresses are displayed on `cart.html` and are **public by design** (they are receive-only).
- ⚠️ **The copy must always say USDT is TRON-only.** A wrong amount is recoverable; a wrong *chain* is not.
  The warning naming ERC-20 / BEP-20 / Polygon / Solana / Arbitrum appears on `cart.html` and `thankyou.html`.
  Do not make it JS-conditional — the one instruction whose absence costs a customer their money must not
  depend on a script running.
- **Nothing automates the quote or confirms payment.** There is no watcher, no chain parsing, no
  confirmation email on payment. That is all manual, unlike God Muscle Gears.

## EmailJS
| Key | Value |
|---|---|
| Service | `service_hko2z7s` — recreated 2026-11-05 after the old `service_ju3widv` Gmail grant died |
| Admin template | `template_gdh1w1b` — order notification to store |
| Customer template | `template_moknerc` — confirmation to buyer |

Template variables (**unchanged in v2 so the existing templates keep working**):
`{{customer_name}}`, `{{customer_email}}`, `{{customer_phone}}`, `{{customer_address}}`, `{{customer_city}}`,
`{{customer_state}}`, `{{customer_zip}}`, `{{customer_country}}`, `{{payment_method}}`,
`{{{items_table_html}}}` (unescaped HTML), `{{subtotal}}`, `{{shipping}}`, `{{discount}}`, `{{bank_fee}}`,
`{{total}}`, `{{full_address}}`, `{{notes}}`

- `bank_fee` is now **always `$0.00`** — kept only so the existing templates do not break. Remove the row
  from the templates when convenient.
- **The warehouse name rides inside `items_table_html`** as a header row, because adding a new template
  variable would need the EmailJS templates edited by hand. If you ever edit the templates, consider a
  proper `{{warehouse}}` variable instead.

## Contact
- **WhatsApp: +852 619 407 99** → `https://wa.me/85261940799`. Floating button on every page.
- Email: `peptidelabusa@proton.me` (browser only — no IMAP/SMTP on the free Proton plan).
- **Telegram was removed entirely in v2.0** — the pop-up, the floating button and all `t.me` links.

## Calculator
Rebuilt in v2.0 to match `https://cellgenic.com/peptide-calculator/`. Three button rows (Dose / Strength /
Water) and four results. The formulas were verified against the live reference page, not guessed:

```
concentration (mg/mL) = strength / water          → 2 decimals
volume (mL)           = dose / concentration
DRAW SYRINGE TO       = volume * 100              → 2 decimals, "units" (U-100)
YOUR VIAL CONTAINS    = floor(strength / dose)    → "doses"
```

**One deliberate difference from the reference:** cellgenic silently returns nonsense for impossible
combinations (a 15mg dose from a 1mg vial gives "750.00 units / 0 doses"). We show the identical numbers
but add a warning when the vial cannot provide one full dose, or when the draw exceeds a 100-unit syringe.

---

## Security
- **The repo is PUBLIC.** It previously contained, in plain text and still in git history:
  the live NOWPayments API key, the Make.com IPN secret, and two payout wallet addresses.
  Those were removed from the working tree on 2026-11-05.
- ⚠️ **Git history still holds them and the repo is public — treat the NOWPayments key and the Make.com
  IPN secret as permanently compromised.** The NOWPayments key must be rotated/deleted in the NOWPayments
  dashboard; removing it from the files does not revoke it.
- The EmailJS public key in `cart.html` is designed to be public and is fine to commit.

---

## Session Log

### 2026-11-05 — v2.0 rebuild (warehouse-first storefront)

#### Removed
- Hero banner image, FAQ, Shipping, Science/About, Reviews, Contact form + newsletter EmailJS
- Telegram pop-up, floating Telegram button, all `t.me` links
- `proofs.html` (Proof of Delivery) — deleted, nav links removed from every page
- Product images and product descriptions site-wide; category filters
- **NOWPayments entirely** — API key, invoice creation, QR overlay, 20-min timer, 15s polling, 0.5% fee
- The whole v1 96-product catalog → moved to `catalog-archive.js` (unreferenced)

#### Added / changed
- `WAREHOUSES` + `CATALOG` in `script.js` — 7 warehouses, 107 SKUs, per-warehouse pricing
- Warehouse picker on the homepage; cart locked to one warehouse with a confirm-and-clear switch
- Price table (Code / Product / Size / Price / Add) replacing the card grid; search kept
- Cart: quantity controls, `$30` freight (was flat `$50`), country `<select>` gated by warehouse
- Manual crypto checkout with both receiving addresses + TRON-only chain warning
- WhatsApp floating button replacing Telegram, on every page
- Calculator rebuilt cellgenic-style, formulas verified against the live page
- Addresses verified by **base58check** before being written into the site (version bytes 0x00 / 0x41)

---

## Notes & Conventions
- **No build step** — edit files directly, commit, push to deploy via GitHub Pages
- **Cache busting**: not implemented — hard refresh (`Ctrl+Shift+R`) after pushes. GitHub Pages also caches
  HTML for ~10 minutes, so a plain reload can show the old markup
- **Encoding**: use Node.js (not PowerShell `Set-Content`) for bulk edits to preserve UTF-8
- **CSS**: v2 rules live in the block at the very bottom of `style.css` and win by cascade order.
  A lot of v1 CSS is now dead (`.tg-float`, `.tg-popup*`, `.hero-banner*`, `.product-card`, `.filter-tabs`,
  `.faq-*`, `.review-*`) — harmless, left in place deliberately
- **Inline styles**: `calculator.html` and `cart.html` have their own `<style>` blocks — changes to those
  pages go in the file, not in `style.css`
- `AGENTS.md` is a byte-identical copy of this file
