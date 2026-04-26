import type { Meta, StoryObj } from '@storybook/react-vite'
import './design-system.css'
import { shadows, tokens } from './tokens'

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      width: 140, height: 90,
      background: 'var(--pcs-colors-card)',
      borderRadius: tokens.radii.default,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      ...style,
    }}>
      {children}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32, marginTop: 0 }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {children}
      </div>
    </section>
  )
}

function ShadowCard({ name, value, note }: { name: string; value: string; note: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <Card style={{ boxShadow: value }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)' }}>{name}</span>
      </Card>
      <div style={{ textAlign: 'center', maxWidth: 140 }}>
        <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', marginBottom: 2 }}>{name}</div>
        <div style={{ fontSize: 11, color: 'var(--pcs-colors-text-disabled)' }}>{note}</div>
      </div>
    </div>
  )
}

function ShadowsPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-background)', color: 'var(--pcs-colors-text)', fontFamily: tokens.fonts.normal }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>Shadows</h1>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 14, margin: '0 0 8px', lineHeight: 1.6 }}>
        From PancakeSwap UIKit <code style={{ fontSize: 12, background: 'var(--pcs-colors-input)', padding: '1px 5px', borderRadius: 4 }}>packages/uikit/src/tokens/index.ts</code>. Theme-agnostic.
      </p>
      <p style={{ color: 'var(--pcs-colors-text-disabled)', fontSize: 12, margin: '0 0 48px' }}>
        {Object.keys(shadows).length} shadow tokens total.
      </p>

      {/* All shadows from tokens */}
      <Section title="All Shadow Tokens">
        {Object.entries(shadows).map(([name, value]) => (
          <ShadowCard key={name} name={name} value={value} note={
            name === 'level1' ? 'Cards, tabs, surfaces' :
            name === 'active' ? 'Brand teal focus ring' :
            name === 'success' ? 'Positive / long state' :
            name === 'warning' ? 'Caution state' :
            name === 'danger' ? 'Destructive / error' :
            name === 'focus' ? 'Violet keyboard focus' :
            name === 'inset' ? 'Inset depth' :
            name === 'inset2' ? 'Inset subtle' :
            name === 'tooltip' ? 'Tooltips, popovers'
            : ''
          } />
        ))}
      </Section>

      {/* Semantic shadow aliases (from theme.ts) */}
      <Section title="Semantic Shadow Aliases">
        <ShadowCard name="card" value={shadows.level1} note="Cards, active tabs" />
        <ShadowCard name="dropdown" value={shadows.tooltip} note="Menus, selects, popovers" />
        <ShadowCard name="modal" value="0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)" note="Dialog overlays" />
        <ShadowCard name="glow-brand" value={shadows.active} note="Trading brand glow" />
        <ShadowCard name="glow-long" value={shadows.success} note="Long / profit glow" />
        <ShadowCard name="glow-short" value={shadows.danger} note="Short / loss glow" />
        <ShadowCard name="glow-focus" value={shadows.focus} note="Violet focus glow" />
      </Section>

      {/* ── Border Radius ── */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32, marginTop: 0 }}>
          Border Radius (radii)
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {Object.entries(tokens.radii).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 80, height: 80,
                background: 'var(--pcs-colors-card)',
                border: '1px solid var(--pcs-colors-card-border)',
                borderRadius: value,
              }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text)' }}>{key}</div>
                <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)' }}>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Raw values ── */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>
          Raw Shadow Values
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {Object.entries(shadows).map(([name, value]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 0', borderBottom: '1px solid var(--pcs-colors-card-border)' }}>
              <div style={{ width: 80, fontSize: 12, fontWeight: 600, color: 'var(--pcs-colors-text)', flexShrink: 0 }}>{name}</div>
              <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', lineHeight: 1.4 }}>{value}</div>
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

export const Default: Story = { name: 'Shadows & Radii' }
