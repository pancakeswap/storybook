import React from 'react'
import './perps.css'
import './design-system.css'

export type TabsVariant = 'pill' | 'underline'

export interface TabItem {
  value: string
  label: React.ReactNode
  count?: number
}

export interface TabsProps {
  variant?: TabsVariant   // default: 'pill'
  items: TabItem[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function Tabs({ variant = 'pill', items, value, onChange, className }: TabsProps) {
  if (variant === 'pill') {
    return (
      <div className={`p-tabs${className ? ' ' + className : ''}`}>
        {items.map(item => (
          <button
            key={item.value}
            role="tab"
            className={`p-tab${value === item.value ? ' active' : ''}`}
            onClick={() => onChange(item.value)}
          >
            {item.label}
            {item.count != null && item.count > 0 && (
              <span style={{ marginLeft: 4, background: 'var(--pcs-colors-brand-muted)', color: 'var(--pcs-colors-brand)', borderRadius: 10, fontSize: 10, fontWeight: 700, padding: '1px 5px' }}>{item.count}</span>
            )}
          </button>
        ))}
      </div>
    )
  }

  // underline variant
  return (
    <div role="tablist" style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--pcs-colors-border)', gap: 0 }} className={className}>
      {items.map(item => {
        const isActive = value === item.value
        return (
          <button
            key={item.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.value)}
            style={{
              padding: '9px 14px',
              border: 'none',
              borderBottom: isActive ? '2px solid var(--pcs-colors-brand)' : '2px solid transparent',
              marginBottom: -1,
              background: 'transparent',
              color: isActive ? 'var(--pcs-colors-text)' : 'var(--pcs-colors-text-muted)',
              fontSize: 12,
              fontWeight: isActive ? 600 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontFamily: 'inherit',
              transition: 'color 0.12s, border-color 0.12s',
            }}
          >
            {item.label}
            {item.count != null && item.count > 0 && (
              <span style={{ marginLeft: 4, background: 'var(--pcs-colors-brand)', color: '#fff', borderRadius: 10, fontSize: 10, fontWeight: 700, padding: '1px 5px' }}>{item.count}</span>
            )}
          </button>
        )
      })}
    </div>
  )
}
