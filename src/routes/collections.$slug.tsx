import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { productCollections, collectionByHandle, type Product, type ProductCollection } from "@/data/products";
import { seoFor, type CollectionSeo } from "@/data/collection-seo";
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <><AnnouncementBar /><Header /></>
      <main id="main">
      <section className="relative overflow-hidden">
        <img src={collection.image} alt={collection.imageAlt} fetchPriority="high" decoding="async" width={1600} height={640} className="absolute inset-0 w-full h-full object-cover" />
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {collection.products.map((p: Product) => <ProductCard key={p.id} product={p} />)}
        </div>
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
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {others.map((c) => (
            <Link key={c.handle} to="/collections/$slug" params={{ slug: c.handle }} className="group flex flex-col items-center gap-3">
              <div className="aspect-square w-full rounded-full overflow-hidden bg-card border border-border group-hover:shadow-[var(--shadow-warm)] transition">
                <img src={c.image} alt={c.imageAlt} loading="lazy" decoding="async" width={200} height={200} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="text-xs md:text-sm font-medium text-center">{c.title}</div>
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
