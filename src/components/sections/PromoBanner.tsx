/** PromoBanner — horizontally scrollable collection promo cards under the hero. */
import { Link } from "@tanstack/react-router";
import { productCollections } from "@/data/products";

const banners = productCollections.slice(0, 6);

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-[1400px] px-3 sm:px-4 py-6 sm:py-10" aria-label="Featured collection banners">
      <div className="-mx-3 px-3 sm:mx-0 sm:px-0 flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
        {banners.map((b) => (
          <Link key={b.handle} to="/collections/$slug" params={{ slug: b.handle }} className="group relative snap-start shrink-0 w-[80vw] max-w-[320px] h-[150px] sm:h-[180px] rounded-2xl overflow-hidden">
            <img src={b.image} alt={b.imageAlt} loading="lazy" decoding="async" width={320} height={180} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 to-transparent" />
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-center">
              <div className="font-display text-xl sm:text-2xl text-background">{b.title}</div>
              <div className="text-xs text-background/80 mt-1 max-w-[65%]">{b.tagline}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}