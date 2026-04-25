import React from 'react'
import { Box, Flex } from '../ui/components/Box'
import { Button } from '../ui/components/Button'
import { Message, MessageText } from '../ui/components/Message'
import { Text } from '../ui/components/Text'
import Modal from '../ui/widgets/Modal/Modal'
import { ModalV2 } from '../ui/widgets/Modal/ModalV2'

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
export type EnableTradingPhase = 'link-wallet' | 'authorize-agent' | 'checking-status' | 'done'

export interface EnableTradingModalProps {
  isOpen: boolean
  onClose: () => void
  /** Controlled phase. */
  phase: EnableTradingPhase

  /** External EOA address — pre-formatted by the consumer (full or truncated). */
  eoaAddress?: string
  /**
   * Embedded-wallet (trading agent) address. When undefined and the
   * widget needs to display something, falls back to either the
   * "Provisioning…" or "Will be created in step 1" placeholder
   * depending on `isProvisioning`.
   */
  agentAddress?: string
  /** Show "Provisioning…" instead of "Will be created in step 1". */
  isProvisioning?: boolean

  // ── Phase: link-wallet ────────────────────────────────
  /**
   * Pre-formatted button label, e.g. "Step 1 — Link your wallet" / "Sign
   * in your wallet…" / "Verifying…". Consumer rotates this based on its
   * SIWE flow state.
   */
  linkButtonLabel: string
  isLinkDisabled?: boolean
  isLinkPending?: boolean
  onLinkWallet: () => void

  // ── Phase: authorize-agent | checking-status ──────────
  /**
   * Pre-formatted button label for the approve step. Consumer rotates
   * this based on which signature it's collecting (agent vs builder).
   */
  approveButtonLabel: string
  isApproveDisabled?: boolean
  isApprovePending?: boolean
  onApprove: () => void

  /** Optional inline error block (e.g. PerpsErrorMessage). */
  errorSlot?: React.ReactNode

  /** Translator. */
  t?: (key: string) => string
}

const identity = (s: string) => s

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
export const EnableTradingModal: React.FC<EnableTradingModalProps> = ({
  isOpen,
  onClose,
  phase,
  eoaAddress,
  agentAddress,
  isProvisioning = false,
  linkButtonLabel,
  isLinkDisabled = false,
  isLinkPending = false,
  onLinkWallet,
  approveButtonLabel,
  isApproveDisabled = false,
  isApprovePending = false,
  onApprove,
  errorSlot,
  t = identity,
}) => {
  const agentDisplay =
    agentAddress ?? (isProvisioning ? t('Provisioning...') : t('Will be created in step 1'))

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title={t('Enable Perps Trading')} onDismiss={onClose}>
        <Flex flexDirection="column" style={{ gap: 16, minWidth: 320, maxWidth: 420 }}>
          <Text fontSize="14px" color="textSubtle">
            {t(
              'We will create (or reuse) a Privy embedded wallet as your trading agent. The agent can only place orders — it cannot withdraw funds.',
            )}
          </Text>

          <Box>
            <Text fontSize="12px" color="textSubtle">
              {t('Your wallet')}
            </Text>
            <Text bold fontSize="14px" style={{ wordBreak: 'break-all' }}>
              {eoaAddress ?? '—'}
            </Text>
          </Box>

          <Box>
            <Text fontSize="12px" color="textSubtle">
              {t('Agent (trading signer)')}
            </Text>
            <Text bold fontSize="14px" style={{ wordBreak: 'break-all' }}>
              {agentDisplay}
            </Text>
          </Box>

          {errorSlot}

          {phase === 'link-wallet' && (
            <>
              <Button
                onClick={onLinkWallet}
                disabled={isLinkDisabled || isLinkPending}
                isLoading={isLinkPending}
                scale="md"
              >
                {linkButtonLabel}
              </Button>
              <Text fontSize="11px" color="textSubtle">
                {t("You'll sign one message in your wallet. No funds move.")}
              </Text>
            </>
          )}

          {(phase === 'authorize-agent' || phase === 'checking-status') && (
            <>
              <Button
                onClick={onApprove}
                disabled={isApproveDisabled || isApprovePending || phase === 'checking-status'}
                isLoading={isApprovePending || phase === 'checking-status'}
                scale="md"
              >
                {approveButtonLabel}
              </Button>
              <Text fontSize="11px" color="textSubtle">
                {t(
                  "You'll sign two messages with your main wallet: one to authorize the trading agent, one to set the builder fee cap (10 bps). No funds move and withdrawals always require your main wallet.",
                )}
              </Text>
            </>
          )}

          {phase === 'done' && (
            <Message variant="success">
              <MessageText>{t('Trading enabled.')}</MessageText>
            </Message>
          )}
        </Flex>
      </Modal>
    </ModalV2>
  )
}
