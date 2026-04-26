import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Alert } from './'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Heads up',
    children: 'This is an alert message — pass content via children.',
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: { variant: 'info' },
}

export const Success: Story = {
  args: { variant: 'success', title: 'Order placed', children: 'Your limit order is resting on the book.' },
}

export const Warning: Story = {
  args: { variant: 'warning', title: 'Low margin', children: 'You are within 10% of the maintenance margin threshold.' },
}

export const Danger: Story = {
  args: { variant: 'danger', title: 'Order rejected', children: 'Aster returned: Margin is insufficient.' },
}

/** Dismissible — pass `onClick` to render a close button in the upper-right. */
export const Dismissible: Story = {
  args: { variant: 'info', title: 'You can close me', children: 'Click the × in the corner.', onClick: fn() },
}
