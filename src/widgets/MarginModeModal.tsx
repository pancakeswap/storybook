import React from 'react'
import { styled } from 'styled-components'
import { Box, Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Text } from '../primitives/Text'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'

export type MarginMode = 'CROSS' | 'ISOLATED'

export interface MarginModeModalProps {
  /** Controlled open state. */
  isOpen: boolean
  /** Symbol the change applies to (e.g. "BTCUSDT"). */
  symbol: string
  /** Current per-symbol margin mode. */
  currentMode: MarginMode
  /**
   * Called with the user's chosen mode. Consumer owns the signed write
   * (POST /fapi/v3/marginType) and closes the modal on success.
   */
  onConfirm: (mode: MarginMode) => void
  onClose: () => void
  /** Disables Confirm while the consumer's mutation is in-flight. */
  isSubmitting?: boolean
  /**
   * Disables the toggle entirely. When true, the picker is read-only and
   * Confirm never fires (e.g. while auth hasn't finished hydrating).
   */
  disabled?: boolean
  /**
   * Disables the Isolated card with an inline hint. Used when the account
   * is in Multi-Asset mode — Aster only allows Cross under that mode and
   * rejects switches with `-4046`. Pass undefined to leave Isolated enabled.
   */
  isolatedDisabledReason?: string
  /** Slot for caller-classified errors / warnings. */
  errorSlot?: React.ReactNode
  /** Translator. */
  t?: (key: string, options?: Record<string, string | number | undefined>) => string
}

const Card = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
  flex: 1 1 0;
  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.secondary : theme.colors.cardBorder)};
  border-radius: 16px;
  cursor: pointer;
  text-align: center;
  font-family: inherit;
  transition: border-color 0.12s ease;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

const CardLabel = styled(Text).attrs({ fontSize: '15px', bold: true })`
  font-weight: 600;
`

const identity = (s: string) => s

/**
 * Per-symbol Cross / Isolated picker. Mirrors Aster's modal: two cards,
 * description blob, Confirm. Only fires onConfirm when the selection
 * differs from `currentMode` (so a no-op tap doesn't burn a server round-trip).
 *
 * Stateless presentation — consumer reads/writes the actual mode via
 * Aster's `/fapi/v3/marginType`.
 */
export const MarginModeModal: React.FC<MarginModeModalProps> = ({
  isOpen,
  symbol,
  currentMode,
  onConfirm,
  onClose,
  isSubmitting = false,
  disabled = false,
  isolatedDisabledReason,
  errorSlot,
  t = identity,
}) => {
  const [selected, setSelected] = React.useState<MarginMode>(currentMode)

  React.useEffect(() => {
    if (isOpen) setSelected(currentMode)
  }, [isOpen, currentMode])

  const isolatedBlocked = !!isolatedDisabledReason
  // If the user tries to select Isolated while it's blocked, snap back.
  const effectiveSelected: MarginMode = isolatedBlocked && selected === 'ISOLATED' ? 'CROSS' : selected
  const dirty = effectiveSelected !== currentMode
  const canConfirm = !disabled && !isSubmitting && dirty

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title={t('%symbol% Margin mode', { symbol })} onDismiss={onClose}>
        <Flex flexDirection="column" style={{ gap: 12, minWidth: 360, maxWidth: 460 }}>
          <Text fontSize="14px" color="textSubtle">
            {t('Switching of margin mode only applies to the selected contract')}
          </Text>

          <Flex style={{ gap: 10 }}>
            <Card
              type="button"
              $active={effectiveSelected === 'CROSS'}
              onClick={() => !disabled && setSelected('CROSS')}
              disabled={disabled}
              aria-pressed={effectiveSelected === 'CROSS'}
            >
              <CardLabel>{t('Cross')}</CardLabel>
            </Card>
            <Card
              type="button"
              $active={effectiveSelected === 'ISOLATED'}
              onClick={() => !disabled && !isolatedBlocked && setSelected('ISOLATED')}
              disabled={disabled || isolatedBlocked}
              aria-pressed={effectiveSelected === 'ISOLATED'}
              title={isolatedDisabledReason}
            >
              <CardLabel>{t('Isolated')}</CardLabel>
            </Card>
          </Flex>

          {isolatedBlocked && (
            <Text fontSize="13px" color="warning">
              {isolatedDisabledReason}
            </Text>
          )}

          <Box>
            <Text fontSize="14px" bold mb="4px">
              {t('What are cross and isolated modes?')}
            </Text>
            <Text fontSize="13px" color="textSubtle">
              {t(
                'The Margin assigned to a position is restricted to a certain amount. If the Margin falls below the Maintenance Margin level, the position is liquidated. However, you can add and remove Margin at will under this mode.',
              )}
            </Text>
          </Box>

          {errorSlot}

          <Button
            onClick={() => canConfirm && onConfirm(effectiveSelected)}
            disabled={!canConfirm}
            isLoading={isSubmitting}
            scale="md"
          >
            {t('Confirm')}
          </Button>
        </Flex>
      </Modal>
    </ModalV2>
  )
}
