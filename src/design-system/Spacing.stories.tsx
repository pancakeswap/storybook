import type { Meta, StoryObj } from '@storybook/react-vite'
import './design-system.css'
import { tokens } from './tokens'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24, marginTop: 0 }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function SpacingPage() {
  const spaceEntries = Object.entries(tokens.space).filter(([k]) => k !== '1rem')

  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-background)', color: 'var(--pcs-colors-text)', fontFamily: tokens.fonts.normal }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>Spacing & Layout</h1>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 14, margin: '0 0 48px', lineHeight: 1.6 }}>
        PancakeSwap spacing, radii, border widths, and breakpoints from <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-primary)' }}>packages/uikit/src/tokens</code>.
      </p>

      {/* ── Spacing scale ── */}
      <Section title={`Spacing Scale (${spaceEntries.length} values)`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {spaceEntries.map(([key, value]) => {
            const px = parseInt(value) || 0
            return (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 60, fontSize: 12, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', flexShrink: 0, textAlign: 'right' }}>{key}</div>
                <div style={{ height: 14, width: Math.max(px * 2, 2), background: 'var(--pcs-colors-primary)', borderRadius: 2, opacity: 0.75 }} />
                <div style={{ fontSize: 11, color: 'var(--pcs-colors-text-disabled)' }}>{value}</div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* ── Border widths ── */}
      <Section title="Border Widths">
        <div style={{ display: 'flex', gap: 32 }}>
          {Object.entries(tokens.borderWidths).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 64, height: 64, borderRadius: tokens.radii.default,
                background: 'var(--pcs-colors-card)',
                border: `${value} solid var(--pcs-colors-primary)`,
              }} />
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text)' }}>{key}</div>
              <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Radii ── */}
      <Section title="Border Radius (radii)">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
          {Object.entries(tokens.radii).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 64, height: 64, borderRadius: value,
                background: 'var(--pcs-colors-primary)', opacity: 0.8,
              }} />
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text)' }}>{key}</div>
              <div style={{ fontSize: 9, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Breakpoints ── */}
      <Section title="Breakpoints">
        <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 13, marginTop: 0, marginBottom: 16 }}>
          PancakeSwap breakpoints. Site width: <strong style={{ color: 'var(--pcs-colors-text)' }}>1200px</strong>.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { label: 'xs',  px: '370px',  desc: 'Extra small' },
            { label: 'sm',  px: '576px',  desc: 'Small' },
            { label: 'md',  px: '852px',  desc: 'Medium' },
            { label: 'lg',  px: '968px',  desc: 'Large' },
            { label: 'xl',  px: '1080px', desc: 'Extra large' },
            { label: 'xxl', px: '1200px', desc: 'Site width' },
          ].map(({ label, px, desc }, i, arr) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '10px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--pcs-colors-card-border)' : 'none' }}>
              <div style={{
                width: 36, height: 22, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--pcs-colors-primary-muted)', color: 'var(--pcs-colors-primary)', fontSize: 10, fontWeight: 700, flexShrink: 0, fontFamily: 'monospace',
              }}>{label}</div>
              <div style={{ width: 80, fontSize: 12, fontFamily: 'monospace', color: 'var(--pcs-colors-text)', flexShrink: 0 }}>{px}</div>
              <div style={{ height: 8, width: `${(parseInt(px) / 1200) * 100}%`, maxWidth: 400, background: 'var(--pcs-colors-primary)', borderRadius: 4, opacity: 0.6 }} />
              <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-subtle)', marginLeft: 8 }}>{desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Z-indices ── */}
      <Section title="Z-Indices">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { name: 'ribbon',   value: 9 },
            { name: 'dropdown', value: 10 },
            { name: 'modal',    value: 100 },
          ].map(({ name, value }, i, arr) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--pcs-colors-card-border)' : 'none' }}>
              <div style={{ width: 100, fontSize: 12, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', flexShrink: 0 }}>{name}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--pcs-colors-primary)' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── All tokens dump ── */}
      <Section title="Full Space Token Map">
        <div style={{ background: 'var(--pcs-colors-input)', borderRadius: 8, padding: 16, fontFamily: 'monospace', fontSize: 11, lineHeight: 1.8, color: 'var(--pcs-colors-text-subtle)', overflowX: 'auto' }}>
          {Object.entries(tokens.space).map(([k, v]) => (
            <div key={k}>
              <span style={{ color: 'var(--pcs-colors-text-disabled)' }}>space.</span>
              <span style={{ color: 'var(--pcs-colors-text)' }}>{k}</span>
              <span style={{ color: 'var(--pcs-colors-text-disabled)' }}> = </span>
              <span style={{ color: 'var(--pcs-colors-primary)' }}>{v}</span>
            </div>
          ))}
        </div>
      </Section>
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
