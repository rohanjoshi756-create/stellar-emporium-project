/** CategoryGrid — rounded-square "Shop by Category" tiles plus the SEO intro line. */
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

      <section className="cv-auto container-x pt-6 pb-10 sm:pt-8 sm:pb-14">
        <p className="eyebrow text-center">Curated ranges</p>
        <h2 className="mt-2 font-display text-[1.6rem] sm:text-[2rem] text-center rule-gold mb-6 sm:mb-8">{title}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-2.5 sm:gap-3.5">
          {categories.map((c) => (
            <Link
              key={c.handle}
              to="/collections/$slug"
              params={{ slug: c.handle }}
              className="group flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 hover:ring-[color:var(--gold)] hover:-translate-y-0.5 transition-all duration-500 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)]"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={artFor(c.handle, c.image)}
                  alt={c.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={180}
                  height={180}
                  sizes="(max-width: 640px) 30vw, 130px"
                  className="w-full h-full object-cover brightness-95 contrast-110 saturate-110 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700"
                />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 scrim-tile opacity-70 group-hover:opacity-45 transition-opacity duration-500" />
              </div>
              <div className="px-1.5 py-2 text-[11px] sm:text-[12px] font-semibold text-center leading-tight text-foreground group-hover:text-primary transition-colors truncate">
                {c.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}