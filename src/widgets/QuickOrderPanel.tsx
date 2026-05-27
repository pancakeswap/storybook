import React, { useId, useState } from 'react'
import { styled, useTheme } from 'styled-components'
import Slider from '../primitives/Slider/Slider'
import { AddIcon, ChevronDownIcon } from '../primitives/Icons'

// Slide-out glyph (rounded square + double left-chevron) for the Quick
// Order header back control. Colors bind to theme tokens so it tracks
// light/dark; geometry is the provided product asset.
const SlideOutGlyph: React.FC = () => {
  const theme = useTheme()
  const maskId = useId().replace(/[:]/g, '')
  return (
    <svg width="34" height="35" viewBox="0 0 34 35" fill="none" aria-hidden>
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="35" fill="black">
        <rect fill="white" width="34" height="35" />
        <path d="M33 13C33 6.37258 27.6274 1 21 1L13 1C6.37258 1 1 6.37258 1 13L1 21C1 27.6274 6.37258 33 13 33H21C27.6274 33 33 27.6274 33 21V13Z" />
      </mask>
      <path
        d="M33 13C33 6.37258 27.6274 1 21 1L13 1C6.37258 1 1 6.37258 1 13L1 21C1 27.6274 6.37258 33 13 33H21C27.6274 33 33 27.6274 33 21V13Z"
        fill={theme.colors.inputPrimary}
      />
      <path
        d="M34 13C34 5.8203 28.1797 0 21 0L13 0C5.8203 0 0 5.8203 0 13H2C2 6.92487 6.92487 2 13 2L21 2C27.0751 2 32 6.92487 32 13H34ZM0 22C0 29.1797 5.8203 35 13 35H21C28.1797 35 34 29.1797 34 22L32 21C32 26.5228 27.0751 31 21 31L13 31C6.92487 31 2 26.5228 2 21L0 22ZM21 35C28.1797 35 34 29.1797 34 22V13C34 5.8203 28.1797 0 21 0V2C27.0751 2 32 6.92487 32 13V21C32 26.5228 27.0751 31 21 31V35ZM13 0C5.8203 0 0 5.8203 0 13V22C0 29.1797 5.8203 35 13 35V31C6.92487 31 2 26.5228 2 21L2 13C2 6.92487 6.92487 2 13 2V0Z"
        fill={theme.colors.inputSecondary}
        mask={`url(#${maskId})`}
      />
      <path
        d="M16.5 12L11.5 17L16.5 22"
        stroke={theme.colors.textSubtle}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 12L18.5 17L23.5 22"
        stroke={theme.colors.textSubtle}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export type QuickOrderDirection = 'long' | 'short'
export type QuickOrderType = 'market' | 'limit'

export interface QuickOrderPanelProps {
  direction: QuickOrderDirection
  markPrice: string
  takeProfit: string
  stopLoss: string
  estLiqPrice?: string
  availableBalance?: string
  leverage?: string
  marginMode?: string
  quoteAsset?: string
  /** Header back/collapse — closes the panel and returns to the order form. */
  onBack?: () => void
  onConfirm?: () => void
  t?: (k: string) => string
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 12px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  overflow-y: auto;
  scrollbar-width: thin;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  &:hover {
    filter: brightness(1.08);
  }
`

const Title = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`

// Market / Limit segmented toggle.
const TypeToggle = styled.div`
  display: flex;
  height: 40px;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.inputPrimary};
`

/* eslint-disable no-restricted-syntax -- active tab uses dark-on-light label per design */
const TypeTab = styled.button<{ $active: boolean }>`
  flex: 1;
  border: 0;
  border-radius: 16px;
  cursor: pointer;
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  background: ${({ $active, theme }) => ($active ? theme.colors.textSubtle : 'transparent')};
  color: ${({ $active, theme }) => ($active ? '#08060b' : theme.colors.textSubtle)};
`
/* eslint-enable no-restricted-syntax */

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
`

const ChipButton = styled.button`
  flex: 1;
  height: 32px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary60 ?? theme.colors.primary};
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    filter: brightness(1.05);
  }
`

const AvblRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
`

const AvblLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

// Value + unit + plus, right-aligned as one group.
const AvblRight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

const AddIconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary60 ?? theme.colors.primary};
  cursor: pointer;
  &:hover {
    filter: brightness(1.1);
  }
`

/* Size input — matches the trading panel's size field treatment. */
/* eslint-disable no-restricted-syntax */
const SizeField = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 48px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.inputPrimary};
  box-shadow: inset 0 2px 0 -1px rgba(0, 0, 0, 0.16);
  cursor: text;
  transition: box-shadow 0.12s;
  &:focus-within {
    box-shadow:
      0 0 0 1px #7645d9,
      0 0 0 4px rgba(118, 69, 217, 0.2);
  }
`
/* eslint-enable no-restricted-syntax */

const SizeLabel = styled.span`
  flex-shrink: 0;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const SizeInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const SizeUnit = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`

// Plain full-width block — the dotted slider is position:relative inside
// and needs to stretch; a flex parent would collapse its track to content
// width (leaving only the absolutely-positioned bunny visible).
const SliderWrap = styled.div`
  width: 100%;
  padding: 4px 0;
`

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
`

const RowLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const RowValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
`

/* eslint-disable no-restricted-syntax */
const ActionValue = styled.span<{ $dir: QuickOrderDirection }>`
  font-weight: 600;
  color: ${({ $dir, theme }) => ($dir === 'long' ? '#3ddbb5' : theme.colors.failure)};
`
/* eslint-enable no-restricted-syntax */

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
`

/* eslint-disable no-restricted-syntax */
const ConfirmButton = styled.button<{ $dir: QuickOrderDirection }>`
  width: 100%;
  height: 48px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  background: ${({ $dir, theme }) => ($dir === 'long' ? theme.colors.primary : theme.colors.failure)};
  color: #08060b;
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    filter: brightness(1.05);
  }
`
/* eslint-enable no-restricted-syntax */

const identity = (s: string) => s

/**
 * Quick Order panel (Figma 1083:39681) — slides in over the trading card
 * when a trade idea's "Create long/short position" CTA is tapped. Opaque
 * 320px-wide surface that fully covers the order panel beneath.
 */
export const QuickOrderPanel: React.FC<QuickOrderPanelProps> = ({
  direction,
  markPrice,
  takeProfit,
  stopLoss,
  estLiqPrice = '—',
  availableBalance = '0.000',
  leverage = '50x',
  marginMode = 'Cross',
  quoteAsset = 'USDT',
  onBack,
  onConfirm,
  t = identity,
}) => {
  const [orderType, setOrderType] = useState<QuickOrderType>('market')
  const [size, setSize] = useState('')
  const [limitPrice, setLimitPrice] = useState('')
  const [sizePercent, setSizePercent] = useState(0)
  const isLong = direction === 'long'
  const isLimit = orderType === 'limit'

  // Size ↔ bunny-slider are two views of the same fraction of the
  // available balance: typing an amount moves the bunny, dragging the
  // bunny fills the amount.
  const avail = Number(availableBalance.replace(/[^0-9.]/g, '')) || 0
  const clampPct = (n: number) => Math.max(0, Math.min(100, n))
  const handleSizeInput = (raw: string) => {
    const clean = raw.replace(/[^0-9.]/g, '')
    setSize(clean)
    const n = Number(clean) || 0
    setSizePercent(avail > 0 ? clampPct((n / avail) * 100) : 0)
  }
  const handleSliderChange = (pct: number) => {
    const p = clampPct(pct)
    setSizePercent(p)
    const amount = (avail * p) / 100
    setSize(p > 0 ? String(Math.round(amount * 100) / 100) : '')
  }

  return (
    <Root>
      <Header>
        <BackButton type="button" aria-label={t('Back')} onClick={onBack}>
          <SlideOutGlyph />
        </BackButton>
        <Title>{t('Quick Order')}</Title>
      </Header>

      <TypeToggle>
        <TypeTab type="button" $active={orderType === 'market'} onClick={() => setOrderType('market')}>
          {t('Market order')}
        </TypeTab>
        <TypeTab type="button" $active={orderType === 'limit'} onClick={() => setOrderType('limit')}>
          {t('Limit order')}
        </TypeTab>
      </TypeToggle>

      <ButtonRow>
        <ChipButton type="button">{t(marginMode)}</ChipButton>
        <ChipButton type="button">{leverage}</ChipButton>
      </ButtonRow>

      <AvblRow>
        <AvblLabel>{t('Avbl')}</AvblLabel>
        <AvblRight>
          {availableBalance} {quoteAsset}
          <AddIconButton type="button" aria-label={t('Add funds')}>
            <AddIcon width="18px" height="18px" />
          </AddIconButton>
        </AvblRight>
      </AvblRow>

      <SizeField>
        <SizeLabel>{t('Size')}</SizeLabel>
        <SizeInput
          inputMode="decimal"
          placeholder="0.0"
          value={size}
          onChange={(e) => handleSizeInput(e.target.value)}
          aria-label={t('Size')}
        />
        <SizeUnit>
          {quoteAsset}
          <ChevronDownIcon width="16px" height="16px" />
        </SizeUnit>
      </SizeField>

      {isLimit && (
        <SizeField>
          <SizeLabel>{t('Price')}</SizeLabel>
          <SizeInput
            inputMode="decimal"
            placeholder="0"
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value.replace(/[^0-9.]/g, ''))}
            aria-label={t('Limit price')}
          />
          <SizeUnit as="span">{quoteAsset}</SizeUnit>
        </SizeField>
      )}

      <SliderWrap>
        <Slider
          variant="dotted"
          name="quick-order-size-percent"
          min={0}
          max={100}
          value={sizePercent}
          onValueChanged={handleSliderChange}
        />
      </SliderWrap>

      <Summary>
        <Row>
          <RowLabel>{t('Action')}</RowLabel>
          <ActionValue $dir={direction}>{isLong ? t('Long') : t('Short')}</ActionValue>
        </Row>
        <Row>
          <RowLabel>{t('Mark Price')}</RowLabel>
          <RowValue>{markPrice}</RowValue>
        </Row>
        <Row>
          <RowLabel>{t('Take Profit')}</RowLabel>
          <RowValue>{takeProfit}</RowValue>
        </Row>
        <Row>
          <RowLabel>{t('Stop Loss')}</RowLabel>
          <RowValue>{stopLoss}</RowValue>
        </Row>
      </Summary>

      <Footer>
        <ConfirmButton type="button" $dir={direction} onClick={onConfirm}>
          {isLong ? t('Confirm Buy / Long') : t('Confirm Sell / Short')}
        </ConfirmButton>
        <Row>
          <RowLabel>{t('Est. Liq. Price')}</RowLabel>
          <RowValue>{estLiqPrice}</RowValue>
        </Row>
      </Footer>
    </Root>
  )
}
