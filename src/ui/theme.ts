import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { colors } from './tokens'

/**
 * Semantic theme for PancakeSwap Perpetual.
 *
 * All primitive values trace back to:
 *   pancakeswap-perpetual-design-system/project/colors_and_type.css
 *
 * The Chakra tokens here are emitted as `--pcs-colors-*` and
 * `--pcs-shadows-*` CSS variables (via `cssVarsPrefix: 'pcs'`),
 * which the component CSS layer consumes directly.
 */

// ── Primitive aliases ─────────────────────────────────────────
const teal       = colors.teal[500]    // #1FC7D4  brand
const tealDark   = colors.teal[600]    // #0098A1
const tealBright = colors.teal[400]    // #53DEE9
const violet     = colors.violet[500]  // #7645D9  accent
const violetLt   = colors.violet[400]  // #A881FC
const greenLong  = colors.green[500]   // #129E7D
const greenDark  = colors.green[300]   // #3DDBB5 (dark-mode positive)
const pinkShort  = colors.pink[400]    // #ED4B9E
const amber      = colors.amber[400]   // #FFB237
const amberDark  = colors.amber[500]   // #D67E0A

// Light-theme neutrals
const textLight       = colors.purple.text       // #280D5F
const textSubtleLight = colors.gray[500]         // #7A6EAA
const textDisabled    = colors.gray[400]         // #BDC2C4
const bgLight         = colors.gray[50]          // #FAF9FA
const surfaceLight    = '#FFFFFF'
const surfaceAltLight = colors.gray[100]         // #F7F6FB
const inputLight      = colors.gray[200]         // #EEEAF4
const borderLight     = colors.gray[250]         // #E7E3EB
const borderHoverLt   = colors.gray[300]         // #D7CAEC

// Dark-theme neutrals
const textDark        = colors.purple.textDark   // #F4EEFF
const textSubtleDark  = colors.gray[600]         // #B8ADD2
const bgDark          = colors.gray[950]         // #08060B
const surfaceDark     = colors.gray[850]         // #27262C
const surfaceAltDark  = colors.gray[825]         // #353547
const inputDark       = colors.gray[800]         // #372F47
const borderDark      = colors.gray[750]         // #383241
const borderHoverDk   = colors.gray[700]         // #55496E

const config = defineConfig({
  cssVarsPrefix: 'pcs',

  globalCss: {
    // Gradients — invariant across themes (pulled from colors_and_type.css)
    '.perps-root': {
      '--pcs-gradient-brand':        `linear-gradient(135deg,${teal},${violet})`,
      '--pcs-gradient-bubblegum':    'linear-gradient(139.73deg,#E5FDFF 0%,#F3EFFF 100%)',
      '--pcs-gradient-cake':         'linear-gradient(180deg,#53DEE9 0%,#1FC7D4 76%)',
      '--pcs-gradient-card-active':  'linear-gradient(180deg,#1FC7D4 0%,#7645D9 100%)',
      '--pcs-gradient-violet':       'linear-gradient(180deg,#7645D9 0%,#452A7A 100%)',
      '--pcs-gradient-dark-page':    'linear-gradient(139.73deg,#313D5C 0%,#3D2A54 100%)',
      '--pcs-gradient-inverted':     'linear-gradient(180deg,#53DEE9 0%,#7645D9 100%)',
      '--pcs-gradient-usdc':         'linear-gradient(135deg,#2775ca,#3a9fd8)',
      '--pcs-gradient-alp':          'linear-gradient(135deg,#1FC7D4,#A881FC)',
    },
  },

  theme: {
    tokens: {
      colors: {
        // ── Gray (purple-tinted neutrals) ────────────────────
        'gray.50':  { value: colors.gray[50]  },
        'gray.100': { value: colors.gray[100] },
        'gray.150': { value: colors.gray[150] },
        'gray.200': { value: colors.gray[200] },
        'gray.250': { value: colors.gray[250] },
        'gray.300': { value: colors.gray[300] },
        'gray.400': { value: colors.gray[400] },
        'gray.500': { value: colors.gray[500] },
        'gray.600': { value: colors.gray[600] },
        'gray.700': { value: colors.gray[700] },
        'gray.750': { value: colors.gray[750] },
        'gray.800': { value: colors.gray[800] },
        'gray.825': { value: colors.gray[825] },
        'gray.850': { value: colors.gray[850] },
        'gray.900': { value: colors.gray[900] },
        'gray.925': { value: colors.gray[925] },
        'gray.950': { value: colors.gray[950] },

        // ── Teal (brand) ─────────────────────────────────────
        'teal.50':  { value: colors.teal[50]  },
        'teal.100': { value: colors.teal[100] },
        'teal.200': { value: colors.teal[200] },
        'teal.300': { value: colors.teal[300] },
        'teal.400': { value: colors.teal[400] },
        'teal.500': { value: colors.teal[500] },
        'teal.600': { value: colors.teal[600] },
        'teal.700': { value: colors.teal[700] },
        'teal.800': { value: colors.teal[800] },
        'teal.900': { value: colors.teal[900] },

        // ── Violet (accent) ──────────────────────────────────
        'violet.400': { value: colors.violet[400] },
        'violet.500': { value: colors.violet[500] },
        'violet.600': { value: colors.violet[600] },
        'violet.900': { value: colors.violet[900] },

        // ── Green (long) ─────────────────────────────────────
        'green.50':  { value: colors.green[50]  },
        'green.100': { value: colors.green[100] },
        'green.300': { value: colors.green[300] },
        'green.400': { value: colors.green[400] },
        'green.500': { value: colors.green[500] },
        'green.600': { value: colors.green[600] },

        // ── Pink (short) ─────────────────────────────────────
        'pink.50':  { value: colors.pink[50]  },
        'pink.100': { value: colors.pink[100] },
        'pink.200': { value: colors.pink[200] },
        'pink.400': { value: colors.pink[400] },
        'pink.500': { value: colors.pink[500] },
        'pink.600': { value: colors.pink[600] },

        // Aliases retained for legacy code paths
        'red.400': { value: colors.pink[400] },
        'red.500': { value: colors.pink[500] },

        // ── Amber (warning) ──────────────────────────────────
        'amber.400': { value: colors.amber[400] },
        'amber.500': { value: colors.amber[500] },
        'yellow.400': { value: colors.amber[400] }, // legacy alias
        'yellow.500': { value: colors.amber[500] },

        // ── BNB yellow ───────────────────────────────────────
        'binance.500': { value: colors.binance[500] },
      },
    },

    semanticTokens: {
      colors: {
        // ── Page background ──────────────────────────────────
        bg: {
          DEFAULT: { value: { _light: bgLight, _dark: bgDark } },
        },

        // ── Surfaces ─────────────────────────────────────────
        surface: {
          DEFAULT: { value: { _light: surfaceLight, _dark: surfaceDark } },
          card:    { value: { _light: surfaceLight, _dark: surfaceDark } },
          // "subtle" = pcs-input / pcs-background-alt2 — used for inputs,
          // tabs backgrounds, alt cards
          subtle:  { value: { _light: inputLight,    _dark: inputDark } },
          alt:     { value: { _light: surfaceAltLight, _dark: surfaceAltDark } },
        },

        // ── Borders ──────────────────────────────────────────
        border: {
          DEFAULT: { value: { _light: borderLight,   _dark: borderDark } },
          hover:   { value: { _light: borderHoverLt, _dark: borderHoverDk } },
          focus:   { value: { _light: violet,        _dark: violet } },
        },

        // ── Text ─────────────────────────────────────────────
        text: {
          DEFAULT: { value: { _light: textLight,       _dark: textDark } },
          muted:   { value: { _light: textSubtleLight, _dark: textSubtleDark } },
          subtle:  { value: { _light: textDisabled,    _dark: colors.gray[700] } },
          'on-brand': { value: { _light: '#FFFFFF', _dark: '#FFFFFF' } },
          'on-long':  { value: { _light: '#FFFFFF', _dark: '#FFFFFF' } },
          'on-short': { value: { _light: '#FFFFFF', _dark: '#FFFFFF' } },
        },

        // ── Brand (cyan) ─────────────────────────────────────
        brand: {
          DEFAULT: { value: { _light: teal, _dark: teal } },
          muted:   { value: { _light: 'rgba(31,199,212,0.12)', _dark: 'rgba(31,199,212,0.16)' } },
          glow:    { value: { _light: 'rgba(31,199,212,0.20)', _dark: 'rgba(31,199,212,0.28)' } },
        },
        'brand-bright': { DEFAULT: { value: { _light: tealBright, _dark: tealBright } } },
        'brand-dark':   { DEFAULT: { value: { _light: tealDark,   _dark: tealDark } } },

        // ── Accent (violet) ──────────────────────────────────
        accent: {
          DEFAULT: { value: { _light: violet, _dark: violetLt } },
          muted:   { value: { _light: 'rgba(118,69,217,0.10)', _dark: 'rgba(168,129,252,0.14)' } },
        },

        // ── Long (green) ─────────────────────────────────────
        long: {
          DEFAULT: { value: { _light: greenLong, _dark: greenDark } },
          muted:   { value: { _light: 'rgba(18,158,125,0.12)', _dark: 'rgba(61,219,181,0.14)' } },
          bg:      { value: { _light: colors.bidLight,  _dark: colors.bidDark } },
        },
        'long-bar': { DEFAULT: { value: { _light: colors.bidBarLight, _dark: colors.bidBarDark } } },

        // ── Short (pink) ─────────────────────────────────────
        short: {
          DEFAULT: { value: { _light: pinkShort, _dark: pinkShort } },
          muted:   { value: { _light: 'rgba(237,75,158,0.10)', _dark: 'rgba(237,75,158,0.14)' } },
          bg:      { value: { _light: colors.askLight, _dark: colors.askDark } },
        },
        'short-bar': { DEFAULT: { value: { _light: colors.askBarLight, _dark: colors.askBarDark } } },

        // ── Status ───────────────────────────────────────────
        warning: {
          DEFAULT: { value: { _light: amber, _dark: amber } },
          muted:   { value: { _light: 'rgba(255,178,55,0.14)', _dark: 'rgba(255,178,55,0.18)' } },
        },
        'warning-text': { DEFAULT: { value: { _light: amberDark, _dark: amber } } },
        positive: { DEFAULT: { value: { _light: greenLong, _dark: greenDark } } },
        negative: { DEFAULT: { value: { _light: pinkShort, _dark: pinkShort } } },

        // ── Overlays ─────────────────────────────────────────
        overlay: {
          DEFAULT: { value: { _light: 'rgba(0,0,0,0.60)', _dark: 'rgba(0,0,0,0.72)' } },
        },
        'row-hover': {
          DEFAULT: { value: { _light: 'rgba(0,0,0,0.025)', _dark: 'rgba(255,255,255,0.02)' } },
        },

        // ── Order-book row tints ─────────────────────────────
        'row-bid':     { DEFAULT: { value: { _light: colors.bidLight,    _dark: colors.bidDark } } },
        'row-bid-bar': { DEFAULT: { value: { _light: colors.bidBarLight, _dark: colors.bidBarDark } } },
        'row-ask':     { DEFAULT: { value: { _light: colors.askLight,    _dark: colors.askDark } } },
        'row-ask-bar': { DEFAULT: { value: { _light: colors.askBarLight, _dark: colors.askBarDark } } },

        // ── Notice / info callout ────────────────────────────
        notice: {
          bg:     { value: { _light: 'rgba(118,69,217,0.08)',  _dark: 'rgba(168,129,252,0.10)' } },
          border: { value: { _light: 'rgba(118,69,217,0.24)',  _dark: 'rgba(168,129,252,0.22)' } },
          text:   { value: { _light: violet,                    _dark: violetLt } },
        },

        // ── Dropdown surface ─────────────────────────────────
        dropdown: {
          DEFAULT: { value: { _light: inputLight,  _dark: colors.gray[900] } },
        },
        'dropdown-deep': {
          DEFAULT: { value: { _light: borderLight, _dark: colors.gray[925] } },
        },

        // ── BNB network pill ─────────────────────────────────
        binance: {
          DEFAULT: { value: { _light: colors.binance[500], _dark: colors.binance[500] } },
        },
      },

      // ── Shadows — from pcs colors_and_type.css ───────────────
      shadows: {
        card: {
          value: {
            _light: '0px 2px 12px -8px rgba(25, 19, 38, 0.10), 0px 1px 1px rgba(25, 19, 38, 0.05)',
            _dark:  '0px 2px 12px -8px rgba(0, 0, 0, 0.60),    0px 1px 1px rgba(0, 0, 0, 0.40)',
          },
        },
        xs: {
          value: {
            _light: '0px 2px 12px -8px rgba(25, 19, 38, 0.10), 0px 1px 1px rgba(25, 19, 38, 0.05)',
            _dark:  '0px 2px 12px -8px rgba(0, 0, 0, 0.60),    0px 1px 1px rgba(0, 0, 0, 0.40)',
          },
        },
        raised: {
          value: {
            _light: '0px 8px 24px -12px rgba(25, 19, 38, 0.16)',
            _dark:  '0px 12px 32px -16px rgba(0, 0, 0, 0.80)',
          },
        },
        dropdown: {
          value: {
            _light: '0px 8px 24px -12px rgba(25, 19, 38, 0.16)',
            _dark:  '0px 12px 32px -16px rgba(0, 0, 0, 0.80)',
          },
        },
        modal: {
          value: {
            _light: '0px 20px 36px -8px rgba(14, 14, 44, 0.10), 0px 1px 1px rgba(0, 0, 0, 0.05)',
            _dark:  '0px 24px 48px -12px rgba(0, 0, 0, 0.70),   0px 1px 1px rgba(0, 0, 0, 0.40)',
          },
        },
        inset: {
          value: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.10)',
        },

        // ── Rings ──────────────────────────────────────────────
        focus: {
          value: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.20)',
        },
        active: {
          value: '0px 0px 0px 1px #0098A1, 0px 0px 0px 4px rgba(31, 199, 212, 0.20)',
        },
        success: {
          value: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.20)',
        },
        warning: {
          value: '0px 0px 0px 1px #FFB237, 0px 0px 0px 4px rgba(255, 178, 55, 0.20)',
        },
        danger: {
          value: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.20)',
        },

        // ── Trading-specific glows (aligned to ring pattern) ──
        'glow-brand': {
          value: '0px 0px 0px 1px #0098A1, 0px 0px 0px 4px rgba(31, 199, 212, 0.20)',
        },
        'glow-long': {
          value: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.20)',
        },
        'glow-short': {
          value: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.20)',
        },
        'glow-focus': {
          value: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.20)',
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)

// ── Chart tokens ──────────────────────────────────────────────
// lightweight-charts cannot consume CSS custom properties,
// so we keep a typed JS object for chart-specific theming.
export type Theme = 'dark' | 'light'

export const chartTokens: Record<Theme, {
  bg: string; textColor: string; border: string
  gridLine: string; crosshair: string; long: string; short: string
}> = {
  dark: {
    bg:        surfaceDark,
    textColor: textSubtleDark,
    border:    borderDark,
    gridLine:  'rgba(56,50,65,0.6)',
    crosshair: 'rgba(184,173,210,0.35)',
    long:      greenDark,
    short:     pinkShort,
  },
  light: {
    bg:        surfaceLight,
    textColor: textSubtleLight,
    border:    borderLight,
    gridLine:  'rgba(231,227,235,0.8)',
    crosshair: 'rgba(122,110,170,0.30)',
    long:      greenLong,
    short:     pinkShort,
  },
}
