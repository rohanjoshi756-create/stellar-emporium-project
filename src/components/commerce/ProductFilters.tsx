/**
 * ProductFilters — shared listing toolbar: sort, availability and price range.
 * Presentation + client-side list derivation only; on Shopify migration this maps
 * to collection `sort_by` + filter query params (`filter.v.price.gte` etc.).
 */
import { useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type SortKey = "featured" | "price-asc" | "price-desc" | "discount" | "rating";

const SORTS: Array<[SortKey, string]> = [
  ["featured", "Featured"],
  ["price-asc", "Price: low to high"],
  ["price-desc", "Price: high to low"],
  ["discount", "Biggest discount"],
  ["rating", "Top rated"],
];

const PRICE_RANGES: Array<{ id: string; label: string; min: number; max: number }> = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "u500", label: "Under ₹500", min: 0, max: 499 },
  { id: "500-1000", label: "₹500 – ₹1,000", min: 500, max: 1000 },
  { id: "1000-2500", label: "₹1,000 – ₹2,500", min: 1000, max: 2500 },
  { id: "2500+", label: "₹2,500 & above", min: 2500, max: Infinity },
];

export type ProductFiltersState = {
  sort: SortKey;
  setSort: (s: SortKey) => void;
  inStockOnly: boolean;
  setInStockOnly: (v: boolean) => void;
  priceId: string;
  setPriceId: (v: string) => void;
  onSale: boolean;
  setOnSale: (v: boolean) => void;
  visible: Product[];
  reset: () => void;
};

/** Derives the filtered + sorted list from a source list of products. */
export function useProductFilters(source: Product[]): ProductFiltersState {
  const [sort, setSort] = useState<SortKey>("featured");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceId, setPriceId] = useState("all");
  const [onSale, setOnSale] = useState(false);

  const visible = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceId) ?? PRICE_RANGES[0];
    const list = source.filter(
      (p) =>
        (inStockOnly ? p.available : true) &&
        (onSale ? p.discountPercent > 0 : true) &&
        p.price >= range.min &&
        p.price <= range.max,
    );
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "discount") sorted.sort((a, b) => b.discountPercent - a.discountPercent);
    if (sort === "rating") sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    return sorted;
  }, [source, sort, inStockOnly, priceId, onSale]);

  const reset = () => {
    setSort("featured");
    setInStockOnly(false);
    setPriceId("all");
    setOnSale(false);
  };

  return { sort, setSort, inStockOnly, setInStockOnly, priceId, setPriceId, onSale, setOnSale, visible, reset };
}

const chip = (active: boolean) =>
  `shrink-0 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-medium transition ${
    active
      ? "bg-foreground text-background"
      : "border border-border bg-secondary/60 text-muted-foreground hover:text-foreground"
  }`;

export function ProductFilters({ state, total }: { state: ProductFiltersState; total: number }) {
  const { sort, setSort, inStockOnly, setInStockOnly, priceId, setPriceId, onSale, setOnSale, visible, reset } = state;
  const dirty = sort !== "featured" || inStockOnly || priceId !== "all" || onSale;

  return (
    <div className="sticky top-0 z-20 -mx-3 sm:mx-0 mt-5 border-y border-border bg-background/90 px-3 py-2.5 backdrop-blur sm:rounded-2xl sm:border sm:px-4">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        <label className="sr-only" htmlFor="sort-select">Sort products</label>
        <select
          id="sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-foreground"
        >
          {SORTS.map(([value, label]) => (
            <option key={value} value={value}>Sort: {label}</option>
          ))}
        </select>

        <label className="sr-only" htmlFor="price-select">Filter by price</label>
        <select
          id="price-select"
          value={priceId}
          onChange={(e) => setPriceId(e.target.value)}
          className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-foreground"
        >
          {PRICE_RANGES.map((r) => (
            <option key={r.id} value={r.id}>{r.id === "all" ? "Price: all" : r.label}</option>
          ))}
        </select>

        <span aria-hidden="true" className="mx-1 hidden h-4 w-px shrink-0 bg-border sm:block" />

        <button type="button" onClick={() => setInStockOnly(!inStockOnly)} aria-pressed={inStockOnly} className={chip(inStockOnly)}>
          In stock only
        </button>
        <button type="button" onClick={() => setOnSale(!onSale)} aria-pressed={onSale} className={chip(onSale)}>
          On sale
        </button>
        {dirty && (
          <button type="button" onClick={reset} className="shrink-0 px-2 text-[11px] sm:text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground">
            Clear
          </button>
        )}

        <span className="ml-auto hidden shrink-0 pl-3 text-[11px] text-muted-foreground sm:block">
          {visible.length} of {total} shown
        </span>
      </div>
    </div>
  );
}
