// ============================================================
// PeptideLab v2.0 — warehouse catalog + price-list storefront
// Rebuilt 2026-11-05. No product images, no descriptions.
// One warehouse per order. Prices are per 10-vial kit, in USD.
// Old v1 catalog kept for reference in catalog-archive.js (not loaded).
// ============================================================

// ========== WAREHOUSES ==========
// freight is per order (one warehouse per order, so it is charged once).
// ships: countries this warehouse is allowed to deliver to. Enforced at checkout.
const WAREHOUSES = [
  {
    id: "us1",
    group: "us",
    name: "US Warehouse 1",
    scope: "USA Domestic Only",
    freight: 30,
    delivery: "3–7 days",
    ships: ["United States"]
  },
  {
    id: "us2",
    group: "us",
    name: "US Warehouse 2",
    scope: "USA Domestic Only",
    freight: 30,
    delivery: "3–7 days",
    ships: ["United States"]
  },
  {
    id: "us3",
    group: "us",
    name: "US Warehouse 3",
    scope: "USA Domestic Only",
    freight: 30,
    delivery: "3–7 days",
    ships: ["United States"]
  },
  {
    id: "us4",
    group: "us",
    name: "US Warehouse 4",
    scope: "USA Domestic Only",
    freight: 30,
    delivery: "3–7 days",
    ships: ["United States"]
  },
  {
    id: "ca",
    group: "ca",
    name: "Canada Warehouse",
    scope: "Canada Domestic Only",
    freight: 30,
    delivery: "5–9 days",
    ships: ["Canada"]
  },
  {
    id: "au",
    group: "au",
    name: "Australia Warehouse",
    scope: "Australia Domestic Only",
    freight: 30,
    delivery: "3–7 days",
    ships: ["Australia"]
  },
  {
    id: "pl",
    group: "pl",
    name: "Poland Warehouse",
    scope: "Selected European Countries Only",
    freight: 30,
    delivery: "6–9 days",
    ships: [
      "Poland", "France", "Italy", "Spain", "Austria", "Belgium", "Bulgaria",
      "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "Greece",
      "Hungary", "Ireland", "Latvia", "Lithuania", "Luxembourg", "Netherlands",
      "Portugal", "Romania", "Slovakia", "Slovenia", "Sweden"
    ]
  }
];

// ========== CATALOG ==========
// Every entry: code, name (compound + strength), size (kit), price (USD per kit).
// The SAME code can carry a DIFFERENT price in a different warehouse — that is intended.
const CATALOG = {
  us1: [
    { code: "TR10",  name: "Tirz 10mg",                                  size: "10 vials", price: 113 },
    { code: "RT5",   name: "Reta 5mg",                                   size: "10 vials", price: 105 },
    { code: "RT10",  name: "Reta 10mg",                                  size: "10 vials", price: 142 },
    { code: "RT20",  name: "Reta 20mg",                                  size: "10 vials", price: 190 },
    { code: "TB5",   name: "TB500 5mg",                                  size: "10 vials", price: 128 },
    { code: "5AD",   name: "AOD9604 5mg",                                size: "10 vials", price: 137 },
    { code: "MS10",  name: "MOTS-c 10mg",                                size: "10 vials", price: 128 },
    { code: "ML10",  name: "MT-2 (Melanotan 2 Acetate) 10mg",            size: "10 vials", price: 121 },
    { code: "DS10",  name: "DSIP 10mg",                                  size: "10 vials", price: 118 },
    { code: "SK10",  name: "Selank 10mg",                                size: "10 vials", price: 117 },
    { code: "5AM5",  name: "5-amino-1.5mg 5mg",                          size: "10 vials", price: 94  },
    { code: "CU100", name: "GHK-CU 100mg",                               size: "10 vials", price: 100 },
    { code: "TSM10", name: "Tesamorelin 10mg",                           size: "10 vials", price: 209 },
    { code: "NJ1000",name: "NAD+ 1000mg",                                size: "10 vials", price: 152 },
    { code: "G5K",   name: "HCG 5000 IU",                                size: "10 vials", price: 140 },
    { code: "SMO10", name: "Sermorelin Acetate 10mg",                    size: "10 vials", price: 199 },
    { code: "KCU60", name: "KPV 10mg + GHK-CU 50mg (60mg)",              size: "10 vials", price: 125 },
    { code: "KS5",   name: "KissPeptin 5mg",                             size: "10 vials", price: 110 },
    { code: "CP10",  name: "CJC NO DAC 5mg + IPA 5mg (10mg)",            size: "10 vials", price: 164 },
    { code: "IGF1",  name: "IGF-1LR3 1mg",                               size: "10 vials", price: 242 }
  ],
  us2: [
    { code: "RT5",   name: "Reta 5mg",                                   size: "10 vials", price: 105 },
    { code: "RT10",  name: "Reta 10mg",                                  size: "10 vials", price: 142 },
    { code: "RT40",  name: "Reta 40mg",                                  size: "10 vials", price: 282 },
    { code: "RT50",  name: "Reta 50mg",                                  size: "10 vials", price: 306 },
    { code: "TB5",   name: "TB500 5mg",                                  size: "10 vials", price: 128 },
    { code: "BB10",  name: "BPC 5mg + TB 5mg (10mg)",                    size: "10 vials", price: 156 },
    { code: "GLOW",  name: "BPC 157 10mg + GHK-CU 50mg + TB500 10mg (70mg)", size: "10 vials", price: 258 },
    { code: "MS10",  name: "MOTS-c 10mg",                                size: "10 vials", price: 128 },
    { code: "ET10",  name: "Epithalon 10mg",                             size: "10 vials", price: 117 },
    { code: "XA10",  name: "Semax 10mg",                                 size: "10 vials", price: 117 },
    { code: "SK10",  name: "Selank 10mg",                                size: "10 vials", price: 117 },
    { code: "IP5",   name: "Ipamorelin 5mg",                             size: "10 vials", price: 101 },
    { code: "SMO10", name: "Sermorelin Acetate 10mg",                    size: "10 vials", price: 199 },
    { code: "TY10",  name: "Thymalin 10mg",                              size: "10 vials", price: 127 },
    { code: "KCU60", name: "KPV 10mg + GHK-CU 50mg (60mg)",              size: "10 vials", price: 125 }
  ],
  us3: [
    { code: "RT30",  name: "Reta 30mg",                                  size: "10 vials", price: 241 },
    { code: "RT50",  name: "Reta 50mg",                                  size: "10 vials", price: 306 },
    { code: "RT60",  name: "Reta 60mg",                                  size: "10 vials", price: 330 },
    { code: "BC10",  name: "BPC 157 10mg",                               size: "10 vials", price: 121 },
    { code: "TB10",  name: "TB500 10mg",                                 size: "10 vials", price: 165 },
    { code: "5AD",   name: "AOD9604 5mg",                                size: "10 vials", price: 137 },
    { code: "GLOW",  name: "BPC 157 10mg + GHK-CU 50mg + TB500 10mg (70mg)", size: "10 vials", price: 258 },
    { code: "MS10",  name: "MOTS-c 10mg",                                size: "10 vials", price: 128 },
    { code: "ML10",  name: "MT-2 (Melanotan 2 Acetate) 10mg",            size: "10 vials", price: 121 },
    { code: "2S10",  name: "SS-31 (Bendavia/Elamipretide) 10mg",         size: "10 vials", price: 135 },
    { code: "PT141", name: "PT-141 10mg",                                size: "10 vials", price: 125 },
    { code: "ET10",  name: "Epithalon 10mg",                             size: "10 vials", price: 117 },
    { code: "KP10",  name: "KPV 10mg",                                   size: "10 vials", price: 117 },
    { code: "SK10",  name: "Selank 10mg",                                size: "10 vials", price: 117 },
    { code: "5AM5",  name: "5-amino-1.5mg 5mg",                          size: "10 vials", price: 94  },
    { code: "IP10",  name: "Ipamorelin 10mg",                            size: "10 vials", price: 122 },
    { code: "CU50",  name: "GHK-CU 50mg",                                size: "10 vials", price: 92  },
    { code: "CU100", name: "GHK-CU 100mg",                               size: "10 vials", price: 100 },
    { code: "TSM10", name: "Tesamorelin 10mg",                           size: "10 vials", price: 209 },
    { code: "NJ500", name: "NAD+ 500mg",                                 size: "10 vials", price: 116 },
    { code: "NJ1000",name: "NAD+ 1000mg",                                size: "10 vials", price: 152 },
    { code: "G5K",   name: "HCG 5000 IU",                                size: "10 vials", price: 140 },
    { code: "TA5",   name: "Thymosin Alpha-1 5mg",                       size: "10 vials", price: 165 },
    { code: "SMO10", name: "Sermorelin Acetate 10mg",                    size: "10 vials", price: 199 },
    { code: "GT500", name: "Glutathione 500mg",                          size: "10 vials", price: 99  },
    { code: "KCU60", name: "KPV 10mg + GHK-CU 50mg (60mg)",              size: "10 vials", price: 125 },
    { code: "KS5",   name: "KissPeptin 5mg",                             size: "10 vials", price: 110 },
    { code: "CP10",  name: "CJC NO DAC 5mg + IPA 5mg (10mg)",            size: "10 vials", price: 164 },
    { code: "IGF1",  name: "IGF-1LR3 1mg",                               size: "10 vials", price: 242 }
  ],
  us4: [
    { code: "MS10",  name: "MOTS-c 10mg",                                size: "10 vials", price: 128 },
    { code: "PT141", name: "PT-141 10mg",                                size: "10 vials", price: 125 },
    { code: "ET10",  name: "Epithalon 10mg",                             size: "10 vials", price: 117 },
    { code: "KP10",  name: "KPV 10mg",                                   size: "10 vials", price: 117 },
    { code: "CU50",  name: "GHK-CU 50mg",                                size: "10 vials", price: 92  },
    { code: "TSM10", name: "Tesamorelin 10mg",                           size: "10 vials", price: 209 },
    { code: "NJ1000",name: "NAD+ 1000mg",                                size: "10 vials", price: 152 },
    { code: "TA5",   name: "Thymosin Alpha-1 5mg",                       size: "10 vials", price: 165 },
    { code: "GT500", name: "Glutathione 500mg",                          size: "10 vials", price: 99  },
    { code: "KCU60", name: "KPV 10mg + GHK-CU 50mg (60mg)",              size: "10 vials", price: 125 },
    { code: "IGF1",  name: "IGF-1LR3 1mg",                               size: "10 vials", price: 242 }
  ],
  ca: [
    { code: "SM10",  name: "Semaglutide 10mg",                           size: "10 vials", price: 115 },
    { code: "SM20",  name: "Semaglutide 20mg",                           size: "10 vials", price: 141 },
    { code: "TR10",  name: "Tirz 10mg",                                  size: "10 vials", price: 118 },
    { code: "ML10",  name: "MT-2 (Melanotan 2 Acetate) 10mg",            size: "10 vials", price: 125 },
    { code: "G65",   name: "GHRP-6 Acetate 5mg",                         size: "10 vials", price: 111 },
    { code: "DS10",  name: "DSIP 10mg",                                  size: "10 vials", price: 123 },
    { code: "CGL5",  name: "Cagrilintide 5mg",                           size: "10 vials", price: 142 },
    { code: "G25",   name: "GHRP-2 Acetate 5mg",                         size: "10 vials", price: 111 },
    { code: "G5K",   name: "HCG 5000 IU",                                size: "10 vials", price: 144 },
    { code: "SMO10", name: "Sermorelin Acetate 10mg",                    size: "10 vials", price: 204 }
  ],
  au: [
    { code: "TR10",  name: "Tirz 10mg",                                  size: "10 vials", price: 118 },
    { code: "TR30",  name: "Tirz 30mg",                                  size: "10 vials", price: 168 },
    { code: "TR60",  name: "Tirz 60mg",                                  size: "10 vials", price: 254 },
    { code: "RT10",  name: "Reta 10mg",                                  size: "10 vials", price: 147 },
    { code: "RT30",  name: "Reta 30mg",                                  size: "10 vials", price: 246 },
    { code: "TB5",   name: "TB500 5mg",                                  size: "10 vials", price: 133 },
    { code: "5AD",   name: "AOD9604 5mg",                                size: "10 vials", price: 142 },
    { code: "GLOW",  name: "BPC 157 10mg + GHK-CU 50mg + TB500 10mg (70mg)", size: "10 vials", price: 263 },
    { code: "XA10",  name: "Semax 10mg",                                 size: "10 vials", price: 122 },
    { code: "CU100", name: "GHK-CU 100mg",                               size: "10 vials", price: 105 },
    { code: "TSM10", name: "Tesamorelin 10mg",                           size: "10 vials", price: 214 },
    { code: "TA5",   name: "Thymosin Alpha-1 5mg",                       size: "10 vials", price: 170 },
    { code: "SMO10", name: "Sermorelin Acetate 10mg",                    size: "10 vials", price: 204 },
    { code: "IGF1",  name: "IGF-1LR3 1mg",                               size: "10 vials", price: 251 }
  ],
  pl: [
    { code: "TR10",   name: "Tirz 10mg",                                 size: "10 vials", price: 113 },
    { code: "RT10",   name: "Reta 10mg",                                 size: "10 vials", price: 142 },
    { code: "RT20",   name: "Reta 20mg",                                 size: "10 vials", price: 190 },
    { code: "H10",    name: "HGH 10iu",                                  size: "10 vials", price: 119 },
    { code: "GLOW",   name: "BPC 157 10mg + GHK-CU 50mg + TB500 10mg (70mg)", size: "10 vials", price: 258 },
    { code: "IP5",    name: "Ipamorelin 5mg",                            size: "10 vials", price: 101 },
    { code: "G5K",    name: "HCG 5000 IU",                               size: "10 vials", price: 140 },
    { code: "KLOW80", name: "BPC 157 10mg + GHK-CU 50mg + TB500 10mg + KPV 10mg (80mg)", size: "10 vials", price: 294 }
  ]
};

// ========== CONTACT ==========
const WHATSAPP_NUMBER = "+852 619 407 99";
const WHATSAPP_LINK = "https://wa.me/85261940799";

// ========== STATE ==========
const WH_KEY = "peptidelab_warehouse";
const CART_KEY = "peptidelab_cart";

function getWarehouse(id) {
  return WAREHOUSES.find(w => w.id === id) || null;
}
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
  catch (e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function getSelectedWarehouseId() {
  return localStorage.getItem(WH_KEY) || "";
}

let selectedWarehouseId = getSelectedWarehouseId();

// ========== WAREHOUSE PICKER ==========
function renderWarehouses() {
  const wrap = document.getElementById("warehouse-grid");
  if (!wrap) return;

  const inCart = new Set(getCart().map(i => i.warehouseId));

  wrap.innerHTML = WAREHOUSES.map(w => {
    const count = CATALOG[w.id].length;
    const active = w.id === selectedWarehouseId;
    const has = inCart.has(w.id);
    return `
      <button class="wh-card${active ? " active" : ""}${has ? " in-cart" : ""}" data-wh="${w.id}" onclick="selectWarehouse('${w.id}')">
        <span class="wh-name">${w.name}${has ? ' <span class="wh-tick">● in your order</span>' : ""}</span>
        <span class="wh-scope">${w.scope}</span>
        <span class="wh-meta">${count} products · $${w.freight} freight · ${w.delivery}</span>
      </button>
    `;
  }).join("");
}

// The shipping group a cart currently belongs to (null when empty).
// Items may be mixed freely WITHIN a group — that is how the four US
// warehouses can appear on one order — but never across groups, because
// a US parcel and a Poland parcel are different shipments entirely.
function cartGroup() {
  const cart = getCart();
  if (!cart.length) return null;
  const w = getWarehouse(cart[0].warehouseId);
  return w ? w.group : null;
}

// Distinct warehouses represented in the cart, in catalog order.
function cartWarehouses() {
  const ids = [...new Set(getCart().map(i => i.warehouseId))];
  return WAREHOUSES.filter(w => ids.includes(w.id));
}

function selectWarehouse(id) {
  const cart = getCart();
  const to = getWarehouse(id);
  const group = cartGroup();

  // Only a cross-GROUP switch empties the cart. Moving between US warehouses
  // keeps everything, so a customer can take items from several of them.
  if (cart.length > 0 && group && to && to.group !== group) {
    const from = cartWarehouses().map(w => w.name).join(" + ");
    const ok = confirm(
      `Your cart has ${cart.length} item${cart.length > 1 ? "s" : ""} from ${from}.\n\n` +
      `${to.name} ships from a different country, so it cannot be combined with that order.\n\n` +
      `Switch to ${to.name} and empty your cart?`
    );
    if (!ok) return;
    saveCart([]);
    updateCartCount();
  }

  selectedWarehouseId = id;
  localStorage.setItem(WH_KEY, id);
  renderWarehouses();
  renderProducts();

  const panel = document.getElementById("catalog-panel");
  if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ========== PRODUCT TABLE ==========
function currentProducts() {
  return selectedWarehouseId ? (CATALOG[selectedWarehouseId] || []) : [];
}

function renderProducts() {
  const panel = document.getElementById("catalog-panel");
  const body = document.getElementById("product-rows");
  const head = document.getElementById("catalog-heading");
  const note = document.getElementById("catalog-note");
  if (!panel || !body) return;

  if (!selectedWarehouseId) {
    panel.style.display = "none";
    return;
  }

  const w = getWarehouse(selectedWarehouseId);
  panel.style.display = "block";
  if (head) head.textContent = w.name;
  if (note) {
    note.innerHTML =
      `<strong>${w.scope}</strong> · Flat $${w.freight} freight · Delivery within ${w.delivery}` +
      (w.id === "pl" ? `<br><span class="catalog-ships">Ships to: ${w.ships.join(" · ")}</span>` : "");
  }

  const query = (document.getElementById("product-search")?.value || "").trim().toLowerCase();
  const rows = currentProducts().filter(p =>
    !query || p.code.toLowerCase().includes(query) || p.name.toLowerCase().includes(query)
  );

  const countEl = document.getElementById("search-count");
  if (countEl) {
    countEl.textContent = query
      ? `${rows.length} of ${currentProducts().length} products`
      : `${currentProducts().length} products`;
  }

  if (rows.length === 0) {
    body.innerHTML = `<tr><td colspan="5" class="no-results">No product matches “${escapeHtml(query)}” in ${w.name}.</td></tr>`;
    return;
  }

  body.innerHTML = rows.map(p => `
    <tr>
      <td class="col-code">${p.code}</td>
      <td class="col-name">${p.name}</td>
      <td class="col-size">${p.size}</td>
      <td class="col-price">$${p.price}</td>
      <td class="col-add">
        <button class="add-btn" onclick="addToCart('${p.code}', event)" aria-label="Add ${p.name} to cart">Add</button>
      </td>
    </tr>
  `).join("");
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ========== SEARCH ==========
function searchProducts() {
  const clearBtn = document.getElementById("search-clear");
  const query = (document.getElementById("product-search")?.value || "").trim();
  if (clearBtn) clearBtn.style.display = query ? "block" : "none";
  renderProducts();
}

function clearSearch() {
  const input = document.getElementById("product-search");
  if (input) input.value = "";
  searchProducts();
}

// ========== CART ==========
function addToCart(code, e) {
  if (e) e.stopPropagation();
  if (!selectedWarehouseId) {
    showToast("Choose a warehouse first");
    return;
  }

  const product = currentProducts().find(p => p.code === code);
  if (!product) return;

  const w = getWarehouse(selectedWarehouseId);
  const cart = getCart();

  // Same SKU already in the cart → bump quantity instead of duplicating the row.
  const existing = cart.find(i => i.code === code && i.warehouseId === w.id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({
      code: product.code,
      name: product.name,
      size: product.size,
      price: product.price,
      qty: 1,
      warehouseId: w.id,
      warehouseName: w.name
    });
  }

  saveCart(cart);
  updateCartCount();
  renderWarehouses(); // refresh the "in your order" marker on the cards
  showToast(`${product.name} added to cart`);
}

function cartCount() {
  return getCart().reduce((n, i) => n + (i.qty || 1), 0);
}

function updateCartCount() {
  const count = cartCount();

  const badge = document.getElementById("cart-badge");
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }

  const floatingCart = document.getElementById("floating-cart");
  const floatingBadge = document.getElementById("floating-badge");
  if (floatingCart && floatingBadge) {
    if (count > 0) {
      floatingCart.classList.add("visible");
      floatingBadge.textContent = count;
      floatingBadge.classList.add("show");
      floatingCart.classList.remove("pulse");
      void floatingCart.offsetWidth;
      floatingCart.classList.add("pulse");
    } else {
      floatingCart.classList.remove("visible");
      floatingBadge.classList.remove("show");
    }
  }
}

// ========== TOAST ==========
function showToast(message) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = message;
  toast.style.cssText = `
    position:fixed; bottom:2rem; left:50%; transform:translateX(-50%) translateY(20px);
    background:var(--accent); color:#ffffff; padding:0.75rem 1.8rem;
    border-radius:50px; font-family:var(--font-body); font-size:0.9rem; font-weight:500;
    box-shadow:0 8px 30px rgba(0,0,0,0.25); z-index:999;
    opacity:0; transition:all 0.3s ease;
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
  });
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ========== MOBILE NAV ==========
const hamburger = document.getElementById("hamburger");
if (hamburger) {
  hamburger.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("open");
  });
}
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
  });
});

// ========== COOKIE CONSENT ==========
function acceptCookies() {
  localStorage.setItem("peptidelab_cookies", "accepted");
  document.getElementById("cookie-banner").classList.add("hidden");
}
function declineCookies() {
  localStorage.setItem("peptidelab_cookies", "declined");
  document.getElementById("cookie-banner").classList.add("hidden");
}
const cookieChoice = localStorage.getItem("peptidelab_cookies");
if (cookieChoice) {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.classList.add("hidden");
}

// ========== BACK TO TOP ==========
const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("visible", window.scrollY > 400);
  });
}

// ========== INIT ==========
renderWarehouses();
renderProducts();
updateCartCount();
