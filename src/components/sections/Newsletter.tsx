/**
 * NewsletterSection — email capture band wrapping the isolated NewsletterForm.
 * Maps to `sections/newsletter.liquid`.
 */
import { toast } from "sonner";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="cv-auto bg-[image:var(--gradient-ink)] text-primary-foreground" aria-label="Newsletter signup">
      <div className="container-x py-12 sm:py-16 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-[color:var(--gold)]">Nakshatra Circle</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Get ₹100 off your first order</h2>
          <p className="mt-3 text-sm opacity-80 max-w-md leading-relaxed">
            Join for new launches, festival drops and astrologer guidance — plus early access to limited energised pieces.
          </p>
        </div>
        <div className="lg:justify-self-end w-full">
          <NewsletterForm
            heading="Subscribe for offers"
            description="One email a week. Unsubscribe anytime."
            onSubmit={({ email }) => toast.success("You're in ✨", { description: `We'll send your code to ${email}.` })}
          />
        </div>
      </div>
    </section>
  );
}