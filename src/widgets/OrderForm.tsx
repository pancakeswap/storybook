import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '../primitives/Box'
import { Button, IconButton } from '../primitives/Button'
import { Checkbox } from '../primitives/Checkbox'
import { Input } from '../primitives/Input'
import Slider from '../primitives/Slider/Slider'
import { Text } from '../primitives/Text'
import { AddIcon } from '../primitives/Icons'
import { PerpsPanel } from './primitives'

export type OrderSide = 'BUY' | 'SELL'
export type OrderTypeKey = 'market' | 'limit'
export type SizeUnit = 'BASE' | 'QUOTE'
export type MarginMode = 'CROSS' | 'ISOLATED'

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
  stopLossPrice: string
  timeInForce: 'GTC' | 'IOC' | 'FOK' | 'GTX'
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

  // ── Actions ───────────────────────────────────────────────
  /** Click submit — consumer routes via canSubmit (place order) or shows the deposit/auth modals. */
  onSubmit: () => void
  /** Open the leverage adjuster modal. */
  onLeverageClick: () => void
  /** Toggle margin mode (consumer fires the signed setMarginType call). */
  onMarginModeToggle: () => void
  /** Open the deposit modal (Avbl row + connector for not-yet-deposited users). */
  onDepositClick: () => void

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
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`

const SideButton = styled.button<{ $active: boolean; $side: OrderSide }>`
  flex: 1;
  border: 0;
  background: ${({ $active, $side, theme }) =>
    $active ? ($side === 'BUY' ? theme.colors.success : theme.colors.failure) : 'transparent'};
  color: ${({ $active, theme }) => ($active ? '#fff' : theme.colors.textSubtle)};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  font-size: 16px;
  padding: 6px 8px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
`

const ModeButton = styled.button`
  flex: 1;
  background: ${({ theme }) => theme.colors.input};
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  padding: 4px 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.12s;
  &:hover {
    filter: brightness(1.08);
  }
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
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.16) inset;
  gap: 8px;
`

const SizeLabel = styled(Text).attrs({ fontSize: '14px', color: 'textSubtle' })`
  pointer-events: none;
  flex-shrink: 0;
`

const SizeInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const UnitPicker = styled(Button).attrs({ variant: 'text', scale: 'xs' })`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  gap: 2px;
  height: auto;
`

const PriceInputRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.16) inset;
  gap: 8px;
`

const PriceInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const InputTight = styled(Input)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`

const LeverageRow = styled.div`
  padding: 4px 0;
`

const TpSlInputs = styled(Flex)`
  gap: 8px;
`

const SubmitButton = styled(Button)<{ $side: OrderSide }>`
  background: ${({ $side, theme }) => ($side === 'BUY' ? theme.colors.success : theme.colors.failure)};
  color: #fff;
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

const SK = styled(Text).attrs({ fontSize: '14px', color: 'textSubtle' })``
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
export const OrderForm: React.FC<OrderFormProps> = ({
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
  t = defaultT,
}) => {
  const sizeUnitLabel = draft.sizeUnit === 'QUOTE' ? quoteAsset : baseAsset

  const setSide = (side: OrderSide) => onDraftChange({ ...draft, side })

  const toggleSizeUnit = () =>
    onDraftChange({ ...draft, sizeUnit: draft.sizeUnit === 'BASE' ? 'QUOTE' : 'BASE', quantity: '' })

  const toggleTpSl = () => onDraftChange({ ...draft, tpSlEnabled: !draft.tpSlEnabled })

  const needsLimitPrice = typeKey === 'limit'

  return (
    <Card>
      <TypeTabs>
        {(['market', 'limit'] as const).map((k) => (
          <TypeTab key={k} $active={typeKey === k} onClick={() => onTypeKeyChange(k)}>
            {k === 'market' ? t('Market') : t('Limit')}
          </TypeTab>
        ))}
      </TypeTabs>

      <SideToggle>
        <SideButton $active={draft.side === 'BUY'} $side="BUY" onClick={() => setSide('BUY')}>
          {t('Buy')}
        </SideButton>
        <SideButton $active={draft.side === 'SELL'} $side="SELL" onClick={() => setSide('SELL')}>
          {t('Sell')}
        </SideButton>
      </SideToggle>

      <Flex style={{ gap: 8 }}>
        <ModeButton disabled={marginSubmitting} onClick={onMarginModeToggle} title={t('Margin mode')}>
          {draft.marginMode === 'CROSS' ? t('Cross') : t('Isolated')}
        </ModeButton>
        <ModeButton onClick={onLeverageClick} title={t('Leverage')}>
          {draft.leverage}x
        </ModeButton>
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
            style={{ width: 18, height: 18, minWidth: 18, borderRadius: 999 }}
          >
            <AddIcon color="primary" width="10px" />
          </IconButton>
        </AvblValue>
      </AvblRow>

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

      <SizeField>
        <SizeLabel>{t('Size')}</SizeLabel>
        <SizeInput
          value={draft.quantity}
          onChange={(e) => onDraftChange({ ...draft, quantity: e.target.value })}
          placeholder="0"
          inputMode="decimal"
        />
        <UnitPicker onClick={toggleSizeUnit} title={t('Toggle unit')}>
          {sizeUnitLabel} ▾
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
        <Text fontSize="14px">{t('Reduce Only')}</Text>
      </Flex>

      <Flex alignItems="center" style={{ gap: 8 }}>
        <Checkbox scale="sm" checked={draft.tpSlEnabled} onChange={toggleTpSl} />
        <Text fontSize="14px">{t('Take Profit / Stop Loss')}</Text>
      </Flex>

      {draft.tpSlEnabled && (
        <TpSlInputs>
          <Box style={{ flex: 1 }}>
            <Text fontSize="14px" color="textSubtle" mb="4px">
              {t('Take Profit')}
            </Text>
            <InputTight
              value={draft.takeProfitPrice}
              onChange={(e) => onDraftChange({ ...draft, takeProfitPrice: e.target.value })}
              placeholder="0.00"
              inputMode="decimal"
            />
          </Box>
          <Box style={{ flex: 1 }}>
            <Text fontSize="14px" color="textSubtle" mb="4px">
              {t('Stop Loss')}
            </Text>
            <InputTight
              value={draft.stopLossPrice}
              onChange={(e) => onDraftChange({ ...draft, stopLossPrice: e.target.value })}
              placeholder="0.00"
              inputMode="decimal"
            />
          </Box>
        </TpSlInputs>
      )}

      {errorSlot}

      {authReady ? (
        <SubmitButton
          onClick={onSubmit}
          disabled={!canSubmit}
          isLoading={isSubmitting}
          scale="md"
          $side={draft.side}
        >
          {cta}
        </SubmitButton>
      ) : (
        <SubmitButton $side={draft.side} onClick={onSubmit} scale="md" disabled={!hasAddress}>
          {cta}
        </SubmitButton>
      )}

      <SummaryGrid>
        <SK>{t('Cost')}</SK>
        <SV>{preview.cost}</SV>
        <SK>{t('Est. Liq. Price')}</SK>
        <SV>{preview.liq}</SV>
        <SK>{t('Fees')}</SK>
        <SV>{feeText}</SV>
      </SummaryGrid>
    </Card>
  )
}
