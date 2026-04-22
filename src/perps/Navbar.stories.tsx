import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Navbar } from './Navbar'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    onDeposit: fn(),
    onWithdraw: fn(),
  },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  parameters: { ...forceTheme('dark') },
}

export const Light: Story = {
  parameters: { ...forceTheme('light') },
}
