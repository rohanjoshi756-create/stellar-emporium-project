/**
 * Search results — /search?q=…
 * Client-side filtering over the typed product model; renders fully from data
 * so it can be replaced by Shopify's `templates/search.liquid` 1:1.
 */
import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search as SearchIcon } from "lucide-react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/commerce/ProductCard";
import { products, productCollections } from "@/data/products";

const SITE = "https://stellar-emporium-project.lovable.app";

type SearchParams = { q?: string };

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  component: SearchPage,
  head: () => ({
    meta: [
      { title: "Search Rudraksha, Karungali & Crystals — Nakshatra Store" },
      { name: "description", content: "Search the Nakshatra Store catalogue of certified, energised Rudraksha, Karungali, malas, bracelets, yantras and vastu products." },
      { property: "og:title", content: "Search — Nakshatra Store" },
      { property: "og:description", content: "Find certified, energised spiritual products across the full Nakshatra Store catalogue." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/search` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/search` }],
  }),
});

function score(title: string, q: string) {
  const t = title.toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => t.includes(term));
}

function SearchPage() {
  const { q = "" } = Route.useSearch();
  const navigate = useNavigate();
  const [term, setTerm] = useState(q);

  const results = q.trim() ? products.filter((p) => score(p.title, q)) : [];
  const suggestions = productCollections.slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Header />

      <main id="main" className="container-x py-8 sm:py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link> / <span className="text-foreground">Search</span>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl">
          {q ? <>Results for “{q}”</> : "Search the store"}
        </h1>

        <form
          role="search"
          className="mt-5 max-w-xl"
          onSubmit={(e) => {
            e.preventDefault();
            void navigate({ to: "/search", search: { q: term.trim() || undefined } });
          }}
        >
          <label htmlFor="search-page-input" className="sr-only">Search products</label>
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <input
              id="search-page-input"
              name="q"
              type="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Try “5 mukhi rudraksha” or “pyrite bracelet”"
              className="w-full rounded-full border border-border bg-card pl-11 pr-28 py-3.5 text-sm"
            />
            <button type="submit" className="btn-gold absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wide">
              Search
            </button>
          </div>
        </form>

        {q && (
          <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
            {results.length} {results.length === 1 ? "product" : "products"} found
          </p>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-6">
            {results.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="mt-8">
            {q && <p className="text-sm text-muted-foreground">No exact match. Browse a collection instead:</p>}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
              {suggestions.map((c) => (
                <Link
                  key={c.handle}
                  to="/collections/$slug"
                  params={{ slug: c.handle }}
                  className="card-lux rounded-2xl p-4 text-sm font-medium text-center"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}