import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Text } from '../primitives/Text'
import { ArrowBackIcon } from '../primitives/Icons'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'

export type WithdrawStep = 'select' | 'amount'

/** Compact descriptor for one withdrawable token row in the picker. */
export interface WithdrawTokenRow {
  /** Stable id, e.g. "USDT" — usually just the asset symbol. */
  id: string
  /** Display symbol, e.g. "USDT". */
  symbol: string
  /** Friendlier display name when different from `symbol` (e.g. "Tether USD"). */
  displayName?: string
  /** Pre-formatted withdrawable amount (e.g. "1234.56"). */
  withdrawableText: string
  /** Whether this asset has a non-zero withdrawable balance. */
  hasBalance: boolean
  /** Optional logo URL — consumer's responsibility to resolve. */
  logoUrl?: string
}

export interface WithdrawModalProps {
  /** Controlled open state. */
  isOpen: boolean
  /** Controlled step — consumer drives transitions. */
  step: WithdrawStep

  // ── Step: select ───────────────────────────────────────
  /** Show a loading shimmer while the consumer is fetching account assets. */
  isLoadingAssets?: boolean
  /** Withdrawable assets returned from /fapi/v3/account, mapped to display rows. */
  assets: WithdrawTokenRow[]
  /** Currently selected row id. */
  selectedAssetId?: string
  /** Fired when the user picks an asset — consumer transitions to step="amount". */
  onSelectAsset: (id: string) => void

  // ── Step: amount ───────────────────────────────────────
  /** The selected row, used to render the amount input header. */
  selectedAsset?: WithdrawTokenRow
  /**
   * Destination wallet address — caller pre-truncates (e.g. "0x1234…abcd").
   * Shown in the "Destination" line for user confirmation.
   */
  destinationAddress?: string
  /** Display label for the destination chain — e.g. "BSC". */
  destinationChainName?: string
  /**
   * Pre-formatted fee string with asset, e.g. "0.1234" — combined with
   * the selected asset symbol in the helper line. Pass "—" when unknown.
   */
  feeText?: string
  /** Controlled amount input. */
  amount: string
  onAmountChange: (value: string) => void
  /** Fired when user clicks one of the percent chips (25/50/75/MAX). */
  onPercentClick?: (pct: number) => void
  /** Step-back handler — consumer transitions step back to "select". */
  onBack: () => void
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

  /** Optional custom token-icon renderer (consumer's TokenIcon). */
  renderTokenIcon?: (asset: WithdrawTokenRow, size?: number) => React.ReactNode
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

const ModalBody = styled(Flex)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
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

const EmptyState = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;
`

const PERCENTS = [25, 50, 75] as const

/**
 * Withdraw flow modal — multi-step (select asset → enter amount). The
 * consumer (pancake-frontend) wires the asset list from `/fapi/v3/account`
 * (per-asset `maxWithdrawAmount`), the destination address from the user's
 * EOA, the fee from the bapi withdraw-fee quote, and the submit handler
 * from the signed v3 withdraw call. This widget is presentation-only.
 */
export const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  step,
  isLoadingAssets = false,
  assets,
  selectedAssetId,
  onSelectAsset,
  selectedAsset,
  destinationAddress,
  destinationChainName = 'BSC',
  feeText,
  amount,
  onAmountChange,
  onPercentClick,
  onBack,
  onWithdraw,
  onClose,
  isSubmitting = false,
  canSubmit = true,
  errorSlot,
  t = defaultT,
  renderTokenIcon,
}) => {
  const tokenIcon = (asset: WithdrawTokenRow, size = 24) =>
    renderTokenIcon ? (
      renderTokenIcon(asset, size)
    ) : (
      <TokenGlyph $size={size}>{asset.symbol.slice(0, 1)}</TokenGlyph>
    )

  const title = step === 'select' ? t('Withdraw from Aster') : t('Withdraw %asset%', { asset: selectedAsset?.symbol ?? '' })

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
              <Box>
                <Pretitle color="textSubtle">{t('Select asset')}</Pretitle>
                <Text fontSize="12px" color="textSubtle">
                  {t('Pick an asset to withdraw from your Aster perp account.')}
                </Text>
              </Box>

              {isLoadingAssets && <Text fontSize="12px">{t('Loading assets...')}</Text>}

              {!isLoadingAssets && assets.length === 0 && (
                <EmptyState>
                  <Text fontSize="14px" bold>
                    {t('Nothing to withdraw yet')}
                  </Text>
                  <Text fontSize="12px" color="textSubtle" textAlign="center">
                    {t('Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.')}
                  </Text>
                </EmptyState>
              )}

              {assets.length > 0 && (
                <TokenList>
                  {assets.map((asset) => (
                    <TokenRow
                      key={asset.id}
                      $selected={selectedAssetId === asset.id}
                      onClick={() => onSelectAsset(asset.id)}
                      disabled={!asset.hasBalance}
                      title={asset.displayName}
                    >
                      <Flex alignItems="center" style={{ gap: 12 }}>
                        {tokenIcon(asset, 32)}
                        <TokenMeta>
                          <Text fontSize="14px" bold>
                            {asset.displayName || asset.symbol}
                          </Text>
                          <Text fontSize="11px" color="textSubtle">
                            {t('Withdrawable')}
                          </Text>
                        </TokenMeta>
                      </Flex>
                      <Flex flexDirection="column" alignItems="flex-end">
                        <Text fontSize="14px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
                          {asset.withdrawableText}
                        </Text>
                        <Text fontSize="11px" color="textSubtle">
                          {asset.symbol}
                        </Text>
                      </Flex>
                    </TokenRow>
                  ))}
                </TokenList>
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
                      {t('Withdrawable: %amt% %sym%', {
                        amt: selectedAsset.withdrawableText,
                        sym: selectedAsset.symbol,
                      })}
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
                  {onPercentClick && (
                    <PercentRow>
                      {PERCENTS.map((p) => (
                        <PercentChip key={p} onClick={() => onPercentClick(p)}>
                          {p}%
                        </PercentChip>
                      ))}
                      <PercentChip onClick={() => onPercentClick(100)}>{t('MAX')}</PercentChip>
                    </PercentRow>
                  )}
                </Flex>
              </AmountField>

              <SummaryCard>
                <SummaryRow>
                  <Pretitle color="textSubtle">{t('Destination')}</Pretitle>
                  <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {destinationAddress ?? '—'}
                  </Text>
                </SummaryRow>
                <SummaryRow>
                  <Pretitle color="textSubtle">{t('Network')}</Pretitle>
                  <Text fontSize="14px">{destinationChainName}</Text>
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
                <SummaryRow>
                  <Pretitle color="textSubtle">{t('Fee')}</Pretitle>
                  <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {feeText ?? '—'} {selectedAsset.symbol}
                  </Text>
                </SummaryRow>
              </SummaryCard>

              {errorSlot}

              <Button
                onClick={onWithdraw}
                disabled={!canSubmit || !amount || isSubmitting}
                isLoading={isSubmitting}
                scale="md"
              >
                {isSubmitting ? t('Withdrawing...') : t('Sign & Withdraw')}
              </Button>

              <Text fontSize="11px" color="textSubtle">
                {t('You sign a withdrawal request with your main wallet. The agent wallet is never involved.')}
              </Text>
            </>
          )}
        </ModalBody>
      </Modal>
    </ModalV2>
  )
}
