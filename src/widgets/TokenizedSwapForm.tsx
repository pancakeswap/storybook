import React from 'react'
import styled, { css } from 'styled-components'
import { Card } from '../primitives/Card'
import { Button } from '../primitives/Button'
import { Text } from '../primitives/Text'
import {
  ChevronDownIcon,
  WalletFilledIcon,
  SwapVertIcon,
  EditIcon,
  AutoRenewIcon,
  ChevronUpIcon,
} from '../primitives/Icons'

/**
 * Stateless tokenized swap form used on the Tokenized Swap page
 * (Figma 22416-2164). Two stacked PCS Cards:
 *   1. Token swap card — "To:" input + circular vertical swap arrow + "From:" input.
 *   2. Summary card — slippage tolerance, Swap CTA, and the live price chip.
 *
 * The consumer owns every value, formatting, and async lifecycle.
 */

export interface SwapTokenSide {
  symbol: string
  /** Token logo URL — first successful one is used. */
  logoUrls?: string[]
  /** Optional chain badge logo URL (small overlay on the token icon). */
  chainLogoUrl?: string
  /** Owner-address chip (e.g. "0x40cf...5461"). */
  address: string
  /** Pre-formatted wallet balance, e.g. "1,098.99". */
  balance: string
  /** Pre-formatted amount string (display only). */
  amount: string
  /** Pre-formatted USD value, e.g. "~0.0 USD". */
  amountUsd: string
}

export interface TokenizedSwapFormProps {
  toSide: SwapTokenSide
  fromSide: SwapTokenSide
  onToAmountChange?: (next: string) => void
  onFromAmountChange?: (next: string) => void
  onToTokenSelect?: () => void
  onFromTokenSelect?: () => void
  onSwapDirection?: () => void

  /** Pre-formatted slippage chip, e.g. "0.5%". */
  slippage: string
  onSlippageEdit?: () => void

  /** Pre-formatted exchange rate, e.g. "1 BNB = 326.01 CAKE". */
  rateFromLabel: string
  rateToLabel: string
  /** When true, renders the price-summary row in expanded state. */
  expanded?: boolean
  onToggleExpanded?: () => void
  onRefreshRate?: () => void

  canSubmit: boolean
  submitLabel?: string
  onSubmit?: () => void
}

const StackedCard = styled(Card)`
  & > div {
    padding: 0;
    overflow: hidden;
  }
`

const SwapCardInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Section = styled.div<{ $bordered?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  ${({ $bordered, theme }) =>
    $bordered &&
    css`
      border-bottom: 1px solid ${theme.colors.cardBorder};
    `}
`

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AddressChip = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Kanit', sans-serif;
`

const WalletAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const BalanceChip = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
`

const Field = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 80px;
  padding: 0 16px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  box-shadow: ${({ theme }) => theme.shadows.inset};
`

const TokenSelect = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px 4px 4px;
  border: 0;
  background: transparent;
  border-radius: 12px;
  cursor: pointer;
  font-family: inherit;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }
`

const TokenLogo = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`

const TokenLogoImg = styled.div<{ $bg?: string }>`
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: ${({ $bg, theme }) => $bg ?? theme.colors.disabled};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const TokenLogoBorder = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 0.6px solid ${({ theme }) => theme.colors.contrast};
  opacity: 0.1;
  pointer-events: none;
`

const ChainBadge = styled.div`
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 14px;
  height: 14px;
  border-radius: 35%;
  background: ${({ theme }) => theme.colors.card};
  border: 2px solid ${({ theme }) => theme.colors.card};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const ChainBadgeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 35%;
`

const AmountStack = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const AmountInput = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  outline: none;
  text-align: right;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-variant-numeric: tabular-nums;
  padding: 0;
  &:focus {
    color: ${({ theme }) => theme.colors.text};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const AmountUsd = styled.div`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: right;
  font-variant-numeric: tabular-nums;
`

const SwapArrowButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.primary60 ?? theme.colors.primary};
  cursor: pointer;
  z-index: 1;
  transition: transform 0.12s;
  &:hover:not(:disabled) {
    transform: translate(-50%, -50%) scale(1.05);
  }
`

// ── Summary card ────────────────────────────────────────────

const SummaryRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`

const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
`

const TooltipLabel = styled.span`
  display: inline-flex;
  flex-direction: column;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSubtle};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.textSubtle};
  cursor: help;
`

const SlippagePill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 3px 8px 5px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary60 ?? theme.colors.primary};
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  &:hover:not(:disabled) {
    filter: brightness(1.02);
  }
`

const RateRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  font-family: 'Kanit', sans-serif;
`

const RateText = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary60 ?? theme.colors.primary};
  cursor: pointer;
  &:hover:not(:disabled) { opacity: 0.65; }
`

// ── Component ───────────────────────────────────────────────

const TokenIconView: React.FC<{ side: SwapTokenSide }> = ({ side }) => {
  const src = side.logoUrls?.find(Boolean)
  return (
    <TokenLogo>
      {src ? (
        <TokenLogoImg style={{ backgroundImage: `url(${src})` }} />
      ) : (
        <TokenLogoImg>{side.symbol.slice(0, 2).toUpperCase()}</TokenLogoImg>
      )}
      <TokenLogoBorder />
      {side.chainLogoUrl && (
        <ChainBadge>
          <ChainBadgeImg src={side.chainLogoUrl} alt="" />
        </ChainBadge>
      )}
    </TokenLogo>
  )
}

const SideRow: React.FC<{
  labelPrefix: string
  side: SwapTokenSide
  onAmountChange?: (n: string) => void
  onTokenSelect?: () => void
  amountId: string
}> = ({ labelPrefix, side, onAmountChange, onTokenSelect, amountId }) => {
  const isEmpty = !side.symbol
  return (
    <>
      <TopRow>
        <AddressChip>
          <Text bold fontSize="12px" color="textSubtle" style={{ letterSpacing: '0.12px' }}>
            {labelPrefix}
          </Text>
          {!isEmpty && side.address && (
            <>
              <WalletAvatar aria-hidden>{side.symbol.slice(0, 1)}</WalletAvatar>
              <Text bold fontSize="12px" color="textSubtle" style={{ letterSpacing: '0.12px' }}>
                {side.address}
              </Text>
            </>
          )}
        </AddressChip>
        {!isEmpty && side.balance && (
          <BalanceChip>
            <WalletFilledIcon width="18px" height="18px" />
            {side.balance}
          </BalanceChip>
        )}
      </TopRow>
      <Field>
        <TokenSelect
          type="button"
          onClick={onTokenSelect}
          aria-label={isEmpty ? 'Select token' : `Choose token (${side.symbol})`}
        >
          {!isEmpty && <TokenIconView side={side} />}
          <Text
            bold
            fontSize="20px"
            color={isEmpty ? 'textSubtle' : 'text'}
            style={{ letterSpacing: '-0.2px' }}
          >
            {isEmpty ? 'Select token' : side.symbol}
          </Text>
          <ChevronDownIcon width="24px" height="24px" />
        </TokenSelect>
        <AmountStack>
          <AmountInput
            id={amountId}
            inputMode="decimal"
            autoComplete="off"
            spellCheck={false}
            value={side.amount}
            placeholder="0.0"
            disabled={isEmpty}
            onChange={(e) => onAmountChange?.(e.target.value)}
            aria-label={`${labelPrefix} ${side.symbol || 'unselected'} amount`}
          />
          {side.amountUsd && <AmountUsd>{side.amountUsd}</AmountUsd>}
        </AmountStack>
      </Field>
    </>
  )
}

export const TokenizedSwapForm: React.FC<TokenizedSwapFormProps> = ({
  toSide,
  fromSide,
  onToAmountChange,
  onFromAmountChange,
  onToTokenSelect,
  onFromTokenSelect,
  onSwapDirection,
  slippage,
  onSlippageEdit,
  rateFromLabel,
  rateToLabel,
  expanded = true,
  onToggleExpanded,
  onRefreshRate,
  canSubmit,
  submitLabel = 'Swap',
  onSubmit,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <StackedCard>
        <SwapCardInner>
          <Section $bordered>
            <SideRow
              labelPrefix="From:"
              side={fromSide}
              onAmountChange={onFromAmountChange}
              onTokenSelect={onFromTokenSelect}
              amountId="tokenized-swap-from"
            />
          </Section>
          <Section>
            <SideRow
              labelPrefix="To:"
              side={toSide}
              onAmountChange={onToAmountChange}
              onTokenSelect={onToTokenSelect}
              amountId="tokenized-swap-to"
            />
          </Section>
          <SwapArrowButton
            type="button"
            onClick={onSwapDirection}
            aria-label="Swap direction"
          >
            <SwapVertIcon width="24px" height="24px" />
          </SwapArrowButton>
        </SwapCardInner>
      </StackedCard>

      <StackedCard>
        <SummaryRoot>
          <SummaryRow>
            <TooltipLabel>Slippage Tolerance</TooltipLabel>
            <SlippagePill type="button" onClick={onSlippageEdit} aria-label={`Slippage tolerance ${slippage}, edit`}>
              {slippage}
              <EditIcon width="20px" height="20px" />
            </SlippagePill>
          </SummaryRow>
          <Button
            variant="primary"
            disabled={!canSubmit}
            onClick={onSubmit}
            width="100%"
            style={{ height: 48 }}
          >
            {submitLabel}
          </Button>
          <RateRow>
            <RateText>
              <IconButton
                type="button"
                onClick={onRefreshRate}
                aria-label="Refresh rate"
              >
                <AutoRenewIcon width="18px" height="18px" />
              </IconButton>
              <span>{rateFromLabel}</span>
              <SwapVertIcon
                width="18px"
                height="18px"
                style={{ transform: 'rotate(90deg)' }}
                aria-hidden
              />
              <span>{rateToLabel}</span>
            </RateText>
            <IconButton
              type="button"
              onClick={onToggleExpanded}
              aria-label={expanded ? 'Collapse details' : 'Expand details'}
            >
              {expanded ? (
                <ChevronUpIcon width="24px" height="24px" />
              ) : (
                <ChevronDownIcon width="24px" height="24px" />
              )}
            </IconButton>
          </RateRow>
        </SummaryRoot>
      </StackedCard>
    </div>
  )
}

export default TokenizedSwapForm
