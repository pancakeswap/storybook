import { useState } from 'react'
import styled from 'styled-components'
import { SimpleBetPanel, type SimpleBetPanelProps } from '../widgets/SimpleBetPanel'
import { SimpleTickerCard } from '../widgets/SimpleTickerCard'
import { SimpleChartCard } from '../widgets/SimpleChartCard'
import {
  SimplePositionsCard,
  type SimplePositionRow,
  type SimplePositionsTab,
} from '../widgets/SimplePositionsCard'

export interface SimplePerpsPageProps {
  initialPair?: string
}

const TFS = ['1d', '1h', '30m', '15m', '5m'] as const
type Tf = (typeof TFS)[number]

const Y_TICKS = ['670', '660', '650', '640', '630', '620', '610', 'USD'] as const
const X_TICKS = [
  '5:00 AM',
  '9:00 AM',
  '1:00 PM',
  '5:00 PM',
  '9:00 PM',
  '1:00 AM',
  '5:00 AM',
  '9:00 AM',
  '1:00 PM',
] as const

const SAMPLE_POSITIONS: readonly SimplePositionRow[] = [
  {
    id: 'bnb-long',
    symbol: 'BNB',
    chainLabel: 'BNB CHAIN',
    iconColor: '#F3BA2F',
    direction: 'up',
    leverageText: '100X',
    unrealizedPnl: '+$10.09',
    pnlSign: 'positive',
    initialMargin: '0.01692 BNB',
    sizeUsd: '208.1',
    entryPrice: '$649.98',
    liqPrice: '$637.00',
    liqDistancePct: 90,
    liqStatus: 'safe',
    liqStatusLabel: 'Safe',
  },
] as const

// ── Page styled-components (port of SimplePerpsPage.css) ──────

const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  font-family: 'Kanit', sans-serif;
  color: ${({ theme }) => theme.colors.text};
`

const ModeBarRoot = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  flex-shrink: 0;
`

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 32px;
`

/* Hide the "PancakeSwap" wordmark on tablet — only the bunny chip
   remains, per Figma 375:7569. */
const LogoText = styled.span`
  @media (max-width: 967.98px) {
    display: none;
  }
`

const LogoBunny = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d1884f 0%, #f8c5a3 100%);
  border-radius: 50%;
  font-size: 14px;
`

const ModeToggle = styled.div`
  display: inline-flex;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 999px;
  padding: 0;
`

const ModeTab = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border: 0;
  border-radius: 999px;
  background: ${({ $active, theme }) => ($active ? theme.colors.textSubtle : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.invertedContrast : theme.colors.textSubtle)};
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  min-width: 88px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.12s, color 0.12s;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const ModeBarSpacer = styled.div`
  flex: 1;
`

const ModeBarRight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const DepositPill = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  height: 32px;
  border: 0;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.invertedContrast};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover { filter: brightness(1.05); }

  @media (max-width: 575.98px) {
    display: none;
  }
`

const SettingsBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.colors.input}; }

  @media (max-width: 575.98px) {
    display: none;
  }
`

const WalletChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 4px 8px 4px 4px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.colors.input}; }
`

const WalletAvatar = styled.span`
  display: inline-flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff8866 0%, #ffd166 100%);
  font-size: 14px;
`

const WalletBalance = styled.span`
  @media (max-width: 575.98px) {
    display: none;
  }
`

const Body = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 0;
  flex: 1;

  @media (max-width: 967.98px) {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    background: ${({ theme }) => theme.colors.background};
  }
`

const LeftCol = styled.div`
  flex: 1;
  min-width: 0;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: radial-gradient(
    circle at 50% 50%,
    ${({ theme }) => theme.colors.card} 0%,
    ${({ theme }) => theme.colors.input} 100%
  );

  @media (min-width: 968px) and (max-width: 1199.98px) {
    padding: 24px;
  }

  @media (max-width: 967.98px) {
    display: contents;
  }
`

/* On tablet, LeftCol uses display:contents so its children become direct
   flex items of Body. Bet panel + positions are then siblings, and we
   nudge positions to last via order so the order matches Figma:
   ticker → chart → bet panel → positions. */
const TabletPositionsWrapper = styled.div`
  display: contents;

  @media (max-width: 967.98px) {
    display: block;
    align-self: stretch;
    order: 1;
  }
`

/* ── Collateral picker modal (opens when + is clicked on My Perp Fund) ── */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 13, 95, 0.60);
  z-index: 1000;
`

const ModalCard = styled.div`
  display: flex;
  width: 480px;
  min-width: 360px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.08),
    0 4px 8px 0 rgba(0, 0, 0, 0.16);
  padding: 16px;
  gap: 16px;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`

const ModalTitle = styled.h3`
  margin: 0;
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const ModalCloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  border-radius: 999px;
  &:hover { background: ${({ theme }) => theme.colors.input}; }
`

const SearchField = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 12px 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.textSubtle};
`

const SearchInput = styled.input`
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  &::placeholder { color: ${({ theme }) => theme.colors.textSubtle}; }
`

const TokenList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`

const TokenRow = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  padding: 12px 8px;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 12px;
  text-align: left;
  font-family: inherit;
  &:hover { background: ${({ theme }) => theme.colors.input}; }
`

const TokenIcon = styled.span<{ $color: string }>`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
`

const TokenMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`

const TokenLine = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
`

const TokenSymbol = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const TokenName = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const CollateralTag = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.secondary};
  background: rgba(118, 69, 217, 0.10);
  padding: 2px 8px;
  border-radius: 999px;
  width: fit-content;
`

const TokenRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-family: 'Kanit', sans-serif;
`

const TokenAmount = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

const TokenValue = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-variant-numeric: tabular-nums;
`

/* ── Order Confirmation modal ──────────────────────────────────── */

const ConfirmModalCard = styled.div`
  display: flex;
  width: 411px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.08),
    0 4px 8px 0 rgba(0, 0, 0, 0.16);
`

const ConfirmModalTitle = styled.h3`
  margin: 0;
  align-self: stretch;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`

const OrderRowsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`

const OrderTokenRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  gap: 12px;
`

const OrderTokenLeft = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const OrderTokenSymbol = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`

const SidePill = styled.span<{ $up: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid
    ${({ theme, $up }) => ($up ? theme.colors.success : theme.colors.failure)};
  color: ${({ theme, $up }) => ($up ? theme.colors.success : theme.colors.failure)};
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
`

const OrderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  gap: 12px;
`

const OrderLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`

const OrderValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`

const DontShowRow = styled.label`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  justify-content: space-between;
  border-radius: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
  cursor: pointer;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const DontShowCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  display: flex;
  width: 24px;
  height: 24px;
  padding: 1px 2px 3px 2px;
  align-items: flex-start;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.20);
  background: ${({ theme }) => theme.colors.success};
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.25 9.31 3 7.06l-.94.94L5.25 11.2 12 4.44l-.94-.94z" fill="white"/></svg>') no-repeat center;
  }
  &:not(:checked):after {
    visibility: hidden;
  }
  &:not(:checked) {
    background: ${({ theme }) => theme.colors.input};
    border-bottom-color: rgba(0, 0, 0, 0.10);
  }
  &:focus-visible {
    outline: 0;
    box-shadow:
      0 0 0 1px ${({ theme }) => theme.colors.secondary},
      0 0 0 4px rgba(118, 69, 217, 0.20);
  }
`

const ModalActions = styled.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
`

const ModalActionBtn = styled.button<{ $variant: 'primary' | 'secondary' }>`
  display: flex;
  flex: 1 0 0;
  padding: 11px 12px 13px;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 16px;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.primary : theme.colors.tertiary};
  color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.invertedContrast : theme.colors.primary};
  border-bottom: 2px solid
    ${({ $variant }) => ($variant === 'primary' ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.10)')};
  &:hover { filter: brightness(1.05); }
`

const OrderConfirmModal: React.FC<{
  isOpen: boolean
  side: 'up' | 'down'
  pair: string
  baseAsset: string
  price: string
  estLiqPrice: string
  positionSize: string
  duration: string
  onConfirm: () => void
  onClose: () => void
}> = ({ isOpen, side, pair, baseAsset, price, estLiqPrice, positionSize, duration, onConfirm, onClose }) => {
  if (!isOpen) return null
  const isUp = side === 'up'
  return (
    <Overlay onClick={onClose}>
      <ConfirmModalCard onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ConfirmModalTitle>Order Confirmation</ConfirmModalTitle>
          <ModalCloseBtn type="button" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </ModalCloseBtn>
        </ModalHeader>
        <OrderTokenRow>
          <OrderTokenLeft>
            <TokenIcon $color="#F0B90B">{baseAsset.slice(0, 1)}</TokenIcon>
            <OrderTokenSymbol>{pair}</OrderTokenSymbol>
          </OrderTokenLeft>
          <SidePill $up={isUp}>
            {isUp ? '↑' : '↓'} {isUp ? 'Up' : 'Down'}
          </SidePill>
        </OrderTokenRow>
        <OrderRowsList>
          <OrderRow><OrderLabel>Price</OrderLabel><OrderValue>{price}</OrderValue></OrderRow>
          <OrderRow><OrderLabel>Est. Liquidation price</OrderLabel><OrderValue>{estLiqPrice}</OrderValue></OrderRow>
          <OrderRow><OrderLabel>Position size</OrderLabel><OrderValue>{positionSize}</OrderValue></OrderRow>
          <OrderRow><OrderLabel>Time duration</OrderLabel><OrderValue>{duration}</OrderValue></OrderRow>
        </OrderRowsList>
        <DontShowRow>
          Don&apos;t show again
          <DontShowCheckbox defaultChecked />
        </DontShowRow>
        <ModalActions>
          <ModalActionBtn type="button" $variant="primary" onClick={onConfirm}>Confirm</ModalActionBtn>
          <ModalActionBtn type="button" $variant="secondary" onClick={onClose}>Cancel</ModalActionBtn>
        </ModalActions>
      </ConfirmModalCard>
    </Overlay>
  )
}

/* ── Fund Your Perp Account modal ──────────────────────── */

const FundModalCard = styled.div`
  display: flex;
  width: 456px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.08),
    0 4px 8px 0 rgba(0, 0, 0, 0.16);
`

const FundModalTitle = styled.h3`
  margin: 0;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`

const PerpBalanceCard = styled.div`
  display: flex;
  align-self: stretch;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
`

const PerpBalanceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`

const PerpBalanceMeta = styled.div`
  display: flex;
  flex-direction: column;
`

const PerpBalanceLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`

const PerpBalanceSub = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
`

const PerpBalanceAmount = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  font-variant-numeric: tabular-nums;
`

const TopUpLabel = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
`

const FundTokenList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`

const FundTokenRow = styled.button`
  display: flex;
  padding: 12px;
  align-items: center;
  align-self: stretch;
  gap: 8px;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 12px;
  text-align: left;
  font-family: inherit;
  &:hover { background: ${({ theme }) => theme.colors.cardSecondary}; }
`

const FundTokenLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`

const FundTokenMeta = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

const FundTokenName = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`

const FundTokenAmountLine = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
  font-variant-numeric: tabular-nums;
`

const FundTokenUsd = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`

interface FundAsset {
  symbol: string
  chainLabel: string
  amount: string
  valueUsd: string
  color: string
}

const FUND_ASSETS: FundAsset[] = [
  { symbol: 'BNB',  chainLabel: 'BNB Chain',     amount: '999,999.99', valueUsd: '$999,999.99', color: '#F0B90B' },
  { symbol: 'ETH',  chainLabel: 'Ethereum',      amount: '999,999.99', valueUsd: '$999,999.99', color: '#627EEA' },
  { symbol: 'ETH',  chainLabel: 'Arbitrum One',  amount: '999,999.99', valueUsd: '$999,999.99', color: '#627EEA' },
  { symbol: 'USDC', chainLabel: 'Ethereum',      amount: '999,999.99', valueUsd: '$999,999.99', color: '#2775CA' },
]

/* Amount-entry step (shown after a token is picked from the list). */

const FundField = styled.label`
  display: flex;
  height: 80px;
  min-width: 296px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
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

const FundFieldLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const FundFieldMeta = styled.div`
  display: flex;
  flex-direction: column;
`

const FundFieldTicker = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`

const FundFieldChain = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
`

const FundFieldRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const FundFieldAmountInput = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  text-align: right;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.24px;
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

const FundFieldUsd = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: right;
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`

const FundContinueBtn = styled.button`
  display: flex;
  height: 48px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.textDisabled};
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  cursor: not-allowed;
  &:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.invertedContrast};
    cursor: pointer;
  }
`

const FundAccountModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [selected, setSelected] = useState<FundAsset | null>(null)
  const [amount, setAmount] = useState('')
  const handleClose = () => {
    setSelected(null)
    setAmount('')
    onClose()
  }
  if (!isOpen) return null
  const showAmount = selected !== null
  const canContinue = !!amount && Number(amount) > 0
  return (
    <Overlay onClick={handleClose}>
      <FundModalCard onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <FundModalTitle>Fund Your Perp Account</FundModalTitle>
          <ModalCloseBtn type="button" onClick={handleClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </ModalCloseBtn>
        </ModalHeader>
        {showAmount ? (
          <>
            <FundField>
              <FundFieldLeft>
                <TokenIcon $color={selected.color}>{selected.symbol.slice(0, 1)}</TokenIcon>
                <FundFieldMeta>
                  <FundFieldTicker>{selected.symbol}</FundFieldTicker>
                  <FundFieldChain>{selected.chainLabel}</FundFieldChain>
                </FundFieldMeta>
              </FundFieldLeft>
              <FundFieldRight>
                <FundFieldAmountInput
                  type="number"
                  inputMode="decimal"
                  placeholder="0.0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  aria-label="Deposit amount"
                />
                <FundFieldUsd>~{amount || '0.0'} USD</FundFieldUsd>
              </FundFieldRight>
            </FundField>
            <FundContinueBtn type="button" disabled={!canContinue}>
              Continue
            </FundContinueBtn>
          </>
        ) : (
          <>
            <PerpBalanceCard>
              <PerpBalanceRow>
                <PerpBalanceMeta>
                  <PerpBalanceLabel>Perp Balance</PerpBalanceLabel>
                  <PerpBalanceSub>In Aster Contract</PerpBalanceSub>
                </PerpBalanceMeta>
                <PerpBalanceAmount>$0</PerpBalanceAmount>
              </PerpBalanceRow>
            </PerpBalanceCard>
            <TopUpLabel>Top up from your connected EOA wallet (0x…8989)</TopUpLabel>
            <FundTokenList>
              {FUND_ASSETS.map((a, i) => (
                <FundTokenRow
                  key={`${a.symbol}-${i}`}
                  type="button"
                  onClick={() => setSelected(a)}
                >
                  <FundTokenLeft>
                    <TokenIcon $color={a.color}>{a.symbol.slice(0, 1)}</TokenIcon>
                    <FundTokenMeta>
                      <FundTokenName>{a.symbol}</FundTokenName>
                      <FundTokenAmountLine>
                        {a.amount} {a.symbol}
                      </FundTokenAmountLine>
                    </FundTokenMeta>
                  </FundTokenLeft>
                  <FundTokenUsd>{a.valueUsd}</FundTokenUsd>
                </FundTokenRow>
              ))}
            </FundTokenList>
          </>
        )}
      </FundModalCard>
    </Overlay>
  )
}

interface CollateralAsset {
  symbol: string
  name: string
  amount: string
  valueUsd: string
  color: string
}

const COLLATERAL_ASSETS: CollateralAsset[] = [
  { symbol: 'BNB',  name: 'BNB chain native token', amount: '23.62',  valueUsd: '$18,053.62', color: '#F0B90B' },
  { symbol: 'CAKE', name: 'PancakeSwap Token',      amount: '987.98', valueUsd: '$1,390.98',  color: '#23CAD5' },
  { symbol: 'USDC', name: 'Circle USDC',            amount: '1,000',  valueUsd: '$999.98',    color: '#2775CA' },
  { symbol: 'USDT', name: 'Tether USDT',            amount: '20',     valueUsd: '$19.98',     color: '#26A17B' },
]

const CollateralModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  return (
    <Overlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Collateral</ModalTitle>
          <ModalCloseBtn type="button" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </ModalCloseBtn>
        </ModalHeader>
        <SearchField>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <SearchInput type="text" placeholder="Search" />
        </SearchField>
        <TokenList>
          {COLLATERAL_ASSETS.map((a) => (
            <TokenRow key={a.symbol} type="button">
              <TokenIcon $color={a.color}>{a.symbol.slice(0, 1)}</TokenIcon>
              <TokenMain>
                <TokenLine>
                  <TokenSymbol>{a.symbol}</TokenSymbol>
                  <TokenName>{a.name}</TokenName>
                </TokenLine>
                <CollateralTag>COLLATERAL</CollateralTag>
              </TokenMain>
              <TokenRight>
                <TokenAmount>{a.amount}</TokenAmount>
                <TokenValue>{a.valueUsd}</TokenValue>
              </TokenRight>
            </TokenRow>
          ))}
        </TokenList>
      </ModalCard>
    </Overlay>
  )
}

/** Inlined top nav with logo + Simple/Pro toggle + right cluster
 *  (Deposit pill, settings gear, wallet balance chip). The real
 *  switcher lives in pancake-frontend. */
const ModeBar: React.FC<{ onDeposit?: () => void }> = ({ onDeposit }) => (
  <ModeBarRoot>
    <Logo>
      <LogoBunny aria-hidden>🐰</LogoBunny>
      <LogoText>PancakeSwap</LogoText>
    </Logo>
    <ModeToggle role="tablist" aria-label="Trading mode">
      <ModeTab type="button" role="tab" aria-selected $active>
        Simple
      </ModeTab>
      <ModeTab type="button" role="tab" aria-selected={false}>
        Pro
      </ModeTab>
    </ModeToggle>
    <ModeBarSpacer />
    <ModeBarRight>
      <DepositPill type="button" onClick={onDeposit}>
        Deposit
      </DepositPill>
      <SettingsBtn type="button" aria-label="Settings">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19.43 12.98a8.54 8.54 0 0 0 0-1.96l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.45 7.45 0 0 0-1.7-.98l-.38-2.65A.5.5 0 0 0 13.99 2h-4a.5.5 0 0 0-.49.42l-.38 2.65c-.6.24-1.17.58-1.7.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65a8.54 8.54 0 0 0 0 1.96l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.14.24.43.34.69.22l2.49-1c.53.4 1.1.74 1.7.98l.38 2.65a.5.5 0 0 0 .49.42h4a.5.5 0 0 0 .49-.42l.38-2.65a7.45 7.45 0 0 0 1.7-.98l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z" />
        </svg>
      </SettingsBtn>
      <WalletChip type="button">
        <WalletAvatar aria-hidden>🦊</WalletAvatar>
        <WalletBalance>$6,488.98</WalletBalance>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
        </svg>
      </WalletChip>
    </ModeBarRight>
  </ModeBarRoot>
)

// Mock prop bundle — same numbers the prototype CSS used.
const mockBetPanelArgs = (
  bet: string,
  setBet: (s: string) => void,
  leverage: number,
  setLeverage: (n: number) => void,
  onFundOpen: () => void,
  onCollateralOpen: () => void,
  onConfirmOpen: (side: 'up' | 'down') => void,
): SimpleBetPanelProps => ({
  symbol: 'BTCUSDT',
  baseAsset: 'BTC',
  pair: 'BTC/USDT',
  price: '78,053.6',
  pricePnlPct: 0.93,
  bet,
  onBetChange: setBet,
  leverage,
  onLeverageChange: setLeverage,
  quoteAsset: 'USDT',
  /* Collateral picker opens via the dropdown arrow under the bet input's
     token icon. The (+) on the My Perp Fund chip and the Deposit button
     both open the Fund Your Perp Account modal instead. */
  onQuoteAssetClick: onCollateralOpen,
  fundBalanceText: '20.00 USDT',
  onTopUpFund: onFundOpen,
  estimatedEntry: '$78,053.60',
  liqIfLong: '$66,092.23 (-2.0%)',
  marginRequired: '$400 USDT',
  openingFee: '$10.00 (0.05%)',
  canSubmit: true,
  onUp: () => onConfirmOpen('up'),
  onDown: () => onConfirmOpen('down'),
  onDeposit: onFundOpen,
  onWithdraw: () => undefined,
  unrealizedPnl: '$0',
})

export function SimplePerpsPage({ initialPair = 'BTC/USD' }: SimplePerpsPageProps = {}) {
  const [tf, setTf] = useState<Tf>('1d')
  const [positionsTab, setPositionsTab] = useState<SimplePositionsTab>('positions')
  const [fundOpen, setFundOpen] = useState(false)
  const [collateralOpen, setCollateralOpen] = useState(false)
  const [orderConfirm, setOrderConfirm] = useState<'up' | 'down' | null>(null)
  const [bet, setBet] = useState('')
  const [leverage, setLeverage] = useState(10)

  return (
    <Root aria-label={`Perpetuals · Simple mode · ${initialPair}`}>
      <ModeBar onDeposit={() => setFundOpen(true)} />

      <Body>
        {/* Left column: ticker + chart + positions */}
        <LeftCol>
          <SimpleTickerCard
            baseAsset="BTC"
            pair="BTC/USD"
            price="78,053.6"
            pricePnlPct={0.93}
            volume24h="$2.13B"
            openInterest="$2.13B"
            fundingRate="+0.010%"
            nextFunding="4h 12m"
          />

          <SimpleChartCard
            timeframe={tf}
            timeframes={TFS}
            onTimeframeChange={(next) => setTf(next as Tf)}
            points={[]}
            currentPriceLabel="640"
            yTicks={Y_TICKS}
            xTicks={X_TICKS}
          />

          <TabletPositionsWrapper>
            <SimplePositionsCard
              tab={positionsTab}
              onTabChange={setPositionsTab}
              positions={SAMPLE_POSITIONS}
              openOrders={[]}
              historyEmpty
              onClosePosition={() => undefined}
            />
          </TabletPositionsWrapper>
        </LeftCol>

        {/* Right column: UP/DOWN bet panel */}
        <SimpleBetPanel
          {...mockBetPanelArgs(
            bet,
            setBet,
            leverage,
            setLeverage,
            () => setFundOpen(true),
            () => setCollateralOpen(true),
            (side) => setOrderConfirm(side),
          )}
        />
      </Body>

      <FundAccountModal isOpen={fundOpen} onClose={() => setFundOpen(false)} />

      <CollateralModal isOpen={collateralOpen} onClose={() => setCollateralOpen(false)} />

      <OrderConfirmModal
        isOpen={!!orderConfirm}
        side={orderConfirm ?? 'up'}
        pair="BNB/USD"
        baseAsset="BNB"
        price="78,053.60 USDT"
        estLiqPrice="$66,092.23"
        positionSize="$100"
        duration="Perpetual"
        onConfirm={() => setOrderConfirm(null)}
        onClose={() => setOrderConfirm(null)}
      />

    </Root>
  )
}
