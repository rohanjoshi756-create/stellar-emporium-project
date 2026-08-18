/**
 * LoginModal — phone OTP login popup with email + optional referral code.
 * Step 1 collects name, phone, email and referral code; step 2 verifies the OTP.
 */
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Gift, ShieldCheck } from "lucide-react";

const detailsSchema = z.object({
  fullName: z.string().trim().max(60).optional(),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: "Enter a valid 10-digit Indian mobile number" }),
  referralCode: z.string().trim().max(16).optional(),
});

export function LoginModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [step, setStep] = useState<"details" | "otp">("details");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [otp, setOtp] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("nakshatra_ref");
    if (stored) setReferralCode(stored);
  }, []);

  useEffect(() => {
    if (!open) {
      setStep("details");
      setOtp("");
    }
  }, [open]);

  const sendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = detailsSchema.safeParse({ fullName, email, phone, referralCode });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.signInWithOtp({
      phone: `+91${parsed.data.phone}`,
      options: {
        data: {
          full_name: parsed.data.fullName ?? "",
          email: parsed.data.email,
          phone: `+91${parsed.data.phone}`,
          referral_code: (parsed.data.referralCode ?? "").toUpperCase(),
        },
      },
    });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setStep("otp");
    toast.success("OTP sent", { description: `We texted a 6-digit code to +91 ${parsed.data.phone}` });
  };

  const verifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.trim().length < 4) {
      toast.error("Enter the OTP you received");
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.verifyOtp({ phone: `+91${phone.trim()}`, token: otp.trim(), type: "sms" });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    if (typeof window !== "undefined") window.localStorage.removeItem("nakshatra_ref");
    toast.success("Welcome to the Nakshatra Circle ✨");
    onOpenChange(false);
  };

  const field = "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm focus:bg-background outline-none focus:ring-2 focus:ring-[color:var(--gold)]/40 transition";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {step === "details" ? "Login or create account" : "Verify your number"}
          </DialogTitle>
          <DialogDescription>
            {step === "details"
              ? "Track orders, unlock member pricing and earn referral rewards."
              : `Enter the 6-digit code sent to +91 ${phone}`}
          </DialogDescription>
        </DialogHeader>

        {step === "details" ? (
          <form onSubmit={sendOtp} className="grid gap-3">
            <input className={field} placeholder="Full name" value={fullName} maxLength={60} onChange={(e) => setFullName(e.target.value)} />
            <div className="flex items-stretch gap-2">
              <span className="grid place-items-center rounded-xl border border-border bg-secondary/60 px-3 text-sm text-muted-foreground">+91</span>
              <input
                className={field}
                placeholder="Mobile number"
                inputMode="numeric"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                required
              />
            </div>
            <input className={field} type="email" placeholder="Email address" value={email} maxLength={255} onChange={(e) => setEmail(e.target.value)} required />
            <input
              className={field}
              placeholder="Referral code (optional)"
              value={referralCode}
              maxLength={16}
              onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
            />
            <p className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <Gift className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" aria-hidden="true" />
              Got a friend's code? You both get ₹100 off.
            </p>
            <button
              type="submit"
              disabled={busy}
              className="mt-1 w-full rounded-full bg-[image:var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] disabled:opacity-60"
            >
              {busy ? "Sending OTP…" : "Send OTP"}
            </button>
            <p className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> We never share your number.
            </p>
          </form>
        ) : (
          <form onSubmit={verifyOtp} className="grid gap-3">
            <input
              className={`${field} text-center tracking-[0.5em] text-lg`}
              placeholder="000000"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              autoFocus
            />
            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-full bg-[image:var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] disabled:opacity-60"
            >
              {busy ? "Verifying…" : "Verify & continue"}
            </button>
            <button type="button" onClick={() => setStep("details")} className="text-xs text-muted-foreground underline underline-offset-2">
              Change number
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
