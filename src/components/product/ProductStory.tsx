/**
 * ProductStory — the long-form trust and education blocks below the buy box:
 * energisation ritual, benefits, specifications, wearing ritual, authenticity
 * and what's in the box. Pure presentation, driven by the product model.
 */
import type { Product } from "@/data/products";

const benefits = [
  { icon: "👑", title: "Complete protection", copy: "Aligned to your planetary chart so every energy works in your favour." },
  { icon: "🪄", title: "Manifestation", copy: "Worn for generations to attract abundance alongside spiritual clarity." },
  { icon: "🧘", title: "Calm & focus", copy: "Customers report steadier sleep and sharper focus within weeks." },
  { icon: "🛡️", title: "Negativity shield", copy: "Traditionally used to deflect drishti and stagnant home energy." },
];

export function ProductStory({ product, collectionTitle }: { product: Product; collectionTitle: string }) {
  const specs: Array<[string, string]> = [
    ["Category", collectionTitle],
    ["Sourcing", "Nepal & India, hand-selected"],
    ["Energisation", "Vedic puja before dispatch"],
    ["Certification", "Govt.-approved lab certificate"],
  ];

  return (
    <>
      {/* Energisation ritual */}
      <section className="cv-auto container-x py-10 sm:py-14 border-t border-border">
        <div className="grid items-center gap-8 rounded-3xl border border-border bg-secondary/40 p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">The ritual</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl">See how your {product.title} is energised</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Recorded inside our puja room. Real priests, real mantras, real abhishek — every order is energised
              before dispatch.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>✓ 11-step traditional energisation</li>
              <li>✓ Personal naam-gotra during puja (optional)</li>
              <li>✓ Puja video shared on WhatsApp post-dispatch</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img src={product.image} alt={`${product.title} being energised before dispatch`} loading="lazy" width={720} height={480} className="h-full w-full object-cover aspect-[3/2]" />
            <span className="absolute inset-0 grid place-items-center bg-foreground/35 text-background text-sm font-semibold uppercase tracking-[0.15em]">
              ▶ Watch the ritual
            </span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="cv-auto container-x py-10 sm:py-14 border-t border-border">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">Benefits</p>
        <h2 className="mt-2 rule-gold text-center font-display text-2xl sm:text-3xl">Why devotees choose the {product.title}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <li key={b.title} className="card-lux rounded-2xl p-5">
              <span className="text-2xl" aria-hidden="true">{b.icon}</span>
              <h3 className="mt-3 font-display text-lg">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Specifications + ritual of wearing */}
      <section className="cv-auto container-x py-10 sm:py-14 border-t border-border grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">Specifications</h2>
          <dl className="mt-5 divide-y divide-border rounded-2xl border border-border">
            {specs.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">How to wear &amp; activate</h2>
          <ol className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><span className="mr-2 font-semibold text-foreground">1.</span>Wear on a Monday morning after a bath.</li>
            <li><span className="mr-2 font-semibold text-foreground">2.</span>Chant the mantra 11 times before first wear.</li>
            <li><span className="mr-2 font-semibold text-foreground">3.</span>Treat it as sacred — remove during bath and sleep.</li>
          </ol>
          <div className="mt-5 rounded-2xl border border-[color:var(--gold-deep)]/40 bg-[color:var(--gold)]/12 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em]">Activation mantra</p>
            <p className="mt-1 font-display text-lg">ॐ नमः शिवाय · Om Namah Shivaya</p>
          </div>
        </div>
      </section>

      {/* Authenticity */}
      <section className="cv-auto container-x py-10 sm:py-14 border-t border-border">
        <div className="rounded-3xl border border-border bg-secondary/40 p-6 text-center sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">100% authentic</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl">Every piece, lab-verified.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Each product is X-ray scanned at a government-approved gemological lab. The original certificate travels
            inside your box — no QR tricks, no copy-paste PDFs.
          </p>
          <ul className="mx-auto mt-6 flex max-w-lg justify-center gap-3">
            {[["🔬", "X-Ray scan"], ["📜", "Lab certificate"], ["✦", "Puja done"]].map(([icon, label]) => (
              <li key={label} className="flex-1 rounded-xl border border-border bg-card px-3 py-4 text-xs">
                <span className="block text-xl" aria-hidden="true">{icon}</span>
                <span className="mt-1.5 block text-muted-foreground">{label}</span>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/917017700144?text=${encodeURIComponent(`Hi, I want to verify ${product.title}`)}`}
            className="mt-6 inline-block rounded-full border border-foreground px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-foreground hover:text-background transition"
          >
            💬 Verify on WhatsApp
          </a>
        </div>
      </section>

      {/* In the box */}
      <section className="cv-auto container-x py-10 sm:py-14 border-t border-border">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">In the box</p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl">What you&apos;ll receive</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[`1 × ${product.title}`, "Authenticity certificate", "Pooja kit & instructions", "Premium wooden gift box"].map((item, i) => (
            <li key={item} className="rounded-2xl border border-border bg-card p-5 text-sm">
              <span className="font-display text-2xl text-[color:var(--gold-deep)]">{i + 1}</span>
              <p className="mt-2 text-muted-foreground">{item}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}