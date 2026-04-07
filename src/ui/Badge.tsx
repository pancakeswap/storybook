import React from 'react'
import './perps.css'
import './design-system.css'

export type BadgeVariant = 'long' | 'short' | 'warning' | 'neutral'

export interface BadgeProps {
  variant: BadgeVariant
  children: React.ReactNode
  className?: string
}

export function Badge({ variant, children, className }: BadgeProps) {
  let extraStyle: React.CSSProperties | undefined
  let extraClass = ''

  if (variant === 'long') {
    extraClass = 'p-badge-long'
  } else if (variant === 'short') {
    extraClass = 'p-badge-short'
  } else if (variant === 'warning') {
    extraStyle = {
      background: 'rgba(240,180,41,0.15)',
      color: 'var(--pcs-colors-warning)',
    }
  } else if (variant === 'neutral') {
    extraStyle = {
      background: 'var(--pcs-colors-surface-subtle)',
      color: 'var(--pcs-colors-text-muted)',
    }
  }

  const classes = [
    'p-badge',
    extraClass,
    className ?? '',
  ].filter(Boolean).join(' ')

  return (
    <span className={classes} style={extraStyle}>
      {children}
    </span>
  )
}
