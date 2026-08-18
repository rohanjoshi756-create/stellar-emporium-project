/**
 * UrgencyBar — sitewide sale countdown strip used on home, collection and product pages.
 * Purely presentational; the deadline resets daily at midnight IST.
 */
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

function useCountdown() {
  const [left, setLeft] = useState<{ h: string; m: string; s: string } | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      const diff = Math.max(0, end.getTime() - now.getTime());
      const pad = (n: number) => String(n).padStart(2, "0");
      setLeft({
        h: pad(Math.floor(diff / 3_600_000)),
        m: pad(Math.floor((diff % 3_600_000) / 60_000)),
        s: pad(Math.floor((diff % 60_000) / 1000)),
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return left;
}

export function UrgencyBar({ label = "Festival sale — extra 10% off with code NAKSHATRA10" }: { label?: string }) {
  const left = useCountdown();
  return (
    <div className="border-y border-[color:var(--gold)]/30 bg-[color:var(--maroon)] text-primary-foreground">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2.5 text-center text-[11px] sm:text-xs">
        <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.14em]">
          <Flame className="h-3.5 w-3.5 text-[color:var(--gold)]" aria-hidden="true" />
          {label}
        </span>
        <span className="inline-flex items-center gap-1.5 tabular-nums">
          Ends in
          {left
            ? [left.h, left.m, left.s].map((v, i) => (
                <span key={i} className="rounded-md bg-black/25 px-1.5 py-0.5 font-semibold text-[color:var(--gold)]">{v}</span>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
