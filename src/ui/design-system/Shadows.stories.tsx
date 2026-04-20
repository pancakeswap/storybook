import type { Meta, StoryObj } from '@storybook/react-vite'
import '../design-system.css'
import { SideBySideThemes } from '../../stories-utils'

// ── Elevation tokens (PancakeSwap: shadows.level1 / tooltip / modal) ─────────
const ELEVATION = [
  { token: '--pcs-shadows-card',     label: 'Card',     use: 'Cards, active tabs, list items' },
  { token: '--pcs-shadows-dropdown', label: 'Dropdown', use: 'Menus, selects, popovers' },
  { token: '--pcs-shadows-modal',    label: 'Modal',    use: 'Dialog overlays' },
  { token: '--pcs-shadows-inset',    label: 'Inset',    use: 'Button depth (bottom edge)' },
]

// ── State ring tokens (PancakeSwap: shadows.active / focus / success / warning / danger) ──
const STATE_RINGS = [
  { token: '--pcs-shadows-active',  label: 'Active',   note: 'Brand/teal interactive focus' },
  { token: '--pcs-shadows-focus',   label: 'Focus',    note: 'Violet keyboard-focus ring' },
  { token: '--pcs-shadows-success', label: 'Success',  note: 'Positive / long state' },
  { token: '--pcs-shadows-warning', label: 'Warning',  note: 'Caution state' },
  { token: '--pcs-shadows-danger',  label: 'Danger',   note: 'Destructive / error state' },
]

// ── Trading glow aliases (map to PancakeSwap ring values) ────────────────────
const GLOWS = [
  { token: '--pcs-shadows-glow-brand', label: 'Brand glow',  color: 'var(--pcs-colors-brand)',  bg: 'var(--pcs-colors-brand-muted)' },
  { token: '--pcs-shadows-glow-long',  label: 'Long glow',   color: 'var(--pcs-colors-long)',   bg: 'var(--pcs-colors-long-muted)'  },
  { token: '--pcs-shadows-glow-short', label: 'Short glow',  color: 'var(--pcs-colors-short)',  bg: 'var(--pcs-colors-short-muted)' },
  { token: '--pcs-shadows-glow-focus', label: 'Focus ring',  color: 'var(--pcs-colors-accent)', bg: 'var(--pcs-colors-accent-muted)' },
]

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      width: 140, height: 90,
      background: 'var(--pcs-colors-surface-card)',
      borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      ...style,
    }}>
      {children}
    </div>
  )
}

function ShadowsPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-bg)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>Shadows</h1>
      <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 14, margin: '0 0 8px', lineHeight: 1.6 }}>
        Values sourced from PancakeSwap UIKit <code style={{ fontSize: 12, background: 'var(--pcs-colors-surface-subtle)', padding: '1px 5px', borderRadius: 4 }}>packages/uikit/src/tokens/index.ts</code>.
      </p>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 12, margin: '0 0 48px' }}>
        Theme-agnostic — same values in light and dark mode.
      </p>

      {/* Elevation */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32, marginTop: 0 }}>
          Elevation
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {ELEVATION.map(({ token, label, use }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <Card style={{ boxShadow: `var(${token})` }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)' }}>{label}</span>
              </Card>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--pcs-colors-text-muted)', marginBottom: 2 }}>{token}</div>
                <div style={{ fontSize: 11, color: 'var(--pcs-colors-text-subtle)' }}>{use}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* State rings */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32, marginTop: 0 }}>
          State Rings
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {STATE_RINGS.map(({ token, label, note }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <Card style={{ boxShadow: `var(${token})` }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)' }}>{label}</span>
              </Card>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--pcs-colors-text-muted)', marginBottom: 2 }}>{token}</div>
                <div style={{ fontSize: 11, color: 'var(--pcs-colors-text-subtle)' }}>{note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trading glows */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32, marginTop: 0 }}>
          Trading Glow Aliases
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {GLOWS.map(({ token, label, color, bg }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <Card style={{ border: `1px solid ${color}`, boxShadow: `var(${token})` }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: bg, border: `1px solid ${color}` }} />
              </Card>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--pcs-colors-text-muted)', marginBottom: 2 }}>{token}</div>
                <div style={{ fontSize: 11, color: 'var(--pcs-colors-text-subtle)' }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Border radius */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32, marginTop: 0 }}>
          Border Radius
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { token: '--p-radius-xs',   value: '4px',    use: 'Badges, chips' },
            { token: '--p-radius-sm',   value: '6px',    use: 'Buttons (ghost), tags' },
            { token: '--p-radius-md',   value: '10px',   use: 'Inputs, panels, buttons' },
            { token: '--p-radius-lg',   value: '14px',   use: 'Cards, dialogs' },
            { token: '--p-radius-xl',   value: '20px',   use: 'Full-width buttons, modals' },
            { token: '--p-radius-full', value: '9999px', use: 'Pills, avatars' },
          ].map(({ token, value, use }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 80, height: 80,
                background: 'var(--pcs-colors-surface-card)',
                border: '1px solid var(--pcs-colors-border)',
                borderRadius: `var(${token})`,
              }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-muted)', marginBottom: 2 }}>{value}</div>
                <div style={{ fontSize: 10, color: 'var(--pcs-colors-text-subtle)' }}>{use}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: 'Design System/Shadows',
  component: ShadowsPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', a11y: { disable: true } },
} satisfies Meta<typeof ShadowsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Elevation & State Rings',
  render: () => (
    <SideBySideThemes>
      <ShadowsPage />
    </SideBySideThemes>
  ),
}
