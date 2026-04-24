import { lightColors, darkColors } from '../ui/tokens'

type Theme = 'light' | 'dark'

export const chartTokens: Record<Theme, {
  bg: string
  textColor: string
  border: string
  gridLine: string
  crosshair: string
  long: string
  short: string
}> = {
  dark: {
    bg:        darkColors.card,
    textColor: darkColors.textSubtle,
    border:    darkColors.cardBorder,
    gridLine:  'rgba(56,50,65,0.6)',
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
