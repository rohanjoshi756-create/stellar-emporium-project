/** CategoryGrid — circular "Shop by Category" tiles plus the SEO intro line. */
import { Link } from "@tanstack/react-router";
import { productCollections } from "@/data/products";
import { categoryStripHeading } from "@/data/site-content";

const categories = productCollections.filter((c) => c.handle !== "best-sellers");

export function CategoryGrid({ title = "Shop by Category" }: { title?: string }) {
  return (
    <>
      <div className="container-x pt-10 sm:pt-14 text-center">
        <p className="font-display text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-snug">{categoryStripHeading}</p>
      </div>

      <section className="cv-auto container-x py-10 sm:py-14">
        <p className="eyebrow text-center">Curated ranges</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl text-center rule-gold mb-7 sm:mb-10">{title}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5">
          {categories.map((c) => (
            <Link
              key={c.handle}
              to="/collections/$slug"
              params={{ slug: c.handle }}
              className="group flex flex-col items-center gap-2.5 sm:gap-3"
            >
              <div className="relative aspect-square w-full rounded-full overflow-hidden bg-card ring-1 ring-border group-hover:ring-2 group-hover:ring-[color:var(--gold)] transition-all duration-500 shadow-[var(--shadow-soft)]">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={220}
                  height={220}
                  sizes="(max-width: 640px) 28vw, 160px"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="text-[11px] sm:text-[13px] font-medium text-center leading-tight group-hover:text-primary transition-colors">
                {c.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}