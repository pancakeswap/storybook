import { useState } from 'react'
import '../ui/perps.css'
import './OrderPanel.css'

export type OrderType = 'market' | 'limit' | 'stop-limit'

export interface OrderParams {
  pair: string
  direction: 'long' | 'short'
  orderType: OrderType
  size: string
  sizeUnit: string
  leverage: number
  marginMode: 'cross' | 'isolated'
  tpPrice: string
  slPrice: string
  reduceOnly: boolean
}

export interface OrderPanelProps {
  /** Available balance shown on the Avbl row. */
  available?: string
  /** Quote currency for the size input. */
  quote?: string
  /** Default leverage label (e.g. "20x"). */
  leverageLabel?: string
  /** Default margin mode label (e.g. "Cross" or "Isolated"). */
  marginModeLabel?: string
  /** Callback fired when Buy/Long is clicked. */
  onPlaceOrder?: (order: OrderParams) => void
}

const ORDER_TYPES: { value: OrderType; label: string }[] = [
  { value: 'market',     label: 'Market' },
  { value: 'limit',      label: 'Limit' },
  { value: 'stop-limit', label: 'Stop Limit' },
]

const SLIDER_MARKS = [0, 25, 50, 75, 100]

export function OrderPanel({
  available = '2.73',
  quote = 'USDT',
  leverageLabel = '20x',
  marginModeLabel = 'Cross',
  onPlaceOrder,
}: OrderPanelProps) {
  const [type, setType] = useState<OrderType>('market')
  const [tpsl, setTpsl] = useState(false)
  const [reduceOnly, setReduceOnly] = useState(false)
  const [size, setSize] = useState('')
  const [sizePct, setSizePct] = useState(0)
  const [tpPrice, setTpPrice] = useState('')
  const [slPrice, setSlPrice] = useState('')

  const fillPct = Math.max(0, Math.min(100, sizePct))

  const handleSide = (direction: 'long' | 'short') => () => {
    onPlaceOrder?.({
      pair: 'BTCUSDT',
      direction,
      orderType: type,
      size,
      sizeUnit: quote,
      leverage: parseInt(leverageLabel, 10) || 20,
      marginMode: marginModeLabel.toLowerCase() === 'isolated' ? 'isolated' : 'cross',
      tpPrice,
      slPrice,
      reduceOnly,
    })
  }

  return (
    <div className="perps-root op-root">
      {/* Cross / Leverage / M */}
      <div className="op-mode-row">
        <button type="button" className="op-mode-btn">
          {marginModeLabel} <span className="op-caret">▾</span>
        </button>
        <button type="button" className="op-mode-btn op-mode-lev">
          {leverageLabel} <span className="op-caret">▾</span>
        </button>
        <button type="button" className="op-mode-m" aria-label="Margin settings">M</button>
      </div>

      {/* Order-type tabs (underlined) */}
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
          </button>
        ))}
      </div>

      {/* Avbl */}
      <div className="op-avbl-row">
        <span className="op-avbl-label">Avbl</span>
        <span className="op-avbl-value">{available} {quote}</span>
      </div>

      {/* Size input */}
      <div className="op-size-input">
        <span className="op-size-label">Size</span>
        <input
          type="text"
          inputMode="decimal"
          className="op-size-field"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder=""
          aria-label="Order size"
        />
        <button type="button" className="op-size-unit">
          {quote} <span className="op-caret">▾</span>
        </button>
      </div>

      {/* Slider */}
      <div className="op-slider" aria-label="Size percent">
        <div className="op-slider-track" />
        <div className="op-slider-fill" style={{ width: `${fillPct}%` }} />
        {SLIDER_MARKS.map((m) => (
          <button
            key={m}
            type="button"
            className="op-slider-stop"
            style={{ left: `calc(${m}% - 3px)` }}
            onClick={() => setSizePct(m)}
            aria-label={`${m}%`}
          />
        ))}
        <div
          className="op-slider-thumb"
          style={{ left: `calc(${fillPct}% - 5px)` }}
          aria-hidden="true"
        />
      </div>

      {/* Checkboxes */}
      <label className="op-check">
        <input
          type="checkbox"
          checked={tpsl}
          onChange={(e) => setTpsl(e.target.checked)}
        />
        TP/SL
      </label>
      <label className="op-check">
        <input
          type="checkbox"
          checked={reduceOnly}
          onChange={(e) => setReduceOnly(e.target.checked)}
        />
        Reduce-Only
      </label>

      {tpsl && (
        <>
          <div className="op-tpsl-input">
            <span className="op-tpsl-prefix p-long">TP</span>
            <input
              type="text"
              inputMode="decimal"
              className="op-size-field"
              placeholder="Price"
              value={tpPrice}
              onChange={(e) => setTpPrice(e.target.value)}
              aria-label="Take profit price"
            />
            <span className="op-tpsl-suffix">%</span>
          </div>
          <div className="op-tpsl-input">
            <span className="op-tpsl-prefix p-short">SL</span>
            <input
              type="text"
              inputMode="decimal"
              className="op-size-field"
              placeholder="Price"
              value={slPrice}
              onChange={(e) => setSlPrice(e.target.value)}
              aria-label="Stop loss price"
            />
            <span className="op-tpsl-suffix">%</span>
          </div>
        </>
      )}

      {/* Buy/Sell */}
      <div className="op-cta-row">
        <button type="button" className="op-cta op-cta-long" onClick={handleSide('long')}>
          Buy/Long
        </button>
        <button type="button" className="op-cta op-cta-short" onClick={handleSide('short')}>
          Sell/Short
        </button>
      </div>

      {/* Liq / Margin / Max stats */}
      <div className="op-stats">
        <div className="op-stat">
          <span className="op-stat-label">Liq.Price</span>
          <span className="op-stat-value p-long">69,298.8</span>
        </div>
        <div className="op-stat">
          <span className="op-stat-label">Liq.Price</span>
          <span className="op-stat-value p-short">81,775.1</span>
        </div>
        <div className="op-stat">
          <span className="op-stat-label">Margin</span>
          <span className="op-stat-value">3.79</span>
        </div>
        <div className="op-stat">
          <span className="op-stat-label">Margin</span>
          <span className="op-stat-value">3.80</span>
        </div>
        <div className="op-stat">
          <span className="op-stat-label">Max <strong>0.00</strong></span>
          <span className="op-stat-value op-stat-muted">{quote}</span>
        </div>
        <div className="op-stat">
          <span className="op-stat-label">Max <strong>151.00</strong></span>
          <span className="op-stat-value op-stat-muted">{quote}</span>
        </div>
        <div className="op-stat op-stat-span">
          <span className="op-stat-label">Fees</span>
        </div>
      </div>
    </div>
  )
}
