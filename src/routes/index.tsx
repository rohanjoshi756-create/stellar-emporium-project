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

type P = { name: string; price: string; old: string; reviews: number; img: string; tag?: string };

const announcements = [
  "Monsoon Sale — Extra 26% OFF 🤩",
  "💖 Explore Women's Jewellery To Attract Wealth, Love & Luck ✨",
  "Step into Harmony — Discover Our Vastu Collection",
  "Checkout our exclusive Siddh 1–14 Mukhi Rudraksha Mala 🙏",
  "Check out our newly launched pyramid range ✨💎",
  "✨ Discover our powerful Karungali collection ✨",
  "Get 10x Powerful Bracelets Energised on Purnima",
];

const crystals = [
  { name: "Pyrite", img: cPyrite },
  { name: "Garnet", img: cRose },
  { name: "Citrine", img: cCitrine },
  { name: "Tiger Eye", img: cTiger },
  { name: "Rose Quartz", img: cRose },
  { name: "Lapis Lazuli", img: cJade },
  { name: "Amethyst", img: cAmethyst },
  { name: "Selenite", img: catGems },
];

const bestSellers: P[] = [
  { name: "Metal Dhan Yog Bracelet for Women", price: "₹899", old: "₹1,400", reviews: 1654, img: catBracelets },
  { name: "Dhan Yog Bracelet (Lab Certified)", price: "₹699", old: "₹1,999", reviews: 1623, img: cPyrite },
  { name: "Gemini (मिथुन राशि) Zodiac Green Aventurine & Milky Quartz Bracelet", price: "₹899", old: "₹2,800", reviews: 1980, img: cJade },
  { name: "Metal Dhan Yog Bracelet - Silver", price: "₹999", old: "₹1,700", reviews: 741, img: catBracelets },
  { name: "7 Horses on Raw Pyrite Frame", price: "₹999", old: "₹2,900", reviews: 809, img: catYantra },
  { name: "Raw Pyrite Anklet", price: "₹899", old: "₹1,400", reviews: 1531, img: cPyrite },
];

const purposes = [
  { name: "Wealth", img: cPyrite },
  { name: "Love", img: cRose },
  { name: "Protection", img: cBlack },
  { name: "Shop by Rashi", img: cTiger },
  { name: "Courage", img: cCitrine },
  { name: "Peace", img: cAmethyst },
  { name: "Luck", img: cJade },
  { name: "Gifting", img: catBracelets },
];

const planets = [
  { name: "Sun (Surya)", img: cCitrine },
  { name: "Moon (Chandra)", img: catGems },
  { name: "Mangal/Manglik", img: cRose },
  { name: "Mercury (Budh)", img: cJade },
  { name: "Jupiter (Guru)", img: cCitrine },
  { name: "Venus (Shukra)", img: cRose },
  { name: "Shani", img: cBlack },
  { name: "Rahu", img: cTiger },
  { name: "Ketu", img: cAmethyst },
];

const zodiacNew: P[] = [
  { name: "Libra Zodiac Metal Bracelet", price: "₹999", old: "₹1,700", reviews: 103, img: catBracelets },
  { name: "Taurus Zodiac Metal Bracelet", price: "₹999", old: "₹1,700", reviews: 151, img: catBracelets },
  { name: "Aries (मेष राशि) Zodiac Red Jasper & Tiger Eye Bracelet", price: "₹899", old: "₹2,800", reviews: 210, img: cTiger, tag: "Selling Fast" },
  { name: "Pisces (मीन राशि) Zodiac Citrine & Tiger Eye Bracelet", price: "₹899", old: "₹2,800", reviews: 188, img: cCitrine },
  { name: "Taurus (वृषभ राशि) Zodiac Sunstone & Carnelian Bracelet", price: "₹899", old: "₹2,800", reviews: 174, img: cCitrine },
  { name: "Cancer (कर्क राशि) Zodiac Moonstone Bracelet", price: "₹899", old: "₹2,800", reviews: 141, img: catGems },
];

const rudraksha: P[] = [
  { name: "7 Mukhi Rudraksha Bracelet", price: "₹799", old: "₹2,499", reviews: 629, img: heroRud },
  { name: "Shiv Rudraksha Mala with Om Shiva Trishul Pendant", price: "₹999", old: "₹1,700", reviews: 147, img: catMala },
  { name: "Nepal Origin 7 Mukhi Rudraksha - 17mm to 22mm", price: "₹799", old: "₹1,700", reviews: 332, img: heroRud },
  { name: "Divya Shankh Rudraksha Mala", price: "₹999", old: "₹1,700", reviews: 139, img: catMala },
  { name: "Surya Shakti Rudraksha Mala", price: "₹999", old: "₹1,700", reviews: 144, img: catMala },
  { name: "5 Mukhi Rudraksha Bracelet", price: "₹499", old: "₹1,999", reviews: 512, img: heroRud },
];

const womens: P[] = [
  { name: "Metal Dhan Yog Bracelet for Women", price: "₹899", old: "₹1,400", reviews: 1654, img: catBracelets },
  { name: "Pyrite Sun Ring", price: "₹699", old: "₹1,300", reviews: 1214, img: cPyrite },
  { name: "Dhan Yog Necklace", price: "₹999", old: "₹1,700", reviews: 1001, img: catGems },
  { name: "Pyrite Tortoise Pendant", price: "₹799", old: "₹1,400", reviews: 100, img: cPyrite },
  { name: "Love & Money Metal Bracelet for Women", price: "₹999", old: "₹1,700", reviews: 1261, img: cRose },
  { name: "Raw Pyrite Anklet", price: "₹899", old: "₹1,400", reviews: 1531, img: cPyrite },
];

const karungali: P[] = [
  { name: "Divya Raksha Rudraksha & Karungali Mala with Gold Capping", price: "₹799", old: "₹1,300", reviews: 113, img: cBlack },
  { name: "Karungali Malai 8mm – 108+1 Authentic Ebony Wood Beads (Govt. Certified)", price: "₹799", old: "₹1,600", reviews: 176, img: cBlack },
  { name: "Karungali Murugan Raksha Mala", price: "₹999", old: "₹1,700", reviews: 188, img: catMala },
  { name: "Karungali Malai with Copper Wire – 8mm (54+1 Beads)", price: "₹999", old: "₹2,000", reviews: 112, img: cBlack },
  { name: "Silver Capped Karungali Malai – with Free Karungali Bracelet", price: "₹899", old: "₹2,800", reviews: 117, img: cBlack },
  { name: "Metal Karungali Bracelet - Silver", price: "₹899", old: "₹1,700", reviews: 205, img: catBracelets },
];

const domeTrees: P[] = [
  { name: "Pyrite Dome Tree", price: "₹999", old: "₹2,499", reviews: 103, img: cPyrite },
  { name: "7 Chakra Dome Tree", price: "₹999", old: "₹2,499", reviews: 1044, img: catGems },
  { name: "Evil Eye Dome Tree", price: "₹999", old: "₹2,499", reviews: 1017, img: cJade },
  { name: "Citrine Dome Tree", price: "₹999", old: "₹2,499", reviews: 1180, img: cCitrine },
  { name: "Love Attraction Dome Tree", price: "₹999", old: "₹2,499", reviews: 1119, img: cRose },
  { name: "Amethyst Dome Tree", price: "₹999", old: "₹2,499", reviews: 1214, img: cAmethyst },
];

const ourProducts = [
  { name: "Metal Dhan Yog Bracelet for Women", price: 899, old: 1400, img: catBracelets },
  { name: "Rinmukteshwar Siddh Pyrite Owl", price: 1399, old: 1700, img: cPyrite },
  { name: "Rinmukteshwar Siddh Lakshmi Yantra Pyramid", price: 999, old: 2999, img: catYantra },
  { name: "Rinmukteshwar Siddh Conical Dhan Yog Pyramid With Selenite Base", price: 1099, old: 1700, img: catGems },
  { name: "Rinmukteshwar Siddh Vastu Dhan Yog Tortoise (Big size)", price: 2599, old: 3400, img: cPyrite },
  { name: "Rinmukteshwar Siddh 7 Mukhi Rudraksha Bracelet", price: 899, old: 2499, img: heroRud },
  { name: "Rinmukteshwar Siddh Metal Dhan Yog Bracelet - Black", price: 999, old: 1700, img: cBlack },
  { name: "Rinmukteshwar Siddh 7 Horses on Raw Pyrite Frame", price: 1099, old: 2900, img: catYantra },
  { name: "Vastu Pyrite Tortoise Combo – Small Kachhua with Big Kachhua", price: 2899, old: 4999, img: cPyrite },
  { name: "Black Obsidian Pyramid with Free Raw Square Selenite Plate", price: 999, old: 2500, img: cBlack },
  { name: "Rose Quartz Pyramid with Free Raw Square Selenite Plate", price: 999, old: 3099, img: cRose },
  { name: "Citrine Pyramid with Free Raw Square Selenite Plate", price: 999, old: 2500, img: cCitrine },
];

const banners = [
  { title: "Rinmukteshwar Siddhi", sub: "Energised in Kashi by Vedic priests", img: heroRud },
  { title: "Karungali Collection", sub: "Original Govt. certified ebony wood", img: cBlack },
  { title: "Vastu Collection", sub: "Harmony for home & office", img: catYantra },
  { title: "Crystal Dome Trees", sub: "Wealth, luck & positivity", img: cAmethyst },
  { title: "Gifting Collection", sub: "Sacred gifts for every occasion", img: catBracelets },
];

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

const footerPurpose = [
  "Karungali Mala For Protection", "Pyrite Stone for Money", "Raw Pyrite Bracelet For Success",
  "Raw Pyrite Anklet For Wealth", "7 Mukhi Rudraksha For Shani Dosh", "5 Mukhi Rudraksha For Peace",
  "Tiger Eye Bracelet For Confidence", "Rose Quartz Bracelet For Love", "Zodiac Bracelet For Your Rashi",
  "Vastu Products For Home Harmony", "Money Magnet Bracelet For Money", "Rudraksha Bracelet For Men",
];
const footerCollections = [
  "Best Sellers", "Karungali", "Anklet For Women", "Money", "Love", "Zodiac", "Vastu Tortoise",
  "Rudraksha", "Crystal Dome Trees", "Murti", "Pyrite", "Selenite", "Frames", "Gemstones",
];
const footerBenefits = [
  "Karungali Mala Benefits", "Pyrite Stone Benefits", "Dhan Yog Bracelet Benefits",
  "Rudraksha Benefits", "Tiger Eye Benefits", "Rose Quartz Benefits", "Amethyst Benefits",
];

function ProductCard({ p }: { p: P }) {
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
        <button className="mt-3 w-full text-xs rounded-full border border-foreground py-2 hover:bg-foreground hover:text-background transition">Add</button>
      </div>
    </div>
  );
}

function ProductRow({ title, items }: { title: string; items: P[] }) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-12">
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible">
        {items.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="inline-block rounded-full border border-foreground px-8 py-2.5 text-sm hover:bg-foreground hover:text-background transition">View All</a>
      </div>
    </section>
  );
}

function TileGrid({ title, items, cols }: { title: string; items: { name: string; img: string }[]; cols: string }) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-12">
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">{title}</h2>
      <div className={`grid grid-cols-3 ${cols} gap-4`}>
        {items.map((c) => (
          <a key={c.name} href="#" className="group flex flex-col items-center gap-3">
            <div className="aspect-square w-full rounded-full overflow-hidden bg-card border border-border group-hover:shadow-[var(--shadow-warm)] transition">
              <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="text-xs md:text-sm font-medium text-center">{c.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement bar */}
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

      {/* Header */}
      <header className="bg-background sticky top-0 z-40 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-3 flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="h-10 w-10 rounded-full grid place-items-center bg-[image:var(--gradient-gold)] text-primary-foreground font-serif text-lg shadow-[var(--shadow-soft)]">ॐ</span>
            <span className="font-serif text-2xl tracking-tight">Nakshatra</span>
          </a>
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 text-[13px]">
            {["Products","Shop By Purpose","Shop By Planet","Calculators","Siddh Collection","Gemstones","Spiritual Jewellery","Rudraksha"].map(l => (
              <a key={l} href="#" className="hover:text-primary transition-colors flex items-center gap-1">{l}<span className="text-[10px] opacity-60">▾</span></a>
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
            {["Kashi Siddh Rudraksha","Dhan Yog","Pyrite","Rudraksha","Karungali","Gifting","Vastu","Blogs","Contact us"].map(l=>(
              <a key={l} href="#" className="hover:text-primary flex items-center gap-1">{l}<span className="text-[10px] opacity-60">▾</span></a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Zodiac collection" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1200} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.95 0.04 80 / 0.88) 0%, oklch(0.95 0.04 80 / 0.25) 55%, transparent 100%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:py-36 min-h-[520px] flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">Zodiac<br/>Collection</h1>
            <p className="mt-6 font-serif text-2xl md:text-3xl text-foreground/80">Choose Your Zodiac,<br/>Wear Your Energy</p>
            <a href="#bestsellers" className="mt-10 inline-flex rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-10 py-4 text-base font-semibold shadow-[var(--shadow-warm)] hover:brightness-110 transition">SHOP NOW</a>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({length:8}).map((_,i)=>(<span key={i} className={`h-1.5 rounded-full ${i===0?'w-6 bg-foreground':'w-1.5 bg-foreground/40'}`}/>))}
        </div>
      </section>

      {/* Banner strip */}
      <section className="mx-auto max-w-[1400px] px-4 py-10">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {banners.map(b=>(
            <a key={b.title} href="#" className="group relative min-w-[320px] h-[180px] rounded-2xl overflow-hidden">
              <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-center">
                <div className="font-serif text-2xl text-background">{b.title}</div>
                <div className="text-xs text-background/80 mt-1 max-w-[60%]">{b.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Trust marquee */}
      <div className="bg-secondary border-y border-border overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-3 text-sm">
          {Array.from({length:8}).map((_,i)=>(
            <span key={i} className="mx-8 flex items-center gap-2">
              <span className="text-primary">✦</span> 100% Natural &amp; Authentic
              <span className="mx-4 text-muted-foreground">·</span>
              <span className="text-primary">✦</span> Energised by Top Astrologers
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pt-12 text-center">
        <p className="font-serif text-2xl md:text-3xl">Shop Karungali, Rudraksha, Pyrite, Zodiac &amp; Vastu Products</p>
      </div>

      <TileGrid title="Shop by Crystals" items={crystals} cols="md:grid-cols-8" />

      <div id="bestsellers" className="bg-secondary/40 border-y border-border">
        <ProductRow title="Best Sellers" items={bestSellers} />
      </div>

      <TileGrid title="Shop by Purpose" items={purposes} cols="md:grid-cols-8" />

      <div className="bg-secondary/40 border-y border-border">
        <TileGrid title="Shop by Planet" items={planets} cols="md:grid-cols-9" />
      </div>

      <ProductRow title="Zodiac New Launches" items={zodiacNew} />
      <div className="bg-secondary/40 border-y border-border">
        <ProductRow title="Rudraksha" items={rudraksha} />
      </div>
      <ProductRow title="Women's Jewellery" items={womens} />
      <div className="bg-secondary/40 border-y border-border">
        <ProductRow title="Sacred Karungali Collection" items={karungali} />
      </div>
      <ProductRow title="Vastu Crystal Dome Trees For Wealth & Luck" items={domeTrees} />

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
      <section className="mx-auto max-w-[1400px] px-4 py-16">
        <h2 className="font-serif text-3xl md:text-4xl text-center">Our Products</h2>
        <p className="text-center text-muted-foreground text-sm mt-2">Browse our collection of products</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
          {ourProducts.map(p=>{
            const off = Math.round((1 - p.price / p.old) * 100);
            return (
              <div key={p.name} className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-[var(--shadow-warm)] transition">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <h3 className="text-[13px] font-medium line-clamp-2 min-h-[2.5rem]">{p.name}</h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="font-serif text-lg text-[color:var(--maroon)]">₹{p.price.toLocaleString("en-IN")}</span>
                    <span className="text-xs text-muted-foreground line-through">₹{p.old.toLocaleString("en-IN")}</span>
                    <span className="text-[11px] text-primary font-medium">{off}% OFF</span>
                  </div>
                  <button className="mt-3 w-full text-xs rounded-full bg-foreground text-background py-2 hover:opacity-90 transition">Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="inline-block rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-10 py-3 text-sm font-semibold">View More</a>
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
          <a href="#" className="mt-8 inline-block rounded-full bg-background text-foreground px-8 py-3 text-sm font-semibold">Read More</a>
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

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-14 grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-full grid place-items-center bg-[image:var(--gradient-gold)] text-primary-foreground font-serif">ॐ</span>
              <span className="font-serif text-xl">Nakshatra</span>
            </div>
            <p className="mt-3 text-muted-foreground text-[13px] leading-relaxed">Nakshatra Store is India's most trusted destination for original spiritual and healing products — Karungali Mala, Pyrite, Rudraksha, Zodiac bracelets, Yantras and Vastu products.</p>
            <p className="mt-3 text-muted-foreground text-[13px] leading-relaxed">Trusted by 5 lakh+ customers. Government-certified. 7-day return policy. Support Mon–Sat, 10AM–7PM.</p>
            <div className="mt-4 flex gap-3">
              {["◎","f","▶","in"].map(i=>(<span key={i} className="h-9 w-9 grid place-items-center rounded-full border border-border">{i}</span>))}
            </div>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <div><a href="#" className="hover:text-primary">How to wear?</a></div>
              <div><a href="#" className="hover:text-primary">Contact Support</a></div>
              <div><a href="#" className="hover:text-primary">Track your order</a></div>
            </div>
          </div>
          {[
            { t: "Shop By Purpose", l: footerPurpose },
            { t: "Collections", l: footerCollections },
            { t: "Benefits", l: footerBenefits },
          ].map(c=>(
            <div key={c.t}>
              <div className="font-medium mb-3">{c.t}</div>
              <ul className="space-y-2 text-muted-foreground text-[13px]">
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

      <a href="#" aria-label="WhatsApp" className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white grid place-items-center shadow-[var(--shadow-warm)] hover:scale-105 transition text-2xl">✆</a>
    </div>
  );
}
