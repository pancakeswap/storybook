/**
 * Minimal runtime-safe mobile UA sniff. Inlined to avoid depending on
 * `react-device-detect`, which is a CJS-only package and bundles a
 * `require('react')` call that rolldown's ESM output cannot resolve in
 * downstream consumers (Next.js webpack threw at runtime).
 *
 * Only used by `ModalV2` / `ModalContext` to choose which framer-motion
 * feature bundle to lazy-load — a misdetection just means we load a
 * slightly larger/smaller animation runtime, nothing user-visible breaks.
 * SSR returns `false`; the browser re-evaluates on mount.
 */
export const isMobile =
  typeof navigator !== 'undefined' &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
