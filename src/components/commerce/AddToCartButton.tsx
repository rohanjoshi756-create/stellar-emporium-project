/**
 * AddToCartButton — ISOLATED COMMERCE COMPONENT.
 *
 * Shopify migration: replace the `onAddToCart` handler with a POST to
 * `/cart/add.js` (or the Storefront API `cartLinesAdd` mutation). The props
 * below are exactly the values Shopify needs; markup stays untouched.
 */
export type AddToCartButtonProps = {
  variantId: string;
  quantity: number;
  price: number;
  available?: boolean;
  label?: string;
  className?: string;
  onAddToCart?: (payload: { variantId: string; quantity: number; price: number }) => void;
};

export function AddToCartButton({
  variantId,
  quantity,
  price,
  available = true,
  label = "Add to cart",
  className = "",
  onAddToCart,
}: AddToCartButtonProps) {
  return (
    <button
      type="button"
      data-variant-id={variantId}
      data-quantity={quantity}
      disabled={!available}
      aria-label={`${label} — ${variantId}`}
      onClick={() => onAddToCart?.({ variantId, quantity, price })}
      className={`w-full text-xs rounded-full border border-foreground py-2 hover:bg-foreground hover:text-background transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {available ? label : "Sold out"}
    </button>
  );
}