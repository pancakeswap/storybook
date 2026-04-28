/**
 * Design-system layer — runtime API.
 *
 * Co-locates tokens, the Chakra theme, the ThemeProvider wrapper,
 * and breakpoints. The five `*.stories.tsx` siblings are
 * Storybook-only documentation and are not re-exported.
 */

// ── Tokens (raw values) ───────────────────────────────────────
export * from './tokens'

// ── Chakra theme + supporting types ───────────────────────────
export { system, chartTokens } from './theme'
export type { Theme } from './theme'

// ── React provider ────────────────────────────────────────────
export { ThemeProvider, useTheme } from './ThemeProvider'

// ── Breakpoints ───────────────────────────────────────────────
export { breakpoints, mediaQueries, breakpointNames } from './breakpoints'
export type { Breakpoint } from './breakpoints'
