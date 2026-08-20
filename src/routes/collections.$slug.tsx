import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { productCollections, collectionByHandle, type Product, type ProductCollection } from "@/data/products";
import { seoFor, type CollectionSeo } from "@/data/collection-seo";
import { artFor } from "@/data/category-art";
import { Header } from "@/components/layout/Header";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/commerce/ProductCard";
import { RecentlyViewed } from "@/components/sections/RecentlyViewed";

const SITE = "https://stellar-emporium-project.lovable.app";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }): { collection: ProductCollection; seo: CollectionSeo | null } => {
    const collection = collectionByHandle(params.slug);
    if (!collection) throw notFound();
    return { collection, seo: seoFor(params.slug) ?? null };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Collection not found — Nakshatra Store" }, { name: "robots", content: "noindex" }] };
    }
    const { collection, seo } = loaderData;
    const url = `${SITE}/collections/${params.slug}`;
    const title = seo?.seoTitle ?? `${collection.title} — Nakshatra Store`;
    const description = seo?.seoDescription ?? collection.description;
    const image = collection.image;
    const priceValues = collection.products
      .map((p) => p.price)
      .filter((n) => Number.isFinite(n) && n > 0);

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Nakshatra Store" },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image },
        { name: "robots", content: "index, follow, max-image-preview:large" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": url,
                url,
                name: title,
                description,
                isPartOf: { "@type": "WebSite", name: "Nakshatra Store", url: SITE },
                primaryImageOfPage: image,
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                  { "@type": "ListItem", position: 2, name: "Collections", item: `${SITE}/collections` },
                  { "@type": "ListItem", position: 3, name: collection.title, item: url },
                ],
              },
              {
                "@type": "ItemList",
                name: collection.title,
                numberOfItems: collection.products.length,
                itemListElement: collection.products.slice(0, 30).map((p, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Product",
                    name: p.title,
                    image: p.image,
                    offers: {
                      "@type": "Offer",
                      price: String(p.price),
                      priceCurrency: "INR",
                      availability:
                        !p.available
                          ? "https://schema.org/OutOfStock"
                          : "https://schema.org/InStock",
                    },
                  },
                })),
              },
              ...(priceValues.length
                ? [
                    {
                      "@type": "AggregateOffer",
                      priceCurrency: "INR",
                      offerCount: priceValues.length,
                      lowPrice: Math.min(...priceValues),
                      highPrice: Math.max(...priceValues),
                    },
                  ]
                : []),
              ...(seo
                ? [
                    {
                      "@type": "FAQPage",
                      mainEntity: seo.faqs.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: { "@type": "Answer", text: f.a },
                      })),
                    },
                  ]
                : []),
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: CollectionNotFound,
  component: CollectionPage,
});

function CollectionNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <><AnnouncementBar /><Header /></>
      <div className="mx-auto max-w-[900px] px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Collection not found</h1>
        <p className="mt-3 text-muted-foreground">The collection you are looking for doesn't exist.</p>
        <Link to="/collections" className="mt-8 inline-block rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-8 py-3 text-sm font-semibold">Browse all collections</Link>
      </div>
      <Footer />
    </div>
  );
}

function CollectionPage() {
  const { collection, seo } = Route.useLoaderData();
  const others = productCollections.filter((c) => c.handle !== collection.handle).slice(0, 6);
  const inStock = collection.products.filter((p: Product) => p.available).length;
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "discount">("featured");
  const [inStockOnly, setInStockOnly] = useState(false);

  const visible = useMemo(() => {
    const list = collection.products.filter((p: Product) => (inStockOnly ? p.available : true));
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "discount") sorted.sort((a, b) => b.discountPercent - a.discountPercent);
    return sorted;
  }, [collection.products, sort, inStockOnly]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <><AnnouncementBar /><Header /></>
      <main id="main">
      <section className="relative overflow-hidden">
        <img src={artFor(collection.handle, collection.image)} alt={collection.imageAlt} fetchPriority="high" decoding="async" width={1600} height={640} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(from var(--foreground) l c h / 0.92) 0%, oklch(from var(--foreground) l c h / 0.8) 45%, oklch(from var(--foreground) l c h / 0.45) 100%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-20 min-h-[220px] sm:min-h-[340px] flex flex-col justify-center text-background">
          <nav aria-label="Breadcrumb" className="text-xs text-background/70 mb-4">
            <Link to="/" className="hover:text-[color:var(--gold)]">Home</Link> / <Link to="/collections" className="hover:text-[color:var(--gold)]">Collections</Link> / <span className="text-background">{collection.title}</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl leading-tight tracking-tight max-w-2xl">{seo?.h1 ?? collection.title}</h1>
          <p className="mt-3 sm:mt-4 font-display text-base sm:text-xl md:text-2xl text-[color:var(--gold)]">{collection.tagline}</p>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-background/80 leading-relaxed">{seo?.intro ?? collection.description}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-[11px] sm:text-xs">
            {["Govt. lab certified", "Energised before dispatch", "Free shipping (prepaid)", "7-day returns"].map((t) => (
              <span key={t} className="rounded-full border border-background/25 bg-background/10 backdrop-blur-sm px-3 py-1.5 text-background/90">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-secondary border-y border-border overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-3 text-sm">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 flex items-center gap-2">
              <span className="text-primary">✦</span> 100% Natural &amp; Authentic
              <span className="mx-4 text-muted-foreground">·</span>
              <span className="text-primary">✦</span> Energised by Top Astrologers
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-3 sm:px-4 py-8 sm:py-12">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h2 className="font-display text-xl sm:text-2xl">{collection.products.length} {collection.title} products{inStock !== collection.products.length ? ` · ${inStock} in stock` : ""}</h2>
          <div className="text-xs text-muted-foreground">Free shipping · 7-day returns · Energised before dispatch</div>
        </div>

        {/* Sticky sort / filter toolbar — presentation-only, sorts the loaded list */}
        <div className="sticky top-0 z-20 -mx-3 sm:mx-0 mt-5 border-y border-border bg-background/85 px-3 py-2.5 backdrop-blur sm:rounded-full sm:border sm:px-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {([
              ["featured", "Featured"],
              ["price-asc", "Price: low to high"],
              ["price-desc", "Price: high to low"],
              ["discount", "Biggest discount"],
            ] as const).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setSort(value)}
                aria-pressed={sort === value}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-medium transition ${
                  sort === value
                    ? "bg-foreground text-background"
                    : "border border-border bg-secondary/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
            <span aria-hidden="true" className="mx-1 hidden h-4 w-px shrink-0 bg-border sm:block" />
            <button
              type="button"
              onClick={() => setInStockOnly((v) => !v)}
              aria-pressed={inStockOnly}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-medium transition ${
                inStockOnly ? "bg-[image:var(--gradient-gold)] text-[color:var(--ink)]" : "border border-border bg-secondary/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              In stock only
            </button>
            <span className="ml-auto hidden shrink-0 pl-3 text-[11px] text-muted-foreground sm:block">{visible.length} shown</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {visible.map((p: Product) => <ProductCard key={p.id} product={p} />)}
        </div>
        {visible.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">Nothing in stock here right now — check back soon.</p>
        )}
      </section>

      {seo && (
        <section className="bg-secondary/40 border-y border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-10 sm:py-14 grid gap-4 sm:grid-cols-3">
            {seo.benefits.map((b: { t: string; d: string }) => (
              <div key={b.t} className="rounded-2xl bg-card border border-border p-5">
                <div className="font-display text-lg">{b.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:py-14">
        <h2 className="font-display text-2xl sm:text-3xl mb-3 sm:mb-4">About the {collection.title}</h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">{collection.description}</p>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl mt-4">Every product in this collection is sourced from trusted mines and artisans, verified in government-certified gemology labs, and energised with Vedic mantras by our astrologers before it reaches you. Prepaid orders ship free anywhere in India and every item is covered by our 7-day return policy.</p>
      </section>

      {seo && (
        <section className="bg-secondary/40 border-y border-border">
          <div className="mx-auto max-w-[900px] px-4 py-10 sm:py-14">
            <h2 className="font-display text-2xl sm:text-3xl text-center mb-6">{collection.title} — FAQs</h2>
            <div className="divide-y divide-border rounded-2xl border border-border bg-card">
              {seo.faqs.map((f: { q: string; a: string }) => (
                <details key={f.q} className="group p-4 sm:p-5">
                  <summary className="cursor-pointer list-none font-medium text-sm sm:text-base flex justify-between gap-4">
                    {f.q}
                    <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:py-14">
        <h2 className="font-display text-2xl sm:text-3xl text-center mb-6 sm:mb-8">Explore more collections</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-2.5 sm:gap-3.5">
          {others.map((c) => (
            <Link
              key={c.handle}
              to="/collections/$slug"
              params={{ slug: c.handle }}
              className="group flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 hover:ring-[color:var(--gold)] hover:-translate-y-0.5 transition-all duration-500 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)]"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img src={artFor(c.handle, c.image)} alt={c.imageAlt} loading="lazy" decoding="async" width={180} height={180} className="w-full h-full object-cover brightness-95 contrast-110 saturate-110 group-hover:scale-110 transition-all duration-700" />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 scrim-tile opacity-70 group-hover:opacity-45 transition-opacity duration-500" />
              </div>
              <div className="px-1.5 py-2 text-[11px] sm:text-[12px] font-semibold text-center leading-tight text-foreground group-hover:text-primary transition-colors truncate">{c.title}</div>
            </Link>
          ))}
        </div>
      </section>
      <RecentlyViewed />
      </main>
      <Footer />
    </div>
  );
}
