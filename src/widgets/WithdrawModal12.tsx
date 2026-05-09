import React from 'react'
import { styled } from 'styled-components'
import { ModalV2 } from '../primitives/Modal/ModalV2'

/**
 * Compact descriptor for one withdrawable token in the perps account.
 * The widget is presentation-only — the consumer fetches balances and
 * pre-formats every display string.
 */
export interface WithdrawAssetRow {
  /** Stable id, usually the asset symbol (e.g. "BNB"). */
  id: string
  /** Display symbol (e.g. "BNB"). */
  symbol: string
  /** Network label, e.g. "BNB Chain" — shown as the asset's subtitle. */
  chainLabel?: string
  /** Solid color for the small chain badge over the token icon. */
  chainBadgeColor?: string
  /** First letter / emoji to render inside the chain badge. */
  chainBadgeGlyph?: string
  /** Pre-formatted balance, e.g. "999,999.99". */
  balanceText: string
  /** Pre-formatted USD value, e.g. "$999,999.99". */
  usdText: string
  /** Optional fallback color for the token-icon letter chip. */
  iconColor?: string
}

export interface WithdrawModal12Props {
  isOpen: boolean
  onClose: () => void
  /** Pre-formatted total perps balance, e.g. "$1,000.98". */
  perpsBalanceText: string
  /** Pre-truncated EOA destination shown in the helper line, e.g. "0x...1234". */
  destinationAddress?: string
  /** Withdrawable assets returned from the perps account. */
  assets: readonly WithdrawAssetRow[]
  /**
   * Currently selected asset id. When undefined the modal renders the
   * asset list; when set it renders the amount-input view for that token.
   * Consumer drives the transition by reacting to onSelectAsset.
   */
  selectedAssetId?: string
  onSelectAsset: (id: string) => void
  /** Controlled amount input. */
  amount: string
  onAmountChange: (value: string) => void
  /** Pre-formatted USD equivalent of the entered amount, e.g. "0.0". */
  amountUsdText?: string
  /** Submit. Consumer gates on a connected wallet / signed-in state. */
  onWithdraw: () => void
  /** Optional token-icon renderer. Defaults to a letter chip. */
  renderTokenIcon?: (asset: WithdrawAssetRow) => React.ReactNode
}

// ── Default per-symbol icon palette (visual fallback only). ───────

const DEFAULT_ICON_COLORS: Record<string, string> = {
  BNB: '#F0B90B',
  BTC: '#F7931A',
  ETH: '#627EEA',
  USDC: '#2775CA',
  USDT: '#26A17B',
  CAKE: '#23CAD5',
}

const defaultIconColor = (symbol: string) =>
  DEFAULT_ICON_COLORS[symbol.toUpperCase()] ?? '#7A6EAA'

// ── Styled ────────────────────────────────────────────────────────

/* Sibling of ModalV2's Overlay (fixed, z-index 20). The Overlay is the
   dim layer; this Backdrop holds the actual modal card. We promote it
   into its own positioned stacking layer so the card paints above the
   overlay rather than peeking through its translucency. */
const Backdrop = styled.div`
  position: relative;
  z-index: 21;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 48px 16px;
  min-height: 100%;

  /* On mobile + tablet anchor the card to the bottom of the viewport
     so it reads as a bottom-sheet and matches the rest of the app's
     modal treatment. The 48px frame collapses; the sheet hugs the
     bottom edge. width: 100% is required because the parent
     StyledModalWrapper centers children with align-items: center, so
     without an explicit width Backdrop would shrink to fit the Card. */
  @media (max-width: 967.98px) {
    width: 100%;
    align-items: flex-end;
    padding: 0;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 466px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 24px;

  /* Bottom-sheet treatment on mobile + tablet — full-width, top-only
     rounded corners, 28px reserved at the top for the grabber pill,
     matching the rest of the modal system. */
  @media (max-width: 967.98px) {
    max-width: none;
    border-radius: 32px 32px 0 0;
    border-bottom: 0;
    border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
    position: relative;
    padding: 44px 16px 16px;

    &::before {
      content: '';
      position: absolute;
      top: 16px;
      left: calc(50% - 18px);
      width: 36px;
      height: 4px;
      border-radius: 9999px;
      background: ${({ theme }) => theme.colors.v2Inverse};
      opacity: 0.1;
      pointer-events: none;
    }
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h3`
  margin: 0;
  font-family: Kanit;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text};
`

const CloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  /* On mobile + tablet the grabber pill is the dismissal cue — drop
     the redundant X so the header reads as just title + sheet. */
  @media (max-width: 967.98px) {
    display: none;
  }
`

const CloseIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
)

// ── Perps balance card (select view) ────────────────────────────

const BalanceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  padding: 16px;
  background: ${({ theme }) => theme.colors.cardSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
`

const BalanceMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: Kanit;
  font-size: 12px;
`

const BalanceLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`

const BalanceSubtle = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
`

const BalanceValue = styled.span`
  font-family: Kanit;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

// ── Asset list (select view) ────────────────────────────────────

const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-self: stretch;
  font-family: Kanit;
  font-size: 12px;
`

const SectionTitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`

const SectionHelp = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
`

const DestinationLine = styled.p`
  margin: 0;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const AssetList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`

const AssetRow = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  padding: 12px;
  border: 0;
  background: transparent;
  border-radius: 16px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;

  &:hover {
    background: ${({ theme }) => theme.colors.cardSecondary};
  }
`

const AssetLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`

const AssetMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`

const AssetSymbol = styled.span`
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.text};
`

const AssetSub = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  & > strong {
    font-weight: 600;
  }
`

const AssetUsd = styled.span`
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

// ── Token glyph + chain badge (used by both list rows and amount field) ──

const TokenStack = styled.span`
  position: relative;
  display: inline-flex;
  width: 56px;
  height: 40px;
  flex-shrink: 0;
`

/* eslint-disable no-restricted-syntax -- on colored bg, contrast guarantee */
const TokenGlyph = styled.span<{ $color: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: Kanit;
  font-weight: 700;
  font-size: 14px;
`

const ChainBadge = styled.span<{ $color: string }>`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  border-radius: 5.333px;
  background: ${({ $color }) => $color};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Kanit;
  font-size: 9px;
  font-weight: 700;
`
/* eslint-enable no-restricted-syntax */

// ── Amount field (input view) ───────────────────────────────────

const Field = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  height: 80px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 24px;
  box-shadow: inset 0 2px 0 0 rgba(0, 0, 0, 0.06);
  transition: border-color 0.12s ease, box-shadow 0.12s ease;

  /* Focus state — emphasise the border + drop the inset shadow when the
     amount input inside the field is focused. */
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.secondary};
  }
`

const TokenSelectChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px 4px 4px;
  border-radius: 16px;
  flex-shrink: 0;
`

const TokenSelectMeta = styled.div`
  display: flex;
  flex-direction: column;
`

const TokenSelectSymbol = styled.span`
  font-family: Kanit;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text};
`

const TokenSelectChain = styled.span`
  font-family: Kanit;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const AmountStack = styled.div`
  flex: 1 0 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const AmountInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: Kanit;
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.24px;
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const AmountUsd = styled.span`
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.textSubtle};
`

// ── Withdraw button ─────────────────────────────────────────────

const WithdrawBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  height: 48px;
  padding: 11px 12px 13px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.invertedContrast};
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  transition: filter 0.12s;

  &:hover:not(:disabled) {
    filter: brightness(1.08);
  }
  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.backgroundDisabled};
    color: ${({ theme }) => theme.colors.textDisabled};
    border-bottom-color: transparent;
  }
`

// ── Component ───────────────────────────────────────────────────

const renderDefaultIcon = (asset: WithdrawAssetRow) => (
  <TokenStack>
    <TokenGlyph $color={asset.iconColor ?? defaultIconColor(asset.symbol)}>
      {asset.symbol.slice(0, 1)}
    </TokenGlyph>
    {asset.chainBadgeColor && (
      <ChainBadge $color={asset.chainBadgeColor}>
        {asset.chainBadgeGlyph ?? ''}
      </ChainBadge>
    )}
  </TokenStack>
)

export const WithdrawModal12: React.FC<WithdrawModal12Props> = ({
  isOpen,
  onClose,
  perpsBalanceText,
  destinationAddress,
  assets,
  selectedAssetId,
  onSelectAsset,
  amount,
  onAmountChange,
  amountUsdText,
  onWithdraw,
  renderTokenIcon,
}) => {
  const selectedAsset = selectedAssetId
    ? assets.find((a) => a.id === selectedAssetId)
    : undefined
  const tokenIcon = (asset: WithdrawAssetRow) =>
    renderTokenIcon ? renderTokenIcon(asset) : renderDefaultIcon(asset)

  /* Strip thousand separators / currency chars before parsing so the
     button stays consistent whether the consumer feeds raw "999999.5"
     or display-formatted "999,999.5". */
  const amountValid = Number(amount.replace(/[^\d.-]/g, '')) > 0

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Backdrop>
        <Card role="dialog" aria-modal="true" aria-label="Withdraw from your perps account">
          <Header>
            <Title>Withdraw from Your Perps Account</Title>
            <CloseBtn type="button" aria-label="Close" onClick={onClose}>
              <CloseIcon />
            </CloseBtn>
          </Header>

          {!selectedAsset && (
            <>
              <BalanceCard>
                <BalanceMeta>
                  <BalanceLabel>Perps Balance</BalanceLabel>
                  <BalanceSubtle>In Aster Contract</BalanceSubtle>
                </BalanceMeta>
                <BalanceValue>{perpsBalanceText}</BalanceValue>
              </BalanceCard>

              <SectionHeading>
                <SectionTitle>Select an asset</SectionTitle>
                <SectionHelp>
                  Pick an asset to withdraw from your Aster perp account
                </SectionHelp>
              </SectionHeading>

              {destinationAddress && (
                <DestinationLine>
                  Funds will be send back to your EOA wallet ({destinationAddress})
                </DestinationLine>
              )}

              <AssetList>
                {assets.map((asset) => (
                  <AssetRow
                    key={asset.id}
                    type="button"
                    onClick={() => onSelectAsset(asset.id)}
                  >
                    <AssetLeft>
                      {tokenIcon(asset)}
                      <AssetMeta>
                        <AssetSymbol>{asset.symbol}</AssetSymbol>
                        <AssetSub>
                          <span>{asset.balanceText}</span>
                          <strong>{asset.symbol}</strong>
                        </AssetSub>
                      </AssetMeta>
                    </AssetLeft>
                    <AssetUsd>{asset.usdText}</AssetUsd>
                  </AssetRow>
                ))}
              </AssetList>
            </>
          )}

          {selectedAsset && (
            <>
              <Field>
                <TokenSelectChip>
                  {tokenIcon(selectedAsset)}
                  <TokenSelectMeta>
                    <TokenSelectSymbol>{selectedAsset.symbol}</TokenSelectSymbol>
                    {selectedAsset.chainLabel && (
                      <TokenSelectChain>{selectedAsset.chainLabel}</TokenSelectChain>
                    )}
                  </TokenSelectMeta>
                </TokenSelectChip>
                <AmountStack>
                  <AmountInput
                    type="text"
                    inputMode="decimal"
                    placeholder="0.0"
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    aria-label={`Amount to withdraw in ${selectedAsset.symbol}`}
                  />
                  <AmountUsd>~{amountUsdText ?? '0.0'} USD</AmountUsd>
                </AmountStack>
              </Field>
              <WithdrawBtn type="button" disabled={!amountValid} onClick={onWithdraw}>
                Withdraw
              </WithdrawBtn>
            </>
          )}
        </Card>
      </Backdrop>
    </ModalV2>
  )
}
