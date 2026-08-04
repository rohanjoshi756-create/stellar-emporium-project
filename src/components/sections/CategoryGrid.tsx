/** CategoryGrid — circular "Shop by Category" tiles plus the SEO intro line. */
import { Link } from "@tanstack/react-router";
import { productCollections } from "@/data/products";
import { categoryStripHeading } from "@/data/site-content";

const categories = productCollections.filter((c) => c.handle !== "best-sellers");

export function CategoryGrid({ title = "Shop by Category" }: { title?: string }) {
  return (
    <>
      <div className="mx-auto max-w-[1400px] px-4 pt-8 sm:pt-12 text-center">
        <p className="font-display text-xl sm:text-2xl md:text-3xl">{categoryStripHeading}</p>
      </div>

      <section className="cv-auto mx-auto max-w-[1400px] px-3 sm:px-4 py-8 sm:py-12">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center mb-5 sm:mb-8">{title}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((c) => (
            <Link key={c.handle} to="/collections/$slug" params={{ slug: c.handle }} className="group flex flex-col items-center gap-2 sm:gap-3">
              <div className="aspect-square w-full rounded-full overflow-hidden bg-card border border-border group-hover:shadow-[var(--shadow-warm)] transition">
                <img src={c.image} alt={c.imageAlt} loading="lazy" decoding="async" width={200} height={200} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="text-[11px] sm:text-sm font-medium text-center leading-tight">{c.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}