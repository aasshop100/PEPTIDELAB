// ========== PRODUCT DATA ==========
const products = [
  {
    id: 1,
    name: "BPC-157",
    seq: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
    category: "recovery",
    icon: "🩹",
    description: "Body Protection Compound. Widely researched for its exceptional tissue repair and gut healing properties.",
    price: 54.99,
    purity: 99.1,
    size: "5mg",
    popular: true
  },
  {
    id: 2,
    name: "TB-500",
    seq: "Ac-Ser-Asp-Lys-Pro-Asp-Met-Ala-Glu-Ile-Glu-Lys-Phe-Asp-Lys-Ser",
    category: "recovery",
    icon: "⚕️",
    description: "Thymosin Beta-4 fragment. Promotes cell migration and regeneration, supporting muscle and connective tissue recovery.",
    price: 64.99,
    purity: 98.7,
    size: "5mg"
  },
  {
    id: 3,
    name: "Ipamorelin",
    seq: "Aib-His-D-2-Nal-D-Phe-Lys-NH2",
    category: "growth",
    icon: "💪",
    description: "Selective growth hormone secretagogue. Stimulates GH release with minimal cortisol or prolactin elevation.",
    price: 44.99,
    purity: 99.3,
    size: "5mg",
    popular: true
  },
  {
    id: 4,
    name: "CJC-1295",
    seq: "Tyr-DAla-Asp-Ala-Ile-Phe-Thr-Gln-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln",
    category: "growth",
    icon: "📈",
    description: "Long-acting GHRH analogue. Pairs with Ipamorelin for sustained pulsatile GH secretion and IGF-1 elevation.",
    price: 49.99,
    purity: 98.9,
    size: "5mg"
  },
  {
    id: 5,
    name: "Selank",
    seq: "Thr-Lys-Pro-Arg-Pro-Gly-Pro",
    category: "cognitive",
    icon: "🧠",
    description: "Anxiolytic nootropic peptide derived from tuftsin. Research shows improved memory, focus, and stress modulation.",
    price: 39.99,
    purity: 99.0,
    size: "5mg"
  },
  {
    id: 6,
    name: "Semax",
    seq: "Met-Glu-His-Phe-Pro-Gly-Pro",
    category: "cognitive",
    icon: "⚡",
    description: "ACTH(4-7) analogue with potent nootropic effects. Enhances BDNF and cognitive performance under research conditions.",
    price: 42.99,
    purity: 99.2,
    size: "5mg",
    popular: true
  },
  {
    id: 7,
    name: "Epithalon",
    seq: "Ala-Glu-Asp-Gly",
    category: "longevity",
    icon: "⏳",
    description: "Telomerase-activating tetrapeptide. Studied for its role in extending telomere length and promoting cellular longevity.",
    price: 59.99,
    purity: 99.5,
    size: "10mg"
  },
  {
    id: 8,
    name: "GHK-Cu",
    seq: "Gly-His-Lys·Cu²⁺",
    category: "longevity",
    icon: "✨",
    description: "Copper peptide tripeptide complex. Promotes collagen synthesis, wound healing, and anti-aging skin regeneration.",
    price: 34.99,
    purity: 98.8,
    size: "50mg"
  }
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
