/**
 * ProductAssurance — conversion trust blocks for the product page.
 * Presentation only, no business logic. Maps to `snippets/product-trust.liquid`.
 */
import { BadgeCheck, Sparkles, Truck, RotateCcw, Gift, Package, CreditCard, Clock } from "lucide-react";

const badges = [
  { Icon: BadgeCheck, label: "Govt. lab certified" },
  { Icon: Sparkles, label: "Energised by astrologers" },
  { Icon: Truck, label: "Free prepaid shipping" },
  { Icon: RotateCcw, label: "7-day easy returns" },
];

export function TrustBadgeGrid() {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-2.5">
      {badges.map(({ Icon, label }) => (
        <li key={label} className="flex items-center gap-2.5 rounded-xl border border-border bg-secondary/50 px-3 py-3 text-xs">
          <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="min-w-0 text-muted-foreground">{label}</span>
        </li>
      ))}
    </ul>
  );
}

export function OffersBox() {
  return (
    <div className="mt-5 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4">
      <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
        <Gift className="h-4 w-4" aria-hidden="true" /> Available offers
      </h2>
      <ul className="mt-2.5 space-y-1.5 text-xs text-muted-foreground">
        <li>• Free shipping on all prepaid orders across India</li>
        <li>• Complimentary energisation with Vedic mantras before dispatch</li>
        <li>• Government lab authenticity certificate included in every parcel</li>
      </ul>
    </div>
  );
}

export function DeliveryPromise() {
  const items = [
    { Icon: Clock, label: "Dispatch within 24 hours" },
    { Icon: Package, label: "Delivery in 3–5 working days" },
    { Icon: CreditCard, label: "COD available" },
  ];
  return (
    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
      {items.map(({ Icon, label }) => (
        <li key={label} className="flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> {label}
        </li>
      ))}
    </ul>
  );
}