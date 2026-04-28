/**
 * PancakeSwap Design System — Complete Token Set
 *
 * Faithfully ported from packages/uikit/src/tokens/
 *   - colors.ts    (baseColors, additionalColors, lightColors, darkColors)
 *   - v2Colors.ts  (lightColorsV2, darkColorsV2)
 *   - index.ts     (shadows, fonts, space, radii, fontSizes, borderWidths)
 */

/* ════════════════════════════════════════════════════════════════
   V2 COLOR SCALES
   ════════════════════════════════════════════════════════════════ */

export const lightColorsV2 = {
  v2Default: '#FFFFFF',
  v2Inverse: '#000000',

  v2Primary100: '#081F20',
  v2Primary90:  '#093134',
  v2Primary80:  '#094D53',
  v2Primary70:  '#00727A',
  v2Primary60:  '#02919D',
  v2Primary50:  '#27B9C4',
  v2Primary40:  '#48D0DB',
  v2Primary30:  '#86DDE4',
  v2Primary20:  '#C1EDF0',
  v2Primary10:  '#EEFBFC',

  v2Secondary100: '#191227',
  v2Secondary90:  '#272237',
  v2Secondary80:  '#403351',
  v2Secondary70:  '#5B4776',
  v2Secondary60:  '#756595',
  v2Secondary50:  '#9383B4',
  v2Secondary40:  '#ADA3C2',
  v2Secondary30:  '#CAC2DB',
  v2Secondary20:  '#E8E2EE',
  v2Secondary10:  '#F6F4FB',

  v2Tertiary100: '#122127',
  v2Tertiary90:  '#223537',
  v2Tertiary80:  '#334D51',
  v2Tertiary70:  '#477176',
  v2Tertiary60:  '#659095',
  v2Tertiary50:  '#83B2B4',
  v2Tertiary40:  '#A3BFC2',
  v2Tertiary30:  '#C2D8DB',
  v2Tertiary20:  '#E2EDEE',
  v2Tertiary10:  '#F4FAFB',

  v2Positive100: '#01211B',
  v2Positive90:  '#02382E',
  v2Positive80:  '#035345',
  v2Positive70:  '#067962',
  v2Positive60:  '#129E7D',
  v2Positive50:  '#1BC59C',
  v2Positive40:  '#3DDBB5',
  v2Positive30:  '#86E7CF',
  v2Positive20:  '#BCEFE2',
  v2Positive10:  '#EAFBF7',

  v2Warning100: '#281300',
  v2Warning90:  '#3D2100',
  v2Warning80:  '#5B3400',
  v2Warning70:  '#824903',
  v2Warning60:  '#AB6502',
  v2Warning50:  '#D67E0A',
  v2Warning40:  '#FF9D00',
  v2Warning30:  '#FC9D31',
  v2Warning20:  '#F9D9B8',
  v2Warning10:  '#FBF2E7',

  v2Destructive100: '#2C0C20',
  v2Destructive90:  '#551146',
  v2Destructive80:  '#7B194D',
  v2Destructive70:  '#AF287E',
  v2Destructive60:  '#D14293',
  v2Destructive50:  '#F35EAB',
  v2Destructive40:  '#FB7EC1',
  v2Destructive30:  '#F9AED7',
  v2Destructive20:  '#FED2E8',
  v2Destructive10:  '#FFF0F9',

  v2Disabled100: '#161616',
  v2Disabled90:  '#262626',
  v2Disabled80:  '#393939',
  v2Disabled70:  '#525252',
  v2Disabled60:  '#6F6F6F',
  v2Disabled50:  '#8D8D8D',
  v2Disabled40:  '#A8A8A8',
  v2Disabled30:  '#C6C6C6',
  v2Disabled20:  '#E0E0E0',
  v2Disabled10:  '#F7F7F7',

  v2DecorativeBlue100: '#041B2F',
  v2DecorativeBlue90:  '#092F4E',
  v2DecorativeBlue80:  '#0E4572',
  v2DecorativeBlue70:  '#1862A0',
  v2DecorativeBlue60:  '#2882CC',
  v2DecorativeBlue50:  '#4BA0E7',
  v2DecorativeBlue40:  '#72B8F1',
  v2DecorativeBlue30:  '#9ECEF5',
  v2DecorativeBlue20:  '#C3E5FC',
  v2DecorativeBlue10:  '#ECF6FE',
} as const

export const darkColorsV2 = {
  v2Default: '#000000',
  v2Inverse: '#FFFFFF',

  v2Primary100: '#EEFBFC',
  v2Primary90:  '#C1EDF0',
  v2Primary80:  '#86DDE4',
  v2Primary70:  '#48D0DB',
  v2Primary60:  '#48D0DB',
  v2Primary50:  '#27B9C4',
  v2Primary40:  '#00727A',
  v2Primary30:  '#00727A',
  v2Primary20:  '#094D53',
  v2Primary10:  '#13393C',

  v2Secondary100: '#F6F4FB',
  v2Secondary90:  '#E8E2EE',
  v2Secondary80:  '#CAC2DB',
  v2Secondary70:  '#ADA3C2',
  v2Secondary60:  '#9383B4',
  v2Secondary50:  '#756595',
  v2Secondary40:  '#5B4776',
  v2Secondary30:  '#5B4776',
  v2Secondary20:  '#4B3B5F',
  v2Secondary10:  '#322B48',

  v2Tertiary100: '#E0E0FF',
  v2Tertiary90:  '#CDCDF5',
  v2Tertiary80:  '#A0A0D7',
  v2Tertiary70:  '#9191C5',
  v2Tertiary60:  '#8989B8',
  v2Tertiary50:  '#7979A2',
  v2Tertiary40:  '#68688B',
  v2Tertiary30:  '#575775',
  v2Tertiary20:  '#44445B',
  v2Tertiary10:  '#223537',

  v2Positive100: '#EAFBF7',
  v2Positive90:  '#BCEFE2',
  v2Positive80:  '#86E7CF',
  v2Positive70:  '#3DDBB5',
  v2Positive60:  '#3DDBB5',
  v2Positive50:  '#129E7D',
  v2Positive40:  '#067962',
  v2Positive30:  '#067962',
  v2Positive20:  '#035345',
  v2Positive10:  '#0C3A32',

  v2Warning100: '#FBF2E7',
  v2Warning90:  '#F9D9B8',
  v2Warning80:  '#FC9D31',
  v2Warning70:  '#FF9D00',
  v2Warning60:  '#D67E0A',
  v2Warning50:  '#FF9D00',
  v2Warning40:  '#9C5600',
  v2Warning30:  '#9C5600',
  v2Warning20:  '#754300',
  v2Warning10:  '#452E14',

  v2Destructive100: '#FFF0F9',
  v2Destructive90:  '#FED2E8',
  v2Destructive80:  '#F9AED7',
  v2Destructive70:  '#FB7EC1',
  v2Destructive60:  '#FB7EC1',
  v2Destructive50:  '#D14293',
  v2Destructive40:  '#AF287E',
  v2Destructive30:  '#AF287E',
  v2Destructive20:  '#7B194D',
  v2Destructive10:  '#551146',

  v2Disabled100: '#F6F1FF',
  v2Disabled90:  '#DDD5EB',
  v2Disabled80:  '#C3B8D7',
  v2Disabled70:  '#9992A8',
  v2Disabled60:  '#807A8B',
  v2Disabled50:  '#65616E',
  v2Disabled40:  '#57535E',
  v2Disabled30:  '#46434C',
  v2Disabled20:  '#39373E',
  v2Disabled10:  '#323037',

  v2DecorativeBlue100: '#ECF6FE',
  v2DecorativeBlue90:  '#C3E5FC',
  v2DecorativeBlue80:  '#9ECEF5',
  v2DecorativeBlue70:  '#72B8F1',
  v2DecorativeBlue60:  '#72B8F1',
  v2DecorativeBlue50:  '#4BA0E7',
  v2DecorativeBlue40:  '#1862A0',
  v2DecorativeBlue30:  '#1862A0',
  v2DecorativeBlue20:  '#0E4572',
  v2DecorativeBlue10:  '#0B3557',
} as const

/* ════════════════════════════════════════════════════════════════
   BASE & ADDITIONAL COLORS
   ════════════════════════════════════════════════════════════════ */

export const baseColors = {
  white:        'white',
  failure:      '#ED4B9E',
  failure33:    '#ED4B9E33',
  primary:      '#1FC7D4',
  primary0f:    '#1FC7D40f',
  primary3D:    '#1FC7D43D',
  primaryBright: '#53DEE9',
  primaryDark:  '#0098A1',
  success:      '#31D0AA',
  success19:    '#31D0AA19',
  warning:      '#FFB237',
  warning2D:    '#ED4B9E2D',
  warning33:    '#ED4B9E33',
} as const

export const additionalColors = {
  binance: '#F0B90B',
  overlay: '#452a7a',
  gold:    '#FFC700',
  silver:  '#B2B2B2',
  bronze:  '#E7974D',
  yellow:  '#D67E0A',
} as const

/* ════════════════════════════════════════════════════════════════
   THEME-SPECIFIC COLOR SETS  (light / dark)
   ════════════════════════════════════════════════════════════════ */

export const lightColors = {
  ...baseColors,
  ...additionalColors,
  ...lightColorsV2,

  blue10: '#ECF6FE',
  blue20: '#C3E5FC',
  blue60: '#2882CC',

  secondary:   '#7645D9',
  secondary10: '#F6F4FB',
  secondary20: '#E8E2EE',
  secondary60: '#756595',
  secondary80: '#7645D980',

  background:          '#FAF9FA',
  backgroundDisabled:  '#E9EAEB',
  backgroundAlt:       '#FFFFFF',
  backgroundAlt2:      'rgba(255, 255, 255, 0.7)',
  backgroundAlt3:      'rgba(255, 255, 255, 0.5)',
  backgroundHover:     'rgba(0, 0, 0, 0.02)',
  backgroundTapped:    'rgba(0, 0, 0, 0.04)',
  backgroundOverlay:   'rgba(40, 13, 95, 0.60)',
  backgroundBubblegum: 'linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)',
  backgroundPage:      '#FAF9FA',

  card:          '#FFFFFF',
  cardSecondary: '#FAF9FA',
  cardBorder:    '#E7E3EB',

  contrast:         '#191326',
  dropdown:         '#F6F6F6',
  dropdownDeep:     '#EEEEEE',
  invertedContrast: '#FFFFFF',

  input:          '#eeeaf4',
  inputSecondary: '#d7caec',
  inputPrimary:   '#EEEAF4',

  tertiary:       '#EFF4F5',
  tertiary20:     '#E2EDEE',
  tertiaryPale20: '#E2EDEE',

  text:         '#280D5F',
  text99:       '#280D5F99',
  textDisabled: '#BDC2C4',
  textSubtle:   '#7A6EAA',

  disabled: '#E9EAEB',

  primary10: '#EEFBFC',
  primary20: '#C1EDF0',
  primary60: '#02919D',

  positive10: '#EAFBF7',
  positive20: '#BCEFE2',
  positive60: '#129E7D',

  destructive10: '#FFF0F9',
  destructive20: '#FED2E8',
  destructive60: '#D14293',
  destructive:   '#ED4B9E',

  warning10: '#FBF2E7',
  warning20: '#F9D9B8',
  warning60: '#AB6502',

  bubblegum: '#F3EFFF',

  gradientPrimary:         'linear-gradient(228.54deg, #1FC7D4 -13.69%, #7645D9 91.33%)',
  gradientBubblegum:       'linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)',
  gradientInverseBubblegum:'linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)',
  gradientCardHeader:      'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
  gradientBlue:            'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
  gradientViolet:          'linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)',
  gradientVioletAlt:       'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)',
  gradientGold:            'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  gradientBold:            'linear-gradient(#53DEE9, #7645D9)',
} as const

export const darkColors = {
  ...baseColors,
  ...additionalColors,
  ...darkColorsV2,

  blue10: '#0B3557',
  blue20: '#0E4572',
  blue60: '#72B8F1',

  secondary:   '#A881FC',
  secondary10: '#322B48',
  secondary20: '#4B3B5F',
  secondary60: '#756595',
  secondary80: '#A881FC80',

  background:          '#08060B',
  backgroundDisabled:  '#3c3742',
  backgroundAlt:       '#27262c',
  backgroundAlt2:      'rgba(39, 38, 44, 0.7)',
  backgroundAlt3:      'rgba(0, 0, 0, 0.2)',
  backgroundHover:     'rgba(0, 0, 0, 0.04)',
  backgroundTapped:    'rgba(0, 0, 0, 0.08)',
  backgroundOverlay:   'rgba(68, 62, 88, 0.60)',
  backgroundBubblegum: '#160F1E',
  backgroundPage:      '#160F1E',

  card:          '#27262C',
  cardSecondary: '#18171A',
  cardBorder:    '#383241',

  contrast:         '#FFFFFF',
  dropdown:         '#1E1D20',
  dropdownDeep:     '#100C18',
  invertedContrast: '#191326',

  input:          '#372F47',
  inputSecondary: '#262130',
  inputPrimary:   '#372F47',

  primaryDark: '#0098A1',

  tertiary:       '#353547',
  tertiary20:     '#44445B',
  tertiaryPale20: '#44445B',

  text:         '#F4EEFF',
  text99:       '#F4EEFF99',
  textDisabled: '#666171',
  textSubtle:   '#B8ADD2',

  disabled: '#524B63',

  primary10: '#13393C',
  primary20: '#094D53',
  primary60: '#48D0DB',

  positive10: '#0C3A32',
  positive20: '#035345',
  positive60: '#3DDBB5',

  destructive10: '#551146',
  destructive20: '#7B194D',
  destructive60: '#FB7EC1',
  destructive:   '#ED4B9E',

  warning10: '#452E14',
  warning20: '#754300',
  warning60: '#D67E0A',

  bubblegum: '#160F1E',

  gradientPrimary:         'linear-gradient(228.54deg, #1FC7D4 -13.69%, #9A6AFF 91.33%)',
  gradientBubblegum:       'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
  gradientInverseBubblegum:'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
  gradientCardHeader:      'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
  gradientBlue:            'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
  gradientViolet:          'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
  gradientVioletAlt:       'linear-gradient(180deg, #434575 0%, #66578D 100%)',
  gradientGold:            'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  gradientBold:            'linear-gradient(#53DEE9, #9A6AFF)',
} as const

/* ════════════════════════════════════════════════════════════════
   SHADOWS
   ════════════════════════════════════════════════════════════════ */

export const shadows = {
  level1:  '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  active:  '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
  success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
  warning: '0px 0px 0px 1px #D67E0A, 0px 0px 0px 4px rgba(214, 126, 10, 0.2)',
  danger:  '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
  focus:   '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
  inset:   'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
  inset2:  'inset 0px 2px 0px -1px rgba(0, 0, 0, 0.06)',
  tooltip: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)',
} as const

/* ════════════════════════════════════════════════════════════════
   AGGREGATED TOKENS
   ════════════════════════════════════════════════════════════════ */

export const tokens = {
  colors: {
    light: lightColors,
    dark:  darkColors,
  },
  fonts: {
    normal: "'Kanit', sans-serif",
    mono:   'SFMono, ui-monospace, monospace',
  },
  space: {
    '0px':  '0px',
    '1rem': '1rem',
    '1px':  '1px',
    '2px':  '2px',
    '4px':  '4px',
    '6px':  '6px',
    '8px':  '8px',
    '12px': '12px',
    '14px': '14px',
    '16px': '16px',
    '20px': '20px',
    '24px': '24px',
    '32px': '32px',
    '48px': '48px',
    '56px': '56px',
    '64px': '64px',
  },
  borderWidths: {
    '0': '0px',
    '1': '1px',
    '2': '2px',
  },
  radii: {
    '0':     '0px',
    '8px':   '8px',
    '12px':  '12px',
    '20px':  '20px',
    '32px':  '32px',
    small:   '4px',
    default: '16px',
    card:    '24px',
    circle:  '50%',
  },
  fontSizes: {
    '10px': '10px',
    '12px': '12px',
    '14px': '14px',
    '16px': '16px',
    '20px': '20px',
    '40px': '40px',
  },
  shadows,
} as const

export type Mode = 'light' | 'dark'
export type Tokens = typeof tokens
