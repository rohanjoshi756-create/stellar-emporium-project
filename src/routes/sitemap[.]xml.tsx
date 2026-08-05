import { createFileRoute } from "@tanstack/react-router";
import { collections } from "@/data/catalog";
import { products } from "@/data/products";

const SITE = "https://stellar-emporium-project.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const urls = [
          { loc: `${SITE}/`, priority: "1.0" },
          { loc: `${SITE}/collections`, priority: "0.9" },
          ...collections.map((c) => ({ loc: `${SITE}/collections/${c.slug}`, priority: "0.8" })),
          { loc: `${SITE}/products`, priority: "0.9" },
          ...Array.from(new Set(products.map((p) => p.handle))).map((h) => ({
            loc: `${SITE}/products/${h}`,
            priority: "0.7",
          })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
          .map(
            (u) =>
              `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`,
          )
          .join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
