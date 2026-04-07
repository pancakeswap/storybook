import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { colors } from './tokens'

// ── Primitive aliases ─────────────────────────────────────────
const teal   = colors.teal[500]    // #00c4cc  brand / teal
const violet = colors.violet[500]  // #7c6aff  accent / violet
const green  = colors.green[400]   // #0ecb81  long  / profit
const red    = colors.red[400]     // #f6465d  short / loss
const yellow = colors.yellow[400]  // #f0b429  warning

const config = defineConfig({
  cssVarsPrefix: 'pcs',

  globalCss: {
    // Gradient tokens — identical in both themes, injected once on the root
    '.perps-root': {
      '--pcs-gradient-brand': `linear-gradient(135deg,${teal},${violet})`,
      '--pcs-gradient-usdc':  'linear-gradient(135deg,#2775ca,#3a9fd8)',
      '--pcs-gradient-alp':   'linear-gradient(135deg,#1FC7D4,#A881FC)',
    },
  },

  theme: {
    tokens: {
      colors: {
        // ── Neutrals / gray ──────────────────────────────────
        'gray.50':  { value: colors.gray[50]  },
        'gray.100': { value: colors.gray[100] },
        'gray.200': { value: colors.gray[200] },
        'gray.300': { value: colors.gray[300] },
        'gray.400': { value: colors.gray[400] },
        'gray.500': { value: colors.gray[500] },
        'gray.600': { value: colors.gray[600] },
        'gray.700': { value: colors.gray[700] },
        'gray.800': { value: colors.gray[800] },
        'gray.850': { value: colors.gray[850] },
        'gray.900': { value: colors.gray[900] },
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

        // ── Green (long / profit) ─────────────────────────────
        'green.400': { value: colors.green[400] },
        'green.500': { value: colors.green[500] },

        // ── Red (short / loss) ────────────────────────────────
        'red.400': { value: colors.red[400] },
        'red.500': { value: colors.red[500] },

        // ── Yellow (warning) ──────────────────────────────────
        'yellow.400': { value: colors.yellow[400] },
        'yellow.500': { value: colors.yellow[500] },

        // ── Violet (accent) ───────────────────────────────────
        'violet.400': { value: colors.violet[400] },
        'violet.500': { value: colors.violet[500] },
        'violet.600': { value: colors.violet[600] },
        'violet.900': { value: colors.violet[900] },
      },
    },

    semanticTokens: {
      colors: {
        // ── Page background ───────────────────────────────────
        bg: {
          DEFAULT: {
            value: { _light: '#f0f2f5', _dark: '{colors.gray.900}' },
          },
        },

        // ── Surfaces ──────────────────────────────────────────
        surface: {
          DEFAULT: {
            value: { _light: '#ffffff', _dark: '{colors.gray.850}' },
          },
          card: {
            value: { _light: '#ffffff', _dark: '{colors.gray.800}' },
          },
          // Depressed background: alt-cards, inputs, tabs, dropdowns
          subtle: {
            value: { _light: '#f5f7fa', _dark: '#1c2233' },
          },
        },

        // ── Borders ───────────────────────────────────────────
        border: {
          DEFAULT: {
            value: { _light: '#e2e8f0', _dark: '#242d3f' },
          },
          hover: {
            value: { _light: '#c4cfdf', _dark: '#3a4560' },
          },
          focus: {
            value: { _light: teal, _dark: teal },
          },
        },

        // ── Text ──────────────────────────────────────────────
        text: {
          DEFAULT: {
            value: { _light: '{colors.gray.900}', _dark: '#e8edf5' },
          },
          muted: {
            value: { _light: '{colors.gray.500}', _dark: '#7d8ea8' },
          },
          // Placeholder / disabled / very dim
          subtle: {
            value: { _light: '{colors.gray.300}', _dark: '#3d4a63' },
          },
          'on-brand': {
            value: { _light: '#ffffff', _dark: '#191326' },
          },
          'on-long': {
            value: { _light: '#ffffff', _dark: '#191326' },
          },
          'on-short': {
            value: { _light: '#ffffff', _dark: '#191326' },
          },
        },

        // ── Brand (teal) ──────────────────────────────────────
        brand: {
          DEFAULT: {
            value: { _light: teal, _dark: teal },
          },
          muted: {
            value: { _light: 'rgba(0,196,204,0.12)', _dark: 'rgba(0,196,204,0.15)' },
          },
          glow: {
            value: { _light: 'rgba(0,196,204,0.20)', _dark: 'rgba(0,196,204,0.28)' },
          },
        },

        // ── Accent (violet) ───────────────────────────────────
        accent: {
          DEFAULT: {
            value: { _light: violet, _dark: violet },
          },
          muted: {
            value: { _light: 'rgba(124,106,255,0.10)', _dark: 'rgba(124,106,255,0.12)' },
          },
        },

        // ── Trading — long (green) ────────────────────────────
        long: {
          DEFAULT: {
            value: { _light: green, _dark: green },
          },
          muted: {
            value: { _light: 'rgba(14,203,129,0.12)', _dark: 'rgba(14,203,129,0.12)' },
          },
          bg: {
            value: { _light: 'rgba(14,203,129,0.06)', _dark: 'rgba(14,203,129,0.06)' },
          },
        },

        // ── Trading — short (red) ─────────────────────────────
        short: {
          DEFAULT: {
            value: { _light: red, _dark: red },
          },
          muted: {
            value: { _light: 'rgba(246,70,93,0.08)', _dark: 'rgba(246,70,93,0.08)' },
          },
          bg: {
            value: { _light: 'rgba(246,70,93,0.04)', _dark: 'rgba(246,70,93,0.04)' },
          },
        },

        // ── Status ────────────────────────────────────────────
        warning: {
          DEFAULT: {
            value: { _light: yellow, _dark: yellow },
          },
          muted: {
            value: { _light: 'rgba(240,180,41,0.12)', _dark: 'rgba(240,180,41,0.12)' },
          },
        },
        positive: {
          DEFAULT: {
            value: { _light: green, _dark: green },
          },
        },
        negative: {
          DEFAULT: {
            value: { _light: red, _dark: red },
          },
        },

        // ── Overlays ──────────────────────────────────────────
        overlay: {
          DEFAULT: {
            value: { _light: 'rgba(0,0,0,0.50)', _dark: 'rgba(0,0,0,0.72)' },
          },
        },
        'row-hover': {
          DEFAULT: {
            value: { _light: 'rgba(0,0,0,0.025)', _dark: 'rgba(255,255,255,0.018)' },
          },
        },

        // ── Notice / info callout ─────────────────────────────
        notice: {
          bg: {
            value: { _light: 'rgba(124,106,255,0.07)', _dark: 'rgba(124,106,255,0.08)' },
          },
          border: {
            value: { _light: 'rgba(124,106,255,0.22)', _dark: 'rgba(124,106,255,0.20)' },
          },
          text: {
            value: { _light: '{colors.violet.600}', _dark: '#a89cff' },
          },
        },
      },

      // ── Shadows — aligned with PancakeSwap UIKit shadow tokens ──
      //   Source: packages/uikit/src/tokens/index.ts (theme-agnostic,
      //   same values light & dark unless noted)
      shadows: {
        // ── Elevation ─────────────────────────────────────────────
        // level1 — card lift, active tab, subtle surfaces
        // PancakeSwap: shadows.level1
        card: {
          value: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
        },
        // Alias used by existing CSS references
        xs: {
          value: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
        },
        // tooltip — dropdowns, popovers, menus
        // PancakeSwap: shadows.tooltip
        dropdown: {
          value: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)',
        },
        // modal overlay shadow
        modal: {
          value: '0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)',
        },
        // button base inset (bottom edge depth)
        inset: {
          value: '0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset',
        },

        // ── State rings ───────────────────────────────────────────
        // active — brand/teal interactive focus (card, input)
        // PancakeSwap: shadows.active  (#0098A1 = teal-600)
        active: {
          value: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
        },
        // focus — violet keyboard-focus ring (buttons, form controls)
        // PancakeSwap: shadows.focus  (#7645D9 = violet)
        focus: {
          value: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
        },
        // success — positive / long confirmation
        // PancakeSwap: shadows.success  (#31D0AA = green)
        success: {
          value: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
        },
        // warning — caution state
        // PancakeSwap: shadows.warning
        warning: {
          value: '0px 0px 0px 1px #D67E0A, 0px 0px 0px 4px rgba(214, 126, 10, 0.2)',
        },
        // danger — destructive / short / error state
        // PancakeSwap: shadows.danger  (#ED4B9E = pink-red)
        danger: {
          value: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
        },

        // ── Trading-specific glows ────────────────────────────────
        // Kept as named aliases; values now follow PancakeSwap ring pattern
        'glow-brand': {
          value: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
        },
        'glow-long': {
          value: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
        },
        'glow-short': {
          value: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
        },
        'glow-focus': {
          value: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
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
    bg:        colors.gray[800],
    textColor: '#7d8ea8',
    border:    '#242d3f',
    gridLine:  'rgba(36,45,63,0.7)',
    crosshair: 'rgba(125,142,168,0.35)',
    long:      green,
    short:     red,
  },
  light: {
    bg:        '#ffffff',
    textColor: '#4a5a72',
    border:    '#e2e8f0',
    gridLine:  'rgba(226,232,240,0.8)',
    crosshair: 'rgba(74,90,114,0.30)',
    long:      green,
    short:     red,
  },
}
