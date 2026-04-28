import React from 'react'
import styled from 'styled-components'
import { Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Text } from '../primitives/Text'
import { AddIcon, HelpIcon, WalletFilledIcon } from '../primitives/Icons'
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
  leverage: number
  onLeverageChange: (next: number) => void
  quoteAsset: string
  onQuoteAssetClick?: () => void

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

  unrealizedPnl: string
}

const PRESETS = [50, 250, 500, 1001] as const
const MAX_LEVERAGE = 1001

type Zone = 'safe' | 'warn' | 'danger'

const zoneFromLeverage = (lev: number): Zone =>
  lev <= 50 ? 'safe' : lev <= 250 ? 'warn' : 'danger'

const zoneLabel = (z: Zone) =>
  z === 'safe' ? 'Safe zone' : z === 'warn' ? 'Caution' : 'Danger zone'

// Branded UP/DOWN arrows — kept inline because there's no 1:1 primitive.
const UpArrow: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 4l-7 7h4v9h6v-9h4z" />
  </svg>
)
const DownArrow: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 20l7-7h-4V4h-6v9H5z" />
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
      d="M7.99636 11.2598C8.18224 11.2598 8.3393 11.1966 8.46752 11.0702C8.59563 10.9436 8.65969 10.7869 8.65969 10.6V7.85984C8.65969 7.67284 8.5968 7.51612 8.47102 7.38967C8.34524 7.26323 8.18936 7.20001 8.00336 7.20001C7.81747 7.20001 7.66041 7.26323 7.53219 7.38967C7.40408 7.51612 7.34002 7.67284 7.34002 7.85984V10.6C7.34002 10.7869 7.40291 10.9436 7.52869 11.0702C7.65447 11.1966 7.81036 11.2598 7.99636 11.2598ZM7.99636 6.07968C8.18791 6.07968 8.34969 6.0149 8.48169 5.88534C8.61358 5.75567 8.67952 5.59506 8.67952 5.40351C8.67952 5.21195 8.61474 5.05018 8.48519 4.91818C8.35552 4.78629 8.19491 4.72034 8.00336 4.72034C7.8118 4.72034 7.65002 4.78512 7.51802 4.91467C7.38613 5.04434 7.32019 5.20495 7.32019 5.39651C7.32019 5.58806 7.38497 5.74984 7.51452 5.88184C7.64419 6.01373 7.8048 6.07968 7.99636 6.07968ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z"
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
  background: ${({ theme }) => theme.colors.card};
  font-variant-numeric: tabular-nums;
  & > div {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    flex: 1 0 0;
    align-self: stretch;
    background: ${({ theme }) => theme.colors.card};
  }
`

const TopCard = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-self: stretch;
`

const UpDownCard = styled.div`
  display: flex;
  width: 458px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
`

const UpDownCardActions = styled.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
  padding: 0 16px 16px 16px;
`

const TopCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
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
  padding: 8px;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
  cursor: pointer;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text};
  transition: filter 0.12s;
  &:hover {
    filter: brightness(0.98);
  }
`

const FundAmt = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
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
const BetField = styled.div`
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
`

const BetFieldRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
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
  width: 90px;
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
`

const ZonePill = styled.span<{ $zone: Zone }>`
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border-top: 1px solid
    ${({ $zone }) => ($zone === 'safe' ? '#BCEFE2' : $zone === 'warn' ? '#F9D9B8' : '#F5BCD7')};
  border-right: 1px solid
    ${({ $zone }) => ($zone === 'safe' ? '#BCEFE2' : $zone === 'warn' ? '#F9D9B8' : '#F5BCD7')};
  border-bottom: 2px solid
    ${({ $zone }) => ($zone === 'safe' ? '#BCEFE2' : $zone === 'warn' ? '#F9D9B8' : '#F5BCD7')};
  border-left: 1px solid
    ${({ $zone }) => ($zone === 'safe' ? '#BCEFE2' : $zone === 'warn' ? '#F9D9B8' : '#F5BCD7')};
  background: ${({ $zone }) =>
    $zone === 'safe' ? '#EAFBF7' : $zone === 'warn' ? '#FBF2E7' : '#FCE7F1'};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

// Hand-rolled leverage slider (the Slider primitive can't do a per-zone
// gradient fill across the 1..MAX_LEVERAGE range — keeping range input).
const LevBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`

const LevTrack = styled.div<{ $fillPct: number; $zone: Zone }>`
  position: relative;
  height: 21px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: linear-gradient(140deg, #E5FDFF 0%, #F3EFFF 100%);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.06) inset;
  overflow: visible;
`

const LevFill = styled.span<{ $fillPct: number; $zone: Zone; $degen?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $fillPct }) => `${$fillPct}%`};
  border-radius: 24px 0 0 24px;
  background: ${({ theme, $zone, $degen }) =>
    $degen
      ? 'linear-gradient(90deg, #FAD658 0%, #ED4B9E 100%)'
      : $zone === 'safe'
        ? theme.colors.success
        : $zone === 'warn'
          ? theme.colors.warning
          : theme.colors.failure};
  box-shadow: ${({ $degen }) =>
    $degen ? '0 2px 0 0 rgba(0, 0, 0, 0.06) inset' : 'none'};
`

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
  pointer-events: none;
  cursor: grab;
  &:active { cursor: grabbing; }
`

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

// Duration row (static "Perpetual" placeholder — preserves layout)
const DurationRow = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`

// Stats summary
const StatsCard = styled.div`
  margin: 0 20px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`

const StatsList = styled.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
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
const DirectionRow = styled(Flex)`
  align-self: stretch;
  gap: 8px;
`

const DirectionButton = styled.button<{ $variant: 'up' | 'down' }>`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 56px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom-width: 4px;
  border-radius: 16px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.18px;
  color: ${({ theme }) => theme.colors.invertedContrast};
  cursor: pointer;
  transition: filter 0.12s, transform 0.06s;
  background: ${({ theme, $variant }) => ($variant === 'up' ? theme.colors.success : theme.colors.failure)};
  &:hover:not(:disabled) {
    filter: brightness(1.08);
  }
  &:active:not(:disabled) {
    transform: translateY(1px);
    border-bottom-width: 2px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

// Deposit / Withdraw bottom tabs
const DwRow = styled(Flex)`
  align-self: stretch;
  gap: 8px;
`

const DwButton = styled(Button)<{ $variant: 'primary' | 'secondary' }>`
  flex: 1;
  height: 40px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.12s;
  background: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.primary : theme.colors.input)};
  color: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.invertedContrast : theme.colors.primary)};
  border-bottom-color: ${({ $variant }) => ($variant === 'primary' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.1)')};
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
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const PnlCard = styled(Flex)`
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
`

const PnlLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const PnlValue = styled.span`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.22px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

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
  leverage,
  onLeverageChange,
  quoteAsset,
  onQuoteAssetClick,
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
  unrealizedPnl,
}) => {
  const fillPct = Math.min(100, Math.max(0, (leverage / MAX_LEVERAGE) * 100))
  const zone = zoneFromLeverage(leverage)
  const submitting = isSubmittingUp || isSubmittingDown
  const upDisabled = !canSubmit || submitting
  const downDisabled = !canSubmit || submitting

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
              <span style={{ display: 'inline-flex', color: 'var(--pcs-colors-text-subtle, #7A6EAA)' }}>
                <WalletGlyph />
              </span>
              <FundAmt>{fundBalanceText}</FundAmt>
              <span style={{ display: 'inline-flex', color: 'var(--pcs-colors-text, #280D5F)' }}>
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
                <BetTokenButton type="button" onClick={onQuoteAssetClick} aria-label="Choose quote asset">
                  <QuoteIcon>{quoteAsset}</QuoteIcon>
                  <QuoteArrowBox>
                    <ArrowDropDownGlyph />
                  </QuoteArrowBox>
                </BetTokenButton>
              </BetInputWrap>
            </BetFieldRow>
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
              {zoneLabel(zone)}
              <span style={{ display: 'inline-flex', color: 'var(--pcs-colors-text-subtle, #7A6EAA)' }}>
                <InfoCircleGlyph />
              </span>
            </ZonePill>
          </LevRow>

          <LevBar>
          <LevTrack $fillPct={fillPct} $zone={zone} aria-hidden>
            <LevFill $fillPct={fillPct} $zone={zone} $degen={leverage > 500} />
            <LevThumb
              $fillPct={fillPct}
              $variant={
                leverage > 500 ? 'triple' : leverage > 250 ? 'double' : 'single'
              }
            >
              {leverage > 500 ? (
                <GrabberDegenGlyph />
              ) : leverage > 250 ? (
                <GrabberDoubleGlyph />
              ) : (
                <GrabberGlyph />
              )}
            </LevThumb>
            <LevRangeInput
              type="range"
              min={1}
              max={MAX_LEVERAGE}
              value={leverage}
              onChange={(e) => onLeverageChange(Number(e.target.value))}
              aria-label="Leverage"
            />
          </LevTrack>

          <LevTabs role="tablist">
            <LevCustom>
              <LevCustomInput
                type="number"
                min={1}
                max={MAX_LEVERAGE}
                value={leverage}
                onChange={(e) =>
                  onLeverageChange(Math.max(1, Math.min(MAX_LEVERAGE, Number(e.target.value) || 1)))
                }
                aria-label="Custom leverage"
              />
              <LevCustomSuffix>x</LevCustomSuffix>
            </LevCustom>
            {PRESETS.map((p) => (
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

        {/* Duration (display-only placeholder — matches the original prototype) */}
        <DurationRow>
          <PreTitle>Duration</PreTitle>
          <FundChip type="button" disabled>
            <FundAmt style={{ fontSize: 14 }}>Perpetual</FundAmt>
            <span aria-hidden>▾</span>
          </FundChip>
        </DurationRow>
      </Body>

      {/* UP / DOWN — wrapped in card when bet is filled, otherwise plain */}
      {bet && bet !== '0' ? (
        <UpDownCard>
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
          <UpDownCardActions>
            <DirectionButton
              type="button"
              $variant="up"
              disabled={upDisabled}
              onClick={onUp}
              aria-busy={isSubmittingUp}
            >
              <UpArrow />
              {isSubmittingUp ? '...' : 'UP'}
            </DirectionButton>
            <DirectionButton
              type="button"
              $variant="down"
              disabled={downDisabled}
              onClick={onDown}
              aria-busy={isSubmittingDown}
            >
              <DownArrow />
              {isSubmittingDown ? '...' : 'DOWN'}
            </DirectionButton>
          </UpDownCardActions>
        </UpDownCard>
      ) : (
        <DirectionRow>
          <DirectionButton
            type="button"
            $variant="up"
            disabled={upDisabled}
            onClick={onUp}
            aria-busy={isSubmittingUp}
          >
            <UpArrow />
            {isSubmittingUp ? '...' : 'UP'}
          </DirectionButton>
          <DirectionButton
            type="button"
            $variant="down"
            disabled={downDisabled}
            onClick={onDown}
            aria-busy={isSubmittingDown}
          >
            <DownArrow />
            {isSubmittingDown ? '...' : 'DOWN'}
          </DirectionButton>
        </DirectionRow>
      )}
      </TopCardInner>
      </TopCard>

      {/* Bottom card: Deposit/Withdraw + Unrealized PnL */}
      <Bottom>
      {/* Deposit / Withdraw */}
      <DwRow>
        <DwButton $variant="primary" onClick={onDeposit} type="button">
          Deposit
        </DwButton>
        <DwButton $variant="secondary" onClick={onWithdraw} type="button">
          Withdraw
        </DwButton>
      </DwRow>

      {/* Unrealized PnL */}
      <PnlCard>
        <PnlLabel>
          Unrealized PnL <HelpIcon color="textSubtle" width="14px" />
        </PnlLabel>
        <PnlValue>{unrealizedPnl}</PnlValue>
      </PnlCard>
      </Bottom>
    </Root>
  )
}
