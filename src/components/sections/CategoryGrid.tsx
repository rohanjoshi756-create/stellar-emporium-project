/** CategoryGrid — circular "Shop by Category" tiles plus the SEO intro line. */
import { Link } from "@tanstack/react-router";
import { productCollections } from "@/data/products";
import { categoryStripHeading } from "@/data/site-content";
import catBracelets from "@/assets/cat-bracelets.jpg";
import catMala from "@/assets/cat-mala.jpg";
import catCrystalTree from "@/assets/cat-crystal-tree.jpg";
import catVastu from "@/assets/cat-vastu.jpg";
import catRudraksha from "@/assets/cat-rudraksha.jpg";
import catStatues from "@/assets/cat-statues.jpg";
import catKarungali from "@/assets/cat-karungali.jpg";
import catYantra from "@/assets/cat-yantra.jpg";

/** Editorial category imagery — replaces the logo-style source thumbnails. */
const categoryArt: Record<string, string> = {
  bracelets: catBracelets,
  mala: catMala,
  "crystal-trees": catCrystalTree,
  vastu: catVastu,
  rudraksha: catRudraksha,
  statues: catStatues,
  karungali: catKarungali,
  yantras: catYantra,
};

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
              <div className="relative aspect-square w-full rounded-full overflow-hidden bg-card ring-1 ring-foreground/15 group-hover:ring-2 group-hover:ring-[color:var(--gold)] transition-all duration-500 shadow-[var(--shadow-soft)]">
                <img
                  src={categoryArt[c.handle] ?? c.image}
                  alt={c.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={220}
                  height={220}
                  sizes="(max-width: 640px) 28vw, 160px"
                  className="w-full h-full object-cover brightness-95 contrast-110 saturate-110 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700"
                />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
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