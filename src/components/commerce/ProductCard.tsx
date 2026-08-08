/**
 * ProductCard — renders one product purely from the typed `Product` model.
 * No product info is hardcoded here. Maps to `snippets/product-card.liquid`.
 */
import { formatPrice, type Product } from "@/data/products";
import { AddToCartButton } from "./AddToCartButton";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

/** Deterministic display rating derived from the product id (no fake reviews shown as counts). */
function trustSignal(product: Product) {
  if (product.rating) return { rating: product.rating, count: product.reviewCount };
  return null;
}

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const variant = product.variants[0];
  const signal = trustSignal(product);
  const lowStock = product.available && product.inventoryQty <= 1;

  return (
    <article className="card-lux group flex flex-col rounded-[1.25rem] overflow-hidden">
      <Link
        to="/products/$handle"
        params={{ handle: product.handle }}
        className="relative aspect-square overflow-hidden bg-muted block"
        aria-label={product.title}
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          width={400}
          height={400}
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 25vw, 220px"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        />
        {/* Subtle luxury vignette on hover */}
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {product.discountPercent > 0 && (
          <span className="absolute top-2.5 left-2.5 text-[10px] font-bold tracking-[0.06em] bg-[color:var(--maroon)] text-primary-foreground px-2.5 py-1 rounded-full shadow-[var(--shadow-soft)]">
            −{product.discountPercent}%
          </span>
        )}
        {!product.available && (
          <span className="absolute inset-0 grid place-items-center bg-background/70 text-xs font-semibold uppercase tracking-widest">
            Sold out
          </span>
        )}
        {product.badge && product.available && (
          <span className="absolute bottom-2.5 left-2.5 text-[10px] font-medium bg-background/92 backdrop-blur px-2.5 py-1 rounded-full border border-border">{product.badge}</span>
        )}
      </Link>

      <div className="p-3.5 sm:p-4 flex flex-col flex-1">
        <h3 className="text-[12.5px] sm:text-[13.5px] font-semibold leading-snug line-clamp-2 min-h-[2.3rem] tracking-[-0.01em]">
          <Link to="/products/$handle" params={{ handle: product.handle }} className="hover:text-primary transition">
            {product.title}
          </Link>
        </h3>

        {signal && (
          <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
            <Star className="h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" aria-hidden="true" />
            <span>{signal.rating}{signal.count ? ` (${signal.count})` : ""}</span>
          </div>
        )}

        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-display text-[1.05rem] sm:text-[1.15rem] text-[color:var(--maroon)]">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-[11px] text-muted-foreground line-through">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>

        {lowStock && <p className="mt-1 text-[11px] text-destructive font-medium">Only 1 left</p>}

        <div className="mt-auto pt-3">
          {/* Cart logic is isolated here — replaced by Shopify's cart on migration. */}
          <AddToCartButton
            variantId={variant.id}
            quantity={1}
            price={variant.price}
            available={variant.available}
            title={product.title}
            image={product.image}
            imageAlt={product.imageAlt}
          />
        </div>
      </div>
    </article>
  );
}