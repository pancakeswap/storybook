import type { Meta, StoryObj } from '@storybook/react-vite'
import { LeaderboardPage } from './LeaderboardPage'

const meta = {
  title: 'Apps/Leaderboard',
  component: LeaderboardPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof LeaderboardPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  args: {},
}
