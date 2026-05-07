/**
 * PCS design-system CSS-variable emitter.
 *
 * Replaces the previous Chakra-v3-based system. Emits `--pcs-colors-*` and
 * `--pcs-shadows-*` vars under `[data-theme="light"]` / `[data-theme="dark"]`
 * (matching `packages/uikit/src/css/vars.css.ts` in pancake-frontend) so the
 * same widgets can render under either repo's theme switching without
 * pulling in Chakra.
 *
 * `.light` / `.dark` class selectors are kept as co-selectors so storybook
 * stories that wrap a subtree in `<div className="light">` (e.g.
 * `SideBySideThemes`) continue to scope the vars locally.
 */

import { lightColors, darkColors, shadows } from './tokens'

export type Theme = 'dark' | 'light'

/**
 * camelCase → kebab-case for CSS var names, but DON'T split digit-letter
 * boundaries (`primary10` stays `primary10`, `cardBorder` → `card-border`,
 * `v2Inverse` → `v2-inverse`). Matches Chakra's previous output so
 * `pcsTheme` (styled-components) keeps resolving the same names.
 */
const cssName = (camel: string): string =>
  camel.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

/* ── Synthesized semantic colors ──────────────────────────────────
   Tokens that aren't in lightColors/darkColors but are referenced by
   widgets via `theme.colors.X`. Kept in one place for both modes. */

const synthColors = (mode: Theme) => {
  const c = mode === 'light' ? lightColors : darkColors
  const isLight = mode === 'light'
  return {
    primaryMuted:   isLight ? 'rgba(31,199,212,0.12)' : 'rgba(31,199,212,0.15)',
    primaryGlow:    isLight ? 'rgba(31,199,212,0.20)' : 'rgba(31,199,212,0.28)',
    secondaryMuted: isLight ? 'rgba(118,69,217,0.10)' : 'rgba(168,129,252,0.12)',
    successMuted:   'rgba(49,208,170,0.12)',
    successBg:      'rgba(49,208,170,0.06)',
    failureMuted:   'rgba(237,75,158,0.08)',
    failureBg:      'rgba(237,75,158,0.04)',
    warningMuted:   'rgba(255,178,55,0.12)',

    // Notice callout (referenced as `notice-bg`, `notice-border`, `notice-text`)
    'notice-bg':     isLight ? 'rgba(118,69,217,0.07)' : 'rgba(168,129,252,0.08)',
    'notice-border': isLight ? 'rgba(118,69,217,0.22)' : 'rgba(168,129,252,0.20)',
    'notice-text':   c.secondary,

    // Card-header gradient surfaces. Bubblegum stays light in both modes
    // (matches the previous Chakra config).
    'card-header':           c.gradientCardHeader,
    'card-header-blue':      c.gradientBlue,
    'card-header-bubblegum': lightColors.gradientBubblegum,
    'card-header-violet':    c.gradientViolet,
    'card-header-pale':      c.card,
  } as const
}

const synthShadows = (mode: Theme) => {
  const isLight = mode === 'light'
  return {
    card:      shadows.level1,
    xs:        shadows.level1,
    dropdown:  shadows.tooltip,
    modal:     '0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)',
    inset:     shadows.inset,
    inset2:    shadows.inset2,
    active:    shadows.active,
    focus:     shadows.focus,
    success:   shadows.success,
    warning:   shadows.warning,
    danger:    shadows.danger,
    'glow-brand': shadows.active,
    'glow-long':  shadows.success,
    'glow-short': shadows.danger,
    'glow-focus': shadows.focus,
    sunken:        isLight ? '0 2px 0 -1px rgba(0, 0, 0, 0.06) inset' : '0 2px 0 -1px rgba(0, 0, 0, 0.16) inset',
    'sunken-strong': isLight ? '0 2px 0 0 rgba(0, 0, 0, 0.06) inset' : '0 2px 0 0 rgba(0, 0, 0, 0.16) inset',
  } as const
}

/* ── Emit ─────────────────────────────────────────────────────────── */

const declarations = (prefix: string, entries: Record<string, string>): string =>
  Object.entries(entries)
    .map(([k, v]) => `  --pcs-${prefix}-${cssName(k)}: ${v};`)
    .join('\n')

const buildBlock = (mode: Theme): string => {
  const colors = { ...(mode === 'light' ? lightColors : darkColors), ...synthColors(mode) }
  const shadowMap = synthShadows(mode)
  return [declarations('colors', colors), declarations('shadows', shadowMap)].join('\n')
}

export const PCS_THEME_CSS = `
[data-theme="light"], .light {
${buildBlock('light')}
}
[data-theme="dark"], .dark {
${buildBlock('dark')}
}
.perps-root {
  --pcs-gradient-brand: ${lightColors.gradientPrimary};
  --pcs-gradient-usdc: linear-gradient(135deg,#2775ca,#3a9fd8);
  --pcs-gradient-alp: linear-gradient(135deg,#1FC7D4,#A881FC);
}
`.trim()

/* ── Chart tokens ─────────────────────────────────────────────────── */

export const chartTokens: Record<
  Theme,
  { bg: string; textColor: string; border: string; gridLine: string; crosshair: string; long: string; short: string }
> = {
  dark: {
    bg:        darkColors.card,
    textColor: darkColors.textSubtle,
    border:    darkColors.cardBorder,
    gridLine:  'rgba(56,50,65,0.7)',
    crosshair: 'rgba(184,173,210,0.35)',
    long:      darkColors.success,
    short:     darkColors.failure,
  },
  light: {
    bg:        lightColors.card,
    textColor: lightColors.textSubtle,
    border:    lightColors.cardBorder,
    gridLine:  'rgba(231,227,235,0.8)',
    crosshair: 'rgba(122,110,170,0.30)',
    long:      lightColors.success,
    short:     lightColors.failure,
  },
}
