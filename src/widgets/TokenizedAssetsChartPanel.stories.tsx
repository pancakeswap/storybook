import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { TokenizedAssetsChartPanel } from './TokenizedAssetsChartPanel'

const meta = {
  title: 'Widgets/Tokenized Assets/Chart Panel',
  component: TokenizedAssetsChartPanel,
  parameters: { layout: 'centered' },
  args: {
    name: 'NVIDIA CORP',
    ticker: 'NVDAx',
    metaLabel: '$5.7T MC',
    iconColor: '#76B900',
    iconInitials: 'N',
    price: '$235.31',
    priceDelta: '+$8.82',
    priceDeltaPct: '(+3.89%)',
    isPositive: true,
    timeframe: '5m',
    timeframes: ['5m', '1h', 'D'],
    onTimeframeChange: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 720, height: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TokenizedAssetsChartPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Positive: Story = {}

export const Negative: Story = {
  args: {
    name: 'ALPHABET INC',
    ticker: 'GOOGLx',
    metaLabel: '$2.1T MC',
    iconColor: '#4285F4',
    iconInitials: 'G',
    price: '$399.88',
    priceDelta: '-$1.84',
    priceDeltaPct: '(-0.46%)',
    isPositive: false,
  },
}
