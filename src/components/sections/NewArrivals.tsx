/**
 * NewArrivals — the "Our Products" catalogue grid (newest catalogue entries
 * first, matching the source store order). Maps to `sections/collection-grid.liquid`.
 */
import { Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/commerce/ProductCard";
import { products, type Product } from "@/data/products";

export function NewArrivals({
  title = "Our Products",
  items = products,
  limit = 18,
}: {
  title?: string;
  items?: Product[];
  limit?: number;
}) {
  return (
    <section className="cv-auto mx-auto max-w-[1400px] px-3 sm:px-4 py-10 sm:py-16">
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center">{title}</h2>
      <p className="text-center text-muted-foreground text-sm mt-2">Browse our collection of {items.length}+ products</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-6 sm:mt-10">
        {items.slice(0, limit).map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <div className="text-center mt-8 sm:mt-10">
        <Link to="/collections" className="inline-block rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-10 py-3 text-sm font-semibold">View More</Link>
      </div>
    </section>
  );
}