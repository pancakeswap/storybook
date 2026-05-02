import React from 'react'
import { styled, useTheme } from 'styled-components'
import { Box, Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Checkbox } from '../primitives/Checkbox'
import { Text } from '../primitives/Text'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'

export type AssetMode = 'SINGLE' | 'MULTI'

export interface AssetModeModalProps {
  /** Controlled open state. */
  isOpen: boolean
  /** Current account-wide mode loaded from Aster. */
  currentMode: AssetMode
  /**
   * Called with the user's chosen mode. Consumer owns the async write +
   * closing the modal on success (via `isOpen=false`).
   */
  onConfirm: (mode: AssetMode) => void
  onClose: () => void
  /** Disables Confirm while the consumer's mutation is in-flight. */
  isSubmitting?: boolean
  /**
   * Disables the toggle entirely (e.g. user not authed yet — Aster shows
   * "Enable Trading" instead of "Confirm" in that case). When true the
   * consumer's `onConfirm` won't fire and the radios are read-only.
   */
  disabled?: boolean
  /** Slot for caller-classified error messages or hints (positions present, etc). */
  errorSlot?: React.ReactNode
  /** Optional translator. Defaults to identity. */
  t?: (key: string, options?: Record<string, string | number | undefined>) => string
}

// ── Styles ───────────────────────────────────────────────────
const Card = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.secondary : theme.colors.cardBorder)};
  border-radius: 16px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: border-color 0.12s ease, background 0.12s ease;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

// Stop card-level click bubbling when the user toggles via the Checkbox
// primitive directly — the card's onClick already drives selection, so we
// don't want the inner click to flip it twice.
const CheckboxSlot = styled.div`
  flex: 0 0 auto;
  margin-top: 2px;
`

const BulletList = styled(Flex)`
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
`

const identity = (s: string) => s

/**
 * Account-wide Asset Mode picker (Single-Asset vs Multi-Asset).
 *
 *   - Single: each pair settles in its own quote currency; PnL only
 *     offsets across same-quote cross positions. Supports both Cross
 *     and Isolated margin.
 *   - Multi: contracts margin against any allowed asset, PnL offsets
 *     across all margin assets. Cross-only.
 *
 * Stateless presentation — the consumer reads/writes the actual mode
 * via Aster's `/fapi/v3/multiAssetsMargin` and just passes the current
 * value + a confirm callback.
 */
export const AssetModeModal: React.FC<AssetModeModalProps> = ({
  isOpen,
  currentMode,
  onConfirm,
  onClose,
  isSubmitting = false,
  disabled = false,
  errorSlot,
  t = identity,
}) => {
  const theme = useTheme()
  const [selected, setSelected] = React.useState<AssetMode>(currentMode)

  // Resync when the modal re-opens or the underlying value changes mid-flight.
  React.useEffect(() => {
    if (isOpen) setSelected(currentMode)
  }, [isOpen, currentMode])

  const dirty = selected !== currentMode
  const canConfirm = !disabled && !isSubmitting && dirty

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title={t('Asset Mode')} onDismiss={onClose}>
        <Flex flexDirection="column" style={{ gap: 14, minWidth: 360, maxWidth: 460 }}>
          <Card
            type="button"
            $active={selected === 'SINGLE'}
            onClick={() => !disabled && setSelected('SINGLE')}
            disabled={disabled}
            aria-pressed={selected === 'SINGLE'}
          >
            <CheckboxSlot onClick={(e) => e.stopPropagation()}>
              <Checkbox
                scale="md"
                checked={selected === 'SINGLE'}
                disabled={disabled}
                onChange={() => !disabled && setSelected('SINGLE')}
                aria-label={t('Single-Asset Mode')}
              />
            </CheckboxSlot>
            <Box style={{ flex: 1 }}>
              <Text fontSize="16px" bold>
                {t('Single-Asset Mode')}
              </Text>
              <BulletList>
                <Text fontSize="13px" color="textSubtle">
                  {t("Use pair's settlement currency as margin.")}
                </Text>
                <Text fontSize="13px" color="textSubtle">
                  {t('PnL offsets across Cross positions of the same currency.')}
                </Text>
                <Text fontSize="13px" color="textSubtle">
                  {t('Supports Cross and Isolated margin.')}
                </Text>
              </BulletList>
            </Box>
          </Card>

          <Card
            type="button"
            $active={selected === 'MULTI'}
            onClick={() => !disabled && setSelected('MULTI')}
            disabled={disabled}
            aria-pressed={selected === 'MULTI'}
          >
            <CheckboxSlot onClick={(e) => e.stopPropagation()}>
              <Checkbox
                scale="md"
                checked={selected === 'MULTI'}
                disabled={disabled}
                onChange={() => !disabled && setSelected('MULTI')}
                aria-label={t('Multi-Asset Mode')}
              />
            </CheckboxSlot>
            <Box style={{ flex: 1 }}>
              <Text fontSize="16px" bold>
                {t('Multi-Asset Mode')}
              </Text>
              <BulletList>
                <Text fontSize="13px" color="textSubtle">
                  {t('Contracts can be traded across margin assets.')}
                </Text>
                <Text fontSize="13px" color="textSubtle">
                  {t('The profits and losses of positions with different margin assets can offset one another.')}
                </Text>
                <Text fontSize="13px" color="textSubtle">
                  {t('Supports cross margin only.')}
                </Text>
              </BulletList>
            </Box>
          </Card>

          <Text fontSize="13px" color="textSubtle">
            {t('Read about ')}
            <Text as="span" fontSize="13px" bold style={{ color: theme.colors.secondary }}>
              {t('Multi-Asset Mode')}
            </Text>
            {t(' to better manage risk.')}
          </Text>

          {errorSlot}

          <Button
            onClick={() => canConfirm && onConfirm(selected)}
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
