/**
 * BrandStatement — compact, factual brand band. Maps to a Liquid
 * `sections/brand-statement.liquid` rich-text section on migration.
 */
const facts = [
  { k: "Sourced from", v: "Nepal & South India" },
  { k: "Lab certified", v: "Every order" },
  { k: "Energised", v: "Before dispatch" },
  { k: "Customers served", v: "50,000+" },
];

export function BrandStatement() {
  return (
    <section className="cv-auto border-y border-border bg-background">
      <div className="container-x py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <h2 className="font-display text-[1.6rem] leading-[1.2] sm:text-[2.1rem]">
              Real Rudraksha, real certificates.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              We buy directly from growers in Nepal and artisans in South India, get each batch tested
              at a government-approved lab, and send the certificate along with your order.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:gap-x-4">
            {facts.map((f) => (
              <div key={f.k} className="border-t border-border pt-3">
                <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">{f.k}</dt>
                <dd className="mt-1 font-display text-base sm:text-lg">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
