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
      <div className="section-head">
        <p className="eyebrow">The full catalogue</p>
        <h2 className="font-display text-[2rem] leading-tight sm:text-[2.75rem]">{title}</h2>
        <p className="mt-3 text-sm text-muted-foreground">Browse our collection of {items.length}+ certified, energised pieces</p>
        <div aria-hidden="true" className="hairline mx-auto mt-5 w-40 sm:w-56" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-6 sm:mt-10">
        {items.slice(0, limit).map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <div className="text-center mt-8 sm:mt-12">
        <Link
          to="/collections"
          className="btn-gold inline-flex items-center gap-2 rounded-full px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--ink)]"
        >
          View more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}