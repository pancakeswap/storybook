import type { Meta, StoryObj } from '@storybook/react-vite'
import '../design-system.css'
import { SideBySideThemes } from '../../stories-utils'

const RADII = [
  { token: '--pcs-radius-xs',   px: 4,   use: 'Micro / badges, chips' },
  { token: '--pcs-radius-sm',   px: 8,   use: 'Chips, small tiles' },
  { token: '--pcs-radius-md',   px: 12,  use: 'Inputs, tabs, dropdowns' },
  { token: '--pcs-radius-lg',   px: 16,  use: 'Buttons, tiles, inner cards' },
  { token: '--pcs-radius-xl',   px: 24,  use: 'Outer cards, modals' },
  { token: '--pcs-radius-pill', px: 999, use: 'Pills — network, wallet, toggles' },
]

function Swatch({ token, px, use }: { token: string; px: number; use: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12, width: 180 }}>
      <div style={{
        width: 140, height: 90,
        background: 'var(--pcs-colors-surface-card)',
        border: '1px solid var(--pcs-colors-border)',
        borderRadius: `var(${token})`,
        boxShadow: 'var(--pcs-shadows-card)',
      }} />
      <div>
        <div style={{ fontSize: 11, fontFamily: 'var(--pcs-font-mono)', color: 'var(--pcs-colors-text-muted)' }}>{token}</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--pcs-colors-text)', marginTop: 2 }}>
          {px === 999 ? '999px (pill)' : `${px}px`}
        </div>
        <div style={{ fontSize: 11, color: 'var(--pcs-colors-text-muted)', marginTop: 2 }}>{use}</div>
      </div>
    </div>
  )
}

function RadiiPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-bg)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Radii</h1>
      <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 14, margin: '0 0 48px', lineHeight: 1.5, maxWidth: 600 }}>
        Six-step scale. Outer cards use 24; inner tiles and buttons use 16; inputs and tabs use 12; chips use 8; badges use 4. Pills at 999.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
        {RADII.map((r) => <Swatch key={r.token} {...r} />)}
      </div>
    </div>
  )
}

const meta = {
  title: 'Design System/Radii',
  component: RadiiPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', a11y: { disable: true } },
} satisfies Meta<typeof RadiiPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Radius Scale',
  render: () => (
    <SideBySideThemes>
      <RadiiPage />
    </SideBySideThemes>
  ),
}
