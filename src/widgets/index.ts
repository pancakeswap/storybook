/**
 * Public surface for the perps trading widgets. Each widget here has been
 * synced against `apps/web/src/views/Perpetuals/components/*` in
 * pancake-frontend and is presentation-only — the consumer owns business
 * data and writes.
 *
 * The set below covers every published widget. Page-level layout
 * showcases (e.g. PerpsPage) live in `src/pages/` and are excluded from
 * declaration emission via `vite.lib.config.ts#exclude`. Older
 * deprecated widgets (Navbar, BunnySlider, AddLiquidity, RemoveLiquidity,
 * etc.) have been removed — they were never consumed by pancake-frontend.
 */

// ── Shared primitives ────────────────────────────────────────
export { PerpsPanel, UnderlineTab, UnderlineTabs } from './primitives'
export type { UnderlineTabProps, UnderlineTabsProps } from './primitives'

// ── Synced widgets ───────────────────────────────────────────
export { AccountPanel } from './AccountPanel'
export type { AccountPanelProps, AccountPanelState } from './AccountPanel'

export { LeverageModal } from './LeverageModal'
export type { LeverageModalProps } from './LeverageModal'

export { RecentTrades } from './RecentTrades'
export type { RecentTradeRow, RecentTradesProps } from './RecentTrades'

export { PerpsErrorMessage } from './PerpsErrorMessage'
export type { PerpsErrorMessageProps, PerpsErrorVariant } from './PerpsErrorMessage'

export { WithdrawModal } from './WithdrawModal'
export type { WithdrawModalProps, WithdrawStep, WithdrawTokenRow } from './WithdrawModal'

export { OrderConfirmModal } from './OrderConfirmModal'
export type { OrderConfirmModalProps, OrderConfirmDetails, OrderSide, OrderType } from './OrderConfirmModal'

export { MarketsDropdown } from './MarketsDropdown'
export type { MarketsDropdownProps, MarketRow } from './MarketsDropdown'

export { SymbolHeader } from './SymbolHeader'
export type { SymbolHeaderProps } from './SymbolHeader'

export { OrderBook } from './OrderBook'
export type { OrderBookProps, OrderBookView, OrderBookSizeUnit, DepthLevel } from './OrderBook'

export { PositionsPanel } from './PositionsPanel'
export type {
  PositionsPanelProps,
  PositionsPanelTab,
  PositionRow,
  OpenOrderRow,
} from './PositionsPanel'

export { TpSlModal } from './TpSlModal'
export type { TpSlModalProps, TpSlIntent, PositionSide } from './TpSlModal'

export { ChartPanel } from './ChartPanel'
export type { ChartPanelProps } from './ChartPanel'

export { BookTradesPanel } from './BookTradesPanel'
export type { BookTradesPanelProps, BookTradesTab } from './BookTradesPanel'

export { OrderForm } from './OrderForm'
export type {
  OrderFormProps,
  OrderFormDraft,
  OrderTypeKey,
  SizeUnit,
  MarginMode,
} from './OrderForm'

export { DepositModal } from './DepositModal'
export type {
  DepositModalProps,
  DepositStep,
  DepositTokenRow,
  DepositSubmitState,
  DepositReceipt,
} from './DepositModal'

export { EnableTradingModal } from './EnableTradingModal'
export type { EnableTradingModalProps, EnableTradingPhase } from './EnableTradingModal'
