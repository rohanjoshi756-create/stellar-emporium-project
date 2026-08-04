/**
 * ShopByPurpose — "Why Nakshatra?" value proposition grid (the store's
 * purpose/benefit block). Maps to `sections/multicolumn.liquid`.
 */
import { whyUs } from "@/data/site-content";

export function ShopByPurpose({ title = "Why Nakshatra?" }: { title?: string }) {
  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:py-16">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-10">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-2xl bg-card border border-border p-6">
              <div className="h-10 w-10 rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground grid place-items-center mb-4">✦</div>
              <div className="font-medium">{w.title}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}