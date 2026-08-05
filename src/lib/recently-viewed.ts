/**
 * Recently viewed products — localStorage ring buffer of product handles.
 * Shopify migration: same logic ships in `assets/theme.js`.
 */
import { useEffect, useState } from "react";

const KEY = "nakshatra:recently-viewed:v1";
const MAX = 12;

function read(): string[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

/** Records `handle` as viewed and returns the previously viewed handles. */
export function useRecentlyViewed(handle?: string): string[] {
  const [handles, setHandles] = useState<string[]>([]);

  useEffect(() => {
    const previous = read();
    setHandles(previous.filter((h) => h !== handle));
    if (!handle) return;
    const next = [handle, ...previous.filter((h) => h !== handle)].slice(0, MAX);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, [handle]);

  return handles;
}