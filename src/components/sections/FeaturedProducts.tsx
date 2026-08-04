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
  products: Product[];
  /** Collection handle used by the "View All" link. */
  collectionHandle: string;
  limit?: number;
  viewAllLabel?: string;
};

export function FeaturedProducts({ title, products, collectionHandle, limit = 12, viewAllLabel = "View All" }: FeaturedProductsProps) {
  return (
    <section className="cv-auto mx-auto max-w-[1400px] px-3 sm:px-4 py-8 sm:py-12">
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center mb-5 sm:mb-8">{title}</h2>
      <div className="-mx-3 px-3 sm:mx-0 sm:px-0 flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 md:grid md:grid-cols-4 lg:grid-cols-6 md:overflow-visible">
        {products.slice(0, limit).map((product) => (
          <div key={product.id} className="snap-start shrink-0 w-[46vw] max-w-[210px] md:w-auto md:max-w-none">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="text-center mt-6 sm:mt-8">
        <Link to="/collections/$slug" params={{ slug: collectionHandle }} className="inline-block rounded-full border border-foreground px-8 py-2.5 text-sm hover:bg-foreground hover:text-background transition">
          {viewAllLabel}
        </Link>
      </div>
    </section>
  );
}