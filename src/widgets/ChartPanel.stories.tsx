import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChartPanel } from './ChartPanel'

const ChartPlaceholder: React.FC<{ label?: string }> = ({ label = 'Chart goes here' }) => (
  <div
    style={{
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--pcs-colors-text-subtle)',
      fontFamily: 'monospace',
      fontSize: 14,
    }}
  >
    {label}
  </div>
)

const meta = {
  title: 'Widgets/Chart Panel 🆕',
  component: ChartPanel,
  parameters: { layout: 'centered' },
  args: { children: <ChartPlaceholder /> },
  decorators: [
    (Story) => (
      <div style={{ width: 800, height: 480, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChartPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const TallerMin: Story = { args: { minHeight: '60vh' } }
