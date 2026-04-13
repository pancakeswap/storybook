import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text'
import '../design-system.css'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{children}</div>
    </section>
  )
}

function TextPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-background)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px' }}>Text</h1>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 14, margin: '0 0 48px' }}>
        Polymorphic text component with PCS color tokens, weight, size, and decoration props.
      </p>

      <Section title="Font Sizes">
        <Text fontSize="40px" bold>40px Display</Text>
        <Text fontSize="20px" bold>20px Heading</Text>
        <Text>16px Default body text</Text>
        <Text small>14px Small text</Text>
        <Text fontSize="12px">12px Caption</Text>
        <Text fontSize="10px">10px Micro</Text>
      </Section>

      <Section title="Colors">
        <Text color="text">text — Primary text color</Text>
        <Text color="textSubtle">textSubtle — Secondary / muted</Text>
        <Text color="textDisabled">textDisabled — Disabled / placeholder</Text>
        <Text color="primary">primary — Teal brand color</Text>
        <Text color="secondary">secondary — Purple accent</Text>
        <Text color="success">success — Profit / long</Text>
        <Text color="failure">failure — Loss / short</Text>
        <Text color="warning">warning — Caution</Text>
        <Text color="#FF6B35">Custom hex color (#FF6B35)</Text>
      </Section>

      <Section title="Weight">
        <Text>Normal (400) — The quick brown fox jumps over the lazy dog</Text>
        <Text bold>Bold (600) — The quick brown fox jumps over the lazy dog</Text>
      </Section>

      <Section title="Decorations">
        <Text ellipsis style={{ maxWidth: 300 }}>
          This is a very long text that should be truncated with an ellipsis when it overflows the container width
        </Text>
        <Text strikeThrough>Strikethrough text decoration</Text>
        <Text textTransform="uppercase">uppercase transform</Text>
        <Text textTransform="capitalize">capitalize transform applied to each word</Text>
      </Section>

      <Section title="Polymorphic (as prop)">
        <Text as="h1" fontSize="28px" bold>Rendered as h1</Text>
        <Text as="p" color="textSubtle">Rendered as p</Text>
        <Text as="span" color="primary" bold>Rendered as span</Text>
        <Text as="label" small color="textSubtle" textTransform="uppercase">Rendered as label</Text>
      </Section>

      <Section title="Composition">
        <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
          <Text fontSize="20px" bold>$65,420.00</Text>
          <Text color="success" bold>+2.34%</Text>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
          <Text color="textSubtle" small>24h Volume</Text>
          <Text bold>$1.2B</Text>
        </div>
      </Section>
    </div>
  )
}

const meta = {
  title: 'Components/Text',
  component: TextPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TextPage>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'All Variants' }
