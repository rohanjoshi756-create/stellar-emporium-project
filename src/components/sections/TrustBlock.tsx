/** TrustBlock — unframed service promises (shipping, returns, authenticity, delivery). */
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
    <section aria-label="Shopping assurances" className="border-y border-border bg-card text-card-foreground">
      <div className="container-x py-7 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 border-b border-border py-6 last:border-b-0 first:pt-0 sm:px-6 sm:py-4 sm:first:pt-4 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/10 bg-secondary/60 text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="font-ui text-sm font-semibold leading-snug tracking-normal sm:text-[15px]">{title}</h3>
                <span aria-hidden="true" className="mt-2.5 block h-0.5 w-6 bg-accent" />
                <p className="mt-2.5 text-xs leading-6 text-muted-foreground sm:text-[13px]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
