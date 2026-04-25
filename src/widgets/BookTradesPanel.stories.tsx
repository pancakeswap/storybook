import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { BookTradesPanel, type BookTradesTab } from './BookTradesPanel'

const Placeholder: React.FC<{ label: string }> = ({ label }) => (
  <div
    style={{
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--pcs-colors-text-subtle)',
      fontFamily: 'monospace',
      fontSize: 12,
      padding: 16,
    }}
  >
    {label}
  </div>
)

const meta = {
  title: 'Widgets/Book Trades Panel 🆕',
  component: BookTradesPanel,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 320, height: 540, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    tab: 'book',
    onTabChange: fn(),
    bookContent: <Placeholder label="OrderBook goes here" />,
    tradesContent: <Placeholder label="RecentTrades goes here" />,
  },
} satisfies Meta<typeof BookTradesPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Book: Story = {}
export const Trades: Story = { args: { tab: 'trades' } }

/** Interactive — tab persisted locally. */
export const Interactive: Story = {
  render: (args) => {
    const [tab, setTab] = useState<BookTradesTab>('book')
    return <BookTradesPanel {...args} tab={tab} onTabChange={setTab} />
  },
}
