import type { Meta, StoryObj } from '@storybook/react-vite'
import { FAQKitchenPage, FAQTagShowcase } from './FAQKitchenPage'

const meta = {
  title: 'Apps/FAQ Kitchen',
  component: FAQKitchenPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof FAQKitchenPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TagShowcase: Story = {
  render: () => <FAQTagShowcase />,
}
