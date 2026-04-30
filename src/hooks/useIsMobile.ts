import { useEffect, useState } from 'react'

/**
 * Mobile breakpoint matching the storybook design-system semantics
 * (`isMobile = isXs || isSm`, i.e. width < 576px → max-width 575px).
 *
 * Why this exists instead of `useMatchBreakpoints()`:
 * the context-based hook reads from `MatchBreakpointsContext`, whose
 * Provider lives in this bundle. Consumers like pancake-frontend wrap
 * their app in their own uikit Provider but never wrap our bundle's
 * Provider, so the context falls back to its default `{isMobile:false}`
 * and the widget always renders the desktop variant. A direct
 * `window.matchMedia` check has no Provider dependency and works in
 * any host.
 */
const QUERY = '(max-width: 575px)'

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
    return window.matchMedia(QUERY).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined
    const mql = window.matchMedia(QUERY)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    setIsMobile(mql.matches)
    mql.addEventListener?.('change', onChange)
    return () => mql.removeEventListener?.('change', onChange)
  }, [])

  return isMobile
}

export default useIsMobile
