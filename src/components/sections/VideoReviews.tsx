/**
 * VideoReviews — Instagram reel video testimonials.
 * Reel permalinks live in `src/data/site-content.ts` (`instagramReels`).
 * Maps to a Shopify section with `reel_url` block settings on migration.
 */
import { useEffect } from "react";
import { Instagram, Play } from "lucide-react";
import { instagramReels, instagramProfileUrl } from "@/data/site-content";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function VideoReviews({ title = "Real customer reviews on Instagram" }: { title?: string }) {
  const hasReels = instagramReels.length > 0;

  useEffect(() => {
    if (!hasReels) return;
    const src = "https://www.instagram.com/embed.js";
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      window.instgrm?.Embeds.process();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }, [hasReels]);

  return (
    <section className="cv-auto bg-[color:var(--maroon)] text-primary-foreground" aria-label="Customer video reviews">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:py-16">
        <div className="text-center">
          <div className="text-xs tracking-[0.25em] uppercase text-[color:var(--gold)]">Video Reviews</div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-80">
            Unfiltered reels from customers who received, wore and reviewed their pieces.
          </p>
        </div>

        <div className="edge-fade -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 no-scrollbar sm:mt-10 sm:gap-5">
          {hasReels
            ? instagramReels.map((reel) => (
                <div
                  key={reel.url}
                  className="w-[82vw] max-w-[326px] shrink-0 snap-start overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5"
                >
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={reel.url}
                    data-instgrm-version="14"
                    style={{ background: "#FFF", border: 0, margin: 0, width: "100%" }}
                  >
                    <a href={reel.url} target="_blank" rel="noopener noreferrer">
                      {reel.caption}
                    </a>
                  </blockquote>
                </div>
              ))
            : Array.from({ length: 4 }).map((_, i) => (
                <a
                  key={i}
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex aspect-[9/16] w-[62vw] max-w-[260px] shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 text-center transition hover:border-[color:var(--gold)]"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--maroon)] transition group-hover:scale-105">
                    <Play className="h-6 w-6 fill-current" aria-hidden="true" />
                  </span>
                  <span className="px-6 text-sm opacity-90">Watch customer reels on Instagram</span>
                </a>
              ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="chip-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            See more reviews
          </a>
        </div>
      </div>
    </section>
  );
}
