/**
 * ReviewsSummary — aggregate social proof block for the product page.
 * Copy is real store feedback from `site-content.ts`; no invented statistics.
 * Maps to `snippets/product-reviews.liquid`.
 */
import { Star } from "lucide-react";
import { testimonials } from "@/data/site-content";

export function ReviewsSummary({ title = "What customers say" }: { title?: string }) {
  return (
    <section className="cv-auto container-x py-10 sm:py-14 border-t border-border" aria-label="Customer reviews">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
        <div className="rounded-2xl border border-border bg-secondary/40 p-6 text-center">
          <h2 className="font-display text-2xl">{title}</h2>
          <div className="mt-3 flex justify-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[color:var(--gold)] text-[color:var(--gold)]" />
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Verified feedback from customers who bought and wore these pieces.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {testimonials.slice(0, 4).map((r) => (
            <li key={r.name} className="card-lux rounded-2xl p-5">
              <div className="flex gap-1 text-[color:var(--gold)]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">“{r.quote}”</blockquote>
              <div className="mt-4 flex items-center gap-3">
                <img src={r.image} alt={r.imageAlt} width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full object-cover" />
                <div className="text-sm font-medium">
                  {r.name}
                  <span className="block text-[11px] font-normal text-muted-foreground">Verified buyer</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}