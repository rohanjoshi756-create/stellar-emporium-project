/* Nakshatra Store — static export interactions (vanilla JS, no framework).
   Markup, classes and design are identical to the React app; this only
   re-wires the behaviours React used to handle. */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------- Cart (localStorage) ---------------- */
  var CART_KEY = "nakshatra-cart";
  function readCart() { try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); } catch (e) { return []; } }
  function writeCart(c) { try { localStorage.setItem(CART_KEY, JSON.stringify(c)); } catch (e) {} paintCart(); }
  function cartCount() { return readCart().reduce(function (s, i) { return s + (i.quantity || 1); }, 0); }
  function paintCart() {
    var n = cartCount();
    $$("[data-cart-count]").forEach(function (el) { el.textContent = String(n); });
    $$('[aria-label^="Cart"]').forEach(function (btn) {
      btn.setAttribute("aria-label", "Cart, " + n + " item" + (n === 1 ? "" : "s"));
      var badge = btn.querySelector("[data-count-badge]");
      if (n > 0 && !badge) {
        badge = document.createElement("span");
        badge.setAttribute("data-count-badge", "");
        badge.className = "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 grid place-items-center rounded-full bg-primary text-primary-foreground text-[10px] font-semibold";
        btn.appendChild(badge);
      }
      if (badge) { badge.textContent = String(n); badge.hidden = n === 0; }
    });
  }

  function currentQuantity(scope) {
    var input = $('input[aria-label="Quantity"], [data-qty] input, .qty input', scope || document);
    var v = input ? parseInt(input.value, 10) : 1;
    return isNaN(v) || v < 1 ? 1 : v;
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("button, a");
    if (!btn) return;
    var label = (btn.getAttribute("aria-label") || btn.textContent || "").trim();
    var isAdd = btn.hasAttribute("data-variant-id") || /^add\b|add to cart|add all/i.test(label);
    var isBuy = /buy now|checkout/i.test(label);
    if (!isAdd && !isBuy) return;
    if (btn.tagName === "A" && !isAdd) return;
    e.preventDefault();
    var cart = readCart();
    cart.push({
      variantId: btn.getAttribute("data-variant-id") || location.pathname,
      title: label.replace(/^add:\s*/i, ""),
      quantity: parseInt(btn.getAttribute("data-quantity") || currentQuantity(btn.closest("form, section, div")), 10) || 1
    });
    writeCart(cart);
    toast(isBuy ? "Taking you to checkout…" : "Added to cart");
    if (isBuy) setTimeout(function () { location.href = "cart.html"; }, 400);
  });

  /* ---------------- Toast ---------------- */
  var toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      toastEl.className = "fixed left-1/2 -translate-x-1/2 bottom-6 z-[100] rounded-full bg-foreground text-background px-5 py-2.5 text-sm shadow-[var(--shadow-warm)] transition-opacity duration-300";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.style.opacity = "1";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.style.opacity = "0"; }, 2200);
  }

  /* ---------------- Quantity selector ---------------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest('[aria-label="Increase quantity"], [aria-label="Decrease quantity"], [data-qty] button, .qty button');
    if (!b) return;
    var wrap = b.parentElement;
    var input = wrap && wrap.querySelector("input");
    if (!input) return;
    e.preventDefault();
    var v = parseInt(input.value || "1", 10) || 1;
    var dec = /decrease|−|-/i.test(b.getAttribute("aria-label") || b.textContent);
    input.value = String(Math.max(1, dec ? v - 1 : v + 1));
  });

  /* ---------------- Disclosure buttons (menu, search, drawers) -------------- */
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[aria-expanded][aria-controls]");
    if (!t) return;
    var panel = document.getElementById(t.getAttribute("aria-controls"));
    if (!panel) return;
    var open = t.getAttribute("aria-expanded") === "true";
    t.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
    panel.classList.toggle("hidden", open);
  });

  /* ---------------- Hero carousel ---------------- */
  $$('[aria-roledescription="carousel"]').forEach(function (hero) {
    var slides = $$(":scope > img", hero);
    if (slides.length < 2) return;
    var dots = $$('[aria-label^="Go to slide"], [aria-label^="Show slide"]', hero);
    var i = 0, timer;
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) {
        s.classList.toggle("opacity-100", k === i);
        s.classList.toggle("opacity-0", k !== i);
        s.setAttribute("aria-hidden", String(k !== i));
      });
      dots.forEach(function (d, k) { d.setAttribute("aria-current", String(k === i)); });
    }
    function auto() { clearInterval(timer); timer = setInterval(function () { show(i + 1); }, 6000); }
    var prev = $('[aria-label="Previous banner"]', hero);
    var next = $('[aria-label="Next banner"]', hero);
    if (prev) prev.addEventListener("click", function () { show(i - 1); auto(); });
    if (next) next.addEventListener("click", function () { show(i + 1); auto(); });
    dots.forEach(function (d, k) { d.addEventListener("click", function () { show(k); auto(); }); });
    show(0); auto();
  });

  /* ---------------- Product gallery ---------------- */
  $$('button[aria-label^="Show image"], [data-gallery-thumb]').forEach(function (btn) {
    btn.addEventListener("click", function () {
      var gallery = btn.closest("section, div[class*='grid'], body");
      var main = gallery && gallery.querySelector('img[fetchpriority="high"], [data-gallery-main]');
      var thumb = btn.querySelector("img") || btn;
      if (!main || !thumb.src) return;
      main.src = thumb.src;
      main.alt = thumb.alt || main.alt;
      $$('button[aria-label^="Show image"]', gallery).forEach(function (b) {
        b.setAttribute("aria-current", String(b === btn));
      });
    });
  });

  /* ---------------- Countdown timers (HH:MM:SS until midnight) ------------- */
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var clocks = $$("span, strong, div, p").filter(function (el) {
    return !el.children.length && /^\d{2}:\d{2}:\d{2}$/.test(el.textContent.trim());
  });
  if (clocks.length) {
    setInterval(function () {
      var now = new Date(), end = new Date(now); end.setHours(24, 0, 0, 0);
      var s = Math.max(0, Math.floor((end - now) / 1000));
      var txt = pad(Math.floor(s / 3600)) + ":" + pad(Math.floor((s % 3600) / 60)) + ":" + pad(s % 60);
      clocks.forEach(function (el) { el.textContent = txt; });
    }, 1000);
  }

  /* ---------------- Pincode delivery check ---------------- */
  var pin = document.getElementById("pincode") || $('input[placeholder*="pincode" i], input[placeholder*="PIN" i]');
  if (pin) {
    pin.addEventListener("input", function () { pin.value = pin.value.replace(/\D/g, "").slice(0, 6); });
    var form = pin.closest("form");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.parentElement.querySelector("[data-pincode-result]");
      if (!msg) {
        msg = document.createElement("p");
        msg.setAttribute("data-pincode-result", "");
        msg.className = "mt-2 text-xs text-muted-foreground";
        form.parentElement.appendChild(msg);
      }
      msg.textContent = pin.value.length === 6
        ? "✓ Delivery available at " + pin.value + " · Prepaid & COD supported · Ships in 24 hrs"
        : "Please enter a valid 6-digit pincode";
    });
  }

  /* ---------------- Newsletter / search forms ---------------- */
  $$("form").forEach(function (f) {
    if (f.getAttribute("role") === "search") {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var q = f.querySelector("input");
        location.href = "search.html?q=" + encodeURIComponent(q ? q.value : "");
      });
      return;
    }
    if (f.querySelector('input[type="email"]')) {
      f.addEventListener("submit", function (e) { e.preventDefault(); toast("Thank you — you are subscribed."); f.reset(); });
    }
  });

  /* ---------------- Scroll reveal parity ---------------- */
  var io = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -8% 0px" })
    : null;
  $$(".reveal").forEach(function (el) { io ? io.observe(el) : el.classList.add("is-visible"); });

  paintCart();
})();
