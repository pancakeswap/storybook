import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { Button } from '../primitives/Button'
import { Message, MessageText } from '../primitives/Message'
import { LeverageModal } from './LeverageModal'

const meta = {
  title: 'Widgets/Leverage Modal 🆕',
  component: LeverageModal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof LeverageModal>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Realistic-shape BTCUSDT brackets — same structure as Aster's
 * `/fapi/v3/leverageBracket`. Highest-leverage tier first → smallest
 * cap; lowest-leverage tier → largest cap. The widget walks tiers and
 * picks the highest-cap tier whose `initialLeverage` is still ≥ the
 * draft leverage. Numbers track Aster live values so the magnitudes
 * match what users see in the app.
 */
const BTC_TIERS = [
  { initialLeverage: 200, notionalCap: 300_000 },
  { initialLeverage: 100, notionalCap: 1_000_000 },
  { initialLeverage: 50, notionalCap: 5_000_000 },
  { initialLeverage: 20, notionalCap: 20_000_000 },
  { initialLeverage: 10, notionalCap: 50_000_000 },
  { initialLeverage: 5, notionalCap: 100_000_000 },
  { initialLeverage: 1, notionalCap: 1_800_000_000 },
] as const

/**
 * Sample of Aster's `/bapi/.../leverageoi/remaining` for BTCUSDT —
 * platform-wide open-interest budget remaining per leverage tier. At
 * low leverages this is far tighter than the bracket cap and is the
 * actual binding ceiling. Keys are tier sentinels; values USDT
 * notional remaining. PAN-11910 root cause.
 */
const BTC_OI_REMAINING: Record<string, number> = {
  '1': 1_078_555_857,
  '2': 881_054_951,
  '3': 783_461_070,
  '4': 685_241_392,
  '5': 585_861_172,
  '10': 494_615_340,
  '20': 424_266_337,
  '25': 75_318_870,
  '50': 52_700_554,
  '75': 47_904_251,
  '100': 45_127_292,
  '150': 4_754_310,
  '200': 2_980_666,
}

/**
 * Story-side mirror of `OrderForm`'s `remainingOpenableAtLeverage`
 * callback: `min(bracketCap − usedNotional, oiRemaining[ceil(lev)])`.
 * Pass `oiRemaining: undefined` to model the bracket-only fallback.
 */
const makeRemainingOpenable = ({
  tiers = BTC_TIERS,
  usedNotional = 0,
  oiRemaining = BTC_OI_REMAINING,
}: {
  tiers?: readonly { initialLeverage: number; notionalCap: number }[]
  usedNotional?: number
  oiRemaining?: Record<string, number>
} = {}) => {
  return (lev: number): number | undefined => {
    if (!Number.isFinite(lev) || lev <= 0) return undefined
    let bracketCap: number | undefined
    for (const tier of tiers) {
      if (tier.initialLeverage >= lev) bracketCap = tier.notionalCap
    }
    if (bracketCap === undefined) return undefined
    const bracketHeadroom = Math.max(0, bracketCap - usedNotional)

    if (oiRemaining) {
      const tiersAsc = Object.keys(oiRemaining)
        .map(Number)
        .filter((n) => Number.isFinite(n) && n > 0)
        .sort((a, b) => a - b)
      if (tiersAsc.length > 0) {
        const ceilTier = tiersAsc.find((v) => lev <= v) ?? tiersAsc[tiersAsc.length - 1]
        const oi = oiRemaining[String(ceilTier)]
        if (Number.isFinite(oi) && oi >= 0) return Math.min(bracketHeadroom, oi)
      }
    }
    return bracketHeadroom
  }
}

const baseArgs = {
  isOpen: true,
  symbol: 'BTCUSDT',
  minLeverage: 1,
  maxLeverage: 200,
  onConfirm: fn(),
  onClose: fn(),
} as const

/**
 * Bracket-bound at high leverage: tier-1 caps BTCUSDT at 300k notional
 * from 101x through 200x — drag the slider down to watch the cap
 * step up as lower-leverage tiers unlock. This is the ceiling that
 * caused PAN-11910 (-2027 rejections at 200x).
 */
export const HighLeverageBracketBound: Story = {
  args: {
    ...baseArgs,
    currentLeverage: 150,
    remainingOpenableAtLeverage: makeRemainingOpenable(),
  },
}

/**
 * OI-bound at low leverage: 1x BTC's bracket cap is 1.8B (effectively
 * unbounded), but the platform-wide OI budget at the 1x tier is only
 * ~1.08B — the venue won't let aggregate OI breach this. Demonstrates
 * the second clamp (`leverageOiRemainingMap`) that pure-bracket
 * formulas miss.
 */
export const LowLeverageOiBound: Story = {
  args: {
    ...baseArgs,
    currentLeverage: 1,
    remainingOpenableAtLeverage: makeRemainingOpenable(),
  },
}

/**
 * With existing exposure: 150x ceiling is 300k bracket cap; user
 * already holds 80k position + 20k unfilled orders → only 200k
 * headroom. OI clamp at 150x (4.75M) doesn't bind here. Demonstrates
 * the `usedNotional` subtraction.
 */
export const WithExistingExposure: Story = {
  args: {
    ...baseArgs,
    currentLeverage: 150,
    remainingOpenableAtLeverage: makeRemainingOpenable({ usedNotional: 100_000 }),
  },
}

/**
 * Bracket-only fallback: when the OI endpoint 404s or returns empty
 * (rare; usually a CDN issue), the formula degrades to pure
 * `bracketCap − usedNotional`. Demonstrates the fallback path
 * (compare numbers vs `LowLeverageOiBound` to see what we lose).
 */
export const OiUnavailableFallback: Story = {
  args: {
    ...baseArgs,
    currentLeverage: 1,
    remainingOpenableAtLeverage: makeRemainingOpenable({ oiRemaining: undefined }),
  },
}

/**
 * Loading: brackets / positions / open orders / OI haven't resolved
 * yet — the widget renders the `—` placeholder instead of `0 USDT`
 * so users don't mistake "still fetching" for "no headroom".
 */
export const Loading: Story = {
  args: {
    ...baseArgs,
    currentLeverage: 25,
    remainingOpenableAtLeverage: () => undefined,
  },
}

export const Submitting: Story = {
  args: {
    ...HighLeverageBracketBound.args!,
    isSubmitting: true,
  },
}

export const WithError: Story = {
  args: {
    ...HighLeverageBracketBound.args!,
    errorSlot: (
      <Message variant="danger">
        <MessageText>Aster rejected the leverage update — try again in a moment.</MessageText>
      </Message>
    ),
  },
}

/** Interactive — drives the modal from a parent button to mirror the consumer's flow. */
export const Interactive: Story = {
  args: {
    isOpen: false,
    symbol: 'ETHUSDT',
    currentLeverage: 10,
    minLeverage: 1,
    maxLeverage: 100,
    remainingOpenableAtLeverage: makeRemainingOpenable({
      // ETH-shape tiers — lower max leverage, lower top-tier cap.
      tiers: [
        { initialLeverage: 100, notionalCap: 150_000 },
        { initialLeverage: 50, notionalCap: 1_000_000 },
        { initialLeverage: 20, notionalCap: 5_000_000 },
        { initialLeverage: 10, notionalCap: 20_000_000 },
        { initialLeverage: 5, notionalCap: 50_000_000 },
        { initialLeverage: 1, notionalCap: 500_000_000 },
      ],
      usedNotional: 12_500,
      // Stub ETH OI map — same shape as BTC's, scaled down.
      oiRemaining: {
        '1': 200_000_000,
        '5': 80_000_000,
        '10': 40_000_000,
        '25': 8_000_000,
        '50': 3_000_000,
        '100': 800_000,
      },
    }),
    onConfirm: fn(),
    onClose: fn(),
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    const [lev, setLev] = useState(args.currentLeverage)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Adjust leverage ({lev}x)</Button>
        <LeverageModal
          {...args}
          isOpen={open}
          currentLeverage={lev}
          onConfirm={(value) => {
            setLev(value)
            setOpen(false)
          }}
          onClose={() => setOpen(false)}
        />
      </div>
    )
  },
}
