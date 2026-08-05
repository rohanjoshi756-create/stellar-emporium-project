/** FAQ — accordion of store FAQs. Maps to `sections/faq.liquid`. */
export type FaqItem = { question: string; answer: string };

export function FAQ({ title = "FAQs", items }: { title?: string; items: FaqItem[] }) {
  return (
    <section className="cv-auto mx-auto max-w-[900px] px-4 py-12 sm:py-16">
      <p className="eyebrow text-center">Good to know</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl text-center rule-gold mb-7 sm:mb-9">{title}</h2>
      <div className="space-y-3">
        {items.map((f) => (
          <details key={f.question} className="group card-lux rounded-2xl px-5 py-4">
            <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-sm font-medium">
              <span className="min-w-0">{f.question}</span>
              <span aria-hidden="true" className="shrink-0 text-primary text-lg leading-none group-open:rotate-45 transition-transform duration-300">＋</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}