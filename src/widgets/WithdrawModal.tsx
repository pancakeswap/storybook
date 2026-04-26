import React from 'react'
import { Box, Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Input } from '../primitives/Input'
import { Text } from '../primitives/Text'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'

export interface WithdrawModalProps {
  /** Controlled open state. */
  isOpen: boolean
  /**
   * Destination wallet address — caller pre-truncates (e.g. "0x1234…abcd").
   * Shown in the "Destination" line for user confirmation.
   */
  destinationAddress?: string
  /** Display label for the destination chain — e.g. "BSC". */
  destinationChainName?: string
  /** Asset symbol — defaults to USDT. */
  asset?: string
  /**
   * Pre-formatted fee string with asset, e.g. "0.1234" — combined with
   * the `asset` prop in the helper line. Pass "—" when unknown.
   */
  feeText?: string
  /** Controlled amount input. */
  amount: string
  onAmountChange: (value: string) => void
  /** Called when the user clicks Sign & Withdraw. */
  onWithdraw: () => void
  onClose: () => void
  /** Disable + show "Withdrawing..." when the consumer's mutation is in flight. */
  isSubmitting?: boolean
  /**
   * When false the submit button is disabled. Use to gate on wallet
   * connection / minimum amount / Aster auth ready.
   */
  canSubmit?: boolean
  /**
   * Optional error block — consumer renders the classified
   * `PerpsErrorMessage` (or anything else) into this slot.
   */
  errorSlot?: React.ReactNode
  /** Translator. */
  t?: (key: string, options?: Record<string, string | number | undefined>) => string
}

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

/**
 * Withdraw flow modal — single-asset, single-chain. The consumer
 * (pancake-frontend) wires the destination address from wagmi's
 * `useAccount`, the fee from a query hook, and the submit handler from
 * a signed Aster API call. This widget is stateless apart from the
 * controlled `amount` value — that lives in the consumer too so it can
 * be derived (e.g. clamp to maxWithdrawable) or pre-filled.
 */
export const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  destinationAddress,
  destinationChainName = 'BSC',
  asset = 'USDT',
  feeText,
  amount,
  onAmountChange,
  onWithdraw,
  onClose,
  isSubmitting = false,
  canSubmit = true,
  errorSlot,
  t = defaultT,
}) => {
  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title={t('Withdraw from Aster')} onDismiss={onClose}>
        <Flex flexDirection="column" style={{ gap: 12, minWidth: 340 }}>
          <Text fontSize="12px" color="textSubtle">
            {t('Destination: %dest% (%chain%)', {
              dest: destinationAddress ?? '—',
              chain: destinationChainName,
            })}
          </Text>

          <Box>
            <Text fontSize="12px" color="textSubtle">
              {t('Token')}
            </Text>
            <Text bold>{asset}</Text>
          </Box>

          <Box>
            <Text fontSize="12px" color="textSubtle">
              {t('Amount')}
            </Text>
            <Input
              value={amount}
              onChange={(e) => onAmountChange(e.target.value)}
              placeholder="0.00"
              inputMode="decimal"
            />
            <Text fontSize="11px" color="textSubtle" mt="4px">
              {t('Fee: %fee% %asset%', { fee: feeText ?? '—', asset })}
            </Text>
          </Box>

          {errorSlot}

          <Button
            onClick={onWithdraw}
            disabled={!canSubmit || !amount || isSubmitting}
            isLoading={isSubmitting}
            scale="md"
          >
            {t('Sign & Withdraw')}
          </Button>

          <Text fontSize="11px" color="textSubtle">
            {t('You sign a withdrawal request with your main wallet. The agent wallet is never involved.')}
          </Text>
        </Flex>
      </Modal>
    </ModalV2>
  )
}
