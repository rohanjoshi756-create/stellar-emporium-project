# Collection SEO — existing Shopify theme

Project edits do not update an already-uploaded Shopify theme. Work on a duplicated theme first.

## Per-collection search settings

1. Open **Products → Collections** and choose a collection.
2. Add a useful, collection-specific description covering what is actually sold, materials, sizes and selection guidance.
3. Under **Search engine listing → Edit**, enter the page title and meta description.
4. Keep existing URL handles unless a change is necessary. When changing a handle, enable Shopify's URL redirect option and check internal menu links.
5. Repeat for best-sellers, bracelets, mala, crystal-trees, vastu, rudraksha, statues, karungali and yantras.

The project reference copy is in `src/data/collection-seo.ts` (`seoTitle`, `seoDescription`, `about`). These values must be entered in Shopify; the Liquid theme reads Shopify's native collection and page metadata rather than this TypeScript file. Do not describe every Rudraksha as Nepali: the catalogue includes Indonesian products. Mala bead counts and lengths vary by item.

## Small theme changes

- Merge the collection branch of `snippets/meta-tags.liquid`: CollectionPage plus BreadcrumbList data, and the 1200×630 collection image for sharing.
- Merge the collection image alt-text change from `sections/main-collection.liquid`.
- Keep exactly one canonical link in `layout/theme.liquid`, pointing at Shopify's `canonical_url`.
- Do not copy the Lovable website's robots file or domain into Shopify. Shopify supplies its own sitemap at your store's `/sitemap.xml`.
- Preview the collection page and its source on the duplicated theme before publishing it.

## After saving

Submit the Shopify store's sitemap to Google Search Console for that store's actual domain. Inspect representative collection URLs and request indexing if needed. Indexing and rankings are not guaranteed and can take time. No full theme replacement is needed.