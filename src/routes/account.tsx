/**
 * /account — customer dashboard with the functional referral programme:
 * personal code, share link, referred friends and earned rewards.
 */
import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Copy, Gift, LogOut, Share2, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/account")({
  ssr: false,
  component: AccountPage,
  head: () => ({
    meta: [
      { title: "My Account & Referrals — Nakshatra Store" },
      { name: "description", content: "Manage your Nakshatra Store account, share your referral code and track the rewards you have earned." },
      { property: "og:title", content: "My Account & Referrals — Nakshatra Store" },
      { property: "og:description", content: "Share your referral code and track rewards earned with Nakshatra Store." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

type Profile = { full_name: string | null; email: string | null; phone: string | null; referral_code: string };
type Referral = { id: string; created_at: string; status: string; reward_amount: number; referred_id: string };

function AccountPage() {
  const { user, loading, openLogin, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [referrals, setReferrals] = useState<Referral[]>([]);

  useEffect(() => {
    if (!user) return;
    void (async () => {
      const [{ data: p }, { data: r }] = await Promise.all([
        supabase.from("profiles").select("full_name, email, phone, referral_code").eq("id", user.id).maybeSingle(),
        supabase.from("referrals").select("id, created_at, status, reward_amount, referred_id").eq("referrer_id", user.id).order("created_at", { ascending: false }),
      ]);
      setProfile(p as Profile | null);
      setReferrals((r ?? []) as Referral[]);
    })();
  }, [user]);

  const shareUrl = profile ? `${typeof window !== "undefined" ? window.location.origin : ""}/?ref=${profile.referral_code}` : "";
  const earned = referrals.filter((r) => r.status !== "cancelled").reduce((sum, r) => sum + r.reward_amount, 0);

  const copy = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    toast.success(`${label} copied`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main id="main" className="container-x py-10 sm:py-14">
        {!user ? (
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-secondary/40 p-8 text-center">
            <h1 className="font-display text-3xl">Your account</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {loading ? "Checking your session…" : "Login with your mobile number to view orders and referral rewards."}
            </p>
            {!loading && (
              <button onClick={openLogin} className="mt-6 rounded-full bg-[image:var(--gradient-gold)] px-8 py-3 text-sm font-semibold text-[color:var(--ink)]">
                Login / Sign up
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="grid gap-6">
              <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <div className="min-w-0">
                  <p className="eyebrow text-[color:var(--gold-deep)]">My account</p>
                  <h1 className="truncate font-display text-3xl sm:text-4xl">{profile?.full_name || "Nakshatra member"}</h1>
                  <p className="mt-1 truncate text-sm text-muted-foreground">{profile?.phone} · {profile?.email}</p>
                </div>
                <button onClick={signOut} className="shrink-0 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs hover:bg-muted">
                  <LogOut className="h-3.5 w-3.5" aria-hidden="true" /> Sign out
                </button>
              </header>

              <section className="rounded-2xl border border-border bg-[image:var(--gradient-ink)] p-6 text-primary-foreground">
                <p className="eyebrow text-[color:var(--gold)]">Referral programme</p>
                <h2 className="mt-2 font-display text-2xl">Give ₹100, get ₹100</h2>
                <p className="mt-1 text-sm opacity-80">Share your code — when a friend places their first order, you both get ₹100 off.</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-[auto_1fr]">
                  <div className="rounded-xl border border-[color:var(--gold)]/40 px-5 py-3 text-center">
                    <span className="block text-[10px] uppercase tracking-[0.2em] opacity-70">Your code</span>
                    <span className="font-display text-2xl tracking-[0.14em] text-[color:var(--gold)]">{profile?.referral_code ?? "…"}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button onClick={() => copy(profile?.referral_code ?? "", "Code")} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-xs font-semibold text-[color:var(--ink)]">
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" /> Copy code
                    </button>
                    <button onClick={() => copy(shareUrl, "Share link")} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-5 py-2.5 text-xs">
                      <Share2 className="h-3.5 w-3.5" aria-hidden="true" /> Copy share link
                    </button>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-border p-6">
                <h2 className="font-display text-xl">Your referrals</h2>
                {referrals.length === 0 ? (
                  <p className="mt-2 text-sm text-muted-foreground">No referrals yet — share your code to start earning.</p>
                ) : (
                  <ul className="mt-4 divide-y divide-border text-sm">
                    {referrals.map((r) => (
                      <li key={r.id} className="flex items-center justify-between gap-3 py-3">
                        <span className="min-w-0 truncate">Friend joined {new Date(r.created_at).toLocaleDateString("en-IN")}</span>
                        <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-[11px] capitalize">{r.status} · ₹{r.reward_amount}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>

            <aside className="grid content-start gap-4">
              <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                <Users className="h-5 w-5 text-[color:var(--gold-deep)]" aria-hidden="true" />
                <p className="mt-2 font-display text-3xl">{referrals.length}</p>
                <p className="text-xs text-muted-foreground">Friends referred</p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                <Gift className="h-5 w-5 text-[color:var(--gold-deep)]" aria-hidden="true" />
                <p className="mt-2 font-display text-3xl">₹{earned}</p>
                <p className="text-xs text-muted-foreground">Rewards earned</p>
              </div>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
