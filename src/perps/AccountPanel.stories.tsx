import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { AccountPanel } from './AccountPanel'

const meta = {
  title: 'Widgets/Account Panel',
  component: AccountPanel,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 288, height: 360, border: '1px solid var(--pcs-colors-card-border)', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onDeposit: fn(),
    onWithdraw: fn(),
    onTransfer: fn(),
  },
} satisfies Meta<typeof AccountPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
