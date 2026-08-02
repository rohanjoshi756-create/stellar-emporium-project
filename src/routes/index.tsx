import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, ProductCard } from "@/components/site-chrome";
import { allProducts, bestSellers, bracelets, mala, rudraksha, karungali, crystalTrees, statues, yantras, collections, type P } from "@/data/catalog";
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
  head: () => ({
    meta: [
      { title: "Shop Karungali, Rudraksha, Pyrite & Zodiac — Nakshatra Store" },
      {
        name: "description",
        content:
          "Buy original Karungali Mala, Rudraksha, Pyrite, Zodiac bracelets, Yantras & Vastu products. Government certified, energised by top astrologers, 7-day returns.",
      },
      { property: "og:title", content: "Nakshatra Store — Authentic Spiritual Products" },
      {
        property: "og:description",
        content:
          "Karungali, Rudraksha, Pyrite, Zodiac bracelets & Vastu products. Lab certified and energised by top astrologers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const purposes = collections.filter((c) => c.slug !== "best-sellers");

const whyUs = [
  { t: "Charged for you by Top Astros", d: "All our healing stones are sourced and energised by trusted experts and astrologers with pure intentions before delivery." },
  { t: "100% Natural & Authentic", d: "All our stones are 100% authentic and original, sourced from top international mines across the globe." },
  { t: "Certified by Govt Labs", d: "Certified by trusted experts at the gemology lab. Passed multiple screenings for originality and quality." },
  { t: "Hand Crafted by Artisans", d: "Meticulously crafted by experienced artisans with special attention to detail." },
];

const testimonials = [
  { n: "Nikita", t: "This is my second purchase in two months! I bought the rose quartz pendant and got so many compliments. Ordered the bracelet as well now!", img: cRose },
  { n: "Archita", t: "Got the rose quartz set as a gift and started to feel more positive and calm after a few days. Ordered another pair for my mother and sister.", img: cRose },
  { n: "Arshita", t: "I wasn't a big believer lol, but bought the purple amethyst bracelet for sleep. It has worked for me like a charm.", img: cAmethyst },
  { n: "Aarti", t: "Got the evil eye bracelet for my mother, she loves it! Her health has also been better since she started to wear this regularly.", img: cJade },
  { n: "Maanya", t: "Ordered the wrong bracelet accidentally, the team helped replace it within 7 days! Really happy with my tiger eye bracelet.", img: cTiger },
];

const faqs = [
  { q: "Q1: What are the benefits of Karungali Mala?", a: "Karungali Mala protects from negative energy, evil eye, and black magic. It calms the mind, reduces stress, improves focus, and brings spiritual grounding." },
  { q: "Q2: What are the benefits of Pyrite stone?", a: "Pyrite stone attracts money, abundance, and financial growth. It boosts confidence, blocks negative energy, and stimulates career success." },
  { q: "Q3: What are the benefits of a Pyrite Anklet?", a: "The original Pyrite anklet attracts wealth, stabilises finances, and protects the wearer's energy field. Especially beneficial for women seeking financial growth." },
  { q: "Q4: What are the benefits of 5 Mukhi Rudraksha?", a: "5 Mukhi Rudraksha calms the mind, improves memory and concentration, reduces stress, and enhances meditation. Ruled by Lord Shiva, suitable for all ages." },
  { q: "Q5: What are the benefits of 7 Mukhi Rudraksha?", a: "7 Mukhi Rudraksha is blessed by Goddess Lakshmi and attracts wealth, fortune & business success. It helps reduce the effects of Shani dosha." },
  { q: "Q6: What are the benefits of a Tiger Eye bracelet?", a: "Tiger Eye bracelet boosts self-confidence, courage, and mental clarity. It protects the wearer and attracts success in career and business." },
  { q: "Q7: What are the benefits of a Lapis Lazuli bracelet?", a: "Lapis Lazuli enhances wisdom, communication & intellectual ability. It stimulates the Third Eye Chakra and is ideal for students & professionals." },
];


const banners = collections.slice(0, 6).map((c) => ({ title: c.title, sub: c.tagline, img: c.hero, slug: c.slug }));

function ProductRow({ title, items, slug }: { title: string; items: P[]; slug: string }) {
  return (
    <section className="mx-auto max-w-[1400px] px-3 sm:px-4 py-8 sm:py-12">
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center mb-5 sm:mb-8">{title}</h2>
      <div className="-mx-3 px-3 sm:mx-0 sm:px-0 flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 md:grid md:grid-cols-4 lg:grid-cols-6 md:overflow-visible">
        {items.slice(0, 12).map((p) => (
          <div key={p.id} className="snap-start shrink-0 w-[46vw] max-w-[210px] md:w-auto md:max-w-none">
            <ProductCard p={p} />
          </div>
        ))}
      </div>
      <div className="text-center mt-6 sm:mt-8">
        <Link to="/collections/$slug" params={{ slug }} className="inline-block rounded-full border border-foreground px-8 py-2.5 text-sm hover:bg-foreground hover:text-background transition">View All</Link>
      </div>
    </section>
  );
}

function TileGrid({ title, items }: { title: string; items: { title: string; slug: string; hero: string }[] }) {
  return (
    <section className="mx-auto max-w-[1400px] px-3 sm:px-4 py-8 sm:py-12">
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center mb-5 sm:mb-8">{title}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
        {items.map((c) => (
          <Link key={c.slug} to="/collections/$slug" params={{ slug: c.slug }} className="group flex flex-col items-center gap-2 sm:gap-3">
            <div className="aspect-square w-full rounded-full overflow-hidden bg-card border border-border group-hover:shadow-[var(--shadow-warm)] transition">
              <img src={c.hero} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="text-[11px] sm:text-sm font-medium text-center leading-tight">{c.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Nakshatra store spiritual collection" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1200} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background/85 md:bg-gradient-to-r md:from-background/90 md:via-background/40 md:to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 py-14 md:py-36 min-h-[340px] md:min-h-[520px] flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.02] md:leading-[0.95] tracking-tight">Nakshatra<br/>Store</h1>
            <p className="mt-4 md:mt-6 font-serif text-lg sm:text-2xl md:text-3xl text-foreground/80">Rudraksha, Malas, Karungali &amp; Vastu — energised for you</p>
            <Link to="/collections/$slug" params={{ slug: "best-sellers" }} className="mt-7 md:mt-10 inline-flex rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-8 md:px-10 py-3.5 md:py-4 text-sm md:text-base font-semibold shadow-[var(--shadow-warm)] hover:brightness-110 transition">SHOP NOW</Link>
          </div>
        </div>
      </section>

      {/* Banner strip */}
      <section className="mx-auto max-w-[1400px] px-3 sm:px-4 py-6 sm:py-10">
        <div className="-mx-3 px-3 sm:mx-0 sm:px-0 flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {banners.map((b) => (
            <Link key={b.title} to="/collections/$slug" params={{ slug: b.slug }} className="group relative snap-start shrink-0 w-[80vw] max-w-[320px] h-[150px] sm:h-[180px] rounded-2xl overflow-hidden">
              <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 to-transparent" />
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-center">
                <div className="font-serif text-xl sm:text-2xl text-background">{b.title}</div>
                <div className="text-xs text-background/80 mt-1 max-w-[65%]">{b.sub}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust marquee */}
      <div className="bg-secondary border-y border-border overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-2.5 sm:py-3 text-xs sm:text-sm">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-6 sm:mx-8 flex items-center gap-2">
              <span className="text-primary">✦</span> 100% Natural &amp; Authentic
              <span className="mx-4 text-muted-foreground">·</span>
              <span className="text-primary">✦</span> Energised by Top Astrologers
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pt-8 sm:pt-12 text-center">
        <p className="font-serif text-xl sm:text-2xl md:text-3xl">Shop Rudraksha, Malas, Karungali, Crystal Trees &amp; Vastu Products</p>
      </div>

      <TileGrid title="Shop by Category" items={purposes} />

      <div id="bestsellers" className="bg-secondary/40 border-y border-border">
        <ProductRow slug="best-sellers" title="Best Sellers" items={bestSellers} />
      </div>

      <ProductRow slug="rudraksha" title="Rudraksha Collections" items={rudraksha} />
      <div className="bg-secondary/40 border-y border-border">
        <ProductRow slug="mala" title="Malas" items={mala} />
      </div>
      <ProductRow slug="bracelets" title="Bracelets" items={bracelets} />
      <div className="bg-secondary/40 border-y border-border">
        <ProductRow slug="karungali" title="Sacred Karungali Store" items={karungali} />
      </div>
      <ProductRow slug="crystal-trees" title="Crystal Trees For Wealth &amp; Luck" items={crystalTrees} />
      <div className="bg-secondary/40 border-y border-border">
        <ProductRow slug="yantras" title="Yantras" items={yantras} />
      </div>
      <ProductRow slug="statues" title="Statues Collection" items={statues} />

      {/* Why us */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">Why Nakshatra?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {whyUs.map(w=>(
              <div key={w.t} className="rounded-2xl bg-card border border-border p-6">
                <div className="h-10 w-10 rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground grid place-items-center mb-4">✦</div>
                <div className="font-medium">{w.t}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[color:var(--maroon)] text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-4 py-16">
          <div className="text-center">
            <div className="text-xs tracking-[0.25em] uppercase text-[color:var(--gold)]">Testimonials</div>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">What our customers say</h2>
          </div>
          <div className="flex gap-5 overflow-x-auto mt-10 pb-2">
            {testimonials.map(r=>(
              <div key={r.n} className="min-w-[300px] w-[300px] rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6">
                <div className="text-[color:var(--gold)] mb-3">★★★★★</div>
                <p className="text-sm leading-relaxed opacity-90">"{r.t}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={r.img} alt={r.n} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                  <span className="text-sm font-medium">{r.n}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our products */}
      <section className="mx-auto max-w-[1400px] px-3 sm:px-4 py-10 sm:py-16">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center">Our Products</h2>
        <p className="text-center text-muted-foreground text-sm mt-2">Browse our collection of {allProducts.length}+ products</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-6 sm:mt-10">
          {allProducts.slice(0, 18).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link to="/collections" className="inline-block rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-10 py-3 text-sm font-semibold">View More</Link>
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">About Nakshatra Store</h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-5xl">
            <p>Nakshatra Store is India's most trusted destination for authentic spiritual products. We specialise in original Karungali Mala, Pyrite Stone, Rudraksha, Zodiac bracelets, Vastu products and healing crystal jewellery, all government-certified for authenticity.</p>
            <p>Our Karungali Mala collection features original Black Ebony wood beads certified by government labs. Benefits include protection from negative energy, evil eye and black magic, mental peace and spiritual grounding. Available in 6mm and 8mm with silver and gold capping variants.</p>
            <p>Our Pyrite Stone collection includes Raw Pyrite bracelets, anklets, pyramids and frames. Pyrite benefits include attracting money and abundance, boosting confidence and blocking negative energy.</p>
            <p>For Rudraksha, we offer the complete range from 5 Mukhi to 14 Mukhi — Nepal origin and Kashi energised. Explore our Zodiac bracelet collection with rashi-specific gemstone combinations for all 12 signs, and Vastu products that bring harmony, wealth and positive energy to your home and office.</p>
            <p>Every product is energised by top astrologers with Vedic mantras before shipping. Shop with confidence with our 7-day return policy and fast delivery across India.</p>
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="relative overflow-hidden">
        <img src={heroRud} alt="Nakshatra Foundation" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-20 text-center text-background">
          <div className="text-xs tracking-[0.25em] uppercase text-[color:var(--gold)]">Nakshatra Foundation</div>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl">One Purchase. &nbsp;&nbsp;One Promise.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base opacity-90">With every purchase, we contribute towards educating and empowering underprivileged children, helping them grow into confident and capable individuals.</p>
          <Link to="/collections" className="mt-8 inline-block rounded-full bg-background text-foreground px-8 py-3 text-sm font-semibold">Read More</Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-[900px] px-4 py-16">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">FAQs</h2>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map(f=>(
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-sm font-medium">
                {f.q}<span className="text-primary group-open:rotate-45 transition-transform">＋</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
