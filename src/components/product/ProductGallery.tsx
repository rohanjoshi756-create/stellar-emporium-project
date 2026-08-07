/**
 * ProductGallery — PDP image viewer with thumbnail switching and trust strip.
 * Presentation only. Maps to the gallery block in `sections/main-product.liquid`.
 */
import { useState } from "react";

export type ProductGalleryProps = {
  title: string;
  images: string[];
  imageAlt: string;
  badge?: string | null;
  discountPercent?: number;
};

const trustStrip = [
  { icon: "🔬", top: "Govt Lab", bottom: "X-Ray tested" },
  { icon: "📜", top: "ISO 9001", bottom: "Certified" },
  { icon: "🕉️", top: "Vedic Puja", bottom: "Energised" },
  { icon: "💯", top: "100%", bottom: "Original" },
];

export function ProductGallery({ title, images, imageAlt, badge, discountPercent = 0 }: ProductGalleryProps) {
  const gallery = images.length > 0 ? images : [""];
  const [active, setActive] = useState(0);

  return (
    <div className="md:sticky md:top-28 md:self-start">
      <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-[var(--shadow-soft)]">
        <img
          src={gallery[Math.min(active, gallery.length - 1)]}
          alt={active === 0 ? imageAlt : `${title} — view ${active + 1}`}
          fetchPriority="high"
          decoding="async"
          width={900}
          height={900}
          sizes="(max-width: 768px) 100vw, 560px"
          className="w-full h-full object-cover aspect-square"
        />
        <div className="absolute left-3 top-3 flex flex-col items-start gap-2">
          {badge ? (
            <span className="rounded-full bg-foreground/85 text-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]">
              {badge}
            </span>
          ) : null}
          {discountPercent > 0 ? (
            <span className="rounded-full bg-[color:var(--maroon)] text-primary-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]">
              {discountPercent}% OFF
            </span>
          ) : null}
        </div>
      </div>

      {gallery.length > 1 && (
        <ul className="mt-3 flex gap-3">
          {gallery.slice(0, 5).map((src, i) => (
            <li key={`${src}-${i}`}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1} of ${title}`}
                aria-current={active === i}
                className={`h-20 w-20 overflow-hidden rounded-xl border transition ${
                  active === i ? "border-[color:var(--gold-deep)] ring-2 ring-[color:var(--gold)]/50" : "border-border"
                }`}
              >
                <img src={src} alt={`${title} — view ${i + 1}`} loading="lazy" width={80} height={80} className="h-full w-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-4 grid grid-cols-4 gap-2">
        {trustStrip.map((t) => (
          <li key={t.top} className="rounded-xl border border-border bg-secondary/50 px-2 py-2.5 text-center">
            <span className="block text-base leading-none" aria-hidden="true">{t.icon}</span>
            <span className="mt-1 block text-[10px] font-semibold leading-tight">{t.top}</span>
            <span className="block text-[10px] leading-tight text-muted-foreground">{t.bottom}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}