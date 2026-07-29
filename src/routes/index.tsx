import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-zodiac.jpg";
import heroRud from "@/assets/hero-rudraksha.jpg";
import catBracelets from "@/assets/cat-bracelets.jpg";
import catMala from "@/assets/cat-mala.jpg";
import catYantra from "@/assets/cat-yantra.jpg";
import catGems from "@/assets/cat-gems.jpg";
import cPyrite from "@/assets/crystal-pyrite.jpg";
import cAmethyst from "@/assets/crystal-amethyst.jpg";
import cRose from "@/assets/crystal-rose.jpg";
import cCitrine from "@/assets/crystal-citrine.jpg";
import cTiger from "@/assets/crystal-tiger.jpg";
import cJade from "@/assets/crystal-jade.jpg";
import cBlack from "@/assets/crystal-black.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const crystals = [
  { name: "Pyrite", img: cPyrite },
  { name: "Amethyst", img: cAmethyst },
  { name: "Rose Quartz", img: cRose },
  { name: "Citrine", img: cCitrine },
  { name: "Tiger Eye", img: cTiger },
  { name: "Jade", img: cJade },
  { name: "Karungali", img: cBlack },
  { name: "Rudraksha", img: heroRud },
];

const categories = [
  { name: "Bracelets", img: catBracelets },
  { name: "Rudraksha", img: heroRud },
  { name: "Rashi", img: cTiger },
  { name: "Murti", img: catYantra },
  { name: "Karungali", img: cBlack },
  { name: "Frames", img: cPyrite },
  { name: "Combos", img: catBracelets },
  { name: "Pyrite", img: cPyrite },
  { name: "Gemstones", img: catGems },
  { name: "Yantras", img: catYantra },
  { name: "Mala", img: catMala },
  { name: "Necklaces", img: cRose },
];

const bestsellers = [
  { name: "Money Attractor Bracelet", price: "₹999", old: "₹2,300", img: cPyrite },
  { name: "Amethyst Bracelet", price: "₹799", old: "₹1,999", img: cAmethyst },
  { name: "Dhan Yog Anklet", price: "₹899", old: "₹1,400", img: cCitrine },
  { name: "Princess Combo Pyrite", price: "₹1,299", old: "₹2,700", img: catBracelets },
  { name: "5 Mukhi Rudraksha Bracelet", price: "₹499", old: "₹1,999", img: heroRud },
  { name: "Pisces Zodiac Bracelet", price: "₹899", old: "₹2,800", img: cTiger },
  { name: "Dhan Prapti Combo", price: "₹999", old: "₹3,299", img: cPyrite },
  { name: "Taurus Zodiac Bracelet", price: "₹899", old: "₹2,800", img: catBracelets },
  { name: "Raw Pyrite Pendant", price: "₹699", old: "₹1,300", img: cPyrite },
  { name: "Rose Quartz Combo", price: "₹1,199", old: "₹4,000", img: cRose },
  { name: "Karungali Malai 8mm", price: "₹799", old: "₹1,600", img: cBlack },
  { name: "Shree Yantra Frame", price: "₹999", old: "₹2,300", img: catYantra },
];

const purposes = [
  { name: "Money", img: cPyrite },
  { name: "Love", img: cRose },
  { name: "Health", img: cJade },
];

const announcements = [
  "🔥 Monsoon Sale — Extra 26% OFF",
  "💖 Explore Women's Jewellery for Wealth, Love & Luck ✨",
  "🕉️ Step into Harmony — Discover our Vastu Collection",
  "🙏 Exclusive Siddh 1–14 Mukhi Rudraksha Mala",
  "✨ Discover our powerful Karungali collection",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top black announcement bar */}
      <div className="bg-foreground text-background text-xs">
        <div className="mx-auto max-w-[1400px] px-4 h-9 flex items-center justify-between gap-4">
          <button aria-label="prev" className="opacity-70 hover:opacity-100">‹</button>
          <div className="flex-1 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee gap-16 justify-center">
              {[...announcements, ...announcements].map((a, i) => (
                <span key={i} className="opacity-90">{a}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button aria-label="next" className="opacity-70 hover:opacity-100">›</button>
            <span className="opacity-70">◎</span>
            <span className="opacity-70">✉</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-background sticky top-0 z-40 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-3 flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="h-10 w-10 rounded-full grid place-items-center bg-[image:var(--gradient-gold)] text-primary-foreground font-serif text-lg shadow-[var(--shadow-soft)]">ॐ</span>
            <span className="font-serif text-2xl tracking-tight">Nakshatra</span>
          </a>
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 text-[13px]">
            {["Products","Shop By Purpose","Shop By Planet","Calculators","Siddh Collection","Gemstones","Spiritual Jewellery","Rudraksha"].map(l => (
              <a key={l} href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                {l} <span className="text-[10px] opacity-60">▾</span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 shrink-0 text-foreground">
            <button aria-label="search" className="h-9 w-9 rounded-full hover:bg-muted grid place-items-center">🔍</button>
            <button aria-label="account" className="h-9 w-9 rounded-full hover:bg-muted grid place-items-center">👤</button>
            <button aria-label="cart" className="h-9 w-9 rounded-full hover:bg-muted grid place-items-center relative">
              🛍
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center">0</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:block border-t border-border">
          <div className="mx-auto max-w-[1400px] px-4 h-10 flex items-center justify-center gap-8 text-[12px] text-muted-foreground">
            {["Kashi Siddh Rudraksha","Dhan Yog","Pyrite","Rudraksha","Karungali","Gifting","Vastu","Blogs","Contact us"].map(l=>(
              <a key={l} href="#" className="hover:text-primary flex items-center gap-1">{l}<span className="text-[10px] opacity-60">▾</span></a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="relative">
          <img src={heroImg} alt="Zodiac collection" className="absolute inset-0 w-full h-full object-cover opacity-90" width={1920} height={1200} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.95 0.04 80 / 0.85) 0%, oklch(0.95 0.04 80 / 0.2) 55%, transparent 100%)" }} />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-36 min-h-[520px] flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] tracking-tight text-foreground">
                Zodiac<br/>Collection
              </h1>
              <p className="mt-6 font-serif text-2xl md:text-3xl text-foreground/80">
                Choose Your Zodiac,<br/>Wear Your Energy
              </p>
              <a href="#shop" className="mt-10 inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-10 py-4 text-base font-semibold shadow-[var(--shadow-warm)] hover:brightness-110 transition">
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({length: 8}).map((_,i)=>(
              <span key={i} className={`h-1.5 rounded-full ${i===0?'w-6 bg-foreground':'w-1.5 bg-foreground/40'}`}/>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee trust strip */}
      <div className="bg-secondary border-y border-border overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-3 text-sm">
          {Array.from({length:8}).map((_,i)=>(
            <span key={i} className="mx-8 flex items-center gap-2">
              <span className="text-primary">✦</span> 100% Natural & Authentic
              <span className="mx-4 text-muted-foreground">·</span>
              <span className="text-primary">✦</span> Energised by Top Astrologers
            </span>
          ))}
        </div>
      </div>

      {/* Shop by Crystals */}
      <section className="mx-auto max-w-[1400px] px-4 py-16">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-10">Shop by Crystals</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {crystals.map(c=>(
            <a key={c.name} href="#" className="group flex flex-col items-center gap-3">
              <div className="aspect-square w-full rounded-full overflow-hidden bg-card border border-border group-hover:shadow-[var(--shadow-warm)] transition">
                <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="text-xs font-medium text-center">{c.name}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Bestseller / Offers */}
      <section id="shop" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.25em] uppercase text-primary font-medium">Offers for you</div>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Bestsellers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {bestsellers.map(p=>(
              <div key={p.name} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-[var(--shadow-warm)] transition-all">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase bg-[color:var(--maroon)] text-primary-foreground px-2 py-1 rounded-full">Sale</span>
                </div>
                <div className="p-4">
                  <div className="text-sm font-medium line-clamp-2 min-h-[2.5rem]">{p.name}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="font-serif text-lg text-[color:var(--maroon)]">{p.price}</div>
                    <div className="text-xs text-muted-foreground line-through">{p.old}</div>
                  </div>
                  <button className="mt-3 w-full text-xs rounded-full bg-foreground text-background py-2 hover:opacity-90 transition">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1400px] px-4 py-16">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-10">Categories</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map(c=>(
            <a key={c.name} href="#" className="group flex flex-col items-center gap-2">
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-card border border-border group-hover:shadow-[var(--shadow-warm)] transition">
                <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-sm font-medium">{c.name}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Shop by Purpose */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-10">Shop By Purpose</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {purposes.map(p=>(
              <a key={p.name} href="#" className="group relative rounded-3xl overflow-hidden aspect-[4/3] block">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-serif text-3xl text-background">{p.name}</div>
                  <div className="text-xs text-background/80 mt-1">Shop the collection →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Story / trust */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-warm)] aspect-square">
          <img src={heroRud} alt="Rudraksha" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-primary font-medium">Our promise</div>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl leading-tight">
            Sacred objects,<br/>honestly sourced.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Every Rudraksha is X-ray tested, every yantra is prana-pratishtha energised by Vedic priests, and every order ships with its own lab certificate — directly from Nepal & temple artisans of India.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              {t:"Lab-Certified",s:"X-ray verified"},
              {t:"Puja Energised",s:"Vedic priests"},
              {t:"Free Shipping",s:"Across India"},
              {t:"7-Day Returns",s:"Easy & fast"},
            ].map(f=>(
              <div key={f.t} className="rounded-2xl bg-card border border-border p-4">
                <div className="font-medium">{f.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{f.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[color:var(--maroon)] text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-4 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs tracking-[0.25em] uppercase text-[color:var(--gold)]">Reviews</div>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Loved by 12,000+ devotees</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {n:"Ananya S.", t:"The 5 Mukhi Rudraksha feels alive. Packaging with the puja certificate was so thoughtful."},
              {n:"Rahul M.", t:"Tiger Eye bracelet quality is far better than local stores. Delivered in 3 days."},
              {n:"Priya K.", t:"Sri Yantra came already energised. Peaceful vibes at home ever since."},
            ].map(r=>(
              <div key={r.n} className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6">
                <div className="text-[color:var(--gold)] mb-3">★★★★★</div>
                <p className="text-sm leading-relaxed opacity-90">"{r.t}"</p>
                <div className="mt-4 text-sm font-medium">— {r.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-14 grid md:grid-cols-5 gap-8 text-sm">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-full grid place-items-center bg-[image:var(--gradient-gold)] text-primary-foreground font-serif">ॐ</span>
              <span className="font-serif text-xl">Nakshatra</span>
            </div>
            <p className="mt-3 text-muted-foreground max-w-sm">Sacred objects, honestly sourced. Lab-certified, puja-energised, delivered across India.</p>
            <div className="mt-4 flex gap-3">
              {["◎","f","▶","in"].map(i=>(
                <span key={i} className="h-9 w-9 grid place-items-center rounded-full border border-border">{i}</span>
              ))}
            </div>
          </div>
          {[
            {t:"Shop", l:["Rudraksha","Bracelets","Mala","Yantras","Gemstones","Karungali"]},
            {t:"Help", l:["Track order","Shipping","Returns","Contact","FAQ","How to wear"]},
            {t:"Company", l:["About","Blog","Astrologers","Wholesale","Reviews","Foundation"]},
          ].map(c=>(
            <div key={c.t}>
              <div className="font-medium mb-3">{c.t}</div>
              <ul className="space-y-2 text-muted-foreground">
                {c.l.map(i=><li key={i}><a href="#" className="hover:text-primary">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
            <div>© {new Date().getFullYear()} Nakshatra Store. All rights reserved.</div>
            <div>Made with 🪔 in Bharat</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="#" aria-label="WhatsApp" className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white grid place-items-center shadow-[var(--shadow-warm)] hover:scale-105 transition text-2xl">
        ✆
      </a>
    </div>
  );
}
