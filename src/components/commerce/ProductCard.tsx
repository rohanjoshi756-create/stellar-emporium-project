/**
 * ProductCard — renders one product purely from the typed `Product` model.
 * No product info is hardcoded here. Maps to `snippets/product-card.liquid`.
 */
import { formatPrice, type Product } from "@/data/products";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  const variant = product.variants[0];

  return (
    <article className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-[var(--shadow-warm)] transition">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          decoding="async"
          width={400}
          height={400}
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 25vw, 210px"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.discountPercent > 0 && (
          <span className="absolute top-2 left-2 text-[10px] font-semibold bg-[color:var(--maroon)] text-primary-foreground px-2 py-1 rounded-full">
            {product.discountPercent}% OFF
          </span>
        )}
        {product.badge && (
          <span className="absolute bottom-2 left-2 text-[10px] bg-background/90 px-2 py-1 rounded-full">{product.badge}</span>
        )}
      </div>
      <div className="p-2.5 sm:p-3 flex flex-col flex-1">
        <h3 className="text-[12px] sm:text-[13px] font-medium line-clamp-2 min-h-[2.25rem]">{product.title}</h3>
        <div className="flex items-baseline gap-2 mt-1.5">
          <span className="font-display text-base sm:text-lg text-[color:var(--maroon)]">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-[11px] text-muted-foreground line-through">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>
        {/* Cart logic is isolated here — replaced by Shopify's cart on migration. */}
        <AddToCartButton
          className="mt-2.5"
          variantId={variant.id}
          quantity={1}
          price={variant.price}
          available={variant.available}
        />
      </div>
    </article>
  );
}