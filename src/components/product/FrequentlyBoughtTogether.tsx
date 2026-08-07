/**
 * FrequentlyBoughtTogether — AOV booster bundle for the product page.
 * ISOLATED COMMERCE: adds each bundle line through the same cart payload shape
 * Shopify's `/cart/add.js` expects (variantId, quantity, price).
 */
import { toast } from "sonner";
import { formatPrice, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export function FrequentlyBoughtTogether({ main, addons }: { main: Product; addons: Product[] }) {
  const { addByPayload } = useCart();
  if (addons.length === 0) return null;

  const items = [main, ...addons];
  const total = items.reduce((sum, p) => sum + p.price, 0);
  const bundlePrice = Math.round(total * 0.92);
  const compareTotal = items.reduce((sum, p) => sum + (p.compareAtPrice ?? p.price), 0);

  const addBundle = () => {
    items.forEach((p) =>
      addByPayload(
        { variantId: p.variants[0].id, quantity: 1, price: p.price },
        { title: p.title, image: p.image, imageAlt: p.imageAlt },
      ),
    );
    toast.success("Bundle added to cart", { description: `${items.length} items · ${formatPrice(bundlePrice)}` });
  };

  return (
    <section className="cv-auto container-x py-10 border-t border-border" aria-label="Frequently bought together">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <h2 className="font-display text-2xl sm:text-3xl">🎁 Frequently bought together</h2>
        <span className="rounded-full bg-[color:var(--maroon)] px-3 py-1 text-[11px] font-semibold text-primary-foreground">8% OFF bundle</span>
      </div>

      <div className="card-lux flex flex-col gap-6 rounded-2xl p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap items-center gap-3">
          {items.map((p, i) => (
            <li key={p.id} className="flex items-center gap-3">
              <div className="w-24 text-center">
                <img src={p.image} alt={p.imageAlt} loading="lazy" width={96} height={96} className="h-24 w-24 rounded-xl border border-border object-cover" />
                <p className="mt-1.5 line-clamp-2 text-[11px] text-muted-foreground">{p.title}</p>
              </div>
              {i < items.length - 1 && <span className="text-lg text-muted-foreground" aria-hidden="true">+</span>}
            </li>
          ))}
        </ul>

        <div className="shrink-0 lg:text-right">
          <p className="font-display text-3xl text-[color:var(--maroon)]">{formatPrice(bundlePrice)}</p>
          <p className="text-sm text-muted-foreground line-through">{formatPrice(compareTotal)}</p>
          <p className="mt-1 text-xs font-semibold text-[color:var(--success)]">You save {formatPrice(compareTotal - bundlePrice)}</p>
          <button
            type="button"
            onClick={addBundle}
            className="btn-gold mt-4 w-full rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.08em] lg:w-auto"
          >
            Add all {items.length} to cart
          </button>
        </div>
      </div>
    </section>
  );
}