import { useLayoutEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import bunnyButtUrl from '../primitives/Slider/svg/bunnybutt.svg'
import bunnyHeadMainUrl from '../primitives/Slider/svg/bunnyhead-main.svg'
import bunnyHeadMaxUrl from '../primitives/Slider/svg/bunnyhead-max.svg'

export interface BunnySliderProps {
  name?: string
  min?: number
  max?: number
  step?: number | 'any'
  value: number
  onValueChanged: (v: number) => void
  disabled?: boolean
  /** Optional label rendered under the thumb (e.g. "12x", "MAX"). */
  valueLabel?: string
  /** Forwarded to the wrapper for sizing. */
  width?: string | number
}

/**
 * Bunny Slider — single, unified slider replicating Figma 11:2253.
 *
 *   Layout: a 32px tall track that fills its parent's width.
 *   • Bunny butt sits fixed at the left start
 *   • Teal middle body fills from butt to current value
 *   • Bunny head thumb follows the value
 *   • A transparent native <input type="range"> drives interaction
 *
 * Implementation note: cross-component selector interpolations like
 * `${Root}[aria-disabled='true'] &` were observed to corrupt the
 * styled-components stylesheet when this widget mounts late (e.g. inside
 * a portal'd LeverageModal) — rules inserted *after* the BunnySlider
 * group were dropped from the parsed sheet, leaving most of the page
 * unstyled. Avoid the dependency by giving each child a stable
 * className and selecting it from `Root` via a literal class selector.
 */
export function BunnySlider({
  name = 'bunny-slider',
  min = 0,
  max = 100,
  step = 'any',
  value,
  onValueChanged,
  disabled = false,
  valueLabel,
  width = '100%',
}: BunnySliderProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [trackW, setTrackW] = useState(0)

  // Measure inner width to position the bunny head precisely. The thumb is
  // 24 px wide; usable horizontal range = trackWidth - thumbWidth.
  useLayoutEffect(() => {
    const el = rootRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setTrackW(el.clientWidth))
    ro.observe(el)
    setTrackW(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const safeMax = max <= min ? min + 1 : max
  const pct = Math.max(0, Math.min(1, (value - min) / (safeMax - min)))
  const thumbW = 24
  // Slider area sits to the right of the fixed bunny butt (15 px) — give
  // a small overlap so the butt blends into the start of the bar.
  const sliderLeft = 14
  const usableW = Math.max(0, trackW - sliderLeft - thumbW)
  const headLeft = sliderLeft + usableW * pct
  // Teal fill stretches from the slider start to ~middle of the bunny
  // head so the body visually sits inside the fill bar.
  const fillW = headLeft - sliderLeft + thumbW / 2

  const isMax = pct >= 0.999

  // The bunny SVGs ship as `data:image/svg+xml,...` URIs (Vite inlines
  // small assets). Embedding those URIs inside a styled-components CSS
  // template was observed to break the browser's CSS parser — the live
  // CSSStyleSheet truncated at that rule and every subsequent
  // styled-components rule (modal chrome, theme tokens, …) was dropped,
  // unstyling the whole app once the LeverageModal mounted. Setting
  // `background-image` via the per-element inline `style` attribute
  // sidesteps the global stylesheet entirely.
  const frontUrl = isMax ? bunnyHeadMaxUrl : bunnyHeadMainUrl

  return (
    <Root
      ref={rootRef}
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
      aria-disabled={disabled || undefined}
    >
      <Track className="bs-track" />
      <Back className="bs-back" style={{ backgroundImage: `url("${bunnyButtUrl}")` }} />
      <Fill className="bs-fill" style={{ width: Math.max(0, fillW) }} />
      <Front
        className={`bs-front${isMax ? ' bs-front--max' : ''}`}
        style={{ left: headLeft, backgroundImage: `url("${frontUrl}")` }}
      />
      <RangeInput
        className="bs-input"
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onValueChanged(parseFloat(e.target.value))}
        aria-label={name}
      />
      {valueLabel && (
        <ValueLabel className="bs-value-label" style={{ left: headLeft + thumbW / 2 }}>
          {isMax ? 'MAX' : valueLabel}
        </ValueLabel>
      )}
    </Root>
  )
}

// ── Styled bits ──────────────────────────────────────────────
//
// All cross-element rules (`disabled` greyscale, `hover` thumb scale) live
// on `Root` and target the children by literal className. Children are
// individual styled-components only for layout/visual primitives — no
// `${Component}` interpolation inside selectors.

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  user-select: none;
  -webkit-user-select: none;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
  &[aria-disabled='true'] .bs-back,
  &[aria-disabled='true'] .bs-fill,
  &[aria-disabled='true'] .bs-front {
    filter: grayscale(100%);
  }
  &[aria-disabled='true'] .bs-input {
    cursor: not-allowed;
  }
  &:not([aria-disabled='true']):hover .bs-front {
    transform: scale(1.06);
  }
`

const Track = styled.span`
  position: absolute;
  left: 14px;
  right: 0;
  top: 18px;
  height: 2px;
  background: ${({ theme }) => theme?.colors?.inputSecondary ?? 'var(--pcs-colors-input-secondary, #D7CAEC)'};
  pointer-events: none;
`

const Fill = styled.span`
  position: absolute;
  left: 14px;
  top: 18px;
  height: 10px;
  background: ${({ theme }) => theme?.colors?.primary ?? 'var(--pcs-colors-primary, #1FC7D4)'};
  pointer-events: none;
  transition: width 60ms linear;
`

const Back = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 32px;
  pointer-events: none;
  background-size: 15px 32px;
  background-repeat: no-repeat;
`

const Front = styled.span`
  position: absolute;
  top: 0;
  width: 24px;
  height: 32px;
  pointer-events: none;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 24px 32px;
  transition: left 60ms linear, transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
`

const RangeInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  opacity: 0;

  &::-webkit-slider-runnable-track {
    height: 100%;
    background: transparent;
  }
  &::-moz-range-track {
    height: 100%;
    background: transparent;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 32px;
    background: transparent;
    border: 0;
    cursor: grab;
  }
  &::-moz-range-thumb {
    width: 24px;
    height: 32px;
    background: transparent;
    border: 0;
    cursor: grab;
  }
  &:active::-webkit-slider-thumb {
    cursor: grabbing;
  }
  &:active::-moz-range-thumb {
    cursor: grabbing;
  }
`

const ValueLabel = styled.span`
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme }) => theme?.colors?.textSubtle ?? 'var(--pcs-colors-text-subtle)'};
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  transform: translateX(-50%);
  white-space: nowrap;
`
