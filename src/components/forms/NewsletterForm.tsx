/**
 * NewsletterForm — ISOLATED FORM COMPONENT (markup only, no backend logic).
 * Field name: `email`. Shopify migration: wrap in
 * `{% form 'customer' %}` with `customer[email]` and `customer[tags]=newsletter`.
 */
import { useId, useState } from "react";

export type NewsletterFormProps = {
  heading?: string;
  description?: string;
  submitLabel?: string;
  /** "dark" adapts the copy colours for the ink-coloured newsletter band. */
  tone?: "light" | "dark";
  onSubmit?: (values: { email: string }) => void;
};

export function NewsletterForm({
  heading = "Join the Nakshatra circle",
  description = "Get new launches, festival drops and astrologer tips in your inbox.",
  submitLabel = "Subscribe",
  tone = "dark",
  onSubmit,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  // Unique per instance so multiple newsletter blocks never clash on id.
  const emailId = useId();
  const subtle = tone === "dark" ? "opacity-75" : "text-muted-foreground";

  return (
    <form
      className="w-full max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.({ email });
        setEmail("");
      }}
    >
      <h2 className="font-display text-2xl sm:text-3xl">{heading}</h2>
      <p className={`mt-2 text-sm ${subtle}`}>{description}</p>
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <label htmlFor={emailId} className="sr-only">Email address</label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-w-0 rounded-full border border-border bg-background text-foreground px-5 py-3 text-sm"
        />
        <button type="submit" className="btn-gold shrink-0 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em]">
          {submitLabel}
        </button>
      </div>
      <p className={`mt-2.5 text-[11px] ${subtle}`}>No spam. Unsubscribe in one click.</p>
    </form>
  );
}