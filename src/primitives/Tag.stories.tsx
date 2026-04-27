import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from './Tag'
import { Text } from './Text'

function TagPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px' }}>
      <Text bold fontSize="20px" style={{ marginBottom: 32 }}>Tag</Text>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="secondary">Secondary</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="failure">Failure</Tag>
        <Tag variant="textDisabled">Disabled</Tag>
        <Tag variant="textSubtle">Subtle</Tag>
        <Tag variant="binance">Binance</Tag>
      </div>
      <Text bold fontSize="14px" style={{ marginBottom: 8 }}>Small</Text>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        <Tag scale="sm" variant="primary">Primary</Tag>
        <Tag scale="sm" variant="secondary">Secondary</Tag>
        <Tag scale="sm" variant="success">Success</Tag>
      </div>
      <Text bold fontSize="14px" style={{ marginBottom: 8 }}>Outline</Text>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Tag outline variant="primary">Primary</Tag>
        <Tag outline variant="secondary">Secondary</Tag>
        <Tag outline variant="failure">Failure</Tag>
      </div>
    </div>
  )
}

const meta = { title: 'Components/Tag', component: TagPage, tags: ['autodocs'], parameters: { layout: 'fullscreen' } } satisfies Meta<typeof TagPage>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'All Variants' }
