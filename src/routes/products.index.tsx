/** All products listing — /products. Maps to Shopify `templates/collection.all.liquid`. */
import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/data/products";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/commerce/ProductCard";
import { RecentlyViewed } from "@/components/sections/RecentlyViewed";
import { ProductFilters, useProductFilters } from "@/components/commerce/ProductFilters";

const SITE = "https://stellar-emporium-project.lovable.app";

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
  head: () => ({
    meta: [
      { title: "All Products — Rudraksha, Mala, Karungali & Crystals | Nakshatra Store" },
      { name: "description", content: `Shop all ${products.length}+ Nakshatra Store products — Rudraksha, Malas, Bracelets, Karungali, Crystal Trees, Yantras, Statues and Vastu items. Certified and energised.` },
      { property: "og:title", content: "All Products — Nakshatra Store" },
      { property: "og:description", content: "Certified, energised spiritual products shipped across India." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/products` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/products` }],
  }),
});

function ProductsIndex() {
  const filters = useProductFilters(products);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <><AnnouncementBar /><Header /></>
      <main id="main">
      <section className="container-x py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link> / Products
        </nav>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl">All Products</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">Browse our full catalogue of {products.length} certified, energised spiritual products.</p>
        <ProductFilters state={filters} total={products.length} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {filters.visible.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        {filters.visible.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">No products match these filters — try clearing them.</p>
        )}
      </section>
      <RecentlyViewed />
      </main>
      <Footer />
    </div>
  );
}
