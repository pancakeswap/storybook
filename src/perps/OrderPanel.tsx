import { useState } from 'react'
import '../ui/perps.css'
import { Button, Tabs, Input, Slider } from '../ui'

const PAIRS = ['CAKE/USDT', 'BTC/USDT', 'ETH/USDT']

export interface OrderPanelProps {
  availableMargin?: string
  hasBalance?: boolean
  onPlaceOrder?: (order: OrderParams) => void
  onDepositRequest?: () => void
}

export interface OrderParams {
  pair: string
  direction: 'long' | 'short'
  orderType: 'market' | 'limit'
  limitPrice: string
  margin: string
  leverage: number
  tpPrice: string
  slPrice: string
}

const ORACLE_PRICES: Record<string, number> = {
  'CAKE/USDT': 3.48,
  'BTC/USDT':  65420.0,
  'ETH/USDT':  3180.0,
}

export function OrderPanel({ availableMargin = '0.00', hasBalance = true, onPlaceOrder, onDepositRequest }: OrderPanelProps) {
  const [pair, setPair]           = useState('CAKE/USDT')
  const [showPairs, setShowPairs] = useState(false)
  const [direction, setDirection] = useState<'long' | 'short'>('long')
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market')
  const [limitPrice, setLimitPrice] = useState('')
  const [margin, setMargin]       = useState('')
  const [leverage, setLeverage]   = useState(10)
  const [tpSlOpen, setTpSlOpen]   = useState(false)
  const [tpPrice, setTpPrice]     = useState('')
  const [slPrice, setSlPrice]     = useState('')

  const oracle      = ORACLE_PRICES[pair] ?? 1
  const rawMargin   = parseFloat(margin) || 0
  const rawAvail    = parseFloat(availableMargin.replace(/,/g, '')) || 0
  const entryPrice  = orderType === 'limit' && limitPrice ? parseFloat(limitPrice) : oracle
  const posSize     = rawMargin * leverage
  const liqMult     = direction === 'long' ? 1 - 1 / leverage * 0.9 : 1 + 1 / leverage * 0.9
  const liqPrice    = entryPrice * liqMult
  const isValid     = rawMargin > 0 && rawMargin <= rawAvail

  const fmt = (n: number, dec = 4) => n.toLocaleString(undefined, { minimumFractionDigits: dec <= 2 ? dec : 0, maximumFractionDigits: dec })

  return (
    <div className="perps-root" style={{ padding: 0 }}>
      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* Pair selector */}
        <div style={{ position: 'relative' }}>
          <div
            className="p-pair-selector"
            onClick={() => setShowPairs((v) => !v)}
            role="button" tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setShowPairs((v) => !v)}
          >
            <span className="p-pair-name">{pair}</span>
            <span style={{
              background: 'var(--p-primary-dim)', color: 'var(--p-primary)',
              fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 4, letterSpacing: '0.04em',
            }}>PERP</span>
            <span className="p-chevron" style={{ marginLeft: 'auto' }}>▼</span>
          </div>
          {showPairs && (
            <div className="p-dropdown" style={{ top: '110%', left: 0, right: 0 }}>
              {PAIRS.map((p) => (
                <button key={p} className={`p-dropdown-item${p === pair ? ' active' : ''}`}
                  onClick={() => { setPair(p); setShowPairs(false) }}>
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Oracle price strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0' }}>
          <span className="p-label">Oracle Price</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--p-primary)' }}>
            ${oracle >= 100 ? oracle.toLocaleString(undefined, { maximumFractionDigits: 2 }) : oracle.toFixed(4)}
          </span>
        </div>

        {/* Long / Short */}
        <div className="p-direction-toggle">
          <button className={`p-direction-btn long${direction === 'long' ? ' active' : ''}`}
            onClick={() => setDirection('long')}>▲ Long</button>
          <button className={`p-direction-btn short${direction === 'short' ? ' active' : ''}`}
            onClick={() => setDirection('short')}>▼ Short</button>
        </div>

        {/* Market / Limit */}
        <Tabs
          items={[
            { value: 'market', label: 'Market' },
            { value: 'limit',  label: 'Limit' },
          ]}
          value={orderType}
          onChange={v => setOrderType(v as 'market' | 'limit')}
        />

        {/* Limit price */}
        {orderType === 'limit' && (
          <Input
            label="Limit Price"
            prefix="$"
            height={44}
            inputProps={{
              type: 'number',
              placeholder: String(oracle),
              value: limitPrice,
              onChange: (e) => setLimitPrice(e.target.value),
              style: { fontSize: 14 },
            }}
          />
        )}

        {/* Collateral */}
        <Input
          label="Collateral"
          labelRight={
            <>Available: <strong style={{ color: 'var(--pcs-colors-text)' }}>${availableMargin}</strong></>
          }
          prefix="USDC"
          actions={[
            { label: '½', onClick: () => setMargin((rawAvail / 2).toFixed(2)) },
            { label: 'MAX', onClick: () => setMargin(rawAvail.toFixed(2)) },
          ]}
          inputProps={{
            type: 'number',
            placeholder: '0.00',
            value: margin,
            onChange: (e) => setMargin(e.target.value),
          }}
        />

        {/* Leverage */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <p className="p-label">Leverage</p>
            <div style={{
              background: 'var(--p-card-alt)', border: '1px solid var(--p-border)',
              borderRadius: 6, padding: '2px 10px', fontSize: 12, fontWeight: 700,
              color: direction === 'long' ? 'var(--p-long)' : 'var(--p-short)',
              letterSpacing: '0.02em',
            }}>
              {leverage}×
            </div>
          </div>
          <Slider
            min={1}
            max={100}
            value={leverage}
            onChange={setLeverage}
            formatValue={v => `${v}×`}
            marks={[
              { value: 1,   label: '1×' },
              { value: 5,   label: '5×' },
              { value: 10,  label: '10×' },
              { value: 25,  label: '25×' },
              { value: 50,  label: '50×' },
              { value: 100, label: '100×' },
            ]}
          />
        </div>

        {/* Position summary */}
        <div style={{ background: 'var(--p-card-alt)', borderRadius: 'var(--p-radius-md)', padding: '10px 12px' }}>
          {([
            ['Entry Price',    rawMargin > 0 ? `$${fmt(entryPrice, oracle >= 100 ? 2 : 4)}` : '—'],
            ['Position Size',  rawMargin > 0 ? `$${fmt(posSize, 2)}` : '—'],
            ['Liq. Price',     rawMargin > 0 ? `$${fmt(liqPrice, oracle >= 100 ? 2 : 4)}` : '—'],
            ['Open Fee',       rawMargin > 0 ? `$${(posSize * 0.001).toFixed(4)}` : '—'],
            ['Borrow Rate',    '0.012% / hr'],
          ] as [string, string][]).map(([label, value], i, arr) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '5px 0',
              borderBottom: i < arr.length - 1 ? '1px solid var(--p-border)' : 'none',
            }}>
              <span className="p-label">{label}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--p-text)' }}>{value}</span>
            </div>
          ))}
        </div>

        {/* TP/SL collapsible */}
        <div>
          <div className="p-collapsible-trigger"
            onClick={() => setTpSlOpen((v) => !v)}
            role="button" tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setTpSlOpen((v) => !v)}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: 'var(--p-long)', fontSize: 10 }}>▲</span>
              <span style={{ color: 'var(--p-short)', fontSize: 10 }}>▼</span>
              Take Profit / Stop Loss
            </span>
            <span style={{ fontSize: 10 }}>{tpSlOpen ? '▲' : '▼'}</span>
          </div>
          {tpSlOpen && (
            <div className="p-collapsible-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Take Profit', color: 'var(--p-long)',  val: tpPrice, set: setTpPrice },
                  { label: 'Stop Loss',   color: 'var(--p-short)', val: slPrice, set: setSlPrice },
                ].map(({ label, color, val, set }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color, width: 80, flexShrink: 0 }}>{label}</span>
                    <div className="p-input-wrap" style={{ height: 38, flex: 1 }}>
                      <span className="p-label">$</span>
                      <input className="p-input-field" type="number" placeholder="Price"
                        value={val} onChange={(e) => set(e.target.value)} style={{ fontSize: 13 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <hr className="p-divider" style={{ margin: '2px 0' }} />

        {/* CTA */}
        {!hasBalance ? (
          <Button variant="primary" size="lg" fullWidth onClick={onDepositRequest}>
            Deposit to Trade
          </Button>
        ) : (
          <Button
            variant={direction}
            size="lg"
            fullWidth
            disabled={!isValid}
            onClick={() => isValid && onPlaceOrder?.({ pair, direction, orderType, limitPrice, margin, leverage, tpPrice, slPrice })}
          >
            {direction === 'long' ? '▲ Place Long Order' : '▼ Place Short Order'}
          </Button>
        )}

        {hasBalance && rawMargin > rawAvail && rawMargin > 0 && (
          <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--p-short)', margin: 0 }}>
            Insufficient margin
          </p>
        )}
      </div>
    </div>
  )
}
