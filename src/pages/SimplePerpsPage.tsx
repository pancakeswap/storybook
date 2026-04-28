import { useState } from 'react'
import styled from 'styled-components'
import { SimpleBetPanel, type SimpleBetPanelProps } from '../widgets/SimpleBetPanel'
import { SimpleTickerCard } from '../widgets/SimpleTickerCard'
import { DepositModal } from '../widgets/DepositModal'

export interface SimplePerpsPageProps {
  initialPair?: string
}

const TFS = ['1d', '1h', '30m', '15m', '5m'] as const
type Tf = (typeof TFS)[number]

// ── Page styled-components (port of SimplePerpsPage.css) ──────

const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  font-family: 'Kanit', sans-serif;
  color: ${({ theme }) => theme.colors.text};
`

const ModeBarRoot = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  flex-shrink: 0;
`

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 32px;
`

const LogoBunny = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d1884f 0%, #f8c5a3 100%);
  border-radius: 50%;
  font-size: 14px;
`

const ModeToggle = styled.div`
  display: inline-flex;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 999px;
  padding: 0;
`

const ModeTab = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border: 0;
  border-radius: 999px;
  background: ${({ $active, theme }) => ($active ? theme.colors.textSubtle : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.invertedContrast : theme.colors.textSubtle)};
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  min-width: 88px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.12s, color 0.12s;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const ModeBarSpacer = styled.div`
  flex: 1;
`

const ModeBarRight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const DepositPill = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  height: 32px;
  border: 0;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.invertedContrast};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover { filter: brightness(1.05); }
`

const SettingsBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.colors.input}; }
`

const WalletChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 4px 8px 4px 4px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.colors.input}; }
`

const WalletAvatar = styled.span`
  display: inline-flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff8866 0%, #ffd166 100%);
  font-size: 14px;
`

const Body = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 0;
  flex: 1;
`

const LeftCol = styled.div`
  flex: 1;
  min-width: 0;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: radial-gradient(
    circle at 50% 50%,
    ${({ theme }) => theme.colors.card} 0%,
    ${({ theme }) => theme.colors.input} 100%
  );
`

// Chart card
const ChartCard = styled.div`
  width: 1058px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  padding: 16px 24px 24px;
  height: 480px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ChartTfRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`

const ChartTfBtn = styled.button<{ $active: boolean }>`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active }) => ($active ? '13px' : '14px')};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.textSubtle)};
  cursor: pointer;
`

const ChartCanvas = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ChartGrid = styled.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`

const ChartSvgWrap = styled.div`
  position: relative;
  overflow: visible;
`

const ChartYAxis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`

const ChartXAxis = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
  padding-top: 8px;
`

const ChartCurrentPill = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.invertedContrast};
  font-size: 16px;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  pointer-events: none;
`

// Positions card frame
const PositionsCard = styled.div`
  width: 1058px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  overflow: hidden;
`

/* ── Inline simple positions table (Figma-specific layout) ──────── */

const PosTabsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const PosTab = styled.button<{ $active?: boolean }>`
  border: 0;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textSubtle)};
  cursor: pointer;
  padding: 16px 0;
  border-bottom: 2px solid ${({ $active, theme }) => ($active ? theme.colors.text : 'transparent')};
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

const PosTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;
`

const PosTh = styled.div`
  padding: 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

const PosTd = styled.div`
  padding: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

const PosTokenCell = styled(PosTd)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const PosTokenIcon = styled.span`
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #F3BA2F;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`

const PosTokenMeta = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`

const PosTokenSymbol = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const PosTokenSub = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const PosDirectionPill = styled(PosTd)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.success};
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
  margin: 16px;
`

const PosPnl = styled(PosTd)`
  color: ${({ theme }) => theme.colors.success};
  font-weight: 600;
  font-size: 16px;
`

const PosLiqDistance = styled(PosTd)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const PosLiqTrack = styled.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.input};
  overflow: hidden;
  max-width: 94px;
`

const PosLiqFill = styled.div`
  height: 100%;
  width: 90%;
  background: ${({ theme }) => theme.colors.success};
  border-radius: 999px;
`

const PosCloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 16px 12px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.failure};
  cursor: pointer;
  &:hover { filter: brightness(0.95); }
`

/* ── Collateral picker modal (opens when + is clicked on My Perp Fund) ── */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 13, 95, 0.60);
  z-index: 1000;
`

const ModalCard = styled.div`
  display: flex;
  width: 480px;
  min-width: 360px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.08),
    0 4px 8px 0 rgba(0, 0, 0, 0.16);
  padding: 16px;
  gap: 16px;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`

const ModalTitle = styled.h3`
  margin: 0;
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const ModalCloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  border-radius: 999px;
  &:hover { background: ${({ theme }) => theme.colors.input}; }
`

const SearchField = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 12px 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.textSubtle};
`

const SearchInput = styled.input`
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  &::placeholder { color: ${({ theme }) => theme.colors.textSubtle}; }
`

const TokenList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`

const TokenRow = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  padding: 12px 8px;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 12px;
  text-align: left;
  font-family: inherit;
  &:hover { background: ${({ theme }) => theme.colors.input}; }
`

const TokenIcon = styled.span<{ $color: string }>`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
`

const TokenMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`

const TokenLine = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
`

const TokenSymbol = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const TokenName = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const CollateralTag = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.secondary};
  background: rgba(118, 69, 217, 0.10);
  padding: 2px 8px;
  border-radius: 999px;
  width: fit-content;
`

const TokenRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-family: 'Kanit', sans-serif;
`

const TokenAmount = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

const TokenValue = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-variant-numeric: tabular-nums;
`

interface CollateralAsset {
  symbol: string
  name: string
  amount: string
  valueUsd: string
  color: string
}

const COLLATERAL_ASSETS: CollateralAsset[] = [
  { symbol: 'BNB',  name: 'BNB chain native token', amount: '23.62',  valueUsd: '$18,053.62', color: '#F0B90B' },
  { symbol: 'CAKE', name: 'PancakeSwap Token',      amount: '987.98', valueUsd: '$1,390.98',  color: '#23CAD5' },
  { symbol: 'USDC', name: 'Circle USDC',            amount: '1,000',  valueUsd: '$999.98',    color: '#2775CA' },
  { symbol: 'USDT', name: 'Tether USDT',            amount: '20',     valueUsd: '$19.98',     color: '#26A17B' },
]

const CollateralModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  return (
    <Overlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Collateral</ModalTitle>
          <ModalCloseBtn type="button" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </ModalCloseBtn>
        </ModalHeader>
        <SearchField>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <SearchInput type="text" placeholder="Search" />
        </SearchField>
        <TokenList>
          {COLLATERAL_ASSETS.map((a) => (
            <TokenRow key={a.symbol} type="button">
              <TokenIcon $color={a.color}>{a.symbol.slice(0, 1)}</TokenIcon>
              <TokenMain>
                <TokenLine>
                  <TokenSymbol>{a.symbol}</TokenSymbol>
                  <TokenName>{a.name}</TokenName>
                </TokenLine>
                <CollateralTag>COLLATERAL</CollateralTag>
              </TokenMain>
              <TokenRight>
                <TokenAmount>{a.amount}</TokenAmount>
                <TokenValue>{a.valueUsd}</TokenValue>
              </TokenRight>
            </TokenRow>
          ))}
        </TokenList>
      </ModalCard>
    </Overlay>
  )
}

/** Inlined top nav with logo + Simple/Pro toggle + right cluster
 *  (Deposit pill, settings gear, wallet balance chip). The real
 *  switcher lives in pancake-frontend. */
const ModeBar: React.FC<{ onDeposit?: () => void }> = ({ onDeposit }) => (
  <ModeBarRoot>
    <Logo>
      <LogoBunny aria-hidden>🐰</LogoBunny>
      PancakeSwap
    </Logo>
    <ModeToggle role="tablist" aria-label="Trading mode">
      <ModeTab type="button" role="tab" aria-selected $active>
        Simple
      </ModeTab>
      <ModeTab type="button" role="tab" aria-selected={false}>
        Pro
      </ModeTab>
    </ModeToggle>
    <ModeBarSpacer />
    <ModeBarRight>
      <DepositPill type="button" onClick={onDeposit}>
        Deposit
      </DepositPill>
      <SettingsBtn type="button" aria-label="Settings">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19.43 12.98a8.54 8.54 0 0 0 0-1.96l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.45 7.45 0 0 0-1.7-.98l-.38-2.65A.5.5 0 0 0 13.99 2h-4a.5.5 0 0 0-.49.42l-.38 2.65c-.6.24-1.17.58-1.7.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65a8.54 8.54 0 0 0 0 1.96l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.14.24.43.34.69.22l2.49-1c.53.4 1.1.74 1.7.98l.38 2.65a.5.5 0 0 0 .49.42h4a.5.5 0 0 0 .49-.42l.38-2.65a7.45 7.45 0 0 0 1.7-.98l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z" />
        </svg>
      </SettingsBtn>
      <WalletChip type="button">
        <WalletAvatar aria-hidden>🦊</WalletAvatar>
        $6,488.98
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
        </svg>
      </WalletChip>
    </ModeBarRight>
  </ModeBarRoot>
)

// Mock prop bundle — same numbers the prototype CSS used.
const mockBetPanelArgs = (
  bet: string,
  setBet: (s: string) => void,
  leverage: number,
  setLeverage: (n: number) => void,
  onDeposit: () => void,
  onTopUpFund: () => void,
): SimpleBetPanelProps => ({
  symbol: 'BTCUSDT',
  baseAsset: 'BTC',
  pair: 'BTC/USDT',
  price: '78,053.6',
  pricePnlPct: 0.93,
  bet,
  onBetChange: setBet,
  leverage,
  onLeverageChange: setLeverage,
  quoteAsset: 'USDT',
  fundBalanceText: '20.00 USDT',
  onTopUpFund,
  estimatedEntry: '$78,053.60',
  liqIfLong: '$66,092.23 (-2.0%)',
  marginRequired: '$400 USDT',
  openingFee: '$10.00 (0.05%)',
  canSubmit: true,
  onUp: () => undefined,
  onDown: () => undefined,
  onDeposit,
  onWithdraw: () => undefined,
  unrealizedPnl: '$0',
})

export function SimplePerpsPage({ initialPair = 'BTC/USD' }: SimplePerpsPageProps = {}) {
  const [tf, setTf] = useState<Tf>('1d')
  const [depositOpen, setDepositOpen] = useState(false)
  const [collateralOpen, setCollateralOpen] = useState(false)
  const [bet, setBet] = useState('')
  const [leverage, setLeverage] = useState(10)

  return (
    <Root aria-label={`Perpetuals · Simple mode · ${initialPair}`}>
      <ModeBar onDeposit={() => setDepositOpen(true)} />

      <Body>
        {/* Left column: ticker + chart + positions */}
        <LeftCol>
          <SimpleTickerCard
            baseAsset="BTC"
            pair="BTC/USD"
            price="78,053.6"
            pricePnlPct={0.93}
            volume24h="$2.13B"
            openInterest="$2.13B"
            fundingRate="+0.010%"
            nextFunding="4h 12m"
          />

          <ChartCard>
            <ChartTfRow role="tablist">
              {TFS.map((t) => (
                <ChartTfBtn
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tf === t}
                  $active={tf === t}
                  onClick={() => setTf(t)}
                >
                  {t}
                </ChartTfBtn>
              ))}
            </ChartTfRow>
            <ChartCanvas>
              <ChartGrid>
                <ChartSvgWrap>
                  <svg
                    viewBox="0 0 1000 360"
                    preserveAspectRatio="none"
                    style={{ width: '100%', height: '100%', display: 'block' }}
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="simple-chart-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1FC7D4" stopOpacity="0.30" />
                        <stop offset="100%" stopColor="#1FC7D4" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    {/* Filled area below the curve */}
                    <path
                      d="
                        M 0 290
                        C 60 290, 110 280, 170 250
                        C 230 220, 290 175, 360 145
                        C 420 120, 470 110, 510 130
                        C 560 150, 590 195, 660 230
                        C 720 260, 770 280, 830 250
                        C 880 230, 920 195, 960 200
                        L 1000 200
                        L 1000 360
                        L 0 360
                        Z
                      "
                      fill="url(#simple-chart-fill)"
                    />
                    {/* Line on top */}
                    <path
                      d="
                        M 0 290
                        C 60 290, 110 280, 170 250
                        C 230 220, 290 175, 360 145
                        C 420 120, 470 110, 510 130
                        C 560 150, 590 195, 660 230
                        C 720 260, 770 280, 830 250
                        C 880 230, 920 195, 960 200
                        L 1000 200
                      "
                      fill="none"
                      stroke="#1FC7D4"
                      strokeWidth="2"
                    />
                    {/* Dashed current-price line at end */}
                    <line
                      x1="0"
                      y1="200"
                      x2="990"
                      y2="200"
                      stroke="#1FC7D4"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.7"
                    />
                  </svg>
                  <ChartCurrentPill style={{ right: -8, top: 'calc(200/360 * 100% - 14px)' }}>
                    640
                  </ChartCurrentPill>
                </ChartSvgWrap>
                <ChartYAxis aria-hidden>
                  <span>670</span>
                  <span>660</span>
                  <span>650</span>
                  <span>640</span>
                  <span>630</span>
                  <span>620</span>
                  <span>610</span>
                  <span>USD</span>
                </ChartYAxis>
              </ChartGrid>
              <ChartXAxis aria-hidden>
                <span>5:00 AM</span>
                <span>9:00 AM</span>
                <span>1:00 PM</span>
                <span>5:00 PM</span>
                <span>9:00 PM</span>
                <span>1:00 AM</span>
                <span>5:00 AM</span>
                <span>9:00 AM</span>
                <span>1:00 PM</span>
              </ChartXAxis>
            </ChartCanvas>
          </ChartCard>

          <PositionsCard>
            <PosTabsRow role="tablist">
              <PosTab type="button" role="tab" aria-selected $active>
                Positions
              </PosTab>
              <PosTab type="button" role="tab" aria-selected={false}>
                Open Orders
              </PosTab>
              <PosTab type="button" role="tab" aria-selected={false}>
                Transaction history
              </PosTab>
            </PosTabsRow>
            <PosTable role="table">
              <PosTh>Token</PosTh>
              <PosTh>Direction</PosTh>
              <PosTh>Unrealized PnL</PosTh>
              <PosTh>Entry Price</PosTh>
              <PosTh>Liq. Price</PosTh>
              <PosTh>Distance to Liq</PosTh>
              <PosTh />

              <PosTokenCell>
                <PosTokenIcon>B</PosTokenIcon>
                <PosTokenMeta>
                  <PosTokenSymbol>BNB</PosTokenSymbol>
                  <PosTokenSub>BNB CHAIN</PosTokenSub>
                </PosTokenMeta>
              </PosTokenCell>
              <PosDirectionPill>
                ↑ Up/Long
              </PosDirectionPill>
              <PosPnl>+$10.09</PosPnl>
              <PosTd>$649.98</PosTd>
              <PosTd>$637.00</PosTd>
              <PosLiqDistance>
                <PosLiqTrack>
                  <PosLiqFill />
                </PosLiqTrack>
                <span>Safe</span>
              </PosLiqDistance>
              <PosCloseBtn type="button" aria-label="Close position">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </PosCloseBtn>
            </PosTable>
          </PositionsCard>
        </LeftCol>

        {/* Right column: UP/DOWN bet panel */}
        <SimpleBetPanel
          {...mockBetPanelArgs(
            bet,
            setBet,
            leverage,
            setLeverage,
            () => setDepositOpen(true),
            () => setCollateralOpen(true),
          )}
        />
      </Body>

      <CollateralModal isOpen={collateralOpen} onClose={() => setCollateralOpen(false)} />

      <DepositModal
        isOpen={depositOpen}
        onClose={() => setDepositOpen(false)}
        step="select"
        evmAddress="0x1234…abcd"
        assets={[]}
        onSelectAsset={() => undefined}
        amount=""
        onAmountChange={() => undefined}
        onPercentClick={() => undefined}
        submitState="idle"
        canContinue={false}
        onContinue={() => undefined}
        onBack={() => setDepositOpen(false)}
      />
    </Root>
  )
}
