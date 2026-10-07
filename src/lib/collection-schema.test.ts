import { describe, expect, test } from "bun:test";
import { collectionSchema } from "./collection-schema";
import { productCollections } from "../data/products";
import { seoFor } from "../data/collection-seo";

const site = "https://stellar-emporium-project.lovable.app";

describe("collection SEO data", () => {
  test("every collection has its own complete SEO guidance", () => {
    const titles = new Set<string>();
    const descriptions = new Set<string>();
    for (const collection of productCollections) {
      const seo = seoFor(collection.handle);
      expect(seo).toBeDefined();
      if (!seo) throw new Error(`Missing SEO: ${collection.handle}`);
      expect(seo.about.length).toBeGreaterThan(100);
      titles.add(seo.seoTitle);
      descriptions.add(seo.seoDescription);
    }
    expect(titles.size).toBe(productCollections.length);
    expect(descriptions.size).toBe(productCollections.length);
  });

  test("all listed products point to their own detail URLs with matching counts", () => {
    for (const collection of productCollections) {
      const schema = collectionSchema(collection, site, collection.title, collection.description);
      const list = schema["@graph"][2];
      if (!("numberOfItems" in list) || !("itemListElement" in list)) throw new Error("Missing product list");
      expect(list.numberOfItems).toBe(collection.products.length);
      const entries = list.itemListElement;
      expect(entries?.length).toBe(collection.products.length);
      collection.products.forEach((product, index) => {
        expect(entries?.[index]).toEqual({
          "@type": "ListItem", position: index + 1, name: product.title,
          url: `${site}/products/${product.handle}`,
        });
      });
    }
  });
});