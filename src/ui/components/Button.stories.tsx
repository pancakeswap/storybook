import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button, type Variant, type Scale } from './Button'
import { AddIcon, ArrowForwardIcon, CogIcon } from '../Icons'
import '../design-system.css'

const VARIANTS: Variant[] = ['primary', 'secondary', 'tertiary', 'text', 'danger', 'dangerOutline', 'subtle', 'success', 'light', 'bubblegum']
const SCALES: Scale[] = ['md', 'sm', 'xs']

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>{title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>{children}</div>
    </section>
  )
}

function ButtonPage() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-background)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px' }}>Button</h1>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 14, margin: '0 0 48px' }}>
        PancakeSwap Button — {VARIANTS.length} variants, {SCALES.length} scales.
      </p>

      <Section title="Variants">
        {VARIANTS.map(v => <Button key={v} variant={v}>{v}</Button>)}
      </Section>

      <Section title="Scales">
        {SCALES.map(s => <Button key={s} scale={s}>Scale {s}</Button>)}
      </Section>

      <Section title="With Icons">
        <Button startIcon={<AddIcon size={16} />}>Start Icon</Button>
        <Button endIcon={<ArrowForwardIcon size={16} />}>End Icon</Button>
        <Button startIcon={<CogIcon size={16} />} endIcon={<ArrowForwardIcon size={16} />}>Both Icons</Button>
      </Section>

      <Section title="Disabled">
        {(['primary', 'secondary', 'danger'] as Variant[]).map(v => (
          <Button key={v} variant={v} disabled>{v} disabled</Button>
        ))}
      </Section>

      <Section title="Loading">
        <Button isLoading>Loading…</Button>
        <Button variant="secondary" isLoading>Loading…</Button>
        <Button onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000) }} isLoading={loading}>
          {loading ? 'Saving…' : 'Click to load'}
        </Button>
      </Section>

      <Section title="As Anchor">
        <Button as="a" href="https://pancakeswap.finance" external>
          External Link
        </Button>
        <Button as="a" href="#" variant="secondary">
          Internal Link
        </Button>
      </Section>

      <Section title="All Variants × All Scales">
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${SCALES.length}, auto)`, gap: '8px 16px', alignItems: 'center' }}>
          {VARIANTS.map(v =>
            SCALES.map(s => (
              <Button key={`${v}-${s}`} variant={v} scale={s}>{v} {s}</Button>
            ))
          )}
        </div>
      </Section>
    </div>
  )
}

const meta = {
  title: 'Components/Button',
  component: ButtonPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ButtonPage>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'All Variants' }
