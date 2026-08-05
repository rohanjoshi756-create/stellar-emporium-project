/**
 * Header — premium sticky navigation: logo, predictive-style search, desktop
 * mega nav, mobile drawer, category chips and the cart trigger.
 * Maps to `sections/header.liquid` + `snippets/cart-drawer.liquid`.
 */
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/nakshatra-logo.jpg.asset.json";
import { productCollections } from "@/data/products";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import { useCart } from "@/lib/cart";
import { storeInfo } from "@/data/site-content";

const primaryNav = productCollections.slice(0, 7);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const { lines, count, isOpen, openCart, closeCart, updateQuantity, removeLine } = useCart();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = term.trim();
    if (!q) return;
    setSearchOpen(false);
    setMenuOpen(false);
    void navigate({ to: "/search", search: { q } });
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-40 border-b border-border">
      <div className="container-x py-2.5 sm:py-3.5 flex items-center gap-3 sm:gap-6">
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden h-11 w-11 -ml-2 grid place-items-center rounded-full hover:bg-muted"
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>

        <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Nakshatra Store home">
          <img
            src={logoAsset.url}
            alt="Nakshatra Store logo — zodiac wheel with Devanagari lettering"
            width={44}
            height={44}
            className="h-9 w-9 sm:h-11 sm:w-11 rounded-full object-cover shadow-[var(--shadow-soft)]"
          />
          <span className="leading-none">
            <span className="block font-display text-xl sm:text-2xl tracking-tight">Nakshatra</span>
            <span className="hidden sm:block text-[9px] tracking-[0.34em] uppercase text-muted-foreground mt-0.5">Sacred · Certified</span>
          </span>
        </Link>

        {/* Desktop search — the highest-intent path for paid traffic. */}
        <form role="search" onSubmit={submitSearch} className="hidden lg:flex flex-1 max-w-md mx-auto">
          <label htmlFor="site-search" className="sr-only">Search products</label>
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <input
              id="site-search"
              name="q"
              type="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search rudraksha, karungali, pyrite…"
              className="w-full rounded-full border border-border bg-secondary/50 pl-11 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:bg-background transition"
            />
          </div>
        </form>

        <div className="flex items-center gap-0.5 sm:gap-1 ml-auto shrink-0">
          <a
            href={storeInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden xl:inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs hover:bg-muted transition"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" /> Talk to an astrologer
          </a>
          <button
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
            className="lg:hidden h-11 w-11 rounded-full hover:bg-muted grid place-items-center"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <Link to="/collections" aria-label="All collections" className="hidden sm:grid h-11 w-11 rounded-full hover:bg-muted place-items-center">
            <User className="h-5 w-5" aria-hidden="true" />
          </Link>
          <button aria-label={`Cart, ${count} items`} onClick={openCart} className="h-11 w-11 rounded-full hover:bg-muted grid place-items-center relative">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            {count > 0 && (
              <span className="animate-pop absolute top-1 right-1 h-4 min-w-4 px-1 rounded-full bg-[color:var(--maroon)] text-primary-foreground text-[10px] grid place-items-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile search sheet */}
      {searchOpen && (
        <form role="search" onSubmit={submitSearch} className="lg:hidden border-t border-border px-3 py-2.5">
          <label htmlFor="mobile-search" className="sr-only">Search products</label>
          <input
            id="mobile-search"
            name="q"
            type="search"
            autoFocus
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search rudraksha, karungali, pyrite…"
            className="w-full rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm"
          />
        </form>
      )}

      {/* Desktop nav row */}
      <nav aria-label="Main" className="hidden lg:block border-t border-border">
        <div className="container-x flex items-center justify-center gap-7 py-2.5 text-[13px] tracking-wide">
          <Link to="/collections" className="hover:text-primary transition-colors">All Collections</Link>
          {primaryNav.map((c) => (
            <Link
              key={c.handle}
              to="/collections/$slug"
              params={{ slug: c.handle }}
              className="relative hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[image:var(--gradient-gold)] after:transition-all hover:after:w-full"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {c.title}
            </Link>
          ))}
          <Link to="/products" className="hover:text-primary transition-colors">All Products</Link>
        </div>
      </nav>

      {/* Mobile category chips */}
      <div className="lg:hidden border-t border-border overflow-x-auto no-scrollbar">
        <div className="flex gap-2 px-3 py-2 w-max">
          {productCollections.map((c) => (
            <Link
              key={c.handle}
              to="/collections/$slug"
              params={{ slug: c.handle }}
              className="whitespace-nowrap rounded-full border border-border px-3.5 py-2 text-xs"
              activeProps={{ className: "bg-foreground text-background border-foreground" }}
            >
              {c.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background max-h-[72vh] overflow-y-auto">
          <nav aria-label="Mobile" className="px-4 py-3 grid gap-1 text-sm">
            <Link to="/collections" onClick={() => setMenuOpen(false)} className="py-3 border-b border-border font-medium">All Collections</Link>
            {productCollections.map((c) => (
              <Link
                key={c.handle}
                to="/collections/$slug"
                params={{ slug: c.handle }}
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-border flex justify-between items-center"
              >
                <span>{c.title}</span>
                <span className="text-xs text-muted-foreground">{c.products.length}</span>
              </Link>
            ))}
            <Link to="/products" onClick={() => setMenuOpen(false)} className="py-3 border-b border-border">All Products</Link>
            <a href={storeInfo.whatsappUrl} target="_blank" rel="noreferrer" className="py-3 flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" /> Talk to an astrologer
            </a>
          </nav>
        </div>
      )}

      {/* Cart drawer — isolated, replaced by Shopify's cart drawer on migration */}
      <CartDrawer
        open={isOpen}
        lines={lines}
        onClose={closeCart}
        onUpdateQuantity={updateQuantity}
        onRemoveLine={removeLine}
        onCheckout={closeCart}
      />
    </header>
  );
}