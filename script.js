/* ==========================================================================
   THEFARZI CLIENT-SIDE CONTROLLER (SPA + STATE MANAGER)
   ========================================================================== */

// 1. PRODUCT CATALOG DATA
const PRODUCTS = [
  // KIDS CLOTHES (Rows 1 & 2 - Products 1 to 8)
  {
    id: "kid-deconstruct-jacket",
    name: "KIDS DECONSTRUCT JACKET",
    price: 3499,
    category: "denim",
    image: "images/product_kid_jacket.png",
    description: "Premium kids raw denim jacket with deconstructed detailing, double-needle contrast stitching, and durable hardware. Built for play and durability.",
    details: [
      "100% Durable Organic Indigo Cotton",
      "Soft-wash comfort feel on interior",
      "Raw edge accents and reinforced seams",
      "Stealth metal snap button closures"
    ],
    sizes: ["2Y", "4Y", "6Y", "8Y"]
  },
  {
    id: "kid-heavyweight-tee",
    name: "KIDS ESSENTIAL POCKET TEE",
    price: 1999,
    category: "tops",
    image: "images/product_kid_tee.png",
    description: "Kids essential heavyweight pocket tee made from dry organic cotton. Thick knit rib collar, relaxed shoulders, and front pocket.",
    details: [
      "100% Soft Organic Knit Cotton",
      "Thick rib collar to resist stretching",
      "Relaxed drop-shoulder play silhouette",
      "Front chest pocket detail"
    ],
    sizes: ["2Y", "4Y", "6Y", "8Y"]
  },
  {
    id: "kid-relaxed-jeans",
    name: "KIDS RELAXED DENIM JEANS",
    price: 2999,
    category: "denim",
    image: "images/product_kid_jeans.png",
    description: "Durable straight-leg kids raw indigo jeans. Crafted with reinforced knee panels and adjustable inner elastic waist tabs.",
    details: [
      "100% Long-Staple Rigid Cotton Denim",
      "Adjustable button-elastic inner waistband",
      "Contrast gold-thread structural seams",
      "Stealth button fly lock"
    ],
    sizes: ["2Y", "4Y", "6Y", "8Y"]
  },
  {
    id: "kid-raw-edge-black-jacket",
    name: "KIDS SHADOW BLACK JACKET",
    price: 3499,
    category: "denim",
    image: "images/product_kid_black_jacket.png",
    description: "Washed charcoal black cropped kids denim vest jacket with raw frayed edge detailing along cuffs and hem.",
    details: [
      "100% Organic Black Cotton Denim",
      "Washed down comfort feel",
      "Raw edge waist and collar borders",
      "Metal snap front closure"
    ],
    sizes: ["2Y", "4Y", "6Y", "8Y"]
  },
  {
    id: "kid-relaxed-black-jeans",
    name: "KIDS SHADOW BLACK JEANS",
    price: 2999,
    category: "denim",
    image: "images/product_kid_black_jeans.png",
    description: "Stealth washed black kids straight denim trousers, double-lined along cuffs for easy stacking and roll-ups.",
    details: [
      "100% Organic Indigo Black Denim",
      "Inner elastic stretch adjusters",
      "Traditional 5-pocket utility",
      "Double reinforced hems"
    ],
    sizes: ["2Y", "4Y", "6Y", "8Y"]
  },
  {
    id: "kid-leather-belt",
    name: "KIDS CLASSIC LEATHER BELT",
    price: 1499,
    category: "accessories",
    image: "images/product_kid_belt.png",
    description: "Clean oiled kids full-grain leather belt finished with a brushed steel round buckle. Sized for children's denim belt loops.",
    details: [
      "100% Genuine Oiled Full-Grain Leather",
      "Brushed nickel buckle clasp",
      "25mm narrow width for kids loops",
      "Handmade edge staining"
    ],
    sizes: ["S", "M", "L"]
  },
  {
    id: "kid-washed-blue-jacket",
    name: "KIDS WASHED BLUE JACKET",
    price: 3499,
    category: "denim",
    image: "images/product_kid_washed_blue_jacket.png",
    description: "Kids classic washed indigo denim jacket with authentic metal buttons and double chest pockets.",
    details: [
      "100% Sustainable Indigo Cotton",
      "Natural stone wash finish",
      "Adjustable button tab waistband",
      "Reinforced contrast stitching"
    ],
    sizes: ["2Y", "4Y", "6Y", "8Y"]
  },
  {
    id: "kid-indigo-shirt",
    name: "KIDS INDIGO DENIM SHIRT",
    price: 2499,
    category: "denim",
    image: "images/product_kid_indigo_shirt.png",
    description: "Kids lightweight indigo denim utility shirt, perfect as a layering piece or buttoned up.",
    details: [
      "100% Breathable Lightweight Cotton",
      "Snap button front closures",
      "Dual chest button patch pockets",
      "Curved shirttail hem"
    ],
    sizes: ["2Y", "4Y", "6Y", "8Y"]
  },

  // WOMEN CLOTHES (Rows 3 & 4 - Products 9 to 16)
  {
    id: "women-deconstruct-jacket",
    name: "WOMEN DECONSTRUCT JACKET",
    price: 6999,
    category: "denim",
    image: "images/product_women_jacket.png",
    description: "Exclusively tailored cropped women raw denim jacket. Modern structured shoulders, boxy drape, and raw edge cuff finishes.",
    details: [
      "100% Organic Okayama Indigo Cotton",
      "12.5oz Mid-weight Selvedge Denim",
      "Architectural seam alignment",
      "Cropped boxy raw silhouette"
    ],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: "women-heavyweight-tee",
    name: "WOMEN CROPPED BOX TEE",
    price: 3999,
    category: "tops",
    image: "images/product_women_tee.png",
    description: "Heavyweight cropped box tee made from raw dry cotton, featuring drop shoulders and a seamless hem finish.",
    details: [
      "100% Organic Combed Dry Cotton",
      "280 GSM Structured Heavy Knit",
      "Sleek cropped boxy body lines",
      "High mock neck ribbed collar"
    ],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: "women-relaxed-jeans",
    name: "WOMEN HIGH-RISE JEANS",
    price: 7999,
    category: "denim",
    image: "images/product_women_jeans.png",
    description: "High-waisted straight leg raw indigo denim jeans. Designed to break in beautifully and mold to your shape.",
    details: [
      "100% Organic Red-line Selvedge Cotton",
      "Vintage high-waisted straight silhouette",
      "Contoured waist lining for snug fit",
      "Hidden copper rivets"
    ],
    sizes: ["24", "26", "28", "30", "32"]
  },
  {
    id: "women-raw-edge-black-jacket",
    name: "WOMEN RAW EDGE BLACK JACKET",
    price: 6999,
    category: "denim",
    image: "images/product_women_black_jacket.png",
    description: "Structured cropped black utility denim jacket. Finished with deconstructed seams and polished nickel hardware.",
    details: [
      "100% Washed Charcoal Organic Denim",
      "Flat envelope pockets on front chest",
      "Raw edge cuff and collar bindings",
      "Waist adjustable metal cinches"
    ],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: "women-relaxed-black-jeans",
    name: "WOMEN BLACK TAPERED JEANS",
    price: 7999,
    category: "denim",
    image: "images/product_women_black_jeans.png",
    description: "High-rise raw black selvedge jeans cut in a clean tapered fit, ideal for clean stacking over boots.",
    details: [
      "13.5oz Black Selvedge Denim",
      "Tapered ankle silhouette with stacked leg",
      "Stealth tonal stitching throughout",
      "Genuine leather back-patch details"
    ],
    sizes: ["24", "26", "28", "30", "32"]
  },
  {
    id: "women-leather-belt",
    name: "WOMEN SLIM LEATHER BELT",
    price: 2499,
    category: "accessories",
    image: "images/product_women_belt.png",
    description: "A narrow, polished oiled grain leather belt featuring a solid brushed nickel loop buckle.",
    details: [
      "100% Premium Vegetable-Tanned Leather",
      "Solid brushed nickel hardware clasp",
      "22mm slim width styled for women loops",
      "Handmade wax sealed edges"
    ],
    sizes: ["S", "M", "L"]
  },
  {
    id: "women-indigo-shirt",
    name: "WOMEN INDIGO DENIM SHIRT",
    price: 4999,
    category: "denim",
    image: "images/product_women_indigo_shirt.png",
    description: "Women's classic long-sleeve indigo denim button-up shirt with front flap pockets and tailored fit.",
    details: [
      "100% Premium Organic Indigo Cotton",
      "Light stonewash finish for softness",
      "Slim tailored body lines",
      "Signature snap pearl button closures"
    ],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: "women-denim-skirt",
    name: "WOMEN RAW DENIM SKIRT",
    price: 5499,
    category: "denim",
    image: "images/product_women_skirt.png",
    description: "Women's raw denim A-line midi skirt with classic 5-pocket design and front slit detail.",
    details: [
      "100% Selvedge Organic Cotton",
      "Heavyweight rigid denim construct",
      "Premium copper rivet details",
      "Front slit for easy movement"
    ],
    sizes: ["XS", "S", "M", "L"]
  },

  // MEN CLOTHES (Rows 5 & 6 - Products 17 to 24)
  {
    id: "deconstruct-denim-jacket",
    name: "DECONSTRUCT DENIM JACKET",
    price: 8499,
    category: "denim",
    image: "images/product_jacket_blue.png",
    flatImage: "images/product_jacket_blue_flat.png",
    description: "Exclusively tailored cropped denim jacket featuring raw edge detailing, deconstructed paneling, and brushed metal hardware.",
    details: [
      "100% Organic Indigo Cotton",
      "14.5oz Heavyweight Selvedge Denim",
      "Raw edge cuffs and waistband detailing",
      "Signature double-stitch structural seams",
      "Relaxed cropped boxy fit"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "heavyweight-box-tee",
    name: "HEAVYWEIGHT BOX TEE",
    price: 6499,
    category: "tops",
    image: "images/product_tee_olive.png",
    flatImage: "images/product_tee_olive_flat.png",
    description: "An oversized, heavyweight dry-cotton jersey tee designed with a boxy silhouette, tight ribbed high collar, and drop shoulders.",
    details: [
      "100% Organic Dry Cotton",
      "310 GSM Ultra Heavyweight Knit",
      "Thick high-collar ribbed crewneck",
      "Drop shoulders with structured drape",
      "Preshrunk for optimal retention"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "relaxed-raw-selvedge",
    name: "RELAXED RAW SELVEDGE",
    price: 9499,
    category: "denim",
    image: "images/product_jeans_blue.png",
    flatImage: "images/product_jeans_blue_flat.png",
    description: "Relaxed straight-leg jeans cut from raw indigo selvedge denim. Crafted to break in and form custom crease patterns.",
    details: [
      "100% Organic Cotton Selvedge",
      "13.5oz Red-line Japanese Selvedge Denim",
      "Relaxed straight leg profile with clean stack",
      "Hidden copper rivets and reinforced stitching",
      "Branded button fly closure"
    ],
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: "raw-edge-jacket-black",
    name: "RAW EDGE BLACK JACKET",
    price: 8499,
    category: "denim",
    image: "images/product_jacket_black.png",
    flatImage: "images/product_jacket_black_flat.png",
    description: "Exclusively tailored washed black cropped denim jacket featuring deconstructed raw edge details.",
    details: [
      "100% Organic Black Cotton",
      "14.5oz Selvedge Denim",
      "Raw edge styling on seams and hem",
      "Exquisite silver-tone hardware"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "relaxed-black-selvedge",
    name: "RELAXED BLACK SELVEDGE",
    price: 9499,
    category: "denim",
    image: "images/product_jeans_black.png",
    flatImage: "images/product_jeans_black_flat.png",
    description: "Relaxed fit raw black denim jeans featuring selvedge detail and heavy stitch reinforcement.",
    details: [
      "100% Organic Cotton Selvedge",
      "13.5oz Black-line Selvedge Denim",
      "Relaxed straight leg profile",
      "Classic 5-pocket construction"
    ],
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: "classic-leather-belt",
    name: "CLASSIC LEATHER BELT",
    price: 3499,
    category: "accessories",
    image: "images/product_belt_leather.png",
    flatImage: "images/product_belt_leather_flat.png",
    description: "Premium oiled grain leather belt featuring a solid brushed steel buckle and hand-finished edges. The perfect anchor for raw denim.",
    details: [
      "100% Genuine Full-Grain Leather",
      "Solid brushed steel hardware buckle",
      "35mm width - optimized for denim loops",
      "Hand-finished edge staining and beveling",
      "Robust double-stitch reinforce strap"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "men-classic-denim-shirt",
    name: "MEN'S RAW UTILITY SHIRT",
    price: 5999,
    category: "denim",
    image: "images/product_men_shirt.png",
    description: "Men's premium raw denim utility shirt, designed with high structural density and a modern workwear fit.",
    details: [
      "100% Heavyweight Organic Cotton",
      "Raw indigo unwashed finish",
      "Reinforced dual chest workwear pockets",
      "Contrast double-needle stitch detailing"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "men-slim-indigo-jeans",
    name: "MEN'S SLIM FIT SELVEDGE",
    price: 8999,
    category: "denim",
    image: "images/product_men_slim_jeans.png",
    description: "Men's custom slim fit raw indigo denim jeans, tailored to break in with custom creases.",
    details: [
      "13.5oz Red-line Japanese Selvedge Cotton",
      "Sleek tapered slim leg profile",
      "Traditional 5-pocket construction",
      "Branded button fly closure"
    ],
    sizes: ["28", "30", "32", "34", "36"]
  }
];

// 2. LOOKBOOK SLIDES DATA
const LOOKS = [
  {
    id: "look-01",
    tag: "LOOK 01 // CORE",
    name: "RAW EDGE SILHOUETTE",
    image: "images/look1_model.png",
    gradient: "radial-gradient(circle at 75% 45%, #2a2c31 0%, #121316 65%)",
    products: ["deconstruct-denim-jacket", "classic-leather-belt", "relaxed-raw-selvedge"],
    hotspots: [
      { top: "38%", left: "49%", brand: "THEFARZI", name: "DECONSTRUCT DENIM JACKET", price: "₹8,499", align: "right", productId: "deconstruct-denim-jacket" },
      { top: "52%", left: "48%", brand: "THEFARZI", name: "CLASSIC LEATHER BELT", price: "₹3,499", align: "right", productId: "classic-leather-belt" },
      { top: "66%", left: "47%", brand: "THEFARZI", name: "RELAXED RAW SELVEDGE", price: "₹9,499", align: "right", productId: "relaxed-raw-selvedge" }
    ],
    headline: ["RAW EDGE", "SILHOUETTE", "STRUCTURES"]
  },
  {
    id: "look-02",
    tag: "LOOK 02 // STREET",
    name: "OVERSIZED BOX SILHOUETTE",
    image: "images/look2_model.png",
    gradient: "radial-gradient(circle at 75% 45%, #2d2a25 0%, #141311 65%)",
    products: ["heavyweight-box-tee", "classic-leather-belt", "relaxed-raw-selvedge"],
    hotspots: [
      { top: "40%", left: "49%", brand: "THEFARZI", name: "HEWEIGHT BOX TEE", price: "₹6,499", align: "right", productId: "heavyweight-box-tee" },
      { top: "53%", left: "49%", brand: "THEFARZI", name: "CLASSIC LEATHER BELT", price: "₹3,499", align: "right", productId: "classic-leather-belt" },
      { top: "67%", left: "46%", brand: "THEFARZI", name: "RELAXED RAW SELVEDGE", price: "₹9,499", align: "right", productId: "relaxed-raw-selvedge" }
    ],
    headline: ["OVERSIZED", "BOX SILHOUETTE", "PROPORTIONS"]
  },
  {
    id: "look-03",
    tag: "LOOK 03 // ARCHIVE",
    name: "DISTRESSED BLACK OUTLINE",
    image: "images/look3_model.png",
    gradient: "radial-gradient(circle at 75% 45%, #232529 0%, #0f1012 65%)",
    products: ["raw-edge-jacket-black", "classic-leather-belt", "relaxed-black-selvedge"],
    hotspots: [
      { top: "40%", left: "47%", brand: "THEFARZI", name: "RAW EDGE BLACK JACKET", price: "₹8,499", align: "right", productId: "raw-edge-jacket-black" },
      { top: "52%", left: "47%", brand: "THEFARZI", name: "CLASSIC LEATHER BELT", price: "₹3,499", align: "right", productId: "classic-leather-belt" },
      { top: "66%", left: "45%", brand: "THEFARZI", name: "RELAXED BLACK SELVEDGE", price: "₹9,499", align: "right", productId: "relaxed-black-selvedge" }
    ],
    headline: ["DISTRESSED", "BLACK OUTLINE", "ARCHIVE"]
  }
];

// REVIEWS STORE (Simulated in Memory)
let REVIEWS = {
  "deconstruct-denim-jacket": [
    { user: "Aarav M.", rating: 5, date: "June 18, 2026", comment: "The denim stiffness is perfect. The raw edge cuts look incredibly high-end. Fits cropped exactly as pictured." },
    { user: "Sarah K.", rating: 4, date: "May 29, 2026", comment: "Absolutely gorgeous silhouette. I would recommend sizing up if you want a slightly more relaxed shoulder fit." }
  ],
  "heavyweight-box-tee": [
    { user: "Kabir S.", rating: 5, date: "June 12, 2026", comment: "Finally, a shirt that is truly heavyweight. Thick collar holds up well after multiple washes." }
  ],
  "relaxed-raw-selvedge": [
    { user: "Rohan D.", rating: 5, date: "June 20, 2026", comment: "Outstanding selvedge line quality. Takes a couple of wears to break in but shapes beautifully." }
  ]
};

// 3. REACTIVE APP STATE
let state = {
  cart: JSON.parse(localStorage.getItem("farzi_cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("farzi_wishlist")) || [],
  currentLookIndex: 0,
  activeSort: "default",
  shopFirstLoaded: false
};

// State persistence
function saveState() {
  localStorage.setItem("farzi_cart", JSON.stringify(state.cart));
  localStorage.setItem("farzi_wishlist", JSON.stringify(state.wishlist));
  updateCartBadge();
}

// 4. TOAST NOTIFICATIONS
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type === "success" ? "toast-success" : ""}`;
  toast.innerHTML = `
    <i data-lucide="${type === "success" ? "check-circle" : "info"}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.animation = "toast-in 0.4s ease reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}

// 5. GLOBAL INTERACTIVE EVENTS SETUP (HEADER, CAROUSEL, DRAWERS)
function initShellEvents() {
  // Drawer Toggles
  setupDrawerToggle("cart-trigger", "cart-close", "cart-drawer", "cart-overlay-close");
  setupDrawerToggle("wishlist-trigger", "wishlist-close", "wishlist-drawer", "wishlist-overlay-close");
  setupDrawerToggle("mobile-menu-trigger", "mobile-menu-close", "mobile-menu", "drawer-overlay-close");
  setupDrawerToggle("search-trigger", "search-close", "search-modal", "search-overlay-bg-close");
  setupDrawerToggle(null, "look-drawer-close", "look-drawer", "look-overlay-close");
  setupDrawerToggle("footer-size-guide", "size-modal-close", "size-modal", "size-overlay-close");

  // Search Input Handler
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    handleSearch(e.target.value);
  });

  // Sticky Header Scroll Effect
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Add Look To Cart Button
  document.getElementById("add-look-to-cart").addEventListener("click", () => {
    addLookToCart();
  });

  // Cart Checkout
  document.getElementById("cart-checkout-btn").addEventListener("click", () => {
    closeAllDrawers();
    window.location.hash = "#/checkout";
  });

  // Initial cart badge update
  updateCartBadge();
}

function setupDrawerToggle(triggerId, closeId, drawerId, overlayCloseId = null) {
  const drawer = document.getElementById(drawerId);
  const closeBtn = document.getElementById(closeId);

  if (triggerId) {
    const trigger = document.getElementById(triggerId);
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      drawer.classList.add("active");
      if (drawerId === "cart-drawer") renderCart();
      if (drawerId === "wishlist-drawer") renderWishlist();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      drawer.classList.remove("active");
    });
  }

  // Support clicking overlays to close
  if (overlayCloseId) {
    const overlay = document.getElementById(overlayCloseId) || drawer.querySelector(".drawer-overlay") || drawer.querySelector(".modal-overlay") || drawer.querySelector(".search-overlay-bg");
    if (overlay) {
      overlay.addEventListener("click", () => {
        drawer.classList.remove("active");
      });
    }
  }
}

function closeAllDrawers() {
  document.querySelectorAll(".drawer, .modal, .search-overlay").forEach(el => {
    el.classList.remove("active");
  });
}

// 6. SHOPPING CART LOGIC
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? "flex" : "none";
}

function addToCart(productId, size, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      quantity: quantity
    });
  }
  saveState();
  showToast(`${product.name} (${size}) added to Bag.`);
}

function updateCartQty(productId, size, change) {
  const item = state.cart.find(i => i.id === productId && i.size === size);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter(i => !(i.id === productId && i.size === size));
    }
    saveState();
    renderCart();
  }
}

function removeFromCart(productId, size) {
  state.cart = state.cart.filter(i => !(i.id === productId && i.size === size));
  saveState();
  renderCart();
}

function renderCart() {
  const cartBody = document.getElementById("cart-items");
  const countSpan = document.getElementById("cart-count");
  const subtotalValue = document.getElementById("cart-subtotal-value");
  
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  countSpan.textContent = totalItems;

  if (state.cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <i data-lucide="shopping-bag" style="width: 48px; height: 48px;"></i>
        <p>YOUR SHOPPING BAG IS EMPTY.</p>
        <a href="#/new-arrivals" onclick="closeAllDrawers()" class="btn btn-secondary">CONTINUE SHOPPING</a>
      </div>
    `;
    subtotalValue.textContent = "₹0";
    lucide.createIcons();
    return;
  }

  let subtotal = 0;
  cartBody.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <div>
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-meta">Size: ${item.size}</div>
            <div class="cart-item-meta" style="margin-top: 4px; color: var(--color-white);">₹${item.price.toLocaleString()}</div>
          </div>
          <div class="cart-item-bottom">
            <div class="qty-selector">
              <button class="qty-btn" onclick="updateCartQty('${item.id}', '${item.size}', -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQty('${item.id}', '${item.size}', 1)">+</button>
            </div>
            <button class="item-remove" onclick="removeFromCart('${item.id}', '${item.size}')">REMOVE</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  subtotalValue.textContent = `₹${subtotal.toLocaleString()}`;
}

// 7. WISHLIST LOGIC
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed ${product.name} from Wishlist.`, "info");
  } else {
    state.wishlist.push(productId);
    showToast(`Added ${product.name} to Wishlist.`);
  }
  saveState();
  renderWishlist();

  // Update dynamic detail page button if active
  const wishBtn = document.getElementById("detail-wishlist-btn");
  if (wishBtn) {
    wishBtn.classList.toggle("active", state.wishlist.includes(productId));
  }
}

function renderWishlist() {
  const wishBody = document.getElementById("wishlist-items");
  const countSpan = document.getElementById("wishlist-count");
  
  countSpan.textContent = state.wishlist.length;

  if (state.wishlist.length === 0) {
    wishBody.innerHTML = `
      <div class="wishlist-empty">
        <i data-lucide="heart" style="width: 48px; height: 48px;"></i>
        <p>YOUR WISHLIST IS EMPTY.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  wishBody.innerHTML = state.wishlist.map(productId => {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item) return "";
    return `
      <div class="wishlist-item">
        <div class="wishlist-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="wishlist-item-details">
          <div>
            <div class="wishlist-item-title">${item.name}</div>
            <div class="wishlist-item-meta" style="margin-top: 4px; color: var(--color-white);">₹${item.price.toLocaleString()}</div>
          </div>
          <div class="cart-item-bottom">
            <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.75rem;" onclick="closeAllDrawers(); window.location.hash = '#/product/${item.id}'">VIEW PRODUCT</button>
            <button class="item-remove" onclick="toggleWishlist('${item.id}')">REMOVE</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// 8. SEARCH SYSTEM
function handleSearch(query) {
  const resultsDiv = document.getElementById("search-results");
  if (!query.trim()) {
    resultsDiv.innerHTML = "";
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  if (matches.length === 0) {
    resultsDiv.innerHTML = `<p style="color: var(--color-text-secondary); text-align: center;">NO PRODUCTS MATCHED "${query.toUpperCase()}".</p>`;
    return;
  }

  resultsDiv.innerHTML = `
    <div class="search-results-grid">
      ${matches.map(item => `
        <div class="search-product-card" onclick="closeAllDrawers(); window.location.hash = '#/product/${item.id}'">
          <div class="search-product-img">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="search-product-name">${item.name}</div>
          <div class="search-product-price">₹${item.price.toLocaleString()}</div>
        </div>
      `).join("")}
    </div>
  `;
}

// 9. CLIENT SIDE SPA ROUTING
const routes = {
  "/": () => {
    activeFilters.section = null;
    renderHome();
  },
  "/new-arrivals": () => {
    activeFilters.section = null;
    activeFilters.category = [];
    activeFilters.size = [];
    renderShop("New Arrivals", null);
  },
  "/kids": () => {
    activeFilters.section = "kids";
    activeFilters.category = [];
    activeFilters.size = [];
    renderShop("Kids Collection", null);
  },
  "/women": () => {
    activeFilters.section = "women";
    activeFilters.category = [];
    activeFilters.size = [];
    renderShop("Women Collection", null);
  },
  "/mens": () => {
    activeFilters.section = "mens";
    activeFilters.category = [];
    activeFilters.size = [];
    renderShop("Mens Collection", null);
  },
  "/denim": () => {
    activeFilters.section = null;
    activeFilters.category = [];
    activeFilters.size = [];
    renderShop("Denim Collection", "denim");
  },
  "/collections": renderCollections,
  "/sustainability": renderSustainability,
  "/product/:id": renderProductDetail,
  "/checkout": renderCheckout,
  "/success": renderSuccess
};

let autoSlideInterval = null;

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => {
    switchLook(1);
  }, 18000);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
}

function router() {
  const hash = window.location.hash || "#/";
  
  // Stop auto sliding and hotspot timers during transitions
  stopAutoSlide();
  stopHotspotCycle();

  // Parse routing pathways
  let routeAction = null;
  let matches = null;

  // Exact matches
  if (routes[hash.substring(1)]) {
    routeAction = routes[hash.substring(1)];
  } else {
    // Check for dynamic path pattern (e.g. /product/:id)
    for (const key in routes) {
      if (key.includes("/:")) {
        const parts = key.split("/:");
        const routeBase = parts[0]; // e.g. "/product"
        const hashBase = hash.substring(1).split("/")[1]; // e.g. "product"
        
        if (hash.substring(1).startsWith(routeBase + "/")) {
          routeAction = routes[key];
          matches = hash.substring(1).substring((routeBase + "/").length); // extract id parameter
          break;
        }
      }
    }
  }

  if (routeAction) {
    // Hide mobile drawer if routing occurred
    document.getElementById("mobile-menu").classList.remove("active");
    
    // Update Header active tab markers
    document.querySelectorAll(".nav-link").forEach(link => {
      const href = link.getAttribute("href").substring(1);
      if (href === hash.substring(1) || (href !== "/" && hash.substring(1).startsWith(href))) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Execute view rendering
    routeAction(matches);
    lucide.createIcons();
    window.scrollTo(0, 0);
  } else {
    // Fallback default
    renderHome();
  }

  // Restart auto sliding if we are on the Home page
  if (hash === "#/" || hash === "#") {
    startAutoSlide();
  }
}

// Subscribe to Hash Changes
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  initShellEvents();
  router();
});

// 10. VIEW RENDERERS

// --- HOTSPOT TOOLTIP AUTO-CYCLING ---
let hotspotTimer = null;
let activeHotspotIdx = 0;
let isHotspotHovered = false;

function startHotspotCycle() {
  stopHotspotCycle();
  activeHotspotIdx = 0;
  updateHotspotActiveState();
  
  hotspotTimer = setInterval(() => {
    if (isHotspotHovered) return;
    activeHotspotIdx = (activeHotspotIdx + 1) % 3;
    updateHotspotActiveState();
  }, 5000);
}

function stopHotspotCycle() {
  if (hotspotTimer) {
    clearInterval(hotspotTimer);
    hotspotTimer = null;
  }
}

function updateHotspotActiveState() {
  const pins = document.querySelectorAll(".hotspot-pin");
  pins.forEach((pin, idx) => {
    if (idx === activeHotspotIdx) {
      pin.classList.add("active");
    } else {
      pin.classList.remove("active");
    }
  });
}

window.handlePinHover = function(idx) {
  isHotspotHovered = true;
  activeHotspotIdx = idx;
  updateHotspotActiveState();
};

window.handlePinLeave = function() {
  isHotspotHovered = false;
};

// --- TYPEWRITER EFFECT HELPER ---
let currentTypewriterTimeout = null;

function typeWriter(element, lines, startDelay = 500) {
  // Clear any existing typewriter timeouts
  if (currentTypewriterTimeout) {
    clearTimeout(currentTypewriterTimeout);
    currentTypewriterTimeout = null;
  }

  // Clear element and build structured HTML
  element.innerHTML = "";
  
  // Create spans for each line
  const spans = lines.map((lineText) => {
    const lineSpan = document.createElement("span");
    lineSpan.className = "typewriter-line";
    lineSpan.style.display = "block";
    lineSpan.style.position = "relative";
    
    const textSpan = document.createElement("span");
    textSpan.className = "typewriter-text";
    textSpan.innerHTML = lineText.split("").map(char => `<span class="typewriter-char" style="color: transparent;">${char === " " ? "&nbsp;" : char}</span>`).join("");
    
    lineSpan.appendChild(textSpan);
    element.appendChild(lineSpan);
    return textSpan;
  });

  // Create cursor
  const cursor = document.createElement("span");
  cursor.className = "typewriter-cursor";
  
  // Append cursor initially to the first line
  if (spans.length > 0) {
    spans[0].appendChild(cursor);
  }

  let currentLine = 0;
  let currentChar = 0;

  function typeNext() {
    if (currentLine >= lines.length) {
      // Completed typing all lines! Keep cursor blinking, then remove it
      currentTypewriterTimeout = setTimeout(() => {
        cursor.remove();
      }, 4000);
      return;
    }

    const lineText = lines[currentLine];
    const textContainer = spans[currentLine];
    const charSpans = textContainer.querySelectorAll(".typewriter-char");

    if (currentChar < lineText.length) {
      // Make character visible
      if (charSpans[currentChar]) {
        charSpans[currentChar].style.color = "inherit";
        // Move cursor
        textContainer.insertBefore(cursor, charSpans[currentChar].nextSibling);
      }
      currentChar++;
      currentTypewriterTimeout = setTimeout(typeNext, 45);
    } else {
      currentLine++;
      currentChar = 0;
      if (currentLine < lines.length) {
        spans[currentLine].appendChild(cursor);
        currentTypewriterTimeout = setTimeout(typeNext, 120);
      } else {
        typeNext();
      }
    }
  }

  // Start typing after startDelay
  currentTypewriterTimeout = setTimeout(typeNext, startDelay);
}

// --- HOME PAGE VIEW ---
function renderHome() {
  const container = document.getElementById("main-content");
  const look = LOOKS[state.currentLookIndex];

  // Map products inside the current look
  const lookProducts = look.products.map(id => PRODUCTS.find(p => p.id === id));

  // Show all 24 products on the home page (exactly 6 rows of 4 columns)
  const homeProducts = PRODUCTS.slice(0, 24);

  container.innerHTML = `
    <div class="home-page-wrapper">
      <!-- HERO SECTION -->
      <section class="hero-section" style="background: ${look.gradient}">
        <!-- HERO SECTION WIPER TRANSITION OVERLAY -->
        <div id="page-wiper" class="page-wiper"></div>
        <div class="hero-left">
          <h4 class="brand-statement">EXCLUSIVELY TAILORED CONTEMPORARY WEAR</h4>
          <h1 class="hero-headline" id="hero-typed-headline"></h1>
          
          <!-- Bottom left thumbnails of look items -->
          <div class="hero-products-thumbnails">
            ${lookProducts.map(prod => `
              <div class="product-thumb-card" onclick="window.location.hash = '#/product/${prod.id}'">
                <div class="product-thumb-img">
                  <img src="${prod.flatImage || prod.image}" alt="${prod.name}">
                </div>
                <div class="product-thumb-info">
                  <div class="product-thumb-name">${prod.name}</div>
                  <div class="product-thumb-price">₹${prod.price.toLocaleString()}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="hero-right">
          <div class="model-wrapper">
            <!-- Dynamic Model Picture -->
            <div class="model-img-container">
              <img class="model-img" src="${look.image}" alt="${look.name}">
            </div>

            <!-- Hotspots Pins mapped on model -->
            ${look.hotspots.map((pin, idx) => `
              <div class="hotspot-pin" id="pin-${idx}" style="top: ${pin.top}; left: ${pin.left};" onclick="openProductQuickView('${pin.productId}')" onmouseenter="handlePinHover(${idx})" onmouseleave="handlePinLeave()">
                <div class="hotspot-tooltip tooltip-${pin.align}">
                  <div class="tooltip-brand">${pin.brand}</div>
                  <div class="tooltip-title">${pin.name}</div>
                  <div class="tooltip-price">${pin.price}</div>
                </div>
              </div>
            `).join("")}

            <!-- Campaign Look Info Card (Overlaying bottom left of image) -->
            <div class="look-metadata-container">
              <div class="look-cta-row">
                <button class="btn btn-primary" onclick="openLookDrawer(${state.currentLookIndex})">ACQUIRE LOOK</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Carousel Controls at the bottom of the Hero Section -->
        <div class="carousel-controls">
          <button class="control-btn" onclick="switchLook(-1)"><i data-lucide="arrow-left"></i></button>
          <button class="control-btn" onclick="switchLook(1)"><i data-lucide="arrow-right"></i></button>
        </div>
      </section>

      <!-- FEATURED CATEGORIES -->
      <section class="home-categories-section">
        <span class="section-subtitle">THE COLLECTIONS</span>
        <h2 class="section-title">SHOP BY CATEGORY</h2>
        <div class="categories-grid">
          <div class="category-card" onclick="window.location.hash = '#/denim'">
            <img src="images/product_jacket_blue.png" alt="Raw Denim Category">
            <div class="category-overlay">
              <h3 class="category-card-title">RAW DENIM</h3>
              <span class="category-card-link">DISCOVER DENIM</span>
            </div>
          </div>
          <div class="category-card" onclick="window.location.hash = '#/new-arrivals'">
            <img src="images/product_tee_olive.png" alt="Tops Category">
            <div class="category-overlay">
              <h3 class="category-card-title">SEASONAL TOPS</h3>
              <span class="category-card-link">EXPLORE TEES</span>
            </div>
          </div>
          <div class="category-card" onclick="window.location.hash = '#/collections'">
            <img src="images/look2_model.png" alt="Campaign Category">
            <div class="category-overlay">
              <h3 class="category-card-title">CAMPAIGNS</h3>
              <span class="category-card-link">VIEW ARCHIVE</span>
            </div>
          </div>
          <div class="category-card" onclick="window.location.hash = '#/kids'">
            <img src="images/product_kid_jacket.png" alt="Kids Category">
            <div class="category-overlay">
              <h3 class="category-card-title">KIDS</h3>
              <span class="category-card-link">SHOP KIDS</span>
            </div>
          </div>
          <div class="category-card" onclick="window.location.hash = '#/women'">
            <img src="images/product_women_jacket.png" alt="Women Category">
            <div class="category-overlay">
              <h3 class="category-card-title">WOMEN</h3>
              <span class="category-card-link">SHOP WOMEN</span>
            </div>
          </div>
          <div class="category-card" onclick="window.location.hash = '#/mens'">
            <img src="images/product_men_shirt.png" alt="Mens Category">
            <div class="category-overlay">
              <h3 class="category-card-title">MENS</h3>
              <span class="category-card-link">SHOP MENS</span>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURED CATALOGUE (PRODUCT LIST - 6 ROWS) -->
      <section class="home-trending-section">
        <div class="home-trending-container">
          <span class="section-subtitle" style="text-align: center;">SHOP THE COLLECTIONS</span>
          <h2 class="section-title" style="text-align: center;">FEATURED CATALOGUE</h2>
          <div class="home-products-grid">
            ${homeProducts.map((prod, idx) => `
              <div class="product-card">
                <div class="product-card-img-wrapper" onclick="window.location.hash = '#/product/${prod.id}'">
                  <img class="product-card-img" src="${prod.image}" alt="${prod.name}">
                  ${prod.price > 8500 ? '<span class="product-card-badge">PREMIUM</span>' : '<span class="product-card-badge">ESSENTIAL</span>'}
                </div>
                <div class="product-card-actions">
                  <button class="quick-add-btn" onclick="addToCart('${prod.id}', '${prod.sizes[0]}')">QUICK ADD (${prod.sizes[0]})</button>
                  <button class="quick-wish-btn" onclick="toggleWishlist('${prod.id}')"><i data-lucide="heart" style="${state.wishlist.includes(prod.id) ? 'fill: var(--color-white);' : ''}"></i></button>
                </div>
                <div class="product-card-info">
                  <h3 class="product-card-name"><a href="#/product/${prod.id}">${prod.name}</a></h3>
                  <div class="product-card-price">₹${prod.price.toLocaleString()}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>


      <!-- TRUST COLUMNS -->
      <section class="home-features-section">
        <div class="features-grid">
          <div class="feature-box">
            <i data-lucide="shield" class="feature-icon" style="width: 32px; height: 32px;"></i>
            <div class="feature-info">
              <h4>LIFETIME STITCH WARRANTY</h4>
              <p>Reinforced seams, double lining, and raw selvedge constructions guaranteed for life.</p>
            </div>
          </div>
          <div class="feature-box">
            <i data-lucide="droplet" class="feature-icon" style="width: 32px; height: 32px;"></i>
            <div class="feature-info">
              <h4>100% RECYCLED WATER PROCESS</h4>
              <p>Our raw materials are processed in water-conscious mills recycling 100% of production fluids.</p>
            </div>
          </div>
          <div class="feature-box">
            <i data-lucide="truck" class="feature-icon" style="width: 32px; height: 32px;"></i>
            <div class="feature-info">
              <h4>COMPLIMENTARY SHIPPING</h4>
              <p>Free carbon-neutral courier logistics on all purchases over ₹15,000.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- HOME LOOKBOOK GRID COLLAGE (NEW SECTION) -->
      <section class="home-lookbook-grid" style="padding: 8rem 6rem; background: #0d0e10; border-top: 1px solid var(--color-glass-border)">
        <div style="max-width: 1400px; margin: 0 auto;">
          <span class="section-subtitle" style="text-align: center;">VISUAL JOURNAL</span>
          <h2 class="section-title" style="text-align: center;">THEFARZI IN MOTION</h2>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem;">
            <div style="height: 300px; overflow: hidden; border-radius: 4px; border: 1px solid var(--color-glass-border);">
              <img src="images/look1_model.png" alt="Street Style 1" style="width:100%; height:100%; object-fit:cover; transition: var(--transition-smooth); filter: grayscale(0.2);" onmouseover="this.style.filter='grayscale(0)'" onmouseout="this.style.filter='grayscale(0.2)'">
            </div>
            <div style="height: 300px; overflow: hidden; border-radius: 4px; border: 1px solid var(--color-glass-border);">
              <img src="images/product_jacket_blue.png" alt="Detail 1" style="width:100%; height:100%; object-fit:cover; transition: var(--transition-smooth); filter: grayscale(0.2);" onmouseover="this.style.filter='grayscale(0)'" onmouseout="this.style.filter='grayscale(0.2)'">
            </div>
            <div style="height: 300px; overflow: hidden; border-radius: 4px; border: 1px solid var(--color-glass-border);">
              <img src="images/look2_model.png" alt="Street Style 2" style="width:100%; height:100%; object-fit:cover; transition: var(--transition-smooth); filter: grayscale(0.2);" onmouseover="this.style.filter='grayscale(0)'" onmouseout="this.style.filter='grayscale(0.2)'">
            </div>
            <div style="height: 300px; overflow: hidden; border-radius: 4px; border: 1px solid var(--color-glass-border);">
              <img src="images/look3_model.png" alt="Street Style 3" style="width:100%; height:100%; object-fit:cover; transition: var(--transition-smooth); filter: grayscale(0.2);" onmouseover="this.style.filter='grayscale(0)'" onmouseout="this.style.filter='grayscale(0.2)'">
            </div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS SLIDER SECTION (NEW SECTION) -->
      <section class="home-testimonials-section" style="padding: 8rem 6rem; background: #16171a; border-top: 1px solid var(--color-glass-border); text-align: center;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <span class="section-subtitle">COMMUNITY REVIEWS</span>
          <h2 class="section-title">THEFARZI CLIENTS</h2>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; text-align: left; margin-top: 2rem;">
            <div style="background: var(--color-glass-bg); padding: 3rem; border: 1px solid var(--color-glass-border); border-radius: 6px; transition: var(--transition-smooth);" onmouseover="this.style.borderColor='rgba(255,255,255,0.2)'" onmouseout="this.style.borderColor='var(--color-glass-border)'">
              <div class="stars" style="margin-bottom: 1.2rem; color: #ffb400;"><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i></div>
              <p style="font-size: 0.85rem; line-height: 1.6; color: var(--color-text-secondary); font-style: italic;">"The quality of the heavyweight box tee is like nothing else. The fabric is extremely dense and retains its boxy structure perfectly after many washes."</p>
              <span style="font-size: 0.75rem; font-weight: 600; display: block; margin-top: 2rem; letter-spacing: 1.5px; color: var(--color-white);">ARJUN V.</span>
            </div>
            <div style="background: var(--color-glass-bg); padding: 3rem; border: 1px solid var(--color-glass-border); border-radius: 6px; transition: var(--transition-smooth);" onmouseover="this.style.borderColor='rgba(255,255,255,0.2)'" onmouseout="this.style.borderColor='var(--color-glass-border)'">
              <div class="stars" style="margin-bottom: 1.2rem; color: #ffb400;"><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i></div>
              <p style="font-size: 0.85rem; line-height: 1.6; color: var(--color-text-secondary); font-style: italic;">"The deconstruct denim jacket fits exactly how a cropped jacket should. Raw edges are stitched to prevent excessive fraying while maintaining character."</p>
              <span style="font-size: 0.75rem; font-weight: 600; display: block; margin-top: 2rem; letter-spacing: 1.5px; color: var(--color-white);">VIKRAM R.</span>
            </div>
            <div style="background: var(--color-glass-bg); padding: 3rem; border: 1px solid var(--color-glass-border); border-radius: 6px; transition: var(--transition-smooth);" onmouseover="this.style.borderColor='rgba(255,255,255,0.2)'" onmouseout="this.style.borderColor='var(--color-glass-border)'">
              <div class="stars" style="margin-bottom: 1.2rem; color: #ffb400;"><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i><i data-lucide="star" style="fill:#ffb400; width:16px;"></i></div>
              <p style="font-size: 0.85rem; line-height: 1.6; color: var(--color-text-secondary); font-style: italic;">"Outstanding raw selvedge jeans. Heavy stiffness at first, but after a month of wear, they fit like a second skin and show beautiful crease patinas."</p>
              <span style="font-size: 0.75rem; font-weight: 600; display: block; margin-top: 2rem; letter-spacing: 1.5px; color: var(--color-white);">KABIR S.</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;

  // Start the hotspot tooltip auto-cycling
  startHotspotCycle();

  // Trigger typewriter effect for the hero headline
  const typedHeadline = document.getElementById("hero-typed-headline");
  if (typedHeadline) {
    typeWriter(typedHeadline, look.headline || ["REDEFINING", "THE STANDARD", "AESTHETIC"]);
  }
}

function switchLook(dir) {
  stopAutoSlide(); // Stop interval immediately to prevent double sliding
  
  const wiper = document.getElementById("page-wiper");
  if (!wiper) {
    state.currentLookIndex = (state.currentLookIndex + dir + LOOKS.length) % LOOKS.length;
    renderHome();
    lucide.createIcons();
    startAutoSlide();
    return;
  }

  // Trigger page wipe animation
  wiper.classList.add("wipe-active");

  // Halfway through the 1.2s animation (600ms), update data and redraw
  setTimeout(() => {
    state.currentLookIndex = (state.currentLookIndex + dir + LOOKS.length) % LOOKS.length;
    renderHome();
    lucide.createIcons();
    
    // Reset/Re-trigger entrance animations in hero left
    const brandStatement = document.querySelector(".brand-statement");
    const heroHeadline = document.querySelector(".hero-headline");
    const thumbnails = document.querySelector(".hero-products-thumbnails");
    
    if (brandStatement) {
      brandStatement.style.animation = 'none';
      brandStatement.offsetHeight; // trigger reflow
      brandStatement.style.animation = 'revealUp 0.8s forwards 0.2s';
    }
    if (heroHeadline) {
      heroHeadline.style.animation = 'none';
      heroHeadline.offsetHeight; // trigger reflow
      heroHeadline.style.animation = 'revealUp 0.8s forwards 0.4s';
    }
    if (thumbnails) {
      thumbnails.style.animation = 'none';
      thumbnails.offsetHeight; // trigger reflow
      thumbnails.style.animation = 'revealUp 0.8s forwards 0.6s';
    }
  }, 600);

  // Clean up class after animation ends
  setTimeout(() => {
    wiper.classList.remove("wipe-active");
    startAutoSlide(); // Restart interval after animation completes
  }, 1200);
}

function openProductQuickView(productId) {
  window.location.hash = `#/product/${productId}`;
}

// --- OPEN QUICK LOOK DRAWER ---
function openLookDrawer(lookIdx) {
  const look = LOOKS[lookIdx];
  const lookProducts = look.products.map(id => PRODUCTS.find(p => p.id === id));
  
  const drawer = document.getElementById("look-drawer");
  const drawerTitle = document.getElementById("look-drawer-title");
  const drawerBody = document.getElementById("look-drawer-body");

  drawerTitle.textContent = `ACQUIRE: ${look.name}`;
  
  drawerBody.innerHTML = lookProducts.map(prod => `
    <div class="look-product-item" data-id="${prod.id}" style="display: flex; gap: 1.5rem; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--color-glass-border);">
      <div style="width: 80px; height: 100px; background: var(--color-glass-bg); border-radius: 4px; overflow: hidden;">
        <img src="${prod.flatImage || prod.image}" alt="${prod.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <h4 style="font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.5px;">${prod.name}</h4>
          <span style="font-size: 0.8rem; color: var(--color-text-secondary);">₹${prod.price.toLocaleString()}</span>
        </div>
        <div style="margin-top: 0.8rem;">
          <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-bottom: 0.4rem;">SELECT SIZE</div>
          <div class="look-size-options" style="display: flex; gap: 0.5rem;">
            ${prod.sizes.map((s, idx) => `
              <button class="look-size-btn ${idx === 1 ? 'active' : ''}" data-size="${s}" onclick="selectLookItemSize(this)" style="padding: 4px 10px; border: 1px solid var(--color-glass-border); font-size: 0.75rem; font-weight: 600; cursor: pointer;">${s}</button>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Styling look size options in script quickly
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
    .look-size-btn.active {
      background: var(--color-white) !important;
      color: var(--color-black) !important;
      border-color: var(--color-white) !important;
    }
  `;
  document.head.appendChild(styleEl);

  drawer.classList.add("active");
}

function selectLookItemSize(btn) {
  const container = btn.closest(".look-size-options");
  container.querySelectorAll(".look-size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function addLookToCart() {
  const items = document.querySelectorAll(".look-product-item");
  items.forEach(item => {
    const prodId = item.getAttribute("data-id");
    const activeSizeBtn = item.querySelector(".look-size-btn.active");
    const size = activeSizeBtn ? activeSizeBtn.getAttribute("data-size") : "M";
    addToCart(prodId, size, 1);
  });
  closeAllDrawers();
  document.getElementById("cart-drawer").classList.add("active");
  renderCart();
}

// --- SHOP COLLECTION VIEW ---
let activeFilters = {
  category: [],
  size: [],
  minPrice: null,
  maxPrice: null,
  section: null
};

function renderShop(title, categoryFilter = null) {
  const container = document.getElementById("main-content");
  
  // Set default category on first load if provided
  if (categoryFilter && !state.shopFirstLoaded) {
    activeFilters.category = [categoryFilter];
    state.shopFirstLoaded = true;
  }

  // Filter Catalog
  let filtered = PRODUCTS.filter(p => {
    // Section/Department Filter
    if (activeFilters.section === "kids" && !p.id.startsWith("kid-")) return false;
    if (activeFilters.section === "women" && !p.id.startsWith("women-")) return false;
    if (activeFilters.section === "mens" && (p.id.startsWith("kid-") || p.id.startsWith("women-"))) return false;

    if (activeFilters.category.length && !activeFilters.category.includes(p.category)) return false;
    if (activeFilters.size.length && !p.sizes.some(s => activeFilters.size.includes(s))) return false;
    return true;
  });

  // Apply sorting
  if (state.activeSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.activeSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  container.innerHTML = `
    <main class="pt-48 pb-section-gap">
      <div class="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <!-- Page Header -->
        <div class="mb-24">
          <h1 class="font-headline-lg text-headline-lg md:text-display-lg mb-4 capitalize font-bold tracking-tighter text-on-surface">${title.toLowerCase()}</h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A curated selection of architectural silhouettes and raw textures. Inspired by urban decay and the resilience of craftsmanship.</p>
        </div>
        
        <div class="flex flex-col lg:flex-row gap-gutter">
          <!-- Sidebar Filters -->
          <aside class="w-full lg:w-64 flex-shrink-0 space-y-12 mb-12 lg:mb-0">
            <div>
              <h3 class="font-label-sm text-label-sm uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Categories</h3>
              <ul class="space-y-4">
                <li>
                  <a class="font-body-md text-body-md ${activeFilters.category.length === 0 ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'} transition-colors cursor-pointer" onclick="resetAllFiltersStitch('${title}')">
                    All Pieces
                  </a>
                </li>
                <li>
                  <a class="font-body-md text-body-md ${activeFilters.category.includes('denim') ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'} transition-colors cursor-pointer" onclick="toggleFilterCategoryStitch('denim', '${title}')">
                    Tailored Denim
                  </a>
                </li>
                <li>
                  <a class="font-body-md text-body-md ${activeFilters.category.includes('tops') ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'} transition-colors cursor-pointer" onclick="toggleFilterCategoryStitch('tops', '${title}')">
                    Tops & Tees
                  </a>
                </li>
                <li>
                  <a class="font-body-md text-body-md ${activeFilters.category.includes('accessories') ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'} transition-colors cursor-pointer" onclick="toggleFilterCategoryStitch('accessories', '${title}')">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-label-sm text-label-sm uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Size</h3>
              <div class="grid grid-cols-4 gap-2">
                ${(function() {
                  let sizes = ["S", "M", "L", "XL"];
                  if (activeFilters.section === "kids") {
                    sizes = ["2Y", "4Y", "6Y", "8Y"];
                  } else if (activeFilters.section === "women") {
                    sizes = ["XS", "S", "M", "L", "24", "26", "28", "30", "32"];
                  } else if (activeFilters.section === "mens") {
                    sizes = ["S", "M", "L", "XL", "28", "30", "32", "34", "36"];
                  }
                  return sizes.map(size => {
                    const isActive = activeFilters.size.includes(size);
                    return `
                      <button class="py-2 text-center font-label-sm text-label-sm transition-colors border ${isActive ? 'bg-white text-black border-white' : 'border-white/10 text-on-surface hover:border-white'}" onclick="toggleFilterSizeStitch('${size}', '${title}')">
                        ${size}
                      </button>
                    `;
                  }).join("");
                })()}
              </div>
            </div>
            
            <div>
              <h3 class="font-label-sm text-label-sm uppercase tracking-[0.2em] mb-6 text-on-surface-variant">Color</h3>
              <div class="flex flex-wrap gap-4">
                <button class="w-6 h-6 rounded-full bg-[#0D0D0D] border border-white/20 ring-1 ring-offset-2 ring-offset-background ring-transparent hover:ring-white transition-all"></button>
                <button class="w-6 h-6 rounded-full bg-[#3A3A3A] border border-white/20 ring-1 ring-offset-2 ring-offset-background ring-transparent hover:ring-white transition-all"></button>
                <button class="w-6 h-6 rounded-full bg-[#FFFFFF] border border-white/20 ring-1 ring-offset-2 ring-offset-background ring-transparent hover:ring-white transition-all"></button>
                <button class="w-6 h-6 rounded-full bg-[#2A3439] border border-white/20 ring-1 ring-offset-2 ring-offset-background ring-transparent hover:ring-white transition-all"></button>
              </div>
            </div>
            
            <div class="pt-8">
              <button class="w-full bg-primary-container text-white font-label-sm text-label-sm uppercase py-4 tracking-widest hover:opacity-90 transition-opacity" onclick="resetAllFiltersStitch('${title}')">
                Reset Filters
              </button>
            </div>
          </aside>
          
          <!-- Product Grid Area -->
          <section class="flex-grow">
            <div class="flex justify-between items-center mb-10">
              <span class="font-body-md text-body-md text-on-surface-variant">${filtered.length} Items Found</span>
              <div class="flex items-center space-x-2">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Sort by</span>
                <select class="bg-transparent border-none font-label-sm text-label-sm uppercase tracking-wider focus:ring-0 cursor-pointer text-white" onchange="handleSortStitch(this.value, '${title}')">
                  <option value="default" class="bg-background" ${state.activeSort === 'default' ? 'selected' : ''}>Newest</option>
                  <option value="price-low" class="bg-background" ${state.activeSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                  <option value="price-high" class="bg-background" ${state.activeSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                </select>
              </div>
            </div>
            
            <div id="shop-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-gutter">
              ${renderProductListings(filtered)}
            </div>
          </section>
        </div>
      </div>
    </main>
  `;
}

function renderProductListings(list) {
  if (list.length === 0) {
    return `<div class="col-span-full text-center py-20 text-on-surface-variant font-body-md">NO PRODUCTS MATCH THE FILTER CRITERIA.</div>`;
  }

  return list.map((prod, idx) => `
    <div class="group cursor-pointer" onclick="window.location.hash = '#/product/${prod.id}'">
      <div class="relative aspect-[3/4] mb-6 overflow-hidden bg-surface-container rounded-lg">
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="${prod.image}" alt="${prod.name}"/>
        ${idx === 0 ? '<div class="absolute top-4 left-4 bg-white text-black px-3 py-1 font-label-sm text-label-sm uppercase">New</div>' : ''}
        ${idx === 2 ? '<div class="absolute top-4 left-4 bg-primary-container text-white px-3 py-1 font-label-sm text-label-sm uppercase">Limited</div>' : ''}
        <button class="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" onclick="event.stopPropagation(); toggleWishlist('${prod.id}')">
          <span class="material-symbols-outlined text-white" style="${state.wishlist.includes(prod.id) ? 'font-variation-settings: \'FILL\' 1;' : ''}">favorite</span>
        </button>
      </div>
      <div class="space-y-1">
        <h3 class="font-title-md text-title-md uppercase tracking-tight text-white">${prod.name}</h3>
        <p class="font-body-md text-body-md text-on-surface-variant">₹${prod.price.toLocaleString()}</p>
      </div>
    </div>
  `).join("");
}

window.toggleFilterCategoryStitch = function(category, title) {
  const idx = activeFilters.category.indexOf(category);
  if (idx > -1) {
    activeFilters.category.splice(idx, 1);
  } else {
    activeFilters.category.push(category);
  }
  renderShop(title);
};

window.toggleFilterSizeStitch = function(size, title) {
  const idx = activeFilters.size.indexOf(size);
  if (idx > -1) {
    activeFilters.size.splice(idx, 1);
  } else {
    activeFilters.size.push(size);
  }
  renderShop(title);
};

window.resetAllFiltersStitch = function(title) {
  activeFilters.category = [];
  activeFilters.size = [];
  renderShop(title);
};

window.handleSortStitch = function(sortValue, title) {
  state.activeSort = sortValue;
  renderShop(title);
};

function filterSize(checkbox) {
  const val = checkbox.value;
  if (checkbox.checked) {
    activeFilters.size.push(val);
  } else {
    activeFilters.size = activeFilters.size.filter(s => s !== val);
  }
  updateShopListings();
}

function filterPrice() {
  const min = parseInt(document.getElementById("price-min").value) || null;
  const max = parseInt(document.getElementById("price-max").value) || null;
  activeFilters.minPrice = min;
  activeFilters.maxPrice = max;
  updateShopListings();
}

function handleSort(criteria) {
  let list = [...PRODUCTS];
  
  // Apply existing filters first
  list = applyStateFilters(list);

  if (criteria === "price-low") {
    list.sort((a, b) => a.price - b.price);
  } else if (criteria === "price-high") {
    list.sort((a, b) => b.price - a.price);
  }

  document.getElementById("shop-grid").innerHTML = renderProductListings(list);
  lucide.createIcons();
}

function applyStateFilters(list) {
  return list.filter(p => {
    if (activeFilters.category.length && !activeFilters.category.includes(p.category)) return false;
    if (activeFilters.size.length && !p.sizes.some(s => activeFilters.size.includes(s))) return false;
    if (activeFilters.minPrice && p.price < activeFilters.minPrice) return false;
    if (activeFilters.maxPrice && p.price > activeFilters.maxPrice) return false;
    return true;
  });
}

function updateShopListings() {
  const filtered = applyStateFilters(PRODUCTS);
  document.getElementById("shop-grid").innerHTML = renderProductListings(filtered);
  lucide.createIcons();
}

// --- PRODUCT DETAIL VIEW ---
let activeDetailSize = null;

function renderProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) {
    document.getElementById("main-content").innerHTML = `<div style="text-align: center; padding: 10rem;">PRODUCT NOT FOUND. <a href="#/" class="btn btn-primary" style="margin-top: 2rem;">RETURN HOME</a></div>`;
    return;
  }

  activeDetailSize = product.sizes[0]; // default size to first

  const comments = REVIEWS[product.id] || [];
  const avgRating = comments.reduce((s, r) => s + r.rating, 0) / (comments.length || 1);
  const linkedLook = LOOKS.find(l => l.products.includes(product.id));

  const container = document.getElementById("main-content");
  container.innerHTML = `
    <section class="product-detail-page max-w-container-max mx-auto px-4 md:px-margin-desktop py-8">
      <a href="#/new-arrivals" class="back-link inline-flex items-center gap-2 text-on-surface/60 hover:text-on-surface mb-8 font-label-sm tracking-widest uppercase transition-colors">
        <i data-lucide="arrow-left"></i> BACK TO COLLECTION
      </a>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <!-- Gallery -->
        <div class="lg:col-span-7 space-y-4">
          <div class="zoom-container relative aspect-[3/4] bg-surface-container overflow-hidden rounded-lg">
            <img id="mainProductImage" class="zoom-image w-full h-full object-cover" src="${product.image}" alt="${product.name}">
          </div>
          
          <!-- Thumbnail Strip -->
          <div class="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
            <div class="w-24 h-32 flex-shrink-0 cursor-pointer border border-primary bg-primary/5 rounded gallery-thumb active" onclick="changeDetailImage(this, '${product.image}')">
              <img class="w-full h-full object-cover" src="${product.image}" alt="${product.name}">
            </div>
            ${linkedLook ? `
              <div class="w-24 h-32 flex-shrink-0 cursor-pointer border border-white/10 hover:border-white rounded gallery-thumb" onclick="changeDetailImage(this, '${linkedLook.image}')">
                <img class="w-full h-full object-cover" src="${linkedLook.image}" alt="Model fit photo">
              </div>
            ` : ''}
            <div class="w-24 h-32 flex-shrink-0 cursor-pointer border border-white/10 hover:border-white rounded gallery-thumb" onclick="changeDetailImage(this, '${product.image}')">
              <img class="w-full h-full object-cover grayscale" src="${product.image}" alt="Detail close-up">
            </div>
          </div>
        </div>

        <!-- Info -->
        <div class="lg:col-span-5 flex flex-col pt-4 lg:pt-0">
          <div class="mb-8">
            <span class="inline-block bg-white text-black font-label-sm text-[10px] px-3 py-1 mb-4 tracking-[0.2em] font-semibold">NEW ARRIVAL</span>
            <h1 class="font-headline-lg text-headline-lg mb-2 uppercase tracking-tight font-bold">${product.name}</h1>
            <p class="font-title-md text-title-md text-primary font-bold mt-2">₹${product.price.toLocaleString()}</p>
          </div>
          
          <div class="mb-10">
            <h3 class="font-label-sm text-label-sm tracking-[0.2em] mb-4 text-on-surface/50 font-bold uppercase">DESCRIPTION</h3>
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">${product.description}</p>
          </div>
          
          <!-- Size Selector -->
          <div class="mb-10">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-label-sm text-label-sm tracking-[0.2em] text-on-surface/50 font-bold uppercase">SELECT SIZE</h3>
              <button class="font-label-sm text-label-sm underline opacity-60 hover:opacity-100 transition-opacity tracking-widest font-semibold" onclick="document.getElementById('size-modal').classList.add('active')">SIZE GUIDE</button>
            </div>
            <div class="grid grid-cols-4 gap-2">
              ${product.sizes.map(size => `
                <button class="border ${size === activeDetailSize ? 'border-primary bg-primary/5' : 'border-white/10 hover:border-white'} py-4 font-label-sm text-label-sm transition-colors size-option-btn" data-size="${size}" onclick="selectDetailSize(this)">${size}</button>
              `).join("")}
            </div>
          </div>

          <!-- Actions -->
          <div class="flex gap-4 mb-8">
            <button class="flex-grow bg-primary-container hover:bg-primary-container/90 active:scale-[0.98] transition-all py-6 font-label-sm text-label-sm tracking-[0.3em] text-white flex items-center justify-center gap-4 font-bold" onclick="addDetailItemToCart('${product.id}')">
              ADD TO BAG
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button id="detail-wishlist-btn" class="wishlist-toggle-btn w-16 border border-white/10 hover:border-white rounded flex items-center justify-center text-on-surface transition-colors ${state.wishlist.includes(product.id) ? 'active' : ''}" onclick="toggleWishlist('${product.id}')">
              <i data-lucide="heart" style="${state.wishlist.includes(product.id) ? 'fill: #ffb4aa; color: #ffb4aa;' : ''}"></i>
            </button>
          </div>

          <!-- Details Accordion -->
          <div class="border-t border-white/10 space-y-4 pt-8">
            <details class="group" open>
              <summary class="flex justify-between items-center cursor-pointer list-none py-2 font-label-sm text-label-sm tracking-[0.1em] text-on-surface/80 hover:text-on-surface font-semibold">
                DETAILS
                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div class="py-4 text-on-surface-variant font-body-md text-body-md">
                <ul class="list-disc pl-4 space-y-1">
                  ${product.details.map(d => `<li>${d}</li>`).join("")}
                </ul>
              </div>
            </details>
            <details class="group">
              <summary class="flex justify-between items-center cursor-pointer list-none py-2 font-label-sm text-label-sm tracking-[0.1em] text-on-surface/80 hover:text-on-surface font-semibold">
                SUSTAINABILITY & CARE
                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div class="py-4 text-on-surface-variant font-body-md text-body-md">
                <ul class="list-disc pl-4 space-y-1">
                  <li>Wash cold, inside-out with similar colors</li>
                  <li>Hang dry to preserve structure and denim details</li>
                  <li>Dyes may transfer slightly during early wear cycles</li>
                  <li>100% natural, recycled water process</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>

      <!-- Our Process Section -->
      <section class="mt-[120px] py-16 border-t border-b border-white/5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="relative aspect-[4/5] bg-surface-container overflow-hidden rounded-lg">
            <img alt="Craftsmanship process" class="w-full h-full object-cover grayscale" src="${linkedLook ? linkedLook.image : product.image}"/>
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center p-12 text-center">
              <p class="font-display-lg text-4xl italic text-white font-serif">"Architecture in Textile"</p>
            </div>
          </div>
          <div class="space-y-12">
            <div>
              <h2 class="font-headline-lg text-headline-lg mb-6 tracking-tighter">OUR PROCESS</h2>
              <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Every piece is a dialogue between traditional craftsmanship and contemporary structural design. We don't just make garments; we engineer silhouettes that evolve with the wearer.</p>
            </div>
            <div class="space-y-8">
              <div class="flex gap-6">
                <span class="text-primary font-headline-lg text-3xl font-bold">01</span>
                <div>
                  <h4 class="font-title-md text-title-md mb-2 tracking-wide font-medium">RAW MATERIAL</h4>
                  <p class="text-on-surface-variant font-body-md text-sm">Sourced from small-scale artisanal mills in Okayama, Japan, our 14.5oz selvedge denim is woven on vintage shuttle looms for a unique, irregular texture.</p>
                </div>
              </div>
              <div class="flex gap-6">
                <span class="text-primary font-headline-lg text-3xl font-bold">02</span>
                <div>
                  <h4 class="font-title-md text-title-md mb-2 tracking-wide font-medium">PRECISION TAILORING</h4>
                  <p class="text-on-surface-variant font-body-md text-sm">Each garment is hand-cut and assembled by a single craftsman. Our signature architectural seams provide structure while allowing natural movement.</p>
                </div>
              </div>
              <div class="flex gap-6">
                <span class="text-primary font-headline-lg text-3xl font-bold">03</span>
                <div>
                  <h4 class="font-title-md text-title-md mb-2 tracking-wide font-medium">FINISHING</h4>
                  <p class="text-on-surface-variant font-body-md text-sm">Hardware is hand-burnished for a unique matte finish. No synthetic washes are applied—the aging process begins only when you put it on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Reviews Section -->
      <section class="mt-[100px]">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 class="font-headline-lg text-headline-lg mb-4 tracking-tighter font-bold uppercase">REVIEWS</h2>
            <div class="flex items-center gap-4">
              <div class="flex text-primary">
                ${Array(5).fill("").map((_, i) => `<span class="material-symbols-outlined text-[20px] ${i < Math.round(avgRating) ? 'fill-1' : ''}" style="${i < Math.round(avgRating) ? 'font-variation-settings: \'FILL\' 1;' : ''}">star</span>`).join("")}
              </div>
              <span class="font-label-sm text-label-sm tracking-widest opacity-60 font-semibold">${avgRating.toFixed(1)} / 5.0 (${comments.length} REVIEWS)</span>
            </div>
          </div>
          <button class="border border-white/10 px-8 py-4 font-label-sm text-label-sm hover:bg-white hover:text-black transition-all tracking-[0.2em] font-medium" onclick="openReviewModal()">WRITE A REVIEW</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          ${comments.length === 0 ? `
            <div class="col-span-3 text-center py-12 bg-surface-container rounded-lg border border-white/5 text-on-surface/40">
              BE THE FIRST TO REVIEW THIS PRODUCT.
            </div>
          ` : comments.map(rev => `
            <div class="bg-surface-container p-8 space-y-6 rounded-lg border border-white/5">
              <div class="flex justify-between items-start">
                <div>
                  <p class="font-title-md text-sm text-on-surface font-semibold">${rev.user}</p>
                  <p class="text-xs text-on-surface/40 mt-1">${rev.date}</p>
                </div>
                <span class="text-primary text-xs">${"★".repeat(rev.rating)}${"☆".repeat(5 - rev.rating)}</span>
              </div>
              <p class="font-body-md italic text-on-surface/80">"${rev.comment}"</p>
              <p class="font-label-sm text-xs tracking-widest text-primary font-medium flex items-center gap-1">
                <span class="material-symbols-outlined text-xs">verified</span> VERIFIED BUYER
              </p>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Complete Look Section -->
      <section class="mt-[120px]">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="font-headline-lg text-headline-lg mb-2 tracking-tighter font-bold">COMPLETE THE LOOK</h2>
            <p class="font-body-md text-body-md text-on-surface-variant">Curated pairings from the AW26 collection.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-gutter">
          ${PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map(p => `
            <div class="group cursor-pointer" onclick="navigateTo('/product/${p.id}')">
              <div class="aspect-[3/4] overflow-hidden bg-surface-container relative mb-4 rounded-lg">
                <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="${p.image}" alt="${p.name}">
                <button class="absolute bottom-4 right-4 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <span class="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
              <h3 class="font-label-sm text-label-sm tracking-widest mb-1 font-semibold uppercase text-on-surface">${p.name}</h3>
              <p class="font-body-md text-body-md text-on-surface/60">₹${p.price.toLocaleString()}</p>
            </div>
          `).join("")}
        </div>
      </section>
    </section>

    <!-- WRITE REVIEW DIALOG -->
    <div id="review-modal" class="modal">
      <div class="modal-overlay" onclick="closeReviewModal()"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>WRITE A REVIEW</h3>
          <button class="close-btn" onclick="closeReviewModal()"><i data-lucide="x"></i></button>
        </div>
        <form onsubmit="submitReview(event, '${product.id}')">
          <div class="review-form-group">
            <label>YOUR NAME</label>
            <input type="text" id="rev-name" class="review-input" required>
          </div>
          <div class="review-form-group">
            <label>RATING</label>
            <div class="rating-input" id="rev-rating-container">
              <i data-lucide="star" onclick="setFormRating(1)" class="active"></i>
              <i data-lucide="star" onclick="setFormRating(2)"></i>
              <i data-lucide="star" onclick="setFormRating(3)"></i>
              <i data-lucide="star" onclick="setFormRating(4)"></i>
              <i data-lucide="star" onclick="setFormRating(5)"></i>
            </div>
          </div>
          <div class="review-form-group">
            <label>COMMENT</label>
            <textarea id="rev-comment" class="review-textarea" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">SUBMIT REVIEW</button>
        </form>
      </div>
    </div>
  `;

  // Attach zoom image mouse event listeners
  const zoomContainer = container.querySelector('.zoom-container');
  const zoomImage = container.querySelector('.zoom-image');
  if (zoomContainer && zoomImage) {
    zoomContainer.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = zoomContainer.getBoundingClientRect();
        const x = (e.clientX - left) / width * 100;
        const y = (e.clientY - top) / height * 100;
        zoomImage.style.transformOrigin = `${x}% ${y}%`;
    });
    zoomContainer.addEventListener('mouseleave', () => {
        zoomImage.style.transformOrigin = 'center center';
    });
  }

  lucide.createIcons();
}

function changeDetailImage(thumb, src) {
  document.querySelectorAll(".gallery-thumb").forEach(t => {
    t.classList.remove("border-primary", "bg-primary/5", "active");
    t.classList.add("border-white/10", "hover:border-white");
  });
  thumb.classList.remove("border-white/10", "hover:border-white");
  thumb.classList.add("border-primary", "bg-primary/5", "active");
  document.getElementById("mainProductImage").src = src;
}

function selectDetailSize(btn) {
  document.querySelectorAll(".size-option-btn").forEach(b => {
    b.classList.remove("border-primary", "bg-primary/5");
    b.classList.add("border-white/10", "hover:border-white");
  });
  btn.classList.remove("border-white/10", "hover:border-white");
  btn.classList.add("border-primary", "bg-primary/5");
  activeDetailSize = btn.getAttribute("data-size");
}

function addDetailItemToCart(productId) {
  if (!activeDetailSize) {
    showToast("Please select a size first.", "info");
    return;
  }
  addToCart(productId, activeDetailSize, 1);
}

function toggleAccordion(btn) {
  const item = btn.closest(".accordion-item");
  const content = item.querySelector(".accordion-content");
  
  item.classList.toggle("active");
  if (item.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    content.style.maxHeight = "0";
  }
}

// Write Review Modal Logic
let currentFormRating = 1;
function openReviewModal() {
  document.getElementById("review-modal").classList.add("active");
}
function closeReviewModal() {
  document.getElementById("review-modal").classList.remove("active");
}
function setFormRating(stars) {
  currentFormRating = stars;
  const starsList = document.querySelectorAll("#rev-rating-container i");
  starsList.forEach((star, idx) => {
    if (idx < stars) {
      star.classList.add("active");
      star.style.fill = "#ffb400";
    } else {
      star.classList.remove("active");
      star.style.fill = "none";
    }
  });
}

function submitReview(e, productId) {
  e.preventDefault();
  const name = document.getElementById("rev-name").value;
  const comment = document.getElementById("rev-comment").value;
  
  const newReview = {
    user: name,
    rating: currentFormRating,
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    comment: comment
  };

  if (!REVIEWS[productId]) REVIEWS[productId] = [];
  REVIEWS[productId].unshift(newReview);

  closeReviewModal();
  renderProductDetail(productId);
  showToast("Thank you for your feedback! Review published.");
}

// --- COLLECTIONS VIEW ---
function renderCollections() {
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <section class="collections-page">
      <h1>CAMPAIGNS & ARCHIVES</h1>
      <div class="campaign-grid">
        <div class="campaign-row">
          <div class="campaign-img-box">
            <img src="images/look1_model.png" alt="Core Lookbook">
          </div>
          <div class="campaign-info">
            <span class="campaign-tag">SPRING // SUMMER 2026</span>
            <h2 class="campaign-title">CORE LOOK: DECONSTRUCT DENIM</h2>
            <p class="campaign-desc">Highlighting exclusively-tailored silhouettes with raw edge detailing. Redefining traditional standards of stitch alignments and structural shape, this collection emphasizes the beauty of unfinished aesthetics.</p>
            <a href="#/denim" class="btn btn-secondary">EXPLORE CAMPAIGN</a>
          </div>
        </div>

        <div class="campaign-row">
          <div class="campaign-img-box">
            <img src="images/look2_model.png" alt="Nomad Collection">
          </div>
          <div class="campaign-info">
            <span class="campaign-tag">AUTUMN // WINTER 2025</span>
            <h2 class="campaign-title">NOMAD: STREET HEAVYWEIGHTS</h2>
            <p class="campaign-desc">Boxy, heavyweight structured knits designed for comfort and resilience in urban environments. Constructed with dense 310 GSM dry-cotton and paired with comfortable, relaxed raw selvedge fits.</p>
            <a href="#/new-arrivals" class="btn btn-secondary">EXPLORE COLLECTION</a>
          </div>
        </div>

        <div class="campaign-row">
          <div class="campaign-img-box">
            <img src="images/look3_model.png" alt="Urban Silence Collection">
          </div>
          <div class="campaign-info">
            <span class="campaign-tag">FALL // WINTER 2024</span>
            <h2 class="campaign-title">URBAN SILENCE: BLACKOUT</h2>
            <p class="campaign-desc">An editorial capsule detailing raw black selvedge denim in heavy structured configurations. Tailored for absolute minimalism, featuring double-stitch reinforcements and brushed steel hardware.</p>
            <a href="#/new-arrivals" class="btn btn-secondary">EXPLORE ARCHIVE</a>
          </div>
        </div>

        <div class="campaign-row">
          <div class="campaign-img-box">
            <img src="images/product_jacket_blue.png" alt="Driftwood Archive">
          </div>
          <div class="campaign-info">
            <span class="campaign-tag">SPRING // SUMMER 2024</span>
            <h2 class="campaign-title">DRIFTWOOD ARCHIVE</h2>
            <p class="campaign-desc">Inspired by bleached textures and raw organic structural alignments. Highlighting organic cotton processing, hand-distressed edge hems, and soft textured fits.</p>
            <a href="#/denim" class="btn btn-secondary">EXPLORE ARCHIVE</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// --- SUSTAINABILITY VIEW ---
function renderSustainability() {
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <section class="sustainability-page">
      <div class="sustainability-hero">
        <h1>CONSCIOUS TAILORING</h1>
        <p>At THEFARZI, our goal is to build long-lasting premium garments while minimizing ecological impacts. We focus on ethical, transparent, and circular production methods.</p>
      </div>

      <!-- Live Counters Grid -->
      <div class="stats-grid">
        <div class="stat-card" id="stat-water">
          <div class="stat-number" data-target="92">0%</div>
          <div class="stat-label">WATER SAVED IN DYEING</div>
        </div>
        <div class="stat-card" id="stat-cotton">
          <div class="stat-number" data-target="100">0%</div>
          <div class="stat-label">ORGANIC COTTON SOURCED</div>
        </div>
        <div class="stat-card" id="stat-waste">
          <div class="stat-number" data-target="10">0%</div>
          <div class="stat-label">ZERO FABRIC WASTE DESIGN</div>
        </div>
      </div>

      <div class="sustainability-split">
        <div class="sus-text">
          <h3>The Raw Process</h3>
          <p>We work exclusively with certified ethical mills using organic dry cotton. By keeping our fabrics raw and un-prewashed, we omit chemical washes and preserve structural density. This means our garments are stronger, last longer, and degrade naturally without shedding microplastics.</p>
        </div>
        <div class="sus-img">
          <img src="images/product_jeans_blue.png" alt="Raw Selvedge Denim details">
        </div>
      </div>

      <!-- TIMELINE FLOW SECTION (NEW BLOCK) -->
      <div style="margin-top: 10rem; padding-top: 6rem; border-top: 1px solid var(--color-glass-border)">
        <span class="section-subtitle" style="text-align: center;">PRODUCTION JOURNEY</span>
        <h2 class="section-title" style="text-align: center; margin-bottom: 5rem;">SEED-TO-SHELF PROCESS</h2>
        <div style="display: flex; flex-direction: column; gap: 3rem; max-width: 800px; margin: 0 auto; position: relative;">
          <!-- vertical line -->
          <div style="position: absolute; left: 24px; top: 10px; bottom: 10px; width: 2px; background: var(--color-glass-border);"></div>
          
          <div style="display: flex; gap: 2rem; position: relative; z-index: 1;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-white); color: var(--color-black); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; flex-shrink: 0;">01</div>
            <div>
              <h4 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.5rem;">Organic Cotton Sourcing</h4>
              <p style="font-size: 0.85rem; line-height: 1.6; color: var(--color-text-secondary);">We harvest 100% GOTS-certified organic cotton from rain-fed ethical crops, eliminating toxic pesticides and saving irrigation water.</p>
            </div>
          </div>
          <div style="display: flex; gap: 2rem; position: relative; z-index: 1;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-white); color: var(--color-black); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; flex-shrink: 0;">02</div>
            <div>
              <h4 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.5rem;">Indigo Ring Dyeing</h4>
              <p style="font-size: 0.85rem; line-height: 1.6; color: var(--color-text-secondary);">Yarns are dyed in closed-loop systems using natural indigo. 100% of dye wastewater is purified and fed back into production cycles.</p>
            </div>
          </div>
          <div style="display: flex; gap: 2rem; position: relative; z-index: 1;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-white); color: var(--color-black); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; flex-shrink: 0;">03</div>
            <div>
              <h4 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.5rem;">Shuttle Loom Weaving</h4>
              <p style="font-size: 0.85rem; line-height: 1.6; color: var(--color-text-secondary);">Woven slowly on heritage shuttle looms to create tight redline selvedge denim, preserving texture and structure.</p>
            </div>
          </div>
          <div style="display: flex; gap: 2rem; position: relative; z-index: 1;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--color-white); color: var(--color-black); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; flex-shrink: 0;">04</div>
            <div>
              <h4 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.5rem;">Tailoring & Raw Shipping</h4>
              <p style="font-size: 0.85rem; line-height: 1.6; color: var(--color-text-secondary);">Individually stitched and shipped raw. Zero chemical washes or sandpaper distressing means the garment reaches you in its strongest state.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Start animated stats
  setTimeout(animateStats, 100);
}

function animateStats() {
  const cards = document.querySelectorAll(".stat-card");
  cards.forEach((card, idx) => {
    // Reveal card
    setTimeout(() => {
      card.classList.add("visible");
      
      const numEl = card.querySelector(".stat-number");
      const target = parseInt(numEl.getAttribute("data-target"));
      let current = 0;
      const interval = setInterval(() => {
        current += Math.ceil(target / 20);
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        numEl.textContent = `${current}%`;
      }, 35);
    }, idx * 200);
  });
}

// --- CHECKOUT VIEW ---
function renderCheckout() {
  const container = document.getElementById("main-content");
  
  if (state.cart.length === 0) {
    container.innerHTML = `
      <section class="checkout-page" style="text-align: center; padding: 10rem 0;">
        <h1>YOUR CART IS EMPTY</h1>
        <p style="margin-top: 1rem; color: var(--color-text-secondary);">Add products to your cart before proceeding to checkout.</p>
        <a href="#/new-arrivals" class="btn btn-primary" style="margin-top: 2rem;">SHOP NOW</a>
      </section>
    `;
    return;
  }

  let subtotal = 0;
  state.cart.forEach(item => subtotal += (item.price * item.quantity));
  const shipping = subtotal > 15000 ? 0 : 500;
  const tax = Math.round(subtotal * 0.05); // 5% handling/taxes
  const total = subtotal + shipping + tax;

  container.innerHTML = `
    <section class="checkout-page max-w-container-max mx-auto px-4 md:px-margin-desktop py-8">
      <h1 class="hidden">CHECKOUT</h1>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter pt-8">
        <!-- Left: Shipping & Payment -->
        <div class="lg:col-span-7 space-y-16">
          <!-- Contact -->
          <section>
            <div class="flex justify-between items-baseline mb-8">
              <h2 class="font-title-md text-title-md uppercase tracking-[0.2em] font-bold text-on-surface">Contact Information</h2>
              <a class="font-label-sm text-primary hover:opacity-80 transition-opacity font-semibold tracking-wider" href="#/">Login</a>
            </div>
            <div class="space-y-6">
              <div class="relative">
                <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="Email Address" type="email" required>
              </div>
              <div class="flex items-center gap-3">
                <input class="w-4 h-4 bg-transparent border-white/20 rounded-none checked:bg-primary-container focus:ring-0 focus:ring-offset-0" id="newsletter" type="checkbox">
                <label class="font-body-md text-on-surface/60 cursor-pointer select-none" for="newsletter">Email me with news and offers</label>
              </div>
            </div>
          </section>

          <!-- Shipping -->
          <section>
            <h2 class="font-title-md text-title-md uppercase tracking-[0.2em] font-bold text-on-surface mb-8">Shipping Address</h2>
            <form id="checkout-shipping-form" class="grid grid-cols-2 gap-x-gutter gap-y-8" onsubmit="processCheckout(event)">
              <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="First Name" type="text" required>
              <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="Last Name" type="text" required>
              <div class="col-span-2">
                <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="Address" type="text" required>
              </div>
              <div class="col-span-2">
                <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="Apartment, suite, etc. (optional)" type="text">
              </div>
              <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="City" type="text" required>
              <div class="relative">
                <select class="w-full py-4 form-input-minimal font-body-md text-on-surface bg-transparent appearance-none">
                  <option class="bg-background" value="IN">India</option>
                  <option class="bg-background" value="US">United States</option>
                  <option class="bg-background" value="UK">United Kingdom</option>
                  <option class="bg-background" value="FR">France</option>
                </select>
                <span class="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface/30">expand_more</span>
              </div>
              <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="Postal Code" type="text" required>
              <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="Phone" type="tel" required>
              
              <!-- Payment Inner -->
              <div class="col-span-2 mt-8">
                <h2 class="font-title-md text-title-md uppercase tracking-[0.2em] font-bold text-on-surface mb-8">Payment</h2>
                <div class="border border-white/10 rounded-lg overflow-hidden bg-surface-container-low">
                  <div class="p-6 border-b border-white/10 flex justify-between items-center bg-surface-container">
                    <div class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">credit_card</span>
                      <span class="font-body-md font-semibold">Credit Card</span>
                    </div>
                    <div class="flex gap-2">
                      <span class="material-symbols-outlined text-[20px] text-on-surface/40">payments</span>
                      <span class="material-symbols-outlined text-[20px] text-on-surface/40">wallet</span>
                    </div>
                  </div>
                  <div class="p-6 space-y-8">
                    <div class="relative">
                      <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="Card Number" type="text" placeholder="0000 0000 0000 0000" maxlength="19" required>
                      <span class="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-on-surface/30">lock</span>
                    </div>
                    <div class="grid grid-cols-2 gap-gutter">
                      <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="Expiration Date (MM/YY)" maxlength="5" type="text" required>
                      <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="Security Code (CVV)" maxlength="3" type="password" required>
                    </div>
                    <input class="w-full py-4 form-input-minimal font-body-md text-on-surface placeholder:text-on-surface/30" placeholder="Name on Card" type="text" required>
                  </div>
                </div>
              </div>

              <!-- Submit form trigger button -->
              <button type="submit" id="checkout-submit-btn" class="hidden"></button>
            </form>
          </section>
        </div>

        <!-- Right: Order Summary Sticky -->
        <div class="lg:col-span-5">
          <div class="sticky top-[120px] space-y-8">
            <div class="bg-surface-container-low p-8 border border-white/10 rounded-lg">
              <h2 class="font-title-md text-title-md uppercase tracking-[0.2em] font-bold text-on-surface mb-8">Order Summary</h2>
              
              <!-- Cart Product List -->
              <div class="space-y-6 mb-8 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar border-b border-white/5 pb-6">
                ${state.cart.map(item => `
                  <div class="flex items-center gap-4">
                    <div class="relative w-20 h-26 bg-surface-container-high rounded overflow-hidden flex-shrink-0 border border-white/5">
                      <img class="w-full h-full object-cover" src="${item.image}" alt="${item.name}">
                      <span class="absolute -top-2 -right-2 bg-on-surface text-background w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow">${item.quantity}</span>
                    </div>
                    <div class="flex-grow">
                      <h4 class="font-body-md font-bold text-on-surface uppercase tracking-wider text-sm">${item.name}</h4>
                      <p class="font-label-sm text-on-surface/50 uppercase tracking-tighter text-[11px]">${item.size}</p>
                    </div>
                    <span class="font-body-md text-on-surface text-sm">₹${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                `).join("")}
              </div>

              <!-- Totals details -->
              <div class="space-y-4 pt-4">
                <div class="flex justify-between font-body-md text-on-surface/70 text-sm">
                  <span>Subtotal</span>
                  <span>₹${subtotal.toLocaleString()}</span>
                </div>
                <div class="flex justify-between font-body-md text-on-surface/70 text-sm">
                  <span>Shipping</span>
                  <span>${shipping === 0 ? '<span class="text-primary font-bold">FREE</span>' : '₹' + shipping}</span>
                </div>
                <div class="flex justify-between font-body-md text-on-surface/70 text-sm">
                  <span>Handling &amp; Taxes</span>
                  <span>₹${tax.toLocaleString()}</span>
                </div>
                
                <div class="flex justify-between font-headline-lg text-[22px] font-bold pt-4 border-t border-white/5 text-on-surface">
                  <span>Total</span>
                  <div class="text-right">
                    <span class="text-[12px] font-normal text-on-surface/40 align-middle mr-2">INR</span>
                    <span>₹${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <!-- CTA Complete purchase button -->
              <button onclick="document.getElementById('checkout-submit-btn').click()" class="w-full mt-10 bg-primary-container text-white py-6 font-title-md uppercase tracking-[0.2em] font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-4 rounded-lg shadow-lg">
                <span>Complete Purchase</span>
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
              
              <div class="mt-6 flex items-center justify-center gap-3 text-on-surface/40">
                <span class="material-symbols-outlined text-[16px]">verified_user</span>
                <span class="font-label-sm uppercase tracking-widest text-[10px]">AES-256 Bit Encryption</span>
              </div>
            </div>

            <!-- Sustainability message card -->
            <div class="flex gap-4 p-6 border border-white/10 rounded-lg">
              <span class="material-symbols-outlined text-primary">eco</span>
              <div>
                <h4 class="font-label-sm font-bold uppercase tracking-widest mb-1 text-sm text-on-surface">Carbon Neutral Shipping</h4>
                <p class="font-body-md text-[13px] text-on-surface/60 leading-relaxed">Every delivery is offset with verified environmental projects. Sustainability is not an option; it is our foundation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  lucide.createIcons();
}

function processCheckout(e) {
  e.preventDefault();
  
  // Find the submit button visible CTA to show visually active state
  const ctaBtn = document.querySelector('button[onclick*="checkout-submit-btn"]');
  if (ctaBtn) {
    ctaBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[18px]">sync</span> <span>Processing...</span>';
    ctaBtn.classList.add('opacity-80', 'pointer-events-none');
  }
  
  setTimeout(() => {
    if (ctaBtn) {
      ctaBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check_circle</span> <span>Success</span>';
      ctaBtn.classList.remove('bg-primary-container');
      ctaBtn.classList.add('bg-green-600');
    }
    
    setTimeout(() => {
      // Clear cart state
      state.cart = [];
      saveState();
      updateCartBadge();
      window.location.hash = "#/success";
    }, 800);
  }, 1500);
}

// --- ORDER SUCCESS VIEW ---
function renderSuccess() {
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <section class="success-page">
      <div class="success-icon-box">
        <i data-lucide="check" style="width: 40px; height: 40px;"></i>
      </div>
      <h1>Order Placed Successfully</h1>
      <p>Thank you for choosing THEFARZI. We have received your mock transaction and are processing your order shipment. A confirmation summary email will be sent shortly.</p>
      <a href="#/" class="btn btn-primary" style="margin-top: 2rem;">RETURN TO MAIN PAGE</a>
    </section>
  `;
}
