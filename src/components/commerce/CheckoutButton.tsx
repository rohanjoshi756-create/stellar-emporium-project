/**
 * CheckoutButton — ISOLATED COMMERCE COMPONENT.
 *
 * Shopify migration: swap `onCheckout` for a redirect to `/checkout`
 * (or `cart.checkoutUrl` from the Storefront API). Presentation is final.
 */
import { formatPrice } from "@/data/products";

export type CheckoutButtonProps = {
  /** Total of all line items, in store currency units. */
  price: number;
  itemCount: number;
  disabled?: boolean;
  className?: string;
  onCheckout?: () => void;
};

export function CheckoutButton({ price, itemCount, disabled, className = "", onCheckout }: CheckoutButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || itemCount === 0}
      onClick={() => onCheckout?.()}
      className={`w-full rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-8 py-3 text-sm font-semibold shadow-[var(--shadow-warm)] hover:brightness-110 transition disabled:opacity-50 ${className}`}
    >
      Checkout · {formatPrice(price)}
    </button>
  );
}