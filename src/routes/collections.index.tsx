import { createFileRoute, Link } from "@tanstack/react-router";
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
      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:py-14">
        <nav className="text-xs text-muted-foreground mb-4"><Link to="/" className="hover:text-primary">Home</Link> / Collections</nav>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl">All Collections</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">Every Nakshatra collection — lab certified, energised by top astrologers and shipped across India.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {collections.map((c) => (
            <Link key={c.handle} to="/collections/$slug" params={{ slug: c.handle }} className="group relative h-[170px] sm:h-[220px] rounded-2xl overflow-hidden border border-border">
              <img src={artFor(c.handle, c.image)} alt={c.imageAlt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/92 via-foreground/45 to-foreground/10" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-background">
                <div className="font-display text-2xl">{c.title}</div>
                <div className="text-xs opacity-85 mt-1">{c.tagline}</div>
                <div className="text-[11px] opacity-70 mt-2">{c.products.length} products</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
