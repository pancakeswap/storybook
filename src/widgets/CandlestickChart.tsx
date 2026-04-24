import { useEffect, useRef, useState } from 'react'
import { createChart, CandlestickSeries, type IChartApi, type CandlestickData, type Time } from 'lightweight-charts'
import { useTheme } from '../ui/ThemeProvider'
import { chartTokens } from './chart-tokens'
import '../ui/perps.css'
import './CandlestickChart.css'

const TIMEFRAMES = ['1m', '5m', '1H', '1D']
const TOOL_ICONS = ['◷', '✎', '✐', 'A', '⚙', '⊕', '⧈', '⤢']

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
  BTCUSDT:     75500.8,
}

export interface CandlestickChartProps {
  initialPair?: string
  initialTimeframe?: string
  height?: number
}

export function CandlestickChart({
  initialPair = 'BTCUSDT',
  initialTimeframe = '1D',
  height = 420,
}: CandlestickChartProps) {
  const [pair] = useState(initialPair)
  const [timeframe, setTimeframe] = useState(initialTimeframe)
  const [rightTab, setRightTab] = useState<'chart' | 'depth' | 'details'>('chart')
  const { theme } = useTheme()

  const chartContainerRef = useRef<HTMLDivElement>(null)
  const volumeRef = useRef<SVGSVGElement>(null)
  const chartRef = useRef<IChartApi | null>(null)
  const seriesRef = useRef<ReturnType<IChartApi['addSeries']> | null>(null)

  useEffect(() => {
    if (!chartContainerRef.current) return
    const ct = chartTokens[theme]
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height,
      layout: {
        background: { color: ct.bg },
        textColor: ct.textColor,
        fontFamily: 'Kanit, system-ui, sans-serif',
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
      if (entries[0]) {
        const { width, height: containerH } = entries[0].contentRect
        chart.resize(width, containerH > 0 ? containerH : height)
      }
    })
    ro.observe(chartContainerRef.current)
    return () => { ro.disconnect(); chart.remove(); chartRef.current = null; seriesRef.current = null }
  }, [theme, height, pair])

  useEffect(() => {
    if (!seriesRef.current) return
    seriesRef.current.setData(generateCandles(BASE_PRICES[pair] ?? 1))
    chartRef.current?.timeScale().fitContent()
  }, [pair, timeframe])

  return (
    <div className="perps-root ch-root">
      {/* Top toolbar */}
      <div className="ch-toolbar">
        <div className="ch-tf-group">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              type="button"
              className={`ch-tf-btn${timeframe === tf ? ' active' : ''}`}
              onClick={() => setTimeframe(tf)}
            >
              {tf}
            </button>
          ))}
          <button type="button" className="ch-tool-btn" aria-label="More timeframes">▾</button>
        </div>
        <div className="ch-sep" aria-hidden="true" />
        <button type="button" className="ch-tool-btn" aria-label="Indicators">📊</button>
        <button type="button" className="ch-tool-btn" aria-label="Grid">▦</button>
        <button type="button" className="ch-tool-btn" aria-label="More indicators">▾</button>
        <div className="ch-sep" aria-hidden="true" />
        <button type="button" className="ch-price-mode">
          Last Price <span className="ch-caret" aria-hidden="true">▾</span>
        </button>
        <div className="ch-spacer" />
        {(['chart', 'depth', 'details'] as const).map((t) => (
          <button
            key={t}
            type="button"
            className={`ch-right-tab${rightTab === t ? ' active' : ''}`}
            onClick={() => setRightTab(t)}
          >
            {t[0].toUpperCase() + t.slice(1)}
          </button>
        ))}
        <button type="button" className="ch-tool-btn" aria-label="Fullscreen">⛶</button>
      </div>

      <div className="ch-body">
        {/* Left tool rail */}
        <div className="ch-rail" aria-label="Drawing tools">
          {TOOL_ICONS.map((g, i) => (
            <button key={i} type="button" className="ch-rail-btn" aria-label={`Tool ${i + 1}`}>
              {g}
            </button>
          ))}
        </div>

        {/* Chart area */}
        <div className="ch-area">
          {/* OHLC legend */}
          <div className="ch-legend">
            <div className="ch-legend-row">
              <span>O<span className="ch-legend-val p-short">73756.4</span></span>
              <span>H<span className="ch-legend-val p-short">75517.4</span></span>
              <span>L<span className="ch-legend-val p-short">73684.0</span></span>
              <span>C<span className="ch-legend-val p-short">75511.8</span></span>
              <span className="p-short">1757.9 (+2.38%)</span>
            </div>
            <div className="ch-legend-row ch-ma-7">
              MA 7 Close 0 SMA 9 <span className="ch-ma-chip ch-ma-chip-amber">75130.0</span>
            </div>
            <div className="ch-legend-row ch-ma-30">
              MA 30 close 0 SMA 9 <span className="ch-ma-chip ch-ma-chip-violet">70717.4</span>
              <span className="p-primary-text">73960.7</span>
            </div>
          </div>

          <div ref={chartContainerRef} className="ch-canvas" />
        </div>
      </div>

      {/* Volume strip */}
      <div className="ch-volume">
        <span className="ch-volume-legend">
          Volume SMA 9 <span className="p-primary-text">3.124K</span>
        </span>
        <svg ref={volumeRef} viewBox="0 0 1000 72" preserveAspectRatio="none" className="ch-volume-svg">
          {Array.from({ length: 100 }).map((_, i) => {
            const h = 6 + Math.abs(Math.sin(i * 0.9) * 50) + (i % 9 === 0 ? 10 : 0)
            const up = Math.sin(i * 0.7) > 0
            return (
              <rect
                key={i}
                x={30 + i * 9.5}
                y={72 - h}
                width="6"
                height={h}
                className={up ? 'ch-vol-up' : 'ch-vol-down'}
                opacity="0.6"
              />
            )
          })}
          <text x="995" y="20" className="ch-vol-axis" textAnchor="end">80K</text>
          <text x="995" y="40" className="ch-vol-axis" textAnchor="end">60K</text>
          <text x="995" y="60" className="ch-vol-axis" textAnchor="end">40K</text>
        </svg>
      </div>

      {/* Bottom axis bar */}
      <div className="ch-axis-bar">
        <span>22  Feb  10  19  Mar  10  19  Apr  10  19  28</span>
        <span>15:24:28 (UTC+8) &nbsp; %  log  auto</span>
      </div>
    </div>
  )
}
