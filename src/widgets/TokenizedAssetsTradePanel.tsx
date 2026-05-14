import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../primitives/Button'
import {
  ChevronDownIcon,
  CogIcon,
  InfoIcon,
  RefreshIcon,
  SwapVertIcon,
} from '../primitives/Icons'

export type TradeMode = 'swap' | 'twap' | 'limit'

export interface TradePanelTokenSide {
  /** Display symbol (e.g. "BNB", "NVIDIAx"). */
  symbol: string
  /** Logo circle background. */
  iconColor: string
  /** Optional initials override; defaults to first letter. */
  iconInitials?: string
  /** Wallet balance as already-formatted string. */
  balance: string
  /** Quote (USD) value for the entered amount. */
  usdValue?: string
}

export interface TokenizedAssetsTradePanelProps {
  mode?: TradeMode
  onModeChange?: (next: TradeMode) => void

  pay: TradePanelTokenSide
  /** Pay-side input value. Empty string ⇒ placeholder shown. */
  payAmount: string
  onPayAmountChange?: (next: string) => void
  onSelectPayToken?: () => void

  receive: TradePanelTokenSide
  receiveAmount: string
  onReceiveAmountChange?: (next: string) => void
  onSelectReceiveToken?: () => void

  /** Slippage tolerance % as string (e.g. "0.5"). */
  slippage: string
  onSlippageClick?: () => void

  /** Conversion rate footer text (e.g. "1 BNB = 326.01 NVIDIAx"). */
  rateLabel: string
  onRefreshRate?: () => void

  /** Show the "Trade off-hours" notice card above the CTA. */
  offHoursWarning?: boolean

  /** CTA label (e.g. "Connect Wallet", "Swap"). */
  ctaLabel: string
  ctaDisabled?: boolean
  onCtaClick?: () => void

  onSwapDirections?: () => void
  onSettingsClick?: () => void
}

/**
 * Outer wrap is just layout — the visible "card" treatment lives on each
 * sub-section (TabsCard, PayCard, ReceiveCard, InfoCard) so each section can
 * have its own border + bottom-heavy stroke per the Figma spec.
 */
const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 480px;
  flex-shrink: 0;
  gap: 8px;
`

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 24px;
`

const TabsCard = styled(Card)`
  display: flex;
  height: 72px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

const InfoCard = styled(Card)`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`

const SideCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;
  align-self: stretch;
`

const TabBar = styled.div`
  display: inline-flex;
  align-items: stretch;
  flex: 1;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  padding: 4px;
  gap: 4px;
`

const Tab = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 32px;
  border: 0;
  border-radius: 12px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.card : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.secondary : theme.colors.textSubtle};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  ${({ $active }) =>
    $active &&
    css`
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    `}
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const HeaderActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`

const IconBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.input};
  }
`

/**
 * Pay + Receive sit in their own cards, separated by 8px gap, with the
 * swap-direction toggle absolutely positioned over the gap.
 */
const SidesWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
`

const SideTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

const SideLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSubtle};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

const BalanceText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-variant-numeric: tabular-nums;
`

const SideBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

const AmountInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  outline: none;
  font-family: inherit;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  padding: 0;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
  }
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const TokenChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 4px 12px 4px 4px;
  border: 0;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`

const ChipCircle = styled.span<{ $color: string }>`
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  color: #fff;
  font-weight: 700;
  font-size: 12px;
`

const UsdHint = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-variant-numeric: tabular-nums;
`

const SwapToggle = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 4px solid ${({ theme }) => theme.colors.card};
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.secondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const SlippageRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  gap: 12px;
`

const SlippageLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

const SlippagePill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 999px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

const OffHoursCard = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(255, 178, 55, 0.10);
  border: 1px solid rgba(255, 178, 55, 0.40);
  color: ${({ theme }) => theme.colors.warning};
`

const OffHoursBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const OffHoursTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
`

const OffHoursText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  line-height: 1.45;
`

const RateRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  gap: 8px;
  padding: 0 4px;
`

const RateText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

const RefreshBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const CtaButton = styled(Button)`
  width: 100%;
  height: 48px;
  font-size: 16px;
`

const MODES: { key: TradeMode; label: string }[] = [
  { key: 'swap', label: 'Swap' },
  { key: 'twap', label: 'TWAP' },
  { key: 'limit', label: 'Limit' },
]

export const TokenizedAssetsTradePanel: React.FC<TokenizedAssetsTradePanelProps> = ({
  mode = 'swap',
  onModeChange,
  pay,
  payAmount,
  onPayAmountChange,
  onSelectPayToken,
  receive,
  receiveAmount,
  onReceiveAmountChange,
  onSelectReceiveToken,
  slippage,
  onSlippageClick,
  rateLabel,
  onRefreshRate,
  offHoursWarning = false,
  ctaLabel,
  ctaDisabled = false,
  onCtaClick,
  onSwapDirections,
  onSettingsClick,
}) => {
  return (
    <Root aria-label="Trade panel">
      <TabsCard>
        <TabBar role="tablist" aria-label="Trade mode">
          {MODES.map((m) => (
            <Tab
              key={m.key}
              type="button"
              role="tab"
              aria-selected={m.key === mode}
              $active={m.key === mode}
              onClick={() => onModeChange?.(m.key)}
            >
              {m.label}
            </Tab>
          ))}
        </TabBar>
        <HeaderActions>
          <IconBtn type="button" aria-label="Settings" onClick={onSettingsClick}>
            <CogIcon width={18} color="currentColor" />
          </IconBtn>
        </HeaderActions>
      </TabsCard>

      <SidesWrap>
        <SideCard>
          <SideTopRow>
            <SideLabel>Pay</SideLabel>
            <BalanceText>Bal: {pay.balance}</BalanceText>
          </SideTopRow>
          <SideBottomRow>
            <AmountInput
              inputMode="decimal"
              placeholder="0.00"
              value={payAmount}
              onChange={(e) => onPayAmountChange?.(e.target.value)}
              aria-label={`Pay amount in ${pay.symbol}`}
            />
            <TokenChip type="button" onClick={onSelectPayToken}>
              <ChipCircle $color={pay.iconColor}>
                {pay.iconInitials ?? pay.symbol.slice(0, 1)}
              </ChipCircle>
              {pay.symbol}
              <ChevronDownIcon width={16} color="currentColor" />
            </TokenChip>
          </SideBottomRow>
          {pay.usdValue && <UsdHint>≈ {pay.usdValue}</UsdHint>}
        </SideCard>

        <SwapToggle type="button" aria-label="Swap direction" onClick={onSwapDirections}>
          <SwapVertIcon width={20} color="currentColor" />
        </SwapToggle>

        <SideCard>
          <SideTopRow>
            <SideLabel>Receive</SideLabel>
            <BalanceText>Bal: {receive.balance}</BalanceText>
          </SideTopRow>
          <SideBottomRow>
            <AmountInput
              inputMode="decimal"
              placeholder="0.00"
              value={receiveAmount}
              onChange={(e) => onReceiveAmountChange?.(e.target.value)}
              aria-label={`Receive amount in ${receive.symbol}`}
            />
            <TokenChip type="button" onClick={onSelectReceiveToken}>
              <ChipCircle $color={receive.iconColor}>
                {receive.iconInitials ?? receive.symbol.replace(/x$/i, '').slice(0, 1)}
              </ChipCircle>
              {receive.symbol}
              <ChevronDownIcon width={16} color="currentColor" />
            </TokenChip>
          </SideBottomRow>
          {receive.usdValue && <UsdHint>≈ {receive.usdValue}</UsdHint>}
        </SideCard>
      </SidesWrap>

      <InfoCard>
        <SlippageRow>
          <SlippageLabel>
            Slippage Tolerance
            <InfoIcon width={14} color="currentColor" />
          </SlippageLabel>
          <SlippagePill type="button" onClick={onSlippageClick}>
            {slippage}%
            <ChevronDownIcon width={14} color="currentColor" />
          </SlippagePill>
        </SlippageRow>

        {offHoursWarning && (
          <OffHoursCard role="status">
            <InfoIcon width={18} color="currentColor" />
            <OffHoursBody>
              <OffHoursTitle>Trading outside market hours</OffHoursTitle>
              <OffHoursText>
                Tokenized stock orders placed off-hours will be settled when the
                underlying market re-opens.
              </OffHoursText>
            </OffHoursBody>
          </OffHoursCard>
        )}

        <CtaButton type="button" disabled={ctaDisabled} onClick={onCtaClick}>
          {ctaLabel}
        </CtaButton>

        <RateRow>
          <RateText>{rateLabel}</RateText>
          <RefreshBtn type="button" aria-label="Refresh rate" onClick={onRefreshRate}>
            <RefreshIcon width={14} color="currentColor" />
          </RefreshBtn>
        </RateRow>
      </InfoCard>
    </Root>
  )
}
