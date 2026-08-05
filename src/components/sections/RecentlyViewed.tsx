/**
 * RecentlyViewed — returns shoppers to products they already showed intent on.
 * Reads handles from localStorage; renders nothing until it has items so the
 * server-rendered HTML stays stable. Maps to `sections/recently-viewed.liquid`.
 */
import { ProductCard } from "@/components/commerce/ProductCard";
import { productByHandle } from "@/data/products";
import { useRecentlyViewed } from "@/lib/recently-viewed";

export function RecentlyViewed({ currentHandle, title = "Recently viewed" }: { currentHandle?: string; title?: string }) {
  const handles = useRecentlyViewed(currentHandle);
  const items = handles.map(productByHandle).filter(Boolean).slice(0, 6);

  if (items.length === 0) return null;

  return (
    <section className="cv-auto container-x py-10 sm:py-14 border-t border-border">
      <h2 className="font-display text-2xl sm:text-3xl text-center rule-gold mb-6 sm:mb-8">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {items.map((p) => p && <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}