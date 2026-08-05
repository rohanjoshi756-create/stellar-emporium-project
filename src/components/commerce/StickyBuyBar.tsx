/**
 * StickyBuyBar — ISOLATED COMMERCE COMPONENT.
 * Mobile-first persistent purchase bar shown on the product page.
 * Shopify migration: mirrors `snippets/sticky-atc.liquid`; the buttons post to
 * the same product form as the main add-to-cart.
 */
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

export type StickyBuyBarProps = {
  title: string;
  variantId: string;
  quantity: number;
  price: number;
  compareAtPrice?: number | null;
  available?: boolean;
  image?: string;
  imageAlt?: string;
  onAddToCart?: (payload: { variantId: string; quantity: number; price: number }) => void;
  onBuyNow?: (payload: { variantId: string; quantity: number; price: number }) => void;
};

export function StickyBuyBar({
  title,
  variantId,
  quantity,
  price,
  compareAtPrice,
  available = true,
  image = "",
  imageAlt = "",
  onAddToCart,
  onBuyNow,
}: StickyBuyBarProps) {
  const { addByPayload, closeCart } = useCart();
  const navigate = useNavigate();
  const meta = { title, image, imageAlt: imageAlt || title };
  const payload = { variantId, quantity, price };

  const handleAdd = () => {
    if (onAddToCart) return onAddToCart(payload);
    addByPayload(payload, meta);
    toast.success("Added to cart", { description: title });
  };

  const handleBuy = () => {
    if (onBuyNow) return onBuyNow(payload);
    addByPayload(payload, meta);
    closeCart();
    void navigate({ to: "/cart" });
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-border bg-background/95 backdrop-blur px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] flex items-center gap-3 shadow-[0_-6px_24px_-14px_rgba(0,0,0,0.4)]">
      <div className="min-w-0 flex-1">
        <p className="text-[11px] text-muted-foreground line-clamp-1">{title}</p>
        <p className="font-display text-lg text-[color:var(--maroon)] leading-tight">
          {formatPrice(price * quantity)}
          {compareAtPrice ? (
            <span className="ml-2 text-[11px] text-muted-foreground line-through font-sans">
              {formatPrice(compareAtPrice * quantity)}
            </span>
          ) : null}
        </p>
      </div>
      <button
        type="button"
        disabled={!available}
        onClick={handleAdd}
        aria-label={`Add ${title} to cart`}
        className="rounded-full border border-foreground px-4 py-3 text-xs font-semibold uppercase tracking-wide disabled:opacity-50"
      >
        Add
      </button>
      <button
        type="button"
        disabled={!available}
        onClick={handleBuy}
        aria-label={`Buy ${title} now`}
        className="btn-gold rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wide disabled:opacity-50"
      >
        {available ? "Buy now" : "Sold out"}
      </button>
    </div>
  );
}