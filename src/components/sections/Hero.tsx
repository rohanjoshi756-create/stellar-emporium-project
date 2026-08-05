/**
 * Hero — primary LCP banner with a clear single-primary CTA hierarchy
 * (gold primary + outlined secondary) and inline trust proof for ad traffic.
 * Maps to `sections/hero-banner.liquid`.
 */
import { Link } from "@tanstack/react-router";
import { BadgeCheck, Truck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-zodiac.jpg";
import { heroContent } from "@/data/site-content";

const proof = [
  { Icon: BadgeCheck, label: "Govt. lab certified" },
  { Icon: Sparkles, label: "Energised by astrologers" },
  { Icon: Truck, label: "Free prepaid shipping" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Nakshatra Store hero">
      <img
        src={heroImg}
        alt={heroContent.imageAlt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        width={1920}
        height={1200}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/92 via-background/70 to-background/92 md:bg-gradient-to-r md:from-background/95 md:via-background/60 md:to-transparent" />

      <div className="relative container-x py-16 md:py-36 min-h-[420px] md:min-h-[560px] flex flex-col justify-center">
        <div className="max-w-xl">
          <p className="eyebrow animate-fade-up">Sacred · Certified · Energised</p>
          <h1 className="animate-fade-up delay-1 mt-4 font-display text-[2.6rem] sm:text-6xl md:text-7xl leading-[1.02] md:leading-[0.95] tracking-tight">
            {heroContent.titleLine1}
            <br />
            <span className="bg-[image:var(--gradient-gold)] bg-clip-text text-transparent">{heroContent.titleLine2}</span>
          </h1>
          <p className="animate-fade-up delay-2 mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
            {heroContent.subtitle}
          </p>

          <div className="animate-fade-up delay-3 mt-8 md:mt-10 flex flex-wrap gap-3">
            <Link
              to="/collections/$slug"
              params={{ slug: heroContent.ctaCollection }}
              className="btn-gold rounded-full px-9 md:px-11 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.1em]"
            >
              {heroContent.ctaLabel}
            </Link>
            <Link
              to="/collections"
              className="rounded-full border border-foreground/25 px-8 py-4 text-sm md:text-base hover:bg-foreground hover:text-background transition"
            >
              Explore collections
            </Link>
          </div>

          <ul className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] sm:text-xs text-muted-foreground">
            {proof.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}