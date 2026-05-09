/**
 * useTooltip — type surface
 *
 * Mirrors `@pancakeswap/uikit`'s `useTooltip` API so widgets ported
 * across both repos can swap implementations without changing call
 * sites. Internally backed by `@radix-ui/react-popover` (Radix already
 * powers DismissableLayer in this lib), so the popper-specific options
 * collapse to the closest Radix equivalents:
 *
 *   placement      ──▶  side + align
 *   tooltipOffset  ──▶  sideOffset, alignOffset
 *   tooltipPadding ──▶  collisionPadding
 *   strategy       ──▶  not exposed (Radix handles fixed/absolute)
 *
 * `Placement` is the popper.js 12-position string ("top", "top-start",
 * "auto-end", …) — kept as a string union so consumers don't need to
 * install @popperjs/core.
 */

import type { ReactNode } from 'react'

export type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export type TriggerType = 'click' | 'hover' | 'focus'

export interface TooltipOptions {
  placement?: Placement
  trigger?: TriggerType
  /** Distance in px from the anchor along the chosen side. Pass a single
   * number or a popper-style `[skid, distance]` tuple — the second value
   * is what Radix calls `sideOffset`. */
  tooltipOffset?: [number, number] | number
  /** Padding from the viewport edge for collision avoidance. */
  tooltipPadding?: number | { top?: number; right?: number; bottom?: number; left?: number }
  /** Hover-trigger delay before hiding (ms). */
  hideTimeout?: number
  /** Force the tooltip open regardless of trigger. */
  manualVisible?: boolean
  /** When true, target-element events bubble normally (default false). */
  avoidToStopPropagation?: boolean
  /** Render the tooltip in `document.body` (default true). */
  isInPortal?: boolean
  /** Hug the content on a single line instead of the default 200px column. */
  oneLine?: boolean
}

export interface TooltipRefs {
  /** Callback ref — attach to the trigger element. */
  targetRef: (node: HTMLElement | null) => void
  /** ReactNode the consumer must render somewhere; self-portals when
   * `isInPortal !== false`. */
  tooltip: ReactNode
  tooltipVisible: boolean
  /** Kept for API parity with the uikit hook. Radix repositions
   * automatically, so this is a no-op (typed as nullable for parity). */
  forceUpdate: (() => void) | null
}
