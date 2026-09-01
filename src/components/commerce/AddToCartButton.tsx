/**
 * AddToCartButton — ISOLATED COMMERCE COMPONENT.
 *
 * Shopify migration: replace the `onAddToCart` handler with a POST to
 * `/cart/add.js` (or the Storefront API `cartLinesAdd` mutation). The props
 * below are exactly the values Shopify needs; markup stays untouched.
 * When no handler is passed it falls back to the local cart store so the
 * storefront is fully shoppable before migration.
 */
import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";

export type AddToCartButtonProps = {
  variantId: string;
  quantity: number;
  price: number;
  available?: boolean;
  label?: string;
  className?: string;
  /** Product context used by the default (pre-Shopify) cart handler. */
  title?: string;
  image?: string;
  imageAlt?: string;
  onAddToCart?: (payload: { variantId: string; quantity: number; price: number }) => void;
};

export function AddToCartButton({
  variantId,
  quantity,
  price,
  available = true,
  label = "Add to cart",
  className = "",
  title = "",
  image = "",
  imageAlt = "",
  onAddToCart,
}: AddToCartButtonProps) {
  const { addByPayload } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    const payload = { variantId, quantity, price };
    if (onAddToCart) onAddToCart(payload);
    else addByPayload(payload, { title, image, imageAlt: imageAlt || title });
    setAdded(true);
    toast.success("Added to cart", { description: title || undefined });
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <button
      type="button"
      data-variant-id={variantId}
      data-quantity={quantity}
      disabled={!available}
      aria-label={title ? `${label}: ${title}` : label}
      onClick={handleClick}
      className={`w-full text-xs font-semibold tracking-wide uppercase rounded-full border border-foreground py-2.5 hover:bg-foreground hover:text-background active:scale-[0.98] transition disabled:opacity-45 disabled:cursor-not-allowed ${className}`}
    >
      {!available ? "Sold out" : added ? "Added ✓" : label}
    </button>
  );
}