import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'
import { Text } from './Text'

function InputPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px' }}>
      <Text bold fontSize="20px">Input</Text>
      <Text color="textSubtle" fontSize="14px" style={{ marginTop: 4, marginBottom: 32 }}>PancakeSwap styled input.</Text>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 400 }}>
        <div>
          <Text fontSize="12px" color="textSubtle" bold style={{ marginBottom: 4 }}>Default (MD)</Text>
          <Input placeholder="Enter amount..." scale="md" />
        </div>
        <div>
          <Text fontSize="12px" color="textSubtle" bold style={{ marginBottom: 4 }}>Small (SM)</Text>
          <Input placeholder="Enter amount..." scale="sm" />
        </div>
        <div>
          <Text fontSize="12px" color="textSubtle" bold style={{ marginBottom: 4 }}>Large (LG)</Text>
          <Input placeholder="Enter amount..." scale="lg" />
        </div>
        <div>
          <Text fontSize="12px" color="textSubtle" bold style={{ marginBottom: 4 }}>Success</Text>
          <Input placeholder="Valid input" isSuccess />
        </div>
        <div>
          <Text fontSize="12px" color="textSubtle" bold style={{ marginBottom: 4 }}>Warning</Text>
          <Input placeholder="Warning state" isWarning />
        </div>
        <div>
          <Text fontSize="12px" color="textSubtle" bold style={{ marginBottom: 4 }}>Disabled</Text>
          <Input placeholder="Disabled" disabled />
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Components/Input',
  component: InputPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof InputPage>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'All Variants' }
