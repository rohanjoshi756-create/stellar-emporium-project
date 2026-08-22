/**
 * ProductStory — the long-form trust and education blocks below the buy box.
 * All copy is category-specific: it comes from src/data/product-content.ts,
 * keyed by the product's collection, plus attributes derived from the title.
 */
import type { Product } from "@/data/products";
import { contentForCollection, derivedSpecs } from "@/data/product-content";

export function ProductStory({ product, collectionTitle }: { product: Product; collectionTitle: string }) {
  const c = contentForCollection(product.collectionHandle);
  const specs: Array<[string, string]> = [
    ["Category", collectionTitle],
    ...derivedSpecs(product.title),
    ...c.specs,
  ];

  return (
    <>
      {/* Energisation ritual */}
      <section className="cv-auto container-x py-10 sm:py-14 border-t border-border">
        <div className="grid items-center gap-8 rounded-3xl border border-border bg-secondary/40 p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-deep)]">{c.eyebrow}</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl">{c.ritualTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.ritualCopy}</p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {c.ritualPoints.map((p) => <li key={p}>{p}</li>)}
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
          {c.benefits.map((b) => (
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
          <h2 className="font-display text-2xl sm:text-3xl">{c.howToTitle}</h2>
          <ol className="mt-5 space-y-3 text-sm text-muted-foreground">
            {c.howTo.map((step, i) => (
              <li key={step}><span className="mr-2 font-semibold text-foreground">{i + 1}.</span>{step}</li>
            ))}
          </ol>
          <div className="mt-5 rounded-2xl border border-[color:var(--gold-deep)]/40 bg-[color:var(--gold)]/12 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em]">Activation mantra</p>
            <p className="mt-1 font-display text-lg">{c.mantra.script} · {c.mantra.roman}</p>
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
          {[`1 × ${product.title}`, ...c.inTheBox].map((item, i) => (
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
