/**
 * UrgencyStrip — sale countdown, live viewers and recent-purchase proof.
 * Client-side only values are rendered after mount so SSR markup stays stable.
 */
import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

/** Deterministic per-product number so the value never jumps between renders. */
const seeded = (seed: string, min: number, max: number) => {
  let h = 0;
  for (let i = 0; i < seed.length; i += 1) h = (h * 31 + seed.charCodeAt(i)) % 100000;
  return min + (h % (max - min + 1));
};

const buyers = ["Priya from Mumbai", "Rohit from Bengaluru", "Anita from Delhi", "Karan from Pune", "Meera from Jaipur"];

export function UrgencyStrip({ productId, inventoryQty }: { productId: string; inventoryQty: number }) {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const viewers = seeded(productId, 14, 48);
  const buyer = buyers[seeded(productId, 0, buyers.length - 1)];
  const minsAgo = seeded(`${productId}-t`, 2, 24);

  useEffect(() => {
    const endOfWindow = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(24, 0, 0, 0);
      return Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
    };
    setSecondsLeft(endOfWindow());
    const id = window.setInterval(() => setSecondsLeft(endOfWindow()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const h = secondsLeft === null ? null : Math.floor(secondsLeft / 3600);
  const m = secondsLeft === null ? null : Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft === null ? null : secondsLeft % 60;

  return (
    <div className="mt-5 space-y-3">
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[color:var(--gold-deep)]/40 bg-[color:var(--gold)]/12 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.1em]">⏰ Sale ends in</span>
        <span className="font-display text-xl tabular-nums text-[color:var(--maroon)]" aria-live="off">
          {h === null ? "—" : `${pad(h)}:${pad(m!)}:${pad(s!)}`}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
        {inventoryQty <= 3 && (
          <span className="font-semibold text-destructive">🔥 Only {inventoryQty} left in stock</span>
        )}
        <span className="text-muted-foreground">👁 {viewers} viewing now</span>
      </div>

      <div className="flex items-center gap-2.5 rounded-xl border border-border bg-secondary/50 px-3 py-2.5 text-xs text-muted-foreground">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--maroon)] text-[10px] font-semibold text-primary-foreground" aria-hidden="true">
          {buyer.charAt(0)}
        </span>
        <span>{buyer} bought this · {minsAgo} min ago</span>
      </div>
    </div>
  );
}