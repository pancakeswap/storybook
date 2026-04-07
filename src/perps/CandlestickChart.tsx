import { useEffect, useRef, useState } from 'react'
import { createChart, CandlestickSeries, type IChartApi, type CandlestickData, type Time } from 'lightweight-charts'
import { useTheme } from '../ui/ThemeProvider'
import { chartTokens } from '../ui/theme'
import '../ui/perps.css'

const PAIRS = ['CAKE/USDT', 'BTC/USDT', 'ETH/USDT']
const TIMEFRAMES = ['1m', '5m', '15m', '1h', '4h', '1d', '1w']

function generateCandles(basePrice: number, count = 80): CandlestickData<Time>[] {
  const candles: CandlestickData<Time>[] = []
  let price = basePrice
  const now = Math.floor(Date.now() / 1000)
  for (let i = count; i >= 0; i--) {
    const open = price
    const change = (Math.random() - 0.48) * basePrice * 0.018
    const close = Math.max(open + change, basePrice * 0.5)
    const high = Math.max(open, close) * (1 + Math.random() * 0.004)
    const low  = Math.min(open, close) * (1 - Math.random() * 0.004)
    price = close
    candles.push({
      time: (now - i * 3600) as Time,
      open:  parseFloat(open.toFixed(4)),
      high:  parseFloat(high.toFixed(4)),
      low:   parseFloat(low.toFixed(4)),
      close: parseFloat(close.toFixed(4)),
    })
  }
  return candles
}

const BASE_PRICES: Record<string, number> = {
  'CAKE/USDT': 3.48,
  'BTC/USDT':  65420,
  'ETH/USDT':  3180,
}

const MARKET_DATA: Record<string, { change: string; positive: boolean; high: string; low: string; volume: string; oi: string }> = {
  'CAKE/USDT': { change: '+4.62%', positive: true,  high: '3.5970', low: '3.3180', volume: '$24.8M',   oi: '$8.2M'   },
  'BTC/USDT':  { change: '-1.23%', positive: false, high: '67,240', low: '64,880', volume: '$1.82B',   oi: '$542M'   },
  'ETH/USDT':  { change: '+2.10%', positive: true,  high: '3,286',  low: '3,112',  volume: '$486M',    oi: '$218M'   },
}

export interface CandlestickChartProps {
  initialPair?: string
  initialTimeframe?: string
  height?: number
}

export function CandlestickChart({
  initialPair = 'CAKE/USDT',
  initialTimeframe = '1h',
  height = 380,
}: CandlestickChartProps) {
  const [pair, setPair] = useState(initialPair)
  const [showPairs, setShowPairs] = useState(false)
  const [timeframe, setTimeframe] = useState(initialTimeframe)
  const { theme } = useTheme()

  const chartContainerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<IChartApi | null>(null)
  const seriesRef = useRef<ReturnType<IChartApi['addSeries']> | null>(null)

  const oracle = BASE_PRICES[pair] ?? 1
  const mkt = MARKET_DATA[pair]
  const fmtPrice = (p: number) => p >= 1000
    ? p.toLocaleString(undefined, { maximumFractionDigits: 2 })
    : p.toFixed(4)

  useEffect(() => {
    if (!chartContainerRef.current) return
    const ct = chartTokens[theme]
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height,
      layout: {
        background: { color: ct.bg },
        textColor: ct.textColor,
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 11,
      },
      grid: {
        vertLines: { color: ct.gridLine },
        horzLines: { color: ct.gridLine },
      },
      crosshair: {
        vertLine: { color: ct.crosshair, width: 1, style: 1 },
        horzLine: { color: ct.crosshair, width: 1, style: 1 },
      },
      rightPriceScale: { borderColor: ct.border },
      timeScale: { borderColor: ct.border, timeVisible: true, secondsVisible: false },
    })
    const series = chart.addSeries(CandlestickSeries, {
      upColor:       ct.long,
      downColor:     ct.short,
      borderVisible: false,
      wickUpColor:   ct.long,
      wickDownColor: ct.short,
    })
    series.setData(generateCandles(BASE_PRICES[pair] ?? 1))
    chart.timeScale().fitContent()
    chartRef.current  = chart
    seriesRef.current = series
    const ro = new ResizeObserver((entries) => {
      if (entries[0]) chart.resize(entries[0].contentRect.width, height)
    })
    ro.observe(chartContainerRef.current)
    return () => { ro.disconnect(); chart.remove(); chartRef.current = null; seriesRef.current = null }
  }, [theme, height])

  useEffect(() => {
    if (!seriesRef.current) return
    seriesRef.current.setData(generateCandles(BASE_PRICES[pair] ?? 1))
    chartRef.current?.timeScale().fitContent()
  }, [pair, timeframe])

  return (
    <div className="perps-root" style={{ padding: 0 }}>
      <div className="p-panel" style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}>

        {/* ── Market info bar ───────────────────────────────── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          padding: '0 12px',
          height: 52,
          borderBottom: '1px solid var(--p-border)',
          overflowX: 'auto',
        }}>
          {/* Pair selector */}
          <div style={{ position: 'relative', marginRight: 20, flexShrink: 0 }}>
            <div
              className="p-pair-selector"
              onClick={() => setShowPairs((v) => !v)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setShowPairs((v) => !v)}
              style={{ border: 'none', background: 'transparent', padding: '4px 6px', gap: 6 }}
            >
              <span className="p-pair-name" style={{ fontSize: 16 }}>{pair}</span>
              <span className="p-chevron" style={{ fontSize: 8 }}>▼</span>
            </div>
            {showPairs && (
              <div className="p-dropdown" style={{ top: '120%', left: 0 }}>
                {PAIRS.map((p) => (
                  <button key={p} className={`p-dropdown-item${p === pair ? ' active' : ''}`}
                    onClick={() => { setPair(p); setShowPairs(false) }}>
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Separator */}
          <div style={{ width: 1, height: 28, background: 'var(--p-border)', marginRight: 20, flexShrink: 0 }} />

          {/* Oracle price — most prominent */}
          <div style={{ marginRight: 24, flexShrink: 0 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--p-text)', lineHeight: 1, letterSpacing: '-0.5px' }}>
              ${fmtPrice(oracle)}
            </div>
            <div style={{ fontSize: 10, color: 'var(--p-text-muted)', marginTop: 2 }}>Oracle</div>
          </div>

          {/* Stats row */}
          {[
            { label: '24h Change', value: mkt.change, color: mkt.positive ? 'var(--p-long)' : 'var(--p-short)' },
            { label: '24h High',   value: mkt.high,   color: 'var(--p-long)'  },
            { label: '24h Low',    value: mkt.low,    color: 'var(--p-short)' },
            { label: '24h Volume', value: mkt.volume, color: 'var(--p-text)'  },
            { label: 'Open Interest', value: mkt.oi,  color: 'var(--p-text)'  },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ marginRight: 24, flexShrink: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color, lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 10, color: 'var(--p-text-muted)', marginTop: 2 }}>{label}</div>
            </div>
          ))}

          {/* Timeframe — pushed right */}
          <div className="p-timeframe-bar" style={{ marginLeft: 'auto' }}>
            {TIMEFRAMES.map((tf) => (
              <button key={tf} className={`p-tf-btn${timeframe === tf ? ' active' : ''}`}
                onClick={() => setTimeframe(tf)}>
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* ── Chart ────────────────────────────────────────── */}
        <div ref={chartContainerRef} style={{ width: '100%' }} />
      </div>
    </div>
  )
}
