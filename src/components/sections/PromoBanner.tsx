/** PromoBanner — horizontally scrollable collection promo cards under the hero. */
import { Link } from "@tanstack/react-router";
import { productCollections } from "@/data/products";

const banners = productCollections.slice(0, 6);

export function PromoBanner() {
  return (
    <section className="container-x py-8 sm:py-12" aria-label="Featured collection banners">
      <div className="-mx-3 px-3 sm:mx-0 sm:px-0 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {banners.map((b) => (
          <Link
            key={b.handle}
            to="/collections/$slug"
            params={{ slug: b.handle }}
            className="group relative snap-start shrink-0 w-[82vw] max-w-[340px] lg:w-auto lg:max-w-none h-[180px] sm:h-[220px] rounded-3xl overflow-hidden ring-1 ring-[color:var(--gold)]/25 hover:ring-[color:var(--gold)]/70 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all duration-500"
          >
            <img
              src={b.image}
              alt={b.imageAlt}
              loading="lazy"
              decoding="async"
              width={420}
              height={210}
              sizes="(max-width: 1024px) 82vw, 420px"
              className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
            />
            <div aria-hidden="true" className="absolute inset-0 scrim-banner" />
            <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-center">
              <div className="font-display text-2xl sm:text-[1.9rem] text-background leading-tight max-w-[80%]">{b.title}</div>
              <div className="text-xs sm:text-[13px] text-background/85 mt-1.5 max-w-[70%] leading-snug">{b.tagline}</div>
              <span className="chip-gold mt-4 w-fit group-hover:translate-x-0.5 transition-transform">Shop now →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}