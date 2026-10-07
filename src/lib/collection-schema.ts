import type { ProductCollection } from "../data/products";

/** Collection lists link to product pages; product offer markup belongs on those pages. */
export function collectionSchema(collection: ProductCollection, site: string, title: string, description: string) {
  const url = `${site}/collections/${collection.handle}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": url,
        url,
        name: title,
        description,
        isPartOf: { "@type": "WebSite", name: "Nakshatra Store", url: site },
        mainEntity: { "@id": `${url}#products` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
          { "@type": "ListItem", position: 2, name: "Collections", item: `${site}/collections` },
          { "@type": "ListItem", position: 3, name: collection.title, item: url },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#products`,
        name: collection.title,
        numberOfItems: collection.products.length,
        itemListElement: collection.products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.title,
          url: `${site}/products/${product.handle}`,
        })),
      },
    ],
  };
}