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
    <section aria-label="Shopping assurances" className="bg-primary text-primary-foreground">
      <div className="container-x py-8 sm:py-11">
        <div className="mb-7 flex items-center gap-4 sm:mb-9">
          <span aria-hidden="true" className="h-px flex-1 bg-primary-foreground/20" />
          <h2 className="font-ui text-base font-medium leading-snug tracking-normal sm:text-xl">The Nakshatra promise</h2>
          <span aria-hidden="true" className="h-px flex-1 bg-primary-foreground/20" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {promises.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex min-w-0 flex-col items-center border-primary-foreground/20 px-3 py-5 text-center odd:border-r [&:nth-child(-n+2)]:border-b sm:px-7 sm:py-6 lg:border-r lg:py-0 lg:[&:nth-child(-n+2)]:border-b-0 lg:last:border-r-0"
            >
              <div className="mb-4 inline-flex h-10 w-10 shrink-0 items-center justify-center text-accent">
                <Icon className="h-8 w-8" strokeWidth={1.25} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="font-ui text-[13px] font-medium leading-snug tracking-normal sm:text-[15px]">{title}</h3>
                <p className="mx-auto mt-2.5 max-w-[29ch] text-xs leading-5 tracking-normal text-primary-foreground/75 sm:text-[13px] sm:leading-6">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
