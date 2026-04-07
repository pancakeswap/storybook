/**
 * Primitive color palette — raw values, never referenced by components.
 * These are the single source of truth for all color values in the system.
 * Semantic aliases live in theme.ts.
 */
export const colors = {
  gray: {
    50:  '#f0f3f9',
    100: '#d8dff0',
    200: '#b0bcd8',
    300: '#8898b8',
    400: '#60748a',
    500: '#4a5a72',
    600: '#2e3b52',
    700: '#1f2d42',
    800: '#161b27',
    850: '#131720',
    900: '#0d1117',
    950: '#090d13',
  },
  teal: {
    50:  '#e0fafb',
    100: '#b3f3f6',
    200: '#80ebf0',
    300: '#4de0e8',
    400: '#1ad4de',
    500: '#00c4cc',
    600: '#00a3aa',
    700: '#007d83',
    800: '#005760',
    900: '#003840',
  },
  green: {
    50:  '#e6faf3',
    100: '#b3f0d8',
    200: '#80e5bc',
    300: '#4ddba0',
    400: '#0ecb81',
    500: '#0ba86b',
    600: '#088255',
    700: '#065c3c',
    800: '#033827',
    900: '#011a12',
  },
  red: {
    50:  '#fff0f2',
    100: '#ffd1d8',
    200: '#ffaab6',
    300: '#ff7e90',
    400: '#f6465d',
    500: '#d93a4f',
    600: '#b02d3f',
    700: '#86202e',
    800: '#5c131e',
    900: '#33080f',
  },
  yellow: {
    400: '#f0b429',
    500: '#c99020',
    900: '#3d2b08',
  },
  violet: {
    400: '#9a85ff',
    500: '#7c6aff',
    600: '#5e4fe0',
    900: '#1a1440',
  },
} as const
