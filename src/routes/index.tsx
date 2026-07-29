import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-rudraksha.jpg";
import catBracelets from "@/assets/cat-bracelets.jpg";
import catMala from "@/assets/cat-mala.jpg";
import catYantra from "@/assets/cat-yantra.jpg";
import catGems from "@/assets/cat-gems.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = [
  { name: "Rudraksha", desc: "1 to 21 Mukhi · Nepal origin", img: heroImg },
  { name: "Bracelets", desc: "Zodiac & healing stones", img: catBracelets },
  { name: "Mala", desc: "108 beads · hand knotted", img: catMala },
  { name: "Yantras", desc: "Brass · Vedic energised", img: catYantra },
  { name: "Gemstones", desc: "Lab-certified natural", img: catGems },
];

const bestsellers = [
  { name: "5 Mukhi Rudraksha Pendant", price: "₹1,299", tag: "Bestseller", img: heroImg },
  { name: "Tiger Eye Zodiac Bracelet", price: "₹899", tag: "New", img: catBracelets },
  { name: "Sandalwood 108 Mala", price: "₹1,499", tag: "Puja Energised", img: catMala },
  { name: "Sri Yantra Brass Plate", price: "₹1,199", tag: "Limited", img: catYantra },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement */}
      <div className="bg-[color:var(--maroon)] text-primary-foreground text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-3 text-center">
          <span>🪔 Purnima Sale — Extra 26% OFF · Code <b>NAKSHATRA26</b></span>
          <span className="hidden sm:inline opacity-70">|</span>
          <span className="hidden sm:inline opacity-90">Free shipping across India</span>
        </div>
      </div>

      {/* Nav */}
      <header className="border-b border-border/70 bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-full grid place-items-center bg-[image:var(--gradient-gold)] text-primary-foreground font-serif text-lg shadow-[var(--shadow-soft)]">ॐ</span>
            <span className="font-serif text-xl tracking-tight">
              Nakshatra<span className="text-primary"> Store</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {["Rudraksha","Bracelets","Mala","Yantras","Gemstones","Blog"].map(l => (
              <a key={l} href="#" className="hover:text-primary transition-colors">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground">Track order</a>
            <button className="rounded-full bg-foreground text-background text-sm px-4 py-2 hover:opacity-90 transition">
              Cart · 0
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-foreground/5 border border-border px-3 py-1 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Purnima Special · 26% OFF
            </span>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Sacred Objects,<br/>
              <span className="italic text-[color:var(--maroon)]">Honestly</span> Sourced.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Original Nepali Rudraksha, pure Karungali bracelets, mala & yantras — lab tested, puja energised, delivered across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-[var(--shadow-warm)] hover:brightness-110 transition">
                Shop Rudraksha →
              </a>
              <a href="#" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted transition inline-flex items-center gap-2">
                💬 WhatsApp
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <div className="flex text-[color:var(--gold)]">★★★★★</div>
              <span className="font-medium">4.9</span>
              <span className="text-muted-foreground">· 12,480+ reviews</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-warm)] aspect-[4/5]">
              <img src={heroImg} alt="Rudraksha pendant" className="w-full h-full object-cover" width={1400} height={1400} />
              <div className="absolute top-5 right-5 rounded-2xl bg-foreground text-background px-4 py-3 text-xs">
                <div className="opacity-70">ENERGISED</div>
                <div className="font-serif text-base text-[color:var(--gold)]">Puja Charged ✦</div>
              </div>
              <div className="absolute bottom-5 left-5 rounded-2xl bg-card px-4 py-3 text-xs shadow-[var(--shadow-soft)]">
                <div className="text-muted-foreground">LAB REPORT</div>
                <div className="font-medium">Origin · Nepal ✓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { i:"🏷️", t:"Lab-Certified", s:"X-ray verified" },
            { i:"🪔", t:"Puja Energised", s:"By Vedic priests" },
            { i:"🚚", t:"Free Shipping", s:"Across India" },
            { i:"💬", t:"Free Astro Chat", s:"1-on-1 expert" },
          ].map(f=>(
            <div key={f.t} className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full grid place-items-center bg-[image:var(--gradient-gold)] text-lg">{f.i}</span>
              <div>
                <div className="font-medium text-sm">{f.t}</div>
                <div className="text-xs text-muted-foreground">{f.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="shop" className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Shop by category</div>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Browse our sacred collections</h2>
          </div>
          <a href="#" className="hidden md:inline text-sm underline underline-offset-4 hover:text-primary">View all</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(c => (
            <a key={c.name} href="#" className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-warm)] transition-all">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="font-serif text-lg">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Bestsellers</div>
              <h2 className="mt-2 font-serif text-4xl md:text-5xl">Loved by 12,000+ devotees</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map(p => (
              <div key={p.name} className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-[var(--shadow-warm)] transition-all">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase bg-foreground text-background px-2 py-1 rounded-full">{p.tag}</span>
                </div>
                <div className="p-4">
                  <div className="font-medium text-sm">{p.name}</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="font-serif text-lg text-[color:var(--maroon)]">{p.price}</div>
                    <button className="text-xs rounded-full bg-primary text-primary-foreground px-3 py-1.5 hover:brightness-110 transition">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] aspect-square">
          <img src={catYantra} alt="Sri Yantra" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Our promise</div>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl leading-tight">
            Every bead traced.<br/>Every ritual respected.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We work directly with families in Nepal and temple artisans across India. Each Rudraksha is X-ray tested, each yantra is prana-pratishtha energised, and each order ships with its own lab certificate.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Origin-tagged from Nepal","X-ray & authenticity report","Energised in Vedic puja","7-day easy returns"].map(x=>(
              <li key={x} className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full bg-[image:var(--gradient-gold)] grid place-items-center text-[10px]">✓</span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[color:var(--maroon)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs tracking-[0.2em] uppercase text-[color:var(--gold)]">Testimonials</div>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Blessings from our devotees</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {n:"Ananya S.", t:"The 5 Mukhi Rudraksha feels alive. Packaging with the puja certificate was so thoughtful."},
              {n:"Rahul M.", t:"Ordered a Tiger Eye bracelet — quality is far better than local stores. Delivery in 3 days."},
              {n:"Priya K.", t:"I bought the Sri Yantra for my puja room. It came already energised. Peaceful vibes at home."},
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h2 className="font-serif text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">
          Not sure which stone is for you?
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
          Get a free 1-on-1 consultation with our astrologer and find the sacred object aligned with your Rashi.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <a href="#" className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-[var(--shadow-warm)] hover:brightness-110">Talk to Astrologer</a>
          <a href="#" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted">Browse all products</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full grid place-items-center bg-[image:var(--gradient-gold)] text-primary-foreground font-serif">ॐ</span>
              <span className="font-serif text-lg">Nakshatra Store</span>
            </div>
            <p className="mt-3 text-muted-foreground">Sacred objects, honestly sourced. Since 2018.</p>
          </div>
          {[
            {t:"Shop", l:["Rudraksha","Bracelets","Mala","Yantras","Gemstones"]},
            {t:"Help", l:["Track order","Shipping","Returns","Contact","FAQ"]},
            {t:"Company", l:["About","Blog","Astrologers","Wholesale","Reviews"]},
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
          <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
            <div>© {new Date().getFullYear()} Nakshatra Store. All rights reserved.</div>
            <div>Made with 🪔 in Bharat</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
