import React from 'react'
import styled from 'styled-components'
import { Flex } from '../ui/components/Box'
import { Button } from '../ui/components/Button'
import { Text } from '../ui/components/Text'
import { ArrowBackIcon } from '../ui/Icons'
import Modal from '../ui/widgets/Modal/Modal'
import { ModalV2 } from '../ui/widgets/Modal/ModalV2'

export type DepositStep = 'select' | 'amount' | 'checking' | 'success' | 'failed'

/** Compact descriptor for one depositable token row in the picker. */
export interface DepositTokenRow {
  /** Stable id (typically asset.name + network). */
  id: string
  /** Display symbol, e.g. "USDT". */
  symbol: string
  /** Friendlier display name when different (e.g. "Tether USD"). */
  displayName?: string
  /** Pre-formatted balance string (e.g. "1234.56"). */
  balanceText: string
  /** Whether the wallet has any non-zero balance for this asset. */
  hasBalance: boolean
  /** Optional logo URL — consumer's responsibility to resolve. */
  logoUrl?: string
}

/** Submit-button copy for each phase of the on-chain deposit flow. */
export type DepositSubmitState =
  | 'idle'
  | 'switching-chain'
  | 'approving'
  | 'approve-confirming'
  | 'depositing'
  | 'deposit-confirming'
  | 'done'
  | 'failed'

export interface DepositReceipt {
  hash: string
  /** Pre-formatted amount string. */
  amount: string
  /** Asset symbol (e.g. "USDT"). */
  assetSymbol: string
  /** Pre-truncated source address for the success screen. */
  sourceAddress?: string
}

export interface DepositModalProps {
  isOpen: boolean
  onClose: () => void
  /** Controlled step. Consumer drives transitions in response to user actions. */
  step: DepositStep

  // Wallet info shown in the select-step header.
  /** Pre-truncated EVM address, e.g. "0x1234…abcd". */
  evmAddress?: string
  /** Pre-truncated Solana address. */
  solanaAddress?: string

  // ── Step: select ───────────────────────────────────────
  isLoadingAssets?: boolean
  assets: DepositTokenRow[]
  selectedAssetId?: string
  onSelectAsset: (id: string) => void
  otherSupportedSymbols?: string[]

  // ── Step: amount ───────────────────────────────────────
  selectedAsset?: DepositTokenRow
  amount: string
  onAmountChange: (v: string) => void
  sourceAddress?: string
  exceedsBalance?: boolean
  errorSlot?: React.ReactNode
  onPercentClick: (pct: number) => void
  submitState: DepositSubmitState
  canContinue: boolean
  onContinue: () => void
  onBack: () => void

  // ── Step: checking | success ───────────────────────────
  receipt?: DepositReceipt
  checkingElapsedMs?: number
  onDepositAgain?: () => void

  // ── Step: failed ───────────────────────────────────────
  onRetry?: () => void

  /** Translator. */
  t?: (key: string, options?: Record<string, string | number | undefined>) => string

  /** Optional custom token-icon renderer (consumer's TokenIcon). */
  renderTokenIcon?: (asset: DepositTokenRow, size?: number) => React.ReactNode
  /** Optional spinner override (consumer's Spinner). */
  renderSpinner?: (size: number) => React.ReactNode
}

const ModalBody = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`

const WalletCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`

const WalletRow = styled(Flex)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`

const WalletAddress = styled(Text).attrs({ fontSize: '14px', bold: true })`
  font-variant-numeric: tabular-nums;
`

const BalanceRow = styled(Flex)`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
  align-items: center;
`

const Pretitle = styled(Text).attrs({ fontSize: '12px', bold: true })`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

const TokenList = styled(Flex)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`

const TokenRow = styled.button<{ $selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 12px;
  border: 0;
  background: ${({ $selected, theme }) => ($selected ? theme.colors.tertiary : 'transparent')};
  cursor: pointer;
  width: 100%;
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.colors.input};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const TokenMeta = styled(Flex)`
  flex-direction: column;
`

const AmountField = styled(Flex)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.input};
`

const AmountInput = styled.input`
  background: transparent;
  border: 0;
  outline: 0;
  width: 100%;
  text-align: right;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const PercentRow = styled(Flex)`
  gap: 6px;
  margin-top: 4px;
`

const PercentChip = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`

const SummaryCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const SummaryRow = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`

const CheckingSteps = styled(Flex)`
  flex-direction: column;
  gap: 8px;
`

const CheckingStep = styled(Flex)<{ $state: 'done' | 'active' | 'pending' }>`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state }) => ($state === 'pending' ? 0.5 : 1)};
`

const StepIndicator = styled.div<{ $state: 'done' | 'active' | 'pending' }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state, theme }) =>
    $state === 'done' ? theme.colors.success : theme.colors.input};
  color: ${({ $state, theme }) => ($state === 'done' ? '#fff' : theme.colors.text)};
`

const SuccessHeading = styled(Text).attrs({ fontSize: '32px', bold: true })`
  text-align: center;
  font-variant-numeric: tabular-nums;
`

const TokenGlyph = styled.div<{ $size?: number }>`
  width: ${({ $size = 24 }) => $size}px;
  height: ${({ $size = 24 }) => $size}px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
`

const defaultT = (
  key: string,
  options?: Record<string, string | number | undefined>,
): string => {
  if (!options) return key
  return Object.entries(options).reduce((acc, [k, v]) => acc.split(`%${k}%`).join(String(v)), key)
}

const PERCENTS = [25, 50, 75] as const

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
export const DepositModal: React.FC<DepositModalProps> = ({
  isOpen,
  onClose,
  step,
  evmAddress,
  solanaAddress,
  isLoadingAssets = false,
  assets,
  selectedAssetId,
  onSelectAsset,
  otherSupportedSymbols = [],
  selectedAsset,
  amount,
  onAmountChange,
  sourceAddress,
  errorSlot,
  onPercentClick,
  submitState,
  canContinue,
  onContinue,
  onBack,
  receipt,
  checkingElapsedMs = 0,
  onDepositAgain,
  onRetry,
  t = defaultT,
  renderTokenIcon,
  renderSpinner,
}) => {
  const title =
    step === 'success'
      ? t('Deposit Successful')
      : step === 'checking'
      ? t('Processing Deposit')
      : step === 'failed'
      ? t('Deposit Failed')
      : t('Fund your Account')

  const submitLabel = (() => {
    switch (submitState) {
      case 'switching-chain':
        return t('Switching chain...')
      case 'approving':
        return t('Approve in wallet...')
      case 'approve-confirming':
        return t('Confirming approval...')
      case 'depositing':
        return t('Confirm in wallet...')
      case 'deposit-confirming':
        return t('Confirming deposit...')
      case 'done':
        return t('Done')
      case 'failed':
        return t('Retry')
      case 'idle':
      default:
        return t('Continue')
    }
  })()

  const tokenIcon = (asset: DepositTokenRow, size = 24) =>
    renderTokenIcon ? (
      renderTokenIcon(asset, size)
    ) : (
      <TokenGlyph $size={size}>{asset.symbol.slice(0, 1)}</TokenGlyph>
    )

  const spinner = (size: number) =>
    renderSpinner ? (
      renderSpinner(size)
    ) : (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `${Math.max(2, Math.round(size / 16))}px solid currentColor`,
          borderTopColor: 'transparent',
          animation: 'pcs-deposit-spin 0.8s linear infinite',
        }}
      >
        <style>{'@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}'}</style>
      </div>
    )

  const isSubmitting =
    submitState === 'switching-chain' ||
    submitState === 'approving' ||
    submitState === 'approve-confirming' ||
    submitState === 'depositing' ||
    submitState === 'deposit-confirming'

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title={title} onDismiss={onClose}>
        <ModalBody>
          {step === 'amount' && (
            <Flex justifyContent="flex-start">
              <Button
                scale="sm"
                variant="text"
                onClick={onBack}
                aria-label="back"
                startIcon={<ArrowBackIcon width="18px" />}
              >
                {t('Back')}
              </Button>
            </Flex>
          )}

          {step === 'select' && (
            <>
              <WalletCard>
                {evmAddress && (
                  <WalletRow>
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 999,
                        background: 'linear-gradient(135deg, #f0b90b, #fd621d)',
                      }}
                    />
                    <WalletAddress>{evmAddress}</WalletAddress>
                    <Text fontSize="11px" color="textSubtle" style={{ marginLeft: 'auto' }}>
                      EVM
                    </Text>
                  </WalletRow>
                )}
                {solanaAddress && (
                  <WalletRow style={{ borderTop: evmAddress ? '1px solid var(--colors-cardBorder)' : undefined }}>
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 999,
                        background: 'linear-gradient(135deg, #14f195, #9945ff)',
                      }}
                    />
                    <WalletAddress>{solanaAddress}</WalletAddress>
                    <Text fontSize="11px" color="textSubtle" style={{ marginLeft: 'auto' }}>
                      Solana
                    </Text>
                  </WalletRow>
                )}
                <BalanceRow>
                  <div>
                    <Pretitle color="textSubtle">{t('Balance')}</Pretitle>
                    <Text fontSize="12px" color="textSubtle">
                      {t('In your wallet')}
                    </Text>
                  </div>
                  <Text fontSize="14px" bold>
                    {assets.some((a) => a.hasBalance) ? t('Ready') : '—'}
                  </Text>
                </BalanceRow>
              </WalletCard>

              {isLoadingAssets && <Text fontSize="12px">{t('Loading tokens...')}</Text>}

              {!isLoadingAssets && assets.length === 0 && (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  style={{
                    gap: 6,
                    padding: '24px 12px',
                    border: '1px dashed',
                    borderRadius: 12,
                  }}
                >
                  <Text fontSize="14px" bold>
                    {t('No depositable tokens in your wallet')}
                  </Text>
                  <Text fontSize="12px" color="textSubtle" textAlign="center">
                    {t(
                      'Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.',
                    )}
                  </Text>
                  {otherSupportedSymbols.length > 0 && (
                    <Text fontSize="11px" color="textSubtle" textAlign="center">
                      {t('Supported: %tokens%', { tokens: otherSupportedSymbols.slice(0, 8).join(' · ') })}
                    </Text>
                  )}
                </Flex>
              )}

              {assets.length > 0 && (
                <TokenList>
                  {assets.map((asset) => (
                    <TokenRow
                      key={asset.id}
                      $selected={selectedAssetId === asset.id}
                      onClick={() => onSelectAsset(asset.id)}
                      title={asset.displayName}
                    >
                      <Flex alignItems="center" style={{ gap: 12 }}>
                        {tokenIcon(asset, 32)}
                        <TokenMeta>
                          <Text fontSize="14px" bold>
                            {asset.displayName || asset.symbol}
                          </Text>
                          <Text fontSize="12px" color="textSubtle">
                            {asset.balanceText} {asset.symbol}
                          </Text>
                        </TokenMeta>
                      </Flex>
                    </TokenRow>
                  ))}
                </TokenList>
              )}

              {assets.length > 0 && otherSupportedSymbols.length > 0 && (
                <Text fontSize="11px" color="textSubtle" textAlign="center">
                  {t('Also supported: %tokens%', { tokens: otherSupportedSymbols.slice(0, 8).join(' · ') })}
                </Text>
              )}
            </>
          )}

          {step === 'amount' && selectedAsset && (
            <>
              <AmountField>
                <Flex alignItems="center" style={{ gap: 12 }}>
                  {tokenIcon(selectedAsset, 40)}
                  <Flex flexDirection="column">
                    <Text fontSize="14px" bold>
                      {selectedAsset.displayName || selectedAsset.symbol}
                    </Text>
                    <Text fontSize="12px" color="textSubtle">
                      {selectedAsset.balanceText}
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column" alignItems="flex-end" style={{ minWidth: 0, flex: 1 }}>
                  <AmountInput
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    placeholder="0"
                    inputMode="decimal"
                  />
                  <PercentRow>
                    {PERCENTS.map((p) => (
                      <PercentChip key={p} onClick={() => onPercentClick(p)}>
                        {p}%
                      </PercentChip>
                    ))}
                    <PercentChip onClick={() => onPercentClick(100)}>{t('MAX')}</PercentChip>
                  </PercentRow>
                </Flex>
              </AmountField>

              <SummaryCard>
                <SummaryRow>
                  <Pretitle color="textSubtle">{t('Source')}</Pretitle>
                  <Text fontSize="14px">{sourceAddress ?? '—'}</Text>
                </SummaryRow>
                <SummaryRow>
                  <Pretitle color="textSubtle">{t('Destination')}</Pretitle>
                  <Text fontSize="14px">{t('Aster perp account')}</Text>
                </SummaryRow>
                <SummaryRow>
                  <Pretitle color="textSubtle">{t('Token')}</Pretitle>
                  <Flex alignItems="center" style={{ gap: 6 }}>
                    {tokenIcon(selectedAsset, 16)}
                    <Text fontSize="14px" bold>
                      {selectedAsset.symbol}
                    </Text>
                  </Flex>
                </SummaryRow>
              </SummaryCard>

              {errorSlot}

              <Button
                onClick={onContinue}
                disabled={!canContinue || isSubmitting}
                isLoading={isSubmitting}
                scale="md"
              >
                {submitLabel}
              </Button>
            </>
          )}

          {step === 'checking' && receipt && (
            <>
              <Flex flexDirection="column" alignItems="center" style={{ gap: 8 }}>
                {spinner(72)}
                <Text fontSize="14px" color="textSubtle" textAlign="center">
                  {t('Your deposit is on its way. This usually takes 30-60 seconds.')}
                </Text>
              </Flex>

              <CheckingSteps>
                <CheckingStep $state="done">
                  <StepIndicator $state="done">✓</StepIndicator>
                  <Text fontSize="13px">{t('Transaction broadcast')}</Text>
                </CheckingStep>
                <CheckingStep $state="done">
                  <StepIndicator $state="done">✓</StepIndicator>
                  <Text fontSize="13px">{t('Confirmed on-chain')}</Text>
                </CheckingStep>
                <CheckingStep $state="active">
                  <StepIndicator $state="active">{spinner(16)}</StepIndicator>
                  <Text fontSize="13px">{t('Waiting for Aster to credit your account…')}</Text>
                </CheckingStep>
              </CheckingSteps>

              <SummaryCard>
                <SummaryRow>
                  <Pretitle color="textSubtle">{t('Amount')}</Pretitle>
                  <Text fontSize="14px" bold>
                    {receipt.amount} {receipt.assetSymbol}
                  </Text>
                </SummaryRow>
                <SummaryRow>
                  <Pretitle color="textSubtle">{t('Tx hash')}</Pretitle>
                  <Text fontSize="14px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {receipt.hash.slice(0, 10)}…{receipt.hash.slice(-8)}
                  </Text>
                </SummaryRow>
                <SummaryRow>
                  <Pretitle color="textSubtle">{t('Elapsed')}</Pretitle>
                  <Text fontSize="14px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {Math.floor(checkingElapsedMs / 1000)}s
                  </Text>
                </SummaryRow>
              </SummaryCard>

              <Button scale="md" variant="secondary" onClick={onClose}>
                {t('Close')}
              </Button>
            </>
          )}

          {step === 'success' && receipt && (
            <>
              <SuccessHeading>
                {receipt.amount} {receipt.assetSymbol}
              </SuccessHeading>
              <SummaryCard>
                <SummaryRow>
                  <Text fontSize="14px" color="textSubtle">
                    {t('Source')}
                  </Text>
                  <Text fontSize="14px" bold>
                    {receipt.sourceAddress ?? '—'}
                  </Text>
                </SummaryRow>
                <SummaryRow>
                  <Text fontSize="14px" color="textSubtle">
                    {t('Destination')}
                  </Text>
                  <Text fontSize="14px" bold>
                    {t('Aster perp account')}
                  </Text>
                </SummaryRow>
                <SummaryRow>
                  <Text fontSize="14px" color="textSubtle">
                    {t('Processing time')}
                  </Text>
                  <Text fontSize="14px" bold>
                    {t('~1-2 min')}
                  </Text>
                </SummaryRow>
              </SummaryCard>
              <SummaryCard>
                <SummaryRow>
                  <Text fontSize="14px" color="textSubtle">
                    {t('Tx hash')}
                  </Text>
                  <Text fontSize="14px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {receipt.hash.slice(0, 10)}…{receipt.hash.slice(-8)}
                  </Text>
                </SummaryRow>
              </SummaryCard>
              <Flex style={{ gap: 8 }}>
                <Button style={{ flex: 1 }} scale="md" onClick={onClose}>
                  {t('View Balance')}
                </Button>
                <Button style={{ flex: 1 }} scale="md" variant="secondary" onClick={onDepositAgain}>
                  {t('Deposit Again')}
                </Button>
              </Flex>
            </>
          )}

          {step === 'failed' && (
            <>
              <Flex flexDirection="column" alignItems="center" style={{ gap: 8 }}>
                <Text fontSize="44px" bold style={{ lineHeight: 1 }}>
                  ⚠️
                </Text>
                <Text fontSize="14px" color="textSubtle" textAlign="center">
                  {t('The transaction did not go through. Your funds did not move.')}
                </Text>
              </Flex>
              {errorSlot}
              <Flex style={{ gap: 8 }}>
                <Button style={{ flex: 1 }} scale="md" onClick={onRetry}>
                  {t('Try Again')}
                </Button>
                <Button style={{ flex: 1 }} scale="md" variant="secondary" onClick={onClose}>
                  {t('Close')}
                </Button>
              </Flex>
            </>
          )}
        </ModalBody>
      </Modal>
    </ModalV2>
  )
}
