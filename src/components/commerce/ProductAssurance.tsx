/**
 * ProductAssurance — conversion trust blocks for the product page.
 * Presentation only, no business logic. Maps to `snippets/product-trust.liquid`.
 */

const badges = [
  { icon: "🏅", label: "Govt. lab certified" },
  { icon: "🕉️", label: "Energised by astrologers" },
  { icon: "🚚", label: "Free prepaid shipping" },
  { icon: "↩️", label: "7-day easy returns" },
];

export function TrustBadgeGrid() {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-2">
      {badges.map((b) => (
        <li key={b.label} className="flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2.5 text-xs">
          <span aria-hidden="true" className="text-base">{b.icon}</span>
          <span className="text-muted-foreground">{b.label}</span>
        </li>
      ))}
    </ul>
  );
}

export function OffersBox() {
  return (
    <div className="mt-5 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-primary">Available offers</h2>
      <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
        <li>• Free shipping on all prepaid orders across India</li>
        <li>• Complimentary energisation with Vedic mantras before dispatch</li>
        <li>• Government lab authenticity certificate included in every parcel</li>
      </ul>
    </div>
  );
}

export function DeliveryPromise() {
  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
      <span>🚚 Dispatch within 24 hours</span>
      <span>📦 Delivery in 3–5 working days</span>
      <span>💳 COD available</span>
    </div>
  );
}