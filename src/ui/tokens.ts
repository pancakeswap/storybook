/**
 * Primitive color palette — raw values, never referenced by components.
 * These are the single source of truth for all color values in the system.
 * Semantic aliases live in theme.ts.
 *
 * Values mirror pancakeswap-perpetual-design-system/project/colors_and_type.css.
 */
export const colors = {
  /* ── Brand (cyan) ────────────────────────────────────────── */
  teal: {
    50:  '#EEFBFC',
    100: '#D7F5F8',
    200: '#A8EAF0',
    300: '#79DEE8',
    400: '#53DEE9',  // pcs-primary-bright
    500: '#1FC7D4',  // pcs-primary ★
    600: '#0098A1',  // pcs-primary-dark
    700: '#007981',
    800: '#005960',
    900: '#003B40',
  },

  /* ── Accent (violet) ─────────────────────────────────────── */
  violet: {
    400: '#A881FC',  // pcs-secondary-light / dark-mode accent
    500: '#7645D9',  // pcs-secondary ★
    600: '#5E2FAF',
    900: '#452A7A',
  },

  /* ── Long / success (green) ──────────────────────────────── */
  green: {
    50:  '#E8F7F1',
    100: '#D0F0E3',
    300: '#3DDBB5',  // pcs-success-bright (dark-mode positive)
    400: '#31D0AA',  // success ring accent (shadow tokens)
    500: '#129E7D',  // pcs-success ★
    600: '#0E7D63',
  },

  /* ── Short / failure (pink) ──────────────────────────────── */
  pink: {
    50:  '#FFF0F9',    // pcs-row-ask
    100: '#FFD9E0',    // pcs-failure-light
    200: '#FED2E8',    // pcs-row-ask-bar
    400: '#ED4B9E',    // pcs-failure ★
    500: '#D63B86',
    600: '#B3246B',
  },

  /* ── Amber (warning) ─────────────────────────────────────── */
  amber: {
    400: '#FFB237',  // pcs-warning ★
    500: '#D67E0A',  // darker amber (warning text on light)
  },

  /* ── BNB yellow ──────────────────────────────────────────── */
  binance: {
    500: '#F0B90B',
  },

  /* ── Neutral/text palette (deep purple family) ───────────── */
  /* "gray" here is actually PancakeSwap's purple-tinted neutrals */
  gray: {
    50:  '#FAF9FA',   // pcs-background
    100: '#F7F6FB',   // pcs-background-alt2
    150: '#EFF4F5',   // pcs-tertiary (off-white teal)
    200: '#EEEAF4',   // pcs-input / dropdown
    250: '#E7E3EB',   // pcs-card-border
    300: '#D7CAEC',   // pcs-input-secondary
    400: '#BDC2C4',   // pcs-text-disabled
    500: '#7A6EAA',   // pcs-text-subtle
    600: '#B8ADD2',   // dark-mode text-subtle
    700: '#55496E',   // dark-mode input-secondary
    750: '#383241',   // dark-mode card-border
    800: '#372F47',   // dark-mode input
    825: '#353547',   // dark-mode background-alt2
    850: '#27262C',   // dark-mode background-alt (card)
    900: '#1E1D20',   // dark-mode dropdown
    925: '#100C18',   // dark-mode dropdown-deep
    950: '#08060B',   // dark-mode background
  },

  /* ── Purple text (brand-toned text on light) ─────────────── */
  purple: {
    text:       '#280D5F',  // pcs-text (light-mode primary)
    textDark:   '#F4EEFF',  // pcs-text (dark-mode primary)
  },

  /* ── Order book tints ────────────────────────────────────── */
  bidLight:    '#EAFBF7',
  bidBarLight: '#BCEFE2',
  askLight:    '#FFF0F9',
  askBarLight: '#FED2E8',
  bidDark:     '#0C3A32',
  bidBarDark:  '#035345',
  askDark:     '#551146',
  askBarDark:  '#7B194D',
} as const
