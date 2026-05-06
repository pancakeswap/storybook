import React from 'react'
import { styled } from 'styled-components'
import { ModalV2 } from '../primitives/Modal/ModalV2'

// Pre-rendered "share-card" composites — bunny illustration + branding
// + sample data baked in by the design team. Swapped per PnL tier so
// the bunny's expression / pose matches the user's outcome (huge gain
// → cheering bunny, brutal loss → sad bunny). Vite handles the URL
// resolution at build time.
import gain0to5 from './share-pnl-bunnies/gain-0-5.png'
import gain5to25 from './share-pnl-bunnies/gain-5-25.png'
import gain25to75 from './share-pnl-bunnies/gain-25-75.png'
import gainAbove75 from './share-pnl-bunnies/gain-above-75.png'
import loss0to5 from './share-pnl-bunnies/loss-0-5.png'
import loss5to25 from './share-pnl-bunnies/loss-5-25.png'
import loss25to75 from './share-pnl-bunnies/loss-25-75.png'
import lossBelow75 from './share-pnl-bunnies/loss-below-75.png'

/** Eight discrete PnL buckets. Each maps to a different bunny pose
 *  baked into the share card. */
export type SharePnlTier =
  | 'gain-above-75'
  | 'gain-25-75'
  | 'gain-5-25'
  | 'gain-0-5'
  | 'loss-0-5'
  | 'loss-5-25'
  | 'loss-25-75'
  | 'loss-below-75'

const TIER_IMAGES: Record<SharePnlTier, string> = {
  'gain-above-75': gainAbove75,
  'gain-25-75': gain25to75,
  'gain-5-25': gain5to25,
  'gain-0-5': gain0to5,
  'loss-0-5': loss0to5,
  'loss-5-25': loss5to25,
  'loss-25-75': loss25to75,
  'loss-below-75': lossBelow75,
}

/** Map a signed ROE% (e.g. 24.78 for +24.78%) to its bucket. The
 *  thresholds match the eight Figma frames the design team supplied. */
export const tierFromPnlPct = (pnlPct: number): SharePnlTier => {
  if (pnlPct >= 75) return 'gain-above-75'
  if (pnlPct >= 25) return 'gain-25-75'
  if (pnlPct >= 5) return 'gain-5-25'
  if (pnlPct >= 0) return 'gain-0-5'
  if (pnlPct >= -5) return 'loss-0-5'
  if (pnlPct >= -25) return 'loss-5-25'
  if (pnlPct >= -75) return 'loss-25-75'
  return 'loss-below-75'
}

export interface SharePnlModalProps {
  /** Controlled open state. */
  isOpen: boolean
  onClose: () => void

  /**
   * Return on equity, in percent (e.g. 24.78 for +24.78%). Determines
   * which bunny tier renders. Pass it pre-signed (`-` for losses).
   */
  pnlPct: number

  /**
   * Force a specific tier — useful for showcase pages / Storybook
   * controls. Falls back to {@link tierFromPnlPct}(pnlPct) when
   * undefined.
   */
  tier?: SharePnlTier

  /**
   * Override the rendered share-card image. In production the
   * consumer typically rasterizes a custom composite (with the real
   * position's symbol / leverage / prices / QR) via html-to-image
   * and passes the resulting data URL here. When omitted the modal
   * falls back to the design-team's static placeholder image for
   * the resolved tier.
   */
  imageSrc?: string

  /** Fired when "Copy image" is clicked. Consumer owns the actual
   *  clipboard write (typically `ClipboardItem` with image/png). */
  onCopyImage?: () => void
  /** Fired when "share on X" is clicked. Consumer owns the
   *  social-intent URL or window.open. */
  onShareX?: () => void

  /** Optional translator. Defaults to identity. */
  t?: (key: string) => string
}

// ── Styles ────────────────────────────────────────────────────

/* Modal shell — Figma 77:16321. Fixed 456px width, 24px padding,
 * 24px radius, asymmetric border (top/left/right 1px, bottom 2px)
 * for the slight "card lift" the design system uses across modals.
 *
 * `position: relative` + a z-index drawn from the theme's modal layer
 * stacks the card above the `<Overlay>` sibling that ModalV2 renders
 * just before us — without it the card sits in static flow and the
 * overlay (which is `position: fixed; z-index: 20`) paints on top,
 * dimming the entire modal. */
const Card = styled.div`
  display: flex;
  width: 456px;
  max-width: calc(100vw - 32px);
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.modal};
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Title = styled.h4`
  margin: 0;
  font-family: Kanit;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
`

const CloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSubtle};
  transition: color 0.12s;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

/* Image frame — 16px radius, light border. The image itself is a
 * 16:9-ish composite at 686x384 native resolution. We let it fill
 * the modal width and constrain the height by aspect-ratio, so the
 * frame scales nicely on smaller viewports. */
const ImageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  border-radius: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.cardSecondary};
`

const ShareImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1818 / 1024;
  object-fit: cover;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`

/* "Copy image" — outlined primary, primary60 text. */
/* eslint-disable no-restricted-syntax -- TODO(design): need info-teal token in uikit */
const CopyBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 0;
  min-width: 0;
  padding: 12px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #02919D;
  cursor: pointer;
  transition: opacity 0.12s, background 0.12s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary}1A;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  html.dark & {
    color: #48D0DB;
  }
`
/* eslint-enable no-restricted-syntax */

/* "share on X" — filled primary with the 2px bottom-inset shadow the
 * design system uses on filled CTAs. */
/* eslint-disable no-restricted-syntax -- on colored bg, contrast guarantee */
const ShareXBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex: 1 0 0;
  min-width: 0;
  padding: 11px 12px 13px;
  border-radius: 16px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  transition: opacity 0.12s, transform 0.04s;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }
  &:active:not(:disabled) {
    transform: translateY(1px);
    border-bottom-width: 1px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`
/* eslint-enable no-restricted-syntax */

// ── Inline glyphs ─────────────────────────────────────────────

const CloseGlyph = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 5l14 14M19 5L5 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const XLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill="currentColor"
    />
  </svg>
)

// ── Component ─────────────────────────────────────────────────

const identity = (s: string) => s

/**
 * "Share position" modal — pops up from the share-arrow icon in a
 * row of {@link PositionsPanel}. Renders a pre-baked composite
 * "share card" (brand + pair + leverage + headline ROE% + entry/last
 * prices + QR + bunny illustration) whose bunny pose matches the
 * user's PnL tier (8 buckets, see {@link tierFromPnlPct}).
 *
 * Stateless presentation — the actual social intents are wired by
 * the consumer via `onCopyImage` and `onShareX`. The widget just
 * emits the click intent.
 *
 * The bunny image is a static asset bundled with the widget. For
 * production the consumer can pass `imageSrc` to override with a
 * dynamically-rasterized snapshot of the user's position.
 */
export const SharePnlModal: React.FC<SharePnlModalProps> = ({
  isOpen,
  onClose,
  pnlPct,
  tier,
  imageSrc,
  onCopyImage,
  onShareX,
  t = identity,
}) => {
  const resolvedTier = tier ?? tierFromPnlPct(pnlPct)
  const src = imageSrc ?? TIER_IMAGES[resolvedTier]

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Card role="dialog" aria-modal="true" aria-label={t('Share position')}>
        <Header>
          <Title>{t('Share position')}</Title>
          <CloseBtn type="button" aria-label={t('Close')} onClick={onClose}>
            <CloseGlyph />
          </CloseBtn>
        </Header>

        <ImageFrame>
          <ShareImage
            src={src}
            alt={t('Position PnL share card')}
            draggable={false}
          />
        </ImageFrame>

        <Actions>
          <CopyBtn type="button" onClick={onCopyImage} disabled={!onCopyImage}>
            {t('Copy image')}
          </CopyBtn>
          <ShareXBtn type="button" onClick={onShareX} disabled={!onShareX}>
            <span>{t('share on')}</span>
            <XLogo />
          </ShareXBtn>
        </Actions>
      </Card>
    </ModalV2>
  )
}
