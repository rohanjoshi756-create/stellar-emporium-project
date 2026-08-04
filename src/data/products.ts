/**
 * products.ts — single typed source of truth for all commerce data.
 *
 * Shopify migration note:
 * This module is the only place product data lives. When the theme is ported to
 * Liquid, every field below maps 1:1 to a Shopify object:
 *   Product.id            -> product.id
 *   Product.handle        -> product.handle
 *   Product.title         -> product.title
 *   Product.price         -> product.price (minor units in Shopify)
 *   Product.compareAtPrice-> product.compare_at_price
 *   Product.image/images  -> product.featured_image / product.images
 *   Product.rating        -> product.metafields.reviews.rating
 *   Product.reviewCount   -> product.metafields.reviews.rating_count
 *   Product.inventoryQty  -> variant.inventory_quantity
 *   Product.badge         -> computed in Liquid from compare_at_price / inventory
 *   Product.variants[]    -> product.variants
 * No component should ever hardcode product information inline in JSX.
 */
import { allProducts, collections as rawCollections, type P } from "./catalog";

export const CURRENCY = "INR" as const;

/** Formats a numeric amount using the store currency (₹1,499). */
export const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

/** A purchasable variant. Replaced by Shopify's variant objects post-migration. */
export type ProductVariant = {
  /** Shopify variant id after migration; product id is reused for single-variant items. */
  id: string;
  title: string;
  price: number;
  compareAtPrice: number | null;
  inventoryQty: number;
  available: boolean;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  price: number;
  compareAtPrice: number | null;
  /** Percentage saved vs. compare-at price (0 when there is no discount). */
  discountPercent: number;
  image: string;
  images: string[];
  /** Descriptive alt text used for every rendering of this product's image. */
  imageAlt: string;
  rating: number | null;
  reviewCount: number | null;
  inventoryQty: number;
  available: boolean;
  badge: string | null;
  collectionHandle: string;
  variants: ProductVariant[];
};

export type ProductCollection = {
  handle: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  products: Product[];
};

const toAmount = (value: string) => Number(value.replace(/[^0-9.]/g, "")) || 0;

const toHandle = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Stock is derived from the source catalogue tag until Shopify inventory takes over. */
const inventoryFromTag = (tag?: string) => {
  if (tag === "Sold Out") return 0;
  if (tag === "Only 1 left") return 1;
  return 10;
};

function normalise(raw: P): Product {
  const price = toAmount(raw.price);
  const compareAtPrice = toAmount(raw.old) || null;
  const inventoryQty = inventoryFromTag(raw.tag);
  return {
    id: raw.id,
    handle: toHandle(raw.name),
    title: raw.name,
    price,
    compareAtPrice: compareAtPrice && compareAtPrice > price ? compareAtPrice : null,
    discountPercent: raw.off,
    image: raw.img,
    images: [raw.img],
    imageAlt: `${raw.name} — energised ${raw.cat} from Nakshatra Store`,
    // Ratings are not part of the source catalogue yet; they stay null instead of
    // being faked, and map straight onto Shopify review metafields later.
    rating: null,
    reviewCount: null,
    inventoryQty,
    available: inventoryQty > 0,
    badge: raw.tag ?? null,
    collectionHandle: raw.cat,
    variants: [
      {
        id: `${raw.id}-default`,
        title: "Default",
        price,
        compareAtPrice: compareAtPrice && compareAtPrice > price ? compareAtPrice : null,
        inventoryQty,
        available: inventoryQty > 0,
      },
    ],
  };
}

export const products: Product[] = allProducts.map(normalise);

export const productById = (id: string) => products.find((p) => p.id === id);
export const productByHandle = (handle: string) => products.find((p) => p.handle === handle);

export const productCollections: ProductCollection[] = rawCollections.map((c) => ({
  handle: c.slug,
  title: c.title,
  tagline: c.tagline,
  description: c.description,
  image: c.hero,
  imageAlt: `${c.title} collection — ${c.tagline} | Nakshatra Store`,
  products: c.products.map(normalise),
}));

export const collectionByHandle = (handle: string) =>
  productCollections.find((c) => c.handle === handle);

const inCollection = (handle: string) => collectionByHandle(handle)?.products ?? [];

export const bestSellerProducts = inCollection("best-sellers");
export const rudrakshaProducts = inCollection("rudraksha");
export const malaProducts = inCollection("mala");
export const braceletProducts = inCollection("bracelets");
export const karungaliProducts = inCollection("karungali");
export const crystalTreeProducts = inCollection("crystal-trees");
export const yantraProducts = inCollection("yantras");
export const statueProducts = inCollection("statues");
export const vastuProducts = inCollection("vastu");