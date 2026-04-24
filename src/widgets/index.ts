/**
 * Public surface for the perps trading widgets. Each widget here has been
 * synced against `apps/web/src/views/Perpetuals/components/*` in
 * pancake-frontend and is presentation-only — the consumer owns business
 * data and writes.
 *
 * Widgets that have NOT yet been synced (Navbar, BunnySlider,
 * MarketsDropdown, OrderPanel, OrderBook, …) are intentionally not
 * exported. Add them here when their UI is ready and they are stateless.
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
export type { WithdrawModalProps } from './WithdrawModal'

export { OrderConfirmModal } from './OrderConfirmModal'
export type { OrderConfirmModalProps, OrderConfirmDetails, OrderSide, OrderType } from './OrderConfirmModal'

export { MarketsDropdown } from './MarketsDropdown'
export type { MarketsDropdownProps, MarketRow } from './MarketsDropdown'

export { SymbolHeader } from './SymbolHeader'
export type { SymbolHeaderProps } from './SymbolHeader'
