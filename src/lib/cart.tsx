/**
 * Cart store — ISOLATED COMMERCE STATE.
 *
 * Persists lines in localStorage so an ad visitor never loses their cart.
 * Shopify migration: delete this file and let `cart.js` / the Storefront API
 * own the state; every consumer only reads the same shape (`variantId`,
 * `quantity`, `price`), so component markup stays untouched.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartLine } from "@/components/commerce/CartDrawer";

const STORAGE_KEY = "nakshatra:cart:v1";

type AddPayload = { variantId: string; quantity: number; price: number };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addLine: (line: CartLine) => void;
  addByPayload: (payload: AddPayload, meta: { title: string; image: string; imageAlt: string }) => void;
  updateQuantity: (payload: { variantId: string; quantity: number }) => void;
  removeLine: (payload: { variantId: string }) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);

  // Hydration-safe read: only touch storage after mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage full or blocked */
    }
  }, [lines]);

  const addLine = useCallback((line: CartLine) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.variantId === line.variantId);
      if (existing) {
        return prev.map((l) =>
          l.variantId === line.variantId ? { ...l, quantity: l.quantity + line.quantity } : l,
        );
      }
      return [...prev, line];
    });
    setOpen(true);
  }, []);

  const addByPayload = useCallback<CartContextValue["addByPayload"]>(
    (payload, meta) => addLine({ ...payload, ...meta }),
    [addLine],
  );

  const updateQuantity = useCallback(({ variantId, quantity }: { variantId: string; quantity: number }) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.variantId !== variantId)
        : prev.map((l) => (l.variantId === variantId ? { ...l, quantity } : l)),
    );
  }, []);

  const removeLine = useCallback(({ variantId }: { variantId: string }) => {
    setLines((prev) => prev.filter((l) => l.variantId !== variantId));
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((n, l) => n + l.quantity, 0);
    const subtotal = lines.reduce((n, l) => n + l.price * l.quantity, 0);
    return {
      lines,
      count,
      subtotal,
      isOpen,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      addLine,
      addByPayload,
      updateQuantity,
      removeLine,
      clear: () => setLines([]),
    };
  }, [lines, isOpen, addLine, addByPayload, updateQuantity, removeLine]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

/** Free-shipping threshold used by the cart progress bar (CRO: raises AOV). */
export const FREE_SHIPPING_THRESHOLD = 999;