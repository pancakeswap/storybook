import React from 'react'
import { styled } from 'styled-components'
import { Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Text } from '../primitives/Text'
import { ArrowBackIcon } from '../primitives/Icons'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'

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
  /** Pre-formatted USD value, e.g. "$999,999.99". Optional. */
  usdValueText?: string
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
  /** Pre-formatted current Perp balance shown in the summary card
   *  (e.g. "$0"). Defaults to "$0" when omitted. */
  perpBalanceText?: string

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

/** Minimal back link — small arrow + "Back" text in primary teal,
 *  no Button chrome so it aligns with the other ModalBody content
 *  on the left edge. */
const BackLink = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.12s;
  &:hover { filter: brightness(1.1); }
`

/** Perps Balance summary card — Figma 47:866. */
const PerpBalanceCard = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  padding: 16px;
  gap: 10px;
  background: ${({ theme }) => theme.colors.cardSecondary};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
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

/* Wrapper that keeps the available-balance header tight to the field
 * (8 px gap inside the 20 px ModalBody rhythm). */
const AmountGroup = styled(Flex)`
  flex-direction: column;
  gap: 8px;
`

/* Available + percent-shortcut header row above the field. */
const AmountHeader = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
`

/* AmountField — Figma 39:797. 80 px tall, 24 px radius, input-primary
 * bg + input-secondary border + inset top shadow + secondary focus ring. */
const AmountField = styled(Flex)`
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 80px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.input};
  box-shadow: ${({ theme }) =>
    `inset 0px 2px 0px -1px ${theme.colors.cardBorder}`};
  transition: border-color 0.12s, box-shadow 0.12s;
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow:
      inset 0px 2px 0px -1px ${({ theme }) => theme.colors.cardBorder},
      0 0 0 4px ${({ theme }) =>
        `color-mix(in srgb, ${theme.colors.secondary} 20%, transparent)`};
  }
`

/* Token select chip on the left of the amount field. */
const TokenSelectButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px 4px 4px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  flex-shrink: 0;
  font-family: inherit;
  &:hover { filter: brightness(1.05); }
`

const AmountInput = styled.input`
  background: transparent;
  border: 0;
  outline: 0;
  flex: 1;
  min-width: 0;
  text-align: right;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

/* Text-only percent shortcuts in primary teal with 1 px vertical
 * card-border dividers between them. */
const PercentRow = styled(Flex)`
  align-items: center;
  gap: 8px;
`

const PercentChip = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12px;
  padding: 4px 0;
  cursor: pointer;
  &:hover { filter: brightness(1.1); }
`

const PercentDivider = styled.span`
  display: inline-block;
  width: 1px;
  height: 16px;
  background: ${({ theme }) => theme.colors.cardBorder};
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
  perpBalanceText,
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
      : t('Fund Your Perps Account')

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
            <BackLink type="button" onClick={onBack} aria-label="back">
              <ArrowBackIcon width="14px" color="primary" />
              <span>{t('Back')}</span>
            </BackLink>
          )}

          {step === 'select' && (
            <>
              {/* Perp balance summary card — Figma 47:866. */}
              <PerpBalanceCard>
                <Flex flexDirection="column" style={{ gap: 2 }}>
                  <Pretitle>{t('Perps Balance')}</Pretitle>
                  <Text fontSize="12px" color="textSubtle">
                    {t('In Aster Contract')}
                  </Text>
                </Flex>
                <Text fontSize="20px" bold style={{ letterSpacing: '-0.2px' }}>
                  {perpBalanceText ?? '$0'}
                </Text>
              </PerpBalanceCard>

              {/* Top-up source line — addresses where the EOA tokens live. */}
              {(evmAddress || solanaAddress) && (
                <Text fontSize="12px" color="textSubtle">
                  {t('Top up from your connected EOA wallet (%addr%)', {
                    addr: evmAddress ?? solanaAddress ?? '',
                  })}
                </Text>
              )}

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
                        {tokenIcon(asset, 40)}
                        <TokenMeta>
                          <Text fontSize="14px" bold>
                            {asset.symbol}
                          </Text>
                          <Flex alignItems="center" style={{ gap: 4, fontSize: 12 }}>
                            <Text fontSize="12px" color="textSubtle">
                              {asset.balanceText}
                            </Text>
                            <Text fontSize="12px" bold color="textSubtle">
                              {asset.symbol}
                            </Text>
                          </Flex>
                        </TokenMeta>
                      </Flex>
                      {asset.usdValueText && (
                        <Text fontSize="14px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
                          {asset.usdValueText}
                        </Text>
                      )}
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
              <AmountGroup>
                {/* Available + percent shortcuts above the field
                 * (Figma 39:797). */}
                <AmountHeader>
                  <Text fontSize="12px" bold color="textSubtle">
                    {t('Available: %amt% %sym%', {
                      amt: selectedAsset.balanceText,
                      sym: selectedAsset.symbol,
                    })}
                  </Text>
                  <PercentRow>
                    {PERCENTS.map((p, i) => (
                      <React.Fragment key={p}>
                        {i > 0 && <PercentDivider />}
                        <PercentChip onClick={() => onPercentClick(p)}>{p}%</PercentChip>
                      </React.Fragment>
                    ))}
                    <PercentDivider />
                    <PercentChip onClick={() => onPercentClick(100)}>{t('MAX')}</PercentChip>
                  </PercentRow>
                </AmountHeader>

                <AmountField>
                  <TokenSelectButton type="button">
                    {tokenIcon(selectedAsset, 40)}
                    <Text fontSize="14px" bold>
                      {selectedAsset.displayName || selectedAsset.symbol}
                    </Text>
                  </TokenSelectButton>
                  <AmountInput
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    placeholder="0.0"
                    inputMode="decimal"
                  />
                </AmountField>
              </AmountGroup>

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
