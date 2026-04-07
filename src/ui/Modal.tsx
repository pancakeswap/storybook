import React, { useEffect, useState } from 'react'
import './perps.css'
import './design-system.css'

export interface ModalProps {
  open: boolean
  title: string
  onClose?: () => void
  width?: number | string   // default: 420, ignored on mobile (drawer fills width)
  children: React.ReactNode
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

const closeButtonStyle: React.CSSProperties = {
  width: 32, height: 32, borderRadius: '50%',
  background: 'var(--pcs-colors-surface-subtle)',
  border: '1px solid var(--pcs-colors-border)',
  color: 'var(--pcs-colors-text-muted)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', fontSize: 14, fontFamily: 'inherit', flexShrink: 0,
  transition: 'border-color 0.12s',
}

export function Modal({ open, title, onClose, width = 420, children }: ModalProps) {
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const backdropBase: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'var(--pcs-colors-overlay)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    zIndex: 1000,
    display: 'flex',
  }

  const header = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
      <h2 style={{ fontSize: 17, fontWeight: 700, color: 'var(--pcs-colors-text)', margin: 0 }}>
        {title}
      </h2>
      <button
        onClick={onClose}
        aria-label="Close"
        style={closeButtonStyle}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--pcs-colors-border-hover)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--pcs-colors-border)' }}
      >
        ✕
      </button>
    </div>
  )

  if (isMobile) {
    return (
      <div
        className="perps-root"
        style={{ ...backdropBase, alignItems: 'flex-end' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose?.() }}
      >
        <div
          style={{
            width: '100%',
            background: 'var(--pcs-colors-surface-card)',
            border: '1px solid var(--pcs-colors-border)',
            borderRadius: 'var(--p-radius-lg) var(--p-radius-lg) 0 0',
            boxShadow: 'var(--pcs-shadows-modal)',
            maxHeight: '90dvh',
            overflowY: 'auto',
            padding: '0 20px 32px',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag handle */}
          <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 4px' }}>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--pcs-colors-border)' }} />
          </div>
          <div style={{ paddingTop: 8 }}>
            {header}
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="perps-root"
      style={{ ...backdropBase, alignItems: 'center', justifyContent: 'center' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose?.() }}
    >
      <div
        style={{
          background: 'var(--pcs-colors-surface-card)',
          border: '1px solid var(--pcs-colors-border)',
          borderRadius: 'var(--p-radius-lg)',
          padding: 24,
          boxShadow: 'var(--pcs-shadows-modal)',
          width,
          maxWidth: 'calc(100vw - 40px)',
          maxHeight: 'calc(100vh - 40px)',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {header}
        {children}
      </div>
    </div>
  )
}
