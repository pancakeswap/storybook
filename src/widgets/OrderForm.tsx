import React, { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { styled } from 'styled-components'
import { Box, Flex } from '../primitives/Box'
import { Button, IconButton } from '../primitives/Button'
import { Checkbox } from '../primitives/Checkbox'
import { Input } from '../primitives/Input'
import Slider from '../primitives/Slider/Slider'
import { Text } from '../primitives/Text'
import { AddIcon, ChevronDownIcon, InfoIcon } from '../primitives/Icons'
import { useMatchBreakpoints } from '../contexts'
import { BunnySlider } from './BunnySlider'
import { PerpsPanel } from './primitives'
import { ensureNegative, ensurePositive, useSeparatedNumberInput } from './separatedNumberInput'

export type OrderSide = 'BUY' | 'SELL'
export type OrderTypeKey = 'market' | 'limit' | 'stop-limit' | 'stop-market'
export type SizeUnit = 'BASE' | 'QUOTE'
export type MarginMode = 'CROSS' | 'ISOLATED'
export type StopPriceSource = 'MARK' | 'LAST'

/**
 * The full form-draft state. Mirrors pancake-frontend's
 * `orderFormDraftAtom` shape — `timeInForce` is included so consumers
 * who persist the draft can round-trip without losing it, even though
 * this widget doesn't expose a UI to change it (Aster default GTC).
 */
export interface OrderFormDraft {
  side: OrderSide
  leverage: number
  marginMode: MarginMode
  sizeUnit: SizeUnit
  quantity: string
  price: string
  reduceOnly: boolean
  tpSlEnabled: boolean
  takeProfitPrice: string
  /** Estimated PnL in USDT at the TP trigger price. */
  takeProfitPnl?: string
  /** Trigger source for the TP leg — `LAST` (last trade) or `MARK`. */
  takeProfitSource?: StopPriceSource
  stopLossPrice: string
  /** Estimated PnL in USDT at the SL trigger price. */
  stopLossPnl?: string
  /** Trigger source for the SL leg — `LAST` (last trade) or `MARK`. */
  stopLossSource?: StopPriceSource
  timeInForce: 'GTC' | 'IOC' | 'FOK' | 'GTX'
  /** Trigger price used by Stop Limit + Stop Market orders. */
  stopPrice: string
  /**
   * Which oracle the trigger watches. `LAST` → Aster's `CONTRACT_PRICE`
   * (last trade), `MARK` → `MARK_PRICE` (mark/index). Default `LAST`.
   */
  stopPriceSource: StopPriceSource
}

export interface OrderFormProps {
  // ── Symbol display ────────────────────────────────────────
  symbol: string
  baseAsset: string
  quoteAsset: string

  // ── Form state (controlled by consumer) ───────────────────
  draft: OrderFormDraft
  onDraftChange: (next: OrderFormDraft) => void
  typeKey: OrderTypeKey
  onTypeKeyChange: (next: OrderTypeKey) => void

  // ── Computed display values ───────────────────────────────
  /** Pre-formatted available balance text (e.g. "1234.56" or "--"). */
  availableBalanceText: string
  /** Pre-formatted preview lines for the summary footer. */
  preview: { cost: string; liq: string }
  /** Maker/taker fee bps for the summary footer (e.g. "0.02% / 0.05%"). */
  feeText: string
  /** Slider position 0-100 (consumer computes from quantity ÷ maxSize). */
  sizePercent: number
  onSizePercentChange: (pct: number) => void
  /** Submit button label (consumer computes — "Connect Wallet" / "Buy / Long" / etc.). */
  cta: string
  /** Submit button enabled? */
  canSubmit: boolean
  /** Submit in flight (button shows isLoading). */
  isSubmitting?: boolean
  /** Margin-mode toggle in flight (disables the margin button). */
  marginSubmitting?: boolean
  /** auth.ready — when false the submit click routes via consumer to deposit/enable-trading. */
  authReady?: boolean
  /** Wallet address present? When false the submit button is disabled in the un-ready branch. */
  hasAddress?: boolean

  // ── Optional inline error / validation messages ───────────
  /** Consumer renders its classified error here (e.g. PerpsErrorMessage). */
  errorSlot?: React.ReactNode

  // ── TP/SL sync inputs (consumer supplies; widget does the math) ─
  /**
   * Current mark price for the symbol. Used as the entry-price fallback
   * for TP/SL PnL calculations when no limit price is set. Optional —
   * if omitted, TP/SL inputs still accept manual values but the
   * trigger ↔ PnL bidirectional sync is disabled.
   */
  markPrice?: number
  /**
   * Decimal places used to format computed trigger prices (defaults to
   * 2). Pass `meta.pricePrecision` for tick-aligned output.
   */
  priceDecimals?: number

  // ── Actions ───────────────────────────────────────────────
  /**
   * Click submit — consumer routes via canSubmit (place order) or shows
   * the deposit/auth modals. Mobile renders two CTAs (Buy / Sell) that
   * pass `sideOverride` so the consumer doesn't have to wait for the
   * `draft.side` state update to flush before placing the order.
   */
  onSubmit: (opts?: { sideOverride?: OrderSide }) => void
  /** Open the leverage adjuster modal. */
  onLeverageClick: () => void
  /** Toggle margin mode (consumer fires the signed setMarginType call). */
  onMarginModeToggle: () => void
  /** Open the deposit modal (Avbl row + connector for not-yet-deposited users). */
  onDepositClick: () => void

  /**
   * Optional extra controls rendered on the right of the Cross/Isolated +
   * Leverage pills row. Used by consumers to drop in additional
   * account-level mode toggles (e.g. AssetModeButton) without coupling
   * the OrderForm widget to those concepts.
   */
  extraControls?: React.ReactNode

  /** Translator. */
  t?: (key: string, options?: Record<string, string | number | undefined>) => string
}

// ── Styled bits — copied verbatim from pancake-frontend so the
//    visual stays in lock-step with the source-of-truth file. ──

const Card = styled(PerpsPanel)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`

const TypeTabs = styled(Flex)`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const TypeTab = styled.button<{ $active: boolean }>`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  margin-bottom: -1px;
  padding: 12px 0;
  margin-right: 16px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $active, theme }) => ($active ? theme.colors.secondary : theme.colors.textSubtle)};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.12s, border-color 0.12s;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const SideToggle = styled(Flex)`
  position: relative;
  display: flex;
  align-items: stretch;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.input};
  padding: 0;
  gap: 0;
  overflow: hidden;
`

/**
 * Sliding colored indicator that animates between Buy (left) and Sell
 * (right). cubic-bezier(0.34, 1.56, 0.64, 1) is the standard "back ease
 * out" curve — overshoots its target by ~5% then settles, giving the
 * bouncy snap. Background color transitions on a separate (gentler)
 * timing so the slide and the recolor don't cross-blend muddily.
 */
const SideIndicator = styled.span<{ $side: OrderSide }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  border-radius: 12px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.10);
  background: ${({ $side }) => ($side === 'BUY' ? '#31D0AA' : '#ED4B9E')};
  transform: translateX(${({ $side }) => ($side === 'BUY' ? '0%' : '100%')});
  transition:
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.25s ease;
  pointer-events: none;
  z-index: 0;
`

/* Active-press effect for Buy/Sell — drop the SideIndicator's bottom
   stroke while either toggle button is pressed so it reads as a tap. */
const SideToggleWrap = styled(SideToggle)`
  &:has(button:active) ${SideIndicator} {
    border-bottom-width: 0;
    bottom: -2px;
  }
`

const SideButton = styled.button<{ $active: boolean; $side: OrderSide }>`
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: ${({ $active, theme }) => ($active ? '#FFF' : theme.colors.textSubtle)};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  line-height: 150%;
  cursor: pointer;
  transition: color 0.25s ease;

  html.dark & {
    color: ${({ $active, theme }) => ($active ? '#000' : theme.colors.textSubtle)};
  }
`

const ModeButton = styled.button`
  display: flex;
  flex: 1 0 0;
  padding: 3px 4px 5px 4px;
  justify-content: center;
  align-items: center;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.10);
  border-radius: 12px;
  background: #EFF4F5;
  color: #02919D;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  transition: filter 0.12s;
  &:hover {
    filter: brightness(0.97);
  }
  &:active:not(:disabled) {
    border-bottom-width: 0;
    padding-bottom: 7px;
  }

  html.dark & {
    background: #353547;
  }
`

const ModeButtonLabel = styled.span`
  display: flex;
  padding: 0 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const AvblRow = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`

const AvblLabel = styled(Text).attrs({ fontSize: '14px', color: 'textSubtle' })``

const AvblValue = styled(Flex)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`

const SizeField = styled.div`
  position: relative;
  display: flex;
  height: 48px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid #D7CAEC;
  background: #EEEAF4;
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
  gap: 8px;
  transition: box-shadow 0.12s;
  &:focus-within {
    box-shadow:
      0 0 0 1px #7645D9,
      0 0 0 4px rgba(118, 69, 217, 0.20);
  }

  html.dark & {
    border-color: #55496E;
    background: #372F47;
    box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.16) inset;
    &:focus-within {
      box-shadow:
        0 0 0 1px #7645D9,
        0 0 0 4px rgba(118, 69, 217, 0.20);
    }
  }
`

const SizeLabel = styled.span`
  pointer-events: none;
  flex-shrink: 0;
  color: #7A6EAA;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`

const SizeInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: #7A6EAA;
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: #7A6EAA;
  }
`

const UnitPicker = styled(Button).attrs({ variant: 'text', scale: 'xs' })`
  padding: 0;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  gap: 4px;
  height: auto;
`

const DashedLabelWrap = styled.span`
  position: relative;
  display: inline-flex;
`

const DashedLabel = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px dashed #5B4776;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  cursor: help;
`

/**
 * Reduce-Only tooltip — light surface (white bg, dark text) in light
 * mode, inverted to dark surface (#08060B bg, light text) in dark mode.
 * Shadow strengthens from light to dark to keep readable elevation
 * against the darker page bg.
 */
const ReduceOnlyTooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 200px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 8px;
  border-radius: 16px;
  background: #08060B;
  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.16),
    0 4px 8px 0 rgba(0, 0, 0, 0.32);
  pointer-events: none;
  z-index: 100;
  white-space: normal;
  text-align: center;

  /* Down-pointing notch — bottom edge of the bubble. Inherits the
     bubble's bg via currentColor so the color flip cascades. */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid currentColor;
    color: #08060B;
  }

  html.dark & {
    background: #FFF;
    color: #000;
    box-shadow:
      0 1px 2px 0 rgba(0, 0, 0, 0.08),
      0 4px 8px 0 rgba(0, 0, 0, 0.16);
    &::after {
      color: #FFF;
    }
  }
`

const UnitPickerChevron = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden style={{ flexShrink: 0, aspectRatio: '1 / 1' }}>
    <path
      d="M2.72261 3.10042C2.52319 3.10042 2.3779 3.18542 2.28674 3.35542C2.19558 3.52542 2.20318 3.69303 2.30956 3.85825L5.59261 8.78348C5.69232 8.92783 5.82812 9 6.00001 9C6.17189 9 6.30769 8.92783 6.40741 8.78348L9.69046 3.85825C9.79683 3.69303 9.80444 3.52542 9.71328 3.35542C9.62212 3.18542 9.47683 3.10042 9.27741 3.10042H2.72261Z"
      fill="#B8ADD2"
    />
  </svg>
)

const PriceInputRow = styled.div`
  position: relative;
  display: flex;
  height: 48px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid #D7CAEC;
  background: #EEEAF4;
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
  gap: 8px;
  transition: box-shadow 0.12s;
  &:focus-within {
    box-shadow:
      0 0 0 1px #7645D9,
      0 0 0 4px rgba(118, 69, 217, 0.20);
  }

  html.dark & {
    border-color: #55496E;
    background: #372F47;
    box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.16) inset;
    &:focus-within {
      box-shadow:
        0 0 0 1px #7645D9,
        0 0 0 4px rgba(118, 69, 217, 0.20);
    }
  }
`

const PriceInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: #7A6EAA;
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: #7A6EAA;
  }
`

const StopSourceSelect = styled.button`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  &:hover {
    opacity: 0.8;
  }
`

/**
 * Floating panel anchored to the "Stop ▾" tab. Mirrors the visual of
 * `DropdownMenu`'s portal panel but inlined here so the trigger can also
 * act as the active-state tab — keeps the underline / colored-border
 * cue consistent with the other tabs.
 */
const StopPanel = styled.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 160px;
  background: ${({ theme }) => theme.colors.input};
  border-top: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-right: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.inputSecondary};
  border-left: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 12px;
  box-shadow:
    0 0 0 1px ${({ theme }) => theme.colors.secondary},
    0 0 0 4px rgba(118, 69, 217, 0.2);
  overflow: hidden;
`

const StopPanelItem = styled.button<{ $active: boolean }>`
  background: ${({ $active, theme }) => ($active ? theme.colors.tertiary : 'transparent')};
  border: 0;
  padding: 10px 14px;
  text-align: left;
  font-family: Kanit, sans-serif;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`

const TifSelect = styled.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`

const InputTight = styled(Input)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`

// Wrap the separated-number hook in a tiny component so the hook itself
// is always at the top of a child render — the parent (`OrderForm`) only
// mounts these when `draft.tpSlEnabled` is true, but the hook lives
// inside the child's render so React's per-component hook count stays
// constant. Inlining the hook directly in conditional JSX trips
// React error #310 ("Rendered more hooks than during the previous
// render"). PAN-11810.
const TpSlNumberInput: React.FC<{
  rawValue: string
  onRawChange: (raw: string) => void
}> = ({ rawValue, onRawChange }) => {
  const bindings = useSeparatedNumberInput(rawValue, onRawChange)
  return <InputTight {...bindings} placeholder="0.00" inputMode="decimal" />
}

const LeverageRow = styled.div`
  padding: 4px 0;
`

const TpSlInputs = styled(Flex)`
  gap: 8px;
`

/* ── Last / Mark source toggle (used for each TP/SL leg) ──── */
const SourceToggleWrap = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({ theme }) => theme.colors.input};
`
const SourceToggleBtn = styled.button<{ $active: boolean }>`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({ $active, theme }) => ($active ? theme.colors.card : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textSubtle)};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
`
const TpSlSourceToggle: React.FC<{
  value: StopPriceSource
  onChange: (v: StopPriceSource) => void
}> = ({ value, onChange }) => (
  <SourceToggleWrap role="tablist" aria-label="Trigger source">
    <SourceToggleBtn
      type="button"
      role="tab"
      aria-selected={value === 'LAST'}
      $active={value === 'LAST'}
      onClick={() => onChange('LAST')}
    >
      Last
    </SourceToggleBtn>
    <SourceToggleBtn
      type="button"
      role="tab"
      aria-selected={value === 'MARK'}
      $active={value === 'MARK'}
      onClick={() => onChange('MARK')}
    >
      Mark
    </SourceToggleBtn>
  </SourceToggleWrap>
)

const SubmitButton = styled(Button)<{ $side: OrderSide }>`
  background: ${({ $side, theme }) => ($side === 'BUY' ? theme.colors.success : theme.colors.failure)};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  height: 48px;
  &:hover:not(:disabled) {
    filter: brightness(1.07);
  }
`

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const SK = styled(Text).attrs({ fontSize: '14px', color: 'textSubtle' })`
  display: inline-flex;
  width: fit-content;
  justify-self: start;
  border-bottom: 1px dashed #5B4776;
  cursor: help;
`
const SV = styled(Text).attrs({ fontSize: '14px' })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`

const defaultT = (
  key: string,
  options?: Record<string, string | number | undefined>,
): string => {
  if (!options) return key
  return Object.entries(options).reduce((acc, [k, v]) => acc.split(`%${k}%`).join(String(v)), key)
}

// ── Mobile-specific styled bits ─────────────────────────────
//
// Mobile layout follows the prototype in `src/pages/MobilePerpsPage.tsx`
// (`OrderPanelCol`) but rebuilt with styled-components so the widget
// stays self-contained. Visual targets in `MobilePerpsPage.css#mp-op-*`.

const MBody = styled(Flex)`
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`

const MPillRow = styled(Flex)`
  gap: 6px;
`

const MPill = styled.button`
  flex: 1;
  background: ${({ theme }) => theme.colors.input};
  border: 0;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  height: 38px;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const MTypeSelect = styled.button`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  background: ${({ theme }) => theme.colors.input};
  border: 0;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
`

const MTypeSelectLabel = styled.span`
  text-align: center;
`

const MInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  background: ${({ theme }) => theme.colors.input};
  border: 0;
  border-radius: 10px;
`

const MInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: left;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const MInputSuffix = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  background: transparent;
  border: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`

const MAvblRow = styled(Flex)`
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSubtle};
  & > strong {
    flex: 1;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    font-variant-numeric: tabular-nums;
  }
`

const MCheckRow = styled(Flex)`
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
`

const MStats = styled.div<{ $tone: 'up' | 'down' }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSubtle};
  & .v {
    color: ${({ theme, $tone }) => ($tone === 'up' ? theme.colors.success : theme.colors.failure)};
    font-variant-numeric: tabular-nums;
  }
`

const MStatRow = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`

const MCta = styled.button<{ $side: OrderSide }>`
  width: 100%;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background: ${({ $side, theme }) => ($side === 'BUY' ? theme.colors.success : theme.colors.failure)};
  color: ${({ theme }) => theme.colors.invertedContrast};
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.12s;
  &:hover:not(:disabled) {
    filter: brightness(1.07);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const MTypeMenu = styled.div`
  position: fixed;
  z-index: 200;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 8px;
  box-shadow: 0 12px 32px -16px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`

const MTypeMenuItem = styled.button<{ $active: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: 0;
  background: ${({ $active, theme }) => ($active ? theme.colors.input : 'transparent')};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.input};
  }
`

const MOBILE_TYPES: ReadonlyArray<{ key: OrderTypeKey; label: string }> = [
  { key: 'market', label: 'Market' },
  { key: 'limit', label: 'Limit' },
  { key: 'stop-limit', label: 'Stop Limit' },
  { key: 'stop-market', label: 'Stop Market' },
]

/**
 * Mobile-only render path. Mounted from `OrderForm` when
 * `useMatchBreakpoints().isMobile` is true. Internal hooks (type-menu
 * popover) live here so the desktop branch never spends them.
 */
const MobileOrderForm: React.FC<OrderFormProps> = ({
  baseAsset,
  quoteAsset,
  draft,
  onDraftChange,
  typeKey,
  onTypeKeyChange,
  availableBalanceText,
  preview,
  feeText,
  sizePercent,
  onSizePercentChange,
  cta: _cta,
  canSubmit,
  isSubmitting = false,
  marginSubmitting = false,
  authReady: _authReady = true,
  hasAddress: _hasAddress = true,
  errorSlot,
  onSubmit,
  onLeverageClick,
  onMarginModeToggle,
  onDepositClick,
  extraControls,
  t = defaultT,
}) => {
  const sizeUnitLabel = draft.sizeUnit === 'QUOTE' ? quoteAsset : baseAsset
  const isStopOrder = typeKey === 'stop-limit' || typeKey === 'stop-market'
  const needsLimitPrice = typeKey === 'limit' || typeKey === 'stop-limit'
  const needsStopPrice = isStopOrder

  const toggleSizeUnit = () =>
    onDraftChange({ ...draft, sizeUnit: draft.sizeUnit === 'BASE' ? 'QUOTE' : 'BASE', quantity: '' })

  const typeBtnRef = useRef<HTMLButtonElement>(null)
  const typeMenuRef = useRef<HTMLDivElement>(null)
  const [typeMenuOpen, setTypeMenuOpen] = useState(false)
  const [typeMenuPos, setTypeMenuPos] = useState<{ top: number; left: number; width: number } | null>(null)

  useEffect(() => {
    if (!typeMenuOpen || !typeBtnRef.current) return
    const r = typeBtnRef.current.getBoundingClientRect()
    setTypeMenuPos({ top: r.bottom + 4, left: r.left, width: r.width })
  }, [typeMenuOpen])

  useEffect(() => {
    if (!typeMenuOpen) return
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        typeBtnRef.current &&
        !typeBtnRef.current.contains(target) &&
        typeMenuRef.current &&
        !typeMenuRef.current.contains(target)
      ) {
        setTypeMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [typeMenuOpen])

  const currentTypeLabel =
    MOBILE_TYPES.find((x) => x.key === typeKey)?.label ?? 'Market'

  // The desktop summary computes `Cost / Liq / Fees`. Mobile shows
  // `Est. liq. price / Margin / Max` per the prototype. We don't have
  // a `max` value in the props yet — use the cost preview as a stand-in
  // and leave a TODO so the consumer can wire a real `maxSizeText`
  // later without another widget API churn.
  const liqText = preview.liq
  const marginText = preview.cost
  const maxText = '—' // TODO: thread max-size from consumer when available

  return (
    <MBody>
      <MPillRow>
        <MPill disabled={marginSubmitting} onClick={onMarginModeToggle}>
          {draft.marginMode === 'CROSS' ? t('Cross') : t('Isolated')}
        </MPill>
        <MPill onClick={onLeverageClick}>{`${draft.leverage}x`}</MPill>
        {extraControls}
      </MPillRow>

      <MTypeSelect
        ref={typeBtnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={typeMenuOpen}
        onClick={() => setTypeMenuOpen((v) => !v)}
      >
        <InfoIcon width="14px" color="textSubtle" />
        <MTypeSelectLabel>{t(currentTypeLabel)}</MTypeSelectLabel>
        <ChevronDownIcon width="14px" color="textSubtle" />
      </MTypeSelect>

      {typeMenuOpen &&
        typeMenuPos &&
        typeof document !== 'undefined' &&
        createPortal(
          <MTypeMenu
            ref={typeMenuRef}
            role="listbox"
            style={{ top: typeMenuPos.top, left: typeMenuPos.left, width: typeMenuPos.width }}
          >
            {MOBILE_TYPES.map((opt) => (
              <MTypeMenuItem
                key={opt.key}
                role="option"
                aria-selected={opt.key === typeKey}
                $active={opt.key === typeKey}
                onClick={() => {
                  onTypeKeyChange(opt.key)
                  setTypeMenuOpen(false)
                }}
              >
                {t(opt.label)}
              </MTypeMenuItem>
            ))}
          </MTypeMenu>,
          document.body,
        )}

      {needsStopPrice && (
        <MInputRow>
          <Text fontSize="13px" color="textSubtle">
            {t('Stop')}
          </Text>
          <MInput
            value={draft.stopPrice}
            onChange={(e) => onDraftChange({ ...draft, stopPrice: e.target.value })}
            placeholder="0"
            inputMode="decimal"
            aria-label={t('Stop price')}
            style={{ textAlign: 'right' }}
          />
          <MInputSuffix
            type="button"
            onClick={() =>
              onDraftChange({
                ...draft,
                stopPriceSource: draft.stopPriceSource === 'MARK' ? 'LAST' : 'MARK',
              })
            }
          >
            {draft.stopPriceSource === 'MARK' ? t('Mark') : t('Last')}
            <ChevronDownIcon width="12px" />
          </MInputSuffix>
        </MInputRow>
      )}

      {needsLimitPrice && (
        <MInputRow>
          <Text fontSize="13px" color="textSubtle">
            {t('Price')}
          </Text>
          <MInput
            value={draft.price}
            onChange={(e) => onDraftChange({ ...draft, price: e.target.value })}
            placeholder="0"
            inputMode="decimal"
            aria-label={t('Limit price')}
            style={{ textAlign: 'right' }}
          />
          <Text fontSize="13px" color="textSubtle">
            {quoteAsset}
          </Text>
        </MInputRow>
      )}

      <MInputRow>
        <MInput
          value={draft.quantity}
          onChange={(e) => onDraftChange({ ...draft, quantity: e.target.value })}
          placeholder={t('Size')}
          inputMode="decimal"
        />
        <MInputSuffix type="button" onClick={toggleSizeUnit}>
          {sizeUnitLabel}
          <ChevronDownIcon width="12px" />
        </MInputSuffix>
      </MInputRow>

      <Box>
        <BunnySlider
          min={0}
          max={100}
          step={1}
          value={sizePercent}
          onValueChanged={onSizePercentChange}
        />
      </Box>

      <MAvblRow>
        <span>{t('Avbl')}</span>
        <strong>{`${availableBalanceText} ${quoteAsset}`}</strong>
        <IconButton
          variant="text"
          scale="xs"
          onClick={onDepositClick}
          aria-label={t('Deposit')}
          style={{ width: 18, height: 18, minWidth: 18, borderRadius: 999 }}
        >
          <AddIcon color="primary" width="10px" />
        </IconButton>
      </MAvblRow>

      <MCheckRow>
        <Checkbox
          scale="sm"
          checked={draft.tpSlEnabled}
          onChange={(e) => onDraftChange({ ...draft, tpSlEnabled: e.target.checked })}
        />
        <span>{t('TP/SL')}</span>
      </MCheckRow>

      <MCheckRow>
        <Checkbox
          scale="sm"
          checked={draft.reduceOnly}
          onChange={(e) => onDraftChange({ ...draft, reduceOnly: e.target.checked })}
        />
        <span>{t('Reduce-Only')}</span>
      </MCheckRow>

      {errorSlot}

      <MStats $tone="up">
        <MStatRow>
          <span>{t('Est. liq. price')}</span>
          <span className="v">{liqText}</span>
        </MStatRow>
        <MStatRow>
          <span>{t('Margin')}</span>
          <span className="v">{marginText}</span>
        </MStatRow>
        <MStatRow>
          <span>{t('Max')}</span>
          <span className="v">{maxText}</span>
        </MStatRow>
      </MStats>

      <MCta
        type="button"
        $side="BUY"
        disabled={!canSubmit || isSubmitting}
        onClick={() => onSubmit({ sideOverride: 'BUY' })}
      >
        {t('Buy/Long')}
      </MCta>

      <MStats $tone="down">
        <MStatRow>
          <span>{t('Est. liq. price')}</span>
          <span className="v">{liqText}</span>
        </MStatRow>
        <MStatRow>
          <span>{t('Margin')}</span>
          <span className="v">{marginText}</span>
        </MStatRow>
        <MStatRow>
          <span>{t('Max')}</span>
          <span className="v">{maxText}</span>
        </MStatRow>
      </MStats>

      <MCta
        type="button"
        $side="SELL"
        disabled={!canSubmit || isSubmitting}
        onClick={() => onSubmit({ sideOverride: 'SELL' })}
      >
        {t('Sell/Short')}
      </MCta>

      <Text fontSize="11px" color="textSubtle" textAlign="right">
        {t('Fees')}: {feeText}
      </Text>
    </MBody>
  )
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
export const OrderForm: React.FC<OrderFormProps> = (props) => {
  // Auto-responsive: switch to mobile layout when the viewport drops
  // into the mobile breakpoint. Same pattern as Modal / MotionModal —
  // consumer doesn't pass any flag.
  const { isMobile } = useMatchBreakpoints()
  if (isMobile) return <MobileOrderForm {...props} />

  const {
    baseAsset,
    quoteAsset,
    draft,
    onDraftChange,
    typeKey,
    onTypeKeyChange,
    availableBalanceText,
    preview,
    feeText,
    sizePercent,
    onSizePercentChange,
    cta,
    canSubmit,
    isSubmitting = false,
    marginSubmitting = false,
    authReady = true,
    hasAddress = true,
    errorSlot,
    onSubmit,
    onLeverageClick,
    onMarginModeToggle,
    onDepositClick,
    extraControls,
    markPrice,
    priceDecimals = 2,
    t = defaultT,
  } = props
  const sizeUnitLabel = draft.sizeUnit === 'QUOTE' ? quoteAsset : baseAsset

  const setSide = (side: OrderSide) => onDraftChange({ ...draft, side })

  const toggleSizeUnit = () =>
    onDraftChange({ ...draft, sizeUnit: draft.sizeUnit === 'BASE' ? 'QUOTE' : 'BASE', quantity: '' })

  const toggleTpSl = () => onDraftChange({ ...draft, tpSlEnabled: !draft.tpSlEnabled })

  // ── TP/SL trigger ↔ PnL bidirectional sync ──────────────────────
  // Entry price = limit price if set, else markPrice. Base qty derived
  // from draft.quantity, accounting for sizeUnit (QUOTE → divide by
  // entry to convert to base). Both legs use the same formula:
  //   PnL  = (trigger − entry) × baseQty × (side === 'BUY' ? 1 : -1)
  //   trigger = entry + (PnL × dir) / baseQty
  // The sign of (trigger − entry) gives gain (TP) vs loss (SL), so SL
  // PnL naturally comes out negative and the math is identical for
  // both legs.
  const entryPriceNum = Number(draft.price) || (typeof markPrice === 'number' ? markPrice : 0)
  const baseQtyNum = (() => {
    const raw = Number(draft.quantity)
    if (!Number.isFinite(raw) || raw <= 0) return 0
    if (draft.sizeUnit === 'BASE') return raw
    return entryPriceNum > 0 ? raw / entryPriceNum : 0
  })()
  const sideDir = draft.side === 'BUY' ? 1 : -1
  const tpSlSyncReady = entryPriceNum > 0 && baseQtyNum > 0

  const formatPnl = (n: number) => (Number.isFinite(n) ? n.toFixed(2) : '')
  const formatTriggerPrice = (n: number) => (Number.isFinite(n) ? n.toFixed(priceDecimals) : '')
  // Strip thousands-separator commas before parsing — paste-from-clipboard,
  // OS autofill, and some mobile keyboards can insert them. `.` is always the
  // decimal separator (we follow the JS Number convention).
  const stripSeparators = (s: string) => s.replace(/,/g, '')
  const triggerToPnl = (triggerStr: string): string => {
    const trigger = Number(stripSeparators(triggerStr))
    if (!Number.isFinite(trigger) || !tpSlSyncReady) return ''
    return formatPnl((trigger - entryPriceNum) * baseQtyNum * sideDir)
  }
  const pnlToTrigger = (pnlStr: string): string => {
    const pnl = Number(stripSeparators(pnlStr))
    if (!Number.isFinite(pnl) || !tpSlSyncReady) return ''
    return formatTriggerPrice(entryPriceNum + (pnl * sideDir) / baseQtyNum)
  }
  const handleTpPriceChange = (raw: string) => {
    const val = stripSeparators(raw)
    if (val === '') return onDraftChange({ ...draft, takeProfitPrice: '', takeProfitPnl: '' })
    onDraftChange({ ...draft, takeProfitPrice: val, takeProfitPnl: triggerToPnl(val) })
  }
  const handleTpPnlChange = (raw: string) => {
    // TP gain is always positive — flip a leading '-' into the absolute value.
    const val = ensurePositive(stripSeparators(raw))
    if (val === '' || val === '-') return onDraftChange({ ...draft, takeProfitPnl: '', takeProfitPrice: '' })
    onDraftChange({ ...draft, takeProfitPnl: val, takeProfitPrice: pnlToTrigger(val) })
  }
  const handleSlPriceChange = (raw: string) => {
    const val = stripSeparators(raw)
    if (val === '') return onDraftChange({ ...draft, stopLossPrice: '', stopLossPnl: '' })
    onDraftChange({ ...draft, stopLossPrice: val, stopLossPnl: triggerToPnl(val) })
  }
  const handleSlPnlChange = (raw: string) => {
    // SL is always a loss — force a leading '-' so users see the sign even if
    // they typed a bare positive.
    const val = ensureNegative(stripSeparators(raw))
    if (val === '' || val === '-') return onDraftChange({ ...draft, stopLossPnl: '', stopLossPrice: '' })
    onDraftChange({ ...draft, stopLossPnl: val, stopLossPrice: pnlToTrigger(val) })
  }

  const isStopOrder = typeKey === 'stop-limit' || typeKey === 'stop-market'
  const needsLimitPrice = typeKey === 'limit' || typeKey === 'stop-limit'
  const needsStopPrice = isStopOrder

  // Stop-tab dropdown — anchored panel, same UX as primitives/DropdownMenu
  // but inlined so the trigger can be a TypeTab and own the active underline.
  const stopTabRef = useRef<HTMLButtonElement>(null)
  const stopPanelRef = useRef<HTMLDivElement>(null)
  const [stopMenuOpen, setStopMenuOpen] = useState(false)
  const [stopMenuPos, setStopMenuPos] = useState({ top: 0, left: 0 })
  const [reduceOnlyTipOpen, setReduceOnlyTipOpen] = useState(false)
  const [tpSlTipOpen, setTpSlTipOpen] = useState(false)
  const [summaryTip, setSummaryTip] = useState<'cost' | 'liq' | 'fees' | null>(null)

  useEffect(() => {
    if (!stopMenuOpen || !stopTabRef.current || !stopPanelRef.current) return
    const triggerRect = stopTabRef.current.getBoundingClientRect()
    const panelRect = stopPanelRef.current.getBoundingClientRect()
    const top = triggerRect.bottom + 4
    const maxLeft = window.innerWidth - panelRect.width - 8
    const left = Math.max(8, Math.min(triggerRect.left, maxLeft))
    setStopMenuPos({ top, left })
  }, [stopMenuOpen])

  useEffect(() => {
    if (!stopMenuOpen) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        stopTabRef.current &&
        !stopTabRef.current.contains(target) &&
        stopPanelRef.current &&
        !stopPanelRef.current.contains(target)
      ) {
        setStopMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [stopMenuOpen])

  const stopTabActive = isStopOrder
  const stopTabLabel =
    typeKey === 'stop-market' ? `${t('Stop Market')} ▾` : `${t('Stop Limit')} ▾`

  const handleStopTabClick = () => {
    // Always toggles the menu — selecting the visible variant via re-click
    // is harmless. Mirrors asterdex's behavior on the same control.
    setStopMenuOpen((open) => !open)
  }

  const pickStopVariant = (next: 'stop-limit' | 'stop-market') => {
    onTypeKeyChange(next)
    setStopMenuOpen(false)
  }

  return (
    <Card>
      <TypeTabs>
        {(['market', 'limit'] as const).map((k) => (
          <TypeTab key={k} $active={typeKey === k} onClick={() => onTypeKeyChange(k)}>
            {k === 'market' ? t('Market') : t('Limit')}
          </TypeTab>
        ))}
        <TypeTab
          ref={stopTabRef}
          $active={stopTabActive}
          onClick={handleStopTabClick}
          aria-haspopup="menu"
          aria-expanded={stopMenuOpen}
        >
          {stopTabLabel}
        </TypeTab>
        {stopMenuOpen &&
          typeof document !== 'undefined' &&
          createPortal(
            <StopPanel ref={stopPanelRef} style={{ top: stopMenuPos.top, left: stopMenuPos.left }} role="menu">
              <StopPanelItem
                $active={typeKey === 'stop-limit'}
                role="menuitem"
                onClick={() => pickStopVariant('stop-limit')}
              >
                {t('Stop Limit')}
              </StopPanelItem>
              <StopPanelItem
                $active={typeKey === 'stop-market'}
                role="menuitem"
                onClick={() => pickStopVariant('stop-market')}
              >
                {t('Stop Market')}
              </StopPanelItem>
            </StopPanel>,
            document.body,
          )}
      </TypeTabs>

      <SideToggleWrap>
        <SideIndicator $side={draft.side} aria-hidden />
        <SideButton $active={draft.side === 'BUY'} $side="BUY" onClick={() => setSide('BUY')}>
          {t('Buy / Long')}
        </SideButton>
        <SideButton $active={draft.side === 'SELL'} $side="SELL" onClick={() => setSide('SELL')}>
          {t('Sell / Short')}
        </SideButton>
      </SideToggleWrap>

      <Flex style={{ gap: 8 }}>
        <ModeButton disabled={marginSubmitting} onClick={onMarginModeToggle} title={t('Margin mode')}>
          <ModeButtonLabel>
            {draft.marginMode === 'CROSS' ? t('Cross') : t('Isolated')}
          </ModeButtonLabel>
        </ModeButton>
        <ModeButton onClick={onLeverageClick} title={t('Leverage')}>
          <ModeButtonLabel>{draft.leverage}x</ModeButtonLabel>
        </ModeButton>
        {extraControls}
      </Flex>

      <AvblRow>
        <AvblLabel>{t('Avbl')}</AvblLabel>
        <AvblValue>
          <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {availableBalanceText} {quoteAsset}
          </Text>
          <IconButton
            variant="text"
            scale="xs"
            onClick={onDepositClick}
            title={t('Deposit')}
            aria-label={t('Deposit')}
            style={{ width: 22, height: 22, minWidth: 22, borderRadius: 999 }}
          >
            <AddIcon color="primary" width="14px" />
          </IconButton>
        </AvblValue>
      </AvblRow>

      {needsStopPrice && (
        <PriceInputRow>
          <SizeLabel>{t('Stop')}</SizeLabel>
          <PriceInput
            value={draft.stopPrice}
            onChange={(e) => onDraftChange({ ...draft, stopPrice: e.target.value })}
            placeholder="0"
            inputMode="decimal"
            aria-label={t('Stop price')}
          />
          <StopSourceSelect
            type="button"
            onClick={() =>
              onDraftChange({
                ...draft,
                stopPriceSource: draft.stopPriceSource === 'MARK' ? 'LAST' : 'MARK',
              })
            }
            title={t('Trigger source')}
          >
            {draft.stopPriceSource === 'MARK' ? t('Mark') : t('Last')} ▾
          </StopSourceSelect>
        </PriceInputRow>
      )}

      {needsLimitPrice && (
        <PriceInputRow>
          <SizeLabel>{t('Price')}</SizeLabel>
          <PriceInput
            value={draft.price}
            onChange={(e) => onDraftChange({ ...draft, price: e.target.value })}
            placeholder="0"
            inputMode="decimal"
            aria-label={t('Limit price')}
          />
          <UnitPicker as="div" onClick={undefined} style={{ cursor: 'default' }}>
            {quoteAsset}
          </UnitPicker>
        </PriceInputRow>
      )}

      {typeKey === 'stop-limit' && (
        <PriceInputRow>
          <SizeLabel>{t('TIF')}</SizeLabel>
          <Flex flex={1} />
          <TifSelect
            value={draft.timeInForce === 'GTX' ? 'GTC' : draft.timeInForce}
            onChange={(e) =>
              onDraftChange({
                ...draft,
                timeInForce: e.target.value as 'GTC' | 'IOC' | 'FOK',
              })
            }
            aria-label={t('Time in force')}
          >
            <option value="GTC">GTC</option>
            <option value="IOC">IOC</option>
            <option value="FOK">FOK</option>
          </TifSelect>
        </PriceInputRow>
      )}

      <SizeField>
        <SizeLabel>{t('Size')}</SizeLabel>
        <SizeInput
          value={draft.quantity}
          onChange={(e) => onDraftChange({ ...draft, quantity: e.target.value })}
          placeholder="0"
          inputMode="decimal"
        />
        <UnitPicker onClick={toggleSizeUnit} title={t('Toggle unit')}>
          {sizeUnitLabel}
          <UnitPickerChevron />
        </UnitPicker>
      </SizeField>

      <LeverageRow>
        <Slider
          variant="dotted"
          min={0}
          max={100}
          value={sizePercent}
          onValueChanged={onSizePercentChange}
          name="perp-size-percent"
        />
      </LeverageRow>

      <Flex alignItems="center" style={{ gap: 8 }}>
        <Checkbox
          scale="sm"
          checked={draft.reduceOnly}
          onChange={(e) => onDraftChange({ ...draft, reduceOnly: e.target.checked })}
        />
        <DashedLabelWrap
          onMouseEnter={() => setReduceOnlyTipOpen(true)}
          onMouseLeave={() => setReduceOnlyTipOpen(false)}
        >
          <DashedLabel>{t('Reduce Only')}</DashedLabel>
          {reduceOnlyTipOpen && (
            <ReduceOnlyTooltip role="tooltip">
              {t('Reduce-Only order will only reduce your position, not increase it.')}
            </ReduceOnlyTooltip>
          )}
        </DashedLabelWrap>
      </Flex>

      <Flex alignItems="center" style={{ gap: 8 }}>
        <Checkbox scale="sm" checked={draft.tpSlEnabled} onChange={toggleTpSl} />
        <DashedLabelWrap
          onMouseEnter={() => setTpSlTipOpen(true)}
          onMouseLeave={() => setTpSlTipOpen(false)}
        >
          <DashedLabel>{t('Take Profit / Stop Loss')}</DashedLabel>
          {tpSlTipOpen && (
            <ReduceOnlyTooltip role="tooltip">
              {t(
                'Set Take Profit or Stop Loss before opening. It activates after entry. Choose Last or Mark price as the trigger.',
              )}
            </ReduceOnlyTooltip>
          )}
        </DashedLabelWrap>
      </Flex>

      {draft.tpSlEnabled && (
        <Flex flexDirection="column" style={{ gap: 12 }}>
          {/* ── Take Profit leg ─────────────────────────────────── */}
          <Box>
            <Flex alignItems="center" justifyContent="space-between" mb="6px">
              <Text fontSize="13px" bold color="success">
                {t('Take Profit')}
              </Text>
              <TpSlSourceToggle
                value={draft.takeProfitSource ?? 'LAST'}
                onChange={(src) => onDraftChange({ ...draft, takeProfitSource: src })}
              />
            </Flex>
            <TpSlInputs>
              <Box style={{ flex: 1 }}>
                <Text fontSize="12px" color="textSubtle" mb="4px">
                  {t('Trigger Price')}
                </Text>
                <TpSlNumberInput rawValue={draft.takeProfitPrice} onRawChange={handleTpPriceChange} />
              </Box>
              <Box style={{ flex: 1 }}>
                <Text fontSize="12px" color="textSubtle" mb="4px">
                  {t('PnL (USDT)')}
                </Text>
                <TpSlNumberInput rawValue={draft.takeProfitPnl ?? ''} onRawChange={handleTpPnlChange} />
              </Box>
            </TpSlInputs>
          </Box>

          {/* ── Stop Loss leg ───────────────────────────────────── */}
          <Box>
            <Flex alignItems="center" justifyContent="space-between" mb="6px">
              <Text fontSize="13px" bold color="failure">
                {t('Stop Loss')}
              </Text>
              <TpSlSourceToggle
                value={draft.stopLossSource ?? 'LAST'}
                onChange={(src) => onDraftChange({ ...draft, stopLossSource: src })}
              />
            </Flex>
            <TpSlInputs>
              <Box style={{ flex: 1 }}>
                <Text fontSize="12px" color="textSubtle" mb="4px">
                  {t('Trigger Price')}
                </Text>
                <TpSlNumberInput rawValue={draft.stopLossPrice} onRawChange={handleSlPriceChange} />
              </Box>
              <Box style={{ flex: 1 }}>
                <Text fontSize="12px" color="textSubtle" mb="4px">
                  {t('PnL (USDT)')}
                </Text>
                <TpSlNumberInput rawValue={draft.stopLossPnl ?? ''} onRawChange={handleSlPnlChange} />
              </Box>
            </TpSlInputs>
          </Box>
        </Flex>
      )}

      {errorSlot}

      {authReady ? (
        <SubmitButton
          onClick={() => onSubmit()}
          disabled={!canSubmit}
          isLoading={isSubmitting}
          scale="md"
          $side={draft.side}
        >
          {cta}
        </SubmitButton>
      ) : (
        <SubmitButton $side={draft.side} onClick={() => onSubmit()} scale="md" disabled={!hasAddress}>
          {cta}
        </SubmitButton>
      )}

      <SummaryGrid>
        <DashedLabelWrap
          onMouseEnter={() => setSummaryTip('cost')}
          onMouseLeave={() => setSummaryTip(null)}
        >
          <SK>{t('Cost')}</SK>
          {summaryTip === 'cost' && (
            <ReduceOnlyTooltip role="tooltip">
              {t('Total margin required to open this position.')}
            </ReduceOnlyTooltip>
          )}
        </DashedLabelWrap>
        <SV>{preview.cost}</SV>
        {!isStopOrder && (
          <>
            <DashedLabelWrap
              onMouseEnter={() => setSummaryTip('liq')}
              onMouseLeave={() => setSummaryTip(null)}
            >
              <SK>{t('Est. Liq. Price')}</SK>
              {summaryTip === 'liq' && (
                <ReduceOnlyTooltip role="tooltip">
                  {t('Total margin required to open this position.')}
                </ReduceOnlyTooltip>
              )}
            </DashedLabelWrap>
            <SV>{preview.liq}</SV>
          </>
        )}
        <DashedLabelWrap
          onMouseEnter={() => setSummaryTip('fees')}
          onMouseLeave={() => setSummaryTip(null)}
        >
          <SK>{t('Fees')}</SK>
          {summaryTip === 'fees' && (
            <ReduceOnlyTooltip role="tooltip">
              {t('Trading and funding fees applied to this position.')}
            </ReduceOnlyTooltip>
          )}
        </DashedLabelWrap>
        <SV>{feeText}</SV>
      </SummaryGrid>
    </Card>
  )
}
