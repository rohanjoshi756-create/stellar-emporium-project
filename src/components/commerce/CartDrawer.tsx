/**
 * CartDrawer — ISOLATED COMMERCE COMPONENT.
 *
 * Holds no business logic: line items come in as props and every mutation is a
 * callback. Shopify migration: feed it `cart.items` and wire the callbacks to
 * `/cart/change.js`. Markup and classes stay as-is.
 */
import { formatPrice } from "@/data/products";
import { CheckoutButton } from "./CheckoutButton";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/cart";
import { X, Minus, Plus, ShieldCheck, Truck, RotateCcw } from "lucide-react";

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
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-[2px]" onClick={onClose} />
      <aside className="animate-pop absolute right-0 top-0 h-full w-full max-w-[400px] bg-background border-l border-border flex flex-col shadow-[var(--shadow-warm)]">
        <header className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="font-display text-xl">Your cart ({itemCount})</h2>
          <button type="button" aria-label="Close cart" onClick={onClose} className="h-10 w-10 grid place-items-center rounded-full hover:bg-muted">
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </header>

        {/* Free-shipping progress — raises average order value. */}
        <div className="px-5 py-3 border-b border-border bg-secondary/50">
          <p className="text-xs text-muted-foreground">
            {remaining > 0 ? (
              <>Add <strong className="text-foreground">{formatPrice(remaining)}</strong> more for free shipping</>
            ) : (
              <span className="text-[color:var(--success)] font-medium">🎉 You’ve unlocked free shipping</span>
            )}
          </p>
          <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
            <div className="h-full bg-[image:var(--gradient-gold)] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {lines.length === 0 && (
            <div className="py-14 text-center">
              <p className="font-display text-lg">Your cart is empty</p>
              <p className="mt-2 text-sm text-muted-foreground">Add an energised piece to begin.</p>
            </div>
          )}
          {lines.map((line) => (
            <div key={line.variantId} className="flex gap-3">
              <img src={line.image} alt={line.imageAlt} width={72} height={72} loading="lazy" className="h-18 w-18 shrink-0 rounded-xl object-cover border border-border" />
              <div className="flex-1 text-sm">
                <div className="font-medium line-clamp-2">{line.title}</div>
                <div className="text-[color:var(--maroon)] font-display">{formatPrice(line.price)}</div>
                <div className="mt-1 flex items-center gap-2 text-xs">
                  <button type="button" aria-label={`Decrease quantity of ${line.title}`} onClick={() => onUpdateQuantity?.({ variantId: line.variantId, quantity: line.quantity - 1 })} className="h-7 w-7 grid place-items-center rounded-full border border-border hover:bg-muted">
                    <Minus className="h-3 w-3" aria-hidden="true" />
                  </button>
                  <span aria-live="polite">{line.quantity}</span>
                  <button type="button" aria-label={`Increase quantity of ${line.title}`} onClick={() => onUpdateQuantity?.({ variantId: line.variantId, quantity: line.quantity + 1 })} className="h-7 w-7 grid place-items-center rounded-full border border-border hover:bg-muted">
                    <Plus className="h-3 w-3" aria-hidden="true" />
                  </button>
                  <button type="button" onClick={() => onRemoveLine?.({ variantId: line.variantId })} className="ml-auto text-muted-foreground hover:text-primary">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="border-t border-border px-5 py-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-display text-lg text-[color:var(--maroon)]">{formatPrice(subtotal)}</span>
          </div>
          <CheckoutButton price={subtotal} itemCount={itemCount} href="/cart" onCheckout={onCheckout} />
          <ul className="flex justify-between text-[10px] text-muted-foreground pt-1">
            <li className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />Secure payment</li>
            <li className="flex items-center gap-1"><Truck className="h-3.5 w-3.5" aria-hidden="true" />24h dispatch</li>
            <li className="flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />7-day returns</li>
          </ul>
        </footer>
      </aside>
    </div>
  );
}