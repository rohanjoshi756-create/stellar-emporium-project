/** AnnouncementBar — scrolling store promises. Maps to `sections/announcement-bar.liquid`. */
import { announcements, storeInfo } from "@/data/site-content";

export function AnnouncementBar() {
  return (
    <div className="bg-[image:var(--gradient-ink)] text-primary-foreground text-[11px] sm:text-xs">
      <div className="container-x h-9 sm:h-10 flex items-center gap-4">
        <div className="min-w-0 flex-1 overflow-hidden edge-fade">
          <div className="flex whitespace-nowrap animate-marquee gap-10 sm:gap-16">
            {[...announcements, ...announcements].map((a, i) => (
              <span key={i} className="flex items-center gap-2.5 opacity-90">
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
                {a}
              </span>
            ))}
          </div>
        </div>
        <a
          href={storeInfo.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex shrink-0 items-center rounded-full border border-[color:var(--gold)]/45 px-3 py-1 text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)] transition-colors"
        >
          Need help? Chat with us
        </a>
      </div>
    </div>
  );
}