import type { Meta, StoryObj } from '@storybook/react-vite'
import { TokenizedAssetsPage } from './TokenizedAssetsPage'

const meta = {
  title: 'Apps/Tokenized Assets',
  component: TokenizedAssetsPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TokenizedAssetsPage>

export default meta
type Story = StoryObj<typeof meta>

export const ChartOn: Story = {
  args: { chartOff: false },
}

export const ChartOff: Story = {
  args: { chartOff: true },
}
