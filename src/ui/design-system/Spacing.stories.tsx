import type { Meta, StoryObj } from '@storybook/react-vite'
import '../design-system.css'

const SPACING = [
  { token: '--p-space-1',  px: 4 },
  { token: '--p-space-2',  px: 8 },
  { token: '--p-space-3',  px: 12 },
  { token: '--p-space-4',  px: 16 },
  { token: '--p-space-5',  px: 20 },
  { token: '--p-space-6',  px: 24 },
  { token: '--p-space-8',  px: 32 },
  { token: '--p-space-10', px: 40 },
  { token: '--p-space-12', px: 48 },
  { token: '--p-space-16', px: 64 },
]

const CONTROLS = [
  { token: '--p-control-xs', px: 24, use: 'Ghost button, badge' },
  { token: '--p-control-sm', px: 32, use: 'Compact button, tab' },
  { token: '--p-control-md', px: 40, use: 'Standard button, input' },
  { token: '--p-control-lg', px: 48, use: 'Large CTA' },
  { token: '--p-control-xl', px: 56, use: 'Navbar height' },
]

const BREAKPOINTS = [
  { label: 'xs', range: '0–479px',     desc: 'Mobile portrait — single column' },
  { label: 'sm', range: '480–767px',   desc: 'Mobile landscape' },
  { label: 'md', range: '768–1023px',  desc: 'Tablet — collapsible sidebar' },
  { label: 'lg', range: '1024–1279px', desc: 'Small desktop' },
  { label: 'xl', range: '1280px+',     desc: 'Desktop — primary target (2-column layout)' },
  { label: '2xl',range: '1536px+',     desc: 'Wide desktop — expanded chart' },
]

function SpacingPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-bg)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>Spacing & Layout</h1>
      <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 14, margin: '0 0 48px', lineHeight: 1.6 }}>
        Built on a <strong style={{ color: 'var(--pcs-colors-text)' }}>4px base grid</strong>. Use <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-brand)' }}>--p-space-*</code> tokens instead of raw pixel values in component styles.
      </p>

      {/* Spacing scale */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24, marginTop: 0 }}>
          Spacing Scale
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {SPACING.map(({ token, px }) => (
            <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 140, fontSize: 11, color: 'var(--pcs-colors-text-muted)', fontFamily: 'monospace', flexShrink: 0 }}>{token}</div>
              <div style={{ width: 32, fontSize: 11, color: 'var(--pcs-colors-text-subtle)', flexShrink: 0, textAlign: 'right' }}>{px}px</div>
              <div style={{ height: 16, width: px * 2, background: 'var(--pcs-colors-brand)', borderRadius: 2, opacity: 0.7 }} />
            </div>
          ))}
        </div>
      </section>

      {/* Control heights */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24, marginTop: 0 }}>
          Control Heights
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {CONTROLS.map(({ token, px, use }) => (
            <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 140, fontSize: 11, color: 'var(--pcs-colors-text-muted)', fontFamily: 'monospace', flexShrink: 0 }}>{token}</div>
              <div style={{ width: 32, fontSize: 11, color: 'var(--pcs-colors-text-subtle)', flexShrink: 0, textAlign: 'right' }}>{px}px</div>
              <div style={{ height: px, width: 120, background: 'var(--pcs-colors-surface-card)', border: '1px solid var(--pcs-colors-border)', borderRadius: 6, flexShrink: 0 }} />
              <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-subtle)' }}>{use}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Page layout */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24, marginTop: 0 }}>
          Page Layout Tokens
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { token: '--p-navbar-height', value: '56px',  desc: 'Top navigation bar' },
            { token: '--p-sidebar-width', value: '300px', desc: 'Right order panel' },
            { token: '--p-bottom-height', value: '220px', desc: 'Bottom positions/orders panel' },
            { token: '--p-page-gutter',   value: '16px',  desc: 'Outer page horizontal margin' },
            { token: '--p-card-padding',  value: '16px',  desc: 'Card inner padding' },
            { token: '--p-panel-padding', value: '16px',  desc: 'Panel inner padding' },
          ].map(({ token, value, desc }) => (
            <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 0', borderBottom: '1px solid var(--pcs-colors-border)' }}>
              <div style={{ width: 200, fontSize: 11, color: 'var(--pcs-colors-text-muted)', fontFamily: 'monospace', flexShrink: 0 }}>{token}</div>
              <div style={{ width: 60, fontSize: 12, fontWeight: 600, color: 'var(--pcs-colors-brand)', flexShrink: 0 }}>{value}</div>
              <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-subtle)' }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Breakpoints */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24, marginTop: 0 }}>
          Responsive Breakpoints
        </h2>
        <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 13, marginTop: 0, marginBottom: 20 }}>
          Write styles <strong style={{ color: 'var(--pcs-colors-text)' }}>mobile-first</strong>; enhance with <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-brand)' }}>min-width</code> media queries.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {BREAKPOINTS.map(({ label, range, desc }, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '10px 0', borderBottom: i < BREAKPOINTS.length - 1 ? '1px solid var(--pcs-colors-border)' : 'none' }}>
              <div style={{
                width: 36, height: 20, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--pcs-colors-brand-muted)', color: 'var(--pcs-colors-brand)', fontSize: 10, fontWeight: 700, flexShrink: 0, fontFamily: 'monospace',
              }}>{label}</div>
              <div style={{ width: 120, fontSize: 12, fontFamily: 'monospace', color: 'var(--pcs-colors-text)', flexShrink: 0 }}>{range}</div>
              <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-muted)' }}>{desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, background: 'var(--pcs-colors-surface-subtle)', borderRadius: 8, padding: '12px 16px', fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-text-muted)', lineHeight: 1.8 }}>
          <span style={{ color: 'var(--pcs-colors-text-subtle)' }}>/* mobile-first pattern */</span><br />
          <span style={{ color: 'var(--pcs-colors-text)' }}>.component {'{'} grid-template-columns: 1fr; {'}'}</span><br />
          <span style={{ color: 'var(--pcs-colors-brand)' }}>@media (min-width: 1280px)</span>
          <span style={{ color: 'var(--pcs-colors-text)' }}>{' { .component { grid-template-columns: 1fr 300px; } }'}</span>
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: 'Design System/Spacing',
  component: SpacingPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', a11y: { disable: true } },
} satisfies Meta<typeof SpacingPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Spacing & Layout' }
