import type { Meta, StoryObj } from '@storybook/react-vite'
import '../design-system.css'
import { SideBySideThemes } from '../../stories-utils'

const SCALE = [
  { token: '--pcs-fs-xs',   px: '10px', role: 'Micro / badge' },
  { token: '--pcs-fs-sm',   px: '12px', role: 'Caption / table cell' },
  { token: '--pcs-fs-body', px: '14px', role: 'Primary UI size (default)' },
  { token: '--pcs-fs-md',   px: '16px', role: 'Buttons, labels, large numerics' },
  { token: '--pcs-fs-lg',   px: '20px', role: 'Sub-heading' },
  { token: '--pcs-fs-xl',   px: '24px', role: 'Heading' },
  { token: '--pcs-fs-2xl',  px: '28px', role: 'Screen heading' },
  { token: '--pcs-fs-3xl',  px: '40px', role: 'Hero number / display' },
  { token: '--pcs-fs-4xl',  px: '56px', role: 'Display XL' },
]

const WEIGHTS = [
  { w: 400, name: 'Regular',    role: 'Long-form body' },
  { w: 500, name: 'Medium',     role: 'Default body (PCS baseline)' },
  { w: 600, name: 'SemiBold',   role: 'Transitional' },
  { w: 700, name: 'Bold',       role: 'Labels, nav, numeric values' },
  { w: 800, name: 'ExtraBold',  role: 'Display / marketing' },
]

function Row({ token, px, role }: { token: string; px: string; role: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '16px 0', borderBottom: '1px solid var(--pcs-colors-border)' }}>
      <div style={{ width: 140, flexShrink: 0 }}>
        <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-muted)', fontFamily: 'monospace' }}>{token}</div>
        <div style={{ fontSize: 10, color: 'var(--pcs-colors-text-subtle)', marginTop: 2 }}>{px}</div>
      </div>
      <div style={{ fontSize: `var(${token})`, color: 'var(--pcs-colors-text)', fontWeight: 500, lineHeight: 1.2 }}>
        The quick brown fox 0123
      </div>
      <div style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--pcs-colors-text-muted)', flexShrink: 0 }}>{role}</div>
    </div>
  )
}

function TypographyPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-bg)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Typography</h1>
      <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 14, margin: '0 0 48px', lineHeight: 1.5 }}>
        Font: <strong style={{ color: 'var(--pcs-colors-text)' }}>Kanit</strong> · Base size: <strong style={{ color: 'var(--pcs-colors-text)' }}>14px</strong> ·
        All numeric data uses <code style={{ fontFamily: 'var(--pcs-font-mono)', fontSize: 12, color: 'var(--pcs-colors-brand)' }}>tabular-nums</code>
      </p>

      {/* Type scale */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 12, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 0, marginTop: 0 }}>
          Type Scale
        </h2>
        {SCALE.map((s) => <Row key={s.token} {...s} />)}
      </section>

      {/* Weights */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 12, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>
          Weights
        </h2>
        {WEIGHTS.map(({ w, name, role }) => (
          <div key={w} style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '14px 0', borderBottom: '1px solid var(--pcs-colors-border)' }}>
            <div style={{ width: 140, flexShrink: 0 }}>
              <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-muted)', fontFamily: 'monospace' }}>{w}</div>
              <div style={{ fontSize: 10, color: 'var(--pcs-colors-text-subtle)', marginTop: 2 }}>{name}</div>
            </div>
            <div style={{ fontSize: 24, fontWeight: w, color: 'var(--pcs-colors-text)' }}>
              Kanit {name}
            </div>
            <div style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--pcs-colors-text-muted)', flexShrink: 0 }}>{role}</div>
          </div>
        ))}
      </section>

      {/* Specimens */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 12, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
          Specimens
        </h2>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 4 }}>$63,429.18</div>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--pcs-colors-text-muted)', marginBottom: 24 }}>BNB – USD · 24h</div>

        <div style={{ display: 'flex', gap: 24, alignItems: 'baseline', marginBottom: 24 }}>
          <div style={{ fontSize: 40, fontWeight: 700, color: 'var(--pcs-colors-long)', fontVariantNumeric: 'tabular-nums' }}>+12.48%</div>
          <div style={{ fontSize: 40, fontWeight: 700, color: 'var(--pcs-colors-short)', fontVariantNumeric: 'tabular-nums' }}>−3.21%</div>
        </div>

        <div style={{ fontSize: 28, fontWeight: 700 }}>Order Book</div>
        <div style={{ fontSize: 20, fontWeight: 700, marginTop: 12 }}>Take Profit / Stop Loss</div>
        <div style={{ fontSize: 16, fontWeight: 700, marginTop: 12 }}>Connect Wallet</div>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--pcs-colors-text-muted)', marginTop: 12, maxWidth: 560, lineHeight: 1.5 }}>
          Direct, transactional voice. Title Case on buttons and nav. Sentence case on inline help text and empty states. UPPER reserved for side indicators like BUY / SELL.
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

export const Default: Story = {
  name: 'Type Scale',
  render: () => (
    <SideBySideThemes>
      <TypographyPage />
    </SideBySideThemes>
  ),
}
