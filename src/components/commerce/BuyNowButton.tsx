/**
 * BuyNowButton — ISOLATED COMMERCE COMPONENT.
 * Shopify migration: render as <button name="checkout"> inside the product
 * form, or redirect to `/cart/{variantId}:{quantity}`.
 * Default behaviour (pre-migration): add the line and jump to the cart page.
 */
import { useNavigate } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";

export type BuyNowButtonProps = {
  variantId: string;
  quantity: number;
  price: number;
  available?: boolean;
  label?: string;
  className?: string;
  title?: string;
  image?: string;
  imageAlt?: string;
  onBuyNow?: (payload: { variantId: string; quantity: number; price: number }) => void;
};

export function BuyNowButton({
  variantId,
  quantity,
  price,
  available = true,
  label = "Buy it now",
  className = "",
  title = "",
  image = "",
  imageAlt = "",
  onBuyNow,
}: BuyNowButtonProps) {
  const { addByPayload, closeCart } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    const payload = { variantId, quantity, price };
    if (onBuyNow) {
      onBuyNow(payload);
      return;
    }
    addByPayload(payload, { title, image, imageAlt: imageAlt || title });
    closeCart();
    void navigate({ to: "/cart" });
  };

  return (
    <button
      type="button"
      data-variant-id={variantId}
      data-quantity={quantity}
      disabled={!available}
      onClick={handleClick}
      className={`btn-gold w-full rounded-full py-3.5 text-sm font-semibold uppercase tracking-[0.08em] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {available ? label : "Notify me"}
    </button>
  );
}