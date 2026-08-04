/** Testimonials — customer reviews carousel on the maroon band. */
import { testimonials } from "@/data/site-content";

export function Testimonials() {
  return (
    <section className="cv-auto bg-[color:var(--maroon)] text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:py-16">
        <div className="text-center">
          <div className="text-xs tracking-[0.25em] uppercase text-[color:var(--gold)]">Testimonials</div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl">What our customers say</h2>
        </div>
        <div className="-mx-4 px-4 flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory mt-8 sm:mt-10 pb-2">
          {testimonials.map((r) => (
            <figure key={r.name} className="snap-start shrink-0 w-[82vw] max-w-[300px] rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6">
              <div className="text-[color:var(--gold)] mb-3">★★★★★</div>
              <blockquote className="text-sm leading-relaxed opacity-90">"{r.quote}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <img src={r.image} alt={r.imageAlt} loading="lazy" decoding="async" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <span className="text-sm font-medium">{r.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}