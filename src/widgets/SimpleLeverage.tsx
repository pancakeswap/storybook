import React, { useCallback, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { Flex } from '../primitives/Box'
import { Text } from '../primitives/Text'
import { useTooltip } from '../hooks/useTooltip'

/**
 * Leverage section extracted from `SimpleBetPanel` so consumers can
 * mount the same hand-rolled slider + zone pill + preset row in
 * isolation (e.g. a dedicated leverage modal, a settings panel,
 * docs/storybook, etc.) without taking on the rest of the bet flow.
 *
 * The widget is fully presentational — the consumer owns the leverage
 * value and commits it via `onLeverageChange` when the drag/click
 * settles. While the commit is in flight the consumer flips
 * `isApplyingLeverage` to `true` and the UI gates further input until
 * it falls back to `false`.
 */
export interface SimpleLeverageProps {
  /** Current leverage value (1..maxLeverage). */
  leverage: number
  /**
   * Fires once per gesture — at the end of a slider drag, on a preset
   * chip click, or on the custom-input commit. Consumers typically
   * dispatch a signed `/fapi/v3/leverage` call here.
   */
  onLeverageChange: (next: number) => void
  /**
   * Per-symbol max leverage. Aster's `/fapi/v1/leverageBracket` defines
   * this; the widget caps drag/preset/custom input at it. Default 1001
   * matches the highest tier in the original SimpleBetPanel.
   */
  maxLeverage?: number
  /** Preset leverage chips below the slider. */
  presets?: readonly number[]
  /**
   * Set to true while a previous `onLeverageChange` commit is in flight
   * to prevent overlapping calls. Pointer/preset/custom interactions
   * are gated until this flips back to false.
   */
  isApplyingLeverage?: boolean
}

const DEFAULT_MAX_LEVERAGE = 1001
const DEFAULT_PRESETS = [50, 250, 500, 1001] as const

// ── Zones ─────────────────────────────────────────────────────────

type Zone = 'safe' | 'caution' | 'warn' | 'danger'

/**
 * Zones use absolute leverage thresholds (per Figma spec) rather than
 * ratios of maxLeverage. A 100×-cap symbol just won't reach the higher
 * tiers — caution still kicks in at 25× regardless.
 *   0–24x   → safe      (positive green)
 *   25–99x  → caution   (primary teal)
 *   100–499 → warn      (warning amber)
 *   500x+   → danger    (destructive pink)
 */
const zoneFromLeverage = (lev: number): Zone => {
  if (lev <= 24) return 'safe'
  if (lev <= 99) return 'caution'
  if (lev <= 499) return 'warn'
  return 'danger'
}
const isDegen = (lev: number) => lev >= 500
const isDouble = (lev: number) => lev >= 100

const zoneLabel = (z: Zone) =>
  z === 'safe'
    ? 'Gentle leverage'
    : z === 'caution'
      ? 'Amplified risk'
      : z === 'warn'
        ? 'High leverage'
        : 'High-intensity leverage'

const zoneEmoji = (z: Zone) =>
  z === 'safe' ? '🌿' : z === 'caution' ? '❗' : z === 'warn' ? '🔥' : '🔥'

const zoneTooltip = (z: Zone) =>
  z === 'safe'
    ? "A good place to start. You'll feel the market without getting rekt."
    : z === 'caution'
      ? 'Moves against you are magnified. Keep an eye on liquidation price.'
      : z === 'warn'
        ? 'Liquidation triggers around a 1% move. Set a stop loss.'
        : '1% move against you liquidates. Only risk what you can afford to lose.'

// ── Glyphs ────────────────────────────────────────────────────────

const InfoCircleGlyph: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ aspectRatio: '1 / 1' }}>
    <path
      d="M7.99636 11.2602C8.18224 11.2602 8.3393 11.197 8.46752 11.0705C8.59563 10.944 8.65969 10.7872 8.65969 10.6003V7.86018C8.65969 7.67318 8.5968 7.51645 8.47102 7.39001C8.34524 7.26357 8.18936 7.20034 8.00336 7.20034C7.81747 7.20034 7.66041 7.26357 7.53219 7.39001C7.40408 7.51645 7.34002 7.67318 7.34002 7.86018V10.6003C7.34002 10.7872 7.40291 10.944 7.52869 11.0705C7.65447 11.197 7.81036 11.2602 7.99636 11.2602ZM7.99636 6.08001C8.18791 6.08001 8.34969 6.01523 8.48169 5.88568C8.61358 5.75601 8.67952 5.5954 8.67952 5.40384C8.67952 5.21229 8.61474 5.05051 8.48519 4.91851C8.35552 4.78662 8.19491 4.72068 8.00336 4.72068C7.8118 4.72068 7.65002 4.78546 7.51802 4.91501C7.38613 5.04468 7.32019 5.20529 7.32019 5.39684C7.32019 5.5884 7.38497 5.75018 7.51452 5.88218C7.64419 6.01407 7.8048 6.08001 7.99636 6.08001ZM8.00452 14.5358C7.10241 14.5358 6.25452 14.3657 5.46086 14.0255C4.66708 13.6853 3.97263 13.2177 3.37752 12.6227C2.78252 12.0276 2.31491 11.3334 1.97469 10.5402C1.63447 9.74696 1.46436 8.89779 1.46436 7.99268C1.46436 7.08768 1.63447 6.24112 1.97469 5.45301C2.31491 4.66479 2.78252 3.97312 3.37752 3.37801C3.97263 2.78301 4.6668 2.3154 5.46002 1.97518C6.25324 1.63495 7.10241 1.46484 8.00752 1.46484C8.91252 1.46484 9.75908 1.63495 10.5472 1.97518C11.3354 2.3154 12.0271 2.78301 12.6222 3.37801C13.2172 3.97312 13.6848 4.66601 14.025 5.45668C14.3652 6.24734 14.5354 7.09368 14.5354 7.99568C14.5354 8.89779 14.3652 9.74568 14.025 10.5393C13.6848 11.3331 13.2172 12.0276 12.6222 12.6227C12.0271 13.2177 11.3342 13.6853 10.5435 14.0255C9.75286 14.3657 8.90652 14.5358 8.00452 14.5358ZM7.99986 13.1525C9.43363 13.1525 10.6508 12.6523 11.6514 11.6518C12.6518 10.6513 13.152 9.43412 13.152 8.00034C13.152 6.56657 12.6518 5.3494 11.6514 4.34884C10.6508 3.3484 9.43363 2.84818 7.99986 2.84818C6.56608 2.84818 5.34891 3.3484 4.34836 4.34884C3.34791 5.3494 2.84769 6.56657 2.84769 8.00034C2.84769 9.43412 3.34791 10.6513 4.34836 11.6518C5.34891 12.6523 6.56608 13.1525 7.99986 13.1525Z"
      fill="currentColor"
    />
  </svg>
)

/* eslint-disable no-restricted-syntax -- brand SVG illustration */
const GrabberGlyph: React.FC = () => (
  <svg width="38" height="39" viewBox="0 0 38 39" fill="none" aria-hidden="true">
    <ellipse cx="19.0019" cy="19.6397" rx="19.0019" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="19.0013" cy="17.455" rx="17.8841" ry="17.455" fill="#D0702D" />
    <rect x="23.3804" y="9" width="11.1776" height="10.9094" rx="2" fill="#FAD658" />
  </svg>
)

const GrabberDoubleGlyph: React.FC = () => (
  <svg width="42" height="43" viewBox="0 0 42 43" fill="none" aria-hidden="true">
    <ellipse cx="18.5455" cy="24.003" rx="18.5455" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="18.5459" cy="21.8183" rx="17.4546" ry="17.455" fill="#D0702D" />
    <ellipse cx="22.9098" cy="19.6397" rx="18.5455" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="22.9092" cy="17.455" rx="17.4546" ry="17.455" fill="#D0702D" />
    <rect x="21.8184" y="12" width="10.9091" height="10.9094" rx="2" fill="#FAD658" />
  </svg>
)

const GrabberDegenGlyph: React.FC = () => (
  <svg width="44" height="48" viewBox="0 0 44 48" fill="none" aria-hidden="true">
    <ellipse cx="25.0904" cy="29.4522" rx="18.5455" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="25.0913" cy="27.2753" rx="17.4546" ry="17.455" fill="#D0702D" />
    <ellipse cx="18.5455" cy="24.003" rx="18.5455" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="18.5464" cy="21.8183" rx="17.4546" ry="17.455" fill="#D0702D" />
    <ellipse cx="22.9098" cy="19.6397" rx="18.5455" ry="18.5459" fill="#F9AF6C" />
    <ellipse cx="22.9087" cy="17.455" rx="17.4546" ry="17.455" fill="#D0702D" />
    <rect x="21.8184" y="12" width="10.9091" height="10.9094" rx="2" fill="#FAD658" />
  </svg>
)
/* eslint-enable no-restricted-syntax */

// ── Section chrome ────────────────────────────────────────────────

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const PreTitle = styled(Text).attrs({ fontSize: '12px' })`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`

// ── Leverage value + zone pill row ────────────────────────────────

const LevRow = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`

const LevValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    font-size: 32px;
    letter-spacing: -0.32px;
  }
`

const ZonePill = styled.span<{ $zone: Zone }>`
  display: flex;
  padding: 2px 5px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  background: ${({ $zone, theme }) =>
    $zone === 'safe'
      ? theme.colors.success
      : $zone === 'caution'
        ? theme.colors.primary
        : $zone === 'warn'
          ? theme.colors.warning
          : theme.colors.failure};
`

const ZonePillText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.v2Default};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`

const ZoneTipAnchor = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.v2Default};
  cursor: help;
`

// ── Track + thumb ─────────────────────────────────────────────────

/* Hand-rolled leverage slider — the Slider primitive can't render the
   per-zone gradient fill across the 1..maxLeverage range. */
const LevBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 8px;
`

/* PCS V1 decorative bubblegum-light gradient flips between modes via the
   levTrackBg semantic token (light pastel → dark deep-purple). The
   `::before` fill renders the leverage indicator as a slice of a
   full-track gradient (sized via `background-size`) — so a 10x leverage
   shows only the green-end of the gradient and 1001x sweeps through to
   pink, mirroring Aster's Simple-version slider (PAN-11876). Track stays
   `overflow: visible` because the LevThumb glyph protrudes above. */
const LevTrack = styled.div<{ $fillPct: number; $zone: Zone }>`
  position: relative;
  height: 21px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.levTrackBg};
  box-shadow: ${({ theme }) => theme.shadows.sunkenStrong};
  overflow: visible;
  cursor: pointer;
  touch-action: none;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ $fillPct }) => Math.max(0, $fillPct)}%;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    border-top-right-radius: ${({ $fillPct }) => ($fillPct >= 99.5 ? 24 : 0)}px;
    border-bottom-right-radius: ${({ $fillPct }) => ($fillPct >= 99.5 ? 24 : 0)}px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.success} 0%,
      ${({ theme }) => theme.colors.primary} 12%,
      ${({ theme }) => theme.colors.warning} 50%,
      ${({ theme }) => theme.colors.failure} 100%
    );
    background-size: ${({ $fillPct }) =>
      $fillPct > 0 ? `${(100 / $fillPct) * 100}% 100%` : '0 0'};
    background-position: left center;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: 0;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (min-width: 968px) and (max-width: 1199.98px) {
    height: 16px;
  }
`

const LevThumb = styled.span<{ $fillPct: number; $variant: 'single' | 'double' | 'triple' }>`
  position: absolute;
  top: ${({ $variant }) => ($variant === 'triple' ? '-15px' : '-10px')};
  left: ${({ $fillPct, $variant }) =>
    $variant === 'triple'
      ? `calc(${$fillPct}% - 22px)`
      : $variant === 'double'
        ? `calc(${$fillPct}% - 20.7px)`
        : `calc(${$fillPct}% - 19px)`};
  width: ${({ $variant }) =>
    $variant === 'triple' ? '44px' : $variant === 'double' ? '41.455px' : '38.004px'};
  height: ${({ $variant }) =>
    $variant === 'triple' ? '48px' : $variant === 'double' ? '42.549px' : '38.186px'};
  /* Purely visual — every gesture is captured by the LevTrack pointer
     handler, which decides whether the user is clicking or dragging. */
  z-index: 2;
  pointer-events: none;
`

const LevRangeInput = styled.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  margin: 0;
  /* Mouse/touch is owned by LevTrack's pointer handler — keep this
     element only for keyboard a11y (screen readers + Tab/arrow keys). */
  pointer-events: none;
`

// ── Preset / custom row ───────────────────────────────────────────

const LevTabs = styled(Flex)`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 4px;
  padding: 0;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`

const LevTab = styled.button<{ $active: boolean }>`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border: 0;
  border-radius: 16px;
  background: ${({ $active, theme }) => ($active ? theme.colors.textSubtle : theme.colors.input)};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.invertedContrast : theme.colors.textSubtle};
  font-family: inherit;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  cursor: pointer;
  &:hover:not(:disabled) {
    color: ${({ $active, theme }) => ($active ? theme.colors.invertedContrast : theme.colors.text)};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

const LevCustom = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  &:focus-within {
    box-shadow:
      0 0 0 1px ${({ theme }) => theme.colors.secondary},
      0 0 0 4px rgba(118, 69, 217, 0.20);
  }
`

const LevCustomInput = styled.input`
  flex: 1;
  width: 100%;
  border: 0;
  background: transparent;
  text-align: center;
  font-family: inherit;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  font-variant-numeric: tabular-nums;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const LevCustomSuffix = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSubtle};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding-left: 4px;
`

// ── Component ─────────────────────────────────────────────────────

export const SimpleLeverage: React.FC<SimpleLeverageProps> = ({
  leverage,
  onLeverageChange,
  maxLeverage = DEFAULT_MAX_LEVERAGE,
  presets = DEFAULT_PRESETS,
  isApplyingLeverage = false,
}) => {
  // While the thumb is being dragged we render the visual at `dragValue`
  // and skip propagating to the consumer — only the drop commits. This
  // gives a snappy local UI without firing one signed `/fapi/v3/leverage`
  // call per pointermove tick (PAN-11823).
  const [dragValue, setDragValue] = useState<number | null>(null)
  const displayLeverage = dragValue ?? leverage
  const fillPct = Math.min(100, Math.max(0, (displayLeverage / maxLeverage) * 100))
  const zone = zoneFromLeverage(displayLeverage)
  const degen = isDegen(displayLeverage)
  const double = isDouble(displayLeverage)

  // Hover tooltip on the leverage-zone info circle. Content text is
  // zone-dependent — re-running the hook each render is fine, the
  // returned `tooltip` ReactNode is stable for the same zone string.
  const zoneTipText = zoneTooltip(zone)
  const { targetRef: zoneTipTargetRef, tooltip: zoneTipNode } = useTooltip(zoneTipText, { placement: 'top' })

  // Single pointer handler for the whole track — handles both clicks
  // (commit immediately at the click point) and thumb drags (preview
  // during pointermove, commit on pointerup). The native range input
  // and the visual thumb both have `pointer-events: none` so every
  // gesture lands here. While `isApplyingLeverage` is true (a previous
  // commit's signed call is still in flight) we ignore new gestures
  // outright — the LevTab/LevCustomInput are also `disabled`.
  const trackRef = useRef<HTMLDivElement | null>(null)
  const onTrackPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isApplyingLeverage) return
      const track = trackRef.current
      if (!track) return
      e.preventDefault()
      const rect = track.getBoundingClientRect()
      const compute = (clientX: number) => {
        const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
        const next = Math.round(1 + pct * (maxLeverage - 1))
        return Math.max(1, Math.min(maxLeverage, next))
      }
      track.setPointerCapture(e.pointerId)
      let last = compute(e.clientX)
      setDragValue(last)
      const cleanup = () => {
        track.removeEventListener('pointermove', onMove)
        track.removeEventListener('pointerup', onPointerUp)
        track.removeEventListener('pointercancel', onCancel)
      }
      const onMove = (ev: PointerEvent) => {
        last = compute(ev.clientX)
        setDragValue(last)
      }
      const onPointerUp = () => {
        cleanup()
        setDragValue(null)
        // Skip the commit when the user clicked exactly where the thumb
        // already sat — otherwise a benign click would still trigger
        // a redundant signed call.
        if (last !== leverage) onLeverageChange(last)
      }
      const onCancel = () => {
        cleanup()
        setDragValue(null)
      }
      track.addEventListener('pointermove', onMove)
      track.addEventListener('pointerup', onPointerUp)
      track.addEventListener('pointercancel', onCancel)
    },
    [isApplyingLeverage, leverage, maxLeverage, onLeverageChange],
  )

  return (
    <Section>
      <PreTitle>Leverage</PreTitle>

      <LevRow>
        <LevValue>{leverage}x</LevValue>
        <ZonePill $zone={zone}>
          {zoneEmoji(zone) ? (
            <ZonePillText as="span" aria-hidden>
              {zoneEmoji(zone)}
            </ZonePillText>
          ) : null}
          <ZonePillText>{zoneLabel(zone)}</ZonePillText>
          <ZoneTipAnchor ref={zoneTipTargetRef} aria-label={`${zoneLabel(zone)} explanation`}>
            <InfoCircleGlyph />
          </ZoneTipAnchor>
          {zoneTipNode}
        </ZonePill>
      </LevRow>

      <LevBar>
        <LevTrack
          ref={trackRef}
          $fillPct={fillPct}
          $zone={zone}
          aria-hidden
          aria-disabled={isApplyingLeverage || undefined}
          onPointerDown={onTrackPointerDown}
        >
          {/* Native range input is kept ONLY for keyboard a11y — its
              `pointer-events: none` means every mouse/touch gesture is
              handled by the track's pointer handler instead. Disabled
              while a commit is in flight so arrow keys don't queue up
              a second signed call. */}
          <LevRangeInput
            type="range"
            min={1}
            max={maxLeverage}
            value={displayLeverage}
            disabled={isApplyingLeverage}
            onChange={(e) => onLeverageChange(Number(e.target.value))}
            aria-label="Leverage"
          />
          <LevThumb
            $fillPct={fillPct}
            $variant={degen ? 'triple' : double ? 'double' : 'single'}
          >
            {degen ? (
              <GrabberDegenGlyph />
            ) : double ? (
              <GrabberDoubleGlyph />
            ) : (
              <GrabberGlyph />
            )}
          </LevThumb>
        </LevTrack>

        <LevTabs role="tablist">
          <LevCustom>
            <LevCustomInput
              type="number"
              min={1}
              max={maxLeverage}
              value={leverage}
              disabled={isApplyingLeverage}
              onChange={(e) =>
                onLeverageChange(Math.max(1, Math.min(maxLeverage, Number(e.target.value) || 1)))
              }
              aria-label="Custom leverage"
            />
            <LevCustomSuffix>x</LevCustomSuffix>
          </LevCustom>
          {presets.map((p) => (
            <LevTab
              key={p}
              type="button"
              role="tab"
              aria-selected={leverage === p}
              $active={leverage === p}
              disabled={isApplyingLeverage}
              onClick={() => onLeverageChange(p)}
            >
              {p}x
            </LevTab>
          ))}
        </LevTabs>
      </LevBar>
    </Section>
  )
}
