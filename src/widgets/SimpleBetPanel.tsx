import React, { useEffect, useRef, useState } from 'react'
import { keyframes, styled } from 'styled-components'
import { Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Text } from '../primitives/Text'
import { AddIcon, WalletFilledIcon } from '../primitives/Icons'
import { useTooltip } from '../hooks/useTooltip'
import { PerpsPanel } from './primitives'

/**
 * Stateless "Simple-mode" UP/DOWN bet entry. Mirrors pancake-frontend's
 * `SimpleBetPanel` adapter — the consumer owns the bet/leverage draft,
 * formats every display string, and supplies the async submit lifecycle.
 *
 * Visual is a 1:1 port of the original `SimpleBetPanel.css` (Figma
 * 235:30152) re-expressed as theme-driven styled-components: gradient
 * leverage track with safe/warn/danger zones, color-mix tinted zone
 * pill, the bottom-border-2px button-press effect, and the casino-style
 * fund chip / bet input pair.
 */
export interface SimpleBetPanelProps {
  // ── Symbol display ───────────────────────────────────────
  symbol: string
  baseAsset: string
  pair: string
  price: string
  pricePnlPct: number
  onSymbolClick?: () => void

  // ── Controlled draft ─────────────────────────────────────
  bet: string
  onBetChange: (next: string) => void
  /**
   * Inline validation message rendered under the bet input — typically
   * the consumer's "Min: 4.25 USDT" hint when the entered bet would
   * floor to a sub-lot-size qty. Suppresses naturally when omitted /
   * empty string. Pair with `canSubmit={false}` so UP/DOWN are also
   * disabled while the message is showing.
   */
  betError?: string
  leverage: number
  onLeverageChange: (next: number) => void
  /**
   * Per-symbol max leverage. Aster's `/fapi/v1/leverageBracket` defines
   * tier caps per market, so this must be configurable. Defaults to the
   * historical 1001 to keep the original story working.
   */
  maxLeverage?: number
  /**
   * Preset leverage chips below the slider. Default is the original
   * [50, 250, 500, 1001] for max=1001; consumers passing a smaller max
   * should also pass scaled presets (e.g. [10, 25, 50, 100] for max=100).
   */
  presets?: readonly number[]
  quoteAsset: string
  onQuoteAssetClick?: () => void
  /**
   * Optional list of denomination choices for the bet input — when
   * provided with more than one entry, clicking the chip opens a
   * dropdown rather than just firing `onQuoteAssetClick`. Use this to
   * let the user denominate their bet in either the quote asset (USDT)
   * or the base asset (BTC). The currently-selected `code` should match
   * `quoteAsset`.
   */
  assetOptions?: readonly { code: string; logoUrl?: string; color?: string }[]
  /** Fired when the user picks a different denomination from the dropdown. */
  onAssetChange?: (next: string) => void

  // ── Fund display + actions ───────────────────────────────
  fundBalanceText: string
  onTopUpFund?: () => void
  onPercentClick?: (frac: 0.25 | 0.5 | 1) => void

  // ── Stats summary (consumer pre-formats) ─────────────────
  estimatedEntry: string
  liqIfLong: string
  marginRequired: string
  openingFee: string

  // ── CTA ──────────────────────────────────────────────────
  canSubmit: boolean
  isSubmittingUp?: boolean
  isSubmittingDown?: boolean
  onUp: () => void
  onDown: () => void

  onDeposit?: () => void
  onWithdraw?: () => void

  /**
   * When set, the Deposit/Withdraw row is replaced with a single
   * full-width primary button rendering this label. The PnL value also
   * dims to textDisabled. Pass an i18n-translated string from the
   * consumer.
   */
  connectWalletLabel?: string
  onConnectWallet?: () => void

  unrealizedPnl: string
}

const DEFAULT_PRESETS = [50, 250, 500, 1001] as const
const DEFAULT_MAX_LEVERAGE = 1001

type Zone = 'safe' | 'caution' | 'warn' | 'danger'

/**
 * Zones now use absolute leverage thresholds (per Figma spec) rather
 * than ratios of maxLeverage. A 100×-cap symbol just won't reach the
 * higher tiers — caution still kicks in at 25× regardless.
 *   0–24x   → safe      (positive green)
 *   25–99x  → caution   (primary teal)
 *   100–499 → warn      (warning amber)
 *   500x+   → danger    (destructive pink)
 */
const zoneFromLeverage = (lev: number): Zone => {
  if (lev <= 24) return 'safe'
  if (lev <= 99) return 'caution'
  if (lev <= 499) return 'warn'
  return 'danger'
}
const isDegen = (lev: number) => lev >= 500
const isDouble = (lev: number) => lev >= 100

const zoneLabel = (z: Zone) =>
  z === 'safe'
    ? 'Gentle leverage'
    : z === 'caution'
      ? 'Amplified risk'
      : z === 'warn'
        ? 'High leverage'
        : 'High-intensity leverage'

const zoneEmoji = (z: Zone) =>
  z === 'safe' ? '🌿' : z === 'caution' ? '❗' : z === 'warn' ? '🔥' : '🔥'

const zoneTooltip = (z: Zone) =>
  z === 'safe'
    ? "A good place to start. You'll feel the market without getting rekt."
    : z === 'caution'
      ? 'Moves against you are magnified. Keep an eye on liquidation price.'
      : z === 'warn'
        ? 'Liquidation triggers around a 1% move. Set a stop loss.'
        : '1% move against you liquidates. Only risk what you can afford to lose.'

// Branded UP/DOWN arrows — kept inline because there's no 1:1 primitive.
const UpArrow: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M10.9629 8.57864L6.79069 12.7509C6.58302 12.9586 6.33844 13.0634 6.05694 13.0654C5.77544 13.0674 5.5251 12.9628 5.30594 12.7516C5.1026 12.5403 5.00194 12.2939 5.00394 12.0124C5.00594 11.7309 5.1111 11.4861 5.31944 11.2781L11.2714 5.33339C11.3736 5.23139 11.4873 5.15456 11.6124 5.10289C11.7376 5.05122 11.8683 5.02539 12.0044 5.02539C12.1406 5.02539 12.2713 5.05122 12.3964 5.10289C12.5216 5.15456 12.6319 5.22797 12.7272 5.32314L18.6829 11.2791C18.8983 11.4945 19.0059 11.7367 19.0059 12.0059C19.0059 12.2751 18.9023 12.5153 18.6949 12.7266C18.4758 12.9378 18.225 13.0434 17.9427 13.0434C17.6604 13.0434 17.4164 12.9378 17.2107 12.7266L13.0379 8.57864V18.3664C13.0379 18.6571 12.9383 18.9025 12.7389 19.1026C12.5394 19.303 12.295 19.4031 12.0057 19.4031C11.7164 19.4031 11.4702 19.303 11.2672 19.1026C11.0644 18.9025 10.9629 18.6571 10.9629 18.3664V8.57864Z"
      fill="currentColor"
    />
  </svg>
)
const DownArrow: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M10.9997 5V16.17L6.11973 11.29C5.72973 10.9 5.08973 10.9 4.69973 11.29C4.30973 11.68 4.30973 12.31 4.69973 12.7L11.2897 19.29C11.6797 19.68 12.3097 19.68 12.6997 19.29L19.2897 12.7C19.6797 12.31 19.6797 11.68 19.2897 11.29C18.8997 10.9 18.2697 10.9 17.8797 11.29L12.9997 16.17V5C12.9997 4.45 12.5497 4 11.9997 4C11.4497 4 10.9997 4.45 10.9997 5Z"
      fill="currentColor"
    />
  </svg>
)
const TriangleUp: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M6 2l5 8H1z" />
  </svg>
)

const InfoCircleGlyph: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ aspectRatio: '1 / 1' }}>
    <path
      d="M7.99636 11.2602C8.18224 11.2602 8.3393 11.197 8.46752 11.0705C8.59563 10.944 8.65969 10.7872 8.65969 10.6003V7.86018C8.65969 7.67318 8.5968 7.51645 8.47102 7.39001C8.34524 7.26357 8.18936 7.20034 8.00336 7.20034C7.81747 7.20034 7.66041 7.26357 7.53219 7.39001C7.40408 7.51645 7.34002 7.67318 7.34002 7.86018V10.6003C7.34002 10.7872 7.40291 10.944 7.52869 11.0705C7.65447 11.197 7.81036 11.2602 7.99636 11.2602ZM7.99636 6.08001C8.18791 6.08001 8.34969 6.01523 8.48169 5.88568C8.61358 5.75601 8.67952 5.5954 8.67952 5.40384C8.67952 5.21229 8.61474 5.05051 8.48519 4.91851C8.35552 4.78662 8.19491 4.72068 8.00336 4.72068C7.8118 4.72068 7.65002 4.78546 7.51802 4.91501C7.38613 5.04468 7.32019 5.20529 7.32019 5.39684C7.32019 5.5884 7.38497 5.75018 7.51452 5.88218C7.64419 6.01407 7.8048 6.08001 7.99636 6.08001ZM8.00452 14.5358C7.10241 14.5358 6.25452 14.3657 5.46086 14.0255C4.66708 13.6853 3.97263 13.2177 3.37752 12.6227C2.78252 12.0276 2.31491 11.3334 1.97469 10.5402C1.63447 9.74696 1.46436 8.89779 1.46436 7.99268C1.46436 7.08768 1.63447 6.24112 1.97469 5.45301C2.31491 4.66479 2.78252 3.97312 3.37752 3.37801C3.97263 2.78301 4.6668 2.3154 5.46002 1.97518C6.25324 1.63495 7.10241 1.46484 8.00752 1.46484C8.91252 1.46484 9.75908 1.63495 10.5472 1.97518C11.3354 2.3154 12.0271 2.78301 12.6222 3.37801C13.2172 3.97312 13.6848 4.66601 14.025 5.45668C14.3652 6.24734 14.5354 7.09368 14.5354 7.99568C14.5354 8.89779 14.3652 9.74568 14.025 10.5393C13.6848 11.3331 13.2172 12.0276 12.6222 12.6227C12.0271 13.2177 11.3342 13.6853 10.5435 14.0255C9.75286 14.3657 8.90652 14.5358 8.00452 14.5358ZM7.99986 13.1525C9.43363 13.1525 10.6508 12.6523 11.6514 11.6518C12.6518 10.6513 13.152 9.43412 13.152 8.00034C13.152 6.56657 12.6518 5.3494 11.6514 4.34884C10.6508 3.3484 9.43363 2.84818 7.99986 2.84818C6.56608 2.84818 5.34891 3.3484 4.34836 4.34884C3.34791 5.3494 2.84769 6.56657 2.84769 8.00034C2.84769 9.43412 3.34791 10.6513 4.34836 11.6518C5.34891 12.6523 6.56608 13.1525 7.99986 13.1525Z"
      fill="currentColor"
    />
  </svg>
)

const ArrowDropDownGlyph: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z"
      fill="currentColor"
    />
  </svg>
)

const AddCircleGlyph: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ aspectRatio: '1 / 1' }}>
    <path
      d="M7.36802 8.63184V10.6C7.36802 10.779 7.42824 10.9291 7.54869 11.0502C7.66913 11.1713 7.81836 11.2318 7.99636 11.2318C8.17436 11.2318 8.32474 11.1713 8.44752 11.0502C8.5703 10.9291 8.63169 10.779 8.63169 10.6V8.63184H10.5999C10.7789 8.63184 10.9289 8.57162 11.05 8.45117C11.1711 8.33073 11.2317 8.18151 11.2317 8.00351C11.2317 7.82551 11.1711 7.67512 11.05 7.55234C10.9289 7.42956 10.7789 7.36818 10.5999 7.36818H8.63169V5.40001C8.63169 5.22101 8.57147 5.07095 8.45102 4.94984C8.33058 4.82873 8.18136 4.76818 8.00336 4.76818C7.82536 4.76818 7.67497 4.82873 7.55219 4.94984C7.42941 5.07095 7.36802 5.22101 7.36802 5.40001V7.36818H5.39986C5.22086 7.36818 5.0708 7.4284 4.94969 7.54884C4.82858 7.66929 4.76802 7.81851 4.76802 7.99651C4.76802 8.17451 4.82858 8.3249 4.94969 8.44767C5.0708 8.57045 5.22086 8.63184 5.39986 8.63184H7.36802ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z"
      fill="currentColor"
    />
  </svg>
)

const WalletGlyph: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z"
      fill="currentColor"
    />
  </svg>
)

// ── Styled bits ────────────────────────────────────────────

const Root = styled(PerpsPanel)`
  display: flex;
  width: 506px;
  flex-shrink: 0;
  flex-direction: column;
  align-self: stretch;
  border-radius: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
  overflow: hidden;
  font-variant-numeric: tabular-nums;

  & > div {
    display: flex;
    padding: 0;
    border-radius: 0;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    background: ${({ theme }) => theme.colors.card};
  }

  @media (min-width: 968px) and (max-width: 1199.98px) {
    width: 357px;
  }

  @media (max-width: 967.98px) {
    width: auto;
    align-self: stretch;
    border-radius: 24px;
    & > div {
      flex: 0 0 auto;
    }
  }
`

const TopCard = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-self: stretch;
  padding: 24px;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    padding: 24px 16px;
  }

  @media (max-width: 575.98px) {
    padding: 16px;
  }
`

const UpDownCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
  gap: 16px;
  border: 0;
  background: transparent;
  border-radius: 0;
`

const UpDownCardActions = styled.div`
  display: flex;
  width: 458px;
  height: 77px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 0;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    width: auto;
    height: 56px;
  }

  @media (max-width: 967.98px) {
    width: auto;
  }
`

const TopCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 0 0 auto;
  gap: 64px;
`

// Symbol header strip
const Head = styled(Flex)`
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const HeadLeft = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text};
`

// eslint-disable-next-line no-restricted-syntax -- brand SVG illustration + on colored bg, contrast guarantee
const TokenChip = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: #f7931a;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
`

const Pair = styled.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  padding: 0 6px;
`

const HeadRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const HeadPrice = styled.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.2;
`

const HeadPnl = styled.span<{ $positive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme, $positive }) => ($positive ? theme.colors.success : theme.colors.failure)};
`

// Body
const Body = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const SectionHead = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`

const PreTitle = styled(Text).attrs({ fontSize: '12px' })`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`

// Wallet / fund chip
const FundChip = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.textSubtle};
  transition: filter 0.12s;
  &:hover {
    filter: brightness(0.98);
  }
`

const FundAmt = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: right;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`

// Bet input field
/* eslint-disable no-restricted-syntax -- brand primary, no theme variant */
const BetField = styled.label`
  display: flex;
  min-width: 296px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
  cursor: text;
  transition: box-shadow 0.12s;
  &:focus-within {
    box-shadow:
      0 0 0 1px #7645D9,
      0 0 0 4px rgba(118, 69, 217, 0.20);
  }
`
/* eslint-enable no-restricted-syntax */

const BetFieldRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`

const BetErrorText = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.failure};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  font-feature-settings: 'liga' off;
`

const BetLabel = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`

const BetInputWrap = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

const BetInput = styled.input`
  /* field-sizing: content lets the input auto-grow to fit the typed
     value (Chrome/Edge 123+, Safari 17.4+). Without it, the previous
     fixed 90px width clipped after ~4 digits at 40px. min-width keeps
     room for the placeholder "0" before any input; max-width clamps
     it from overflowing the bet field on extreme inputs. */
  field-sizing: content;
  min-width: 22px;
  max-width: 240px;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
  outline: none;
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
    opacity: 1;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (min-width: 968px) and (max-width: 1199.98px) {
    color: ${({ theme }) => theme.colors.textSubtle};
    font-size: 32px;
    letter-spacing: -0.32px;
  }
`

const BetTokenButton = styled.button`
  display: flex;
  align-items: flex-end;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  & > :last-child {
    margin-left: -11px;
  }
  color: ${({ theme }) => theme.colors.text};
`

// eslint-disable-next-line no-restricted-syntax -- brand SVG illustration + on colored bg, contrast guarantee
const QuoteIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: #26a17b;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
  /* When the chip wraps a consumer-supplied logo image, fit it inside
     the circle. Without this the raster either overflows or stretches. */
  & > img,
  & > svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    background: #fff;
  }
`

const QuoteArrowBox = styled.span`
  display: flex;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 6px;
  border-top: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-right: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.inputSecondary};
  border-left: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.textSubtle};
  flex-shrink: 0;
`

/* Wrapper that anchors the asset-dropdown menu to the chip button. */
const AssetDropdownAnchor = styled.span`
  position: relative;
  display: inline-flex;
`

const AssetDropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 160px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: 6px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
`

const AssetDropdownItem = styled.button<{ $selected?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border: 0;
  border-radius: 8px;
  background: ${({ $selected, theme }) => ($selected ? theme.colors.input : 'transparent')};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.colors.input};
  }
`

/* eslint-disable no-restricted-syntax -- brand SVG illustration + on colored bg, contrast guarantee */
const AssetItemChip = styled.span<{ $color?: string }>`
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: ${({ $color }) => $color ?? '#26a17b'};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex: 0 0 24px;
  overflow: hidden;
  & > img,
  & > svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`
/* eslint-enable no-restricted-syntax */

const QuoteSym = styled.span`
  font-size: 14px;
  font-weight: 600;
`

// % shortcut row
const PctRow = styled(Flex)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`

const PctButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary60};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.12px;
  &:hover {
    filter: brightness(1.1);
  }
`

const PctDivider = styled.span`
  width: 1px;
  height: 16px;
  background: ${({ theme }) => theme.colors.cardBorder};
`

// Leverage section
const LevRow = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`

const LevValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    font-size: 32px;
    letter-spacing: -0.32px;
  }
`

const ZONE_BG: Record<Zone, string> = {
  safe: '#31D0AA',
  caution: '#1FC7D4',
  warn: '#FFB237',
  danger: '#ED4B9E',
}

const ZonePill = styled.span<{ $zone: Zone }>`
  display: flex;
  padding: 2px 5px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  background: ${({ $zone }) => ZONE_BG[$zone]};
`

// eslint-disable-next-line no-restricted-syntax -- on colored bg, contrast guarantee
const ZonePillText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #FFF;
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  html.dark & {
    color: #000;
  }
`

// eslint-disable-next-line no-restricted-syntax -- on colored bg, contrast guarantee
const ZoneTipAnchor = styled.span`
  display: inline-flex;
  align-items: center;
  color: #FFF;
  cursor: help;

  html.dark & {
    color: #000;
  }
`

// Hand-rolled leverage slider (the Slider primitive can't do a per-zone
// gradient fill across the 1..maxLeverage range — keeping range input).
const LevBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 8px;
`

/* eslint-disable no-restricted-syntax -- TODO(design): replace with color-mix or new token */
const LevTrack = styled.div<{ $fillPct: number; $zone: Zone }>`
  position: relative;
  height: 21px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: linear-gradient(140deg, #E5FDFF 0%, #F3EFFF 100%);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.06) inset;
  overflow: visible;

  html.dark & {
    background: ${({ theme }) => theme.colors.backgroundBubblegum};
  }

  @media (min-width: 968px) and (max-width: 1199.98px) {
    height: 16px;
  }
`
/* eslint-enable no-restricted-syntax */

const LevThumb = styled.span<{ $fillPct: number; $variant: 'single' | 'double' | 'triple' }>`
  position: absolute;
  top: ${({ $variant }) => ($variant === 'triple' ? '-15px' : '-10px')};
  left: ${({ $fillPct, $variant }) =>
    $variant === 'triple'
      ? `calc(${$fillPct}% - 22px)`
      : $variant === 'double'
        ? `calc(${$fillPct}% - 20.7px)`
        : `calc(${$fillPct}% - 19px)`};
  width: ${({ $variant }) =>
    $variant === 'triple' ? '44px' : $variant === 'double' ? '41.455px' : '38.004px'};
  height: ${({ $variant }) =>
    $variant === 'triple' ? '48px' : $variant === 'double' ? '42.549px' : '38.186px'};
  /* Sits above LevRangeInput so dragging the thumb is captured by our
     pointer handler instead of falling through to the native input
     (which maps click X→value and would snap to 1 at low leverage). */
  z-index: 2;
  pointer-events: auto;
  touch-action: none;
  cursor: grab;
  &:active { cursor: grabbing; }
`

/* eslint-disable no-restricted-syntax -- brand SVG illustration */
const GrabberGlyph: React.FC = () => (
  <svg width="38" height="39" viewBox="0 0 38 39" fill="none" aria-hidden="true">
    <ellipse cx="19.0019" cy="19.6397" rx="19.0019" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="19.0013" cy="17.455" rx="17.8841" ry="17.455" fill="#D0702D" />
    <rect x="23.3804" y="9" width="11.1776" height="10.9094" rx="2" fill="#FAD658" />
  </svg>
)

const GrabberDoubleGlyph: React.FC = () => (
  <svg width="42" height="43" viewBox="0 0 42 43" fill="none" aria-hidden="true">
    <ellipse cx="18.5455" cy="24.003" rx="18.5455" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="18.5459" cy="21.8183" rx="17.4546" ry="17.455" fill="#D0702D" />
    <ellipse cx="22.9098" cy="19.6397" rx="18.5455" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="22.9092" cy="17.455" rx="17.4546" ry="17.455" fill="#D0702D" />
    <rect x="21.8184" y="12" width="10.9091" height="10.9094" rx="2" fill="#FAD658" />
  </svg>
)

const GrabberDegenGlyph: React.FC = () => (
  <svg width="44" height="48" viewBox="0 0 44 48" fill="none" aria-hidden="true">
    <ellipse cx="25.0904" cy="29.4522" rx="18.5455" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="25.0913" cy="27.2753" rx="17.4546" ry="17.455" fill="#D0702D" />
    <ellipse cx="18.5455" cy="24.003" rx="18.5455" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="18.5464" cy="21.8183" rx="17.4546" ry="17.455" fill="#D0702D" />
    <ellipse cx="22.9098" cy="19.6397" rx="18.5455" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="22.9087" cy="17.455" rx="17.4546" ry="17.455" fill="#D0702D" />
    <rect x="21.8184" y="12" width="10.9091" height="10.9094" rx="2" fill="#FAD658" />
  </svg>
)
/* eslint-enable no-restricted-syntax */

const LevRangeInput = styled.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`

// Leverage tab row (preset values + custom field)
const LevTabs = styled(Flex)`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 4px;
  padding: 0;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`

const LevTab = styled.button<{ $active: boolean }>`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border: 0;
  border-radius: 16px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.textSubtle : theme.colors.input};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.invertedContrast : theme.colors.textSubtle};
  font-family: inherit;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  cursor: pointer;
  &:hover {
    color: ${({ $active, theme }) => ($active ? theme.colors.invertedContrast : theme.colors.text)};
  }
`

const LevCustom = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  &:focus-within {
    box-shadow:
      0 0 0 1px ${({ theme }) => theme.colors.secondary},
      0 0 0 4px rgba(118, 69, 217, 0.20);
  }
`

const LevCustomInput = styled.input`
  flex: 1;
  width: 100%;
  border: 0;
  background: transparent;
  text-align: center;
  font-family: inherit;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  font-variant-numeric: tabular-nums;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const LevCustomSuffix = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSubtle};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding-left: 4px;
`

// Stats summary
const StatsCard = styled.div`
  margin: 0 20px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`

/**
 * Trade-info card mounts whenever the user has a non-empty bet. Animate
 * it in instead of popping in — fades from 0 → 1 + slides up 8px so the
 * arrival reads as a response to typing rather than an abrupt swap.
 * 240ms / ease-out feels responsive without being slow.
 */
const statsListEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const StatsList = styled.div`
  display: flex;
  width: 458px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
  animation: ${statsListEnter} 0.24s ease-out;

  @media (max-width: 1199.98px) {
    width: auto;
  }
`

const StatsRow = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`

const StatsLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`

const StatsValue = styled.span<{ $danger?: boolean }>`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme, $danger }) => ($danger ? theme.colors.failure : theme.colors.text)};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`

// UP / DOWN buttons
/* eslint-disable no-restricted-syntax -- on colored bg, contrast guarantee */
const DirectionButton = styled.button<{ $variant: 'up' | 'down' }>`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom: 4px solid rgba(0, 0, 0, 0.2);
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 24px;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    border-radius: 16px;
  }
  font-family: Kanit;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.24px;
  font-feature-settings: 'liga' off;
  color: #FFF;
  cursor: pointer;
  transition: filter 0.12s, transform 0.06s;
  background: ${({ theme, $variant }) => ($variant === 'up' ? theme.colors.success : theme.colors.failure)};

  html.dark & {
    color: #000;
  }
  &:hover:not(:disabled) {
    filter: brightness(1.08);
  }
  &:active:not(:disabled) {
    transform: translateY(1px);
    border-bottom-width: 2px;
  }
  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.backgroundDisabled};
    color: ${({ theme }) => theme.colors.textDisabled};
    border-color: transparent;
  }

  html.dark &:disabled {
    color: ${({ theme }) => theme.colors.textDisabled};
  }
`
/* eslint-enable no-restricted-syntax */

const DirectionButtonContent = styled.span`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

// Deposit / Withdraw bottom tabs
const DwRow = styled(Flex)`
  align-self: stretch;
  gap: 8px;
`

const DwButton = styled(Button)<{ $variant: 'primary' | 'secondary' }>`
  display: flex;
  padding: 11px 12px 13px 12px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 0;
  border-radius: 16px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.12s;
  background: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.primary : theme.colors.tertiary)};
  color: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.invertedContrast : theme.colors.primary)};
  border-bottom: 2px solid
    ${({ $variant }) => ($variant === 'primary' ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.10)')};
  &:hover {
    filter: brightness(1.08);
  }
`

// Unrealized PnL card
const Bottom = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};

  @media (min-width: 968px) and (max-width: 1199.98px) {
    padding: 24px 16px;
  }

  @media (max-width: 575.98px) {
    padding: 16px;
  }
`

const PnlCard = styled(Flex)`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: ${({ theme }) => theme.colors.cardSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 24px;
`

const PnlLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: center;
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`

const PnlValue = styled.span<{ $zero?: boolean; $disabled?: boolean }>`
  color: ${({ $zero, $disabled, theme }) =>
    $disabled
      ? theme.colors.textDisabled
      : $zero
        ? theme.colors.textSubtle
        : theme.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.32px;
  font-variant-numeric: tabular-nums;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -0.24px;
  }
`

// ── Bet asset selector ────────────────────────────────────

interface BetAssetSelectorProps {
  selected: string
  options?: readonly { code: string; logoUrl?: string; color?: string }[]
  onSelect?: (next: string) => void
  /** Used when no `options` (or only one) — restores the legacy chip-as-button behavior. */
  onClickFallback?: () => void
}

const BetAssetSelector: React.FC<BetAssetSelectorProps> = ({
  selected,
  options,
  onSelect,
  onClickFallback,
}) => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLSpanElement | null>(null)

  // Close on outside click / Escape so the menu doesn't strand if the
  // user clicks elsewhere in the panel without picking an option.
  useEffect(() => {
    if (!open) return undefined
    const onDown = (e: MouseEvent) => {
      if (!anchorRef.current) return
      if (!anchorRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('mousedown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const hasDropdown = !!options && options.length > 1
  const selectedOption = options?.find((o) => o.code === selected)
  const handleClick = () => {
    if (hasDropdown) {
      setOpen((v) => !v)
    } else {
      onClickFallback?.()
    }
  }

  return (
    <AssetDropdownAnchor ref={anchorRef}>
      <BetTokenButton type="button" onClick={handleClick} aria-label="Choose bet denomination">
        <QuoteIcon>
          {selectedOption?.logoUrl ? (
            <img src={selectedOption.logoUrl} alt={selected} loading="lazy" decoding="async" />
          ) : (
            selected
          )}
        </QuoteIcon>
        <QuoteArrowBox>
          <ArrowDropDownGlyph />
        </QuoteArrowBox>
      </BetTokenButton>
      {hasDropdown && open ? (
        <AssetDropdownMenu role="menu">
          {options!.map((opt) => (
            <AssetDropdownItem
              key={opt.code}
              type="button"
              role="menuitemradio"
              aria-checked={opt.code === selected}
              $selected={opt.code === selected}
              onClick={() => {
                onSelect?.(opt.code)
                setOpen(false)
              }}
            >
              <AssetItemChip $color={opt.color}>
                {opt.logoUrl ? (
                  <img src={opt.logoUrl} alt={opt.code} loading="lazy" decoding="async" />
                ) : (
                  opt.code.slice(0, 1)
                )}
              </AssetItemChip>
              {opt.code}
            </AssetDropdownItem>
          ))}
        </AssetDropdownMenu>
      ) : null}
    </AssetDropdownAnchor>
  )
}

// ── Component ─────────────────────────────────────────────

export const SimpleBetPanel: React.FC<SimpleBetPanelProps> = ({
  symbol,
  baseAsset,
  pair,
  price,
  pricePnlPct,
  onSymbolClick,
  bet,
  onBetChange,
  betError,
  leverage,
  onLeverageChange,
  maxLeverage = DEFAULT_MAX_LEVERAGE,
  presets = DEFAULT_PRESETS,
  quoteAsset,
  onQuoteAssetClick,
  assetOptions,
  onAssetChange,
  fundBalanceText,
  onTopUpFund,
  onPercentClick,
  estimatedEntry,
  liqIfLong,
  marginRequired,
  openingFee,
  canSubmit,
  isSubmittingUp = false,
  isSubmittingDown = false,
  onUp,
  onDown,
  onDeposit,
  onWithdraw,
  connectWalletLabel,
  onConnectWallet,
  unrealizedPnl,
}) => {
  const fillPct = Math.min(100, Math.max(0, (leverage / maxLeverage) * 100))
  const zone = zoneFromLeverage(leverage)
  const degen = isDegen(leverage)
  const double = isDouble(leverage)
  const submitting = isSubmittingUp || isSubmittingDown
  const upDisabled = !canSubmit || submitting
  const downDisabled = !canSubmit || submitting

  // Hover tooltip on the leverage-zone info circle. Content text is
  // zone-dependent — re-running the hook each render is fine, the
  // returned `tooltip` ReactNode is stable for the same zone string.
  const zoneTipText = zoneTooltip(zone)
  const { targetRef: zoneTipTargetRef, tooltip: zoneTipNode } = useTooltip(zoneTipText, { placement: 'top' })

  // Custom thumb-drag handler. The native range input below the thumb
  // maps the click X coordinate to a value, so when the visual thumb
  // sits at fillPct≈1% (low leverage), clicking it lands the click at
  // the track's left edge → value=1. We intercept pointer-down on the
  // thumb itself, capture the pointer, and translate motion deltas
  // into leverage values so the gesture starts at the current value
  // rather than where the thumb happened to be drawn.
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const onThumbPointerDown = React.useCallback(
    (e: React.PointerEvent<HTMLSpanElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const target = e.currentTarget
      const track = trackRef.current
      if (!track) return
      target.setPointerCapture(e.pointerId)
      const trackRect = track.getBoundingClientRect()
      const compute = (clientX: number) => {
        const pct = Math.max(0, Math.min(1, (clientX - trackRect.left) / trackRect.width))
        const next = Math.round(1 + pct * (maxLeverage - 1))
        return Math.max(1, Math.min(maxLeverage, next))
      }
      const onMove = (ev: PointerEvent) => onLeverageChange(compute(ev.clientX))
      const onUp = () => {
        target.removeEventListener('pointermove', onMove)
        target.removeEventListener('pointerup', onUp)
        target.removeEventListener('pointercancel', onUp)
      }
      target.addEventListener('pointermove', onMove)
      target.addEventListener('pointerup', onUp)
      target.addEventListener('pointercancel', onUp)
    },
    [maxLeverage, onLeverageChange],
  )

  return (
    <Root aria-label={`Simple bet panel · ${pair || symbol}`}>
      {/* Top card: form + UP/DOWN with auto space-between */}
      <TopCard>
      <TopCardInner>
      <Body>
        {/* My Perp Fund + bet input */}
        <Section>
          <SectionHead>
            <PreTitle>My Perp Fund</PreTitle>
            <FundChip type="button" onClick={onTopUpFund} aria-label="Top up fund">
              <span style={{ display: 'inline-flex' }}>
                <WalletGlyph />
              </span>
              <FundAmt>{fundBalanceText}</FundAmt>
              <span style={{ display: 'inline-flex' }}>
                <AddCircleGlyph />
              </span>
            </FundChip>
          </SectionHead>

          <BetField>
            <BetFieldRow>
              <BetLabel>My Bet</BetLabel>
              <BetInputWrap>
                <BetInput
                  type="number"
                  inputMode="decimal"
                  value={bet}
                  onChange={(e) => onBetChange(e.target.value)}
                  aria-label="Bet amount"
                  placeholder="0"
                />
                <BetAssetSelector
                  selected={quoteAsset}
                  options={assetOptions}
                  onSelect={onAssetChange}
                  onClickFallback={onQuoteAssetClick}
                />
              </BetInputWrap>
            </BetFieldRow>
            {betError ? <BetErrorText role="alert">{betError}</BetErrorText> : null}
          </BetField>

          <PctRow>
            <PctButton type="button" onClick={() => onPercentClick?.(0.25)}>
              25%
            </PctButton>
            <PctDivider />
            <PctButton type="button" onClick={() => onPercentClick?.(0.5)}>
              50%
            </PctButton>
            <PctDivider />
            <PctButton type="button" onClick={() => onPercentClick?.(1)}>
              MAX
            </PctButton>
          </PctRow>
        </Section>

        {/* Leverage */}
        <Section>
          <PreTitle>Leverage</PreTitle>

          <LevRow>
            <LevValue>{leverage}x</LevValue>
            <ZonePill $zone={zone}>
              {zoneEmoji(zone) ? (
                <ZonePillText as="span" aria-hidden>{zoneEmoji(zone)}</ZonePillText>
              ) : null}
              <ZonePillText>{zoneLabel(zone)}</ZonePillText>
              <ZoneTipAnchor ref={zoneTipTargetRef} aria-label={`${zoneLabel(zone)} explanation`}>
                <InfoCircleGlyph />
              </ZoneTipAnchor>
              {zoneTipNode}
            </ZonePill>
          </LevRow>

          <LevBar>
          <LevTrack ref={trackRef} $fillPct={fillPct} $zone={zone} aria-hidden>
            {/* Native input below the thumb still handles clicks on the
                rest of the track + keyboard interaction. */}
            <LevRangeInput
              type="range"
              min={1}
              max={maxLeverage}
              value={leverage}
              onChange={(e) => onLeverageChange(Number(e.target.value))}
              aria-label="Leverage"
            />
            <LevThumb
              $fillPct={fillPct}
              $variant={degen ? 'triple' : double ? 'double' : 'single'}
              onPointerDown={onThumbPointerDown}
            >
              {degen ? (
                <GrabberDegenGlyph />
              ) : double ? (
                <GrabberDoubleGlyph />
              ) : (
                <GrabberGlyph />
              )}
            </LevThumb>
          </LevTrack>

          <LevTabs role="tablist">
            <LevCustom>
              <LevCustomInput
                type="number"
                min={1}
                max={maxLeverage}
                value={leverage}
                onChange={(e) =>
                  onLeverageChange(Math.max(1, Math.min(maxLeverage, Number(e.target.value) || 1)))
                }
                aria-label="Custom leverage"
              />
              <LevCustomSuffix>x</LevCustomSuffix>
            </LevCustom>
            {presets.map((p) => (
              <LevTab
                key={p}
                type="button"
                role="tab"
                aria-selected={leverage === p}
                $active={leverage === p}
                onClick={() => onLeverageChange(p)}
              >
                {p}x
              </LevTab>
            ))}
          </LevTabs>
          </LevBar>
        </Section>

        {/* Aster's REST `/fapi/v3/order` perp API has no duration / auto-
            settle field — only the separate on-chain `predictAndBet`
            contract on `/trade/1001x/...` does. We submit through the
            REST API, so the Duration row was dead UI; dropped. If we
            ever wire the prediction product, restore it here. */}
      </Body>

      {/* UP / DOWN — always wrapped in card; stats only show when bet is filled */}
      <UpDownCard>
        {bet && bet !== '0' ? (
          <StatsList>
            <StatsRow>
              <StatsLabel>Estimated Entry</StatsLabel>
              <StatsValue>{estimatedEntry}</StatsValue>
            </StatsRow>
            <StatsRow>
              <StatsLabel>Liquidation if long</StatsLabel>
              <StatsValue $danger>{liqIfLong}</StatsValue>
            </StatsRow>
            <StatsRow>
              <StatsLabel>Margin required</StatsLabel>
              <StatsValue>{marginRequired}</StatsValue>
            </StatsRow>
            <StatsRow>
              <StatsLabel>Opening fee</StatsLabel>
              <StatsValue>{openingFee}</StatsValue>
            </StatsRow>
          </StatsList>
        ) : null}
        <UpDownCardActions>
          <DirectionButton
            type="button"
            $variant="up"
            disabled={upDisabled}
            onClick={onUp}
            aria-busy={isSubmittingUp}
          >
            <DirectionButtonContent>
              <UpArrow />
              {isSubmittingUp ? '...' : 'UP'}
            </DirectionButtonContent>
          </DirectionButton>
          <DirectionButton
            type="button"
            $variant="down"
            disabled={downDisabled}
            onClick={onDown}
            aria-busy={isSubmittingDown}
          >
            <DirectionButtonContent>
              <DownArrow />
              {isSubmittingDown ? '...' : 'DOWN'}
            </DirectionButtonContent>
          </DirectionButton>
        </UpDownCardActions>
      </UpDownCard>
      </TopCardInner>
      </TopCard>

      {/* Bottom card: Deposit/Withdraw + Unrealized PnL */}
      <Bottom>
      {/* Deposit / Withdraw — replaced by a single full-width Connect
          wallet button when the consumer signals a disconnected state. */}
      <DwRow>
        {connectWalletLabel ? (
          <DwButton $variant="primary" onClick={onConnectWallet} type="button">
            {connectWalletLabel}
          </DwButton>
        ) : (
          <>
            <DwButton $variant="primary" onClick={onDeposit} type="button">
              Deposit
            </DwButton>
            <DwButton $variant="secondary" onClick={onWithdraw} type="button">
              Withdraw
            </DwButton>
          </>
        )}
      </DwRow>

      {/* Unrealized PnL — muted color when value is zero (no open
          position to score). Strips currency symbols / commas / signs
          before checking so e.g. "$0", "+$0.00", "0.00 USDT" all match. */}
      <PnlCard>
        <PnlLabel>Unrealized PnL</PnlLabel>
        <PnlValue
          $zero={Number(String(unrealizedPnl).replace(/[^\d.-]/g, '')) === 0}
          $disabled={Boolean(connectWalletLabel)}
        >
          {unrealizedPnl}
        </PnlValue>
      </PnlCard>
      </Bottom>
    </Root>
  )
}
