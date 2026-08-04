/** AboutStore — long-form SEO copy about the store. Maps to `sections/rich-text.liquid`. */
import { aboutParagraphs } from "@/data/site-content";

export function AboutStore({ title = "About Nakshatra Store" }: { title?: string }) {
  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:py-16">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">{title}</h2>
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-5xl">
          {aboutParagraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}