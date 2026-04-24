import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Flex } from '../ui/components/Box'
import { Button } from '../ui/components/Button'
import Slider from '../ui/components/Slider/Slider'
import { Text } from '../ui/components/Text'
import Modal from '../ui/widgets/Modal/Modal'
import { ModalV2 } from '../ui/widgets/Modal/ModalV2'

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
   * USDT (or quote) balance available for new positions. Used to display
   * the "Maximum position at current leverage" preview line.
   */
  availableBalance: number
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
  availableBalance,
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
    if (isOpen) setValue(currentLeverage)
  }, [isOpen, currentLeverage])

  const clamp = (n: number) => Math.max(minLeverage, Math.min(maxLeverage, Math.round(n)))
  const maxNotional = availableBalance * value

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title={t('%symbol% Adjust Leverage', { symbol })} onDismiss={onClose}>
        <Flex flexDirection="column" style={{ gap: 16, minWidth: 340, maxWidth: 440 }}>
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

          {/*
           * `width="100%"` is forwarded to the Slider's outer Box. Without
           * it the Box has no intrinsic width (its inner BunnySlider /
           * BarBackground / StyledInput are all `position: absolute`) and
           * shrinks to 0 inside this flex column — which leaves the bunny
           * + track collapsed against the left edge.
           */}
          <Slider
            name="perp-leverage"
            min={minLeverage}
            max={maxLeverage}
            value={value}
            onValueChanged={(v) => setValue(clamp(v))}
            width="100%"
          />

          <Box>
            <Text fontSize="14px" color="textSubtle">
              {t('Maximum position at current leverage:')}
            </Text>
            <Text fontSize="18px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
              {Number.isFinite(maxNotional) && maxNotional > 0
                ? `${maxNotional.toLocaleString(undefined, { maximumFractionDigits: 0 })} USDT`
                : '—'}
            </Text>
          </Box>

          <Text fontSize="12px" color="textSubtle">
            {t('Please note that setting higher leverage increases the risk of liquidation.')}
          </Text>

          {errorSlot}

          <Button scale="md" disabled={isSubmitting} onClick={() => onConfirm(value)}>
            {isSubmitting ? t('Confirming…') : t('Confirm')}
          </Button>
        </Flex>
      </Modal>
    </ModalV2>
  )
}
