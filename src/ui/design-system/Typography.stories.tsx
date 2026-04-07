import type { Meta, StoryObj } from '@storybook/react-vite'
import '../design-system.css'

const SCALE = [
  { token: '--p-text-2xs', px: '10px', role: 'Micro / badge label' },
  { token: '--p-text-xs',  px: '11px', role: 'Table header / label' },
  { token: '--p-text-sm',  px: '12px', role: 'Table cell / caption' },
  { token: '--p-text-base',px: '13px', role: 'Body default' },
  { token: '--p-text-lg',  px: '14px', role: 'Emphasized body' },
  { token: '--p-text-xl',  px: '15px', role: 'Subheading' },
  { token: '--p-text-2xl', px: '16px', role: 'Section title' },
  { token: '--p-text-3xl', px: '18px', role: 'Card title' },
  { token: '--p-text-4xl', px: '22px', role: 'Stat value' },
  { token: '--p-text-5xl', px: '28px', role: 'Hero number' },
  { token: '--p-text-6xl', px: '36px', role: 'Display' },
]

function Row({ token, px, role }: { token: string; px: string; role: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '14px 0', borderBottom: '1px solid var(--pcs-colors-border)' }}>
      <div style={{ width: 100, flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: 'var(--pcs-colors-text-muted)', fontFamily: 'monospace' }}>{token}</div>
        <div style={{ fontSize: 10, color: 'var(--pcs-colors-text-subtle)', marginTop: 2 }}>{px}</div>
      </div>
      <div style={{ fontSize: `var(${token})`, color: 'var(--pcs-colors-text)', fontWeight: 500 }}>
        The quick brown fox
      </div>
      <div style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--pcs-colors-text-muted)', flexShrink: 0 }}>{role}</div>
    </div>
  )
}

function TypographyPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-bg)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>Typography</h1>
      <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 14, margin: '0 0 48px', lineHeight: 1.6 }}>
        Font: <strong style={{ color: 'var(--pcs-colors-text)' }}>Inter</strong> · Base size: <strong style={{ color: 'var(--pcs-colors-text)' }}>13px</strong> · All numeric data uses <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-brand)' }}>tabular-nums</code>
      </p>

      {/* Type scale */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 0, marginTop: 0 }}>
          Type Scale
        </h2>
        {SCALE.map((s) => <Row key={s.token} {...s} />)}
      </section>

      {/* Font weights */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
          Font Weights
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { token: '--p-font-normal', weight: 400, label: 'Normal — body copy' },
            { token: '--p-font-medium', weight: 500, label: 'Medium — labels, secondary' },
            { token: '--p-font-semi',   weight: 600, label: 'Semibold — values, buttons' },
            { token: '--p-font-bold',   weight: 700, label: 'Bold — headings, prices' },
            { token: '--p-font-black',  weight: 800, label: 'Black — display, logo' },
          ].map(({ token, weight, label }) => (
            <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ width: 130, flexShrink: 0, fontSize: 11, color: 'var(--pcs-colors-text-muted)', fontFamily: 'monospace' }}>{token}</div>
              <div style={{ fontSize: 18, fontWeight: weight, color: 'var(--pcs-colors-text)', width: 220 }}>$12,345.67</div>
              <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-muted)' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Text colors */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
          Text Colors
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { token: '--pcs-colors-text',        label: '--pcs-colors-text',        desc: 'Primary — headings, values' },
            { token: '--pcs-colors-text-muted',  label: '--pcs-colors-text-muted',  desc: 'Secondary — labels, metadata' },
            { token: '--pcs-colors-text-subtle', label: '--pcs-colors-text-subtle', desc: 'Disabled / placeholder' },
            { token: '--pcs-colors-brand',       label: '--pcs-colors-brand',       desc: 'Brand teal — links, active' },
            { token: '--pcs-colors-long',        label: '--pcs-colors-long',        desc: 'Long / profit / positive PnL' },
            { token: '--pcs-colors-short',       label: '--pcs-colors-short',       desc: 'Short / loss / negative PnL' },
            { token: '--pcs-colors-warning',     label: '--pcs-colors-warning',     desc: 'Warning / caution' },
          ].map(({ token, label, desc }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ width: 200, flexShrink: 0, fontSize: 11, color: 'var(--pcs-colors-text-muted)', fontFamily: 'monospace' }}>{label}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: `var(${token})`, width: 180, fontVariantNumeric: 'tabular-nums' }}>+$1,234.56 (3.21%)</div>
              <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-muted)' }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabular nums demo */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
          Tabular Numerals
        </h2>
        <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 13, marginTop: 0, marginBottom: 16 }}>
          All numeric output uses <code style={{ fontFamily: 'monospace', color: 'var(--pcs-colors-brand)' }}>font-variant-numeric: tabular-nums</code> so columns stay aligned as values change.
        </p>
        <div style={{ display: 'flex', gap: 48 }}>
          {[['$3.4800', '$65,420.00', '$3,180.00', '$0.0012'], ['+$60.94', '-$1,230.00', '+$0.18', '-$48.50']].map((col, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {col.map((v) => (
                <div key={v} style={{
                  fontSize: 14, fontWeight: 600, fontVariantNumeric: 'tabular-nums', letterSpacing: 0,
                  color: v.startsWith('+') ? 'var(--pcs-colors-long)' : v.startsWith('-') ? 'var(--pcs-colors-short)' : 'var(--pcs-colors-text)',
                }}>{v}</div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: 'Design System/Typography',
  component: TypographyPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', a11y: { disable: true } },
} satisfies Meta<typeof TypographyPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Type Scale & Weights' }
