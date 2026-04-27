import { useState } from 'react'
import './SimplePerpsPage.css'
import { SimpleBetPanel } from '../widgets/SimpleBetPanel'
import { PositionsPanel, type PositionsPanelTab } from '../widgets/PositionsPanel'
import { DepositModal } from '../widgets/DepositModal'

export interface SimplePerpsPageProps {
  initialPair?: string
}

const TFS = ['1d', '1h', '30m', '15m', '5m'] as const
type Tf = typeof TFS[number]

function Triangle({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M6 2l5 8H1z" />
    </svg>
  )
}

/** Inlined Simple/Pro toggle bar — replaces the legacy Navbar widget. */
function ModeBar() {
  return (
    <header className="sp-modebar">
      <div className="sp-mode-toggle" role="tablist" aria-label="Trading mode">
        <button
          type="button"
          role="tab"
          aria-selected
          className="sp-mode-tab sp-mode-tab--active"
        >
          Simple
        </button>
        <button type="button" role="tab" aria-selected={false} className="sp-mode-tab">
          Pro
        </button>
      </div>
    </header>
  )
}

export function SimplePerpsPage({ initialPair: _initialPair = 'BTC/USD' }: SimplePerpsPageProps) {
  const [tf, setTf] = useState<Tf>('1d')
  const [depositOpen, setDepositOpen] = useState(false)
  const [positionsTab, setPositionsTab] = useState<PositionsPanelTab>('positions')

  return (
    <section className="sp-root" aria-label="Perpetuals · Simple mode">
      <ModeBar />

      <div className="sp-body">
        {/* ── Left column: ticker + chart + positions ──────── */}
        <div className="sp-left">

          {/* Top wide ticker stats card */}
          <div className="sp-ticker-card">
            <div className="sp-ticker-left">
              <span className="sp-ticker-icon">BTC</span>
              <div className="sp-ticker-meta">
                <span className="sp-ticker-name-row">
                  <span className="sp-ticker-name">BTC/USD</span>
                  <span className="sp-ticker-tag">Perp</span>
                </span>
                <span className="sp-ticker-price-row">
                  <span className="sp-ticker-price">78,053.6</span>
                  <span className="sp-ticker-pnl"><Triangle /> 0.93%</span>
                </span>
              </div>
            </div>
            <div className="sp-ticker-stats">
              <div className="sp-stat">
                <span className="sp-stat-label">24h Volume</span>
                <span className="sp-stat-value">$2.13B</span>
              </div>
              <div className="sp-stat">
                <span className="sp-stat-label">Open Interest</span>
                <span className="sp-stat-value">$2.13B</span>
              </div>
              <div className="sp-stat">
                <span className="sp-stat-label">Funding Rate</span>
                <span className="sp-stat-value">+0.010%</span>
              </div>
              <div className="sp-stat">
                <span className="sp-stat-label">Next Funding</span>
                <span className="sp-stat-value">4h 12m</span>
              </div>
            </div>
          </div>

          {/* Chart card */}
          <div className="sp-chart-card">
            <div className="sp-chart-tf" role="tablist">
              {TFS.map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tf === t}
                  className={`sp-chart-tf-btn${tf === t ? ' sp-chart-tf-btn--active' : ''}`}
                  onClick={() => setTf(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="sp-chart-canvas">
              <div className="sp-chart-line" />
              <div className="sp-chart-current">
                <span className="sp-chart-current-line" />
                <span className="sp-chart-current-pill">640</span>
              </div>
            </div>
          </div>

          {/* Positions table */}
          <div className="sp-positions-card">
            <PositionsPanel
              tab={positionsTab}
              onTabChange={setPositionsTab}
              positions={[]}
              openOrders={[]}
              useMarkPriceForSymbol={() => 0}
              computeLiqPrice={() => 0}
              onClosePosition={() => {}}
              onEditTpSl={() => {}}
              onCancelOrder={() => {}}
            />
          </div>
        </div>

        {/* ── Right column: UP/DOWN bet panel ──────────────── */}
        <SimpleBetPanel onDeposit={() => setDepositOpen(true)} />
      </div>

      {/* Deposit modal */}
      <DepositModal isOpen={depositOpen} onClose={() => setDepositOpen(false)} />
    </section>
  )
}
