/**
 * NewsletterForm — ISOLATED FORM COMPONENT (markup only, no backend logic).
 * Field name: `email`. Shopify migration: wrap in
 * `{% form 'customer' %}` with `customer[email]` and `customer[tags]=newsletter`.
 */
import { useState } from "react";

export type NewsletterFormProps = {
  heading?: string;
  description?: string;
  submitLabel?: string;
  onSubmit?: (values: { email: string }) => void;
};

export function NewsletterForm({
  heading = "Join the Nakshatra circle",
  description = "Get new launches, festival drops and astrologer tips in your inbox.",
  submitLabel = "Subscribe",
  onSubmit,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");

  return (
    <form
      className="w-full max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.({ email });
      }}
    >
      <h2 className="font-display text-2xl sm:text-3xl">{heading}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm"
        />
        <button type="submit" className="rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-6 py-2.5 text-sm font-semibold">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}