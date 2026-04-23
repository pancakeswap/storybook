import { useState } from 'react'
import type { ReactNode } from 'react'
import emptyBox from '../assets/brand/empty-box.png'
import '../ui/perps.css'
import './PerpsSimpleV1.css'

type OrderType = 'market' | 'limit'
type Side = 'long' | 'short'
type AccountTab = 'deposit' | 'withdraw'
type BottomTab = 'positions' | 'open-orders' | 'history'
type LevPreset = 50 | 100 | 250 | 500 | 1001

const LEV_PRESETS: LevPreset[] = [50, 100, 250, 500, 1001]
const LEV_MIN = 0
const LEV_MAX = 1001

const NAV_TABS = ['Trade', 'Perps', 'Earn', 'Play', 'AI', 'Dashboard']

const TrendingUpIcon = () => (
  <svg
    className="ps2-side-ico"
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M2.70005 17.3C2.51672 17.1167 2.42505 16.8873 2.42505 16.612C2.42505 16.3373 2.51672 16.1 2.70005 15.9L8.70005 9.85C8.80005 9.76667 8.90838 9.7 9.02505 9.65C9.14171 9.6 9.26671 9.575 9.40005 9.575C9.53338 9.575 9.66272 9.6 9.78805 9.65C9.91272 9.7 10.0167 9.76667 10.1 9.85L13.4 13.15L18.6 8H17C16.7167 8 16.4794 7.90433 16.288 7.713C16.096 7.521 16 7.28333 16 7C16 6.71667 16.096 6.479 16.288 6.287C16.4794 6.09567 16.7167 6 17 6H21C21.2834 6 21.5207 6.09567 21.712 6.287C21.904 6.479 22 6.71667 22 7V11C22 11.2833 21.904 11.5207 21.712 11.712C21.5207 11.904 21.2834 12 21 12C20.7167 12 20.4794 11.904 20.288 11.712C20.096 11.5207 20 11.2833 20 11V9.4L14.1 15.3C14 15.4 13.8917 15.4707 13.775 15.512C13.6584 15.554 13.5334 15.575 13.4 15.575C13.2667 15.575 13.1417 15.554 13.025 15.512C12.9084 15.4707 12.8 15.4 12.7 15.3L9.40005 12L4.07505 17.325C3.89172 17.5083 3.66672 17.6 3.40005 17.6C3.13338 17.6 2.90005 17.5 2.70005 17.3Z"
      fill="currentColor"
    />
  </svg>
)

const BunnyIcon = () => (
  <>
    <svg
      className="ps2-bunny-back"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#ps2-bunny-back-clip)">
        <path d="M9.58803 5.86481C7.72935 6.36284 8.02539 9.03328 8.76388 11.7894C9.50238 14.5455 10.5812 17.0061 12.4399 16.5081C14.2986 16.0101 15.2334 13.0098 14.4949 10.2538C13.7564 7.49766 11.4467 5.36678 9.58803 5.86481Z" fill="#0098A1" />
        <path d="M13 12.9999H9.89844C10.3225 14.3783 10.2142 15.7127 9.43848 16.4911C8.07787 17.8558 5.91305 16.2597 3.89551 14.2362C3.00718 13.3453 2.20188 12.4252 1.69434 11.5585C1.25854 10.9692 1 10.2403 1 9.45108C1.00024 5.8883 3.88839 3.00015 7.45117 2.99991H13V12.9999Z" fill="#1FC7D4" />
        <path d="M6.11115 2.22486C6.79693 3.41267 5.77784 4.33455 4.52793 5.05618C3.27802 5.77782 1.97011 6.19944 1.28433 5.01163C0.598546 3.82382 1.1635 2.11536 2.41341 1.39373C3.66332 0.67209 5.42537 1.03705 6.11115 2.22486Z" fill="#1FC7D4" />
      </g>
      <defs>
        <clipPath id="ps2-bunny-back-clip">
          <rect width="17.3" height="17.3002" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <svg
      className="ps2-bunny-connector"
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="32"
      viewBox="0 0 5 32"
      fill="none"
    >
      <rect width="5" height="10" transform="matrix(-1 0 0 1 5 18)" fill="#1FC7D4" />
    </svg>
    <svg
      className="ps2-bunny-front"
      width="32"
      height="50"
      viewBox="0 0 32 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.5 22.75C21.5316 23.0706 22.5877 23.6902 23.4512 24.5537C25.4684 26.5711 26.1589 29.6363 24.7988 30.9971C23.6131 32.1828 21.8166 31.1265 20.0391 29.5H19.25C19.6789 30.8788 19.5722 32.2149 18.7939 32.9932C17.434 34.3529 15.2704 32.7626 13.2539 30.7461C12.8424 30.3346 12.4503 29.9156 12.0957 29.5H3.5V19.5H20.5V22.75Z" fill="#1FC7D4" />
      <g filter="url(#ps2-bunny-front-shadow)">
        <path d="M18.3877 1.5C20.6586 1.5 22.4999 2.67164 22.5 7.13379C22.5 8.24905 22.3847 9.31189 22.1768 10.2783C25.3091 12.1981 27.4999 15.3491 27.5 18.7695C27.5 24.3293 21.7148 25.5 15.5 25.5C9.28518 25.5 3.5 24.3293 3.5 18.7695C3.50008 15.7911 5.16094 13.0162 7.6582 11.0811C7.3631 10.7389 7.07092 10.4055 6.7832 10.0918C4.31102 7.39601 4.41517 4.62435 6.48828 3.5127C8.56166 2.40114 10.8965 2.55076 13.3848 6.55273C13.7698 7.17196 14.1028 7.79487 14.3838 8.40918C14.7477 8.37547 15.1143 8.35796 15.4824 8.35742C15.4146 7.93774 15.3458 7.52624 15.2695 7.13379C14.6158 3.77111 16.117 1.50023 18.3877 1.5Z" fill="url(#ps2-bunny-front-grad)" />
      </g>
      <path d="M16.2842 17.4463C16.5593 17.4678 16.7655 17.7082 16.7441 17.9834C16.7159 18.3475 16.7793 18.8899 17.0352 19.3213C17.2705 19.7178 17.6844 20.0556 18.4756 20.0557C18.7517 20.0557 18.9756 20.2795 18.9756 20.5557C18.9754 20.8317 18.7516 21.0557 18.4756 21.0557C17.376 21.0556 16.6566 20.5718 16.2363 19.9287C15.8159 20.5715 15.0975 21.0557 13.998 21.0557C13.722 21.0557 13.4982 20.8317 13.498 20.5557C13.498 20.2795 13.7219 20.0557 13.998 20.0557C14.7895 20.0557 15.2031 19.7179 15.4385 19.3213C15.6944 18.8899 15.7577 18.3476 15.7295 17.9834C15.7081 17.7082 15.9143 17.4678 16.1895 17.4463H16.2842ZM11.5 14.5C12.0523 14.5 12.5 14.8954 12.5 16C12.5 17.1046 12.0523 17.5 11.5 17.5C10.9477 17.5 10.5 17.1046 10.5 16C10.5 14.8954 10.9477 14.5 11.5 14.5ZM20.5 14.5C21.0523 14.5 21.5 14.8954 21.5 16C21.5 17.1046 21.0523 17.5 20.5 17.5C19.9477 17.5 19.5 17.1046 19.5 16C19.5 14.8954 19.9477 14.5 20.5 14.5Z" fill="black" />
      <defs>
        <filter id="ps2-bunny-front-shadow" x="1.5" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="0.5" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id="ps2-bunny-front-grad" x1="15.5" y1="1.5" x2="15.5" y2="25.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#53DEE9" />
          <stop offset="1" stopColor="#1FC7D4" />
        </linearGradient>
      </defs>
    </svg>
  </>
)

const TrendingDownIcon = () => (
  <svg
    className="ps2-side-ico"
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M16 18L18.29 15.71L13.41 10.83L9.41 14.83L2 7.41L3.41 6L9.41 12L13.41 8L19.71 14.29L22 12V18H16Z"
      fill="currentColor"
    />
  </svg>
)

export function PerpsSimpleV1() {
  const [orderType, setOrderType] = useState<OrderType>('market')
  const [side, setSide] = useState<Side>('long')
  const [leverage, setLeverage] = useState<number>(0)
  const [stake, setStake] = useState<string>('0')
  const [tpsl, setTpsl] = useState(false)
  const [accountTab, setAccountTab] = useState<AccountTab>('deposit')
  const [bottomTab, setBottomTab] = useState<BottomTab>('positions')
  const [hideOther, setHideOther] = useState(false)

  return (
    <div className="perps-root ps2-root">
      <header className="ps2-nav">
        <div className="ps2-nav-left">
          <div className="ps2-logo">
            <span className="ps2-logo-bunny" aria-hidden>🐰</span>
            <span className="ps2-logo-text">PancakeSwap</span>
            <span className="ps2-logo-chev" aria-hidden>▾</span>
          </div>
          <nav className="ps2-nav-tabs" aria-label="Primary">
            {NAV_TABS.map((label) => (
              <button
                key={label}
                type="button"
                className={`ps2-nav-tab${label === 'Perps' ? ' is-active' : ''}`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
        <div className="ps2-nav-right">
          <div className="ps2-mode" role="tablist" aria-label="Trading mode">
            <button type="button" role="tab" aria-selected className="ps2-mode-btn is-active">
              Simple mode
            </button>
            <button type="button" role="tab" className="ps2-mode-btn">
              Pro
            </button>
          </div>
          <div className="ps2-search">
            <span className="ps2-search-ico" aria-hidden>🔍</span>
            <span className="ps2-search-label">Search</span>
            <kbd className="ps2-kbd">/</kbd>
          </div>
          <button type="button" className="ps2-icon-btn" aria-label="Notifications">🔔</button>
          <button type="button" className="ps2-icon-btn" aria-label="Settings">⚙</button>
          <button type="button" className="ps2-wallet">Connect Wallet</button>
        </div>
      </header>

      <main className="ps2-body">
        <div className="ps2-grid">
          <section className="ps2-left">
            <div className="ps2-ticker p-panel">
              <button type="button" className="ps2-pair">
                <span className="ps2-pair-icon" aria-hidden>
                  <span className="ps2-pair-bnb">B</span>
                </span>
                <span className="ps2-pair-label">BNB - USD</span>
                <span className="ps2-pair-chev" aria-hidden>▾</span>
              </button>
              <div className="ps2-ticker-price">
                <span className="ps2-ticker-num">999,999.999</span>
                <span className="ps2-ticker-chg">▲ 0%</span>
              </div>
              <Stat label="Mark" value="999,999.999" />
              <Stat label="Index" value="999,999.999" />
              <div className="ps2-ticker-stat">
                <div className="ps2-ticker-stat-label">
                  <span>Funding</span>
                  <span>Countdown</span>
                </div>
                <div className="ps2-ticker-stat-value">
                  <span className="ps2-num ps2-pos">0.9999%</span>
                  <span className="ps2-num ps2-sub">00:00:00</span>
                </div>
              </div>
              <Stat
                label="24h Change"
                value={<span className="ps2-num ps2-neg">-99.99 / -99.99%</span>}
              />
              <Stat label="24h Volume" value={<span className="ps2-num">$999,999,999,999.999</span>} />
            </div>

            <div className="ps2-chart p-panel">
              <div className="ps2-chart-placeholder">To be updated</div>
            </div>

            <div className="ps2-bottom">
              <div className="ps2-bottom-head">
                <div className="ps2-bottom-tabs" role="tablist" aria-label="Account tables">
                  <BottomTabBtn current={bottomTab} value="positions" onClick={setBottomTab}>
                    Positions
                  </BottomTabBtn>
                  <BottomTabBtn current={bottomTab} value="open-orders" onClick={setBottomTab}>
                    Open Orders
                  </BottomTabBtn>
                  <BottomTabBtn current={bottomTab} value="history" onClick={setBottomTab}>
                    Transaction History
                  </BottomTabBtn>
                </div>
                <div className="ps2-bottom-actions">
                  <label className="ps2-check">
                    <input
                      type="checkbox"
                      checked={hideOther}
                      onChange={(e) => setHideOther(e.target.checked)}
                    />
                    <span className="ps2-check-box" aria-hidden />
                    <span>Hide Other Symbols</span>
                  </label>
                  <button type="button" className="ps2-close-all">Close All</button>
                </div>
              </div>
              <div className="ps2-bottom-body">
                <div className="ps2-empty">
                  <img src={emptyBox} alt="" className="ps2-empty-icon" width={112} height={56} />
                  <div className="ps2-empty-text">
                    {bottomTab === 'positions' && 'No Positions found'}
                    {bottomTab === 'open-orders' && 'No Open Orders'}
                    {bottomTab === 'history' && 'No Transactions'}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="ps2-right" aria-label="Order panel">
            <div className="ps2-order p-panel">
              <div className="ps2-order-head">
                <span className="ps2-order-title">ORDER TYPE</span>
                <div className="ps2-order-tabs" role="tablist" aria-label="Order type">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={orderType === 'market'}
                    className={`ps2-order-tab${orderType === 'market' ? ' is-active' : ''}`}
                    onClick={() => setOrderType('market')}
                  >
                    Market
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={orderType === 'limit'}
                    className={`ps2-order-tab${orderType === 'limit' ? ' is-active' : ''}`}
                    onClick={() => setOrderType('limit')}
                  >
                    Limit
                  </button>
                </div>
              </div>

              <div className="ps2-side" role="tablist" aria-label="Long or Short">
                <button
                  type="button"
                  role="tab"
                  aria-selected={side === 'long'}
                  className={`ps2-side-btn ps2-side-long${side === 'long' ? ' is-active' : ''}`}
                  onClick={() => setSide('long')}
                >
                  Long
                  <TrendingUpIcon />
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={side === 'short'}
                  className={`ps2-side-btn ps2-side-short${side === 'short' ? ' is-active' : ''}`}
                  onClick={() => setSide('short')}
                >
                  Short
                  <TrendingDownIcon />
                </button>
              </div>

              <label className="ps2-pay">
                <span className="ps2-pay-label">You pay</span>
                <div className="ps2-pay-field">
                  <input
                    type="text"
                    inputMode="decimal"
                    className="ps2-pay-input"
                    value={stake}
                    onChange={(e) => setStake(e.target.value.replace(/[^0-9.]/g, ''))}
                  />
                  <span className="ps2-pay-unit">USDT</span>
                </div>
              </label>

              <div className="ps2-lev">
                <div className="ps2-lev-head">
                  <span className="ps2-lev-label">Leverage</span>
                  <span className="ps2-lev-value">
                    <strong>{leverage}×</strong>
                    <span className="ps2-lev-max"> / {LEV_MAX}× max</span>
                  </span>
                </div>
                <div className="ps2-slider">
                  <input
                    type="range"
                    min={LEV_MIN}
                    max={LEV_MAX}
                    step={1}
                    value={leverage}
                    onChange={(e) => setLeverage(Number(e.target.value))}
                    aria-label="Leverage"
                    className="ps2-slider-input"
                  />
                  <div
                    className="ps2-slider-fill"
                    style={{ width: `${(leverage / LEV_MAX) * 100}%` }}
                  />
                  <span
                    className="ps2-slider-bunny"
                    style={{ left: `calc(${(leverage / LEV_MAX) * 100}% - 18px)` }}
                    aria-hidden
                  >
                    <BunnyIcon />
                  </span>
                </div>
                <div className="ps2-lev-pills">
                  {LEV_PRESETS.map((lev) => {
                    const label = lev === 1001 ? 'MAX' : `${lev}×`
                    const active = leverage === lev
                    return (
                      <button
                        key={lev}
                        type="button"
                        className={`ps2-lev-pill${active ? ' is-active' : ''}`}
                        onClick={() => setLeverage(lev)}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="ps2-tpsl">
                <label className="ps2-tpsl-row">
                  <input
                    type="checkbox"
                    checked={tpsl}
                    onChange={(e) => setTpsl(e.target.checked)}
                  />
                  <span className="ps2-tpsl-check" aria-hidden />
                  <span>Take Profit / Stop Loss</span>
                </label>
                {tpsl && (
                  <div className="ps2-tpsl-fields">
                    <label className="ps2-tpsl-field">
                      <span className="ps2-tpsl-field-label">Take profit price</span>
                      <input type="text" inputMode="decimal" className="ps2-tpsl-input" placeholder="TP" />
                    </label>
                    <label className="ps2-tpsl-field">
                      <span className="ps2-tpsl-field-label">Stop loss price</span>
                      <input type="text" inputMode="decimal" className="ps2-tpsl-input" placeholder="SL Price" />
                    </label>
                  </div>
                )}
              </div>

              <div className="ps2-cta-wrap">
                <button type="button" className="ps2-cta">Connect wallet</button>
              </div>
            </div>

            <div className="ps2-account">
              <div className="ps2-account-tabs" role="tablist" aria-label="Account actions">
                <button
                  type="button"
                  role="tab"
                  aria-selected={accountTab === 'deposit'}
                  className="ps2-account-tab ps2-account-tab-deposit"
                  onClick={() => setAccountTab('deposit')}
                >
                  Deposit
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={accountTab === 'withdraw'}
                  className="ps2-account-tab ps2-account-tab-withdraw"
                  onClick={() => setAccountTab('withdraw')}
                >
                  Withdraw
                </button>
              </div>
              <dl className="ps2-account-stats">
                <Row label="Account Market Ratio" value="0.00%" />
                <Row label="Account Maintenance Margin" value="$---" />
                <Row label="Account Equity" value="$---" />
                <Row label="Unrealized PnL" value="$---" />
              </dl>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="ps2-ticker-stat">
      <span className="ps2-ticker-stat-label">{label}</span>
      <span className="ps2-ticker-stat-value">{value}</span>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="ps2-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  )
}

function BottomTabBtn({
  current,
  value,
  onClick,
  children,
}: {
  current: BottomTab
  value: BottomTab
  onClick: (v: BottomTab) => void
  children: ReactNode
}) {
  const active = current === value
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={`ps2-bottom-tab${active ? ' is-active' : ''}`}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  )
}
