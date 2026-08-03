import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/nakshatra-logo.jpg.asset.json";
import { collections, type P } from "@/data/catalog";

const announcements = [
  "Free shipping on prepaid orders 🚚",
  "Energised by Vedic priests before dispatch 🙏",
  "Original Nepali Rudraksha with silver capping ✨",
  "Govt. certified Karungali collection 🖤",
  "Crystal trees for wealth & positivity 🌳",
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-foreground text-background text-[11px] sm:text-xs">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-4 h-8 sm:h-9 flex items-center gap-4">
          <div className="flex-1 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee gap-10 sm:gap-16">
              {[...announcements, ...announcements].map((a, i) => (
                <span key={i} className="opacity-90">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

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
            <img src={logoAsset.url} alt="Nakshatra Store logo" width={40} height={40} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover shadow-[var(--shadow-soft)]" />
            <span className="font-display text-xl sm:text-2xl tracking-tight">Nakshatra</span>
          </Link>

          <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 text-[13px]">
            {collections.map((c) => (
              <Link key={c.slug} to="/collections/$slug" params={{ slug: c.slug }} className="hover:text-primary transition-colors" activeProps={{ className: "text-primary font-medium" }}>
                {c.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-3 ml-auto lg:ml-0 shrink-0">
            <button aria-label="Search" className="h-10 w-10 rounded-full hover:bg-muted grid place-items-center">🔍</button>
            <button aria-label="Account" className="hidden sm:grid h-10 w-10 rounded-full hover:bg-muted place-items-center">👤</button>
            <button aria-label="Cart" className="h-10 w-10 rounded-full hover:bg-muted grid place-items-center relative">
              🛍<span className="absolute top-0.5 right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center">0</span>
            </button>
          </div>
        </div>

        {/* Mobile category strip */}
        <div className="lg:hidden border-t border-border overflow-x-auto no-scrollbar">
          <div className="flex gap-2 px-3 py-2 w-max">
            {collections.map((c) => (
              <Link key={c.slug} to="/collections/$slug" params={{ slug: c.slug }} className="whitespace-nowrap rounded-full border border-border px-3 py-1.5 text-xs" activeProps={{ className: "bg-foreground text-background border-foreground" }}>
                {c.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden border-t border-border bg-background max-h-[70vh] overflow-y-auto">
            <nav className="px-4 py-3 grid gap-1 text-sm">
              <Link to="/collections" onClick={() => setOpen(false)} className="py-2.5 border-b border-border font-medium">All Collections</Link>
              {collections.map((c) => (
                <Link key={c.slug} to="/collections/$slug" params={{ slug: c.slug }} onClick={() => setOpen(false)} className="py-2.5 border-b border-border flex justify-between items-center">
                  <span>{c.title}</span>
                  <span className="text-xs text-muted-foreground">{c.products.length}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="bg-card border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:py-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoAsset.url} alt="Nakshatra Store logo" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full object-cover" />
              <span className="font-display text-xl">Nakshatra</span>
            </div>
            <p className="mt-3 text-muted-foreground text-[13px] leading-relaxed">Nakshatra Store brings you authentic spiritual products — Rudraksha, Malas, Karungali, Crystal Trees, Yantras, Statues and Vastu items.</p>
            <p className="mt-3 text-muted-foreground text-[13px] leading-relaxed">Energised before dispatch. 7-day return policy. Support Mon–Sat, 10AM–7PM.</p>
            <div className="mt-4 flex gap-3">
              {["◎", "f", "▶", "in"].map((i) => (
                <span key={i} className="h-9 w-9 grid place-items-center rounded-full border border-border">{i}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="font-medium mb-3">Collections</div>
            <ul className="space-y-2 text-muted-foreground text-[13px]">
              {collections.map((c) => (
                <li key={c.slug}>
                  <Link to="/collections/$slug" params={{ slug: c.slug }} className="hover:text-primary">{c.title}</Link>
                </li>
              ))}
              <li><Link to="/collections" className="hover:text-primary">View all collections</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Shop By Purpose</div>
            <ul className="space-y-2 text-muted-foreground text-[13px]">
              <li><Link to="/collections/$slug" params={{ slug: "karungali" }} className="hover:text-primary">Karungali for protection</Link></li>
              <li><Link to="/collections/$slug" params={{ slug: "rudraksha" }} className="hover:text-primary">Rudraksha for peace</Link></li>
              <li><Link to="/collections/$slug" params={{ slug: "crystal-trees" }} className="hover:text-primary">Crystal trees for wealth</Link></li>
              <li><Link to="/collections/$slug" params={{ slug: "yantras" }} className="hover:text-primary">Yantras for prosperity</Link></li>
              <li><Link to="/collections/$slug" params={{ slug: "mala" }} className="hover:text-primary">Malas for daily japa</Link></li>
              <li><Link to="/collections/$slug" params={{ slug: "statues" }} className="hover:text-primary">Statues for home temple</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Help</div>
            <ul className="space-y-2 text-muted-foreground text-[13px]">
              <li>Shipping &amp; Delivery</li>
              <li>Returns &amp; Refunds</li>
              <li>Track your order</li>
              <li>Contact support</li>
              <li>Terms &amp; Privacy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
            <div>© {new Date().getFullYear()} Nakshatra Store. All rights reserved.</div>
            <div>Made with 🪔 in Bharat</div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-4 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white grid place-items-center shadow-[var(--shadow-warm)] hover:scale-105 transition text-2xl">✆</a>
    </>
  );
}

export function ProductCard({ p }: { p: P }) {
  return (
    <div className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-[var(--shadow-warm)] transition">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          decoding="async"
          width={400}
          height={400}
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 25vw, 210px"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {p.off > 0 && (
          <span className="absolute top-2 left-2 text-[10px] font-semibold bg-[color:var(--maroon)] text-primary-foreground px-2 py-1 rounded-full">{p.off}% OFF</span>
        )}
        {p.tag && (
          <span className="absolute bottom-2 left-2 text-[10px] bg-background/90 px-2 py-1 rounded-full">{p.tag}</span>
        )}
      </div>
      <div className="p-2.5 sm:p-3 flex flex-col flex-1">
        <h3 className="text-[12px] sm:text-[13px] font-medium line-clamp-2 min-h-[2.25rem]">{p.name}</h3>
        <div className="flex items-baseline gap-2 mt-1.5">
          <span className="font-display text-base sm:text-lg text-[color:var(--maroon)]">{p.price}</span>
          <span className="text-[11px] text-muted-foreground line-through">{p.old}</span>
        </div>
        <button className="mt-2.5 w-full text-xs rounded-full border border-foreground py-2 hover:bg-foreground hover:text-background transition">Add to cart</button>
      </div>
    </div>
  );
}
