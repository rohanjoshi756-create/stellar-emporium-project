/**
 * BuyNowButton — ISOLATED COMMERCE COMPONENT.
 * Shopify migration: render as <button name="checkout"> inside the product
 * form, or redirect to `/cart/{variantId}:{quantity}`.
 */
export type BuyNowButtonProps = {
  variantId: string;
  quantity: number;
  price: number;
  available?: boolean;
  label?: string;
  className?: string;
  onBuyNow?: (payload: { variantId: string; quantity: number; price: number }) => void;
};

export function BuyNowButton({
  variantId,
  quantity,
  price,
  available = true,
  label = "Buy it now",
  className = "",
  onBuyNow,
}: BuyNowButtonProps) {
  return (
    <button
      type="button"
      data-variant-id={variantId}
      data-quantity={quantity}
      disabled={!available}
      onClick={() => onBuyNow?.({ variantId, quantity, price })}
      className={`w-full rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground py-3 text-sm font-semibold shadow-[var(--shadow-warm)] hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {available ? label : "Notify me"}
    </button>
  );
}