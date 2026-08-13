/** AboutStore — long-form SEO copy about the store. Maps to `sections/rich-text.liquid`. */
import { aboutParagraphs } from "@/data/site-content";

export function AboutStore({ title = "About Nakshatra Store" }: { title?: string }) {
  return (
    <section className="cv-auto bg-secondary/50 border-y border-border">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 sm:py-20 lg:grid-cols-[340px_1fr] lg:gap-16">
        <div>
          <p className="eyebrow text-[color:var(--gold-deep)]">Our story</p>
          <h2 className="mt-2 font-display text-[2rem] leading-tight sm:text-[2.6rem]">{title}</h2>
          <div aria-hidden="true" className="hairline mt-5 w-32" />
        </div>
        <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-[1.8]">
          {aboutParagraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}