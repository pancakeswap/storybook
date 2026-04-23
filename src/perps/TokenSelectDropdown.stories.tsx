import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { TokenSelectDropdown } from './TokenSelectDropdown'

const meta = {
  title: 'Widgets/Token Select Dropdown',
  component: TokenSelectDropdown,
  parameters: { layout: 'centered' },
  args: {
    onSelect: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof TokenSelectDropdown>

export default meta

type Story = StoryObj<typeof meta>

/** Default list with BNB selected in the header. */
export const Default: Story = {}

/** No loading spinner — e.g. fully-loaded list. */
export const Loaded: Story = {
  args: { loading: false },
}

/** Custom tokens only. */
export const Short: Story = {
  args: {
    loading: false,
    tokens: [
      { id: 'usdc', symbol: 'USDC', name: 'USD Coin', balance: '1,053.62', usdValue: '$1,053.62' },
      { id: 'usdt', symbol: 'USDT', name: 'Tether USD', balance: '500.00', usdValue: '$500.00' },
    ],
  },
}
