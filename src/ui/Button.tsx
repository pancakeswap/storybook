import React from 'react'
import './perps.css'
import './design-system.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'long' | 'short'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant   // default: 'primary'
  size?: ButtonSize         // default: 'md'
  fullWidth?: boolean
  active?: boolean          // for ghost .active state
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth,
  active,
  className,
  style,
  children,
  ...rest
}: ButtonProps) {
  if (variant === 'ghost') {
    const classes = [
      'p-btn-ghost',
      active ? 'active' : '',
      fullWidth ? 'p-btn-full' : '',
      className ?? '',
    ].filter(Boolean).join(' ')

    return (
      <button className={classes} style={style} {...rest}>
        {children}
      </button>
    )
  }

  // Map 'secondary' to 'outline' for CSS class
  const cssVariant = variant === 'secondary' ? 'outline' : variant

  let sizeStyle: React.CSSProperties = {}
  if (size === 'sm') {
    sizeStyle = { height: 28, fontSize: 11, padding: '0 10px', borderRadius: 'var(--p-radius-sm)' }
  } else if (size === 'lg') {
    sizeStyle = { height: 52, fontSize: 15, fontWeight: 700, borderRadius: 'var(--p-radius-xl)', padding: '0 24px' }
  }

  if (fullWidth) {
    sizeStyle = { ...sizeStyle, borderRadius: 'var(--p-radius-xl)' }
  }

  const classes = [
    'p-btn',
    `p-btn-${cssVariant}`,
    fullWidth ? 'p-btn-full' : '',
    className ?? '',
  ].filter(Boolean).join(' ')

  const mergedStyle: React.CSSProperties | undefined =
    Object.keys(sizeStyle).length || style
      ? { ...sizeStyle, ...style }
      : undefined

  return (
    <button className={classes} style={mergedStyle} {...rest}>
      {children}
    </button>
  )
}
