import { useLayoutEffect, useRef, useState } from 'react'
import './BunnySlider.css'

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
 *   Layout: a 48px tall track that fills its parent's width.
 *   • Bunny butt sits fixed at the left start
 *   • Teal middle body fills from butt to current value
 *   • Bunny head thumb follows the value
 *   • A transparent native <input type="range"> drives interaction
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
  // 32 px wide; usable horizontal range = trackWidth - thumbWidth.
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
  // head so the body visually sits inside the bar.
  const fillW = headLeft - sliderLeft + thumbW / 2

  const isMax = pct >= 0.999

  return (
    <div
      ref={rootRef}
      className="bs-root"
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
      aria-disabled={disabled || undefined}
    >
      <span className="bs-track" />
      <span className="bs-back" />
      <span className="bs-fill" style={{ width: Math.max(0, fillW) }} />
      <span
        className={`bs-front${isMax ? ' bs-front--max' : ''}`}
        style={{ left: headLeft }}
      />
      <input
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
        <span className="bs-value-label" style={{ left: headLeft + thumbW / 2 }}>
          {isMax ? 'MAX' : valueLabel}
        </span>
      )}
    </div>
  )
}
