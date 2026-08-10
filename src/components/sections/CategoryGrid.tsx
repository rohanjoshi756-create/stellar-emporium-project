/** CategoryGrid — circular "Shop by Category" tiles plus the SEO intro line. */
import { Link } from "@tanstack/react-router";
import { productCollections } from "@/data/products";
import { categoryStripHeading } from "@/data/site-content";
import { artFor } from "@/data/category-art";

const categories = productCollections.filter((c) => c.handle !== "best-sellers");

export function CategoryGrid({ title = "Shop by Category" }: { title?: string }) {
  return (
    <>
      <div className="container-x pt-12 sm:pt-16 pb-2 text-center">
        <p className="mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground">{categoryStripHeading}</p>
      </div>

      <section className="cv-auto container-x pt-8 pb-14 sm:pt-10 sm:pb-20">
        <p className="eyebrow text-center">Curated ranges</p>
        <h2 className="mt-3 font-display text-[1.9rem] sm:text-4xl text-center rule-gold mb-9 sm:mb-12">{title}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-5 sm:gap-6">
          {categories.map((c) => (
            <Link
              key={c.handle}
              to="/collections/$slug"
              params={{ slug: c.handle }}
              className="group flex flex-col items-center gap-2.5 sm:gap-3"
            >
              <div className="relative aspect-square w-full rounded-full overflow-hidden bg-card ring-1 ring-foreground/10 group-hover:ring-2 group-hover:ring-[color:var(--gold)] group-hover:-translate-y-1 transition-all duration-500 shadow-[var(--shadow-soft)] group-hover:shadow-[var(--shadow-warm)]">
                <img
                  src={artFor(c.handle, c.image)}
                  alt={c.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={220}
                  height={220}
                  sizes="(max-width: 640px) 28vw, 160px"
                  className="w-full h-full object-cover brightness-95 contrast-110 saturate-110 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700"
                />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full scrim-tile opacity-70 group-hover:opacity-45 transition-opacity duration-500" />
              </div>
              <div className="text-[11px] sm:text-[13px] font-semibold text-center leading-tight text-foreground group-hover:text-primary transition-colors">
                {c.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}