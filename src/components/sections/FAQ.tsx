/** FAQ — accordion of store FAQs. Maps to `sections/faq.liquid`. */
export type FaqItem = { question: string; answer: string };

export function FAQ({ title = "FAQs", items }: { title?: string; items: FaqItem[] }) {
  return (
    <section className="cv-auto mx-auto max-w-[900px] px-4 py-10 sm:py-16">
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8">{title}</h2>
      <div className="divide-y divide-border border-y border-border">
        {items.map((f) => (
          <details key={f.question} className="group py-4">
            <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-sm font-medium">
              {f.question}<span className="text-primary group-open:rotate-45 transition-transform">＋</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}