import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { lightColors, darkColors, shadows } from './tokens'

const config = defineConfig({
  cssVarsPrefix: 'pcs',

  globalCss: {
    '.perps-root': {
      '--pcs-gradient-brand':  lightColors.gradientPrimary,
      '--pcs-gradient-usdc':   'linear-gradient(135deg,#2775ca,#3a9fd8)',
      '--pcs-gradient-alp':    'linear-gradient(135deg,#1FC7D4,#A881FC)',
    },
  },

  theme: {
    tokens: {
      colors: {
        /* ── Base / brand (theme-invariant) ────────────────── */
        'primary':       { value: lightColors.primary },
        'primaryBright': { value: lightColors.primaryBright },
        'primaryDark':   { value: lightColors.primaryDark },
        'success':       { value: lightColors.success },
        'failure':       { value: lightColors.failure },
        'warning':       { value: lightColors.warning },
        'binance':       { value: lightColors.binance },
        'gold':          { value: lightColors.gold },
        'silver':        { value: lightColors.silver },
        'bronze':        { value: lightColors.bronze },

        /* ── v2 Primary (teal) scale ──────────────────────── */
        'v2Primary.10':  { value: lightColors.v2Primary10 },
        'v2Primary.20':  { value: lightColors.v2Primary20 },
        'v2Primary.30':  { value: lightColors.v2Primary30 },
        'v2Primary.40':  { value: lightColors.v2Primary40 },
        'v2Primary.50':  { value: lightColors.v2Primary50 },
        'v2Primary.60':  { value: lightColors.v2Primary60 },
        'v2Primary.70':  { value: lightColors.v2Primary70 },
        'v2Primary.80':  { value: lightColors.v2Primary80 },
        'v2Primary.90':  { value: lightColors.v2Primary90 },
        'v2Primary.100': { value: lightColors.v2Primary100 },

        /* ── v2 Secondary (purple) scale ──────────────────── */
        'v2Secondary.10':  { value: lightColors.v2Secondary10 },
        'v2Secondary.20':  { value: lightColors.v2Secondary20 },
        'v2Secondary.30':  { value: lightColors.v2Secondary30 },
        'v2Secondary.40':  { value: lightColors.v2Secondary40 },
        'v2Secondary.50':  { value: lightColors.v2Secondary50 },
        'v2Secondary.60':  { value: lightColors.v2Secondary60 },
        'v2Secondary.70':  { value: lightColors.v2Secondary70 },
        'v2Secondary.80':  { value: lightColors.v2Secondary80 },
        'v2Secondary.90':  { value: lightColors.v2Secondary90 },
        'v2Secondary.100': { value: lightColors.v2Secondary100 },

        /* ── v2 Tertiary scale ────────────────────────────── */
        'v2Tertiary.10':  { value: lightColors.v2Tertiary10 },
        'v2Tertiary.20':  { value: lightColors.v2Tertiary20 },
        'v2Tertiary.30':  { value: lightColors.v2Tertiary30 },
        'v2Tertiary.40':  { value: lightColors.v2Tertiary40 },
        'v2Tertiary.50':  { value: lightColors.v2Tertiary50 },
        'v2Tertiary.60':  { value: lightColors.v2Tertiary60 },
        'v2Tertiary.70':  { value: lightColors.v2Tertiary70 },
        'v2Tertiary.80':  { value: lightColors.v2Tertiary80 },
        'v2Tertiary.90':  { value: lightColors.v2Tertiary90 },
        'v2Tertiary.100': { value: lightColors.v2Tertiary100 },

        /* ── v2 Positive (green) scale ────────────────────── */
        'v2Positive.10':  { value: lightColors.v2Positive10 },
        'v2Positive.20':  { value: lightColors.v2Positive20 },
        'v2Positive.30':  { value: lightColors.v2Positive30 },
        'v2Positive.40':  { value: lightColors.v2Positive40 },
        'v2Positive.50':  { value: lightColors.v2Positive50 },
        'v2Positive.60':  { value: lightColors.v2Positive60 },
        'v2Positive.70':  { value: lightColors.v2Positive70 },
        'v2Positive.80':  { value: lightColors.v2Positive80 },
        'v2Positive.90':  { value: lightColors.v2Positive90 },
        'v2Positive.100': { value: lightColors.v2Positive100 },

        /* ── v2 Warning scale ─────────────────────────────── */
        'v2Warning.10':  { value: lightColors.v2Warning10 },
        'v2Warning.20':  { value: lightColors.v2Warning20 },
        'v2Warning.30':  { value: lightColors.v2Warning30 },
        'v2Warning.40':  { value: lightColors.v2Warning40 },
        'v2Warning.50':  { value: lightColors.v2Warning50 },
        'v2Warning.60':  { value: lightColors.v2Warning60 },
        'v2Warning.70':  { value: lightColors.v2Warning70 },
        'v2Warning.80':  { value: lightColors.v2Warning80 },
        'v2Warning.90':  { value: lightColors.v2Warning90 },
        'v2Warning.100': { value: lightColors.v2Warning100 },

        /* ── v2 Destructive (pink) scale ──────────────────── */
        'v2Destructive.10':  { value: lightColors.v2Destructive10 },
        'v2Destructive.20':  { value: lightColors.v2Destructive20 },
        'v2Destructive.30':  { value: lightColors.v2Destructive30 },
        'v2Destructive.40':  { value: lightColors.v2Destructive40 },
        'v2Destructive.50':  { value: lightColors.v2Destructive50 },
        'v2Destructive.60':  { value: lightColors.v2Destructive60 },
        'v2Destructive.70':  { value: lightColors.v2Destructive70 },
        'v2Destructive.80':  { value: lightColors.v2Destructive80 },
        'v2Destructive.90':  { value: lightColors.v2Destructive90 },
        'v2Destructive.100': { value: lightColors.v2Destructive100 },

        /* ── v2 Disabled scale ────────────────────────────── */
        'v2Disabled.10':  { value: lightColors.v2Disabled10 },
        'v2Disabled.20':  { value: lightColors.v2Disabled20 },
        'v2Disabled.30':  { value: lightColors.v2Disabled30 },
        'v2Disabled.40':  { value: lightColors.v2Disabled40 },
        'v2Disabled.50':  { value: lightColors.v2Disabled50 },
        'v2Disabled.60':  { value: lightColors.v2Disabled60 },
        'v2Disabled.70':  { value: lightColors.v2Disabled70 },
        'v2Disabled.80':  { value: lightColors.v2Disabled80 },
        'v2Disabled.90':  { value: lightColors.v2Disabled90 },
        'v2Disabled.100': { value: lightColors.v2Disabled100 },

        /* ── v2 Decorative Blue scale ─────────────────────── */
        'v2Blue.10':  { value: lightColors.v2DecorativeBlue10 },
        'v2Blue.20':  { value: lightColors.v2DecorativeBlue20 },
        'v2Blue.30':  { value: lightColors.v2DecorativeBlue30 },
        'v2Blue.40':  { value: lightColors.v2DecorativeBlue40 },
        'v2Blue.50':  { value: lightColors.v2DecorativeBlue50 },
        'v2Blue.60':  { value: lightColors.v2DecorativeBlue60 },
        'v2Blue.70':  { value: lightColors.v2DecorativeBlue70 },
        'v2Blue.80':  { value: lightColors.v2DecorativeBlue80 },
        'v2Blue.90':  { value: lightColors.v2DecorativeBlue90 },
        'v2Blue.100': { value: lightColors.v2DecorativeBlue100 },
      },
    },

    semanticTokens: {
      colors: {
        /* ── Backgrounds (PCS: background*) ───────────────── */
        background:         { DEFAULT: { value: { _light: lightColors.background,   _dark: darkColors.background } } },
        backgroundPage:     { DEFAULT: { value: { _light: lightColors.backgroundPage, _dark: darkColors.backgroundPage } } },
        backgroundDisabled: { DEFAULT: { value: { _light: lightColors.backgroundDisabled, _dark: darkColors.backgroundDisabled } } },
        backgroundAlt:      { DEFAULT: { value: { _light: lightColors.backgroundAlt, _dark: darkColors.backgroundAlt } } },
        backgroundAlt2:     { DEFAULT: { value: { _light: lightColors.backgroundAlt2, _dark: darkColors.backgroundAlt2 } } },
        backgroundAlt3:     { DEFAULT: { value: { _light: lightColors.backgroundAlt3, _dark: darkColors.backgroundAlt3 } } },
        backgroundHover:    { DEFAULT: { value: { _light: lightColors.backgroundHover, _dark: darkColors.backgroundHover } } },
        backgroundTapped:   { DEFAULT: { value: { _light: lightColors.backgroundTapped, _dark: darkColors.backgroundTapped } } },
        backgroundOverlay:  { DEFAULT: { value: { _light: lightColors.backgroundOverlay, _dark: darkColors.backgroundOverlay } } },
        bubblegum:          { DEFAULT: { value: { _light: lightColors.bubblegum, _dark: darkColors.bubblegum } } },

        /* ── Cards & surfaces (PCS: card*, dropdown*) ─────── */
        card:          { DEFAULT: { value: { _light: lightColors.card, _dark: darkColors.card } } },
        cardSecondary: { DEFAULT: { value: { _light: lightColors.cardSecondary, _dark: darkColors.cardSecondary } } },
        cardBorder:    { DEFAULT: { value: { _light: lightColors.cardBorder, _dark: darkColors.cardBorder } } },
        dropdown:      { DEFAULT: { value: { _light: lightColors.dropdown, _dark: darkColors.dropdown } } },
        dropdownDeep:  { DEFAULT: { value: { _light: lightColors.dropdownDeep, _dark: darkColors.dropdownDeep } } },

        /* ── Inputs (PCS: input*) ─────────────────────────── */
        input:          { DEFAULT: { value: { _light: lightColors.input, _dark: darkColors.input } } },
        inputSecondary: { DEFAULT: { value: { _light: lightColors.inputSecondary, _dark: darkColors.inputSecondary } } },
        inputPrimary:   { DEFAULT: { value: { _light: lightColors.inputPrimary, _dark: darkColors.inputPrimary } } },

        /* ── Tertiary ─────────────────────────────────────── */
        tertiary:   { DEFAULT: { value: { _light: lightColors.tertiary, _dark: darkColors.tertiary } } },
        tertiary20: { DEFAULT: { value: { _light: lightColors.tertiary20, _dark: darkColors.tertiary20 } } },

        /* ── Text (PCS: text, textSubtle, textDisabled) ───── */
        text:         { DEFAULT: { value: { _light: lightColors.text, _dark: darkColors.text } } },
        textSubtle:   { DEFAULT: { value: { _light: lightColors.textSubtle, _dark: darkColors.textSubtle } } },
        textDisabled: { DEFAULT: { value: { _light: lightColors.textDisabled, _dark: darkColors.textDisabled } } },
        text99:       { DEFAULT: { value: { _light: lightColors.text99, _dark: darkColors.text99 } } },

        /* ── Contrast ─────────────────────────────────────── */
        contrast:         { DEFAULT: { value: { _light: lightColors.contrast, _dark: darkColors.contrast } } },
        invertedContrast: { DEFAULT: { value: { _light: lightColors.invertedContrast, _dark: darkColors.invertedContrast } } },

        /* ── Disabled ─────────────────────────────────────── */
        disabled: { DEFAULT: { value: { _light: lightColors.disabled, _dark: darkColors.disabled } } },

        /* ── Secondary (PCS: theme-switches) ──────────────── */
        secondary:   { DEFAULT: { value: { _light: lightColors.secondary, _dark: darkColors.secondary } } },
        secondary10: { DEFAULT: { value: { _light: lightColors.secondary10, _dark: darkColors.secondary10 } } },
        secondary20: { DEFAULT: { value: { _light: lightColors.secondary20, _dark: darkColors.secondary20 } } },
        secondary60: { DEFAULT: { value: { _light: lightColors.secondary60, _dark: darkColors.secondary60 } } },

        /* ── Primary sub-scales (theme-switches) ──────────── */
        primary10: { DEFAULT: { value: { _light: lightColors.primary10, _dark: darkColors.primary10 } } },
        primary20: { DEFAULT: { value: { _light: lightColors.primary20, _dark: darkColors.primary20 } } },
        primary60: { DEFAULT: { value: { _light: lightColors.primary60, _dark: darkColors.primary60 } } },

        /* ── Positive sub-scales (theme-switches) ─────────── */
        positive10: { DEFAULT: { value: { _light: lightColors.positive10, _dark: darkColors.positive10 } } },
        positive20: { DEFAULT: { value: { _light: lightColors.positive20, _dark: darkColors.positive20 } } },
        positive60: { DEFAULT: { value: { _light: lightColors.positive60, _dark: darkColors.positive60 } } },

        /* ── Destructive sub-scales (theme-switches) ──────── */
        destructive:   { DEFAULT: { value: { _light: lightColors.destructive, _dark: darkColors.destructive } } },
        destructive10: { DEFAULT: { value: { _light: lightColors.destructive10, _dark: darkColors.destructive10 } } },
        destructive20: { DEFAULT: { value: { _light: lightColors.destructive20, _dark: darkColors.destructive20 } } },
        destructive60: { DEFAULT: { value: { _light: lightColors.destructive60, _dark: darkColors.destructive60 } } },

        /* ── Warning sub-scales (theme-switches) ──────────── */
        warning10: { DEFAULT: { value: { _light: lightColors.warning10, _dark: darkColors.warning10 } } },
        warning20: { DEFAULT: { value: { _light: lightColors.warning20, _dark: darkColors.warning20 } } },
        warning60: { DEFAULT: { value: { _light: lightColors.warning60, _dark: darkColors.warning60 } } },

        /* ── Blue sub-scales (theme-switches) ─────────────── */
        blue10: { DEFAULT: { value: { _light: lightColors.blue10, _dark: darkColors.blue10 } } },
        blue20: { DEFAULT: { value: { _light: lightColors.blue20, _dark: darkColors.blue20 } } },
        blue60: { DEFAULT: { value: { _light: lightColors.blue60, _dark: darkColors.blue60 } } },

        /* ── Perps-specific extensions ────────────────────── */
        primaryMuted:   { DEFAULT: { value: { _light: 'rgba(31,199,212,0.12)', _dark: 'rgba(31,199,212,0.15)' } } },
        primaryGlow:    { DEFAULT: { value: { _light: 'rgba(31,199,212,0.20)', _dark: 'rgba(31,199,212,0.28)' } } },
        secondaryMuted: { DEFAULT: { value: { _light: 'rgba(118,69,217,0.10)', _dark: 'rgba(168,129,252,0.12)' } } },
        successMuted:   { DEFAULT: { value: { _light: 'rgba(49,208,170,0.12)', _dark: 'rgba(49,208,170,0.12)' } } },
        successBg:      { DEFAULT: { value: { _light: 'rgba(49,208,170,0.06)', _dark: 'rgba(49,208,170,0.06)' } } },
        failureMuted:   { DEFAULT: { value: { _light: 'rgba(237,75,158,0.08)', _dark: 'rgba(237,75,158,0.08)' } } },
        failureBg:      { DEFAULT: { value: { _light: 'rgba(237,75,158,0.04)', _dark: 'rgba(237,75,158,0.04)' } } },
        warningMuted:   { DEFAULT: { value: { _light: 'rgba(255,178,55,0.12)', _dark: 'rgba(255,178,55,0.12)' } } },

        /* ── Notice / info callout ────────────────────────── */
        notice: {
          bg:     { value: { _light: 'rgba(118,69,217,0.07)', _dark: 'rgba(168,129,252,0.08)' } },
          border: { value: { _light: 'rgba(118,69,217,0.22)', _dark: 'rgba(168,129,252,0.20)' } },
          text:   { value: { _light: lightColors.secondary, _dark: darkColors.secondary } },
        },

        /* ── Card header backgrounds ─────────────────────── */
        cardHeader: {
          DEFAULT:   { value: { _light: lightColors.gradientCardHeader, _dark: darkColors.gradientCardHeader } },
          blue:      { value: { _light: lightColors.gradientBlue, _dark: darkColors.gradientBlue } },
          bubblegum: { value: { _light: lightColors.gradientBubblegum, _dark: lightColors.gradientBubblegum } },
          violet:    { value: { _light: lightColors.gradientViolet, _dark: darkColors.gradientViolet } },
          pale:      { value: { _light: lightColors.card, _dark: darkColors.card } },
        },
      },

      /* ── Shadows ────────────────────────────────────────── */
      shadows: {
        card:     { value: shadows.level1 },
        xs:       { value: shadows.level1 },
        dropdown: { value: shadows.tooltip },
        modal:    { value: '0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)' },
        inset:    { value: shadows.inset },
        inset2:   { value: shadows.inset2 },
        active:   { value: shadows.active },
        focus:    { value: shadows.focus },
        success:  { value: shadows.success },
        warning:  { value: shadows.warning },
        danger:   { value: shadows.danger },
        'glow-brand': { value: shadows.active },
        'glow-long':  { value: shadows.success },
        'glow-short': { value: shadows.danger },
        'glow-focus': { value: shadows.focus },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)

/* ── Chart tokens ─────────────────────────────────────────── */
export type Theme = 'dark' | 'light'

export const chartTokens: Record<Theme, {
  bg: string; textColor: string; border: string
  gridLine: string; crosshair: string; long: string; short: string
}> = {
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
