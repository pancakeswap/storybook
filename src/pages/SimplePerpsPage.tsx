import { useState } from 'react'
import { styled } from 'styled-components'
import { SimpleBetPanel, type SimpleBetPanelProps } from '../widgets/SimpleBetPanel'
import { SimpleTickerCard } from '../widgets/SimpleTickerCard'
import { SimpleChartCard } from '../widgets/SimpleChartCard'
import { BottomDrawer, Modal, ModalV2 } from '../primitives/Modal'
import {
  SimplePositionsCard,
  type SimplePositionRow,
  type SimpleHistoryRow,
  type SimplePositionsTab,
} from '../widgets/SimplePositionsCard'
import {
  WithdrawModal12,
  type WithdrawAssetRow,
} from '../widgets/WithdrawModal12'
import {
  DepositModal,
  type DepositStep,
  type DepositTokenRow,
} from '../widgets/DepositModal'
import { MarketsDropdown, type MarketRow } from '../widgets/MarketsDropdown'

export interface SimplePerpsPageProps {
  initialPair?: string
  /**
   * Renders the page in a disconnected-wallet state — the positions card
   * shows the "connect your wallet" placeholder across all tabs. Used by
   * the Apps/Disconnected Perps · Simple story.
   */
  disconnected?: boolean
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

/* Single-line short labels for the chart bottom-drawer rendered on
   mobile/tablet — the long "5:00 AM" form clips inside the ~360-540px
   drawer width. */
const X_TICKS_DRAWER = [
  '5AM',
  '9AM',
  '1PM',
  '5PM',
  '9PM',
  '1AM',
  '5AM',
  '9AM',
  '1PM',
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
    size: '$10.09',
    sizeCurrency: 'USDT',
    entryPrice: '$649.98',
    liqPrice: '$637.00',
    liqDistancePct: 90,
    liqStatus: 'safe',
    liqStatusLabel: 'Safe',
  },
  {
    id: 'btc-long',
    symbol: 'BTC',
    chainLabel: 'BTC',
    iconColor: '#F7931A',
    direction: 'up',
    leverageText: '50X',
    unrealizedPnl: '+$420.55',
    pnlSign: 'positive',
    size: '$2,103.10',
    sizeCurrency: 'USDT',
    entryPrice: '$78,053.60',
    liqPrice: '$76,489.40',
    liqDistancePct: 72,
    liqStatus: 'safe',
    liqStatusLabel: 'Safe',
  },
  {
    id: 'eth-short',
    symbol: 'ETH',
    chainLabel: 'ETH',
    iconColor: '#627EEA',
    direction: 'down',
    leverageText: '25X',
    unrealizedPnl: '-$57.12',
    pnlSign: 'negative',
    size: '$891.27',
    sizeCurrency: 'USDT',
    entryPrice: '$3,420.18',
    liqPrice: '$3,565.04',
    liqDistancePct: 38,
    liqStatus: 'warn',
    liqStatusLabel: 'Warn',
  },
  {
    id: 'cake-long',
    symbol: 'CAKE',
    chainLabel: 'BNB CHAIN',
    iconColor: '#23CAD5',
    direction: 'up',
    leverageText: '500X',
    unrealizedPnl: '-$8.43',
    pnlSign: 'negative',
    size: '$152.04',
    sizeCurrency: 'USDT',
    entryPrice: '$2.149',
    liqPrice: '$2.131',
    liqDistancePct: 12,
    liqStatus: 'danger',
    liqStatusLabel: 'Danger',
  },
] as const

const SAMPLE_WITHDRAW_ASSETS: readonly WithdrawAssetRow[] = [
  {
    id: 'BNB',
    symbol: 'BNB',
    chainLabel: 'BNB Chain',
    chainBadgeColor: '#1E1E1E',
    chainBadgeGlyph: 'B',
    balanceText: '999,999.99',
    usdText: '$999,999.99',
    iconColor: '#F0B90B',
  },
  {
    id: 'ETH-ETH',
    symbol: 'ETH',
    chainLabel: 'Ethereum',
    chainBadgeColor: '#627EEA',
    chainBadgeGlyph: 'E',
    balanceText: '999,999.99',
    usdText: '$999,999.99',
    iconColor: '#627EEA',
  },
  {
    id: 'USDC',
    symbol: 'USDC',
    chainLabel: 'Polygon',
    chainBadgeColor: '#2D364D',
    chainBadgeGlyph: 'P',
    balanceText: '999,999.99',
    usdText: '$999,999.99',
    iconColor: '#2775CA',
  },
] as const

const SAMPLE_HISTORY: readonly SimpleHistoryRow[] = [
  {
    id: 'history-1',
    symbol: 'BNB',
    iconColor: '#F3BA2F',
    direction: 'up',
    leverageText: '100X',
    price: '$649.98',
    quantity: '1.982',
    fee: '-0.11412',
    feeCurrency: 'USDT',
    realizedProfit: '+200.091',
    realizedProfitSign: 'positive',
    realizedProfitCurrency: 'USDT',
    time: '2026-05-05',
  },
  {
    id: 'history-2',
    symbol: 'BNB',
    iconColor: '#F3BA2F',
    direction: 'down',
    leverageText: '50X',
    price: '$651.42',
    quantity: '0.815',
    fee: '-0.04812',
    feeCurrency: 'USDT',
    realizedProfit: '-42.187',
    realizedProfitSign: 'negative',
    realizedProfitCurrency: 'USDT',
    time: '2026-05-04',
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
  padding: 24px;
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

/* On phones and tablets the inline chart card collapses out of the
   layout — the ticker exposes a graph button that opens the same chart
   inside a bottom-sheet (Figma 621-29050 / 622-29522 / 623-30687), so
   the body stays short above the fold. */
const InlineChart = styled.div`
  display: contents;

  @media (max-width: 967.98px) {
    display: none;
  }
`

/* Bottom-sheet content for the mobile chart drawer (Figma 623-30687).
   Token + price header sits above the chart with a divider; the chart
   card's outer border is neutralised so it reads as a single sheet
   instead of a card-within-a-card. */

/* Reserves vertical space for the BottomDrawer's absolute-positioned
   grabber (top: 16px, 4px tall) plus the 8px breathing room below it,
   so the header doesn't sit underneath the grabber. */
const ChartSheetGrabberSpacer = styled.div`
  height: 28px;
  flex-shrink: 0;
  align-self: stretch;
`

const ChartSheetHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  align-self: stretch;
`

const ChartSheetSymbolRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ChartSheetTokenIcon = styled.span`
  display: inline-flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #F3BA2F;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-family: Kanit;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
`

const ChartSheetSymbol = styled.span`
  font-family: Kanit;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text};
`

const ChartSheetPrice = styled.div`
  font-family: Kanit;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.32px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

const ChartSheetStatsRow = styled.div`
  display: flex;
  gap: 16px;
  font-family: Kanit;
  font-size: 14px;
`

const ChartSheetStat = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
`

const ChartSheetStatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 400;
  line-height: 150%;
`

const ChartSheetStatValue = styled.span<{ $sign?: 'positive' | 'negative' }>`
  color: ${({ $sign, theme }) =>
    $sign === 'negative' ? '#ED4B9E' : $sign === 'positive' ? '#129E7D' : theme.colors.text};
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`

/* Strips the inner SimpleChartCard's card border / background / fixed
   height so it lays out flush on the drawer's white surface. 10px top
   padding matches Figma 623-30687 — the chart sits closer to the
   header divider than the standalone card variant. The chart flex-fills
   the drawer's remaining height instead of locking to 480px so it hugs
   the home-indicator at any device size. */
const ChartSheetChart = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  min-height: 0;
  & > div {
    flex: 1 !important;
    height: auto !important;
    border: 0 !important;
    background: transparent !important;
    border-radius: 0 !important;
    padding: 10px 16px 16px !important;
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

/* ── Collateral picker modal (opens when + is clicked on My Perp Fund) ──
   Wraps the search + token-list body in the shared Modal primitive so
   the modal renders as a centered dialog on desktop and as a bottom-
   sheet (with grabber pill, drag-to-close, tap-on-grabber to close) on
   mobile/tablet — same treatment as DepositModal/WithdrawModal. */

/* Wrapper that strips MarketsDropdown's <Root> card chrome and its
   built-in mobile fullscreen takeover so it lays out cleanly inside
   the shared Modal — the Modal already provides borders, shadow, and
   the bottom-sheet treatment on mobile/tablet. */
const MarketsWrap = styled.div`
  align-self: stretch;
  display: flex;
  width: 100%;
  min-width: 0;

  & > div {
    background: transparent;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    height: 50vh;
    max-height: 50vh;
    width: 100%;

    @media (max-width: 767px) {
      position: static;
      inset: auto;
      width: 100%;
      height: 60vh;
      max-height: 60vh;
    }
  }

  @media (max-width: 967.98px) {
    width: 100%;
  }
`

/* Vertical-stack body for the collateral modal — search field on top,
   scrollable token list below. Matches the rhythm of DepositModal's
   ModalBody. */
const CollateralBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  min-width: 0;

  @media (max-width: 967.98px) {
    width: 100%;
  }
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

/* ── Order Confirmation modal ────────────────────────────────────
   Wraps order-summary rows + Don't-show toggle + action buttons in
   the shared Modal primitive — same Deposit-style chrome (centered
   on desktop, bottom-sheet with grabber/drag-to-close on
   mobile/tablet) as Collateral and Withdraw. */

/* Vertical-stack body for the order confirmation content. Matches
   the 24px rhythm the original ConfirmModalCard used (gap: 24px). */
const ConfirmBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: stretch;
  min-width: 0;

  @media (max-width: 967.98px) {
    width: 100%;
  }
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
  const isUp = side === 'up'
  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title="Order Confirmation" onDismiss={onClose} minWidth="360px">
        <ConfirmBody>
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
        </ConfirmBody>
      </Modal>
    </ModalV2>
  )
}

/* ── Fund Your Perp Account modal ──────────────────────── */

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

/* Maps the page's FUND_ASSETS to the DepositModal's row schema. */
const FUND_DEPOSIT_ROWS: DepositTokenRow[] = FUND_ASSETS.map((a, i) => ({
  id: `${a.symbol}-${i}`,
  symbol: a.symbol,
  displayName: a.symbol,
  balanceText: a.amount,
  usdValueText: a.valueUsd,
  hasBalance: true,
}))

/**
 * SimplePerpsPage's deposit-button entry-point now uses the real
 * DepositModal widget — same controlled flow as the Interactive
 * story (select asset → enter amount → checking → success).
 */
const FundAccountModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<DepositStep>('select')
  const [selected, setSelected] = useState<DepositTokenRow | undefined>()
  const [amount, setAmount] = useState('')

  const handleClose = () => {
    setStep('select')
    setSelected(undefined)
    setAmount('')
    onClose()
  }

  return (
    <DepositModal
      isOpen={isOpen}
      step={step}
      assets={FUND_DEPOSIT_ROWS}
      selectedAssetId={selected?.id}
      selectedAsset={selected}
      evmAddress="0x…8989"
      perpBalanceText="$0"
      amount={amount}
      onAmountChange={setAmount}
      onSelectAsset={(id) => {
        const a = FUND_DEPOSIT_ROWS.find((x) => x.id === id)
        if (!a) return
        setSelected(a)
        setStep('amount')
      }}
      onPercentClick={(pct) => {
        if (!selected) return
        const max = parseFloat(selected.balanceText.replace(/,/g, ''))
        if (!Number.isFinite(max)) return
        setAmount(((max * pct) / 100).toFixed(4))
      }}
      onBack={() => setStep('select')}
      submitState="idle"
      canContinue={!!amount && Number(amount) > 0}
      onContinue={() => {
        setStep('checking')
        setTimeout(() => setStep('success'), 1200)
      }}
      onClose={handleClose}
    />
  )
}

interface CollateralAsset {
  symbol: string
  name: string
  amount: string
  valueUsd: string
  color: string
}

/* Demo market list for the SimpleTickerCard's BTC/USD pill picker.
   Mirrors the shape consumed by pancake-frontend's MarketsDropdown. */
const SAMPLE_MARKETS: MarketRow[] = [
  { symbol: 'BTCUSDT',  lastPrice: '78053.6', priceChangePercent: '0.93',  quoteVolume: '2130000000', maxLeverage: 125 },
  { symbol: 'ETHUSDT',  lastPrice: '3245.8',  priceChangePercent: '1.04',  quoteVolume: '983142000',  maxLeverage: 100 },
  { symbol: 'SOLUSDT',  lastPrice: '182.35',  priceChangePercent: '3.14',  quoteVolume: '412099900',  maxLeverage: 75  },
  { symbol: 'BNBUSDT',  lastPrice: '608.1',   priceChangePercent: '-0.18', quoteVolume: '281050000',  maxLeverage: 75  },
  { symbol: 'XRPUSDT',  lastPrice: '2.412',   priceChangePercent: '5.67',  quoteVolume: '192034500',  maxLeverage: 50  },
  { symbol: 'DOGEUSDT', lastPrice: '0.1821',  priceChangePercent: '-2.33', quoteVolume: '112887000',  maxLeverage: 50  },
  { symbol: 'AVAXUSDT', lastPrice: '41.27',   priceChangePercent: '0.44',  quoteVolume: '74012000',   maxLeverage: 25  },
]

const COLLATERAL_ASSETS: CollateralAsset[] = [
  { symbol: 'BNB',  name: 'BNB chain native token', amount: '23.62',  valueUsd: '$18,053.62', color: '#F0B90B' },
  { symbol: 'CAKE', name: 'PancakeSwap Token',      amount: '987.98', valueUsd: '$1,390.98',  color: '#23CAD5' },
  { symbol: 'USDC', name: 'Circle USDC',            amount: '1,000',  valueUsd: '$999.98',    color: '#2775CA' },
  { symbol: 'USDT', name: 'Tether USDT',            amount: '20',     valueUsd: '$19.98',     color: '#26A17B' },
]

const CollateralModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title="Collateral" onDismiss={onClose} minWidth="360px">
        <CollateralBody>
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
        </CollateralBody>
      </Modal>
    </ModalV2>
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
  onWithdrawOpen: () => void,
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
  onWithdraw: onWithdrawOpen,
  unrealizedPnl: '$0',
})

export function SimplePerpsPage({
  initialPair = 'BTC/USD',
  disconnected = false,
}: SimplePerpsPageProps = {}) {
  const [tf, setTf] = useState<Tf>('1d')
  const [positionsTab, setPositionsTab] = useState<SimplePositionsTab>('positions')
  const [fundOpen, setFundOpen] = useState(false)
  const [collateralOpen, setCollateralOpen] = useState(false)
  const [orderConfirm, setOrderConfirm] = useState<'up' | 'down' | null>(null)
  const [bet, setBet] = useState('')
  const [leverage, setLeverage] = useState(10)
  const [chartOpen, setChartOpen] = useState(false)
  const [withdrawOpen, setWithdrawOpen] = useState(false)
  const [withdrawAssetId, setWithdrawAssetId] = useState<string | undefined>(undefined)
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [marketsOpen, setMarketsOpen] = useState(false)
  const [marketsFavorites, setMarketsFavorites] = useState<string[]>([])

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
            onSymbolClick={() => setMarketsOpen(true)}
            onChartOpen={() => setChartOpen(true)}
          />

          <InlineChart>
            <SimpleChartCard
              timeframe={tf}
              timeframes={TFS}
              onTimeframeChange={(next) => setTf(next as Tf)}
              points={[]}
              currentPriceLabel="640"
              yTicks={Y_TICKS}
              xTicks={X_TICKS}
            />
          </InlineChart>

          <TabletPositionsWrapper>
            <SimplePositionsCard
              tab={positionsTab}
              onTabChange={setPositionsTab}
              positions={disconnected ? [] : SAMPLE_POSITIONS}
              history={disconnected ? [] : SAMPLE_HISTORY}
              disconnectedMessage={
                disconnected
                  ? {
                      positions: 'Connect your wallet to see your active positions',
                      history: 'Connect your wallet to see your transaction history',
                    }
                  : undefined
              }
              onClosePosition={() => undefined}
              onSharePnl={() => undefined}
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
            () => setWithdrawOpen(true),
          )}
          canSubmit={!disconnected}
          {...(disconnected && { fundBalanceText: '0 USDT' })}
          connectWalletLabel={disconnected ? 'Connect wallet' : undefined}
          onConnectWallet={() => undefined}
        />
      </Body>

      <FundAccountModal isOpen={fundOpen} onClose={() => setFundOpen(false)} />

      <CollateralModal isOpen={collateralOpen} onClose={() => setCollateralOpen(false)} />

      <ModalV2 isOpen={marketsOpen} onDismiss={() => setMarketsOpen(false)} closeOnOverlayClick>
        <Modal title="Select Market" onDismiss={() => setMarketsOpen(false)} minWidth="360px" bodyPadding="16px">
          <MarketsWrap>
            <MarketsDropdown
              markets={SAMPLE_MARKETS}
              favorites={marketsFavorites}
              onToggleFavorite={(s) =>
                setMarketsFavorites((prev) =>
                  prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
                )
              }
              onSelect={() => setMarketsOpen(false)}
            />
          </MarketsWrap>
        </Modal>
      </ModalV2>

      <WithdrawModal12
        isOpen={withdrawOpen}
        onClose={() => {
          setWithdrawOpen(false)
          setWithdrawAssetId(undefined)
          setWithdrawAmount('')
        }}
        perpsBalanceText="$1,000.98"
        destinationAddress="0x...1234"
        assets={SAMPLE_WITHDRAW_ASSETS}
        selectedAssetId={withdrawAssetId}
        onSelectAsset={setWithdrawAssetId}
        amount={withdrawAmount}
        onAmountChange={setWithdrawAmount}
        amountUsdText="0.0"
        onWithdraw={() => {
          setWithdrawOpen(false)
          setWithdrawAssetId(undefined)
          setWithdrawAmount('')
        }}
      />

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

      <BottomDrawer
        isOpen={chartOpen}
        setIsOpen={setChartOpen}
        hideCloseButton
        drawerContainerStyle={{ display: 'flex', flexDirection: 'column' }}
        content={
          <>
            <ChartSheetGrabberSpacer />
            <ChartSheetHeader>
              <ChartSheetSymbolRow>
                <ChartSheetTokenIcon>B</ChartSheetTokenIcon>
                <ChartSheetSymbol>BTC</ChartSheetSymbol>
              </ChartSheetSymbolRow>
              <ChartSheetPrice>78,053.6</ChartSheetPrice>
              <ChartSheetStatsRow>
                <ChartSheetStat>
                  <ChartSheetStatLabel>24h Change</ChartSheetStatLabel>
                  <ChartSheetStatValue $sign="negative">-0.01%</ChartSheetStatValue>
                </ChartSheetStat>
                <ChartSheetStat>
                  <ChartSheetStatLabel>24h High</ChartSheetStatLabel>
                  <ChartSheetStatValue>0.0053863</ChartSheetStatValue>
                </ChartSheetStat>
                <ChartSheetStat>
                  <ChartSheetStatLabel>24h Low</ChartSheetStatLabel>
                  <ChartSheetStatValue>0.0051863</ChartSheetStatValue>
                </ChartSheetStat>
              </ChartSheetStatsRow>
            </ChartSheetHeader>
            <ChartSheetChart>
              <SimpleChartCard
                timeframe={tf}
                timeframes={TFS}
                onTimeframeChange={(next) => setTf(next as Tf)}
                points={[]}
                currentPriceLabel="640"
                yTicks={Y_TICKS}
                xTicks={X_TICKS_DRAWER}
              />
            </ChartSheetChart>
          </>
        }
      />

    </Root>
  )
}
