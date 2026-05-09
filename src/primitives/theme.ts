/**
 * Styled-components theme object — provides the same shape PCS UIKit
 * components expect (theme.colors.*, theme.radii.*, theme.shadows.*, etc.)
 *
 * Values are CSS variable references so they auto-switch with light/dark.
 */

const v = (name: string) => `var(--pcs-colors-${name})`

export const pcsTheme = {
  colors: {
    primary:       v('primary'),
    primaryBright: v('primary-bright'),
    primaryDark:   v('primary-dark'),
    secondary:     v('secondary'),
    tertiary:      v('tertiary'),
    success:       v('success'),
    failure:       v('failure'),
    warning:       v('warning'),
    binance:       v('binance'),

    background:         v('background'),
    backgroundAlt:      v('background-alt'),
    backgroundDisabled: v('background-disabled'),
    backgroundHover:    v('background-hover'),
    backgroundTapped:   v('background-tapped'),
    backgroundOverlay:  v('background-overlay'),

    card:          v('card'),
    cardBorder:    v('card-border'),
    cardSecondary: v('card-secondary'),

    input:          v('input'),
    inputSecondary: v('input-secondary'),

    text:         v('text'),
    textSubtle:   v('text-subtle'),
    textDisabled: v('text-disabled'),

    contrast:         v('contrast'),
    invertedContrast: v('inverted-contrast'),

    disabled: v('disabled'),

    // Sub-scale colors referenced by button variants
    primary10: v('primary10'),
    primary20: v('primary20'),
    primary60: v('primary60'),

    // PnL / Long-Short tokens (theme-switch via CSS vars)
    positive10: v('positive10'),
    positive60: v('positive60'),
    negative60: v('negative60'),
    negativeSubtle: v('negative-subtle'),

    // Pure-inverse pair: v2Inverse = #000 light / #FFF dark; v2Default = #FFF light / #000 dark
    v2Inverse: v('v2-inverse'),
    v2Default: v('v2-default'),

    // Inverted high-contrast tooltip surface
    tooltipInverseBg:   v('tooltip-inverse-bg'),
    tooltipInverseText: v('tooltip-inverse-text'),

    // Wallet bucket chip (spot vs perp)
    walletChipSpotBg:     v('wallet-chip-spot-bg'),
    walletChipSpotBorder: v('wallet-chip-spot-border'),
    walletChipPerpBg:     v('wallet-chip-perp-bg'),
    walletChipPerpBorder: v('wallet-chip-perp-border'),

    // Timeframe surface (WalletPanel)
    timeframeBg:     v('timeframe-bg'),
    timeframeBorder: v('timeframe-border'),

    // Leverage-slider track (SimpleBetPanel)
    levTrackBg: v('lev-track-bg'),

    // inputPrimary (theme-switch)
    inputPrimary: v('input-primary'),

    gradientBubblegum: v('bubblegum'),

    // Ensure "white" and "transparent" resolve (styled-system looks these up in theme.colors)
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  radii: {
    small:   '4px',
    default: '16px',
    card:    '24px',
    circle:  '50%',
  },
  shadows: {
    level1:  'var(--pcs-shadows-card)',
    active:  'var(--pcs-shadows-active)',
    success: 'var(--pcs-shadows-success)',
    warning: 'var(--pcs-shadows-warning)',
    danger:  'var(--pcs-shadows-danger)',
    focus:   'var(--pcs-shadows-focus)',
    inset:   'var(--pcs-shadows-inset)',
    tooltip: 'var(--pcs-shadows-dropdown)',
    sunken:       'var(--pcs-shadows-sunken)',
    sunkenStrong: 'var(--pcs-shadows-sunken-strong)',
  },
  toggle: {
    handleBackground: v('background-alt'),
  },
  radio: {
    handleBackground: v('background-alt'),
  },
  card: {
    background: v('card'),
    boxShadow:       'var(--pcs-shadows-card)',
    boxShadowActive: 'var(--pcs-shadows-active)',
    boxShadowSuccess:'var(--pcs-shadows-success)',
    boxShadowWarning:'var(--pcs-shadows-warning)',
    cardHeaderBackground: {
      default:   v('card-header'),
      blue:      v('card-header-blue'),
      bubblegum: v('card-header-bubblegum'),
      violet:    v('card-header-violet'),
      pale:      v('card-header-pale'),
    },
    dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
  },
  alert: {
    background: v('background-alt'),
  },
  tooltip: {
    background: v('background-alt'),
    text:       v('text'),
    boxShadow:  'var(--pcs-shadows-dropdown)',
  },
  // styled-system needs breakpoints as an array for responsive props like p={["16px", null, "24px"]}
  breakpoints: ['576px', '852px', '968px', '1080px', '1200px'],
  zIndices: {
    dropdown: 10,
    ribbon:   9,
    modal:    100,
  },
  modal: {
    background: v('card'),
  },
  isDark: false, // not used at runtime — CSS vars handle theming
  mediaQueries: {
    xs: '',
    sm: '@media screen and (min-width: 576px)',
    md: '@media screen and (min-width: 852px)',
    lg: '@media screen and (min-width: 968px)',
    xl: '@media screen and (min-width: 1080px)',
    xxl:'@media screen and (min-width: 1200px)',
  },
}

export type PcsTheme = typeof pcsTheme
