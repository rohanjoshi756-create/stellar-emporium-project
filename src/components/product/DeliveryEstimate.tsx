/**
 * DeliveryEstimate — pincode-aware delivery promise block.
 * No backend logic: the date is computed locally after mount.
 */
import { useEffect, useState } from "react";

export function DeliveryEstimate() {
  const [eta, setEta] = useState<string | null>(null);
  const [pincode, setPincode] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 4);
    setEta(d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short" }));
  }, []);

  return (
    <div className="mt-5 rounded-2xl border border-border bg-card p-4">
      <p className="text-sm font-medium">
        🚚 Get it by <span className="text-[color:var(--success)]">{eta ?? "3–5 working days"}</span>
      </p>
      <p className="mt-1 text-xs text-muted-foreground">Pan-India delivery · COD available</p>
      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setChecked(pincode.length === 6);
        }}
      >
        <label className="sr-only" htmlFor="pincode">Delivery pincode</label>
        <input
          id="pincode"
          name="pincode"
          inputMode="numeric"
          maxLength={6}
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
          placeholder="Enter pincode"
          className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm"
        />
        <button type="submit" className="rounded-full border border-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wide">
          Check
        </button>
      </form>
      {checked && (
        <p className="mt-2 text-xs text-[color:var(--success)]">
          ✓ Delivery available at {pincode} · Prepaid &amp; COD both supported
        </p>
      )}
    </div>
  );
}