/**
 * Product detail page (PDP) — /products/:handle
 * Renders entirely from the typed Product model in src/data/products.ts.
 * Maps to Shopify `templates/product.liquid` on migration.
 */
import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { productByHandle, products, collectionByHandle, formatPrice, type Product } from "@/data/products";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AddToCartButton } from "@/components/commerce/AddToCartButton";
import { BuyNowButton } from "@/components/commerce/BuyNowButton";
import { QuantitySelector } from "@/components/commerce/QuantitySelector";
import { StickyBuyBar } from "@/components/commerce/StickyBuyBar";
import { TrustBadgeGrid, OffersBox, DeliveryPromise } from "@/components/commerce/ProductAssurance";
import { ProductGallery } from "@/components/product/ProductGallery";
import { UrgencyStrip } from "@/components/product/UrgencyStrip";
import { DeliveryEstimate } from "@/components/product/DeliveryEstimate";
import { FrequentlyBoughtTogether } from "@/components/product/FrequentlyBoughtTogether";
import { ProductStory } from "@/components/product/ProductStory";
import { Star } from "lucide-react";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ReviewsSummary } from "@/components/sections/ReviewsSummary";
import { RecentlyViewed } from "@/components/sections/RecentlyViewed";
import { FAQ } from "@/components/sections/FAQ";
import { homeFaqs } from "@/data/site-content";

const SITE = "https://stellar-emporium-project.lovable.app";

export const Route = createFileRoute("/products/$handle")({
  loader: ({ params }): { product: Product } => {
    const product = productByHandle(params.handle);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — Nakshatra Store" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    const url = `${SITE}/products/${params.handle}`;
    const title = `${p.title} — Buy Online | Nakshatra Store`;
    const description = `Buy ${p.title} at ${formatPrice(p.price)}. Govt. lab certified and energised by top astrologers before dispatch. Free shipping on prepaid orders, 7-day returns.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Nakshatra Store" },
        { property: "og:image", content: p.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.image },
        { name: "robots", content: "index, follow, max-image-preview:large" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "@id": url,
                name: p.title,
                image: p.images,
                description,
                sku: p.id,
                brand: { "@type": "Brand", name: "Nakshatra Store" },
                offers: {
                  "@type": "Offer",
                  url,
                  price: String(p.price),
                  priceCurrency: "INR",
                  availability: p.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                  { "@type": "ListItem", position: 2, name: "Products", item: `${SITE}/products` },
                  { "@type": "ListItem", position: 3, name: p.title, item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  errorComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <><AnnouncementBar /><Header /></>
      <div className="mx-auto max-w-[900px] px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Product not found</h1>
        <p className="mt-3 text-muted-foreground">This product may have sold out or moved.</p>
        <Link to="/products" className="mt-8 inline-block rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-8 py-3 text-sm font-semibold">Browse all products</Link>
      </div>
      <Footer />
    </div>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const variant = product.variants[0];
  const [quantity, setQuantity] = useState(1);
  const collection = collectionByHandle(product.collectionHandle);
  const related = products
    .filter((p) => p.collectionHandle === product.collectionHandle && p.id !== product.id)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 lg:pb-0">
      <><AnnouncementBar /><Header /></>
      <main id="main">
      <section className="mx-auto max-w-[1200px] px-4 py-6 sm:py-10">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-5">
          <Link to="/" className="hover:text-primary">Home</Link> /{" "}
          {collection ? (
            <>
              <Link to="/collections/$slug" params={{ slug: collection.handle }} className="hover:text-primary">{collection.title}</Link> /{" "}
            </>
          ) : null}
          <span className="text-foreground">{product.title}</span>
        </nav>

        <div className="grid gap-6 sm:gap-12 md:grid-cols-2">
          <ProductGallery
            title={product.title}
            images={product.images}
            imageAlt={product.imageAlt}
            badge={product.badge}
            discountPercent={product.discountPercent}
          />

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">
              {collection?.title ?? "Nakshatra"}
            </p>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight">{product.title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">Certified, energised and dispatched within 24 hours</p>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="flex gap-0.5 text-[color:var(--gold)]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </span>
              <span className="font-semibold">4.9</span>
              <a href="#reviews" className="text-muted-foreground underline underline-offset-2">(verified reviews)</a>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-secondary/40 p-4 sm:p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-[2rem] leading-none text-[color:var(--maroon)]">{formatPrice(product.price)}</span>
                {product.compareAtPrice && (
                  <span className="text-sm text-muted-foreground line-through">{formatPrice(product.compareAtPrice)}</span>
                )}
                {product.compareAtPrice && (
                  <span className="rounded-full bg-[color:var(--maroon)] px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                    Save {formatPrice(product.compareAtPrice - product.price)} ({product.discountPercent}%)
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Inclusive of all taxes · Free shipping on prepaid orders · Extra 5% off on UPI
              </p>
            </div>

            {product.available ? (
              <UrgencyStrip productId={product.id} inventoryQty={product.inventoryQty} />
            ) : (
              <p className="mt-4 text-sm font-medium text-muted-foreground">Currently sold out</p>
            )}

            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Hand-selected and lab-verified for authenticity",
                "Energised with Vedic mantras before dispatch",
                "Original certificate inside every parcel",
                "Lifetime authenticity guarantee",
              ].map((line) => (
                <li key={line} className="flex gap-2 leading-snug">
                  <span aria-hidden="true" className="mt-0.5 text-[color:var(--gold-deep)]">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            {/* Cart logic is isolated — swapped for Shopify's cart on migration. */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <QuantitySelector value={quantity} max={Math.max(1, Math.min(10, product.inventoryQty))} onChange={setQuantity} />
              <div className="flex-1 min-w-[180px]">
                <AddToCartButton
                  className="!py-3.5 !text-sm"
                  variantId={variant.id}
                  quantity={quantity}
                  price={variant.price}
                  available={variant.available}
                  label={`Add to cart · ${formatPrice(variant.price * quantity)}`}
                  title={product.title}
                  image={product.image}
                  imageAlt={product.imageAlt}
                />
              </div>
            </div>
            <div className="mt-3 max-w-md">
              <BuyNowButton
                variantId={variant.id}
                quantity={quantity}
                price={variant.price}
                available={variant.available}
                label="⚡ Buy now — priority dispatch"
                title={product.title}
                image={product.image}
                imageAlt={product.imageAlt}
              />
              <p className="mt-2 text-center text-[11px] text-muted-foreground">
                🔒 100% secure · Pay on delivery · No hidden charges
              </p>
            </div>

            <ul className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px]">
              {[["🛡️", "Money-back"], ["🔒", "Secure checkout"], ["📦", "Discreet packaging"]].map(([icon, label]) => (
                <li key={label} className="rounded-xl border border-border bg-secondary/50 px-2 py-3">
                  <span className="block text-base" aria-hidden="true">{icon}</span>
                  <span className="mt-1 block text-muted-foreground">{label}</span>
                </li>
              ))}
            </ul>

            <DeliveryEstimate />
            <OffersBox />
            <DeliveryPromise />
            <TrustBadgeGrid />

            <div className="mt-7 rounded-2xl border border-border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground">
              <h2 className="font-display text-lg text-foreground mb-2">Product details</h2>
              <p>
                {product.title} is part of our {collection?.title ?? "Nakshatra"} range. Each piece is sourced from
                trusted artisans and mines, verified in a government-certified gemology lab, and energised by our
                astrologers with Vedic mantras before it reaches you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FrequentlyBoughtTogether main={product} addons={related.slice(0, 2)} />
      <ProductStory product={product} collectionTitle={collection?.title ?? "Nakshatra"} />

      {related.length > 0 && (
        <section className="container-x py-10 sm:py-14 border-t border-border">
          <h2 className="font-display text-2xl sm:text-3xl text-center rule-gold mb-6 sm:mb-8">You may also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* Social proof + objection handling — the highest-impact PDP blocks. */}
      <div id="reviews"><ReviewsSummary /></div>
      <RecentlyViewed currentHandle={product.handle} />
      <FAQ title="Frequently asked questions" items={homeFaqs.slice(0, 5)} />
      </main>

      {/* Persistent mobile purchase bar */}
      <StickyBuyBar
        title={product.title}
        variantId={variant.id}
        quantity={quantity}
        price={variant.price}
        compareAtPrice={product.compareAtPrice}
        available={variant.available}
        image={product.image}
        imageAlt={product.imageAlt}
      />

      <Footer />
    </div>
  );
}
