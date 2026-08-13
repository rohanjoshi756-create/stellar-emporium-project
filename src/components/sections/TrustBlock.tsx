/** TrustBlock — prominent service promise cards (shipping, returns, authenticity, delivery). */
import { Truck, RotateCcw, BadgeCheck, Clock } from "lucide-react";

const promises = [
  {
    Icon: Truck,
    title: "Free shipping",
    description: "Complimentary pan-India shipping on all prepaid orders. No minimum cart value required.",
  },
  {
    Icon: Clock,
    title: "Fast delivery",
    description: "Orders dispatched within 24 hours. Most pincodes receive delivery in 3–5 working days.",
  },
  {
    Icon: BadgeCheck,
    title: "Certified authentic",
    description: "Every product is government-lab certified. Original Rudraksha, Karungali & crystals only.",
  },
  {
    Icon: RotateCcw,
    title: "7-day returns",
    description: "Not satisfied? Return unused items within 7 days for a hassle-free refund or exchange.",
  },
];

export function TrustBlock() {
  return (
    <section className="cv-auto bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-start rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
            >
              <div className="mb-3.5 inline-flex rounded-xl bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-base">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
