/**
 * AstrologerCTA — the Nakshatra Foundation promise banner (store's mission CTA).
 * Maps to `sections/image-banner.liquid`.
 */
import { Link } from "@tanstack/react-router";
import heroRud from "@/assets/hero-rudraksha.jpg";
import { foundation } from "@/data/site-content";

export function AstrologerCTA() {
  return (
    <section className="cv-auto relative overflow-hidden">
      <img src={heroRud} alt="Rudraksha beads representing the Nakshatra Foundation promise" loading="lazy" decoding="async" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:py-20 text-center text-background">
        <div className="text-xs tracking-[0.25em] uppercase text-[color:var(--gold)]">{foundation.eyebrow}</div>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl">One Purchase. &nbsp;&nbsp;One Promise.</h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base opacity-90">{foundation.body}</p>
        <Link to="/collections" className="mt-8 inline-block rounded-full bg-background text-foreground px-8 py-3 text-sm font-semibold">{foundation.ctaLabel}</Link>
      </div>
    </section>
  );
}