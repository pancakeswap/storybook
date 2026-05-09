import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { SharePnlModal } from './SharePnlModal'

const meta = {
  title: 'Widgets/Share Pnl Modal 🆕',
  component: SharePnlModal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    isOpen: true,
    pnlPct: 5.93,
    onClose: fn(),
    onCopyImage: fn(),
    onShareX: fn(),
  },
} satisfies Meta<typeof SharePnlModal>

export default meta
type Story = StoryObj<typeof meta>

/** 0 → +5% — modest gain bunny. */
export const GainTiny: Story = {
  args: { pnlPct: 3.21, tier: 'gain-0-5' },
}

/** +5% → +25% — happy bunny with thumbs up. The hero variant from
 * the design spec. */
export const Gain5to25: Story = {
  args: { pnlPct: 12.48, tier: 'gain-5-25' },
}

/** +25% → +75% — celebration tier. */
export const Gain25to75: Story = {
  args: { pnlPct: 48.7, tier: 'gain-25-75' },
}

/** Above +75% — over-the-moon bunny. */
export const GainAbove75: Story = {
  args: { pnlPct: 142.0, tier: 'gain-above-75' },
}

/** 0 → -5% — small bruise. */
export const LossTiny: Story = {
  args: { pnlPct: -2.4, tier: 'loss-0-5' },
}

/** -5% → -25% — sad bunny. */
export const Loss5to25: Story = {
  args: { pnlPct: -12.0, tier: 'loss-5-25' },
}

/** -25% → -75% — defeated bunny. */
export const Loss25to75: Story = {
  args: { pnlPct: -52.31, tier: 'loss-25-75' },
}

/** Below -75% — rekt tier. */
export const LossBelow75: Story = {
  args: { pnlPct: -88.4, tier: 'loss-below-75' },
}

/**
 * Auto-tier — the modal picks the right bunny from the signed
 * `pnlPct` alone (use this when the consumer doesn't want to think
 * about tiers).
 */
export const AutoTier: Story = {
  args: { pnlPct: 24.78 },
}
