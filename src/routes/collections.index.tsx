import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { artFor } from "@/data/category-art";
import { productCollections as collections } from "@/data/products";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/collections/")({
  component: CollectionsIndex,
  head: () => ({
    meta: [
      { title: "All Collections — Rudraksha, Mala, Karungali & Vastu | Nakshatra Store" },
      { name: "description", content: "Browse all Nakshatra Store collections — Rudraksha, Malas, Bracelets, Karungali, Crystal Trees, Yantras, Statues and Vastu items." },
      { property: "og:title", content: "All Collections — Nakshatra Store" },
      { property: "og:description", content: "Rudraksha, Malas, Bracelets, Karungali, Crystal Trees, Yantras and Vastu items — certified and energised." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://stellar-emporium-project.lovable.app/collections" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: "https://stellar-emporium-project.lovable.app/collections" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://stellar-emporium-project.lovable.app/" },
                { "@type": "ListItem", position: 2, name: "Collections", item: "https://stellar-emporium-project.lovable.app/collections" },
              ],
            },
            {
              "@type": "ItemList",
              name: "Nakshatra Store Collections",
              itemListElement: collections.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: c.title,
                url: `https://stellar-emporium-project.lovable.app/collections/${c.handle}`,
              })),
            },
          ],
        }),
      },
    ],
  }),
});

function CollectionsIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <><AnnouncementBar /><Header /></>
      <main id="main">
      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4"><Link to="/" className="hover:text-primary">Home</Link> / Collections</nav>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">Curated by our astrologers</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em]">All Collections</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">Every Nakshatra collection — lab certified, energised by top astrologers and shipped across India.</p>
        <div className="mt-5 flex flex-wrap gap-2 text-[11px] sm:text-xs">
          {["Govt. lab certified", "Energised before dispatch", "Free prepaid shipping", "7-day returns"].map((t) => (
            <span key={t} className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-muted-foreground">{t}</span>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {collections.map((c) => (
            <Link
              key={c.handle}
              to="/collections/$slug"
              params={{ slug: c.handle }}
              className="group relative h-[190px] sm:h-[240px] rounded-[1.25rem] overflow-hidden border border-border ring-1 ring-transparent hover:ring-[color:var(--gold)]/60 hover:-translate-y-0.5 transition-all duration-300 shadow-[var(--shadow-soft)]"
            >
              <img src={artFor(c.handle, c.image)} alt={c.imageAlt} loading="lazy" decoding="async" width={520} height={360} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div aria-hidden="true" className="absolute inset-0 scrim-tile" />
              <span className="absolute top-3 right-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold text-foreground backdrop-blur">
                {c.products.length} products
              </span>
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-background">
                <div className="font-display text-2xl leading-tight">{c.title}</div>
                <div className="text-xs text-background/85 mt-1 line-clamp-1">{c.tagline}</div>
                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-background/35 bg-background/15 px-3 py-1.5 text-[11px] font-semibold backdrop-blur transition group-hover:bg-background/30">
                  Shop collection <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
