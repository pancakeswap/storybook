import type { Meta, StoryObj } from '@storybook/react-vite'
import { StockPage } from './StockPage'

const meta = {
  title: 'Apps/Stock',
  component: StockPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof StockPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { initialAssetId: 'nvda' } }
