// ========== PRODUCT DATA ==========
const products = [
  {
    id: 1,
    name: "BPC-157",
    category: "recovery",
    icon: "🩹",
    image: "image/bpc157.png",
    description: "Body Protection Compound. Widely researched for its exceptional tissue repair and gut healing properties.",
    popular: true,
    variants: [
      { size: "5mg × 10 vials",  price: 129 },
      { size: "10mg × 10 vials", price: 199 },
    ]
  },
  {
    id: 3,
    name: "Semaglutide",
    category: "longevity",
    icon: "💉",
    image: "image/semaglutide.png",
    description: "GLP-1 receptor agonist. Clinically validated for metabolic health, blood sugar regulation, and sustained weight management with significant cardiovascular benefits.",
    popular: true,
    variants: [
      { size: "5mg × 10 vials",   price: 185 },
      { size: "10mg × 10 vials",  price: 245 },
      { size: "15mg × 10 vials",  price: 285 },
      { size: "20mg × 10 vials",  price: 310 },
      { size: "30mg × 10 vials",  price: 369 },
      { size: "50mg × 10 vials",  price: 410 },
    ]
  },
  {
    id: 4,
    name: "Tirzepatide",
    category: "longevity",
    icon: "💉",
    image: "image/tirzepatide.png",
    description: "Dual GIP/GLP-1 receptor agonist. Superior metabolic optimization with enhanced glycemic control, substantial weight reduction, and emerging cardiovascular and neuroprotective benefits.",
    popular: true,
    variants: [
      { size: "5mg × 10 vials",   price: 190 },
      { size: "10mg × 10 vials",  price: 235 },
      { size: "15mg × 10 vials",  price: 285 },
      { size: "20mg × 10 vials",  price: 309 },
      { size: "30mg × 10 vials",  price: 369 },
      { size: "40mg × 10 vials",  price: 409 },
      { size: "50mg × 10 vials",  price: 449 },
      { size: "60mg × 10 vials",  price: 489 },
      { size: "100mg × 10 vials", price: 529 },
    ]
  },
  {
    id: 5,
    name: "Retatrutide",
    category: "longevity",
    icon: "💉",
    image: "image/retatrutide.png",
    description: "Triple GIP/GLP-1/Glucagon receptor agonist. Next-generation metabolic optimizer delivering unprecedented weight reduction, enhanced energy expenditure, and comprehensive cardiometabolic protection.",
    popular: true,
    variants: [
      { size: "5mg × 10 vials",  price: 250 },
      { size: "10mg × 10 vials", price: 270 },
      { size: "15mg × 10 vials", price: 295 },
      { size: "20mg × 10 vials", price: 345 },
      { size: "30mg × 10 vials", price: 400 },
      { size: "40mg × 10 vials", price: 450 },
      { size: "50mg × 10 vials", price: 480 },
      { size: "60mg × 10 vials", price: 520 },
    ]
  },
  {
    id: 6,
    name: "HGH",
    category: "growth",
    icon: "💪",
    image: "image/hgh.png",
    description: "Human Growth Hormone. Directly stimulates IGF-1 production, driving muscle hypertrophy, bone density, lipolysis, and systemic cellular regeneration.",
    popular: true,
    variants: [
      { size: "10iu × 10 vials", price: 180 },
      { size: "12iu × 10 vials", price: 230 },
      { size: "15iu × 10 vials", price: 250 },
      { size: "24iu × 10 vials", price: 290 },
      { size: "36iu × 10 vials", price: 390 },
    ]
  },
  {
    id: 7,
    name: "GHK-Cu",
    category: "longevity",
    icon: "✨",
    image: "image/ghkcu.png",
    description: "Copper peptide tripeptide complex. Promotes collagen synthesis, wound healing, and anti-aging skin regeneration.",
    variants: [
      { size: "50mg × 10 vials",  price: 169 },
      { size: "100mg × 10 vials", price: 189 },
    ]
  },
  {
    id: 8,
    name: "Glutathione",
    category: "longevity",
    icon: "🛡️",
    image: "image/glutathione.png",
    description: "Master antioxidant tripeptide. Central to cellular detoxification, immune function, and redox balance. Declines with age; supplementation supports systemic resilience.",
    price: 209,
    size: "1500mg × 10 vials"
  },
  {
    id: 9,
    name: "Cagrilintide",
    category: "longevity",
    icon: "💉",
    image: "image/cagrilintide.png",
    description: "Long-acting amylin analogue with C16 fatty acyl modification. Enhances satiety signaling, slows gastric emptying, and complements GLP-1 therapy for superior weight management.",
    variants: [
      { size: "5mg × 10 vials",  price: 280 },
      { size: "10mg × 10 vials", price: 420 },
    ]
  },
  {
    id: 10,
    name: "Snap-8",
    category: "longevity",
    icon: "✨",
    image: "image/snap8.png",
    description: "Botulinum toxin-like octapeptide. Reduces neuronal exocytosis of acetylcholine, softening expression lines and wrinkles without paralysis. Topical and injectable cosmetic longevity.",
    price: 149,
    size: "10mg × 10 vials"
  },
  {
    id: 11,
    name: "Semax",
    category: "cognitive",
    icon: "⚡",
    image: "image/semax.png",
    description: "ACTH(4-7) analogue with potent nootropic effects. Enhances BDNF and cognitive performance under research conditions.",
    popular: true,
    variants: [
      { size: "5mg × 10 vials",  price: 145 },
      { size: "10mg × 10 vials", price: 165 },
    ]
  },
  {
    id: 12,
    name: "Selank",
    category: "cognitive",
    icon: "🧠",
    image: "image/selank.png",
    description: "Anxiolytic nootropic peptide derived from tuftsin. Research shows improved memory, focus, and stress modulation.",
    variants: [
      { size: "5mg × 10 vials",  price: 150 },
      { size: "10mg × 10 vials", price: 155 },
    ]
  },
  {
    id: 13,
    name: "KPV",
    category: "recovery",
    icon: "🩹",
    image: "image/kpv.png",
    description: "α-MSH-derived anti-inflammatory tripeptide. Potent modulator of immune response, gut barrier integrity, and wound healing without melanotropic side effects.",
    variants: [
      { size: "5mg × 10 vials",  price: 160 },
      { size: "10mg × 10 vials", price: 189 },
    ]
  },
  {
    id: 14,
    name: "IGF-1 LR3",
    category: "growth",
    icon: "💪",
    image: "image/igf1lr3.png",
    description: "Long-acting IGF-1 analogue with extended half-life and reduced IGFBP binding. Drives potent anabolism, hyperplasia, and nutrient partitioning for maximal tissue growth.",
    variants: [
      { size: "0.1mg × 10 vials", price: 216 },
      { size: "1mg × 10 vials",   price: 390 },
    ]
  },
  {
    id: 15,
    name: "Tesamorelin",
    category: "growth",
    icon: "💪",
    image: "image/tesamorelin.png",
    description: "GHRH analogue with trans-3-hexenoic acid modification. Selectively stimulates endogenous GH secretion with proven efficacy in visceral adipose reduction and IGF-1 elevation.",
    variants: [
      { size: "2mg × 10 vials",  price: 250 },
      { size: "5mg × 10 vials",  price: 390 },
      { size: "10mg × 10 vials", price: 450 },
      { size: "20mg × 10 vials", price: 540 },
    ]
  },
  {
    id: 16,
    name: "Ipamorelin",
    category: "growth",
    icon: "💪",
    image: "image/ipamorelin.png",
    description: "Selective growth hormone secretagogue. Stimulates GH release with minimal cortisol or prolactin elevation.",
    variants: [
      { size: "2mg × 10 vials",  price: 250 },
      { size: "5mg × 10 vials",  price: 300 },
      { size: "10mg × 10 vials", price: 370 },
    ]
  },
  {
    id: 17,
    name: "MOTS-c",
    category: "longevity",
    icon: "🔋",
    image: "image/motsc.png",
    description: "Mitochondrial-derived peptide regulating metabolic homeostasis. Enhances insulin sensitivity, promotes AMPK activation, and supports cellular energy resilience.",
    variants: [
      { size: "10mg × 10 vials", price: 265 },
      { size: "20mg × 10 vials", price: 380 },
      { size: "40mg × 10 vials", price: 499 },
    ]
  },
  {
    id: 18,
    name: "SLU-PP-332",
    category: "longevity",
    icon: "⚡",
    image: "image/slupp322.png",
    description: "Pan-ERR agonist small molecule. Amplifies oxidative metabolism, mitochondrial biogenesis, and exercise capacity by activating estrogen-related receptor pathways.",
    price: 210,
    size: "10mg × 10 vials"
  },
  {
    id: 19,
    name: "Epithalon",
    category: "longevity",
    icon: "⏳",
    image: "image/epithalon.png",
    description: "Telomerase-activating tetrapeptide. Studied for its role in extending telomere length and promoting cellular longevity.",
    variants: [
      { size: "10mg × 10 vials", price: 140 },
      { size: "50mg × 10 vials", price: 250 },
    ]
  },
  {
    id: 20,
    name: "PT-141",
    category: "longevity",
    icon: "🔥",
    image: "image/pt141.png",
    description: "Melanocortin receptor agonist. FDA-approved for sexual arousal dysfunction via central nervous system activation, independent of vascular mechanism.",
    price: 165,
    size: "10mg × 10 vials"
  },
  {
    id: 21,
    name: "DSIP",
    category: "cognitive",
    icon: "🌙",
    image: "image/dsip.png",
    description: "Delta Sleep-Inducing Peptide. Non-sedative sleep modulator that enhances REM and slow-wave sleep while reducing stress-induced cortisol and adrenaline.",
    variants: [
      { size: "5mg × 10 vials",  price: 145 },
      { size: "10mg × 10 vials", price: 180 },
    ]
  },
  {
    id: 22,
    name: "Dermorphin",
    category: "recovery",
    icon: "🩹",
    image: "image/dermophin.png",
    description: "μ-Opioid receptor superagonist from amphibian origin. Exceptional analgesic potency with high selectivity, studied for pain management and tissue stress reduction.",
    price: 140,
    size: "5mg × 10 vials"
  },
  {
    id: 23,
    name: "Thymosin Alpha-1",
    category: "recovery",
    icon: "🛡️",
    image: "image/thymosinalpha1.png",
    description: "Immunomodulatory peptide fragment of prothymosin alpha. Enhances T-cell differentiation, dendritic cell maturation, and innate immune response for systemic defense and recovery.",
    variants: [
      { size: "5mg × 10 vials",  price: 190 },
      { size: "10mg × 10 vials", price: 265 },
    ]
  },
  {
    id: 24,
    name: "Sermorelin Acetate",
    category: "growth",
    icon: "💪",
    image: "image/sermorelinacetate.png",
    description: "GHRH 1-29 analogue with acetate stabilization. Stimulates pulsatile endogenous GH release, supporting IGF-1 elevation with natural feedback preservation.",
    variants: [
      { size: "5mg × 10 vials",  price: 209 },
      { size: "10mg × 10 vials", price: 270 },
    ]
  },
  {
    id: 25,
    name: "HCG",
    category: "growth",
    icon: "⚡",
    image: "image/hcg.png",
    description: "Human Chorionic Gonadotropin. Mimics LH activity to stimulate testicular testosterone production and maintain fertility during anabolic suppression.",
    variants: [
      { size: "5000IU × 10 vials",  price: 260 },
      { size: "10000IU × 10 vials", price: 340 },
    ]
  },
  {
    id: 26,
    name: "GHRP-6 Acetate",
    category: "growth",
    icon: "🍽️",
    image: "image/ghrp6acetate.png",
    description: "Ghrelin receptor agonist hexapeptide. Potent GH secretagogue with pronounced appetite stimulation, supporting bulking phases and growth hormone pulsatility.",
    variants: [
      { size: "5mg × 10 vials",  price: 135 },
      { size: "10mg × 10 vials", price: 255 },
    ]
  },
  {
    id: 27,
    name: "IGF-1 DES",
    category: "growth",
    icon: "💪",
    image: "image/igfdes.png",
    description: "Truncated IGF-1 analogue with N-terminal deletion. Potent local tissue growth with reduced binding protein interference and enhanced receptor activation.",
    price: 165,
    size: "2mg × 10 vials"
  },
  {
    id: 28,
    name: "SS-31 (Elamipretide)",
    category: "longevity",
    icon: "🔋",
    image: "image/ss31.png",
    description: "Mitochondria-targeted tetrapeptide. Binds cardiolipin to preserve cristae structure, enhance ATP production, and protect against oxidative damage in aging tissues.",
    variants: [
      { size: "10mg × 10 vials", price: 195 },
      { size: "50mg × 10 vials", price: 490 },
    ]
  },
  {
    id: 29,
    name: "Mazdutide",
    category: "longevity",
    icon: "💉",
    image: "image/mazdutide.png",
    description: "Dual GLP-1/GCGR agonist. Balanced metabolic optimization with substantial weight reduction, improved lipid profiles, and enhanced energy expenditure via glucagon receptor co-activation.",
    variants: [
      { size: "5mg × 10 vials",  price: 285 },
      { size: "10mg × 10 vials", price: 410 },
    ]
  },
  {
    id: 30,
    name: "CJC-1295 (No DAC)",
    category: "growth",
    icon: "📈",
    image: "image/cjc1259withoutdac.png",
    description: "Short-acting GHRH analogue without DAC modification. Produces natural GH pulsatility with rapid clearance, ideal for multiple daily injections mimicking endogenous hypothalamic rhythm.",
    variants: [
      { size: "2mg × 10 vials",  price: 190 },
      { size: "5mg × 10 vials",  price: 260 },
      { size: "10mg × 10 vials", price: 330 },
    ]
  },
  {
    id: 31,
    name: "CJC-1295 (With DAC)",
    category: "growth",
    icon: "📈",
    image: "image/cjc1295withdac.png",
    description: "Long-acting GHRH analogue with Drug Affinity Complex. Sustained GH release over 6-8 days per dose, ideal for convenience protocols with elevated baseline IGF-1.",
    variants: [
      { size: "5mg × 10 vials",  price: 290 },
      { size: "10mg × 10 vials", price: 450 },
    ]
  },
  {
    id: 32,
    name: "Hexarelin",
    category: "growth",
    icon: "❤️",
    image: "image/hexarelin.png",
    description: "Potent GHRP receptor superagonist with cardioprotective properties. Strongest GH release among GHRPs with CD36-mediated cardiac benefits and significant appetite stimulation.",
    variants: [
      { size: "2mg × 10 vials",  price: 195 },
      { size: "5mg × 10 vials",  price: 245 },
      { size: "10mg × 10 vials", price: 295 },
    ]
  },
  {
    id: 33,
    name: "BAC Water",
    category: "recovery",
    icon: "💧",
    image: "image/bacwater.jpg",
    description: "Bacteriostatic water for injection. Essential for reconstituting lyophilized peptides. Benzyl alcohol prevents bacterial growth, enabling multi-dose vial use.",
    variants: [
      { size: "3mL × 10 vials",  price: 44 },
      { size: "10mL × 10 vials", price: 67 },
    ]
  },
  {
    id: 34,
    name: "MT1 (Melanotan I)",
    category: "longevity",
    icon: "☀️",
    image: "image/mt1.png",
    description: "α-MSH analogue for melanin stimulation. Provides systemic photoprotection, reduces UV damage, and supports skin resilience against photoaging.",
    price: 150,
    size: "10mg × 10 vials"
  },
];

// ========== RENDER PRODUCTS ==========
function renderProducts(filter = "all") {
  const grid = document.getElementById("product-grid");
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => {
    const hasVariants = p.variants && p.variants.length > 0;
    const priceDisplay = hasVariants
      ? `<span class="price-range">$${p.variants[0].price} <span class="price-dash">—</span> $${p.variants[p.variants.length-1].price}</span>`
      : `$${p.price} <small>/ ${p.size}</small>`;

    const variantDropdown = hasVariants ? `
      <select class="variant-select" id="variant-${p.id}" onchange="updateVariantPrice(${p.id})">
        <option value="" disabled selected>Select dose</option>
        ${p.variants.map((v, idx) => `<option value="${idx}">${v.size} — $${v.price}</option>`).join("")}
      </select>
    ` : "";

    return `
      <div class="product-card" style="animation-delay:${i * 0.07}s;position:relative" data-id="${p.id}">
        ${p.popular ? `<div style="position:absolute;top:1.2rem;right:1.2rem;font-size:0.7rem;background:rgba(0,200,255,0.15);color:var(--accent);padding:0.2rem 0.7rem;border-radius:50px;letter-spacing:1px;text-transform:uppercase;">Popular</div>` : ''}
        <span class="product-badge badge-${p.category}">${p.category}</span>
        <div class="product-img-wrap">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" /><div class="product-icon" style="display:none">${p.icon}</div>`
            : `<div class="product-icon">${p.icon}</div>`
          }
        </div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        ${variantDropdown}
        <div class="product-footer" style="margin-top:1rem">
          <div class="product-price" id="price-${p.id}">${priceDisplay}</div>
          <button class="add-btn" onclick="addToCart(${p.id}, event)" title="Add to cart">+</button>
        </div>
      </div>
    `;
  }).join("");
}

// ========== SEARCH ==========
let currentFilter = "all";

function searchProducts() {
  const query = document.getElementById("product-search").value.trim().toLowerCase();
  const clearBtn = document.getElementById("search-clear");
  const countEl = document.getElementById("search-count");
  const grid = document.getElementById("product-grid");

  // Show/hide clear button
  if (clearBtn) clearBtn.style.display = query ? "flex" : "none";

  // Reset filter tabs to All when searching
  if (query) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelector(".tab[data-filter='all']").classList.add("active");
    currentFilter = "all";
  }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  if (countEl) {
    countEl.textContent = query
      ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`
      : "";
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:4rem 0;">
        <p style="font-size:2rem;margin-bottom:0.75rem">🔬</p>
        <p style="color:var(--text-muted);font-size:0.95rem;">No peptides found for "<strong style="color:var(--text)">${query}</strong>"</p>
        <button onclick="clearSearch()" style="margin-top:1rem;background:none;border:1px solid var(--border);color:var(--accent);font-family:var(--font-body);font-size:0.85rem;padding:0.5rem 1.2rem;border-radius:50px;cursor:pointer;">Clear Search</button>
      </div>`;
    return;
  }

  renderFilteredProducts(filtered);
}

function clearSearch() {
  const input = document.getElementById("product-search");
  const clearBtn = document.getElementById("search-clear");
  const countEl = document.getElementById("search-count");
  if (input) input.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  if (countEl) countEl.textContent = "";
  renderProducts(currentFilter);
}

function renderFilteredProducts(filtered) {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = filtered.map((p, i) => {
    const hasVariants = p.variants && p.variants.length > 0;
    const priceDisplay = hasVariants
      ? `<span class="price-range">$${p.variants[0].price} <span class="price-dash">—</span> $${p.variants[p.variants.length-1].price}</span>`
      : `$${p.price} <small>/ ${p.size}</small>`;
    const variantDropdown = hasVariants ? `
      <select class="variant-select" id="variant-${p.id}" onchange="updateVariantPrice(${p.id})">
        <option value="" disabled selected>Select dose</option>
        ${p.variants.map((v, idx) => `<option value="${idx}">${v.size} — $${v.price}</option>`).join("")}
      </select>` : "";
    return `
      <div class="product-card" style="animation-delay:${i * 0.07}s;position:relative" data-id="${p.id}">
        ${p.popular ? `<div style="position:absolute;top:1.2rem;right:1.2rem;font-size:0.7rem;background:rgba(0,200,255,0.15);color:var(--accent);padding:0.2rem 0.7rem;border-radius:50px;letter-spacing:1px;text-transform:uppercase;">Popular</div>` : ''}
        <span class="product-badge badge-${p.category}">${p.category}</span>
        <div class="product-img-wrap">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" /><div class="product-icon" style="display:none">${p.icon}</div>`
            : `<div class="product-icon">${p.icon}</div>`
          }
        </div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        ${variantDropdown}
        <div class="product-footer" style="margin-top:1rem">
          <div class="product-price" id="price-${p.id}">${priceDisplay}</div>
          <button class="add-btn" onclick="addToCart(${p.id}, event)" title="Add to cart">+</button>
        </div>
      </div>`;
  }).join("");
}

// ========== FILTER TABS ==========
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentFilter = tab.dataset.filter;
    // Clear search when switching tabs
    const input = document.getElementById("product-search");
    const clearBtn = document.getElementById("search-clear");
    const countEl = document.getElementById("search-count");
    if (input) input.value = "";
    if (clearBtn) clearBtn.style.display = "none";
    if (countEl) countEl.textContent = "";
    renderProducts(currentFilter);
  });
});

// ========== VARIANT PRICE UPDATE ==========
function updateVariantPrice(id) {
  const product = products.find(p => p.id === id);
  if (!product || !product.variants) return;
  const select = document.getElementById(`variant-${id}`);
  const idx = parseInt(select.value);
  const variant = product.variants[idx];
  const priceEl = document.getElementById(`price-${id}`);
  if (priceEl) priceEl.innerHTML = `$${variant.price} <small>/ ${variant.size}</small>`;
}

// ========== CART ==========
function addToCart(id, e) {
  e.stopPropagation();
  const product = products.find(p => p.id === id);

  let cartItem;
  if (product.variants) {
    const select = document.getElementById(`variant-${id}`);
    if (!select || select.value === "") {
      showToast("Please select a size first! 👆");
      if (select) { select.style.borderColor = "#ff5555"; setTimeout(() => select.style.borderColor = "", 2000); }
      return;
    }
    const variant = product.variants[parseInt(select.value)];
    cartItem = { id: product.id, name: product.name, icon: product.icon, image: product.image, category: product.category, description: product.description, price: variant.price, size: variant.size };
  } else {
    cartItem = product;
  }

  const cart = JSON.parse(localStorage.getItem("peptidelab_cart") || "[]");
  cart.push(cartItem);
  localStorage.setItem("peptidelab_cart", JSON.stringify(cart));
  // Update nav badge
  const badge = document.getElementById("cart-badge");
  if (badge) { badge.textContent = cart.length; badge.style.display = "flex"; }
  // Update floating cart
  updateFloatingCart(cart.length);
  // Pulse animation
  const floatingCart = document.getElementById("floating-cart");
  if (floatingCart) {
    floatingCart.classList.remove("pulse");
    void floatingCart.offsetWidth;
    floatingCart.classList.add("pulse");
  }
  showToast(`${cartItem.name} (${cartItem.size}) added to cart 🧪`);
}

function showToast(message) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = message;
  toast.style.cssText = `
    position:fixed; bottom:2rem; left:50%; transform:translateX(-50%) translateY(20px);
    background:var(--accent); color:var(--bg); padding:0.75rem 1.8rem;
    border-radius:50px; font-family:var(--font-body); font-size:0.9rem; font-weight:500;
    box-shadow:0 8px 30px rgba(0,200,255,0.35); z-index:999;
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

// ========== FAQ ACCORDION ==========
document.querySelectorAll(".faq-q").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// ========== NEWSLETTER FORM ==========
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById("form-msg");
  msg.textContent = "✓ You're on the list! Welcome to the Lab.";
  e.target.reset();
  setTimeout(() => msg.textContent = "", 4000);
}

// ========== MOBILE NAV ==========
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// Close mobile menu when any nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
  });
});

// ========== SCROLL ANIMATION ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".info-card, .faq-item").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

// ========== FLOATING CART ==========
function updateFloatingCart(count) {
  const btn = document.getElementById("floating-cart");
  const badge = document.getElementById("floating-badge");
  if (!btn) return;
  if (count > 0) {
    btn.classList.add("visible");
    badge.textContent = count;
    badge.classList.add("show");
  } else {
    btn.classList.remove("visible");
    badge.classList.remove("show");
  }
}

// ========== INIT ==========
renderProducts();

// Show cart badge and floating cart if items exist
const _cartOnLoad = JSON.parse(localStorage.getItem("peptidelab_cart") || "[]");
const _badge = document.getElementById("cart-badge");
if (_badge && _cartOnLoad.length > 0) { _badge.textContent = _cartOnLoad.length; _badge.style.display = "flex"; }
updateFloatingCart(_cartOnLoad.length);
