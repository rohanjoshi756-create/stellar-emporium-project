/**
 * Cart page — /cart. Full-page cart summary and checkout hand-off.
 * Maps to Shopify `templates/cart.liquid`.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react";
import { toast } from "sonner";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckoutButton } from "@/components/commerce/CheckoutButton";
import { RecentlyViewed } from "@/components/sections/RecentlyViewed";
import { formatPrice, bestSellerProducts } from "@/data/products";
import { ProductCard } from "@/components/commerce/ProductCard";
import { FREE_SHIPPING_THRESHOLD, useCart } from "@/lib/cart";

const SITE = "https://stellar-emporium-project.lovable.app";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({
    meta: [
      { title: "Your Cart — Nakshatra Store" },
      { name: "description", content: "Review your energised Rudraksha, Karungali and crystal picks, then check out securely with free prepaid shipping and 7-day returns." },
      { property: "og:title", content: "Your Cart — Nakshatra Store" },
      { property: "og:description", content: "Secure checkout, free prepaid shipping and 7-day returns on every Nakshatra Store order." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/cart` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/cart` }],
  }),
});

function CartPage() {
  const { lines, subtotal, count, updateQuantity, removeLine } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Header />

      <main id="main">
        <section className="container-x py-8 sm:py-12">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> / <span className="text-foreground">Cart</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl">Your cart</h1>

          {count === 0 ? (
            <div className="mt-10 rounded-3xl border border-border bg-card p-10 text-center">
              <p className="font-display text-2xl">Your cart is empty</p>
              <p className="mt-2 text-sm text-muted-foreground">Explore our best sellers — every piece is certified and energised.</p>
              <Link to="/collections/$slug" params={{ slug: "best-sellers" }} className="btn-gold mt-7 inline-block rounded-full px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.1em]">
                Shop best sellers
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px] items-start">
              <ul className="space-y-4">
                {lines.map((line) => (
                  <li key={line.variantId} className="card-lux rounded-2xl p-4 flex gap-4">
                    <img src={line.image} alt={line.imageAlt} width={96} height={96} loading="lazy" className="h-24 w-24 shrink-0 rounded-xl object-cover border border-border" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm line-clamp-2">{line.title}</p>
                      <p className="mt-1 font-display text-lg text-[color:var(--maroon)]">{formatPrice(line.price)}</p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="inline-flex items-center rounded-full border border-border">
                          <button type="button" aria-label={`Decrease quantity of ${line.title}`} onClick={() => updateQuantity({ variantId: line.variantId, quantity: line.quantity - 1 })} className="h-10 w-10 grid place-items-center rounded-l-full hover:bg-muted">
                            <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                          <span className="w-9 text-center text-sm" aria-live="polite">{line.quantity}</span>
                          <button type="button" aria-label={`Increase quantity of ${line.title}`} onClick={() => updateQuantity({ variantId: line.variantId, quantity: line.quantity + 1 })} className="h-10 w-10 grid place-items-center rounded-r-full hover:bg-muted">
                            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        </div>
                        <button type="button" onClick={() => removeLine({ variantId: line.variantId })} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-3.5 w-3.5" aria-hidden="true" /> Remove
                        </button>
                        <span className="ml-auto text-sm font-medium">{formatPrice(line.price * line.quantity)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="lg:sticky lg:top-28 card-lux rounded-2xl p-5">
                <h2 className="font-display text-xl">Order summary</h2>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal ({count} items)</dt><dd>{formatPrice(subtotal)}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Shipping</dt><dd>{remaining > 0 ? "Calculated at checkout" : "Free"}</dd></div>
                </dl>
                {remaining > 0 && (
                  <p className="mt-3 text-xs text-muted-foreground">Add {formatPrice(remaining)} more to unlock free shipping.</p>
                )}
                <div className="mt-5">
                  <CheckoutButton
                    price={subtotal}
                    itemCount={count}
                    label="Secure checkout"
                    onCheckout={() => toast.info("Checkout opens once the Shopify theme is live", { description: "Your cart is saved on this device." })}
                  />
                </div>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" /> 100% secure payments · UPI, cards, COD
                </p>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" /> Govt. lab certified authenticity</li>
                  <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" aria-hidden="true" /> Dispatch within 24 hours</li>
                  <li className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-primary" aria-hidden="true" /> 7-day easy returns</li>
                </ul>
              </aside>
            </div>
          )}
        </section>

        {/* Cross-sell: recover AOV before checkout */}
        <section className="cv-auto container-x py-10 sm:py-14 border-t border-border">
          <h2 className="font-display text-2xl sm:text-3xl text-center rule-gold mb-7">Customers also buy</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {bestSellerProducts.slice(0, 6).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        <RecentlyViewed />
      </main>

      <Footer />
    </div>
  );
}