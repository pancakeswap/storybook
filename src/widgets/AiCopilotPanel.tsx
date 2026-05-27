import React, { useEffect, useRef, useState } from 'react'
import { styled, keyframes } from 'styled-components'
import { PerpsPanel, UnderlineTab, UnderlineTabs } from './primitives'
import { ArrowDropDownIcon, ArrowUpIcon, ArrowDownIcon, LightBulbIcon, ChevronDownIcon, ChevronUpIcon } from '../primitives/Icons'
import aiBruceMascot from '../assets/ai-bruce.png'
import { OptionPickerModal, type PickerOption } from './OptionPickerModal'

// Style / Strategy picker option sets (Figma 1101:39922 / 1101:40127).
const STYLE_OPTIONS: PickerOption[] = [
  {
    value: 'Scalping',
    label: 'Scalping',
    description: 'Very short-term trades. Focusing on 3-minute charts for quick in-and-out for small moves.',
  },
  {
    value: 'Day',
    label: 'Day',
    description: 'Trade short-term trends based on intraday volatility, looking at 15-minute charts.',
  },
  {
    value: 'Swing',
    label: 'Swing',
    description: 'Hold positions for days to weeks. Focus on 4-hour charts to ride short- to medium-term trends.',
  },
]

const STRATEGY_OPTIONS: PickerOption[] = [
  {
    value: 'Max gain',
    label: 'Max gain',
    description: 'Optimizes for high reward-to-risk setups with strong backtest upside. Fewer trades, bigger moves.',
  },
  {
    value: 'Max Win Rate',
    label: 'Max Win Rate (Coming Soon)',
    description: 'Prioritizes high-probability setups with more flexible entry conditions. More trades, higher consistency.',
    disabled: true,
  },
]

export type TradeIdeaDirection = 'long' | 'short'

export interface TradeIdeaRationale {
  marketContext: string
  whyEntry: string
  whyTpSl: string
}

export interface TradeIdea {
  id: string
  direction: TradeIdeaDirection
  style: string
  ago: string
  entry: string
  takeProfit: string
  stopLoss: string
  /** "R:R 1:1.9" — profit/loss are derived from this + the entered margin. */
  riskReward: string
  rationale: TradeIdeaRationale
}

export type AiCopilotTab = 'copilot' | 'book' | 'trades'

export interface AiCopilotPanelProps {
  /** Controlled active tab; falls back to internal state when omitted. */
  tab?: AiCopilotTab
  onTabChange?: (tab: AiCopilotTab) => void
  /** Order-book + trades tab bodies — both stay mounted (hidden via
   *  display:none) so live subscriptions don't tear down on tab switch. */
  bookContent: React.ReactNode
  tradesContent: React.ReactNode
  /** Pair label shown in the empty-state hint (e.g. "BTC-USDT"). */
  pairLabel?: string
  /** Margin field display value. */
  marginValue?: string
  styleValue?: string
  strategyValue?: string
  /** Generated trade ideas. Provide to render the generated state; the
   *  Generate button reveals them and stops its idle sheen. */
  ideas?: TradeIdea[]
  onGenerate?: () => void
  /** Fired when an idea's "Create long/short position" CTA is tapped —
   *  the consumer slides the Quick Order panel in over the trading card. */
  onCreatePosition?: (idea: TradeIdea) => void
}

const Panel = styled(PerpsPanel)`
  /* Fixed total height per Figma (732px). The panel no longer tracks the
     chart column height — overflow is absorbed by the inner idea scroll. */
  height: 732px;
  align-self: flex-start;
`

const Content = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`

const Slot = styled.div<{ $hidden: boolean }>`
  display: ${({ $hidden }) => ($hidden ? 'none' : 'contents')};
`

// ── AI Copilot tab body ──────────────────────────────────────

const CopilotBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  /* Fill the (fixed-height) panel and clip — the generator controls stay
     pinned while the idea list scrolls inside, so the panel never grows. */
  flex: 1;
  min-height: 0;
  overflow: hidden;
`

// Pinned top section — controls row + generate button + hint never scroll.
const TopControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
`

// Scrollable region holding the generated idea cards + disclaimer footer.
const IdeaScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scrollbar-width: thin;
`

const ControlsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`

const Control = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`

const ControlLabel = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSubtle};
`

/* Editable margin input — input-primary fill, secondary border, with the
   same focus glow as the trading panel's size field (OrderForm SizeField).
   eslint-disable: the focus ring uses the brand purple directly, matching
   that field 1:1. */
/* eslint-disable no-restricted-syntax */
const MarginField = styled.label`
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.inputPrimary};
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  cursor: text;
  transition: box-shadow 0.12s;
  &:focus-within {
    box-shadow:
      0 0 0 1px #7645d9,
      0 0 0 4px rgba(118, 69, 217, 0.2);
  }
`
/* eslint-enable no-restricted-syntax */

const MarginPrefix = styled.span`
  flex-shrink: 0;
`

const MarginInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

// Style / Strategy dropdowns — card-secondary fill, raised bottom border.
const Dropdown = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.cardSecondary};
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const DropdownValue = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

// Subtle metallic sheen — a soft highlight band sweeps across the button
// once every few seconds to draw the eye without being flashy.
const sheen = keyframes`
  0%   { transform: translateX(-160%) skewX(-20deg); }
  /* The sweep happens in the first ~35% of the cycle, then a long pause. */
  35%  { transform: translateX(260%) skewX(-20deg); }
  100% { transform: translateX(260%) skewX(-20deg); }
`

const GenerateButton = styled.button<{ $sheen?: boolean }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 48px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  /* Flat tertiary base — the metallic feel comes purely from the sheen
     band sweeping on top (::before). */
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary60 ?? theme.colors.primary};
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  /* Moving highlight band, clipped by overflow: hidden. */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 45%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.18) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-160%) skewX(-20deg);
    /* Sheen only runs while idle (no ideas yet). Once ideas are generated
       the button is no longer the focal point, so the effect stops. */
    animation: ${({ $sheen }) => ($sheen ? sheen : 'none')} 5s ease-in-out infinite;
    opacity: ${({ $sheen }) => ($sheen ? 1 : 0)};
    pointer-events: none;
  }

  /* Keep the label crisply above the sheen band. */
  & > span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    filter: brightness(1.05);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
      opacity: 0;
    }
  }
`

const GenerateHint = styled.p`
  margin: -8px 0 0;
  text-align: center;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary60 ?? theme.colors.textSubtle};
`

// ── Loading state (analyzing) ────────────────────────────────

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`

// "Analyzing …" button shown in place of Generate while loading — dark
// filled surface with a purple border + purple spinner/label.
const AnalyzingButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 48px;
  border: 1.5px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 600;
`

const Spinner = styled.span`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-top-color: transparent;
  animation: ${spin} 0.7s linear infinite;
`

// Skeleton placeholder matching the idea-card shape.
const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.cardSecondary};
`

const SkelHeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const SkelCircle = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.tertiary};
  animation: ${pulse} 1.2s ease-in-out infinite;
`

const SkelBar = styled.div<{ $w: string; $h?: string }>`
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h ?? '12px'};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.tertiary};
  animation: ${pulse} 1.2s ease-in-out infinite;
`

const SkelButton = styled.div`
  width: 100%;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.tertiary};
  animation: ${pulse} 1.2s ease-in-out infinite;
`

// Dashed empty-state card. Sits below the mascot, which overlaps its top.
const EmptyCard = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  width: 254px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px dashed ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.cardSecondary};
`

// Robot-bunny mascot — sits ABOVE the card and overlaps its top edge
// (per Figma). The asset ships with a warm radial glow on a dark backdrop;
// mix-blend-mode: screen melts that backdrop into the panel so only the
// metallic bunny + glow read. A specular sheen sweeps across it on the
// same 5s cadence as the Generate button so the two feel in sync.
const MascotStage = styled.div`
  position: relative;
  z-index: 1;
  width: 100px;
  height: 100px;
  margin-bottom: -24px;
`

const Mascot = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: screen;
`

// Sheen overlay: a diagonal highlight band (in ::before) sweeps across,
// clipped to the bright metal via a luminance mask of the asset and
// screened over the head. Reuses the button's `sheen` keyframe + 5s timing.
const Glint = styled.span`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  mix-blend-mode: screen;
  -webkit-mask: url(${aiBruceMascot}) center / contain no-repeat;
  mask: url(${aiBruceMascot}) center / contain no-repeat;
  -webkit-mask-mode: luminance;
  mask-mode: luminance;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 55%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-160%) skewX(-20deg);
    animation: ${sheen} 5s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
      opacity: 0;
    }
  }
`

const MascotView: React.FC = () => (
  <MascotStage>
    <Mascot src={aiBruceMascot} alt="" aria-hidden />
    <Glint aria-hidden />
  </MascotStage>
)

const EmptyTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text};
`

const EmptyHint = styled.span`
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.secondary60 ?? theme.colors.textSubtle};
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
`

// ── Generated idea card (Figma 1083:38137 / 38237) ───────────

const IdeaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

// Cards fade + rise in, staggered by index, so they resolve from the
// skeleton smoothly instead of snapping in.
const cardIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const Card = styled.div<{ $index?: number }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.cardSecondary};
  animation: ${cardIn} 0.4s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  animation-delay: ${({ $index = 0 }) => $index * 90}ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

const TagGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

/* Direction tag — green Long / pink Short, custom tones from the design. */
/* eslint-disable no-restricted-syntax */
const DirectionTag = styled.span<{ $dir: TradeIdeaDirection }>`
  display: inline-flex;
  align-items: center;
  /* 5px left to the arrow, 4px icon-to-label gap; a little extra on the
     right (10px) so the label clears the fully-rounded pill end — at a
     flat 5px the rounded corner curves into the last glyph. */
  gap: 4px;
  height: 25px;
  box-sizing: border-box;
  padding: 2px 10px 2px 5px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  background: ${({ $dir }) => ($dir === 'long' ? '#0c3a32' : '#3e1c39')};
  border: 2px solid ${({ $dir }) => ($dir === 'long' ? '#035345' : '#5d1b43')};
  color: ${({ $dir }) => ($dir === 'long' ? '#3ddbb5' : '#ed4b9e')};
`
/* eslint-enable no-restricted-syntax */

const StyleTag = styled.span`
  display: inline-flex;
  align-items: center;
  height: 25px;
  box-sizing: border-box;
  padding: 2px 5px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  background: ${({ theme }) => theme.colors.tertiary};
  border: 2px solid ${({ theme }) => theme.colors.inputSecondary};
  color: ${({ theme }) => theme.colors.textSubtle};
`

const Ago = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  font-variant-numeric: tabular-nums;
`

const PricePair = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  line-height: 1.5;
`

const PriceLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

/* eslint-disable no-restricted-syntax */
const PriceValue = styled.span<{ $tone?: 'tp' | 'sl' }>`
  font-weight: 600;
  color: ${({ $tone, theme }) =>
    $tone === 'tp' ? '#3ddbb5' : $tone === 'sl' ? theme.colors.failure : theme.colors.text};
`
/* eslint-enable no-restricted-syntax */

const RangeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const RangeEnd = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSubtle};
  flex-shrink: 0;
`

/* eslint-disable no-restricted-syntax */
const RangeTrack = styled.div`
  position: relative;
  flex: 1;
  height: 6px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: linear-gradient(90deg, #ed4b9e 0%, #31d0aa 100%);
  box-shadow: inset 0 2px 0 -1px rgba(0, 0, 0, 0.16);
`

const RangeMarker = styled.div<{ $left: number }>`
  position: absolute;
  top: 50%;
  left: ${({ $left }) => `${$left}%`};
  transform: translate(-50%, -50%);
  /* Bigger + higher-contrast entry handle: fill with the theme text color
     (near-white in dark, near-black in light) ringed by the card color so
     it reads clearly on the pink→teal gradient in both themes. */
  width: 8px;
  height: 18px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.card};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
`
/* eslint-enable no-restricted-syntax */

const RrTag = styled.span`
  flex-shrink: 0;
  padding: 2px 5px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  background: ${({ theme }) => theme.colors.card};
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSubtle};
  white-space: nowrap;
`

const PnlRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
`

const Profit = styled.span`
  color: ${({ theme }) => theme.colors.success};
`

const Loss = styled.span`
  color: ${({ theme }) => theme.colors.failure};
`

const PnlSep = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.cardBorder};
`

const WhyRow = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const WhyLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
`

// Inline "why this setup" rationale accordion.
const Rationale = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.card};
`

const RationaleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const RationaleHeading = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`

const RationaleBody = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

/* CTA — green for long, pink for short, dark label. */
/* eslint-disable no-restricted-syntax */
const CtaButton = styled.button<{ $dir: TradeIdeaDirection }>`
  width: 100%;
  min-height: 44px;
  padding: 8px 16px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background: ${({ $dir, theme }) => ($dir === 'long' ? theme.colors.success : theme.colors.failure)};
  color: #08060b;
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    filter: brightness(1.05);
  }
`
/* eslint-enable no-restricted-syntax */

const Footer = styled.p`
  margin: 0;
  text-align: center;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.secondary60 ?? theme.colors.textSubtle};
`

// Demo ideas matching the Figma (1083:38137) — one long, one short.
const DEMO_IDEAS: TradeIdea[] = [
  {
    id: 'long',
    direction: 'long',
    style: 'Scalping',
    ago: '1h ago',
    entry: '$77,376',
    takeProfit: '$81,505',
    stopLoss: '$69,509',
    riskReward: 'R:R 1:1.9',
    rationale: {
      marketContext: 'BTC bounced off $76,400 support 3 times in 24h. Volume rising on green candles.',
      whyEntry: 'Set just above the resistance flip zone. Confirms breakout if momentum holds.',
      whyTpSl: 'TP targets previous swing high. SL below key structural support to invalidate the thesis cleanly.',
    },
  },
  {
    id: 'short',
    direction: 'short',
    style: 'Scalping',
    ago: '1h ago',
    entry: '$77,376',
    takeProfit: '$69,505',
    stopLoss: '$83,509',
    riskReward: 'R:R 1:1.9',
    rationale: {
      marketContext: 'BTC bounced off $76,400 support 3 times in 24h. Volume rising on green candles.',
      whyEntry: 'Set just above the resistance flip zone. Confirms breakout if momentum holds.',
      whyTpSl: 'TP targets previous swing high. SL below key structural support to invalidate the thesis cleanly.',
    },
  },
]

function parseAmount(s: string): number {
  return Number(s.replace(/[^0-9.]/g, '')) || 0
}

// Reward-to-risk multiple from an "R:R 1:1.9" label → 1.9.
function parseRewardRatio(rr: string): number {
  const m = rr.match(/(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)/)
  if (!m) return 1
  const risk = Number(m[1]) || 1
  const reward = Number(m[2]) || 1
  return reward / risk
}

function formatUsd(n: number): string {
  return `$${Math.round(n).toLocaleString('en-US')}`
}

// Entry's position between SL (0%) and TP (100%) for the range marker.
function markerLeft(idea: TradeIdea): number {
  const sl = parseAmount(idea.stopLoss)
  const tp = parseAmount(idea.takeProfit)
  const entry = parseAmount(idea.entry)
  if (tp === sl) return 50
  const pct = ((entry - sl) / (tp - sl)) * 100
  return Math.max(4, Math.min(96, pct))
}

const IdeaCardView: React.FC<{
  idea: TradeIdea
  marginAmount: number
  index?: number
  onCreate?: (idea: TradeIdea) => void
  t: (k: string) => string
}> = ({ idea, marginAmount, index = 0, onCreate, t }) => {
  const [open, setOpen] = useState(false)
  const isLong = idea.direction === 'long'
  // Loss = the margin risked at SL; profit = margin × the R:R reward
  // multiple. Both recompute as the user edits the initial-margin field.
  const lossAmount = marginAmount
  const profitAmount = marginAmount * parseRewardRatio(idea.riskReward)
  return (
    <Card $index={index}>
      <CardHeader>
        <TagGroup>
          <DirectionTag $dir={idea.direction}>
            {isLong ? <ArrowUpIcon width="18px" height="18px" /> : <ArrowDownIcon width="18px" height="18px" />}
            {isLong ? t('Long') : t('Short')}
          </DirectionTag>
          <StyleTag>{idea.style}</StyleTag>
        </TagGroup>
        <Ago>{idea.ago}</Ago>
      </CardHeader>

      <PriceRow>
        <PricePair>
          <PriceLabel>{t('Entry')}</PriceLabel>
          <PriceValue>{idea.entry}</PriceValue>
        </PricePair>
        <PricePair>
          <PriceLabel>{t('TP')}</PriceLabel>
          <PriceValue $tone="tp">{idea.takeProfit}</PriceValue>
        </PricePair>
        <PricePair>
          <PriceLabel>{t('SL')}</PriceLabel>
          <PriceValue $tone="sl">{idea.stopLoss}</PriceValue>
        </PricePair>
      </PriceRow>

      <RangeRow>
        <RangeEnd>{t('SL')}</RangeEnd>
        <RangeTrack>
          <RangeMarker $left={markerLeft(idea)} />
        </RangeTrack>
        <RangeEnd>{t('TP')}</RangeEnd>
        <RrTag>{idea.riskReward}</RrTag>
      </RangeRow>

      <PnlRow>
        <Profit>
          +{formatUsd(profitAmount)} {t('Profit')}
        </Profit>
        <PnlSep>/</PnlSep>
        <Loss>
          -{formatUsd(lossAmount)} {t('Loss')}
        </Loss>
      </PnlRow>

      <Divider />

      <WhyRow type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <WhyLabel>
          <LightBulbIcon width="24px" height="24px" />
          {t('Why this setup?')}
        </WhyLabel>
        {open ? <ChevronUpIcon width="24px" height="24px" /> : <ChevronDownIcon width="24px" height="24px" />}
      </WhyRow>

      {open && (
        <Rationale>
          <RationaleBlock>
            <RationaleHeading>{t('Market context')}</RationaleHeading>
            <RationaleBody>{idea.rationale.marketContext}</RationaleBody>
          </RationaleBlock>
          <RationaleBlock>
            <RationaleHeading>{t('Why this entry')}</RationaleHeading>
            <RationaleBody>{idea.rationale.whyEntry}</RationaleBody>
          </RationaleBlock>
          <RationaleBlock>
            <RationaleHeading>{t('Why this TP / SL')}</RationaleHeading>
            <RationaleBody>{idea.rationale.whyTpSl}</RationaleBody>
          </RationaleBlock>
        </Rationale>
      )}

      <CtaButton type="button" $dir={idea.direction} onClick={() => onCreate?.(idea)}>
        {isLong ? t('Create long position') : t('Create short position')}
      </CtaButton>
    </Card>
  )
}

const identity = (s: string) => s

/**
 * AI Copilot panel (Figma 1075:35526) — the chart-side panel for the AI
 * Copilot app. Three fullWidth underline tabs (AI Copilot | Order Book |
 * Trades) matching the trading panel's tab style. The Copilot tab carries
 * the trade-idea generator controls + empty state; the other two host the
 * existing OrderBook / RecentTrades content.
 */
export const AiCopilotPanel: React.FC<AiCopilotPanelProps & { t?: (k: string) => string }> = ({
  tab,
  onTabChange,
  bookContent,
  tradesContent,
  pairLabel = 'BTC-USDT',
  marginValue = '100',
  styleValue = 'Swing',
  strategyValue = 'Max gain',
  ideas,
  onGenerate,
  onCreatePosition,
  t = identity,
}) => {
  const [margin, setMargin] = useState(marginValue.replace(/[^0-9.]/g, ''))
  const [internalTab, setInternalTab] = useState<AiCopilotTab>('copilot')
  const [generated, setGenerated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [styleSel, setStyleSel] = useState(styleValue)
  const [strategySel, setStrategySel] = useState(strategyValue)
  const [picker, setPicker] = useState<'style' | 'strategy' | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }, [])
  const activeTab = tab ?? internalTab
  const setTab = (next: AiCopilotTab) => {
    setInternalTab(next)
    onTabChange?.(next)
  }
  const order: AiCopilotTab[] = ['copilot', 'book', 'trades']
  const activeIndex = order.indexOf(activeTab)

  const visibleIdeas = ideas ?? DEMO_IDEAS
  const showIdeas = generated && visibleIdeas.length > 0
  // First click → short "analyzing" loading state, then reveal the ideas.
  const handleGenerate = () => {
    if (loading) return
    onGenerate?.()
    setLoading(true)
    timerRef.current = setTimeout(() => {
      setLoading(false)
      setGenerated(true)
    }, 2000)
  }

  return (
    <Panel>
      <UnderlineTabs fullWidth activeIndex={activeIndex} onItemClick={(i) => setTab(order[i])}>
        <UnderlineTab>{t('AI Copilot')}</UnderlineTab>
        <UnderlineTab>{t('Order Book')}</UnderlineTab>
        <UnderlineTab>{t('Trades')}</UnderlineTab>
      </UnderlineTabs>
      <Content>
        <Slot $hidden={activeTab !== 'copilot'}>
          <CopilotBody>
            <TopControls>
              <ControlsRow>
                <Control>
                  <ControlLabel>{t('Inital margin')}</ControlLabel>
                  <MarginField>
                    <MarginPrefix>$</MarginPrefix>
                    <MarginInput
                      inputMode="decimal"
                      value={margin}
                      onChange={(e) => setMargin(e.target.value.replace(/[^0-9.]/g, ''))}
                      aria-label={t('Inital margin')}
                    />
                  </MarginField>
                </Control>
                <Control>
                  <ControlLabel>{t('Style')}</ControlLabel>
                  <Dropdown type="button" onClick={() => setPicker('style')}>
                    <DropdownValue>{styleSel}</DropdownValue>
                    <ArrowDropDownIcon width="16px" height="16px" />
                  </Dropdown>
                </Control>
                <Control>
                  <ControlLabel>{t('Strategy')}</ControlLabel>
                  <Dropdown type="button" onClick={() => setPicker('strategy')}>
                    <DropdownValue>{strategySel}</DropdownValue>
                    <ArrowDropDownIcon width="16px" height="16px" />
                  </Dropdown>
                </Control>
              </ControlsRow>

              {loading ? (
                <AnalyzingButton>
                  <Spinner aria-hidden />
                  {t('Analyzing')} {pairLabel}…
                </AnalyzingButton>
              ) : (
                <GenerateButton type="button" onClick={handleGenerate} $sheen={!showIdeas}>
                  <span>{t('Generate trade ideas')}</span>
                </GenerateButton>
              )}
              <GenerateHint>
                {loading ? t('Reading market data') : t('Bruce will suggest entry, TP & SL')}
              </GenerateHint>
            </TopControls>

            {loading ? (
              <IdeaScroll>
                <SkeletonCard>
                  <SkelHeaderRow>
                    <SkelCircle />
                    <SkelBar $w="30%" />
                    <SkelBar $w="38%" />
                  </SkelHeaderRow>
                  <SkelBar $w="82%" />
                  <SkelBar $w="58%" />
                  <SkelBar $w="66%" />
                  <SkelButton />
                </SkeletonCard>
                <Footer>{t('AI Bruce may make mistakes. NFA.')}</Footer>
              </IdeaScroll>
            ) : showIdeas ? (
              <IdeaScroll>
                <IdeaList>
                  {visibleIdeas.map((idea, i) => (
                    <IdeaCardView
                      key={idea.id}
                      idea={idea}
                      index={i}
                      marginAmount={Number(margin) || 0}
                      onCreate={onCreatePosition}
                      t={t}
                    />
                  ))}
                </IdeaList>
                <Footer>{t('AI Bruce may make mistakes. NFA.')}</Footer>
              </IdeaScroll>
            ) : (
              <EmptyState>
                <MascotView />
                <EmptyCard>
                  <EmptyTitle>{t('No trade ideas yet?')}</EmptyTitle>
                  <EmptyHint>
                    {t('Tap above to get your first')}
                    <br />
                    {pairLabel} {t('setup')}
                  </EmptyHint>
                </EmptyCard>
              </EmptyState>
            )}
          </CopilotBody>
        </Slot>
        <Slot $hidden={activeTab !== 'book'}>{bookContent}</Slot>
        <Slot $hidden={activeTab !== 'trades'}>{tradesContent}</Slot>
      </Content>

      {picker === 'style' && (
        <OptionPickerModal
          title="Style"
          options={STYLE_OPTIONS}
          value={styleSel}
          onConfirm={(v) => {
            setStyleSel(v)
            setPicker(null)
          }}
          onClose={() => setPicker(null)}
          t={t}
        />
      )}
      {picker === 'strategy' && (
        <OptionPickerModal
          title="Strategy"
          options={STRATEGY_OPTIONS}
          value={strategySel}
          onConfirm={(v) => {
            setStrategySel(v)
            setPicker(null)
          }}
          onClose={() => setPicker(null)}
          t={t}
        />
      )}
    </Panel>
  )
}
