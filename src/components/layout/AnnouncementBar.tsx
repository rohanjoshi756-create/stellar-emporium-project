/** AnnouncementBar — scrolling store promises. Maps to `sections/announcement-bar.liquid`. */
import { announcements } from "@/data/site-content";

export function AnnouncementBar() {
  return (
    <div className="bg-foreground text-background text-[11px] sm:text-xs">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4 h-8 sm:h-9 flex items-center gap-4">
        <div className="flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-10 sm:gap-16">
            {[...announcements, ...announcements].map((a, i) => (
              <span key={i} className="opacity-90">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}