import type { Meta, StoryObj } from '@storybook/react-vite'
import '../theme/design-system.css'
import * as AllIcons from '../primitives/Icons'

type IconComponent = React.ComponentType<{ size?: number; style?: React.CSSProperties }>

// Build the full icon list dynamically from exports
const allIconEntries = Object.entries(AllIcons)
  .filter(([, val]) => typeof val === 'function')
  .map(([name, component]) => ({ name, component: component as IconComponent }))
  .sort((a, b) => a.name.localeCompare(b.name))

function IconCell({ name, component: Icon }: { name: string; component: IconComponent }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      padding: '16px 8px',
      background: 'var(--pcs-colors-card)',
      border: '1px solid var(--pcs-colors-card-border)',
      borderRadius: 10,
      width: 96,
      cursor: 'default',
      transition: 'border-color 0.12s, background 0.12s',
    }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--pcs-colors-primary)'
        ;(e.currentTarget as HTMLElement).style.background = 'var(--pcs-colors-input)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--pcs-colors-card-border)'
        ;(e.currentTarget as HTMLElement).style.background = 'var(--pcs-colors-card)'
      }}
    >
      <Icon size={22} aria-hidden />
      <span style={{ fontSize: 10, color: 'var(--pcs-colors-text-subtle)', textAlign: 'center', lineHeight: 1.3, wordBreak: 'break-word' }}>
        {name.replace(/Icon$/, '')}
      </span>
    </div>
  )
}

function IconsPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-background)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>Icons</h1>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 14, margin: '0 0 16px', lineHeight: 1.6 }}>
        {allIconEntries.length} icons ported from PancakeSwap UIKit. All use <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-primary)' }}>fill="currentColor"</code>, default to 20x20.
      </p>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 13, margin: '0 0 48px', fontFamily: 'monospace', background: 'var(--pcs-colors-input)', padding: '8px 12px', borderRadius: 6, display: 'inline-block' }}>
        {'import { WalletIcon, CogIcon } from \'../ui/Icons\''}
      </p>

      {/* Size demo */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
          Sizes
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {[12, 16, 20, 24, 32, 40].map((s) => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <AllIcons.WalletIcon size={s} aria-hidden />
              <span style={{ fontSize: 10, color: 'var(--pcs-colors-text-subtle)' }}>{s}px</span>
            </div>
          ))}
        </div>
      </section>

      {/* Color variants */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
          Color Variants
        </h2>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {[
            { color: 'var(--pcs-colors-text)',          label: 'Default' },
            { color: 'var(--pcs-colors-text-subtle)',    label: 'Subtle' },
            { color: 'var(--pcs-colors-primary)',        label: 'Primary' },
            { color: 'var(--pcs-colors-success)',        label: 'Success' },
            { color: 'var(--pcs-colors-failure)',        label: 'Failure' },
            { color: 'var(--pcs-colors-warning)',        label: 'Warning' },
          ].map(({ color, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <AllIcons.CheckmarkCircleIcon size={24} style={{ color }} aria-hidden />
              <span style={{ fontSize: 10, color: 'var(--pcs-colors-text-subtle)' }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* All icons */}
      <section>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>
          All Icons ({allIconEntries.length})
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {allIconEntries.map(({ name, component }) => (
            <IconCell key={name} name={name} component={component} />
          ))}
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: 'Design System/Icons',
  component: IconsPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof IconsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Icon Library' }
