import React from 'react'

const DEVICES: Record<string, { w: number; h: number; radius: number; notch: number }> = {
  iphoneSE:      { w: 375, h: 667, radius: 40, notch: 0   },   // SE has a home button, no notch
  iphone17Pro:   { w: 393, h: 852, radius: 54, notch: 126 },   // Dynamic Island pill
  iphone17ProMax:{ w: 430, h: 932, radius: 54, notch: 126 },
  // fallback for any 'mobile' key
  mobile:        { w: 390, h: 844, radius: 50, notch: 126 },
}

export function PhoneFrame({ children, viewportKey }: { children: React.ReactNode; viewportKey?: string }) {
  const d = DEVICES[viewportKey ?? ''] ?? DEVICES.mobile
  const isSE = viewportKey === 'iphoneSE'

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      background: 'var(--pcs-colors-bg)',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: d.w,
        height: d.h,
        flexShrink: 0,
        border: '14px solid #1c1c1e',
        borderRadius: d.radius,
        boxShadow: '0 0 0 1px #3a3a3c, 0 0 0 3px #1c1c1e, 0 40px 100px rgba(0,0,0,0.6)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: 'var(--pcs-colors-bg)',
      }}>
        {/* Status bar */}
        <div style={{ height: isSE ? 20 : 50, flexShrink: 0, position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: 'var(--pcs-colors-bg)' }}>
          {/* Notch / Dynamic Island */}
          {!isSE && (
            <div style={{
              width: d.notch,
              height: 34,
              background: '#1c1c1e',
              borderRadius: '0 0 22px 22px',
            }} />
          )}
          <span style={{ position: 'absolute', left: 18, top: isSE ? 4 : 14, fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text)', fontFamily: 'inherit' }}>
            9:41
          </span>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: 'auto', minHeight: 0 }}>
          {children}
        </div>

        {/* Home indicator or home button */}
        {isSE ? (
          <div style={{ height: 6, flexShrink: 0, background: 'var(--pcs-colors-bg)' }} />
        ) : (
          <div style={{ height: 34, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--pcs-colors-bg)' }}>
            <div style={{ width: 134, height: 5, background: 'var(--pcs-colors-text-subtle)', borderRadius: 3 }} />
          </div>
        )}
      </div>
    </div>
  )
}

export function TabletFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 24px',
      background: 'var(--pcs-colors-bg)',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: 768,
        height: 1024,
        flexShrink: 0,
        border: '16px solid #1c1c1e',
        borderRadius: 32,
        boxShadow: '0 0 0 1px #3a3a3c, 0 0 0 3px #1c1c1e, 0 30px 80px rgba(0,0,0,0.5)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--pcs-colors-bg)',
      }}>
        <div style={{ height: 28, flexShrink: 0, background: '#1c1c1e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3a3a3c' }} />
        </div>
        <div style={{ flex: 1, overflow: 'auto', minHeight: 0 }}>
          {children}
        </div>
        <div style={{ height: 20, flexShrink: 0, background: '#1c1c1e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 60, height: 4, background: '#3a3a3c', borderRadius: 2 }} />
        </div>
      </div>
    </div>
  )
}
