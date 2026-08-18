/**
 * Auth context — Lovable Cloud phone-OTP login state plus the global login popup.
 * Keeps all session logic in one isolated module.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { LoginModal } from "@/components/auth/LoginModal";

type AuthValue = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setLoading(false);
      if (s) setLoginOpen(false);
    });
    void supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // Capture ?ref=CODE from referral links so the signup form can pre-fill it.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ref = new URLSearchParams(window.location.search).get("ref");
    if (ref) window.localStorage.setItem("nakshatra_ref", ref.toUpperCase());
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  const value = useMemo<AuthValue>(
    () => ({
      session,
      user: session?.user ?? null,
      loading,
      openLogin: () => setLoginOpen(true),
      closeLogin: () => setLoginOpen(false),
      signOut,
    }),
    [session, loading, signOut],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
