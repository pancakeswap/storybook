import type { Meta, StoryObj } from '@storybook/react-vite'
import '../design-system.css'
import { SideBySideThemes } from '../../stories-utils'

const GRADIENTS = [
  { token: '--pcs-gradient-bubblegum',   label: 'Bubblegum',     use: 'Simple/light page background (#E5FDFF → #F3EFFF)' },
  { token: '--pcs-gradient-cake',        label: 'Cake',          use: 'CAKE token icon, brand accent' },
  { token: '--pcs-gradient-card-active', label: 'Card Active',   use: 'Selected card / highlight (teal → violet)' },
  { token: '--pcs-gradient-violet',      label: 'Violet',        use: 'Accent panels (#7645D9 → #452A7A)' },
  { token: '--pcs-gradient-dark-page',   label: 'Dark Page',     use: 'Pro/dark page background (#313D5C → #3D2A54)' },
  { token: '--pcs-gradient-inverted',    label: 'Inverted',      use: 'Bright → violet (hero callouts)' },
]

function Tile({ token, label, use }: { token: string; label: string; use: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
      <div style={{
        height: 160,
        background: `var(${token})`,
        borderRadius: 16,
        border: '1px solid rgba(0,0,0,0.08)',
      }} />
      <div>
        <div style={{ fontSize: 11, fontFamily: 'var(--pcs-font-mono)', color: 'var(--pcs-colors-text-muted)', marginBottom: 4 }}>{token}</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--pcs-colors-text)', marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-muted)' }}>{use}</div>
      </div>
    </div>
  )
}

function GradientsPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-bg)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Gradients</h1>
      <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 14, margin: '0 0 48px', lineHeight: 1.5, maxWidth: 600 }}>
        Flat CSS gradients — no photographic imagery. Simple/light ships the bubblegum wash;
        Pro/dark ships the deep-violet wash. Brand surfaces use the teal→violet card-active gradient.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
        {GRADIENTS.map((g) => <Tile key={g.token} {...g} />)}
      </div>
    </div>
  )
}

const meta = {
  title: 'Design System/Gradients',
  component: GradientsPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', a11y: { disable: true } },
} satisfies Meta<typeof GradientsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Gradient Tokens',
  render: () => (
    <SideBySideThemes>
      <GradientsPage />
    </SideBySideThemes>
  ),
}
