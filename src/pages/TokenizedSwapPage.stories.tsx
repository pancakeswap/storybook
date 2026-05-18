import type { Meta, StoryObj } from '@storybook/react-vite'
import { TokenizedSwapPage } from './TokenizedSwapPage'

const meta = {
  title: 'Apps/Tokenized Swap',
  component: TokenizedSwapPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TokenizedSwapPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { initialAssetId: 'nvdax' } }
