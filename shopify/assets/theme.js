/* =========================================================================
   Nakshatra Store — theme.js
   Vanilla JS only. Cart uses Shopify's native AJAX Cart API (/cart/*.js).
   ========================================================================= */
(function () {
  "use strict";

  const money = (cents) =>
    (window.Shopify && window.Shopify.formatMoney)
      ? window.Shopify.formatMoney(cents, window.themeMoneyFormat)
      : "₹" + (cents / 100).toLocaleString("en-IN");

  /* ---------------- Toast ---------------- */
  let toastTimer;
  function toast(message) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = message;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
  }

  /* ---------------- Drawers ---------------- */
  function openDrawer(id) {
    const d = document.getElementById(id);
    if (!d) return;
    d.classList.add("is-open");
    document.body.style.overflow = "hidden";
    const close = d.querySelector("[data-drawer-close]");
    if (close) close.focus();
  }
  function closeDrawer(d) {
    d.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const opener = e.target.closest("[data-drawer-open]");
    if (opener) { e.preventDefault(); openDrawer(opener.dataset.drawerOpen); return; }
    const closer = e.target.closest("[data-drawer-close], .drawer__overlay");
    if (closer) { const d = closer.closest(".drawer"); if (d) closeDrawer(d); }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    document.querySelectorAll(".drawer.is-open").forEach(closeDrawer);
  });

  /* ---------------- Cart API ---------------- */
  async function getCart() {
    const res = await fetch("/cart.js", { headers: { Accept: "application/json" } });
    return res.json();
  }

  async function addToCart(id, quantity) {
    const res = await fetch("/cart/add.js", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ items: [{ id: Number(id), quantity: Number(quantity) || 1 }] }),
    });
    if (!res.ok) throw new Error((await res.json()).description || "Could not add to cart");
    return res.json();
  }

  async function changeLine(line, quantity) {
    const res = await fetch("/cart/change.js", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ line: Number(line), quantity: Number(quantity) }),
    });
    return res.json();
  }

  /* ---------------- Cart drawer rendering ---------------- */
  const threshold = Number(document.documentElement.dataset.freeShipping || 0); // in cents

  function renderCart(cart) {
    document.querySelectorAll("[data-cart-count]").forEach((el) => {
      el.textContent = cart.item_count;
      el.hidden = cart.item_count === 0;
    });

    const body = document.querySelector("[data-cart-lines]");
    if (body) {
      body.innerHTML = cart.items.length === 0
        ? '<p class="center" style="padding:2rem 0;color:var(--muted-foreground)">Your cart is empty.</p>'
        : cart.items.map((item, i) => `
          <li class="card-lux cart-line" style="margin-bottom:.75rem">
            <img src="${item.image ? item.image.replace(/(\.[a-z]+)(\?|$)/i, "_200x$1$2") : ""}"
                 alt="${item.product_title.replace(/"/g, "&quot;")}" width="96" height="96" loading="lazy">
            <div style="min-width:0;flex:1">
              <p style="margin:0;font-size:.82rem">${item.product_title}</p>
              <p class="product-card__price" style="margin:.25rem 0 0">${money(item.final_price)}</p>
              <div style="display:flex;align-items:center;gap:.75rem;margin-top:.6rem">
                <div class="qty">
                  <button type="button" data-line="${i + 1}" data-qty="${item.quantity - 1}" aria-label="Decrease quantity">−</button>
                  <input value="${item.quantity}" readonly aria-label="Quantity">
                  <button type="button" data-line="${i + 1}" data-qty="${item.quantity + 1}" aria-label="Increase quantity">+</button>
                </div>
                <button type="button" class="link-remove" data-line="${i + 1}" data-qty="0"
                        style="background:none;border:none;font-size:.72rem;color:var(--muted-foreground);cursor:pointer">Remove</button>
                <span style="margin-left:auto;font-size:.82rem">${money(item.final_line_price)}</span>
              </div>
            </div>
          </li>`).join("");
    }

    document.querySelectorAll("[data-cart-subtotal]").forEach((el) => { el.textContent = money(cart.total_price); });

    const bar = document.querySelector("[data-free-shipping]");
    if (bar && threshold > 0) {
      const remaining = Math.max(0, threshold - cart.total_price);
      bar.querySelector("[data-free-shipping-text]").textContent = remaining > 0
        ? `Add ${money(remaining)} more for free shipping`
        : "You have unlocked free shipping";
      bar.querySelector("span > span").style.width =
        Math.min(100, (cart.total_price / threshold) * 100) + "%";
    }
  }

  async function refreshCart(open) {
    const cart = await getCart();
    renderCart(cart);
    if (open) openDrawer("cart-drawer");
  }

  /* ---------------- Add to cart / buy now ---------------- */
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-add-to-cart]");
    if (btn) {
      e.preventDefault();
      const form = btn.closest("form");
      const variantId = btn.dataset.variantId || (form && form.querySelector("[name='id']").value);
      const qtyInput = form && form.querySelector("[name='quantity']");
      const quantity = btn.dataset.quantity || (qtyInput ? qtyInput.value : 1);
      btn.disabled = true;
      try {
        await addToCart(variantId, quantity);
        const original = btn.dataset.label || btn.textContent.trim();
        btn.dataset.label = original;
        btn.textContent = "Added ✓";
        toast("Added to cart");
        await refreshCart(btn.hasAttribute("data-open-drawer"));
        setTimeout(() => { btn.textContent = original; }, 1600);
      } catch (err) {
        toast(err.message);
      } finally {
        btn.disabled = false;
      }
      return;
    }

    const buy = e.target.closest("[data-buy-now]");
    if (buy) {
      e.preventDefault();
      const form = buy.closest("form");
      const variantId = buy.dataset.variantId || form.querySelector("[name='id']").value;
      const quantity = buy.dataset.quantity || form.querySelector("[name='quantity']").value;
      buy.disabled = true;
      try {
        await addToCart(variantId, quantity);
        window.location.href = "/checkout";
      } catch (err) {
        buy.disabled = false;
        toast(err.message);
      }
      return;
    }

    const qtyBtn = e.target.closest("[data-cart-lines] [data-line], .link-remove");
    if (qtyBtn && qtyBtn.dataset.line) {
      e.preventDefault();
      const cart = await changeLine(qtyBtn.dataset.line, qtyBtn.dataset.qty);
      renderCart(cart);
      if (document.body.classList.contains("template-cart")) window.location.reload();
    }
  });

  /* ---------------- Product page: quantity + variants + gallery ---------------- */
  document.querySelectorAll("[data-product-form]").forEach((form) => {
    const qtyInput = form.querySelector("[name='quantity']");
    form.querySelectorAll("[data-qty-step]").forEach((b) => {
      b.addEventListener("click", () => {
        const next = Math.max(1, Number(qtyInput.value) + Number(b.dataset.qtyStep));
        qtyInput.value = next;
        form.querySelectorAll("[data-quantity]").forEach((el) => { el.dataset.quantity = next; });
        document.dispatchEvent(new CustomEvent("quantity:change", { detail: { quantity: next } }));
      });
    });

    const select = form.querySelector("[data-variant-select]");
    if (select) {
      select.addEventListener("change", () => {
        const id = select.value;
        form.querySelector("[name='id']").value = id;
        form.querySelectorAll("[data-variant-id]").forEach((el) => { el.dataset.variantId = id; });
        const url = new URL(window.location);
        url.searchParams.set("variant", id);
        window.history.replaceState({}, "", url);
      });
    }
  });

  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const main = gallery.querySelector("[data-gallery-main]");
    gallery.querySelectorAll("[data-gallery-thumb]").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        main.src = thumb.dataset.galleryThumb;
        main.alt = thumb.dataset.alt || main.alt;
        gallery.querySelectorAll("[data-gallery-thumb]").forEach((t) => t.setAttribute("aria-current", "false"));
        thumb.setAttribute("aria-current", "true");
      });
    });
  });

  /* ---------------- Recently viewed (localStorage, ring buffer of 12) ---------- */
  const RV_KEY = "nakshatra:recently-viewed";
  function readRV() {
    try { return JSON.parse(localStorage.getItem(RV_KEY)) || []; } catch (e) { return []; }
  }
  const current = document.body.dataset.productHandle;
  if (current) {
    const next = [current].concat(readRV().filter((h) => h !== current)).slice(0, 12);
    try { localStorage.setItem(RV_KEY, JSON.stringify(next)); } catch (e) { /* storage blocked */ }
  }
  const rvSection = document.querySelector("[data-recently-viewed]");
  if (rvSection) {
    const handles = readRV().filter((h) => h !== current).slice(0, 6);
    if (handles.length === 0) {
      rvSection.remove();
    } else {
      const target = rvSection.querySelector("[data-recently-viewed-grid]");
      Promise.all(handles.map((h) =>
        fetch(`/products/${h}?view=card`).then((r) => (r.ok ? r.text() : "")).catch(() => "")
      )).then((cards) => {
        const html = cards.filter(Boolean).join("");
        if (html) { target.innerHTML = html; rvSection.hidden = false; }
        else rvSection.remove();
      });
    }
  }

  /* ---------------- Scroll reveal ---------------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px" })
    : null;
  document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("is-visible")));

  /* ---------------- Boot ---------------- */
  document.addEventListener("DOMContentLoaded", () => { refreshCart(false); });
})();