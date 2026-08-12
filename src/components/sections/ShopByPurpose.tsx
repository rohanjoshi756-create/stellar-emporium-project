/**
 * ShopByPurpose — "Why Nakshatra?" value proposition grid (the store's
 * purpose/benefit block). Maps to `sections/multicolumn.liquid`.
 */
import { whyUs } from "@/data/site-content";
import { Sparkles, Gem, BadgeCheck, Hammer } from "lucide-react";

/** Icon per value proposition, in the same order as `whyUs`. */
const icons = [Sparkles, Gem, BadgeCheck, Hammer];

export function ShopByPurpose({ title = "Why Nakshatra?" }: { title?: string }) {
  return (
    <section className="cv-auto relative overflow-hidden bg-foreground text-background">
      {/* Soft gold aura for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[0.7rem] tracking-[0.28em] uppercase text-[color:var(--gold)]">
            The Nakshatra difference
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-sm md:text-base opacity-75 leading-relaxed">
            Every bead, stone and yantra passes through sourcing, certification and Vedic energisation before it reaches you.
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-px w-24 rounded-full"
            style={{ background: "var(--gradient-gold)" }}
          />
        </div>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-background/15 bg-background/15">
          {whyUs.map((w, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={w.title}
                className="group relative bg-foreground p-6 sm:p-7 transition-colors duration-300 hover:bg-background/[0.06]"
              >
                <span className="absolute right-5 top-5 font-display text-3xl text-background/10 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[color:var(--gold)]/35 bg-background/[0.06] text-[color:var(--gold)] transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-5 font-display text-lg leading-snug">{w.title}</div>
                <p className="mt-2.5 text-sm opacity-70 leading-relaxed">{w.description}</p>
                <div
                  aria-hidden="true"
                  className="mt-5 h-px w-10 origin-left scale-x-100 rounded-full transition-transform duration-300 group-hover:scale-x-[2.4]"
                  style={{ background: "var(--gradient-gold)" }}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm opacity-70">
          <span>50,000+ happy customers</span>
          <span aria-hidden="true" className="text-[color:var(--gold)]">•</span>
          <span>Energised before dispatch</span>
          <span aria-hidden="true" className="text-[color:var(--gold)]">•</span>
          <span>7-day easy returns</span>
        </div>
      </div>
    </section>
  );
}