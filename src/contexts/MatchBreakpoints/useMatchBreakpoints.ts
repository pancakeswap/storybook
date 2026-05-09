import { useEffect, useState } from "react";
import { breakpoints } from "../../design-system/breakpoints";

/**
 * Provider-free `useMatchBreakpoints`.
 *
 * Returns the same shape as the uikit hook
 * (`{ isMobile, isTablet, isDesktop, isXs, isSm, isMd, isLg, isXl, isXxl }`)
 * but each call subscribes directly to `window.matchMedia`. We don't
 * read from `MatchBreakpointsContext` because hosts that consume our
 * widget bundle (e.g. pancake-frontend) wrap their app in their own
 * uikit Provider — never ours — so a context-backed hook would always
 * fall back to its default `{ isMobile:false, ... }` and dispatch the
 * desktop variant on mobile viewports.
 *
 * `MatchBreakpointsProvider` is still exported (and used by the
 * storybook canvas decorator) for backward compat, but its state is
 * no longer read here.
 */
type State = { [key: string]: boolean };

export type BreakpointChecks = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} & State;

const mediaQueries: { [key: string]: string } = (() => {
  let prevMinWidth = 0;
  return Object.keys(breakpoints).reduce((accum, size, index) => {
    if (index === Object.keys(breakpoints).length - 1) {
      return { ...accum, [size]: `(min-width: ${prevMinWidth}px)` };
    }
    const minWidth = prevMinWidth;
    // @ts-ignore
    const breakpoint = breakpoints[size];
    prevMinWidth = breakpoint;
    return { ...accum, [size]: `(min-width: ${minWidth}px) and (max-width: ${breakpoint - 1}px)` };
  }, {});
})();

const getKey = (size: string) => `is${size.charAt(0).toUpperCase()}${size.slice(1)}`;

const readState = (): State =>
  Object.keys(mediaQueries).reduce<State>((accum, size) => {
    const key = getKey(size);
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return { ...accum, [key]: false };
    }
    return { ...accum, [key]: window.matchMedia(mediaQueries[size]).matches };
  }, {});

const withDerived = (state: State): BreakpointChecks => ({
  ...state,
  isMobile: Boolean(state.isXs || state.isSm),
  isTablet: Boolean(state.isMd || state.isLg),
  isDesktop: Boolean(state.isXl || state.isXxl),
});

const useMatchBreakpoints = (): BreakpointChecks => {
  const [state, setState] = useState<BreakpointChecks>(() => withDerived(readState()));

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return undefined;

    const handlers = Object.keys(mediaQueries).map((size) => {
      const mql = window.matchMedia(mediaQueries[size]);
      const handler = (e: MediaQueryListEvent) => {
        setState((prev) => withDerived({ ...prev, [getKey(size)]: e.matches }));
      };
      mql.addEventListener?.("change", handler);
      return () => mql.removeEventListener?.("change", handler);
    });

    // Re-sync once on mount in case state changed between SSR and hydration.
    setState(withDerived(readState()));

    return () => {
      handlers.forEach((unsubscribe) => unsubscribe());
    };
  }, []);

  return state;
};

export default useMatchBreakpoints;
