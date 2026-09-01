/**
 * ProductCard — renders one product purely from the typed `Product` model.
 * No product info is hardcoded here. Maps to `snippets/product-card.liquid`.
 */
import { formatPrice, type Product } from "@/data/products";
import { AddToCartButton } from "./AddToCartButton";
import { Link } from "@tanstack/react-router";
import { Star, ShoppingBag } from "lucide-react";

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
    <article className="group flex flex-col rounded-[1rem] overflow-hidden bg-secondary/50 border border-border/70 p-2 sm:p-2.5 transition hover:shadow-[var(--shadow-lift)]">
      <Link
        to="/products/$handle"
        params={{ handle: product.handle }}
        className="relative aspect-square overflow-hidden bg-card rounded-[0.75rem] block"
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
        {/* Cashback ribbon — mirrors the prepaid-offer flag used across the store */}
        <span className="absolute top-0 left-2.5 z-10 flex w-[54px] flex-col items-center bg-[image:var(--gradient-gold)] text-[color:var(--ink)] px-1 pt-1.5 pb-3 text-center leading-[1.05] [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] shadow-sm">
          <span className="text-[11px] font-extrabold">₹500</span>
          <span className="text-[6.5px] font-bold uppercase tracking-[0.06em]">Cashback</span>
          <span className="mt-0.5 text-[6px] font-semibold leading-[1.15] opacity-80">on all prepaid order</span>
        </span>
        {!product.available && (
          <span className="absolute inset-0 grid place-items-center bg-background/70 text-xs font-semibold uppercase tracking-widest">
            Sold out
          </span>
        )}
        {product.badge && product.available && (
          <span className="absolute bottom-2.5 left-2.5 text-[10px] font-medium bg-background/92 backdrop-blur px-2.5 py-1 rounded-full border border-border">{product.badge}</span>
        )}
      </Link>

      <div className="px-1.5 pt-3 pb-1 flex flex-col flex-1">
        <h3 className="font-display text-[15px] sm:text-[16px] font-medium leading-snug line-clamp-1">
          <Link to="/products/$handle" params={{ handle: product.handle }} className="hover:text-primary transition">
            {product.title}
          </Link>
        </h3>

        {signal && (
          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" />
              ))}
            </span>
            <span className="text-[12px] text-muted-foreground font-medium">
              {signal.count ? `${signal.count} reviews` : signal.rating}
            </span>
          </div>
        )}

        {lowStock && <p className="mt-1 text-[11px] text-destructive font-medium">Only 1 left</p>}

        <div className="mt-auto pt-2.5 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-baseline gap-x-1.5">
            <span className="text-[15px] sm:text-[17px] font-extrabold text-foreground">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-[12px] text-muted-foreground line-through">{formatPrice(product.compareAtPrice)}</span>
            )}
          </div>
          {/* Cart logic is isolated here — replaced by Shopify's cart on migration. */}
          <AddToCartButton
            variantId={variant.id}
            quantity={1}
            price={variant.price}
            available={variant.available}
            label="Add"
            icon={<ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />}
            className="!w-auto shrink-0 !rounded-lg !border-transparent !bg-foreground !text-background !px-5 !py-2.5 !text-[13px] !normal-case !tracking-normal hover:!opacity-90"
            title={product.title}
            image={product.image}
            imageAlt={product.imageAlt}
          />
        </div>
      </div>
    </article>
  );
}