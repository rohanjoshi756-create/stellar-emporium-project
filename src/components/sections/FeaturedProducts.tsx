/**
 * FeaturedProducts — reusable product carousel/grid row driven entirely by data
 * props. Used for every "collection row" on the homepage.
 * Maps to `sections/featured-collection.liquid`.
 */
import { Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/commerce/ProductCard";
import type { Product } from "@/data/products";

export type FeaturedProductsProps = {
  title: string;
  subtitle?: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  products: Product[];
  /** Collection handle used by the "View All" link. */
  collectionHandle: string;
  limit?: number;
  viewAllLabel?: string;
};

export function FeaturedProducts({
  title,
  subtitle,
  eyebrow = "Curated",
  products,
  collectionHandle,
  limit = 12,
  viewAllLabel = "View All",
}: FeaturedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="cv-auto container-x py-10 sm:py-14">
      <div className="section-head mb-7 sm:mb-10">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display text-[2rem] leading-tight sm:text-[2.75rem]">{title}</h2>
        {subtitle && <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
        <div aria-hidden="true" className="hairline mx-auto mt-5 w-40 sm:w-56" />
      </div>
      <div className="-mx-3 px-3 sm:mx-0 sm:px-0 flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 md:grid md:grid-cols-4 lg:grid-cols-6 md:overflow-visible">
        {products.slice(0, limit).map((product) => (
          <div key={product.id} className="snap-start shrink-0 w-[46vw] max-w-[220px] md:w-auto md:max-w-none">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="text-center mt-8 sm:mt-10">
        <Link
          to="/collections/$slug"
          params={{ slug: collectionHandle }}
          className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-9 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition hover:border-foreground hover:bg-foreground hover:text-background"
        >
          {viewAllLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}