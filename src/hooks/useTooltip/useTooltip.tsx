import * as Popover from '@radix-ui/react-popover'
import debounce from 'lodash/debounce'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import getPortalRoot from '../../util/getPortalRoot'
import isTouchDevice from '../../util/isTouchDevice'
import { StyledTooltipArrow, StyledTooltipContent } from './StyledTooltip'
import type { Placement, TooltipOptions, TooltipRefs } from './types'

type Side = 'top' | 'right' | 'bottom' | 'left'
type Align = 'start' | 'center' | 'end'

/**
 * Pancake/popper.js uses 12 placement strings ("top", "top-start", …) plus
 * "auto" variants. Radix splits this into `side` + `align` + an
 * `avoidCollisions` flag (default true) that approximates "auto" by
 * flipping when the chosen side overflows. The mapping below preserves
 * the call-site syntax so consumers can keep passing `placement: 'top'`.
 */
const placementToSideAlign = (placement: Placement): { side: Side; align: Align } => {
  if (placement.startsWith('auto')) {
    const align = placement.endsWith('-start') ? 'start' : placement.endsWith('-end') ? 'end' : 'center'
    return { side: 'top', align }
  }
  const [side, alignSuffix] = placement.split('-') as [Side, 'start' | 'end' | undefined]
  return { side, align: alignSuffix ?? 'center' }
}

const resolveSideOffset = (offset: TooltipOptions['tooltipOffset']): number => {
  if (offset == null) return 10
  if (typeof offset === 'number') return offset
  return offset[1] ?? 10
}

const resolveAlignOffset = (offset: TooltipOptions['tooltipOffset']): number => {
  if (offset == null || typeof offset === 'number') return 0
  return offset[0] ?? 0
}

const useTooltip = (content: React.ReactNode, options?: TooltipOptions): TooltipRefs => {
  const {
    placement = 'auto',
    trigger,
    tooltipPadding = 16,
    tooltipOffset = [0, 10],
    hideTimeout = 100,
    manualVisible = false,
    avoidToStopPropagation = false,
    isInPortal = true,
  } = options ?? {}

  // Default trigger: click on touch devices (no hover available), hover
  // everywhere else. Computed inside the hook so SSR doesn't lock the
  // value to whichever branch ran first.
  const resolvedTrigger = trigger ?? (isTouchDevice() ? 'click' : 'hover')

  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null)
  const [visible, setVisible] = useState(manualVisible)

  // Radix Popover.Anchor accepts a `virtualRef` so we can anchor to an
  // element acquired via callback ref instead of a child component.
  const virtualRef = useRef<HTMLElement | null>(null)
  virtualRef.current = targetElement

  useEffect(() => {
    setVisible(manualVisible)
  }, [manualVisible])

  // lodash debounce manages its own pending timer; cancelling on the
  // show path collapses rapid mouseleave→mouseenter sequences.
  const debouncedHide = useMemo(
    () =>
      debounce(() => {
        setVisible(false)
      }, hideTimeout),
    [hideTimeout],
  )
  useEffect(() => () => debouncedHide.cancel(), [debouncedHide])

  const stopIfNeeded = useCallback(
    (e: Event) => {
      if (avoidToStopPropagation) return
      e.stopPropagation()
      e.preventDefault()
    },
    [avoidToStopPropagation],
  )

  const showTooltip = useCallback(
    (e: Event) => {
      setVisible(true)
      if (resolvedTrigger === 'hover') debouncedHide.cancel()
      stopIfNeeded(e)
    },
    [resolvedTrigger, debouncedHide, stopIfNeeded],
  )

  const hideTooltip = useCallback(
    (e: Event) => {
      if (manualVisible) return
      stopIfNeeded(e)
      if (resolvedTrigger === 'hover') {
        debouncedHide()
      } else {
        setVisible(false)
      }
    },
    [manualVisible, resolvedTrigger, debouncedHide, stopIfNeeded],
  )

  const toggleTooltip = useCallback(
    (e: Event) => {
      stopIfNeeded(e)
      setVisible((v) => !v)
    },
    [stopIfNeeded],
  )

  // Hover trigger — listens on the target. Radix Content also auto-shows
  // when its anchor is hovered if you use Popover.Trigger, but we drive
  // visibility manually so the "tooltipVisible" state matches the uikit
  // hook's contract. Touch devices fall back to click semantics: a tap
  // counts as mouseenter on iOS so we'd show but never hide.
  useEffect(() => {
    if (!targetElement || resolvedTrigger !== 'hover' || manualVisible) return undefined
    const onEnter = (e: Event) => showTooltip(e)
    const onLeave = (e: Event) => hideTooltip(e)
    targetElement.addEventListener('mouseenter', onEnter)
    targetElement.addEventListener('mouseleave', onLeave)
    return () => {
      targetElement.removeEventListener('mouseenter', onEnter)
      targetElement.removeEventListener('mouseleave', onLeave)
    }
  }, [targetElement, resolvedTrigger, manualVisible, showTooltip, hideTooltip])

  // Click trigger — toggle on tap. Outside-click is handled by Radix's
  // built-in DismissableLayer inside Popover.Content (no extra listener
  // needed here; Radix calls onOpenChange(false) for us).
  useEffect(() => {
    if (!targetElement || resolvedTrigger !== 'click') return undefined
    const onClick = (e: Event) => toggleTooltip(e)
    targetElement.addEventListener('click', onClick)
    return () => targetElement.removeEventListener('click', onClick)
  }, [targetElement, resolvedTrigger, toggleTooltip])

  // Focus trigger — keyboard accessibility for icon-only buttons.
  useEffect(() => {
    if (!targetElement || resolvedTrigger !== 'focus') return undefined
    const onFocus = (e: Event) => showTooltip(e)
    const onBlur = (e: Event) => hideTooltip(e)
    targetElement.addEventListener('focus', onFocus)
    targetElement.addEventListener('blur', onBlur)
    return () => {
      targetElement.removeEventListener('focus', onFocus)
      targetElement.removeEventListener('blur', onBlur)
    }
  }, [targetElement, resolvedTrigger, showTooltip, hideTooltip])

  const { side, align } = placementToSideAlign(placement)
  const sideOffset = resolveSideOffset(tooltipOffset)
  const alignOffset = resolveAlignOffset(tooltipOffset)
  const collisionPadding =
    typeof tooltipPadding === 'number'
      ? tooltipPadding
      : { top: 0, right: 0, bottom: 0, left: 0, ...tooltipPadding }

  // Anchor and Content must be SIBLINGS under <Popover.Root>, never
  // nested. When `virtualRef` is provided, `Popover.Anchor` short-circuits
  // to `null` and would discard any children — wrapping Content inside
  // Anchor silently breaks the tooltip (no element rendered, no hover
  // popup). Portal wraps only Content, since the anchor is virtual.
  const portalRoot = isInPortal ? getPortalRoot() : null
  const contentNode = visible ? (
    <StyledTooltipContent
      side={side}
      align={align}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      collisionPadding={collisionPadding}
      avoidCollisions
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      {content}
      <StyledTooltipArrow width={10} height={5} />
    </StyledTooltipContent>
  ) : null

  const tooltip = (
    <Popover.Root open={visible} onOpenChange={setVisible} modal={false}>
      <Popover.Anchor virtualRef={virtualRef as React.RefObject<HTMLElement>} />
      {isInPortal && portalRoot ? (
        <Popover.Portal container={portalRoot as HTMLElement}>{contentNode}</Popover.Portal>
      ) : (
        contentNode
      )}
    </Popover.Root>
  )

  return {
    targetRef: setTargetElement,
    tooltip,
    tooltipVisible: visible,
    forceUpdate: null,
  }
}

export default useTooltip
