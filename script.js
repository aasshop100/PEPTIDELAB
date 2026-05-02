// ========== PRODUCT DATA ==========
const products = [
  {
    id: 1,
    name: "BPC-157",
    seq: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
    category: "recovery",
    icon: "🩹",
    description: "Body Protection Compound. Widely researched for its exceptional tissue repair and gut healing properties.",
    price: 129,
    purity: 99.1,
    size: "5mg*10vials",
    popular: true
  },
  {
    id: 2,
    name: "BPC-157",
    seq: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
    category: "recovery",
    icon: "🩹",
    description: "Body Protection Compound. Widely researched for its exceptional tissue repair and gut healing properties.",
    price: 199,
    purity: 99.1,
    size: "10mg*10vials",
    popular: true
  },
  {
    id: 3,
    name: "Semaglutide",
    seq: "His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
    category: "longevity",
    icon: "💉",
    description: "GLP-1 receptor agonist. Clinically validated for metabolic health, blood sugar regulation, and sustained weight management with significant cardiovascular benefits.",
    price: 180,
    purity: 99.1,
    size: "5mg*10vials",
    popular: true
  },
  {
    id: 4,
    name: "Tirzepatide",
    seq: "Tyr-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Tyr-Ser-Ile-Aib-Leu-Asp-Lys-Ile-Ala-Gln-Lys-Ala-Phe-Ile-Gln-Trp-Leu-Ile-Ala-Gly-Gly-Pro-Ser-Ser-Gly-Ala-Pro-Pro-Pro-Ser-NH2",
    category: "longevity",
    icon: "💉",
    description: "Dual GIP/GLP-1 receptor agonist. Superior metabolic optimization with enhanced glycemic control, substantial weight reduction, and emerging cardiovascular and neuroprotective benefits.",
    price: 190,
    purity: 99.1,
    size: "5mg*10vials",
    popular: true
  },
   {
    id: 5,
    name: "Retatrutide",
    seq: "Tyr-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Tyr-Ser-Ile-Aib-Leu-Asp-Lys-Ile-Ala-His-Lys-Ala-Phe-Ile-Glu-Trp-Leu-Leu-Ala-Gly-Gly-Pro-Ser-Ser-Gly-Ala-Pro-Pro-Ser-NH2",
    category: "longevity",
    icon: "💉",
    description: "Triple GIP/GLP-1/Glucagon receptor agonist. Next-generation metabolic optimizer delivering unprecedented weight reduction, enhanced energy expenditure, and comprehensive cardiometabolic protection.",
    price: 250,
    purity: 99.1,
    size: "5mg*10vials",
    popular: true
  },
   {
    id: 6,
    name: "HGH",
    seq: "Tyr-Phe-Thr-Ser-Ile-Pro-Thr-Ser-Leu-Phe-Leu-Gln-Asp-Ile-Met-Asn-Asn-Gln-Gln-Thr-Tyr-Ser-Lys-Phe-Asp-Thr-Asn-Ser-His-Asn-Asp-Asp-Ala-Leu-Leu-Lys-Asn-Tyr-Gly-Leu-Leu-Tyr-Cys-Phe-Arg-Lys-Asp-Met-Lys-Gly-Trp-Thr-Asn-Ser-Gln-Ala-Ser-Lys-Glu-Gln-Leu-Gln-Gln-Ala-His-Asn-Ser-Leu-Gln-Glu-Arg-Leu-Arg-Lys-Asp-Asn-Ala-Leu-Gln-Gln-Ala-His-Asn-Ser-Leu-Gln-Glu-Arg-Leu-Arg-Lys-Asp-Asn-Ala-Leu-Gln-Gln-Ala-His-Asn-Ser-Leu-Gln-Glu-Arg-Leu-Arg-Lys-Asp-Asn-Ala-Leu-Gln-Gln-Ala-His-Asn-Ser-Leu-Gln-Glu-Arg-Leu-Arg-Lys-Asp-Asn-Ala-Leu-Gln-Gln-Ala-His-Asn-Ser-Leu-Gln-Glu-Arg-Leu-Arg-Lys-Asp-Asn-Ala-Leu-Gln-Gln-Ala-His-Asn-Ser-Leu-Gln-Glu-Arg-Leu-Arg-Lys-Asp-Asn-Ala-Leu-Gln-Gln-Ala-His-Asn-Ser-Leu-Gln-Glu-Arg-Leu-Arg-Lys-Asp-Asn-Ala-Leu-Gln-Gln-Ala-His-Asn-Ser-Leu-Gln-Glu-Arg-Leu-Arg-Lys-Asp-As",
    category: "growth",
    icon: "💪",
    description: "Human Growth Hormone. Directly stimulates IGF-1 production, driving muscle hypertrophy, bone density, lipolysis, and systemic cellular regeneration.",
    price: 180,
    purity: 99.1,
    size: "10iu*10vials",
    popular: true
  },
  {
    id: 7,
    name: "GHK-Cu",
    seq: "Gly-His-Lys·Cu²⁺",
    category: "longevity",
    icon: "✨",
    description: "Copper peptide tripeptide complex. Promotes collagen synthesis, wound healing, and anti-aging skin regeneration.",
    price: 169,
    purity: 98.8,
    size: "50mg*10vials"
  },
  {
    id: 8,
    name: "Glutathione",
    seq: "γ-Glu-Cys-Gly",
    category: "longevity",
    icon: "🛡️",
    description: "Master antioxidant tripeptide. Central to cellular detoxification, immune function, and redox balance. Declines with age; supplementation supports systemic resilience.",
    price: 209,
    purity: 98.8,
    size: "1500mg*10vials"
  },
  {
    id: 9,
    name: "Cagrilintide",
    seq: "C16-fatty-acyl-Lys-Cys-Asn-Thr-Ala-Thr-Cys-Ala-Thr-Gln-Arg-Leu-Ala-Asn-Phe-Leu-Val-His-Ser-Ser-Asn-Asn-Phe-Gly-Ala-Ile-Leu-Ser-Ser-Thr-Asn-Val-Gly-Ser-Asn-Thr-Tyr-NH2",
    category: "longevity",
    icon: "💉",
    description: "Long-acting amylin analogue with C16 fatty acyl modification. Enhances satiety signaling, slows gastric emptying, and complements GLP-1 therapy for superior weight management.",
    price: 280,
    purity: 98.8,
    size: "5mg*10vials"
  },
  {
    id: 10,
    name: "Snap-8",
    seq: "Ac-Glu-Glu-Met-Gln-Arg-Arg-Ala-Asp-NH2",
    category: "longevity",
    icon: "✨",
    description: "Botulinum toxin-like octapeptide. Reduces neuronal exocytosis of acetylcholine, softening expression lines and wrinkles without paralysis. Topical and injectable cosmetic longevity.",
    price: 149,
    purity: 98.8,
    size: "10mg*10vials"
  },
  {
    id: 11,
    name: "Semax",
    seq: "Met-Glu-His-Phe-Pro-Gly-Pro",
    category: "cognitive",
    icon: "⚡",
    description: "ACTH(4-7) analogue with potent nootropic effects. Enhances BDNF and cognitive performance under research conditions.",
    price: 145,
    purity: 99.2,
    size: "5mg",
    popular: true
  },
   {
    id: 12,
    name: "Selank",
    seq: "Thr-Lys-Pro-Arg-Pro-Gly-Pro",
    category: "cognitive",
    icon: "🧠",
    description: "Anxiolytic nootropic peptide derived from tuftsin. Research shows improved memory, focus, and stress modulation.",
    price: 150,
    purity: 99.0,
    size: "5mg"
  },
];

// ========== RENDER PRODUCTS ==========
function renderProducts(filter = "all") {
  const grid = document.getElementById("product-grid");
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.07}s" data-id="${p.id}">
      ${p.popular ? `<div style="position:absolute;top:1.2rem;right:1.2rem;font-size:0.7rem;background:rgba(0,200,255,0.15);color:var(--accent);padding:0.2rem 0.7rem;border-radius:50px;letter-spacing:1px;text-transform:uppercase;">Popular</div>` : ''}
      <div style="position:relative">
        <span class="product-badge badge-${p.category}">${p.category}</span>
        <div class="product-icon">${p.icon}</div>
        <h3>${p.name}</h3>
        <div class="product-seq">${p.seq.substring(0, 30)}...</div>
        <p>${p.description}</p>
        <div class="purity-bar"><div class="purity-fill" style="width:${p.purity}%"></div></div>
        <div class="purity-label">Purity: ${p.purity}%</div>
        <div class="product-footer" style="margin-top:1rem">
          <div class="product-price">$${p.price} <small>/ ${p.size}</small></div>
          <button class="add-btn" onclick="addToCart(${p.id}, event)" title="Add to cart">+</button>
        </div>
      </div>
    </div>
  `).join("");
}

// ========== FILTER TABS ==========
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderProducts(tab.dataset.filter);
  });
});

// ========== CART ==========
let cart = [];

function addToCart(id, e) {
  e.stopPropagation();
  const product = products.find(p => p.id === id);
  cart.push(product);
  showToast(`${product.name} added to cart 🧪`);
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

// ========== INIT ==========
renderProducts();
