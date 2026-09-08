/**
 * BrandStatement — quiet editorial band that sets the brand tone between the
 * hero and the shopping sections. Pure presentation; maps to a Liquid
 * `sections/brand-statement.liquid` rich-text section on migration.
 */
const pillars = [
  { n: "01", t: "Sourced at origin", d: "Nepali Rudraksha, South Indian karungali and mine-verified crystals — bought directly, never through resellers." },
  { n: "02", t: "Verified, then blessed", d: "Every piece is lab tested for authenticity, then energised with its own mantra in our puja room." },
  { n: "03", t: "Delivered like a gift", d: "Certificate, mantra card and wooden box — packed so it is ready to place or gift the moment it arrives." },
];

export function BrandStatement() {
  return (
    <section className="cv-auto paper border-y border-border bg-secondary/30">
      <div className="container-x py-14 sm:py-20">
        <div className="section-head max-w-3xl mx-auto">
          <p className="eyebrow">The Nakshatra standard</p>
          <h2 className="font-display text-[1.9rem] leading-[1.15] sm:text-[2.9rem]">
            Sacred objects, made with <em>the patience they deserve</em>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            We keep our catalogue small on purpose. Each piece is chosen at source, verified in a
            government-approved lab and energised by our priests before it is allowed to carry our name.
          </p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {pillars.map((p) => (
            <li key={p.n} className="border-t border-[color:var(--gold-deep)]/35 pt-5">
              <span className="font-display text-sm tracking-[0.2em] text-[color:var(--gold-deep)]">{p.n}</span>
              <h3 className="mt-2 font-display text-xl sm:text-2xl">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
