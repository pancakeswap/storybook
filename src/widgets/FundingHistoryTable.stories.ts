import type { Meta, StoryObj } from '@storybook/react-vite'
import { FundingHistoryTable } from './FundingHistoryTable'

const meta = {
  title: 'Widgets/Funding History',
  component: FundingHistoryTable,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof FundingHistoryTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'With History',
  args: {},
}

export const Empty: Story = {
  name: 'Empty State',
  args: { records: [] },
}
