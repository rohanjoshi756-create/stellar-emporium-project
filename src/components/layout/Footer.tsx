/** Footer — store info, collection links, purpose links, help links, WhatsApp CTA. */
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/nakshatra-logo.jpg.asset.json";
import { productCollections } from "@/data/products";
import { footerHelpLinks, footerPurposeLinks, storeInfo } from "@/data/site-content";

export function Footer() {
  return (
    <>
      <footer className="bg-card border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:py-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoAsset.url} alt="Nakshatra Store logo — zodiac wheel with Devanagari lettering" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full object-cover" />
              <span className="font-display text-xl">Nakshatra</span>
            </div>
            <p className="mt-3 text-muted-foreground text-[13px] leading-relaxed">{storeInfo.blurb}</p>
            <p className="mt-3 text-muted-foreground text-[13px] leading-relaxed">{storeInfo.support}</p>
            <div className="mt-4 flex gap-3">
              {["◎", "f", "▶", "in"].map((i) => (
                <span key={i} className="h-9 w-9 grid place-items-center rounded-full border border-border">{i}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="font-medium mb-3">Collections</div>
            <ul className="space-y-2 text-muted-foreground text-[13px]">
              {productCollections.map((c) => (
                <li key={c.handle}>
                  <Link to="/collections/$slug" params={{ slug: c.handle }} className="hover:text-primary">{c.title}</Link>
                </li>
              ))}
              <li><Link to="/collections" className="hover:text-primary">View all collections</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Shop By Purpose</div>
            <ul className="space-y-2 text-muted-foreground text-[13px]">
              {footerPurposeLinks.map((l) => (
                <li key={l.handle}>
                  <Link to="/collections/$slug" params={{ slug: l.handle }} className="hover:text-primary">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Help</div>
            <ul className="space-y-2 text-muted-foreground text-[13px]">
              {footerHelpLinks.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
            <div>© {new Date().getFullYear()} Nakshatra Store. All rights reserved.</div>
            <div>Made with 🪔 in Bharat</div>
          </div>
        </div>
      </footer>

      <a href={storeInfo.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Nakshatra Store on WhatsApp" className="fixed bottom-5 right-4 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[color:var(--whatsapp)] text-primary-foreground grid place-items-center shadow-[var(--shadow-warm)] hover:scale-105 transition text-2xl">✆</a>
    </>
  );
}