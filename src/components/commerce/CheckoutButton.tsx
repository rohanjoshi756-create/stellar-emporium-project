/**
 * CheckoutButton — ISOLATED COMMERCE COMPONENT.
 *
 * Shopify migration: swap `onCheckout` for a redirect to `/checkout`
 * (or `cart.checkoutUrl` from the Storefront API). Presentation is final.
 */
import { Link } from "@tanstack/react-router";
import { formatPrice } from "@/data/products";

export type CheckoutButtonProps = {
  /** Total of all line items, in store currency units. */
  price: number;
  itemCount: number;
  disabled?: boolean;
  className?: string;
  label?: string;
  /** When set, renders as a link (used by the drawer to open the cart page). */
  href?: "/cart";
  onCheckout?: () => void;
};

export function CheckoutButton({
  price,
  itemCount,
  disabled,
  className = "",
  label = "Checkout",
  href,
  onCheckout,
}: CheckoutButtonProps) {
  const classes = `btn-gold w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] disabled:opacity-50 ${className}`;

  if (href && itemCount > 0) {
    return (
      <Link to={href} onClick={onCheckout} className={classes}>
        {label} · {formatPrice(price)}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled || itemCount === 0}
      onClick={() => onCheckout?.()}
      className={classes}
    >
      {label} · {formatPrice(price)}
    </button>
  );
}