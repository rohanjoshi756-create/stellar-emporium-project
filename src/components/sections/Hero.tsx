/**
 * Hero — full-bleed banner slider (Astrotalk-style) with auto-rotation,
 * dark scrim for contrast, single primary CTA and inline trust proof.
 * Maps to `sections/hero-banner.liquid` (Shopify slideshow section).
 */
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BadgeCheck, Truck, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import heroZodiac from "@/assets/hero-zodiac.jpg";
import heroRudraksha from "@/assets/hero-rudraksha.jpg";
import heroKarungali from "@/assets/cat-karungali.jpg";
import { heroContent } from "@/data/site-content";

/** Slide data — becomes section blocks in Liquid. */
const slides = [
  {
    image: heroZodiac,
    alt: heroContent.imageAlt,
    eyebrow: "Sacred · Certified · Energised",
    title: heroContent.titleLine1,
    highlight: heroContent.titleLine2,
    subtitle: heroContent.subtitle,
    ctaLabel: heroContent.ctaLabel,
    ctaCollection: heroContent.ctaCollection,
  },
  {
    image: heroRudraksha,
    alt: "Original Nepali Rudraksha beads with silver capping",
    eyebrow: "Nepali origin · Silver capped",
    title: "Rudraksha",
    highlight: "Collection",
    subtitle: "Lab-certified 1 to 14 mukhi beads, energised with Vedic mantras before dispatch.",
    ctaLabel: "Shop Rudraksha",
    ctaCollection: "rudraksha",
  },
  {
    image: heroKarungali,
    alt: "Sacred Karungali ebony wood mala and bracelet",
    eyebrow: "Govt. certified karungali",
    title: "Karungali",
    highlight: "Sacred Ebony",
    subtitle: "Protection and grounding — authentic Karungali malas, bracelets and idols.",
    ctaLabel: "Shop Karungali",
    ctaCollection: "karungali",
  },
];

const proof = [
  { Icon: BadgeCheck, label: "Govt. lab certified" },
  { Icon: Sparkles, label: "Energised by astrologers" },
  { Icon: Truck, label: "Free prepaid shipping" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const go = (n: number) => setIndex((n + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden bg-foreground" aria-label="Nakshatra Store hero" aria-roledescription="carousel">
      {slides.map((s, i) => (
        <img
          key={s.image}
          src={s.image}
          alt={s.alt}
          fetchPriority={i === 0 ? "high" : "auto"}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          width={1920}
          height={1200}
          aria-hidden={i !== index}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[900ms] ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {/* Dark scrim keeps headline contrast high on every banner */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/60 to-foreground/85 md:bg-gradient-to-r md:from-foreground/92 md:via-foreground/65 md:to-foreground/20" />

      <div className="relative container-x py-20 md:py-40 min-h-[460px] md:min-h-[620px] flex flex-col justify-center">
        <div key={index} className="max-w-xl text-background">
          <p className="eyebrow animate-fade-up !text-background/70">{slide.eyebrow}</p>
          <h1 className="animate-fade-up delay-1 mt-4 font-display text-[2.5rem] sm:text-6xl md:text-[4.5rem] leading-[1.03] md:leading-[0.98]">
            {slide.title}
            <br />
            <span className="bg-[image:var(--gradient-gold)] bg-clip-text text-transparent">{slide.highlight}</span>
          </h1>
          <p className="animate-fade-up delay-2 mt-5 md:mt-6 text-base sm:text-lg text-background/80 max-w-md leading-relaxed">
            {slide.subtitle}
          </p>

          <div className="animate-fade-up delay-3 mt-8 md:mt-10 flex flex-wrap gap-3">
            <Link
              to="/collections/$slug"
              params={{ slug: slide.ctaCollection }}
              className="btn-gold rounded-full px-9 md:px-11 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.1em]"
            >
              {slide.ctaLabel}
            </Link>
            <Link
              to="/collections"
              className="rounded-full border border-background/40 text-background px-8 py-4 text-sm md:text-base hover:bg-background hover:text-foreground transition"
            >
              Explore collections
            </Link>
          </div>

          <ul className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] sm:text-xs text-background/75">
            {proof.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-[color:var(--gold)]" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous banner"
        className="hidden md:grid absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-background/20 text-background backdrop-blur hover:bg-background/35 transition"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next banner"
        className="hidden md:grid absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-background/20 text-background backdrop-blur hover:bg-background/35 transition"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to banner ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-7 bg-[image:var(--gradient-gold)]" : "w-2.5 bg-background/50"}`}
          />
        ))}
      </div>
    </section>
  );
}