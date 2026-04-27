import { useState } from 'react'
import styled from 'styled-components'
import { SimpleBetPanel, type SimpleBetPanelProps } from '../widgets/SimpleBetPanel'
import { SimpleTickerCard } from '../widgets/SimpleTickerCard'
import { PositionsPanel, type PositionsPanelTab } from '../widgets/PositionsPanel'
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

// Chart placeholder (kept inline — design is decorative)
const ChartCard = styled.div`
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
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, ${({ theme }) => theme.colors.primary} 8%, transparent) 0%,
    transparent 100%
  );
`

const ChartLine = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      180px 80px at 12% 70%,
      color-mix(in srgb, ${({ theme }) => theme.colors.primary} 16%, transparent),
      transparent 70%
    ),
    radial-gradient(
      160px 70px at 38% 35%,
      color-mix(in srgb, ${({ theme }) => theme.colors.success} 14%, transparent),
      transparent 70%
    ),
    radial-gradient(
      220px 90px at 70% 55%,
      color-mix(in srgb, ${({ theme }) => theme.colors.primary} 12%, transparent),
      transparent 70%
    );
  border-bottom: 2px solid color-mix(in srgb, ${({ theme }) => theme.colors.primary} 50%, transparent);
`

const ChartCurrent = styled.div`
  position: absolute;
  right: 12px;
  top: 32%;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const ChartCurrentLine = styled.span`
  flex: 1;
  width: 200px;
  border-top: 1px dashed ${({ theme }) => theme.colors.primary};
`

const ChartCurrentPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.invertedContrast};
  font-size: 16px;
  font-family: 'Kanit', sans-serif;
`

// Positions card frame
const PositionsCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  overflow: hidden;
`

/** Inlined Simple/Pro toggle bar — placeholder; the real switcher
 *  lives in pancake-frontend. */
const ModeBar: React.FC = () => (
  <ModeBarRoot>
    <ModeToggle role="tablist" aria-label="Trading mode">
      <ModeTab type="button" role="tab" aria-selected $active>
        Simple
      </ModeTab>
      <ModeTab type="button" role="tab" aria-selected={false}>
        Pro
      </ModeTab>
    </ModeToggle>
  </ModeBarRoot>
)

// Mock prop bundle — same numbers the prototype CSS used.
const mockBetPanelArgs = (
  bet: string,
  setBet: (s: string) => void,
  leverage: number,
  setLeverage: (n: number) => void,
  onDeposit: () => void,
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
  const [positionsTab, setPositionsTab] = useState<PositionsPanelTab>('positions')
  const [bet, setBet] = useState('10')
  const [leverage, setLeverage] = useState(10)

  return (
    <Root aria-label={`Perpetuals · Simple mode · ${initialPair}`}>
      <ModeBar />

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
              <ChartLine />
              <ChartCurrent>
                <ChartCurrentLine />
                <ChartCurrentPill>640</ChartCurrentPill>
              </ChartCurrent>
            </ChartCanvas>
          </ChartCard>

          <PositionsCard>
            <PositionsPanel
              tab={positionsTab}
              onTabChange={setPositionsTab}
              positions={[]}
              openOrders={[]}
              useMarkPriceForSymbol={() => 0}
              computeLiqPrice={() => 0}
              onClosePosition={() => undefined}
              onEditTpSl={() => undefined}
              onCancelOrder={() => undefined}
            />
          </PositionsCard>
        </LeftCol>

        {/* Right column: UP/DOWN bet panel */}
        <SimpleBetPanel
          {...mockBetPanelArgs(bet, setBet, leverage, setLeverage, () => setDepositOpen(true))}
        />
      </Body>

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
