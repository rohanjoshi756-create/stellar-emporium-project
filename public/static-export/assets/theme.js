/* Nakshatra Store — static export interactions (vanilla JS, no framework).
   Design/markup is untouched; this only re-wires the behaviours that React handled. */
(function () {
  "use strict";

  /* ---------- Mobile menu / drawers: toggle any [aria-expanded] trigger ---------- */
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[aria-controls]");
    if (!t) return;
    var panel = document.getElementById(t.getAttribute("aria-controls"));
    if (!panel) return;
    var open = t.getAttribute("aria-expanded") === "true";
    t.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
    panel.classList.toggle("hidden", open);
  });

  /* ---------- Product gallery: thumbnail switches the main image ---------- */
  var mainImg = document.querySelector('img[fetchpriority="high"], .product-gallery img');
  document.querySelectorAll('button[aria-label^="Show image"]').forEach(function (btn) {
    btn.addEventListener("click", function () {
      var thumb = btn.querySelector("img");
      if (!thumb || !mainImg) return;
      mainImg.src = thumb.src;
      mainImg.alt = thumb.alt;
      document.querySelectorAll('button[aria-label^="Show image"]').forEach(function (b) {
        b.setAttribute("aria-current", String(b === btn));
      });
    });
  });

  /* ---------- Sale countdown (ends at midnight, same logic as the app) ---------- */
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var clocks = Array.prototype.filter.call(
    document.querySelectorAll("span, strong, div"),
    function (el) { return /^\d{2}:\d{2}:\d{2}$/.test(el.textContent.trim()) && !el.children.length; }
  );
  if (clocks.length) {
    setInterval(function () {
      var now = new Date(), end = new Date(now); end.setHours(24, 0, 0, 0);
      var s = Math.max(0, Math.floor((end - now) / 1000));
      var txt = pad(Math.floor(s / 3600)) + ":" + pad(Math.floor((s % 3600) / 60)) + ":" + pad(s % 60);
      clocks.forEach(function (el) { el.textContent = txt; });
    }, 1000);
  }

  /* ---------- Quantity selector ---------- */
  document.querySelectorAll("[data-qty], .qty").forEach(function (wrap) {
    var input = wrap.querySelector("input");
    wrap.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        if (!input) return;
        var v = parseInt(input.value || "1", 10);
        var dec = /-|minus|decrease/i.test(b.getAttribute("aria-label") || b.textContent);
        input.value = Math.max(1, dec ? v - 1 : v + 1);
      });
    });
  });

  /* ---------- Pincode delivery check ---------- */
  var pin = document.getElementById("pincode");
  if (pin) {
    pin.addEventListener("input", function () { pin.value = pin.value.replace(/\D/g, "").slice(0, 6); });
    var form = pin.closest("form");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.parentElement.querySelector("[data-pincode-result]");
      if (!msg) {
        msg = document.createElement("p");
        msg.setAttribute("data-pincode-result", "");
        msg.className = "mt-2 text-xs";
        msg.style.color = "var(--success)";
        form.parentElement.appendChild(msg);
      }
      msg.textContent = pin.value.length === 6
        ? "✓ Delivery available at " + pin.value + " · Prepaid & COD both supported"
        : "Please enter a valid 6-digit pincode";
    });
  }

  /* ---------- FAQ accordions (native <details> already work; sync icons) ---------- */
  document.querySelectorAll("details").forEach(function (d) {
    d.addEventListener("toggle", function () { d.classList.toggle("is-open", d.open); });
  });

  /* ---------- Add to cart / Buy now: swap these for Shopify cart endpoints ---------- */
  var CART_KEY = "nakshatra-cart";
  var readCart = function () { try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); } catch (e) { return []; } };
  var writeCart = function (c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); paintCount(c); };
  function paintCount(c) {
    var n = c.reduce(function (s, i) { return s + i.quantity; }, 0);
    document.querySelectorAll("[data-cart-count]").forEach(function (el) { el.textContent = n; });
  }
  paintCount(readCart());

  document.querySelectorAll("[data-add-to-cart], button").forEach(function (btn) {
    if (!/add to cart|add all|buy now/i.test(btn.textContent)) return;
    btn.addEventListener("click", function () {
      var qty = parseInt((document.querySelector("[data-qty] input, .qty input") || {}).value || "1", 10);
      var cart = readCart();
      cart.push({
        variantId: btn.getAttribute("data-variant-id") || location.pathname,
        quantity: qty,
        price: btn.getAttribute("data-price") || ""
      });
      writeCart(cart);
      if (/buy now/i.test(btn.textContent)) window.location.href = "./index.html";
    });
  });
})();
