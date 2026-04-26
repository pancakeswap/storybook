import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardBody, CardHeader, CardFooter } from './Card'
import { Button } from './Button'
import { Text } from './Text'
import '../theme/design-system.css'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>{title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start' }}>{children}</div>
    </section>
  )
}

function CardPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-background)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px' }}>Card</h1>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 14, margin: '0 0 48px' }}>
        PancakeSwap Card with sub-components: CardHeader, CardBody, CardFooter.
      </p>

      <Section title="Basic Card">
        <Card style={{ width: 320 }}>
          <CardBody>
            <Text bold fontSize="20px">Basic Card</Text>
            <Text color="textSubtle" small style={{ marginTop: 8 }}>A simple card with a body.</Text>
          </CardBody>
        </Card>
      </Section>

      <Section title="With Header & Footer">
        <Card style={{ width: 320 }}>
          <CardHeader>
            <Text bold>Card Header</Text>
          </CardHeader>
          <CardBody>
            <Text color="textSubtle" small>Card body content goes here. This is a standard layout with header, body, and footer.</Text>
          </CardBody>
          <CardFooter>
            <Button scale="sm">Action</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section title="Header Variants">
        {(['default', 'blue', 'bubblegum', 'violet', 'pale'] as const).map(v => (
          <Card key={v} style={{ width: 200 }}>
            <CardHeader variant={v}>
              <Text bold fontSize="14px">{v}</Text>
            </CardHeader>
            <CardBody>
              <Text color="textSubtle" small>Content</Text>
            </CardBody>
          </Card>
        ))}
      </Section>

      <Section title="State Cards">
        <Card style={{ width: 200 }}>
          <CardBody>
            <Text bold>Default</Text>
            <Text color="textSubtle" small>Normal state</Text>
          </CardBody>
        </Card>
        <Card isActive style={{ width: 200 }}>
          <CardBody>
            <Text bold>Active</Text>
            <Text color="textSubtle" small>Gradient border</Text>
          </CardBody>
        </Card>
        <Card isSuccess style={{ width: 200 }}>
          <CardBody>
            <Text bold>Success</Text>
            <Text color="success" small>Green border</Text>
          </CardBody>
        </Card>
        <Card isWarning style={{ width: 200 }}>
          <CardBody>
            <Text bold>Warning</Text>
            <Text color="warning" small>Warning border</Text>
          </CardBody>
        </Card>
        <Card isDisabled style={{ width: 200 }}>
          <CardBody>
            <Text bold>Disabled</Text>
            <Text small>Muted text</Text>
          </CardBody>
        </Card>
      </Section>

      <Section title="Custom Background">
        <Card background="linear-gradient(135deg, var(--pcs-colors-primary) 0%, var(--pcs-colors-secondary) 100%)" style={{ width: 280 }}>
          <CardBody>
            <Text bold style={{ color: 'white' }}>Custom Background</Text>
            <Text style={{ color: 'rgba(255,255,255,0.8)' }} small>Gradient inner background</Text>
          </CardBody>
        </Card>
        <Card borderBackground="linear-gradient(135deg, #FFD800, #EB8C00)" style={{ width: 280 }}>
          <CardBody>
            <Text bold>Custom Border</Text>
            <Text color="textSubtle" small>Gold gradient border</Text>
          </CardBody>
        </Card>
      </Section>
    </div>
  )
}

const meta = {
  title: 'Components/Card',
  component: CardPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CardPage>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'All Variants' }
