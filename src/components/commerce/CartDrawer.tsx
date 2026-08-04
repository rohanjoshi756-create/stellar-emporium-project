/**
 * CartDrawer — ISOLATED COMMERCE COMPONENT.
 *
 * Holds no business logic: line items come in as props and every mutation is a
 * callback. Shopify migration: feed it `cart.items` and wire the callbacks to
 * `/cart/change.js`. Markup and classes stay as-is.
 */
import { formatPrice } from "@/data/products";
import { CheckoutButton } from "./CheckoutButton";

export type CartLine = {
  variantId: string;
  title: string;
  image: string;
  imageAlt: string;
  price: number;
  quantity: number;
};

export type CartDrawerProps = {
  open: boolean;
  lines: CartLine[];
  onClose: () => void;
  onUpdateQuantity?: (payload: { variantId: string; quantity: number }) => void;
  onRemoveLine?: (payload: { variantId: string }) => void;
  onCheckout?: () => void;
};

export function CartDrawer({ open, lines, onClose, onUpdateQuantity, onRemoveLine, onCheckout }: CartDrawerProps) {
  if (!open) return null;

  const subtotal = lines.reduce((sum, l) => sum + l.price * l.quantity, 0);
  const itemCount = lines.reduce((sum, l) => sum + l.quantity, 0);

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div className="absolute inset-0 bg-foreground/50" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-[380px] bg-background border-l border-border flex flex-col">
        <header className="flex items-center justify-between px-4 py-4 border-b border-border">
          <h2 className="font-display text-xl">Your cart ({itemCount})</h2>
          <button type="button" aria-label="Close cart" onClick={onClose} className="h-9 w-9 rounded-full hover:bg-muted">✕</button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {lines.length === 0 && <p className="text-sm text-muted-foreground">Your cart is empty.</p>}
          {lines.map((line) => (
            <div key={line.variantId} className="flex gap-3">
              <img src={line.image} alt={line.imageAlt} width={64} height={64} loading="lazy" className="h-16 w-16 rounded-xl object-cover border border-border" />
              <div className="flex-1 text-sm">
                <div className="font-medium line-clamp-2">{line.title}</div>
                <div className="text-[color:var(--maroon)] font-display">{formatPrice(line.price)}</div>
                <div className="mt-1 flex items-center gap-2 text-xs">
                  <button type="button" aria-label="Decrease quantity" onClick={() => onUpdateQuantity?.({ variantId: line.variantId, quantity: line.quantity - 1 })} className="h-6 w-6 rounded-full border border-border">−</button>
                  <span>{line.quantity}</span>
                  <button type="button" aria-label="Increase quantity" onClick={() => onUpdateQuantity?.({ variantId: line.variantId, quantity: line.quantity + 1 })} className="h-6 w-6 rounded-full border border-border">+</button>
                  <button type="button" onClick={() => onRemoveLine?.({ variantId: line.variantId })} className="ml-auto text-muted-foreground hover:text-primary">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="border-t border-border px-4 py-4">
          <CheckoutButton price={subtotal} itemCount={itemCount} onCheckout={onCheckout} />
        </footer>
      </aside>
    </div>
  );
}