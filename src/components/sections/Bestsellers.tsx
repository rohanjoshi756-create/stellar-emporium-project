/** Bestsellers — highlighted best-selling products on a tinted band. */
import { FeaturedProducts } from "./FeaturedProducts";
import { bestSellerProducts } from "@/data/products";

export function Bestsellers({ title = "Best Sellers" }: { title?: string }) {
  return (
    <div id="bestsellers" className="bg-secondary/40 border-y border-border">
      <FeaturedProducts title={title} products={bestSellerProducts} collectionHandle="best-sellers" />
    </div>
  );
}