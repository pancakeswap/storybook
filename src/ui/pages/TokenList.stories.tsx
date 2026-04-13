import type { Meta, StoryObj } from '@storybook/react-vite'
import { TokenListPage } from './TokenList'

const meta = {
  title: 'Pages/Token List',
  component: TokenListPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TokenListPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Token List' }
