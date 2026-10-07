import { describe, test } from "node:test";
import assert from "node:assert/strict";
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
      assert.ok(seo);
      if (!seo) throw new Error(`Missing SEO: ${collection.handle}`);
      assert.ok(seo.about.length > 100);
      titles.add(seo.seoTitle);
      descriptions.add(seo.seoDescription);
    }
    assert.equal(titles.size, productCollections.length);
    assert.equal(descriptions.size, productCollections.length);
  });

  test("all listed products point to their own detail URLs with matching counts", () => {
    for (const collection of productCollections) {
      const schema = collectionSchema(collection, site, collection.title, collection.description);
      const list = schema["@graph"][2];
      if (!("numberOfItems" in list) || !("itemListElement" in list)) throw new Error("Missing product list");
      assert.equal(list.numberOfItems, collection.products.length);
      const entries = list.itemListElement;
      assert.equal(entries?.length, collection.products.length);
      collection.products.forEach((product, index) => {
        assert.deepEqual(entries?.[index], {
          "@type": "ListItem", position: index + 1, name: product.title,
          url: `${site}/products/${product.handle}`,
        });
      });
    }
  });
});