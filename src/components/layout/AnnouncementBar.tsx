/** AnnouncementBar — scrolling store promises. Maps to `sections/announcement-bar.liquid`. */
import { announcements, storeInfo } from "@/data/site-content";

export function AnnouncementBar() {
  return (
    <div className="bg-[image:var(--gradient-ink)] text-primary-foreground text-[11px] sm:text-xs">
      <div className="container-x h-9 sm:h-10 flex items-center gap-6">
        <div className="flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-10 sm:gap-16">
            {[...announcements, ...announcements].map((a, i) => (
              <span key={i} className="opacity-90">{a}</span>
            ))}
          </div>
        </div>
        <a
          href={storeInfo.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline text-[color:var(--gold)] hover:underline shrink-0"
        >
          Need help? Chat with us
        </a>
      </div>
    </div>
  );
}