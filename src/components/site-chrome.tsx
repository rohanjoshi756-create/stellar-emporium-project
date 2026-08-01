import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/nakshatra-logo.jpg.asset.json";
import { collections } from "@/data/catalog";

const announcements = [
  "Monsoon Sale — Extra 26% OFF 🤩",
  "💖 Explore Women's Jewellery To Attract Wealth, Love & Luck ✨",
  "Step into Harmony — Discover Our Vastu Collection",
  "Checkout our exclusive Siddh 1–14 Mukhi Rudraksha Mala 🙏",
  "Check out our newly launched pyramid range ✨💎",
  "✨ Discover our powerful Karungali collection ✨",
  "Get 10x Powerful Bracelets Energised on Purnima",
];

const primaryNav = [
  { label: "Products", slug: "best-sellers" },
  { label: "Zodiac", slug: "zodiac" },
  { label: "Rudraksha", slug: "rudraksha" },
  { label: "Karungali", slug: "karungali" },
  { label: "Pyrite", slug: "pyrite" },
  { label: "Gemstones", slug: "gemstones" },
  { label: "Women's Jewellery", slug: "womens-jewellery" },
  { label: "Vastu", slug: "vastu" },
];

const secondaryNav = [
  { label: "Best Sellers", slug: "best-sellers" },
  { label: "Dhan Yog", slug: "pyrite" },
  { label: "Dome Trees", slug: "dome-trees" },
  { label: "Gifting", slug: "gifting" },
];

export function SiteHeader() {
  return (
    <>
      <div className="bg-foreground text-background text-xs">
        <div className="mx-auto max-w-[1400px] px-4 h-9 flex items-center gap-4">
          <div className="flex-1 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee gap-16">
              {[...announcements, ...announcements].map((a, i) => <span key={i} className="opacity-90">{a}</span>)}
            </div>
          </div>
          <span className="opacity-70 shrink-0">◎ Instagram</span>
        </div>
      </div>

      <header className="bg-background sticky top-0 z-40 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-3 flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logoAsset.url} alt="Nakshatra Store logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover shadow-[var(--shadow-soft)]" />
            <span className="font-serif text-2xl tracking-tight">Nakshatra</span>
          </Link>
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 text-[13px]">
            {primaryNav.map((l) => (
              <Link key={l.label} to="/collections/$slug" params={{ slug: l.slug }} className="hover:text-primary transition-colors" activeProps={{ className: "text-primary font-medium" }}>{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 shrink-0">
            <button aria-label="search" className="h-9 w-9 rounded-full hover:bg-muted grid place-items-center">🔍</button>
            <button aria-label="account" className="h-9 w-9 rounded-full hover:bg-muted grid place-items-center">👤</button>
            <button aria-label="cart" className="h-9 w-9 rounded-full hover:bg-muted grid place-items-center relative">
              🛍<span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center">0</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:block border-t border-border">
          <div className="mx-auto max-w-[1400px] px-4 h-10 flex items-center justify-center gap-8 text-[12px] text-muted-foreground">
            <Link to="/collections" className="hover:text-primary">All Collections</Link>
            {secondaryNav.map((l) => (
              <Link key={l.label} to="/collections/$slug" params={{ slug: l.slug }} className="hover:text-primary">{l.label}</Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

const footerPurpose = [
  { t: "Karungali Mala For Protection", s: "karungali" },
  { t: "Pyrite Stone for Money", s: "pyrite" },
  { t: "Raw Pyrite Anklet For Wealth", s: "pyrite" },
  { t: "7 Mukhi Rudraksha For Shani Dosh", s: "rudraksha" },
  { t: "5 Mukhi Rudraksha For Peace", s: "rudraksha" },
  { t: "Tiger Eye Bracelet For Confidence", s: "gemstones" },
  { t: "Rose Quartz Bracelet For Love", s: "gemstones" },
  { t: "Zodiac Bracelet For Your Rashi", s: "zodiac" },
  { t: "Vastu Products For Home Harmony", s: "vastu" },
  { t: "Gifts For Loved Ones", s: "gifting" },
];

const footerBenefits = [
  { t: "Karungali Mala Benefits", s: "karungali" },
  { t: "Pyrite Stone Benefits", s: "pyrite" },
  { t: "Rudraksha Benefits", s: "rudraksha" },
  { t: "Tiger Eye Benefits", s: "gemstones" },
  { t: "Rose Quartz Benefits", s: "gemstones" },
  { t: "Crystal Dome Tree Benefits", s: "dome-trees" },
  { t: "Women's Jewellery Benefits", s: "womens-jewellery" },
];

export function SiteFooter() {
  return (
    <>
      <footer className="bg-card border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-14 grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoAsset.url} alt="Nakshatra Store logo" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full object-cover" />
              <span className="font-serif text-xl">Nakshatra</span>
            </div>
            <p className="mt-3 text-muted-foreground text-[13px] leading-relaxed">Nakshatra Store is India's most trusted destination for original spiritual and healing products — Karungali Mala, Pyrite, Rudraksha, Zodiac bracelets, Yantras and Vastu products.</p>
            <p className="mt-3 text-muted-foreground text-[13px] leading-relaxed">Trusted by 5 lakh+ customers. Government-certified. 7-day return policy. Support Mon–Sat, 10AM–7PM.</p>
            <div className="mt-4 flex gap-3">
              {["◎","f","▶","in"].map(i=>(<span key={i} className="h-9 w-9 grid place-items-center rounded-full border border-border">{i}</span>))}
            </div>
          </div>
          <div>
            <div className="font-medium mb-3">Shop By Purpose</div>
            <ul className="space-y-2 text-muted-foreground text-[13px]">
              {footerPurpose.map((i)=>(
                <li key={i.t}><Link to="/collections/$slug" params={{ slug: i.s }} className="hover:text-primary">{i.t}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Collections</div>
            <ul className="space-y-2 text-muted-foreground text-[13px]">
              {collections.map((c)=>(
                <li key={c.slug}><Link to="/collections/$slug" params={{ slug: c.slug }} className="hover:text-primary">{c.title}</Link></li>
              ))}
              <li><Link to="/collections" className="hover:text-primary">View all collections</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Benefits</div>
            <ul className="space-y-2 text-muted-foreground text-[13px]">
              {footerBenefits.map((i)=>(
                <li key={i.t}><Link to="/collections/$slug" params={{ slug: i.s }} className="hover:text-primary">{i.t}</Link></li>
              ))}
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

      <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white grid place-items-center shadow-[var(--shadow-warm)] hover:scale-105 transition text-2xl">✆</a>
    </>
  );
}

export function ProductCard({ p }: { p: import("@/data/catalog").P }) {
  return (
    <div className="group min-w-[220px] w-[220px] md:min-w-0 md:w-auto bg-card rounded-2xl border border-border overflow-hidden hover:shadow-[var(--shadow-warm)] transition">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {p.tag && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-[color:var(--maroon)] text-primary-foreground px-2 py-1 rounded-full">{p.tag}</span>
        )}
      </div>
      <div className="p-3">
        <div className="text-[13px] font-medium line-clamp-2 min-h-[2.5rem]">{p.name}</div>
        <div className="mt-1 text-[11px] text-muted-foreground">★★★★★ <span className="opacity-80">{p.reviews} reviews</span></div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-serif text-lg text-[color:var(--maroon)]">{p.price}</span>
          <span className="text-xs text-muted-foreground line-through">{p.old}</span>
        </div>
        <button className="mt-3 w-full text-xs rounded-full border border-foreground py-2 hover:bg-foreground hover:text-background transition">Add to cart</button>
      </div>
    </div>
  );
}
