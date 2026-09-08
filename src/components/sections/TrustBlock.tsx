/** TrustBlock — slim service promise strip (shipping, delivery, authenticity, returns). */
import { Truck, RotateCcw, BadgeCheck, Clock } from "lucide-react";

const promises = [
  { Icon: Truck, title: "Free shipping", description: "On all prepaid orders" },
  { Icon: Clock, title: "Ships in 24 hrs", description: "Delivery in 3–5 days" },
  { Icon: BadgeCheck, title: "Lab certified", description: "Certificate in every box" },
  { Icon: RotateCcw, title: "7-day returns", description: "Easy refund or exchange" },
];

export function TrustBlock() {
  return (
    <section className="cv-auto border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
          {promises.map(({ Icon, title, description }) => (
            <li key={title} className="flex items-center gap-3">
              <Icon className="h-5 w-5 shrink-0 text-[color:var(--gold-deep)]" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-sm font-medium leading-tight">{title}</p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
