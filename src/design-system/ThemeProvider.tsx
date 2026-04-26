import { useState, useEffect } from 'react'
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes'
import { ChakraProvider } from '@chakra-ui/react'
import { system, type Theme } from './theme'

interface ThemeProviderProps {
  children: React.ReactNode
  /** Pin a specific theme — used by Storybook toolbar. */
  forcedTheme?: string
}

/**
 * Composes next-themes (manages .dark/.light class on <html>) with ChakraProvider.
 * Chakra v3 scopes semantic tokens to ".dark &" / ":root &, .light &" selectors,
 * so next-themes must use attribute="class" (not "data-theme").
 */
export function ThemeProvider({ children, forcedTheme }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      themes={['dark', 'light']}
      forcedTheme={forcedTheme}
    >
      <ChakraProvider value={system}>
        {children}
      </ChakraProvider>
    </NextThemesProvider>
  )
}

/**
 * Hook for components that need to read the current theme.
 * Reads directly from the HTML class (the same signal Chakra v3 CSS vars respond to),
 * avoiding next-themes' initial undefined resolvedTheme on first render.
 */
export function useTheme() {
  const { setTheme } = useNextTheme()

  const getTheme = (): Theme =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('light')
      ? 'light'
      : 'dark'

  const [theme, setThemeState] = useState<Theme>(getTheme)

  useEffect(() => {
    const obs = new MutationObserver(() => setThemeState(getTheme()))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return { theme, setTheme, toggleTheme }
}
