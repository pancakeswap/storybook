import { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes'
import { PCS_THEME_CSS, type Theme } from './theme'

interface ThemeProviderProps {
  children: React.ReactNode
  /** Pin a specific theme — used by Storybook toolbar. */
  forcedTheme?: string
}

/**
 * Composes next-themes (manages `data-theme="light|dark"` on `<html>`)
 * with an inline `<style>` tag that emits the `--pcs-colors-*` /
 * `--pcs-shadows-*` CSS variables for both modes. Mirrors the pattern
 * used by `packages/uikit/src/css/vars.css.ts` in pancake-frontend so
 * the same widgets work under either ThemeProvider.
 */
export function ThemeProvider({ children, forcedTheme }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      themes={['dark', 'light']}
      forcedTheme={forcedTheme}
    >
      {/* Inline style tag — also gets serialized in SSR if anyone
          server-renders a story. */}
      <style dangerouslySetInnerHTML={{ __html: PCS_THEME_CSS }} />
      {children}
    </NextThemesProvider>
  )
}

/**
 * Hook for components that need to read the current theme.
 * Reads directly from `<html data-theme>`, avoiding next-themes' initial
 * `undefined resolvedTheme` on first render.
 */
// eslint-disable-next-line react-refresh/only-export-components -- hook colocated with provider, intentional
export function useTheme() {
  const { setTheme } = useNextTheme()

  const getTheme = (): Theme =>
    typeof document !== 'undefined' &&
    document.documentElement.getAttribute('data-theme') === 'light'
      ? 'light'
      : 'dark'

  const [theme, setThemeState] = useState<Theme>(getTheme)

  useEffect(() => {
    const obs = new MutationObserver(() => setThemeState(getTheme()))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return { theme, setTheme, toggleTheme }
}
