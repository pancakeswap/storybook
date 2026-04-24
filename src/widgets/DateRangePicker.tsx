import { useMemo, useState } from 'react'
import '../ui/perps.css'
import './DateRangePicker.css'
import { Button } from '../ui/components/Button'
import { Text } from '../ui/components/Text'

/* ── Types ────────────────────────────────────────────────── */

export type Preset = '1d' | '1w' | '1m' | '3m'

export interface DateRange {
  from: Date
  to: Date
}

export interface DateRangePickerProps {
  /** Initial range. Defaults to last 7 days (1 Week preset). */
  initialRange?: DateRange
  /** Fired when Confirm is clicked. */
  onConfirm?: (range: DateRange) => void
  /** Fired when Cancel is clicked. */
  onCancel?: () => void
}

/* ── Helpers ──────────────────────────────────────────────── */
const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

function startOfDay(d: Date): Date {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

function addDays(d: Date, n: number): Date {
  const x = startOfDay(d)
  x.setDate(x.getDate() + n)
  return x
}

function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth()    === b.getMonth() &&
    a.getDate()     === b.getDate()
  )
}

function sameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

/** Return 42 dates (6 × 7 grid) that cover the month, starting on the Sunday before the 1st. */
function getMonthGrid(year: number, month: number): Date[] {
  const first = new Date(year, month, 1)
  const startOffset = first.getDay() // 0 = Sunday
  const gridStart = addDays(first, -startOffset)
  return Array.from({ length: 42 }, (_, i) => addDays(gridStart, i))
}

function formatDate(d: Date): string {
  const m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()]
  return `${m} ${String(d.getDate()).padStart(2, '0')},${d.getFullYear()}`
}

function presetRange(p: Preset, today = new Date()): DateRange {
  const from = startOfDay(today)
  switch (p) {
    case '1d': return { from, to: addDays(from, 0) }
    case '1w': return { from: addDays(from, -6), to: from }
    case '1m': return { from: addDays(from, -29), to: from }
    case '3m': return { from: addDays(from, -89), to: from }
  }
}

/* ── Icons ────────────────────────────────────────────────── */
function ChevronLeft() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── Component ────────────────────────────────────────────── */

interface CalendarProps {
  year: number
  month: number
  selection: { from?: Date; to?: Date }
  today: Date
  onDayClick: (d: Date) => void
  onPrev?: () => void
  onNext?: () => void
  showPrev?: boolean
  showNext?: boolean
}

function Calendar({
  year, month, selection, today, onDayClick,
  onPrev, onNext, showPrev = true, showNext = true,
}: CalendarProps) {
  const grid = useMemo(() => getMonthGrid(year, month), [year, month])
  const { from, to } = selection

  const classForDay = (d: Date): string => {
    const inMonth = sameMonth(d, new Date(year, month, 1))
    const isToday = sameDay(d, today)
    const isFrom  = from && sameDay(d, from)
    const isTo    = to   && sameDay(d, to)
    const inRange = from && to && d.getTime() >= startOfDay(from).getTime() && d.getTime() <= startOfDay(to).getTime()
    const endpointOnly = from && !to && isFrom

    const classes = ['drp-day']
    if (!inMonth)                 classes.push('drp-day--muted')
    if (isToday && !isFrom && !isTo) classes.push('drp-day--today')
    if (endpointOnly)             classes.push('drp-day--endpoint')
    if (isFrom && to && !sameDay(from, to)) classes.push('drp-day--range-start')
    if (isTo   && from && !sameDay(from, to)) classes.push('drp-day--range-end')
    if (isFrom && to && sameDay(from, to))    classes.push('drp-day--endpoint')
    if (inRange && !isFrom && !isTo) classes.push('drp-day--range-mid')
    return classes.join(' ')
  }

  return (
    <div className="drp-calendar">
      <div className="drp-cal-header">
        <button
          type="button"
          className="drp-nav-btn"
          onClick={onPrev}
          aria-label="Previous month"
          disabled={!showPrev}
          style={{ visibility: showPrev ? 'visible' : 'hidden' }}
        >
          <ChevronLeft />
        </button>
        <span className="drp-cal-title">
          {MONTH_NAMES[month]}&nbsp;&nbsp;{year}
        </span>
        <button
          type="button"
          className="drp-nav-btn"
          onClick={onNext}
          aria-label="Next month"
          disabled={!showNext}
          style={{ visibility: showNext ? 'visible' : 'hidden' }}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="drp-weekdays">
        {WEEKDAYS.map((w, i) => (
          <span key={`${w}-${i}`} className="drp-weekday">{w}</span>
        ))}
      </div>

      <div className="drp-days">
        {grid.map((d) => (
          <button
            key={d.toISOString()}
            type="button"
            className={classForDay(d)}
            onClick={() => onDayClick(d)}
          >
            {d.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}

export function DateRangePicker({
  initialRange,
  onConfirm,
  onCancel,
}: DateRangePickerProps) {
  const today = useMemo(() => startOfDay(new Date()), [])
  const defaultRange = useMemo(() => initialRange ?? presetRange('1w', today), [initialRange, today])

  const [range, setRange]         = useState<{ from?: Date; to?: Date }>(defaultRange)
  const [preset, setPreset]       = useState<Preset | null>(initialRange ? null : '1w')
  const [viewMonth, setViewMonth] = useState({ year: defaultRange.from.getFullYear(), month: defaultRange.from.getMonth() })

  const nextMonthIdx   = viewMonth.month + 1 > 11 ? 0 : viewMonth.month + 1
  const nextMonthYear  = viewMonth.month + 1 > 11 ? viewMonth.year + 1 : viewMonth.year

  const handlePrev = () => setViewMonth((v) => v.month === 0 ? { year: v.year - 1, month: 11 } : { year: v.year, month: v.month - 1 })
  const handleNext = () => setViewMonth((v) => v.month === 11 ? { year: v.year + 1, month: 0 } : { year: v.year, month: v.month + 1 })

  const handleDayClick = (d: Date) => {
    setPreset(null)
    if (!range.from || (range.from && range.to)) {
      // Start a new range
      setRange({ from: d, to: undefined })
      return
    }
    // range.from exists, range.to missing
    if (d < range.from) setRange({ from: d, to: range.from })
    else                setRange({ from: range.from, to: d })
  }

  const handlePreset = (p: Preset) => {
    const r = presetRange(p, today)
    setPreset(p)
    setRange(r)
    setViewMonth({ year: r.from.getFullYear(), month: r.from.getMonth() })
  }

  const handleConfirm = () => {
    if (!range.from || !range.to) return
    onConfirm?.({ from: range.from, to: range.to })
  }

  const fromText = range.from ? formatDate(range.from) : '—'
  const toText   = range.to   ? formatDate(range.to)   : '—'

  return (
    <div className="perps-root drp-root" role="dialog" aria-label="Date range picker">
      {/* Preset tabs */}
      <div className="drp-presets" role="tablist">
        {(['1d', '1w', '1m', '3m'] as Preset[]).map((p) => {
          const label = p === '1d' ? '1 Day' : p === '1w' ? '1 Week' : p === '1m' ? '1 Month' : '3 Months'
          const active = preset === p
          return (
            <button
              key={p}
              type="button"
              role="tab"
              aria-selected={active}
              className={`drp-preset${active ? ' drp-preset--active' : ''}`}
              onClick={() => handlePreset(p)}
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* Two-month calendar row */}
      <div className="drp-calendars">
        <Calendar
          year={viewMonth.year}
          month={viewMonth.month}
          selection={range}
          today={today}
          onDayClick={handleDayClick}
          onPrev={handlePrev}
          showPrev
          showNext={false}
        />
        <Calendar
          year={nextMonthYear}
          month={nextMonthIdx}
          selection={range}
          today={today}
          onDayClick={handleDayClick}
          onNext={handleNext}
          showPrev={false}
          showNext
        />
      </div>

      {/* Footer: range summary + actions */}
      <div className="drp-footer">
        <div className="drp-summary">
          <Text color="textSubtle" fontSize="14px">From</Text>
          <Text color="text" fontSize="14px" bold>{fromText}</Text>
          <Text color="textSubtle" fontSize="14px">-</Text>
          <Text color="text" fontSize="14px" bold>{toText}</Text>
        </div>
        <div className="drp-actions">
          <Button variant="secondary" scale="sm" onClick={onCancel}>Cancel</Button>
          <Button variant="primary"   scale="sm" onClick={handleConfirm} disabled={!range.from || !range.to}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  )
}
