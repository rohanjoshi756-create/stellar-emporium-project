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
  products: Product[];
  /** Collection handle used by the "View All" link. */
  collectionHandle: string;
  limit?: number;
  viewAllLabel?: string;
};

export function FeaturedProducts({
  title,
  subtitle,
  products,
  collectionHandle,
  limit = 12,
  viewAllLabel = "View All",
}: FeaturedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="cv-auto container-x py-10 sm:py-14">
      <div className="text-center mb-7 sm:mb-10">
        <h2 className="font-display text-3xl sm:text-4xl rule-gold">{title}</h2>
        {subtitle && <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
      </div>
      <div className="-mx-3 px-3 sm:mx-0 sm:px-0 flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 md:grid md:grid-cols-4 lg:grid-cols-6 md:overflow-visible">
        {products.slice(0, limit).map((product) => (
          <div key={product.id} className="snap-start shrink-0 w-[46vw] max-w-[220px] md:w-auto md:max-w-none">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="text-center mt-7 sm:mt-9">
        <Link
          to="/collections/$slug"
          params={{ slug: collectionHandle }}
          className="inline-block rounded-full border border-foreground px-9 py-3 text-sm uppercase tracking-[0.1em] hover:bg-foreground hover:text-background transition"
        >
          {viewAllLabel}
        </Link>
      </div>
    </section>
  );
}