/**
 * Footer — newsletter capture, store info, collection/purpose/help links,
 * payment + trust row and the WhatsApp CTA.
 * Maps to `sections/footer.liquid`.
 */
import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Linkedin, MessageCircle, ShieldCheck, Truck, RotateCcw, BadgeCheck } from "lucide-react";
import logoAsset from "@/assets/nakshatra-logo.jpg.asset.json";
import { productCollections } from "@/data/products";
import { footerHelpLinks, footerPurposeLinks, storeInfo } from "@/data/site-content";
import { NewsletterSection } from "@/components/sections/Newsletter";

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Linkedin, label: "LinkedIn" },
];

const guarantees = [
  { Icon: BadgeCheck, label: "Govt. lab certified" },
  { Icon: ShieldCheck, label: "Energised before dispatch" },
  { Icon: Truck, label: "Free prepaid shipping" },
  { Icon: RotateCcw, label: "7-day easy returns" },
];

export function Footer() {
  return (
    <>
      <NewsletterSection />

      {/* Guarantee strip — last-mile reassurance before the fold ends. */}
      <div className="border-y border-border bg-secondary/50">
        <ul className="container-x py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-[13px]">
          {guarantees.map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5">
              <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <footer className="bg-card border-t border-border">
        <div className="container-x py-10 sm:py-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoAsset.url} alt="Nakshatra Store logo — zodiac wheel with Devanagari lettering" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full object-cover" />
              <span className="font-display text-xl">Nakshatra</span>
            </div>
            <p className="mt-3 text-muted-foreground text-[13px] leading-relaxed">{storeInfo.blurb}</p>
            <p className="mt-3 text-muted-foreground text-[13px] leading-relaxed">{storeInfo.support}</p>
            <div className="mt-4 flex gap-2.5">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href={storeInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Nakshatra Store on ${label}`}
                  className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-muted transition"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
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
              {footerHelpLinks.map((l) => (
                <li key={l}>
                  <a href={storeInfo.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-primary">{l}</a>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <div className="font-medium mb-2 text-[13px]">We accept</div>
              <ul className="flex flex-wrap gap-1.5 text-[10px] text-muted-foreground">
                {["UPI", "Visa", "Mastercard", "RuPay", "Net Banking", "COD"].map((m) => (
                  <li key={m} className="rounded-md border border-border px-2 py-1">{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container-x py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
            <div>© {new Date().getFullYear()} Nakshatra Store. All rights reserved.</div>
            <div>Made with 🪔 in Bharat</div>
          </div>
        </div>
      </footer>

      <a
        href={storeInfo.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Nakshatra Store on WhatsApp"
        className="fixed bottom-24 lg:bottom-6 right-4 z-30 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[color:var(--whatsapp)] text-primary-foreground grid place-items-center shadow-[var(--shadow-warm)] hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    </>
  );
}