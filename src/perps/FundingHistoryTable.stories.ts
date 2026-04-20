import type { Meta, StoryObj } from '@storybook/react-vite'
import { FundingHistoryTable } from './FundingHistoryTable'
import { forceTheme } from '../stories-utils'

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
  parameters: { ...forceTheme('light') },
  args: {},
}

export const DefaultDark: Story = {
  ...Default,
  name: 'With History (Dark)',
  parameters: { ...Default.parameters, ...forceTheme('dark') },
}

export const Empty: Story = {
  name: 'Empty State',
  parameters: { ...forceTheme('light') },
  args: { records: [] },
}

export const EmptyDark: Story = {
  ...Empty,
  name: 'Empty State (Dark)',
  parameters: { ...Empty.parameters, ...forceTheme('dark') },
}
