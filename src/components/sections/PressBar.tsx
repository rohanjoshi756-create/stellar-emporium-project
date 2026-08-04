/** PressBar — trust marquee strip ("100% Natural", "Energised by Top Astrologers"). */
import { trustPoints } from "@/data/site-content";

export function PressBar() {
  return (
    <div className="bg-secondary border-y border-border overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee py-2.5 sm:py-3 text-xs sm:text-sm">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="mx-6 sm:mx-8 flex items-center gap-2">
            <span className="text-primary">✦</span> {trustPoints[0]}
            <span className="mx-4 text-muted-foreground">·</span>
            <span className="text-primary">✦</span> {trustPoints[1]}
          </span>
        ))}
      </div>
    </div>
  );
}