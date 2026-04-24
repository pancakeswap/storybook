import { useState, useRef, useCallback } from 'react'
import { Checkbox } from '../ui/components'
import { InfoIcon } from '../ui/Icons'
import '../ui/perps.css'
import './OrderPanel.css'
import { MarginModeModal } from './MarginModeModal'
import type { MarginMode } from './MarginModeModal'
import { LeverageModal } from './LeverageModal'

export type OrderType = 'market' | 'limit' | 'stop-limit'
export type OrderDirection = 'buy' | 'sell'

export type TimeInForce = 'GTC' | 'IOC' | 'FOK' | 'PostOnly'
export type TpSlTrigger = 'Mark' | 'Last' | 'Index'

export interface OrderParams {
  pair: string
  direction: OrderDirection
  orderType: OrderType
  price: string
  size: string
  sizeUnit: string
  leverage: number
  marginMode: 'cross' | 'isolated'
  tpPrice: string
  slPrice: string
  reduceOnly: boolean
  tif: TimeInForce
}

export interface OrderPanelProps {
  available?: string
  quote?: string
  leverageLabel?: string
  marginModeLabel?: string
  onPlaceOrder?: (order: OrderParams) => void
}

const ORDER_TYPES: { value: OrderType; label: string }[] = [
  { value: 'market',     label: 'Market'     },
  { value: 'limit',      label: 'Limit'      },
  { value: 'stop-limit', label: 'Stop Limit' },
]

const SLIDER_MARKS = [0, 25, 50, 75, 100]


function AddCircleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: 'var(--pcs-colors-primary)', flexShrink: 0 }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10l5 5 5-5z"/>
    </svg>
  )
}

/** Back body — stays fixed at the left edge of the track */
function BunnyBack() {
  return (
    <svg width="17.3" height="17.3" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#bb-clip)">
        <path d="M9.58803 5.86481C7.72935 6.36284 8.02539 9.03328 8.76388 11.7894C9.50238 14.5455 10.5812 17.0061 12.4399 16.5081C14.2986 16.0101 15.2334 13.0098 14.4949 10.2538C13.7564 7.49766 11.4467 5.36678 9.58803 5.86481Z" fill="#0098A1"/>
        <path d="M13 12.9999H9.89844C10.3225 14.3783 10.2142 15.7127 9.43848 16.4911C8.07787 17.8558 5.91305 16.2597 3.89551 14.2362C3.00718 13.3453 2.20188 12.4252 1.69434 11.5585C1.25854 10.9692 1 10.2403 1 9.45108C1.00024 5.8883 3.88839 3.00015 7.45117 2.99991H13V12.9999Z" fill="#1FC7D4"/>
        <path d="M6.11115 2.22486C6.79693 3.41267 5.77784 4.33455 4.52793 5.05618C3.27802 5.77782 1.97011 6.19944 1.28433 5.01163C0.598546 3.82382 1.1635 2.11536 2.41341 1.39373C3.66332 0.67209 5.42537 1.03705 6.11115 2.22486Z" fill="#1FC7D4"/>
      </g>
      <defs>
        <clipPath id="bb-clip">
          <rect width="17.3" height="17.3002" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

/** Front body — the draggable bunny face that rides the track */
function BunnyFront() {
  return (
    <svg width="32" height="48" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5 22.75C21.5316 23.0706 22.5877 23.6902 23.4512 24.5537C25.4684 26.5711 26.1589 29.6363 24.7988 30.9971C23.6131 32.1828 21.8166 31.1265 20.0391 29.5H19.25C19.6789 30.8788 19.5722 32.2149 18.7939 32.9932C17.434 34.3529 15.2704 32.7626 13.2539 30.7461C12.8424 30.3346 12.4503 29.9156 12.0957 29.5H3.5V19.5H20.5V22.75Z" fill="#1FC7D4"/>
      <g filter="url(#fb-shadow)">
        <path d="M18.3877 1.5C20.6586 1.5 22.4999 2.67164 22.5 7.13379C22.5 8.24905 22.3847 9.31189 22.1768 10.2783C25.3091 12.1981 27.4999 15.3491 27.5 18.7695C27.5 24.3293 21.7148 25.5 15.5 25.5C9.28518 25.5 3.5 24.3293 3.5 18.7695C3.50008 15.7911 5.16094 13.0162 7.6582 11.0811C7.3631 10.7389 7.07092 10.4055 6.7832 10.0918C4.31102 7.39601 4.41517 4.62435 6.48828 3.5127C8.56166 2.40114 10.8965 2.55076 13.3848 6.55273C13.7698 7.17196 14.1028 7.79487 14.3838 8.40918C14.7477 8.37547 15.1143 8.35796 15.4824 8.35742C15.4146 7.93774 15.3458 7.52624 15.2695 7.13379C14.6158 3.77111 16.117 1.50023 18.3877 1.5Z" fill="url(#fb-grad)"/>
      </g>
      <path d="M16.2842 17.4463C16.5593 17.4678 16.7655 17.7082 16.7441 17.9834C16.7159 18.3475 16.7793 18.8899 17.0352 19.3213C17.2705 19.7178 17.6844 20.0556 18.4756 20.0557C18.7517 20.0557 18.9756 20.2795 18.9756 20.5557C18.9754 20.8317 18.7516 21.0557 18.4756 21.0557C17.376 21.0556 16.6566 20.5718 16.2363 19.9287C15.8159 20.5715 15.0975 21.0557 13.998 21.0557C13.722 21.0557 13.4982 20.8317 13.498 20.5557C13.498 20.2795 13.7219 20.0557 13.998 20.0557C14.7895 20.0557 15.2031 19.7179 15.4385 19.3213C15.6944 18.8899 15.7577 18.3476 15.7295 17.9834C15.7081 17.7082 15.9143 17.4678 16.1895 17.4463H16.2842ZM11.5 14.5C12.0523 14.5 12.5 14.8954 12.5 16C12.5 17.1046 12.0523 17.5 11.5 17.5C10.9477 17.5 10.5 17.1046 10.5 16C10.5 14.8954 10.9477 14.5 11.5 14.5ZM20.5 14.5C21.0523 14.5 21.5 14.8954 21.5 16C21.5 17.1046 21.0523 17.5 20.5 17.5C19.9477 17.5 19.5 17.1046 19.5 16C19.5 14.8954 19.9477 14.5 20.5 14.5Z" fill="black"/>
      <defs>
        <filter id="fb-shadow" x="1.5" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="0.5"/>
          <feGaussianBlur stdDeviation="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <linearGradient id="fb-grad" x1="15.5" y1="1.5" x2="15.5" y2="25.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#53DEE9"/>
          <stop offset="1" stopColor="#1FC7D4"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export function OrderPanel({
  available = '2.73',
  quote = 'USDT',
  leverageLabel = '50x',
  marginModeLabel = 'Cross',
  onPlaceOrder,
}: OrderPanelProps) {
  const [type, setType] = useState<OrderType>('market')
  const [direction, setDirection] = useState<OrderDirection>('buy')
  const [marginMode, setMarginMode] = useState<MarginMode>('cross')
  const [showMarginModal, setShowMarginModal] = useState(false)
  const [leverage, setLeverage] = useState(50)
  const [showLeverageModal, setShowLeverageModal] = useState(false)
  const [tpsl, setTpsl] = useState(false)
  const [reduceOnly, setReduceOnly] = useState(false)
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('')
  const [sizePct, setSizePct] = useState(0)
  const [tpPrice, setTpPrice] = useState('')
  const [slPrice, setSlPrice] = useState('')
  const [tif, setTif] = useState<TimeInForce>('GTC')
  const [tifOpen, setTifOpen] = useState(false)
  const [tpslTrigger, setTpslTrigger] = useState<TpSlTrigger>('Mark')
  const [tpslTriggerOpen, setTpslTriggerOpen] = useState(false)
  const [stopTrigger, setStopTrigger] = useState<TpSlTrigger>('Last')
  const [stopTriggerOpen, setStopTriggerOpen] = useState(false)

  const fillPct = Math.max(0, Math.min(100, sizePct))
  // Front body shift: 0px at 0% → -16px at 100% so it stays inside the rail
  const bunnyShift = Math.round(-16 * fillPct / 100)

  // ── Drag logic ────────────────────────────────────────────────
  const sliderRef = useRef<HTMLDivElement>(null)

  const pctFromClientX = useCallback((clientX: number) => {
    if (!sliderRef.current) return 0
    const { left, width } = sliderRef.current.getBoundingClientRect()
    const trackLeft  = left + 10        // 10px inset
    const trackWidth = width - 20       // 10px inset each side
    return Math.max(0, Math.min(100, Math.round(((clientX - trackLeft) / trackWidth) * 100)))
  }, [])

  const handleSliderMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setSizePct(pctFromClientX(e.clientX))
    const onMove = (ev: MouseEvent) => setSizePct(pctFromClientX(ev.clientX))
    const onUp   = () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup',   onUp)
  }, [pctFromClientX])

  const handleSliderTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    setSizePct(pctFromClientX(e.touches[0].clientX))
    const onMove = (ev: TouchEvent) => setSizePct(pctFromClientX(ev.touches[0].clientX))
    const onEnd  = () => { window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd) }
    window.addEventListener('touchmove', onMove)
    window.addEventListener('touchend',  onEnd)
  }, [pctFromClientX])
  const isBuy = direction === 'buy'

  const isLimit = type === 'limit'            // pure Limit tab only
  const isStopLimit = type === 'stop-limit'  // Stop Market/Limit tab
  const hasPrice = type !== 'market'         // Limit + Stop both show a price input

  const handleSubmit = () => {
    onPlaceOrder?.({
      pair: 'BTCUSDT',
      direction,
      orderType: type,
      price,
      size,
      sizeUnit: quote,
      leverage,
      marginMode,
      tpPrice,
      slPrice,
      reduceOnly,
      tif,
    })
  }

  return (
    <div className="perps-root op-root">

      {/* ── Order type tabs ─────────────────────────────── */}
      <div className="op-order-tabs" role="tablist">
        {ORDER_TYPES.map((o) => (
          <button
            key={o.value}
            type="button"
            role="tab"
            aria-selected={type === o.value}
            className={`op-order-tab${type === o.value ? ' active' : ''}`}
            onClick={() => setType(o.value)}
          >
            {o.label}
            {o.value === 'stop-limit' && <ChevronDownIcon />}
          </button>
        ))}
        <button type="button" className="op-info-btn" aria-label="Order type info">
          <InfoIcon size={16} />
        </button>
      </div>

      {/* ── Buy / Sell segmented toggle ──────────────────── */}
      <div className="op-buysell-toggle" role="group" aria-label="Trade direction">
        <button
          type="button"
          className={`op-buysell-btn${isBuy ? ' active-buy' : ''}`}
          onClick={() => setDirection('buy')}
        >
          Buy
        </button>
        <button
          type="button"
          className={`op-buysell-btn${!isBuy ? ' active-sell' : ''}`}
          onClick={() => setDirection('sell')}
        >
          Sell
        </button>
      </div>

      {/* ── Cross / Leverage ────────────────────────────── */}
      <div className="op-mode-row">
        <button
          type="button"
          className="op-mode-btn"
          onClick={() => setShowMarginModal(true)}
        >
          {marginMode === 'cross' ? 'Cross' : 'Isolated'}
        </button>
        <button
          type="button"
          className="op-mode-btn op-mode-lev"
          onClick={() => setShowLeverageModal(true)}
        >
          {leverage}x
        </button>
      </div>

      {/* ── Avbl ────────────────────────────────────────── */}
      <div className="op-avbl-row">
        <span className="op-avbl-label">Avbl</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span className="op-avbl-value">{available} {quote}</span>
          <AddCircleIcon />
        </div>
      </div>

      {/* ── Price / Stop Price input — hidden on Market, sinks to bottom ── */}
      <div className={`op-size-input${!hasPrice ? ' op-input--hidden op-input--sink' : ''}`}>
        <span className="op-size-label">{isStopLimit ? 'Stop Price' : 'Price'}</span>
        <input
          type="text"
          inputMode="decimal"
          className="op-size-field"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="0"
          aria-label={isStopLimit ? 'Stop price' : 'Limit price'}
          tabIndex={hasPrice ? 0 : -1}
        />
        {isStopLimit ? (
          /* Stop Price: trigger type selector (Last / Mark / Index) */
          <div className="op-tif-wrap">
            <button
              type="button"
              className="op-size-unit"
              onClick={() => setStopTriggerOpen((o) => !o)}
              aria-label="Stop price trigger type"
            >
              {stopTrigger} <ChevronDownIcon />
            </button>
            {stopTriggerOpen && (
              <div className="op-dropdown-menu" role="listbox">
                {(['Last', 'Mark', 'Index'] as TpSlTrigger[]).map((v) => (
                  <button
                    key={v}
                    type="button"
                    role="option"
                    aria-selected={stopTrigger === v}
                    className={`op-dropdown-item${stopTrigger === v ? ' active' : ''}`}
                    onClick={() => { setStopTrigger(v); setStopTriggerOpen(false) }}
                  >
                    {v}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Limit Price: currency selector */
          <button type="button" className="op-size-unit" tabIndex={hasPrice ? 0 : -1}>
            USD <ChevronDownIcon />
          </button>
        )}
      </div>

      {/* ── Size input ──────────────────────────────────── */}
      <div className="op-size-input">
        <span className="op-size-label">Size</span>
        <input
          type="text"
          inputMode="decimal"
          className="op-size-field"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="0"
          aria-label="Order size"
        />
        <button type="button" className="op-size-unit">
          {quote} <ChevronDownIcon />
        </button>
      </div>

      {/* ── Slider ──────────────────────────────────────── */}
      <div
        ref={sliderRef}
        className="op-slider"
        aria-label="Size percent"
        onMouseDown={handleSliderMouseDown}
        onTouchStart={handleSliderTouchStart}
      >
        {/* Gray background rail */}
        <div className="op-slider-track" />

        {/* Teal stretch bar — grows from left:10px as bunny is dragged */}
        <div
          className="op-bunny-bar"
          style={{ width: `calc(${fillPct / 100} * (100% - 20px))` }}
          aria-hidden="true"
        />

        {/* Back body — always anchored at 0% (left edge) */}
        <div className="op-bunny-back-anchor" aria-hidden="true">
          <BunnyBack />
        </div>

        {/* Percentage stop dots */}
        {SLIDER_MARKS.map((m) => (
          <button
            key={m}
            type="button"
            className={`op-slider-stop${sizePct >= m ? ' filled' : ''}`}
            style={{ left: `calc(${m / 100} * (100% - 20px) + 6px)` }}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setSizePct(m)}
            aria-label={`${m}%`}
          />
        ))}

        {/* Front body — draggable, moves along the track */}
        <div
          className="op-bunny-front-anchor"
          style={{ left: `calc(${fillPct / 100} * (100% - 20px) + ${bunnyShift}px)` }}
          aria-hidden="true"
        >
          <BunnyFront />
        </div>
      </div>

      {/* ── Reduce Only + GTC ───────────────────────────── */}
      <div className="op-check-row">
        <label className="op-check">
          <Checkbox
            scale="sm"
            checked={reduceOnly}
            onChange={(e) => setReduceOnly(e.target.checked)}
          />
          <span className="op-check-label">Reduce Only</span>
        </label>

        <div className={`op-tif-wrap${!isLimit ? ' op-input--hidden' : ''}`}>
          <button
            type="button"
            className="op-tif-btn"
            onClick={() => isLimit && setTifOpen((o) => !o)}
            aria-label="Time in force"
            tabIndex={isLimit ? 0 : -1}
          >
            {tif} <ChevronDownIcon />
          </button>
          {tifOpen && isLimit && (
            <div className="op-dropdown-menu" role="listbox">
              {(['GTC', 'IOC', 'FOK', 'PostOnly'] as TimeInForce[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  role="option"
                  aria-selected={tif === v}
                  className={`op-dropdown-item${tif === v ? ' active' : ''}`}
                  onClick={() => { setTif(v); setTifOpen(false) }}
                >
                  {v}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── TP / SL + trigger type ───────────────────────── */}
      <div className="op-check-row">
        <label className="op-check">
          <Checkbox
            scale="sm"
            checked={tpsl}
            onChange={(e) => setTpsl(e.target.checked)}
          />
          <span className="op-check-label">Take Profit / Stop Loss</span>
        </label>

        <div className={`op-tif-wrap${!isLimit ? ' op-input--hidden' : ''}`}>
          <button
            type="button"
            className="op-tif-btn"
            onClick={() => isLimit && setTpslTriggerOpen((o) => !o)}
            aria-label="TP/SL trigger price type"
            tabIndex={isLimit ? 0 : -1}
          >
            {tpslTrigger} <ChevronDownIcon />
          </button>
          {tpslTriggerOpen && isLimit && (
            <div className="op-dropdown-menu" role="listbox">
              {(['Mark', 'Last', 'Index'] as TpSlTrigger[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  role="option"
                  aria-selected={tpslTrigger === v}
                  className={`op-dropdown-item${tpslTrigger === v ? ' active' : ''}`}
                  onClick={() => { setTpslTrigger(v); setTpslTriggerOpen(false) }}
                >
                  {v}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── TP/SL inputs — always rendered to lock panel height ── */}
      <div className={`op-tpsl-group${!tpsl ? ' op-tpsl-group--hidden' : ''}`}>
        {/* TP row */}
        <div className="op-tpsl-row">
          <div className="op-tpsl-input">
            <input
              type="text"
              inputMode="decimal"
              className="op-size-field"
              placeholder="TP Price"
              value={tpPrice}
              onChange={(e) => setTpPrice(e.target.value)}
              aria-label="Take profit price"
              tabIndex={tpsl ? 0 : -1}
            />
          </div>
          <button type="button" className="op-tpsl-unit" tabIndex={tpsl ? 0 : -1}>
            Gain <span className="op-tpsl-unit-right">% <ChevronDownIcon /></span>
          </button>
        </div>
        {/* SL row */}
        <div className="op-tpsl-row">
          <div className="op-tpsl-input">
            <input
              type="text"
              inputMode="decimal"
              className="op-size-field"
              placeholder="SL Price"
              value={slPrice}
              onChange={(e) => setSlPrice(e.target.value)}
              aria-label="Stop loss price"
              tabIndex={tpsl ? 0 : -1}
            />
          </div>
          <button type="button" className="op-tpsl-unit" tabIndex={tpsl ? 0 : -1}>
            Loss <span className="op-tpsl-unit-right">% <ChevronDownIcon /></span>
          </button>
        </div>
      </div>

      {/* ── CTA + Stats — pinned to bottom, never moves ─── */}
      <div className="op-bottom-section">
        <button
          type="button"
          className={`op-cta-btn${isBuy ? ' op-cta-buy' : ' op-cta-sell'}`}
          onClick={handleSubmit}
        >
          {isBuy ? 'Buy / Long' : 'Sell / Short'}
        </button>

        <div className="op-stats-list">
          <div className="op-stat-row">
            <span className="op-stat-label">Cost</span>
            <span className="op-stat-value">—</span>
          </div>
          <div className="op-stat-row">
            <span className="op-stat-label">Est. Liq. Price</span>
            <span className="op-stat-value">—</span>
          </div>
          <div className="op-stat-row">
            <button type="button" className="op-stat-label op-stat-link">Fees</button>
            <span className="op-stat-value">0.02% / 0.05%</span>
          </div>
        </div>
      </div>

      {/* ── Margin Mode Modal ────────────────────────────── */}
      <MarginModeModal
        open={showMarginModal}
        pair="BTC-USDT"
        current={marginMode}
        onConfirm={(mode) => setMarginMode(mode)}
        onClose={() => setShowMarginModal(false)}
      />

      {/* ── Leverage Modal ───────────────────────────────── */}
      <LeverageModal
        open={showLeverageModal}
        pair="BTC-USDT"
        current={leverage}
        onConfirm={(lev) => setLeverage(lev)}
        onClose={() => setShowLeverageModal(false)}
      />

    </div>
  )
}
