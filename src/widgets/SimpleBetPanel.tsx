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

// ── Styled bits ────────────────────────────────────────────

const Root = styled(PerpsPanel)`
  width: 420px;
  flex-shrink: 0;
  align-self: stretch;
  font-variant-numeric: tabular-nums;
  & > div {
    background: ${({ theme }) => theme.colors.card};
    padding: 0;
  }
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
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
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
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;
  cursor: pointer;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text};
  transition: filter 0.12s;
  &:hover {
    filter: brightness(1.05);
  }
`

const FundAmt = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12px;
`

// Bet input field
const BetField = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 16px;
`

const BetLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSubtle};
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
  text-align: right;
  font-family: inherit;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  font-variant-numeric: tabular-nums;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const BetTokenButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px 4px 4px;
  border-radius: 999px;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text};
`

const QuoteIcon = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: #26a17b;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  margin-right: 4px;
  flex-shrink: 0;
`

const QuoteSym = styled.span`
  font-size: 14px;
  font-weight: 600;
`

// % shortcut row
const PctRow = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`

const PctButton = styled.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px;
  cursor: pointer;
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
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.28px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
`

const ZonePill = styled.span<{ $zone: Zone }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: ${({ theme, $zone }) =>
    $zone === 'safe'
      ? `color-mix(in srgb, ${theme.colors.success} 20%, transparent)`
      : $zone === 'warn'
        ? `color-mix(in srgb, ${theme.colors.warning} 20%, transparent)`
        : `color-mix(in srgb, ${theme.colors.failure} 20%, transparent)`};
  border: 1px solid
    ${({ theme, $zone }) =>
      $zone === 'safe'
        ? `color-mix(in srgb, ${theme.colors.success} 40%, transparent)`
        : $zone === 'warn'
          ? `color-mix(in srgb, ${theme.colors.warning} 40%, transparent)`
          : `color-mix(in srgb, ${theme.colors.failure} 40%, transparent)`};
  color: ${({ theme, $zone }) => ($zone === 'danger' ? theme.colors.failure : theme.colors.text)};
`

// Hand-rolled leverage slider (the Slider primitive can't do a per-zone
// gradient fill across the 1..MAX_LEVERAGE range — keeping range input).
const LevTrack = styled.div<{ $fillPct: number; $zone: Zone }>`
  position: relative;
  width: 100%;
  height: 16px;
  background: linear-gradient(180deg, #e5fdff 0%, #f3efff 100%);
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 24px;
  overflow: visible;
`

const LevFill = styled.span<{ $fillPct: number; $zone: Zone }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $fillPct }) => `${$fillPct}%`};
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  background: ${({ theme, $zone }) =>
    $zone === 'safe' ? theme.colors.success : $zone === 'warn' ? theme.colors.warning : theme.colors.failure};
`

const LevThumb = styled.span<{ $fillPct: number; $zone: Zone }>`
  position: absolute;
  top: 50%;
  left: ${({ $fillPct }) => `${$fillPct}%`};
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: ${({ theme, $zone }) =>
    $zone === 'safe' ? theme.colors.success : $zone === 'warn' ? theme.colors.warning : theme.colors.failure};
  border: 2px solid #fff;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
  cursor: grab;
  pointer-events: none;
  &:active {
    cursor: grabbing;
  }
`

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
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  overflow: hidden;
`

const LevTab = styled.button<{ $active: boolean }>`
  flex: 1;
  border: 0;
  background: ${({ $active, theme }) => ($active ? theme.colors.input : 'transparent')};
  padding: 6px;
  font-family: inherit;
  font-size: 13px;
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textSubtle)};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  cursor: pointer;
  border-right: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  &:last-child {
    border-right: 0;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const LevCustom = styled.div`
  width: 78px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px;
  background: ${({ theme }) => theme.colors.input};
  border-right: 1px solid ${({ theme }) => theme.colors.inputSecondary};
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
  flex-direction: column;
  gap: 6px;
  padding: 8px 14px 12px;
`

const StatsRow = styled(Flex)`
  align-items: center;
  justify-content: space-between;
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
  gap: 8px;
  padding: 0 14px 14px;
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
  gap: 8px;
  padding: 16px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
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
const PnlCard = styled(Flex)`
  margin: 0 20px 20px;
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
      {/* Symbol header */}
      <Head>
        <HeadLeft type="button" onClick={onSymbolClick}>
          <TokenChip>{baseAsset}</TokenChip>
          <Pair>{pair}</Pair>
          <span aria-hidden>▾</span>
        </HeadLeft>
        <HeadRight>
          <HeadPrice>{price}</HeadPrice>
          <HeadPnl $positive={pricePnlPct >= 0}>
            <TriangleUp />
            {pricePnlPct.toFixed(2)}%
          </HeadPnl>
        </HeadRight>
      </Head>

      {/* Form body */}
      <Body>
        {/* My Perp Fund + bet input */}
        <Section>
          <SectionHead>
            <PreTitle>My Perp Fund</PreTitle>
            <FundChip type="button" onClick={onTopUpFund} aria-label="Top up fund">
              <WalletFilledIcon color="textSubtle" width="18px" />
              <FundAmt>{fundBalanceText}</FundAmt>
              <AddIcon color="textSubtle" width="16px" />
            </FundChip>
          </SectionHead>

          <BetField>
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
                <QuoteSym>{quoteAsset}</QuoteSym>
                <span aria-hidden>▾</span>
              </BetTokenButton>
            </BetInputWrap>
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
              <HelpIcon color="textSubtle" width="14px" />
            </ZonePill>
          </LevRow>

          <LevTrack $fillPct={fillPct} $zone={zone} aria-hidden>
            <LevFill $fillPct={fillPct} $zone={zone} />
            <LevThumb $fillPct={fillPct} $zone={zone} />
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

      {/* Stats + UP / DOWN */}
      <StatsCard>
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
      </StatsCard>

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
    </Root>
  )
}
