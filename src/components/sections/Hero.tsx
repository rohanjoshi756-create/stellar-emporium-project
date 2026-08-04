/** Hero — primary LCP banner with the SHOP NOW call to action. */
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-zodiac.jpg";
import { heroContent } from "@/data/site-content";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Nakshatra Store hero">
      <img src={heroImg} alt={heroContent.imageAlt} fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1200} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background/85 md:bg-gradient-to-r md:from-background/90 md:via-background/40 md:to-transparent" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 py-14 md:py-36 min-h-[340px] md:min-h-[520px] flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.02] md:leading-[0.95] tracking-tight">
            {heroContent.titleLine1}<br />{heroContent.titleLine2}
          </h1>
          <p className="mt-4 md:mt-6 font-display text-lg sm:text-2xl md:text-3xl text-foreground/80">{heroContent.subtitle}</p>
          <Link to="/collections/$slug" params={{ slug: heroContent.ctaCollection }} className="mt-7 md:mt-10 inline-flex rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-8 md:px-10 py-3.5 md:py-4 text-sm md:text-base font-semibold shadow-[var(--shadow-warm)] hover:brightness-110 transition">
            {heroContent.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}