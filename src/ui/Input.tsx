import React from 'react'
import './perps.css'
import './design-system.css'

export interface InputAction {
  label: string
  onClick: () => void
}

export interface InputProps {
  label?: string
  labelRight?: React.ReactNode
  prefix?: string
  actions?: InputAction[]
  height?: number           // default: 52
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  className?: string
}

export function Input({ label, labelRight, prefix, actions, height, inputProps, className }: InputProps) {
  return (
    <div className={className}>
      {(label || labelRight) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
          {label && <p className="p-label" style={{ margin: 0 }}>{label}</p>}
          {labelRight && <span className="p-label" style={{ margin: 0 }}>{labelRight}</span>}
        </div>
      )}
      <div className="p-input-wrap" style={height !== undefined ? { height } : undefined}>
        {prefix && (
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--pcs-colors-text-muted)', flexShrink: 0, marginRight: 2 }}>
            {prefix}
          </span>
        )}
        <input className="p-input-field" {...inputProps} />
        {actions && actions.length > 0 && (
          <div className="p-input-actions">
            {actions.map(a => (
              <button key={a.label} className="p-btn-ghost" type="button" onClick={a.onClick}>{a.label}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
