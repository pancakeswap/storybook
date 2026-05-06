import { ActionItem } from './WalletPanel';
import { AssetMode } from './AssetModeModal';
import { AssetModeButton } from './AssetModeButton';
import { AssetModeButtonProps } from './AssetModeButton';
import { AssetModeModal } from './AssetModeModal';
import { AssetModeModalProps } from './AssetModeModal';
import { Bucket } from './WalletPanel';
import { default as default_2 } from 'react';
import { IStyledComponent } from 'styled-components';
import { MarginModeModal } from './MarginModeModal';
import { MarginModeModalProps } from './MarginModeModal';
import { PerpStatsData } from './WalletPanel';
import { ResponsiveValue } from 'styled-system';
import { SimpleBetPanel } from './SimpleBetPanel';
import { SimpleBetPanelProps } from './SimpleBetPanel';
import { SimpleChartCard } from './SimpleChartCard';
import { SimpleChartCardProps } from './SimpleChartCard';
import { SimpleHistoryRow } from './SimplePositionsCard';
import { SimpleOpenOrderRow } from './SimplePositionsCard';
import { SimplePositionDirection } from './SimplePositionsCard';
import { SimplePositionLiqStatus } from './SimplePositionsCard';
import { SimplePositionRow } from './SimplePositionsCard';
import { SimplePositionsCard } from './SimplePositionsCard';
import { SimplePositionsCardProps } from './SimplePositionsCard';
import { SimplePositionsTab } from './SimplePositionsCard';
import { SimpleTickerCard } from './SimpleTickerCard';
import { SimpleTickerCardProps } from './SimpleTickerCard';
import { Theme } from 'styled-system';
import { TLengthStyledSystem } from 'styled-system';
import { WalletData } from './WalletPanel';
import { WalletPanel } from './WalletPanel';
import { WalletPanelLabels } from './WalletPanel';
import { WalletPanelProps } from './WalletPanel';
import { WithdrawAssetRow } from './WithdrawModal12';
import { WithdrawModal12 } from './WithdrawModal12';
import { WithdrawModal12Props } from './WithdrawModal12';

export declare const AccountPanel: default_2.FC<AccountPanelProps>;

export declare interface AccountPanelProps {
    /**
     * The user's external EOA — always shown above the equity rows when
     * present. Pre-truncate at the call site (e.g. "0x1234…abcd"); the
     * widget renders the string as-is.
     */
    walletDisplay?: string;
    state: AccountPanelState;
    /** Disable Deposit / Withdraw buttons (e.g. wallet not connected). */
    canDeposit?: boolean;
    canWithdraw?: boolean;
    onDeposit?: () => void;
    onWithdraw?: () => void;
    onEnableTrading?: () => void;
    /**
     * Translator signature matches PancakeSwap's `@pancakeswap/localization`
     * `TranslateFunction` so pancake-frontend can pass its `t` directly
     * without a cast. Storybook stories that don't need i18n can omit this
     * prop — widget defaults to identity.
     */
    t?: (key: string, options?: Record<string, string | number | undefined>) => string;
    /**
     * Label shown to the left of the equity figure in the slim mobile-row
     * variant. Defaults to "Perpetual Account". Translate at the call site
     * (e.g. `mobileLabel={t('Perpetual Account')}`).
     */
    mobileLabel?: string;
}

/**
 * The trading-account panel renders one of four states. Each state is
 * named so the consumer can map their auth/data flow to the right view
 * without sprinkling boolean flags through the props.
 */
export declare type AccountPanelState = {
    kind: 'no-wallet';
} | {
    kind: 'needs-deposit';
} | {
    kind: 'needs-trading';
} | {
    kind: 'ready';
    /** Pre-formatted equity in quote asset (e.g. "1234.56"). */
    equity: string;
    /** Pre-formatted available balance. */
    available: string;
    /** Pre-formatted unrealized PnL — caller computes sign + decimals. */
    unrealizedPnl: string;
    /** Display the PnL line in success / failure color. */
    pnlSign?: 'positive' | 'negative' | 'zero';
    /** Defaults to "Cross". */
    marginMode?: string;
};

export { ActionItem }

export { AssetMode }

export { AssetModeButton }

export { AssetModeButtonProps }

export { AssetModeModal }

export { AssetModeModalProps }

/**
 * Tabbed container for Order Book + Recent Trades — one panel, one
 * header. The two child slots are always mounted (hidden via
 * `display: none` rather than conditional rendering) so live WS
 * subscriptions inside them don't tear down on every tab toggle.
 */
export declare const BookTradesPanel: default_2.FC<BookTradesPanelProps>;

export declare interface BookTradesPanelProps {
    /** Controlled active tab. */
    tab: BookTradesTab;
    onTabChange: (tab: BookTradesTab) => void;
    /**
     * Order-book content. Both slots are kept mounted; the inactive one is
     * hidden via `display: none` so live WS subscriptions don't tear down
     * on each tab switch and the trades ring buffer keeps filling while
     * the user is on the Book tab.
     */
    bookContent: default_2.ReactNode;
    tradesContent: default_2.ReactNode;
    /** Translator. */
    t?: (key: string) => string;
}

export declare type BookTradesTab = 'book' | 'trades';

declare type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export { Bucket }

/**
 * Stylesheet shell for the perps chart. Owns the panel framing
 * (border, background, min-height) so visual updates flow through this
 * file; the actual chart implementation is provided by the consumer
 * via `children` (TradingView paid library in pancake-frontend, or
 * whatever else upstream wants).
 *
 * Auto-responsive: drops to `MobileChartPanel` when
 * `useMatchBreakpoints().isMobile` is true. Mobile adds an inline
 * timeframe tab row + an optional floating price pill — desktop keeps
 * the original `children` + `minHeight` API untouched.
 */
export declare const ChartPanel: default_2.FC<ChartPanelProps>;

export declare interface ChartPanelProps {
    /**
     * The actual chart widget. The consumer plugs in its
     * TradingView / lightweight-charts / etc. implementation here so
     * this widget stays free of any chart-library dependency. On mobile,
     * if `children` is empty the widget renders the storybook fixture
     * gradient/line so the panel still has something to show.
     */
    children?: default_2.ReactNode;
    /**
     * Minimum height for the chart area (desktop). Defaults to 420px
     * (matches the pancake-frontend perps page). Pass a string ("60vh")
     * or number (pixels). The panel grows to fill remaining space if the
     * parent uses flex.
     */
    minHeight?: string | number;
    /**
     * Timeframes shown in the mobile tab row. Defaults to
     * `['1m','5m','15m','1h','4h','1d']`. Desktop ignores this — the
     * desktop chart-library typically owns its own timeframe UI.
     */
    timeframes?: readonly string[];
    /** Currently active timeframe (mobile). */
    activeTimeframe?: string;
    /** Fired when the user taps a timeframe tab (mobile). */
    onTimeframeChange?: (tf: string) => void;
    /**
     * Optional small floating price pill rendered on the right edge of
     * the mobile canvas. When undefined, no pill is rendered.
     */
    priceLabel?: string;
    /**
     * Minimum height of the mobile chart canvas in pixels. Defaults to
     * 220 to match the original mobile-perps mockup.
     */
    mobileMinHeight?: number;
}

/**
 * Multi-step deposit flow. Fully presentation — the consumer
 * (pancake-frontend) owns the wallet/balance fetches, the on-chain
 * deposit hook lifecycle, the post-broadcast polling that detects
 * when Aster credits the deposit, and the step transitions. The
 * widget renders whatever the current `step` says to render.
 *
 * `renderTokenIcon` + `renderSpinner` slots let the consumer plug in
 * its own visual primitives (PCS uikit Spinner, project's TokenIcon)
 * without storybook bundling them.
 */
export declare const DepositModal: default_2.FC<DepositModalProps>;

export declare interface DepositModalProps {
    isOpen: boolean;
    onClose: () => void;
    /** Controlled step. Consumer drives transitions in response to user actions. */
    step: DepositStep;
    /** Pre-truncated EVM address, e.g. "0x1234…abcd". */
    evmAddress?: string;
    /** Pre-truncated Solana address. */
    solanaAddress?: string;
    /** Pre-formatted current Perp balance shown in the summary card
     *  (e.g. "$0"). Defaults to "$0" when omitted. */
    perpBalanceText?: string;
    isLoadingAssets?: boolean;
    assets: DepositTokenRow[];
    selectedAssetId?: string;
    onSelectAsset: (id: string) => void;
    otherSupportedSymbols?: string[];
    selectedAsset?: DepositTokenRow;
    amount: string;
    onAmountChange: (v: string) => void;
    sourceAddress?: string;
    exceedsBalance?: boolean;
    errorSlot?: default_2.ReactNode;
    onPercentClick: (pct: number) => void;
    submitState: DepositSubmitState;
    canContinue: boolean;
    onContinue: () => void;
    onBack: () => void;
    receipt?: DepositReceipt;
    checkingElapsedMs?: number;
    onDepositAgain?: () => void;
    onRetry?: () => void;
    /** Translator. */
    t?: (key: string, options?: Record<string, string | number | undefined>) => string;
    /** Optional custom token-icon renderer (consumer's TokenIcon). */
    renderTokenIcon?: (asset: DepositTokenRow, size?: number) => default_2.ReactNode;
    /** Optional spinner override (consumer's Spinner). */
    renderSpinner?: (size: number) => default_2.ReactNode;
}

export declare interface DepositReceipt {
    hash: string;
    /** Pre-formatted amount string. */
    amount: string;
    /** Asset symbol (e.g. "USDT"). */
    assetSymbol: string;
    /** Pre-truncated source address for the success screen. */
    sourceAddress?: string;
    /**
     * Block-explorer URL for the tx. Consumer builds it from chain context
     * (BSC scan, Solana explorer, etc.). When supplied, the truncated hash
     * is rendered as a link.
     */
    explorerUrl?: string;
}

export declare type DepositStep = 'select' | 'amount' | 'checking' | 'success' | 'failed';

/** Submit-button copy for each phase of the on-chain deposit flow. */
export declare type DepositSubmitState = 'idle' | 'switching-chain' | 'approving' | 'approve-confirming' | 'depositing' | 'deposit-confirming' | 'done' | 'failed';

/** Compact descriptor for one depositable token row in the picker. */
export declare interface DepositTokenRow {
    /** Stable id (typically asset.name + network). */
    id: string;
    /** Display symbol, e.g. "USDT". */
    symbol: string;
    /** Friendlier display name when different (e.g. "Tether USD"). */
    displayName?: string;
    /** Pre-formatted balance string (e.g. "1234.56"). */
    balanceText: string;
    /** Pre-formatted USD value, e.g. "$999,999.99". Optional. */
    usdValueText?: string;
    /** Whether the wallet has any non-zero balance for this asset. */
    hasBalance: boolean;
    /** Optional logo URL — consumer's responsibility to resolve. */
    logoUrl?: string;
}

/** [price, qty] as raw strings from the exchange. */
export declare type DepthLevel = [string, string];

/**
 * "Enable Perps Trading" modal. Two guided steps (link wallet → authorize
 * agent) plus a transient "checking status" state and a final "done"
 * confirmation. Pure presentation — the consumer (pancake-frontend)
 * derives `phase` from its Privy + Aster auth state, computes the
 * pre-localized button labels, and provides the click handlers.
 *
 * Why phase-controlled instead of internal state machine: keeps the
 * widget agnostic to Privy. The consumer can swap to any other auth
 * provider (or mock it for storybook stories) by mapping its own state
 * to the `EnableTradingPhase` union.
 */
export declare const EnableTradingModal: default_2.FC<EnableTradingModalProps>;

export declare interface EnableTradingModalProps {
    isOpen: boolean;
    onClose: () => void;
    /** Controlled phase. */
    phase: EnableTradingPhase;
    /** External EOA address — pre-formatted by the consumer (full or truncated). */
    eoaAddress?: string;
    /**
     * Embedded-wallet (trading agent) address. When undefined and the
     * widget needs to display something, falls back to either the
     * "Provisioning…" or "Will be created in step 1" placeholder
     * depending on `isProvisioning`.
     */
    agentAddress?: string;
    /** Show "Provisioning…" instead of "Will be created in step 1". */
    isProvisioning?: boolean;
    /**
     * Pre-formatted button label, e.g. "Step 1 — Link your wallet" / "Sign
     * in your wallet…" / "Verifying…". Consumer rotates this based on its
     * SIWE flow state.
     */
    linkButtonLabel: string;
    isLinkDisabled?: boolean;
    isLinkPending?: boolean;
    onLinkWallet: () => void;
    /**
     * Pre-formatted button label for the approve step. Consumer rotates
     * this based on which signature it's collecting (agent vs builder).
     */
    approveButtonLabel: string;
    isApproveDisabled?: boolean;
    isApprovePending?: boolean;
    onApprove: () => void;
    /** Optional inline error block (e.g. PerpsErrorMessage). */
    errorSlot?: default_2.ReactNode;
    /** Translator. */
    t?: (key: string) => string;
}

/**
 * Distinct UI states the modal can be in.
 *
 *   - `link-wallet`     — user hasn't done SIWE yet; show "Step 1" button
 *   - `authorize-agent` — wallet is linked, ready to sign approveAgent;
 *                         show "Step 2" button
 *   - `checking-status` — auth probes still in flight; show disabled
 *                         "Checking your trading status…" spinner
 *   - `done`            — agent + builder both approved; show success
 *                         message before parent dismisses
 *
 * The widget knows nothing about Privy / Aster / auth hooks. The
 * consumer maps its provider state machine to one of these phases.
 */
export declare type EnableTradingPhase = 'link-wallet' | 'authorize-agent' | 'checking-status' | 'done';

export declare const LeverageModal: default_2.FC<LeverageModalProps>;

export declare interface LeverageModalProps {
    /** Controlled open state. */
    isOpen: boolean;
    symbol: string;
    /** Initial leverage shown when the modal opens. */
    currentLeverage: number;
    /** Inclusive bounds — defaults [1, 100]. */
    minLeverage?: number;
    maxLeverage?: number;
    /**
     * USDT (or quote) balance available for new positions. Used to display
     * the "Maximum position at current leverage" preview line.
     */
    availableBalance: number;
    /**
     * Called when the user clicks Confirm with their chosen leverage. The
     * consumer is responsible for the async write back to the venue, error
     * handling, and closing the modal (via `isOpen=false`) on success.
     */
    onConfirm: (leverage: number) => void;
    onClose: () => void;
    /** Disables the confirm button (e.g. while the consumer's mutation is in-flight). */
    isSubmitting?: boolean;
    /**
     * Optional content slot rendered above the Confirm button. Use for
     * caller-classified error messages, info hints, or warnings.
     */
    errorSlot?: default_2.ReactNode;
    /** Optional translator. Defaults to identity. */
    /**
     * Translator signature matches PancakeSwap's `@pancakeswap/localization`
     * `TranslateFunction` (data values are `string | number | undefined`) so
     * pancake-frontend can pass its `t` directly without a cast. Storybook
     * stories that don't need i18n can omit this prop — `defaultT` handles
     * `%placeholder%` substitution locally.
     */
    t?: (key: string, options?: Record<string, string | number | undefined>) => string;
}

export declare type MarginMode = 'CROSS' | 'ISOLATED';

export { MarginModeModal }

export { MarginModeModalProps }

export declare interface MarketRow {
    /** Full venue symbol, e.g. 'BTCUSDT'. */
    symbol: string;
    /** Raw last-traded price from the ticker (unformatted). */
    lastPrice?: string;
    /** Raw signed 24h change percent, e.g. '1.04' or '-0.52'. */
    priceChangePercent?: string;
    /** Raw 24h quote volume (USDT). */
    quoteVolume?: string;
    /** Max leverage available on this market (e.g. 100 → "100x" pill). */
    maxLeverage?: number;
}

/**
 * Markets picker dropdown - tabs for All / Favorites, text search,
 * sorted table with live 24h stats. Stateless apart from the search
 * query and active tab (pure view-state).
 *
 * Sort order: markets are rendered in the order the consumer provides.
 * Frontend sorts by 24h quote volume desc at the hook level - matches
 * Aster's default ordering. If you need a different order (e.g. stable
 * alpha for storybook stories), sort before passing in.
 */
export declare const MarketsDropdown: default_2.FC<MarketsDropdownProps>;

export declare interface MarketsDropdownProps {
    /** Raw market rows from the consumer's ticker query. */
    markets: MarketRow[];
    /** Symbols the user has starred. Consumer persists across sessions. */
    favorites: string[];
    /** Toggle callback — consumer flips the symbol in/out of its favorites set. */
    onToggleFavorite: (symbol: string) => void;
    /** Row click callback — consumer navigates to the selected market. */
    onSelect: (symbol: string) => void;
    /**
     * Logo lookup by base asset (e.g. `logoForSymbol('BTC') -> '...png'`).
     * Return undefined when no logo is available; the widget falls back to
     * a single-letter glyph.
     */
    logoForSymbol?: (baseAsset: string) => string | undefined;
    /** Show a "Loading markets..." placeholder in the body when true. */
    isLoading?: boolean;
    /** Translator. */
    t?: (key: string) => string;
}

export declare interface OpenOrderRow {
    /** Stable React key — typically the orderId. */
    id: string | number;
    orderId: number;
    symbol: string;
    side: 'BUY' | 'SELL';
    /** Order type — displayed verbatim (e.g. "LIMIT", "STOP_MARKET"). */
    type: string;
    price: string;
    origQty: string;
    executedQty: string;
    status: string;
}

/**
 * Live depth book — bid/ask ladder with heatbar backgrounds, price-step
 * aggregation dropdown, size-unit toggle, and view-mode toggle
 * (both / bids / asks).
 *
 * All data + selected step / view / sizeUnit come in as props; consumer
 * persists selection across sessions. `onPriceStepChange` may be called
 * when the current `priceStep` isn't valid for the symbol (e.g. user
 * had "100" from BTCUSDT and switched to ASTER) — the widget snaps to
 * the finest available option and emits a change.
 */
export declare const OrderBook: default_2.FC<OrderBookProps>;

export declare interface OrderBookProps {
    /** Asks sorted ascending (best ask first). Raw `[price, qty]` tuples. */
    asks: DepthLevel[];
    /** Bids sorted descending (best bid first). */
    bids: DepthLevel[];
    /** Base asset symbol, e.g. "BTC". */
    baseAsset: string;
    /** Quote asset symbol, e.g. "USDT". */
    quoteAsset: string;
    /** Native tick size from the exchange's PRICE_FILTER. Drives aggregation. */
    tickSize: number;
    /** Decimal places for the price column. */
    pricePrecision?: number;
    /** Last traded price — drives which aggregation step options are offered. */
    lastPrice?: number;
    view: OrderBookView;
    onViewChange: (v: OrderBookView) => void;
    priceStep: string;
    onPriceStepChange: (v: string) => void;
    sizeUnit: OrderBookSizeUnit;
    onSizeUnitChange: (v: OrderBookSizeUnit) => void;
    /**
     * Hide the panel without unmounting — preserves the caller's depth
     * subscription when toggled inside a tabbed panel.
     */
    hidden?: boolean;
    /** Skip the PerpsPanel shell — caller already wraps us. */
    embedded?: boolean;
    /** Translator. */
    t?: (key: string) => string;
    /** "Funding (8h) / Countdown" stat — first line shown above the ladder. */
    fundingRateText?: string;
    /** Countdown "05:06:37" string — paired with `fundingRateText`. */
    fundingCountdownText?: string;
    /** Big mid-price displayed between asks and bids on mobile. */
    midPriceText?: string;
    /** Sub-price under `midPriceText` (e.g. "$77,824.4"). */
    midSubText?: string;
    /**
     * Tick-size dropdown options on mobile. Defaults to
     * `['0.1','0.5','1','5','10','50','100']`. The selected value is
     * driven by `priceStep`; selection emits `onPriceStepChange`.
     */
    priceStepOptions?: string[];
}

export declare type OrderBookSizeUnit = 'BASE' | 'QUOTE';

export declare type OrderBookView = 'both' | 'bids' | 'asks';

export declare interface OrderConfirmDetails {
    symbol: string;
    side: OrderSide;
    type: OrderType;
    /** Base-asset quantity after quantization. */
    quantity: string;
    baseAsset: string;
    quoteAsset: string;
    /** Limit price (undefined for market orders). */
    price?: string;
    stopPrice?: string;
    leverage: number;
    /** USDT margin required (notional / leverage). */
    costUsdt: number;
    /** Estimated liquidation price. */
    liqPrice?: number;
    reduceOnly?: boolean;
}

/**
 * Order-preview confirmation shown before placing the order. The
 * "Don't show this again" checkbox is purely a UI hint — the consumer
 * persists the preference (typically a localStorage atom) via the
 * `onSkipFutureChange` callback and decides whether to skip this modal
 * on subsequent submits.
 */
export declare const OrderConfirmModal: default_2.FC<OrderConfirmModalProps>;

export declare interface OrderConfirmModalProps {
    /** Controlled open state. */
    isOpen: boolean;
    /** Order summary to render. Caller only sets isOpen=true when ready. */
    details: OrderConfirmDetails;
    /** Called when the user clicks Confirm Buy/Sell. */
    onConfirm: () => void;
    onClose: () => void;
    /**
     * Called when the user toggles "Don't show this again" before
     * confirming. Consumer persists the preference (e.g. localStorage)
     * and skips this modal on subsequent submits.
     */
    onSkipFutureChange?: (skip: boolean) => void;
    /** Translator. */
    t?: (key: string, options?: Record<string, string | number | undefined>) => string;
}

/**
 * Trading order entry form. Stateless — the consumer owns the full
 * `OrderFormDraft` (typically persisted to localStorage via jotai),
 * the computed display strings (availableBalance / preview / cta) and
 * the async submit lifecycle (canSubmit, isSubmitting, errorSlot).
 *
 * The widget renders the visual surface and dispatches user intent via
 * callbacks: `onDraftChange` for any field edit, `onSubmit` for the
 * primary action, `onLeverageClick` / `onMarginModeToggle` /
 * `onDepositClick` for the inline pills.
 *
 * Sub-modals (LeverageModal, OrderConfirmModal, DepositModal,
 * EnableTradingModal) are rendered by the consumer alongside this
 * form — keeps the widget free of any imperative-modal coupling.
 */
export declare const OrderForm: default_2.FC<OrderFormProps>;

/**
 * The full form-draft state. Mirrors pancake-frontend's
 * `orderFormDraftAtom` shape — `timeInForce` is included so consumers
 * who persist the draft can round-trip without losing it, even though
 * this widget doesn't expose a UI to change it (Aster default GTC).
 */
export declare interface OrderFormDraft {
    side: OrderSide_2;
    leverage: number;
    marginMode: MarginMode;
    sizeUnit: SizeUnit;
    quantity: string;
    price: string;
    reduceOnly: boolean;
    tpSlEnabled: boolean;
    takeProfitPrice: string;
    /** Estimated PnL in USDT at the TP trigger price. */
    takeProfitPnl?: string;
    /** Trigger source for the TP leg — `LAST` (last trade) or `MARK`. */
    takeProfitSource?: StopPriceSource;
    stopLossPrice: string;
    /** Estimated PnL in USDT at the SL trigger price. */
    stopLossPnl?: string;
    /** Trigger source for the SL leg — `LAST` (last trade) or `MARK`. */
    stopLossSource?: StopPriceSource;
    timeInForce: 'GTC' | 'IOC' | 'FOK' | 'GTX';
    /** Trigger price used by Stop Limit + Stop Market orders. */
    stopPrice: string;
    /**
     * Which oracle the trigger watches. `LAST` → Aster's `CONTRACT_PRICE`
     * (last trade), `MARK` → `MARK_PRICE` (mark/index). Default `LAST`.
     */
    stopPriceSource: StopPriceSource;
}

export declare interface OrderFormProps {
    symbol: string;
    baseAsset: string;
    quoteAsset: string;
    draft: OrderFormDraft;
    onDraftChange: (next: OrderFormDraft) => void;
    typeKey: OrderTypeKey;
    onTypeKeyChange: (next: OrderTypeKey) => void;
    /** Pre-formatted available balance text (e.g. "1234.56" or "--"). */
    availableBalanceText: string;
    /** Pre-formatted preview lines for the summary footer. */
    preview: {
        cost: string;
        liq: string;
    };
    /** Maker/taker fee bps for the summary footer (e.g. "0.02% / 0.05%"). */
    feeText: string;
    /** Slider position 0-100 (consumer computes from quantity ÷ maxSize). */
    sizePercent: number;
    onSizePercentChange: (pct: number) => void;
    /** Submit button label (consumer computes — "Connect Wallet" / "Buy / Long" / etc.). */
    cta: string;
    /** Submit button enabled? */
    canSubmit: boolean;
    /** Submit in flight (button shows isLoading). */
    isSubmitting?: boolean;
    /** Margin-mode toggle in flight (disables the margin button). */
    marginSubmitting?: boolean;
    /** auth.ready — when false the submit click routes via consumer to deposit/enable-trading. */
    authReady?: boolean;
    /** Wallet address present? When false the submit button is disabled in the un-ready branch. */
    hasAddress?: boolean;
    /** Consumer renders its classified error here (e.g. PerpsErrorMessage). */
    errorSlot?: default_2.ReactNode;
    /**
     * Current mark price for the symbol. Used as the entry-price fallback
     * for TP/SL PnL calculations when no limit price is set. Optional —
     * if omitted, TP/SL inputs still accept manual values but the
     * trigger ↔ PnL bidirectional sync is disabled.
     */
    markPrice?: number;
    /**
     * Decimal places used to format computed trigger prices (defaults to
     * 2). Pass `meta.pricePrecision` for tick-aligned output.
     */
    priceDecimals?: number;
    /**
     * Click submit — consumer routes via canSubmit (place order) or shows
     * the deposit/auth modals. Mobile renders two CTAs (Buy / Sell) that
     * pass `sideOverride` so the consumer doesn't have to wait for the
     * `draft.side` state update to flush before placing the order.
     */
    onSubmit: (opts?: {
        sideOverride?: OrderSide_2;
    }) => void;
    /** Open the leverage adjuster modal. */
    onLeverageClick: () => void;
    /** Toggle margin mode (consumer fires the signed setMarginType call). */
    onMarginModeToggle: () => void;
    /** Open the deposit modal (Avbl row + connector for not-yet-deposited users). */
    onDepositClick: () => void;
    /**
     * Optional extra controls rendered on the right of the Cross/Isolated +
     * Leverage pills row. Used by consumers to drop in additional
     * account-level mode toggles (e.g. AssetModeButton) without coupling
     * the OrderForm widget to those concepts.
     */
    extraControls?: default_2.ReactNode;
    /** Translator. */
    t?: (key: string, options?: Record<string, string | number | undefined>) => string;
}

export declare interface OrderHistoryRow {
    /** Stable React key — typically the orderId. */
    id: string | number;
    /** Local date string, e.g. '2025-04-17'. */
    date: string;
    /** Local time string, e.g. '01:37:26'. */
    time: string;
    symbol: string;
    side: 'BUY' | 'SELL';
    /** Humanized order type, e.g. 'Limit', 'Stop Market (Reduce)'. */
    type: string;
    /** Pre-formatted price (or 'Market' / 'Market / Trig <price>'). */
    price: string;
    /** Pre-formatted original quantity. */
    origQty: string;
    /** Pre-formatted executed quantity. */
    executedQty: string;
    /** Wire status — 'FILLED' / 'CANCELED' / 'EXPIRED' / 'REJECTED' etc. */
    status: string;
}

export declare type OrderSide = 'BUY' | 'SELL';

declare type OrderSide_2 = 'BUY' | 'SELL';

export declare type OrderType = 'MARKET' | 'LIMIT' | 'STOP' | 'TAKE_PROFIT' | 'STOP_MARKET' | 'TAKE_PROFIT_MARKET' | 'TRAILING_STOP_MARKET';

export declare type OrderTypeKey = 'market' | 'limit' | 'stop-limit' | 'stop-market';

/**
 * User-facing error display. Never renders raw viem/wagmi stack traces,
 * hex payloads, or provider internals directly — those hide behind a
 * "Show details" disclosure so designers/support can still grab them
 * when needed.
 *
 * The consumer (pancake-frontend) classifies its own error objects and
 * maps them to the `variant` + `title` + `message` + `details` props.
 * Keeps this widget agnostic to error-handling libraries (viem, wagmi,
 * Aster classifier, etc.).
 */
export declare const PerpsErrorMessage: default_2.FC<PerpsErrorMessageProps>;

export declare interface PerpsErrorMessageProps {
    /**
     * Visual severity. The consumer maps its domain-specific error
     * classification (e.g. user-rejected → primary, network → danger) to
     * one of these four buckets. The widget never inspects the original
     * error object — keeps the storybook surface free of consumer-specific
     * error types.
     */
    variant: PerpsErrorVariant;
    /**
     * Optional bold heading. When omitted the widget renders a single-line
     * message — matches the "user-rejected" understated style in
     * pancake-frontend (no title, just the cancellation note).
     */
    title?: string;
    /** Plain-language explanation of what went wrong / what to do next. */
    message: string;
    /**
     * Optional raw stack/hex/payload string. When present a "Show details"
     * toggle appears that reveals the text in a monospace box. Consumers
     * should only pass this for kinds where seeing internals helps support
     * (e.g. unexpected RPC errors), never for user-rejection / validation.
     */
    details?: string;
    /** Translator for the toggle labels. Defaults to identity. */
    t?: (key: string) => string;
}

export declare type PerpsErrorVariant = 'primary' | 'success' | 'warning' | 'danger';

/**
 * Edge-to-edge trading-UI panel shell. Wraps the PCS `Card` so we keep the
 * shared component (accessibility role, future theme features) but flatten
 * the styling that doesn't fit a trading terminal:
 *   - border-radius (both the outer StyledCard and inner StyledCardInner)
 *   - the 1px/3px stroke-via-padding
 *   - the default block `display` — we want flex column so panel bodies can
 *     fill and `flex: 1` children work inside.
 *
 * The `& > div` selector targets `Card`'s inner `StyledCardInner` — fragile
 * (relies on Card's DOM shape) but contained: if Card's markup changes we
 * only update this one selector, not 8 widget files.
 */
export declare const PerpsPanel: IStyledComponent<"web", {
isActive?: boolean | undefined;
isSuccess?: boolean | undefined;
isWarning?: boolean | undefined;
isDisabled?: boolean | undefined;
ribbon?: default_2.ReactNode;
borderBackground?: string | undefined;
background?: string | undefined;
innerCardProps?: BoxProps | undefined;
m?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
margin?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
mt?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
marginTop?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
mr?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
marginRight?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
mb?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
marginBottom?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
ml?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
marginLeft?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
mx?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
marginX?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
my?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
marginY?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
p?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
padding?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
pt?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
paddingTop?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
pr?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
paddingRight?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
pb?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
paddingBottom?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
pl?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
paddingLeft?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
px?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
paddingX?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
py?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
paddingY?: ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>> | undefined;
defaultChecked?: boolean | undefined | undefined;
defaultValue?: string | number | readonly string[] | undefined;
suppressContentEditableWarning?: boolean | undefined | undefined;
suppressHydrationWarning?: boolean | undefined | undefined;
accessKey?: string | undefined | undefined;
autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {}) | undefined;
autoFocus?: boolean | undefined | undefined;
className?: string | undefined | undefined;
contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
contextMenu?: string | undefined | undefined;
dir?: string | undefined | undefined;
draggable?: (boolean | "true" | "false") | undefined;
enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined | undefined;
hidden?: boolean | undefined | undefined;
id?: string | undefined | undefined;
lang?: string | undefined | undefined;
nonce?: string | undefined | undefined;
slot?: string | undefined | undefined;
spellCheck?: (boolean | "true" | "false") | undefined;
style?: default_2.CSSProperties | undefined;
tabIndex?: number | undefined | undefined;
title?: string | undefined | undefined;
translate?: "yes" | "no" | undefined | undefined;
radioGroup?: string | undefined | undefined;
role?: default_2.AriaRole | undefined;
about?: string | undefined | undefined;
content?: string | undefined | undefined;
datatype?: string | undefined | undefined;
inlist?: any;
prefix?: string | undefined | undefined;
property?: string | undefined | undefined;
rel?: string | undefined | undefined;
resource?: string | undefined | undefined;
rev?: string | undefined | undefined;
typeof?: string | undefined | undefined;
vocab?: string | undefined | undefined;
autoCorrect?: string | undefined | undefined;
autoSave?: string | undefined | undefined;
color?: string | undefined | undefined;
itemProp?: string | undefined | undefined;
itemScope?: boolean | undefined | undefined;
itemType?: string | undefined | undefined;
itemID?: string | undefined | undefined;
itemRef?: string | undefined | undefined;
results?: number | undefined | undefined;
security?: string | undefined | undefined;
unselectable?: "on" | "off" | undefined | undefined;
inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined | undefined;
is?: string | undefined | undefined;
exportparts?: string | undefined | undefined;
part?: string | undefined | undefined;
"aria-activedescendant"?: string | undefined | undefined;
"aria-atomic"?: (boolean | "true" | "false") | undefined;
"aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | undefined;
"aria-braillelabel"?: string | undefined | undefined;
"aria-brailleroledescription"?: string | undefined | undefined;
"aria-busy"?: (boolean | "true" | "false") | undefined;
"aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-colcount"?: number | undefined | undefined;
"aria-colindex"?: number | undefined | undefined;
"aria-colindextext"?: string | undefined | undefined;
"aria-colspan"?: number | undefined | undefined;
"aria-controls"?: string | undefined | undefined;
"aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined | undefined;
"aria-describedby"?: string | undefined | undefined;
"aria-description"?: string | undefined | undefined;
"aria-details"?: string | undefined | undefined;
"aria-disabled"?: (boolean | "true" | "false") | undefined;
"aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined | undefined;
"aria-errormessage"?: string | undefined | undefined;
"aria-expanded"?: (boolean | "true" | "false") | undefined;
"aria-flowto"?: string | undefined | undefined;
"aria-grabbed"?: (boolean | "true" | "false") | undefined;
"aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined | undefined;
"aria-hidden"?: (boolean | "true" | "false") | undefined;
"aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined | undefined;
"aria-keyshortcuts"?: string | undefined | undefined;
"aria-label"?: string | undefined | undefined;
"aria-labelledby"?: string | undefined | undefined;
"aria-level"?: number | undefined | undefined;
"aria-live"?: "off" | "assertive" | "polite" | undefined | undefined;
"aria-modal"?: (boolean | "true" | "false") | undefined;
"aria-multiline"?: (boolean | "true" | "false") | undefined;
"aria-multiselectable"?: (boolean | "true" | "false") | undefined;
"aria-orientation"?: "horizontal" | "vertical" | undefined | undefined;
"aria-owns"?: string | undefined | undefined;
"aria-placeholder"?: string | undefined | undefined;
"aria-posinset"?: number | undefined | undefined;
"aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
"aria-readonly"?: (boolean | "true" | "false") | undefined;
"aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined | undefined;
"aria-required"?: (boolean | "true" | "false") | undefined;
"aria-roledescription"?: string | undefined | undefined;
"aria-rowcount"?: number | undefined | undefined;
"aria-rowindex"?: number | undefined | undefined;
"aria-rowindextext"?: string | undefined | undefined;
"aria-rowspan"?: number | undefined | undefined;
"aria-selected"?: (boolean | "true" | "false") | undefined;
"aria-setsize"?: number | undefined | undefined;
"aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | undefined;
"aria-valuemax"?: number | undefined | undefined;
"aria-valuemin"?: number | undefined | undefined;
"aria-valuenow"?: number | undefined | undefined;
"aria-valuetext"?: string | undefined | undefined;
children?: default_2.ReactNode;
dangerouslySetInnerHTML?: {
__html: string | TrustedHTML;
} | undefined | undefined;
onCopy?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onCopyCapture?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onCut?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onCutCapture?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onPaste?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onPasteCapture?: default_2.ClipboardEventHandler<HTMLDivElement> | undefined;
onCompositionEnd?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionEndCapture?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionStart?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionStartCapture?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionUpdate?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onCompositionUpdateCapture?: default_2.CompositionEventHandler<HTMLDivElement> | undefined;
onFocus?: default_2.FocusEventHandler<HTMLDivElement> | undefined;
onFocusCapture?: default_2.FocusEventHandler<HTMLDivElement> | undefined;
onBlur?: default_2.FocusEventHandler<HTMLDivElement> | undefined;
onBlurCapture?: default_2.FocusEventHandler<HTMLDivElement> | undefined;
onChange?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onChangeCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onBeforeInput?: default_2.InputEventHandler<HTMLDivElement> | undefined;
onBeforeInputCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onInput?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onInputCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onReset?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onResetCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onSubmit?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onSubmitCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onInvalid?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onInvalidCapture?: default_2.FormEventHandler<HTMLDivElement> | undefined;
onLoad?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onError?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onErrorCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onKeyDown?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyDownCapture?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyPress?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyPressCapture?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyUp?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onKeyUpCapture?: default_2.KeyboardEventHandler<HTMLDivElement> | undefined;
onAbort?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onAbortCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onCanPlay?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayThrough?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onCanPlayThroughCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onDurationChange?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onDurationChangeCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEmptied?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEmptiedCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEncrypted?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEncryptedCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEnded?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onEndedCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadedData?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadedDataCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadedMetadata?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadedMetadataCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadStart?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onLoadStartCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPause?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPauseCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPlay?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPlayCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPlaying?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onPlayingCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onProgress?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onProgressCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onRateChange?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onRateChangeCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSeeked?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSeekedCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSeeking?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSeekingCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onStalled?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onStalledCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSuspend?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSuspendCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onTimeUpdate?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onTimeUpdateCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onVolumeChange?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onVolumeChangeCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onWaiting?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onWaitingCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onAuxClick?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onAuxClickCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onClick?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onClickCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onContextMenu?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onContextMenuCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onDoubleClick?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onDoubleClickCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onDrag?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragEnd?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragEndCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragEnter?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragEnterCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragExit?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragExitCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragLeave?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragLeaveCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragOver?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragOverCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragStart?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDragStartCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDrop?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onDropCapture?: default_2.DragEventHandler<HTMLDivElement> | undefined;
onMouseDown?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseDownCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseEnter?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseLeave?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseMove?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseMoveCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseOut?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseOutCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseOver?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseOverCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseUp?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onMouseUpCapture?: default_2.MouseEventHandler<HTMLDivElement> | undefined;
onSelect?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onSelectCapture?: default_2.ReactEventHandler<HTMLDivElement> | undefined;
onTouchCancel?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchCancelCapture?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchEnd?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchEndCapture?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchMove?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchMoveCapture?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchStart?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onTouchStartCapture?: default_2.TouchEventHandler<HTMLDivElement> | undefined;
onPointerDown?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerDownCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerMove?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerMoveCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerUp?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerUpCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerCancel?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerCancelCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerEnter?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerLeave?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerOver?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerOverCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerOut?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onPointerOutCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onGotPointerCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onGotPointerCaptureCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onLostPointerCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onLostPointerCaptureCapture?: default_2.PointerEventHandler<HTMLDivElement> | undefined;
onScroll?: default_2.UIEventHandler<HTMLDivElement> | undefined;
onScrollCapture?: default_2.UIEventHandler<HTMLDivElement> | undefined;
onWheel?: default_2.WheelEventHandler<HTMLDivElement> | undefined;
onWheelCapture?: default_2.WheelEventHandler<HTMLDivElement> | undefined;
onAnimationStart?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationStartCapture?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationEnd?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationEndCapture?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationIteration?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onAnimationIterationCapture?: default_2.AnimationEventHandler<HTMLDivElement> | undefined;
onTransitionEnd?: default_2.TransitionEventHandler<HTMLDivElement> | undefined;
onTransitionEndCapture?: default_2.TransitionEventHandler<HTMLDivElement> | undefined;
'data-pr-tooltip'?: string | undefined | undefined;
'data-pr-disabled'?: boolean | undefined | undefined;
'data-pr-classname'?: string | undefined | undefined;
'data-pr-position'?: "top" | "bottom" | "left" | "right" | "mouse" | undefined | undefined;
'data-pr-my'?: string | undefined | undefined;
'data-pr-at'?: string | undefined | undefined;
'data-pr-event'?: "hover" | "focus" | "both" | undefined | undefined;
'data-pr-showevent'?: string | undefined | undefined;
'data-pr-hideevent'?: string | undefined | undefined;
'data-pr-mousetrack'?: boolean | undefined | undefined;
'data-pr-mousetracktop'?: number | undefined | undefined;
'data-pr-mousetrackleft'?: number | undefined | undefined;
'data-pr-showdelay'?: number | undefined | undefined;
'data-pr-updatedelay'?: number | undefined | undefined;
'data-pr-hidedelay'?: number | undefined | undefined;
'data-pr-autohide'?: boolean | undefined | undefined;
'data-pr-showondisabled'?: boolean | undefined | undefined;
}>;

export { PerpStatsData }

export declare interface PositionRow {
    /** Stable React key — consumer typically uses `${symbol}-${positionSide}`. */
    id: string;
    symbol: string;
    /** Signed base-asset position amount — positive = long, negative = short. */
    positionAmt: number;
    entryPrice: number;
    leverage: number;
    /**
     * Server-reported uPnL. The widget prefers a live computation from
     * (markPrice - entryPrice) × positionAmt when markPrice is available,
     * and falls back to this string.
     */
    unrealizedProfit: string;
    /** Existing TP / SL trigger-order prices for this symbol, if any. */
    tpStopPrice?: string;
    slStopPrice?: string;
}

/** History sheet inner-tab (mobile only). */
export declare type PositionsHistoryTab = 'orders' | 'trades' | 'tx';

export declare type PositionSide = 'LONG' | 'SHORT';

/**
 * Bottom-panel tabs: Positions / Open Orders / History. Stateless apart
 * from tab view-state, which is controlled by the consumer (so it
 * survives remount / route changes if the consumer persists it).
 *
 * Per-row business actions (Close / Cancel / TP+SL editor) fire
 * callbacks — consumer owns the signed API calls + toast + modal. The
 * widget just renders.
 *
 * Auto-responsive: dispatches to {@link MobilePositionsPanel} when the
 * viewport is mobile (or when `isMobile` is forced via prop). The mobile
 * variant exposes a different tab set (`Open Orders | Positions | Assets
 * | TWAP`) and owns a full-page History sheet portal.
 */
export declare const PositionsPanel: default_2.FC<PositionsPanelProps>;

export declare interface PositionsPanelProps {
    /** Controlled active tab. */
    tab: PositionsPanelTab;
    onTabChange: (tab: PositionsPanelTab) => void;
    positions: PositionRow[];
    openOrders: OpenOrderRow[];
    /** Past orders (filled / canceled / expired). */
    orderHistory?: OrderHistoryRow[];
    /** Fills the user has executed (settled trades). */
    tradeHistory?: TradeHistoryRow[];
    /** Account ledger entries — funding, realized PnL, deposits, etc. */
    transactionHistory?: TransactionHistoryRow[];
    /** Share-to-social callback for a trade row (optional). */
    onShareTrade?: (trade: TradeHistoryRow) => void;
    /**
     * Fires when the user clicks the share-arrow icon in a position row's
     * PNL cell. Consumer typically opens {@link SharePnlModal} with the
     * position snapshot. Hidden when undefined.
     */
    onSharePnl?: (position: PositionRow) => void;
    /**
     * Hook-like function called inside each position row to get the live
     * mark price for that symbol. MUST obey the rules of hooks (always
     * called at the top of the row component). Consumer typically passes
     * their `useMarkPrice` hook from the market-data layer. Return
     * `undefined` if the mark isn't available yet.
     */
    useMarkPriceForSymbol?: (symbol: string) => number | undefined;
    /**
     * Pure function (not a hook) that estimates the liquidation price
     * for a position. Consumer provides its math implementation —
     * frontend uses `estimateLiquidationPrice({ side, entryPrice,
     * leverage })` from its lib.
     */
    computeLiqPrice?: (args: {
        side: 'BUY' | 'SELL';
        entryPrice: number;
        leverage: number;
    }) => number | undefined;
    /** Close the full position. */
    onClosePosition: (position: PositionRow) => void;
    /** Open the TP/SL editor for this position (consumer manages the modal). */
    onEditTpSl: (position: PositionRow, markPrice: number) => void;
    /** Cancel an individual resting order. */
    onCancelOrder: (order: OpenOrderRow) => void;
    /**
     * Symbol whose Close button is currently in-flight — disables the
     * row's close button + shows a spinner. Passed separately from the
     * rows so the consumer can track it without remapping positions.
     */
    closingSymbol?: string | null;
    /**
     * `id` of the open order whose Cancel button is in-flight. The matching
     * row's button shows a spinner and is disabled until the consumer
     * clears this back to `null`. Same pattern as {@link closingSymbol}
     * but scoped per-row (not per-symbol), so cancels for two orders on
     * the same symbol stay independent.
     */
    cancellingOrderId?: OpenOrderRow['id'] | null;
    /** Translator. */
    t?: (key: string) => string;
    /**
     * Force the mobile layout. Defaults to `useMatchBreakpoints().isMobile`
     * — same auto-detection pattern as `OrderForm`.
     */
    isMobile?: boolean;
    /**
     * Optional positions count override. The mobile tab strip renders
     * `Positions (N)` and consumers may want to pass a server-derived
     * count rather than `positions.length`.
     */
    positionsCount?: number;
    /**
     * "Hide other symbols" filter — wired on both desktop (right side of
     * the tabs row) and mobile (filter strip below the tabs).
     */
    hideOtherSymbols?: boolean;
    onHideOtherSymbolsChange?: (next: boolean) => void;
    /**
     * Desktop-only: invoked when the user clicks "Close All" in the top
     * tabs row. Consumer is responsible for confirmation + the bulk close.
     * Hidden when the callback isn't provided.
     */
    onCloseAll?: () => void;
    /** Mobile filter row — instrument filter button label (default `All instruments`). */
    instrumentFilterLabel?: string;
    /** Mobile filter row — invoked when the instrument-filter button is clicked. */
    onInstrumentFilterClick?: () => void;
    /**
     * Mobile-only: open state of the full-page History sheet portal. The
     * sheet covers the viewport and renders the orderHistory / tradeHistory
     * / transactionHistory tabs.
     */
    historyOpen?: boolean;
    onHistoryToggle?: (open: boolean) => void;
    /** Mobile-only: active sub-tab inside the History sheet. */
    historyTab?: PositionsHistoryTab;
    onHistoryTabChange?: (tab: PositionsHistoryTab) => void;
}

export declare type PositionsPanelTab = 'positions' | 'orders' | 'history' | 'trades' | 'transactions'
/** Mobile-only — list of holdings, no desktop equivalent yet. */
| 'assets'
/** Mobile-only — TWAP orders, no desktop equivalent yet. */
| 'twap';

export declare interface RecentTradeRow {
    /** Stable React key — usually the trade id from the venue. */
    id: string;
    /** Pre-formatted price string. The widget renders as-is. */
    price: string;
    /** Pre-formatted size string. */
    size: string;
    /** Epoch milliseconds. The widget formats as HH:MM:SS. */
    time: number;
    /**
     * Direction of the maker side. `true` = maker is the seller, taker
     * lifted the ask → buy print → success/green. `false` (or undefined) =
     * maker is the buyer, taker hit the bid → sell print → failure/pink.
     * Mirrors Aster's stream payload (`m` field) for an easy 1:1 mapping.
     */
    isBuyerMaker?: boolean;
}

export declare const RecentTrades: default_2.FC<RecentTradesProps>;

export declare interface RecentTradesProps {
    /** Trades to render — already sorted newest-first by the consumer. */
    trades: RecentTradeRow[];
    /** Optional title above the column headers. Omit when embedded inside a tabbed container. */
    title?: string;
    /** Translatable column labels. Defaults to English literals. */
    labels?: {
        price?: string;
        size?: string;
        time?: string;
    };
    /**
     * Render with `display: none` instead of unmounting — preserves the
     * caller's WebSocket subscription when toggled inside a tabbed panel.
     */
    hidden?: boolean;
    /**
     * Render only the inner content (column header + body), no PerpsPanel
     * shell. Use when the consumer is already wrapping us in a panel /
     * tabbed container.
     */
    embedded?: boolean;
}

export { SimpleBetPanel }

export { SimpleBetPanelProps }

export { SimpleChartCard }

export { SimpleChartCardProps }

export { SimpleHistoryRow }

export { SimpleOpenOrderRow }

export { SimplePositionDirection }

export { SimplePositionLiqStatus }

export { SimplePositionRow }

export { SimplePositionsCard }

export { SimplePositionsCardProps }

export { SimplePositionsTab }

export { SimpleTickerCard }

export { SimpleTickerCardProps }

export declare type SizeUnit = 'BASE' | 'QUOTE';

declare type StopPriceSource = 'MARK' | 'LAST';

/**
 * Top-of-terminal row — pair-pill selector, last price, and live stats
 * strip (Mark / Index / Funding / 24h Change / 24h Volume). Stateless
 * apart from the markets-dropdown open state (pure view-state).
 *
 * The dropdown content is injected via `renderMarketsDropdown` so the
 * consumer's picker (hooked up to its own ticker query + navigation)
 * can drop in without the widget knowing about data sources. Portal
 * anchoring + outside-click / Escape dismissal stay here.
 */
export declare const SymbolHeader: default_2.FC<SymbolHeaderProps>;

export declare interface SymbolHeaderProps {
    /** Full venue symbol — used as React key + aria labels. */
    symbol: string;
    /**
     * Pre-formatted pair label for the pill, e.g. "BTC - USDT". Consumer
     * chooses the base/quote split (frontend preserves USDT / USDC / USD1
     * distinction rather than collapsing to "USD").
     */
    pairLabel: string;
    /**
     * Optional logo image URL. Widget falls back to a single-letter glyph
     * on missing / broken image.
     */
    logoUrl?: string;
    /** Current leverage — rendered as the small pill next to the price. */
    leverage: number;
    /** Last traded price (unformatted). */
    lastPrice?: string;
    markPrice?: string;
    indexPrice?: string;
    /** Signed fraction funding rate (e.g. "0.0001" = 0.01%). */
    fundingRate?: string;
    /** Epoch ms of the next funding payment. Widget renders HH:MM:SS to it. */
    nextFundingTime?: number;
    /** Signed 24h change percent (e.g. "1.04" or "-0.52"). */
    change24h?: string;
    /** Raw 24h quote volume. */
    volume24h?: string;
    favorited?: boolean;
    onToggleFavorite?: () => void;
    /**
     * Mobile variant only — controls the chart-icon toggle button shown
     * in the mobile symbol row. When `onChartToggle` is undefined the
     * button is not rendered (desktop has its own chart panel).
     */
    chartOpen?: boolean;
    onChartToggle?: () => void;
    /**
     * Render-prop for the markets picker that pops below the pair pill.
     * Called with a `close` callback the consumer's onSelect handler
     * can fire to dismiss the dropdown after the user picks a new symbol.
     * Omit to make the pair pill non-interactive (no dropdown).
     */
    renderMarketsDropdown?: (close: () => void) => default_2.ReactNode;
    /**
     * Controlled open state. Pass alongside `onMarketsOpenChange` to lift
     * the dropdown's open/close lifecycle out of the widget — useful when
     * the consumer needs a single source of truth (e.g. another markets
     * trigger lives elsewhere on the page and would otherwise pop a
     * second dropdown). When `marketsOpen` is omitted the widget falls
     * back to its own `useState` for backward compatibility.
     */
    marketsOpen?: boolean;
    /** Fired on every internal request to open / close the dropdown. */
    onMarketsOpenChange?: (open: boolean) => void;
    /** Translator. */
    t?: (key: string) => string;
}

export declare interface TpSlIntent {
    symbol: string;
    /** Exit-order side — opposite of the position's side. */
    closeSide: 'BUY' | 'SELL';
    /** Trigger price for the TP leg. Empty string → skip TP leg. */
    tpPrice: string;
    /** Trigger price for the SL leg. Empty string → skip SL leg. */
    slPrice: string;
    /** Position size (absolute value), for order qty. */
    qty: string;
    closePosition: boolean;
}

/**
 * TP/SL setup for an existing position.
 *
 * Price↔PnL sync is bidirectional but direction-aware:
 *   - LONG:  PnL = (exitPrice - entry) × qty    → TP price above entry
 *   - SHORT: PnL = (entry - exitPrice) × qty    → TP price below entry
 *
 * The widget tracks which input the user last typed into so it doesn't
 * fight the cursor — editing Price only propagates to PnL, and vice
 * versa.
 *
 * A direction sanity check surfaces an inline warning when the user
 * types a nonsensical value (e.g. TP below entry on a LONG). The server
 * would reject anyway, but surfacing it early is friendlier.
 */
export declare const TpSlModal: default_2.FC<TpSlModalProps>;

export declare interface TpSlModalProps {
    /** Controlled open state. */
    isOpen: boolean;
    symbol: string;
    positionSide: PositionSide;
    /** Absolute position size (base asset). */
    qty: number;
    entryPrice: number;
    /** Resolved mark price — displayed in the summary row. */
    markPrice: number;
    onConfirm: (intent: TpSlIntent) => Promise<void> | void;
    onClose: () => void;
    /** Translator. */
    t?: (key: string) => string;
}

export declare interface TradeHistoryRow {
    /** Stable React key — typically the tradeId. */
    id: string | number;
    /** Local date string, e.g. '2025-04-17'. */
    date: string;
    /** Local time string, e.g. '01:37:26'. */
    time: string;
    symbol: string;
    side: 'BUY' | 'SELL';
    /** Pre-formatted execution price. */
    price: string;
    /** Pre-formatted quantity, e.g. '30 USDT' or '0.012 BTC'. */
    quantity: string;
    /** Pre-formatted fee with unit. */
    fee: string;
    /** Pre-formatted realized P&L (signed), e.g. '+0.01 USDT'. */
    realizedProfit: string;
}

export declare interface TransactionHistoryRow {
    /** Stable React key — typically the txId. */
    id: string | number;
    date: string;
    time: string;
    /** Transaction type, e.g. 'Realized PNL', 'Funding', 'Deposit'. */
    type: string;
    /** Pre-formatted amount with unit, e.g. '30 USDT'. */
    amount: string;
    symbol: string;
}

export declare const UnderlineTab: default_2.FC<UnderlineTabProps>;

export declare interface UnderlineTabProps {
    children: default_2.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
    fullWidth?: boolean;
}

/**
 * Compose with `<UnderlineTab>` children — same API shape as PCS uikit's
 * ButtonMenu/TabMenu, so swapping is a one-line change if we ever want to
 * unify later.
 */
export declare const UnderlineTabs: default_2.FC<UnderlineTabsProps>;

export declare interface UnderlineTabsProps {
    activeIndex: number;
    onItemClick: (index: number) => void;
    children: default_2.ReactNode;
    /**
     * When true, each tab takes equal share (`flex: 1`) and centers its text —
     * matches the segmented bar look used for Order Book / Trades. The
     * underline border sits under each tab individually. Leave false for
     * tight groups like the Positions panel's tab row.
     */
    fullWidth?: boolean;
    /**
     * Suppress the bottom border on the tabs row. Useful when the parent
     * wraps the tabs in its own header strip that owns the divider — e.g.
     * Positions Panel's desktop header where right-side controls share the
     * same baseline.
     */
    noBorder?: boolean;
    className?: string;
}

export { WalletData }

export { WalletPanel }

export { WalletPanelLabels }

export { WalletPanelProps }

export { WithdrawAssetRow }

/**
 * Withdraw flow modal — multi-step (select asset → enter amount). The
 * consumer (pancake-frontend) wires the asset list from `/fapi/v3/account`
 * (per-asset `maxWithdrawAmount`), the destination address from the user's
 * EOA, the fee from the bapi withdraw-fee quote, and the submit handler
 * from the signed v3 withdraw call. This widget is presentation-only.
 */
export declare const WithdrawModal: default_2.FC<WithdrawModalProps>;

export { WithdrawModal12 }

export { WithdrawModal12Props }

export declare interface WithdrawModalProps {
    /** Controlled open state. */
    isOpen: boolean;
    /** Controlled step — consumer drives transitions. */
    step: WithdrawStep;
    /** Show a loading shimmer while the consumer is fetching account assets. */
    isLoadingAssets?: boolean;
    /** Withdrawable assets returned from /fapi/v3/account, mapped to display rows. */
    assets: WithdrawTokenRow[];
    /** Currently selected row id. */
    selectedAssetId?: string;
    /** Fired when the user picks an asset — consumer transitions to step="amount". */
    onSelectAsset: (id: string) => void;
    /** The selected row, used to render the amount input header. */
    selectedAsset?: WithdrawTokenRow;
    /**
     * Destination wallet address — caller pre-truncates (e.g. "0x1234…abcd").
     * Shown in the "Destination" line for user confirmation.
     */
    destinationAddress?: string;
    /** Display label for the destination chain — e.g. "BSC". */
    destinationChainName?: string;
    /**
     * Pre-formatted fee string with asset, e.g. "0.1234" — combined with
     * the selected asset symbol in the helper line. Pass "—" when unknown.
     */
    feeText?: string;
    /** Controlled amount input. */
    amount: string;
    onAmountChange: (value: string) => void;
    /** Fired when user clicks one of the percent chips (25/50/75/MAX). */
    onPercentClick?: (pct: number) => void;
    /** Step-back handler — consumer transitions step back to "select". */
    onBack: () => void;
    /** Called when the user clicks Sign & Withdraw. */
    onWithdraw: () => void;
    onClose: () => void;
    /** Disable + show "Withdrawing..." when the consumer's mutation is in flight. */
    isSubmitting?: boolean;
    /**
     * When false the submit button is disabled. Use to gate on wallet
     * connection / minimum amount / Aster auth ready.
     */
    canSubmit?: boolean;
    /**
     * Optional error block — consumer renders the classified
     * `PerpsErrorMessage` (or anything else) into this slot.
     */
    errorSlot?: default_2.ReactNode;
    /** Translator. */
    t?: (key: string, options?: Record<string, string | number | undefined>) => string;
    /** Optional custom token-icon renderer (consumer's TokenIcon). */
    renderTokenIcon?: (asset: WithdrawTokenRow, size?: number) => default_2.ReactNode;
}

export declare type WithdrawStep = 'select' | 'amount';

/** Compact descriptor for one withdrawable token row in the picker. */
export declare interface WithdrawTokenRow {
    /** Stable id, e.g. "USDT" — usually just the asset symbol. */
    id: string;
    /** Display symbol, e.g. "USDT". */
    symbol: string;
    /** Friendlier display name when different from `symbol` (e.g. "Tether USD"). */
    displayName?: string;
    /** Pre-formatted withdrawable amount (e.g. "1234.56"). */
    withdrawableText: string;
    /** Whether this asset has a non-zero withdrawable balance. */
    hasBalance: boolean;
    /** Optional logo URL — consumer's responsibility to resolve. */
    logoUrl?: string;
}

export { }
