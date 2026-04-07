import React from 'react'
import './perps.css'
import './design-system.css'

export interface SliderMark {
  value: number
  label?: string
}

export interface SliderProps {
  min: number
  max: number
  step?: number       // default: 1
  value: number
  onChange: (value: number) => void
  marks?: SliderMark[]
  formatValue?: (value: number) => string
  className?: string
}

export function Slider({ min, max, step, value, onChange, marks, formatValue, className }: SliderProps) {
  return (
    <div className={className}>
      <input
        type="range"
        className="p-slider"
        min={min}
        max={max}
        step={step ?? 1}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        aria-label={formatValue ? formatValue(value) : String(value)}
        style={{ width: '100%' }}
      />
      {marks && marks.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          {marks.map(mark => {
            const isActive = value === mark.value
            return (
              <button
                key={mark.value}
                type="button"
                className="p-btn-ghost"
                style={{
                  background: isActive ? 'var(--pcs-colors-brand-muted)' : 'transparent',
                  color: isActive ? 'var(--pcs-colors-brand)' : 'var(--pcs-colors-text-muted)',
                  border: 'none',
                  padding: '2px 5px',
                  fontSize: 11,
                  fontWeight: isActive ? 600 : 500,
                }}
                onClick={() => onChange(mark.value)}
              >
                {mark.label ?? mark.value}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
