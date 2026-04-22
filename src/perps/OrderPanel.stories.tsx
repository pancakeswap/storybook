import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { OrderPanel } from './OrderPanel'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Widgets/Order Panel',
  component: OrderPanel,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 288, border: '1px solid var(--pcs-colors-card-border)' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onPlaceOrder: fn(),
  },
} satisfies Meta<typeof OrderPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: { available: '2.73' },
  parameters: { ...forceTheme('dark') },
}

export const Light: Story = {
  args: { available: '2.73' },
  parameters: { ...forceTheme('light') },
}

export const LargeAccount: Story = {
  name: 'Large Account',
  args: { available: '100,000.00' },
  parameters: { ...forceTheme('dark') },
}
