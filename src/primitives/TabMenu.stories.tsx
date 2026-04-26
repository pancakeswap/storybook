import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { TabMenu, Tab } from './TabMenu'
import { Text } from './Text'
import '../theme/design-system.css'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>{title}</h2>
      {children}
    </section>
  )
}

function TabMenuPage() {
  const [active1, setActive1] = useState(0)
  const [active2, setActive2] = useState(0)
  const [active3, setActive3] = useState(0)
  const [active4, setActive4] = useState(0)

  const panels = ['Swap', 'Liquidity', 'Bridge']
  const tradingTabs = ['Positions', 'Open Orders', 'Order History', 'Trade History']

  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-background)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px' }}>TabMenu</h1>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 14, margin: '0 0 48px' }}>
        PancakeSwap TabMenu with Tab sub-component. Supports fullWidth, scale, and border-bottom options.
      </p>

      <Section title="Default (scale md)">
        <TabMenu activeIndex={active1} onItemClick={setActive1}>
          {panels.map(label => <Tab key={label}>{label}</Tab>)}
        </TabMenu>
        <div style={{ padding: 16 }}>
          <Text color="textSubtle">Active tab: <Text as="span" bold color="primary">{panels[active1]}</Text></Text>
        </div>
      </Section>

      <Section title="Scale sm">
        <TabMenu activeIndex={active2} onItemClick={setActive2}>
          {panels.map(label => <Tab key={label} scale="sm">{label}</Tab>)}
        </TabMenu>
      </Section>

      <Section title="Full Width">
        <TabMenu activeIndex={active3} onItemClick={setActive3} fullWidth>
          {tradingTabs.map(label => <Tab key={label}>{label}</Tab>)}
        </TabMenu>
        <div style={{ padding: 16 }}>
          <Text color="textSubtle">Active: <Text as="span" bold color="primary">{tradingTabs[active3]}</Text></Text>
        </div>
      </Section>

      <Section title="No Border Bottom">
        <TabMenu activeIndex={active4} onItemClick={setActive4} isShowBorderBottom={false}>
          {['Overview', 'Details', 'History'].map(label => <Tab key={label}>{label}</Tab>)}
        </TabMenu>
      </Section>

      <Section title="Custom Gap">
        <TabMenu activeIndex={0} gap="12px">
          {['Tab A', 'Tab B', 'Tab C', 'Tab D'].map(label => <Tab key={label}>{label}</Tab>)}
        </TabMenu>
      </Section>

      <Section title="Text Variant">
        <TabMenu activeIndex={active1} onItemClick={setActive1} variant="text">
          {['Overview', 'Positions', 'History'].map(label => <Tab key={label}>{label}</Tab>)}
        </TabMenu>
      </Section>
    </div>
  )
}

const meta = {
  title: 'Components/TabMenu',
  component: TabMenuPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TabMenuPage>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'Tab Menu' }
