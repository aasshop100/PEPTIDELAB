# PeptideLab — Project Documentation

> ⚠️ **THIS REPO IS PUBLIC** (`aasshop100/PEPTIDELAB`) and GitHub Pages publishes every file in it.
> **Never put an API key, secret, password or private note in this repo.** Anything committed here
> stays in git history forever, even after the file is deleted. See "Security" below.

## Project Overview
E-commerce peptide store at **peptidelab.world** (GitHub Pages). Static HTML/CSS/JS — no framework, no build step.
**v2.0 (2026-11-05)** rebuilt the site around **warehouse-first ordering**: the customer picks one of 9 domestic
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
**Nine warehouses, 147 SKUs**, each with **its own catalog and its own price for the same product code**.
`TR10` is $113 in US Warehouse 1 and $118 in Canada — that is intended, not a bug.

⚠️ **The catalog is NOT hand-edited any more. The ZLZ supplier sheet is the source of truth** for every
warehouse — see "Catalog sync" below. Edit the sheet, re-run the sync tool, push.

| ID | Name | Scope | Freight | Delivery | SKUs |
|---|---|---|---|---|---|
| `us1` | US Warehouse 1 | USA Domestic Only | $30 | 3–7 days | 22 |
| `us2` | US Warehouse 2 | USA Domestic Only | $30 | 3–7 days | 19 |
| `us3` | US Warehouse 3 | USA Domestic Only | $30 | 3–7 days | 30 |
| `us4` | US Warehouse 4 | USA Domestic Only | $30 | 3–7 days | 17 |
| `us5` | US Warehouse 5 | USA Domestic Only | $30 | 3–7 days | 16 |
| `ca` | Canada Warehouse | Canada Domestic Only | $30 | 5–9 days | 6 |
| `au` | Australia Warehouse | Australia Domestic Only | $30 | 3–7 days | 17 |
| `eu1` | EU Warehouse 1 | 24 selected EU countries | $30 | 6–9 days | 12 |
| `pl` | EU Warehouse 2 | 24 selected EU countries | $30 | 6–9 days | 8 |

⚠️ **The id `pl` is historic.** It was "Poland Warehouse" while it was the only EU warehouse. When the
sheet's "EU domestic warehouse - 1" was added on 2026-11-12 the two were relabelled **EU Warehouse 1 / 2**,
because naming one by country implies the other is not in Poland — which nothing in the sheet says.
**The id stayed `pl`**: it is written into past orders, the Back Office sheet and `localStorage`.
Only the display name changed.

**Rules that hold the model together:**
- **Warehouses have a `group`.** `us1`–`us5` share `"us"`; `ca`, `au`, `eu1` and `pl` are each their own.
  **Items mix freely WITHIN a group, never across one.** Only a cross-group switch prompts and empties
  the cart (`selectWarehouse()` in `script.js`).
- **So US orders CAN combine all five US warehouses**, and Canada / Australia / either EU warehouse cannot
  be combined with anything. Superseded the original "one warehouse per order" rule on 2026-11-05.
- ⚠️ **The two EU warehouses do NOT mix**, although they are the same region, same freight and the same
  ships-to list — exactly the shape that made US mixing worth building. That is a deliberate gap, not an
  oversight: Lester scoped mixing to the USA, and nobody has asked for EU mixing. **Open question.**
- **Freight is $30 PER DISTINCT WAREHOUSE in the cart, never flat.** US1 + US2 = $60; three = $90. Each
  warehouse is a separate parcel and may arrive separately — the cart banner, the shipping box and the
  order emails all say so, and the emails group the items under a header per warehouse.
- ⚠️ **Customer-facing copy must never say "flat" freight.** On 2026-11-10 five places still claimed
  "Flat $30 freight" — hero subtitle, catalog footnote, `<meta name="description">`, `og:description`
  and the cart's default shipping line — months after mixing shipped. A customer mixing two US warehouses
  would have read "flat $30" and been charged $60. **After any pricing or shipping change, grep the whole
  site for the old claim, meta tags included.** Nothing fails when only the words are wrong.
- **Country gating is enforced at checkout**, not just displayed. The country dropdown is built from the
  warehouse's `ships` array, and submit is blocked if the country is not in it.
- Prices are **per 10-vial kit**, in USD. Quantity 2 = 20 vials. There is no single-vial option.
- Selection is stored in `localStorage` under `peptidelab_warehouse`; the cart under `peptidelab_cart`.
  Every cart line carries `warehouseId` + `warehouseName`.

**To change stock or pricing:** edit the **ZLZ sheet**, run `backoffice/sync-catalog.js --apply`, commit, push.
No build, no database. Hand-editing `CATALOG` works but the next sync overwrites it.
Adding a warehouse means a new `WAREHOUSES` entry **and** a mapping in the sync tool.

---

## Catalog sync — the ZLZ sheet is the source of truth
Since 2026-11-12 `CATALOG` in `script.js` is **generated**, not written by hand.

- **Source:** tab **`ZLZ INVENTORY`** of the supplier workbook (the same workbook as the Biopep order
  calculator). Columns `Code | Product | Specification | cost | +50 markup | PRICE`, where
  **price = `=SUM(cost+markup)`**.
- **Tool:** `peptidelabfiles/backoffice/sync-catalog.js` — **deliberately OUTSIDE this repo**, because the
  sheet id identifies a workbook of supplier COST prices. `node sync-catalog.js` prints every add /
  remove / reprice and writes nothing; `--apply` rewrites `CATALOG`.
- **Section → warehouse:** `US WAREHOUSE n – PRICE LIST` → `usN`; `Aus domestic warehouse` → `au`;
  `CA domestic warehouse` → `ca`; `EU domestic warehouse - 1` → `eu1`; `EU domestic warehouse - 2` → `pl`.
- A SKU the sheet lists is sold, a SKU it drops is removed, and the price always comes from the sheet.
  **Lester's stock varies per warehouse over time, so this is meant to be re-run, not a one-off.**

**Traps this tool exists because of**
- ⚠️ **The sheet changes shape under you.** On 2026-11-12 it moved one column right and two rows down
  between two reads minutes apart. A column-A assumption produced **"0 SKUs" for every warehouse** — a
  failed read that looks exactly like an empty warehouse. The parser finds the heading wherever it sits,
  and **refuses to write if any warehouse parses empty or a known section vanishes**.
- ⚠️ **A section must end at the NEXT heading of ANY kind.** Matching only `US WAREHOUSE n` let the Aus /
  EU / CA rows pile into `us5` and invent a phantom `KLOW` SKU there.
- ⚠️ **The same product is spelled differently per section** — `KLOW`, `KLOW 80` and `KLOW80` are all the
  80mg KPV combo, `PT1410` is `PT141`. See `ALIAS`. Confirm by the spec column, never by eye.
- ⚠️ **A hardcoded price is NOT a typo — the sheet is the source of truth for MARGIN too.** `H10` (HGH)
  sells for **$219** although cost 69 + markup 50 = 119, and its cells hold a typed value over the
  `=SUM(cost+markup)` formula every other row uses. That broken formula **was the edit**: Lester prices
  above cost+markup when demand justifies it ("it is larger than others because its in demand right now",
  2026-11-12). It was pinned back to $119 for a few hours on that reasoning and corrected the same day.
  **A row that does not compute means ASK, never assume.** `OVERRIDE` in the sync tool exists for a sheet
  value Lester has confirmed is wrong, and is empty today.
- **`valueRenderOption: "FORMULA"`** still tells a typed price from a computed one. Useful — it just does
  not say which is correct.
- ⚠️ **Size is NOT always 10 vials.** The oils (`TE250`/`TC250`/`TP100`) are `10ml*2vials`. The mobile
  price table once hid the Size column on the assumption everything was a 10-vial kit; it is back as a
  compact `10v`/`2v`. **Never re-hide it.**
- **A brand-new warehouse id still needs a hand-written `WAREHOUSES` entry** (name, scope, delivery,
  `ships`, `group`) and a bump to the "Domestic Warehouses" stat on `index.html`. The tool refuses to run
  if the site has a warehouse the sheet does not cover, so it can never silently drop one.

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

## Email deliverability — orders land in Gmail spam (open)
A real order to a Gmail address landed in **spam** (2026-11-06). **Mitigated, not fixed.**

- **The cause is the sending identity, not the content.** EmailJS sends through a personal Gmail while the
  mail presents as "PEPTIDE LABS", with Reply-To on a third domain (`peptidelabusa@proton.me`), carrying
  crypto wallet addresses. Nothing ties any of it to `peptidelab.world`, so the brand has **no sending
  reputation and no SPF/DKIM of its own**.
- **Shipped mitigation:** a spam notice under the email field on `cart.html`, a box plus step 1 on
  `thankyou.html`, and a block in the customer email asking the reader to mark it "Not spam" and add the
  address to contacts. That last one is the only place the ask reaches someone who already found the mail
  in spam, and the engagement signal compounds for later sends.
- **The real fix needs the From address moved to `peptidelab.world`.** Two free routes, both already
  proven in Lester's own stack: a **Gmail verified send-as alias** (how `admin@godmusclegears.com` and
  `support@singilinmo.com` work — SPF pass, no DKIM alignment), or **Resend**, where he already has an
  account verified for `singilinmo.com` (free 3,000/month, gives real DKIM on the domain). **Zoho's free
  plan is webmail-only — no SMTP — so it cannot send programmatically**, the same trap as the Proton address.
- ⚠️ **Either route requires moving the order emails OFF EmailJS**, because **EmailJS cannot change the From
  address on a Personal Service tier**. That is exactly why God Muscle Gears retired EmailJS for n8n.
- ⚠️ **Do not publish DMARC on the alias route** — a policy on an unaligned setup tells receivers to bin
  PeptideLab's own order confirmations. GMG deliberately has none.
- `peptidelab.world` DNS today: NS Namecheap, MX `eforward1-5.registrar-servers.com` (forwarding already
  live), SPF `v=spf1 include:spf.efwd.registrar-servers.com ~all`. No DKIM, no DMARC.

## Order capture → Back Office sheet (added 2026-11-05)
Every order is written to the **PEPTIDELAB — Back Office** spreadsheet
(`1p3BHO9wvxjCtzKlhs1v33B0Q3W6QQ8fCOKdggvl2GFE`) by a Google Apps Script web app,
the same pattern Biopep and God Muscle Gears use.

- **Script source:** `peptidelabfiles/backoffice/Code.gs` — **deliberately OUTSIDE this repo**,
  which is public. It is pasted into the sheet by hand (Extensions → Apps Script) and deployed
  as a Web App with **Execute as: Me** and **Who has access: Anyone**.
- **Endpoint:** `ORDER_CAPTURE_URL` in `cart.html`.
- Writes one row to `Orders` (status `NEW`) and one row per line to `Order Items`.

**Rules that hold it together**
- **Emails first, capture second.** The capture runs only after both EmailJS sends resolve, so a
  sheet failure can never cost a customer their confirmation. **The admin email is the source of
  truth; the sheet is a convenience.** A failed capture redirects to
  `thankyou.html?capture=failed` and logs to the console — visible, never silent.
- **`Content-Type` must stay `text/plain`.** Anything else triggers a CORS preflight and Apps
  Script web apps do not answer `OPTIONS`.
- **The script is idempotent** — an `orderId` already present in `Orders` is never written twice.
- ⚠️ **The endpoint is PUBLIC.** The URL sits in `cart.html` on a public site, so anyone can post
  to it. The script validates shape and size instead. This cannot be made private while the site
  is static — Biopep and GMG carry the same exposure.
- ⚠️ **Verify the deployment ANONYMOUSLY.** It first went out closed and returned `403` to the
  world while looking perfectly fine in a signed-in browser. `curl` the `/exec` URL and expect
  `{"ok":true,...}`; an incognito window works too. Never judge it from a signed-in tab.
- ⚠️ **Editing an existing deployment keeps the URL. A NEW deployment changes it** — and
  `cart.html` hardcodes it, exactly like the EmailJS service id that broke checkout twice.

## EmailJS
| Key | Value |
|---|---|
| Service | `service_hko2z7s` — recreated 2026-11-05 after the old `service_ju3widv` Gmail grant died |
| Admin template | `template_gdh1w1b` — order notification to store |
| Customer template | `template_moknerc` — confirmation to buyer |

**Template sources live in `docs/emails/`** — `customer-order-received.html` and
`admin-order-notification.html`.
- ⚠️ **Pasting them into the EmailJS dashboard is a MANUAL step. Nothing syncs them**, so the live
  templates can drift from the repo silently. Change one, paste it, same session.
- ⚠️ **`_config.yml` excludes `docs/` from the published SITE, which is NOT privacy.** The repo is
  public, so the files and their whole history are readable on GitHub regardless. Never put anything
  in `docs/` that would matter if a stranger read it — no customer data, no keys, no order ids.

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

### 2026-11-12 — whole catalog synced to the ZLZ sheet
- `CATALOG` is now generated by `backoffice/sync-catalog.js`. **9 warehouses, 147 SKUs.**
- **US:** `us5` added (group `"us"`, so it mixes with the rest). GLOW in US3 corrected to $252.
  Testosterone (`TE250`/`TC250`/`TP100`, 2-vial kits) and HGH added; dropped SKUs removed.
  Mobile Size column restored. Commit `a7b0fe9`.
- **Non-US, after Lester said "sync all":** Australia +3 (`RT40`, `KLOW80`, `CP10`);
  **Canada 10 → 6** — `ML10`, `CGL5`, `G5K`, `SMO10` were removed because the sheet no longer lists them;
  `eu1` added with 12 SKUs; `pl` unchanged and relabelled "EU Warehouse 2".
- `H10` briefly pinned to $119 against the sheet's $219 on the theory that a hardcoded value over a
  formula meant a typo. **It was a deliberate demand-based price.** Pin removed, `OVERRIDE` now empty,
  US3 and US4 back to **$219**.

### 2026-11-10 — freight copy
- Rewrote the warehouse blurb, which Lester found confusing, to
  "Each warehouse ships separately — its own stock, its own parcel, its own $30 freight."
- Removed "Flat $30 freight" from five places where it had become false (see the warning above). Commits
  `dd58210`, `2248fac`.

### 2026-11-06 — spam mitigation
- Spam-folder reminders on `cart.html`, `thankyou.html` and in the customer email template. Commit `ac841f4`.
- Diagnosed the cause as the sending identity; see the deliverability section above. Not fixed.

### 2026-11-05 (later) — order capture + US warehouse mixing
- Orders write themselves to the Back Office sheet via Apps Script. Commits `0148c76`, `072a5cc`.
- The four US warehouses can be combined in one order, $30 freight each. Commit `024a645`.
- EmailJS Gmail grant was dead (`412 Invalid grant`); the service was rebuilt and came back with a NEW id,
  which silently broke checkout a second time until `cart.html` was repointed. Commit `a6fafd9`.
- Both email templates rewritten for v2 and pasted into the dashboard. Commit `5f2f486`.
- Floating buttons aligned into one stack. Commit `eae4ce3`.

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
