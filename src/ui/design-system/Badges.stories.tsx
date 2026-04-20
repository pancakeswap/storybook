import type { Meta, StoryObj } from '@storybook/react-vite'
import '../design-system.css'
import { Badge } from '../Badge'
import { SideBySideThemes } from '../../stories-utils'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '14px 0', borderBottom: '1px solid var(--pcs-colors-border)' }}>
      <div style={{ width: 160, fontSize: 12, fontFamily: 'var(--pcs-font-mono)', color: 'var(--pcs-colors-text-muted)' }}>{label}</div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>{children}</div>
    </div>
  )
}

function BadgesPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-bg)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Badges</h1>
      <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 14, margin: '0 0 48px', lineHeight: 1.5, maxWidth: 600 }}>
        Compact, 10px UPPER caps, 4px radius. Semantic color per tone. Used for side indicators (LONG / SHORT), order types, and status tags.
      </p>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 12, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>
          Variants
        </h2>
        <Row label="long">
          <Badge variant="long">LONG</Badge>
          <Badge variant="long">+12.48%</Badge>
        </Row>
        <Row label="short">
          <Badge variant="short">SHORT</Badge>
          <Badge variant="short">−3.21%</Badge>
        </Row>
        <Row label="warning">
          <Badge variant="warning">LIQ RISK</Badge>
          <Badge variant="warning">PARTIAL</Badge>
        </Row>
        <Row label="neutral">
          <Badge variant="neutral">MARKET</Badge>
          <Badge variant="neutral">LIMIT</Badge>
          <Badge variant="neutral">STOP</Badge>
        </Row>
      </section>

      <section>
        <h2 style={{ fontSize: 12, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>
          In context
        </h2>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '16px 20px', background: 'var(--pcs-colors-surface-card)', border: '1px solid var(--pcs-colors-border)', borderRadius: 16 }}>
          <Badge variant="long">LONG</Badge>
          <span style={{ fontWeight: 700, fontSize: 16 }}>BNB – USD</span>
          <span style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 14 }}>10× Cross</span>
          <span style={{ marginLeft: 'auto', color: 'var(--pcs-colors-long)', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>+$124.82</span>
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: 'Design System/Badges',
  component: BadgesPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', a11y: { disable: true } },
} satisfies Meta<typeof BadgesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Badge Variants',
  render: () => (
    <SideBySideThemes>
      <BadgesPage />
    </SideBySideThemes>
  ),
}
