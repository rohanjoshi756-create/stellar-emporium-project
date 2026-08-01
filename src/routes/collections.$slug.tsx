import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { collections, collectionBySlug } from "@/data/catalog";
import { SiteHeader, SiteFooter, ProductCard } from "@/components/site-chrome";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = collectionBySlug(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Collection not found — Nakshatra Store" }, { name: "robots", content: "noindex" }] };
    }
    const { title, description } = loaderData.collection;
    const full = `${title} — Nakshatra Store`;
    return {
      meta: [
        { title: full },
        { name: "description", content: description },
        { property: "og:title", content: full },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CollectionNotFound,
  component: CollectionPage,
});

function CollectionNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-[900px] px-4 py-24 text-center">
        <h1 className="font-serif text-4xl">Collection not found</h1>
        <p className="mt-3 text-muted-foreground">The collection you are looking for doesn't exist.</p>
        <Link to="/collections" className="mt-8 inline-block rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-8 py-3 text-sm font-semibold">Browse all collections</Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function CollectionPage() {
  const { collection } = Route.useLoaderData();
  const others = collections.filter((c) => c.slug !== collection.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <img src={collection.hero} alt={collection.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.95 0.04 80 / 0.9) 0%, oklch(0.95 0.04 80 / 0.3) 60%, transparent 100%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 min-h-[320px] flex flex-col justify-center">
          <nav className="text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/collections" className="hover:text-primary">Collections</Link> / {collection.title}
          </nav>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-2xl">{collection.title}</h1>
          <p className="mt-4 font-serif text-xl md:text-2xl text-foreground/80">{collection.tagline}</p>
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

      <section className="mx-auto max-w-[1400px] px-4 py-12">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h2 className="font-serif text-2xl">{collection.products.length} products</h2>
          <div className="text-xs text-muted-foreground">Free shipping · 7-day returns · Energised before dispatch</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {collection.products.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-14">
          <h2 className="font-serif text-3xl mb-4">About the {collection.title}</h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">{collection.description}</p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl mt-4">Every product in this collection is sourced from trusted mines and artisans, verified in government-certified gemology labs, and energised with Vedic mantras by our astrologers before it reaches you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-14">
        <h2 className="font-serif text-3xl text-center mb-8">Explore more collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {others.map((c) => (
            <Link key={c.slug} to="/collections/$slug" params={{ slug: c.slug }} className="group flex flex-col items-center gap-3">
              <div className="aspect-square w-full rounded-full overflow-hidden bg-card border border-border group-hover:shadow-[var(--shadow-warm)] transition">
                <img src={c.hero} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="text-xs md:text-sm font-medium text-center">{c.title}</div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
