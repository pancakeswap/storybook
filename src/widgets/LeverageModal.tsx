import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Slider } from '../primitives/Slider'
import { Text } from '../primitives/Text'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'

export interface LeverageModalProps {
  /** Controlled open state. */
  isOpen: boolean
  symbol: string
  /** Initial leverage shown when the modal opens. */
  currentLeverage: number
  /** Inclusive bounds — defaults [1, 100]. */
  minLeverage?: number
  maxLeverage?: number
  /**
   * Returns the maximum new notional (USDT) the user can open at the
   * given draft leverage — the "Remaining openable notional value" line.
   * Called with the current slider value as the user drags so the
   * preview stays in sync; return `undefined` while inputs (brackets,
   * positions, open orders, OI map) are still loading.
   *
   * Caller-owned formula. Aster's UI uses two clamps:
   *   `min(bracketCap − usedNotional, oiRemaining[ceil(leverage)])`
   * where `bracketCap` is the per-tier `notionalCap` for the chosen
   * leverage (binds at HIGH leverage), `usedNotional` is existing
   * position + unfilled open-order notional on the symbol, and
   * `oiRemaining` is a platform-wide open-interest budget per leverage
   * tier (binds at LOW leverage where bracket caps are huge). Wallet
   * balance is intentionally NOT factored in — this preview describes
   * venue risk-control headroom, not margin sufficiency. PAN-11910.
   */
  remainingOpenableAtLeverage: (leverage: number) => number | undefined
  /**
   * Called when the user clicks Confirm with their chosen leverage. The
   * consumer is responsible for the async write back to the venue, error
   * handling, and closing the modal (via `isOpen=false`) on success.
   */
  onConfirm: (leverage: number) => void
  onClose: () => void
  /** Disables the confirm button (e.g. while the consumer's mutation is in-flight). */
  isSubmitting?: boolean
  /**
   * Optional content slot rendered above the Confirm button. Use for
   * caller-classified error messages, info hints, or warnings.
   */
  errorSlot?: React.ReactNode
  /** Optional translator. Defaults to identity. */
  /**
   * Translator signature matches PancakeSwap's `@pancakeswap/localization`
   * `TranslateFunction` (data values are `string | number | undefined`) so
   * pancake-frontend can pass its `t` directly without a cast. Storybook
   * stories that don't need i18n can omit this prop — `defaultT` handles
   * `%placeholder%` substitution locally.
   */
  t?: (key: string, options?: Record<string, string | number | undefined>) => string
}

const Body = styled(Flex)`
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    min-width: 340px;
    max-width: 440px;
  }
`

const Stepper = styled(Flex)`
  gap: 10px;
  align-items: stretch;
`

const StepButton = styled(Button).attrs({ variant: 'tertiary', scale: 'md' })`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`

const ValueBox = styled(Flex)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`

const RemainingBox = styled(Flex)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;
`

/**
 * Mirror PancakeSwap localization's `%placeholder%` substitution shape so
 * the widget is useful out-of-the-box in storybook (without a real `t`)
 * AND drops in cleanly when pancake-frontend passes its own `t` from
 * `@pancakeswap/localization`. Identity-with-no-substitution would render
 * the literal `%symbol%` in titles — confusing in the UI.
 */
const defaultT = (
  key: string,
  options?: Record<string, string | number | undefined>,
): string => {
  if (!options) return key
  return Object.entries(options).reduce(
    (acc, [k, v]) => acc.split(`%${k}%`).join(String(v)),
    key,
  )
}

export const LeverageModal: React.FC<LeverageModalProps> = ({
  isOpen,
  symbol,
  currentLeverage,
  minLeverage = 1,
  maxLeverage = 100,
  remainingOpenableAtLeverage,
  onConfirm,
  onClose,
  isSubmitting = false,
  errorSlot,
  t = defaultT,
}) => {
  const [value, setValue] = useState<number>(currentLeverage)

  // Re-sync the draft slider value whenever the parent reopens the modal
  // with a different `currentLeverage` (e.g. user closed without
  // confirming, then reopened after Aster updated their position lev).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional draft re-sync on (re)open
    if (isOpen) setValue(currentLeverage)
  }, [isOpen, currentLeverage])

  const clamp = (n: number) => Math.max(minLeverage, Math.min(maxLeverage, Math.round(n)))
  const remainingOpenable = remainingOpenableAtLeverage(value)

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title={t('%symbol% Adjust Leverage', { symbol })} onDismiss={onClose}>
        <Body>
          <Stepper>
            <StepButton
              onClick={() => setValue((v) => clamp(v - 1))}
              disabled={value <= minLeverage}
              aria-label="minus"
            >
              −
            </StepButton>
            <ValueBox>{value}X</ValueBox>
            <StepButton
              onClick={() => setValue((v) => clamp(v + 1))}
              disabled={value >= maxLeverage}
              aria-label="plus"
            >
              +
            </StepButton>
          </Stepper>

          <Slider
            variant="dotted"
            name="perp-leverage"
            // min={0} (not minLeverage) so the default 4 stops land on
            // round values: max=200 → 1/50/100/150/200, max=100 →
            // 1/25/50/75/100. The leftmost stop sends 0 to
            // onValueChanged; `clamp` lifts that to `minLeverage` so the
            // user-facing minimum is still 1.
            min={0}
            max={maxLeverage}
            value={value}
            onValueChanged={(v) => setValue(clamp(v))}
            width="100%"
          />

          <RemainingBox>
            <Text fontSize="14px" color="textSubtle">
              {t('Remaining openable notional value')}
            </Text>
            <Text fontSize="20px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
              {Number.isFinite(remainingOpenable) && (remainingOpenable as number) > 0
                ? `${(remainingOpenable as number).toLocaleString(undefined, { maximumFractionDigits: 0 })} USDT`
                : '—'}
            </Text>
            <Text fontSize="12px" color="textSubtle">
              {t(
                'The maximum notional value you can open under your current leverage and system risk control limits.',
              )}
            </Text>
          </RemainingBox>

          <Text fontSize="12px" color="textSubtle">
            {t('Please note that leverage changing will also apply for open positions and open orders.')}
          </Text>

          <Text fontSize="12px" color="textSubtle">
            {t('Please note that setting higher leverage increases the risk of liquidation.')}
          </Text>

          {errorSlot}

          <Button scale="md" disabled={isSubmitting} onClick={() => onConfirm(value)}>
            {isSubmitting ? t('Confirming…') : t('Confirm')}
          </Button>
        </Body>
      </Modal>
    </ModalV2>
  )
}
