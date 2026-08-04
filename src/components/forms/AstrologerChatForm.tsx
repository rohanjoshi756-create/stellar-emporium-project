/**
 * AstrologerChatForm — ISOLATED FORM COMPONENT (markup only, no backend logic).
 * Field names: `name`, `email`, `phone`, `message`.
 * Shopify migration: wrap in `{% form 'contact' %}` with `contact[...]` names.
 */
import { useState } from "react";

export type AstrologerChatFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function AstrologerChatForm({
  heading = "Talk to an astrologer",
  submitLabel = "Request a call back",
  onSubmit,
}: {
  heading?: string;
  submitLabel?: string;
  onSubmit?: (values: AstrologerChatFormValues) => void;
}) {
  const [values, setValues] = useState<AstrologerChatFormValues>({ name: "", email: "", phone: "", message: "" });
  const set = (key: keyof AstrologerChatFormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  return (
    <form
      className="w-full max-w-md grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(values);
      }}
    >
      <h2 className="font-display text-2xl sm:text-3xl">{heading}</h2>

      <label htmlFor="astro-name" className="sr-only">Your name</label>
      <input id="astro-name" name="name" required placeholder="Your name" value={values.name} onChange={set("name")} className="rounded-full border border-border bg-background px-4 py-2.5 text-sm" />

      <label htmlFor="astro-email" className="sr-only">Email address</label>
      <input id="astro-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" value={values.email} onChange={set("email")} className="rounded-full border border-border bg-background px-4 py-2.5 text-sm" />

      <label htmlFor="astro-phone" className="sr-only">Phone number</label>
      <input id="astro-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone number" value={values.phone} onChange={set("phone")} className="rounded-full border border-border bg-background px-4 py-2.5 text-sm" />

      <label htmlFor="astro-message" className="sr-only">What would you like guidance on?</label>
      <textarea id="astro-message" name="message" rows={3} placeholder="What would you like guidance on?" value={values.message} onChange={set("message")} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm" />

      <button type="submit" className="rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground px-6 py-2.5 text-sm font-semibold">{submitLabel}</button>
    </form>
  );
}