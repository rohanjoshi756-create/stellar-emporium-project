/**
 * Header — logo, desktop nav, mobile drawer, mobile category strip and the
 * cart trigger. Cart state is intentionally local + prop-driven so Shopify's
 * native cart can take over (`sections/header.liquid` + `cart-drawer`).
 */
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/nakshatra-logo.jpg.asset.json";
import { productCollections } from "@/data/products";
import { CartDrawer, type CartLine } from "@/components/commerce/CartDrawer";

export function Header({ cartLines = [] as CartLine[] }: { cartLines?: CartLine[] }) {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartCount = cartLines.reduce((sum, l) => sum + l.quantity, 0);

  return (
    <header className="bg-background sticky top-0 z-40 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-3 sm:gap-6">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-10 w-10 -ml-2 grid place-items-center rounded-full hover:bg-muted"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-foreground transition-all ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-foreground transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-foreground transition-all ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>

        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoAsset.url} alt="Nakshatra Store logo — zodiac wheel with Devanagari lettering" width={40} height={40} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover shadow-[var(--shadow-soft)]" />
          <span className="font-display text-xl sm:text-2xl tracking-tight">Nakshatra</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:flex flex-1 items-center justify-center gap-5 text-[13px]">
          {productCollections.map((c) => (
            <Link key={c.handle} to="/collections/$slug" params={{ slug: c.handle }} className="hover:text-primary transition-colors" activeProps={{ className: "text-primary font-medium" }}>
              {c.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-3 ml-auto lg:ml-0 shrink-0">
          <button aria-label="Search" className="h-10 w-10 rounded-full hover:bg-muted grid place-items-center">🔍</button>
          <button aria-label="Account" className="hidden sm:grid h-10 w-10 rounded-full hover:bg-muted place-items-center">👤</button>
          <button aria-label="Cart" onClick={() => setCartOpen(true)} className="h-10 w-10 rounded-full hover:bg-muted grid place-items-center relative">
            🛍<span className="absolute top-0.5 right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center">{cartCount}</span>
          </button>
        </div>
      </div>

      {/* Mobile category strip */}
      <div className="lg:hidden border-t border-border overflow-x-auto no-scrollbar">
        <div className="flex gap-2 px-3 py-2 w-max">
          {productCollections.map((c) => (
            <Link key={c.handle} to="/collections/$slug" params={{ slug: c.handle }} className="whitespace-nowrap rounded-full border border-border px-3 py-1.5 text-xs" activeProps={{ className: "bg-foreground text-background border-foreground" }}>
              {c.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background max-h-[70vh] overflow-y-auto">
          <nav aria-label="Mobile" className="px-4 py-3 grid gap-1 text-sm">
            <Link to="/collections" onClick={() => setOpen(false)} className="py-2.5 border-b border-border font-medium">All Collections</Link>
            {productCollections.map((c) => (
              <Link key={c.handle} to="/collections/$slug" params={{ slug: c.handle }} onClick={() => setOpen(false)} className="py-2.5 border-b border-border flex justify-between items-center">
                <span>{c.title}</span>
                <span className="text-xs text-muted-foreground">{c.products.length}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Cart drawer — isolated, replaced by Shopify's cart drawer on migration */}
      <CartDrawer open={cartOpen} lines={cartLines} onClose={() => setCartOpen(false)} />
    </header>
  );
}