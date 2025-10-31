document.addEventListener("DOMContentLoaded", () => {
  // 取得目前頁面路徑
  const path = window.location.pathname;

  // === 全站共用功能 ===
  initGlobal();

  // === 分頁專屬功能 ===
  if (path.includes("index.html") || path === "/" || path === "/Sweetaste/") {
    initHomePage();
  } else if (path.includes("products")) {
    initProductsPage();
  } else if (path.includes("login")) {
    initLoginPage();
  } else if (path.includes("cart")) {
    initCartPage();
  }
});

/* ==========================
   全站共用功能
   ========================== */
function initGlobal() {
  // 收藏按鈕切換（所有頁面都可用）
  document.querySelectorAll(".fav").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("is-active");
    });
  });
}

/* ==========================
   首頁專屬功能
   ========================== */
function initHomePage() {
  console.log("首頁功能啟動");
  // 啟用收藏功能（呼叫全域共用愛心）
  initGlobal();
  // banner tab 切換
  const tabs = document.querySelectorAll(".banner__tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
    });
  });

  // 首頁漢堡（使用首頁相對路徑）
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const icon = hamburger?.querySelector("img");

  if (hamburger && mobileMenu && icon) {
    hamburger.addEventListener("click", () => {
      const isActive = hamburger.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
      icon.src = isActive
        ? "assets/images/icon-close.svg"
        : "assets/images/icon-hamburger.svg";
    });
  }
}

/* ==========================
   商品頁專屬功能
   ========================== */
function initProductsPage() {
  console.log("商品頁功能啟動");

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const icon = hamburger?.querySelector("img");

  if (hamburger && mobileMenu && icon) {
    hamburger.addEventListener("click", () => {
      const isActive = hamburger.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
      icon.src = isActive
        ? "../assets/images/icon-close.svg" // 商品頁相對路徑要回上層
        : "../assets/images/icon-hamburger.svg";
    });
  }
}

/* ==========================
   🔐 登入頁專屬功能
   ========================== */
function initLoginPage() {
  console.log("🔐 登入頁功能啟動");

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const icon = hamburger?.querySelector("img");

  if (hamburger && mobileMenu && icon) {
    hamburger.addEventListener("click", () => {
      const isActive = hamburger.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");

      icon.src = isActive
        ? "../assets/images/icon-close.svg" // ✅ 登入頁是上層路徑
        : "../assets/images/icon-hamburger.svg";
    });
  }
}

/* ==========================
   🛒 購物車專屬功能
   ========================== */
function initCartPage() {
  console.log("🛒 購物車頁功能啟動");

  // 數量控制
  document.querySelectorAll(".cart-item").forEach((item) => {
    const minusBtn = item.querySelector('button[aria-label="減少數量"]');
    const plusBtn = item.querySelector('button[aria-label="增加數量"]');
    const quantitySpan = item.querySelector(".quantity-value");
    const unitPrice = parseInt(item.querySelector(".unit-price").textContent);
    const subtotalEl = item.querySelector(".subtotal span");

    const updateSubtotal = () => {
      const qty = parseInt(quantitySpan.textContent);
      subtotalEl.textContent = (unitPrice * qty).toLocaleString();
      updateCartSummary();
    };

    minusBtn.addEventListener("click", () => {
      let qty = parseInt(quantitySpan.textContent);
      if (qty > 1) {
        qty--;
        quantitySpan.textContent = qty;
        updateSubtotal();
      }
    });

    plusBtn.addEventListener("click", () => {
      let qty = parseInt(quantitySpan.textContent);
      if (qty < 99) {
        qty++;
        quantitySpan.textContent = qty;
        updateSubtotal();
      }
    });
  });

  // 刪除商品
  document.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const item = e.target.closest(".cart-item");
      item.classList.add(
        "opacity-0",
        "translate-x-full",
        "transition-all",
        "duration-300"
      );
      setTimeout(() => {
        item.remove();
        updateCartSummary();
      }, 300);
    });
  });

  // 更新訂單摘要
  function updateCartSummary() {
    let subtotal = 0;
    document.querySelectorAll(".cart-item .subtotal span").forEach((el) => {
      subtotal += parseInt(el.textContent.replace(/,/g, "")) || 0;
    });

    const shipping = 300;
    const total = subtotal + shipping;

    const subtotalEl = document.querySelector("#summary-subtotal");
    const totalEl = document.querySelector("#summary-total");

    if (subtotalEl) subtotalEl.textContent = `NT$ ${subtotal.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `NT$ ${total.toLocaleString()}`;
  }
}
