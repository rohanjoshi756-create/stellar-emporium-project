/**
 * theme.ts — single theme config.
 *
 * The actual values live as CSS custom properties in `src/styles.css`
 * (`:root`). This file exposes them to JS/TS as `var(--token)` references so no
 * component ever needs an inline hex/oklch literal. When converting to a
 * Shopify theme these map to `assets/theme.css` variables + theme settings.
 */
export const theme = {
  colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
    card: "var(--card)",
    muted: "var(--muted)",
    mutedForeground: "var(--muted-foreground)",
    primary: "var(--primary)",
    primaryForeground: "var(--primary-foreground)",
    secondary: "var(--secondary)",
    accent: "var(--accent)",
    border: "var(--border)",
    gold: "var(--gold)",
    maroon: "var(--maroon)",
    whatsapp: "var(--whatsapp)",
  },
  gradients: {
    hero: "var(--gradient-hero)",
    gold: "var(--gradient-gold)",
  },
  shadows: {
    warm: "var(--shadow-warm)",
    soft: "var(--shadow-soft)",
  },
  fonts: {
    body: "var(--font-sans)",
    display: "var(--font-display)",
  },
  layout: {
    /** Shared max content width used by every section wrapper. */
    container: "mx-auto max-w-[1400px] px-3 sm:px-4",
    containerWide: "mx-auto max-w-[1400px] px-4 sm:px-6",
    containerNarrow: "mx-auto max-w-[900px] px-4",
    sectionPadding: "py-8 sm:py-12",
  },
} as const;

export type Theme = typeof theme;