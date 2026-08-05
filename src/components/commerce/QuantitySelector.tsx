/**
 * QuantitySelector — ISOLATED COMMERCE COMPONENT.
 * Shopify migration: bind `value` to the line item quantity input
 * (`name="quantity"` in product-form.liquid). Presentation is final.
 */
export type QuantitySelectorProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (quantity: number) => void;
  className?: string;
};

export function QuantitySelector({ value, min = 1, max = 10, onChange, className = "" }: QuantitySelectorProps) {
  return (
    <div className={`inline-flex items-center rounded-full border border-border ${className}`}>
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="h-11 w-11 rounded-l-full text-lg hover:bg-muted disabled:opacity-40"
      >
        −
      </button>
      <span aria-live="polite" className="w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="h-11 w-11 rounded-r-full text-lg hover:bg-muted disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}