import React, { Children, cloneElement } from 'react'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { Card } from '../primitives/Card'

/**
 * Edge-to-edge trading-UI panel shell. Wraps the PCS `Card` so we keep the
 * shared component (accessibility role, future theme features) but flatten
 * the styling that doesn't fit a trading terminal:
 *   - border-radius (both the outer StyledCard and inner StyledCardInner)
 *   - the 1px/3px stroke-via-padding
 *   - the default block `display` — we want flex column so panel bodies can
 *     fill and `flex: 1` children work inside.
 *
 * The `& > div` selector targets `Card`'s inner `StyledCardInner` — fragile
 * (relies on Card's DOM shape) but contained: if Card's markup changes we
 * only update this one selector, not 8 widget files.
 */
export const PerpsPanel = styled(Card)`
  border-radius: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;

  & > div {
    border-radius: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 0;
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }
`

/*
 * Underline-style tab primitives — match Aster / Binance trading terminal
 * tabs (active tab gets a colored bottom border, no pill background).
 *
 * We do not extend the PCS `TabMenu` component: that one is an opinionated
 * pill/button tab-bar (padded wrapper, filled button backgrounds via
 * cloneElement prop injection). Adding an underline variant would require
 * rewriting its render loop and would touch a shared component used
 * elsewhere. Easier and safer to keep this local primitive tuned to the
 * trading UI.
 */

const UnderlineTabsWrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  gap: ${({ $fullWidth }) => ($fullWidth ? '0' : '16px')};
  padding: ${({ $fullWidth }) => ($fullWidth ? '0' : '0 12px')};
  border-bottom: ${({ $fullWidth }) => ($fullWidth ? '0' : '1px solid')};
  border-bottom-color: ${({ theme }) => theme.colors.cardBorder};
`

const UnderlineTabButton = styled.button<{ $active: boolean; $fullWidth?: boolean }>`
  background: transparent;
  border: 0;
  flex: ${({ $fullWidth }) => ($fullWidth ? '1' : '0 0 auto')};
  padding: ${({ $fullWidth }) => ($fullWidth ? '12px 0' : '8px 0 10px')};
  text-align: ${({ $fullWidth }) => ($fullWidth ? 'center' : 'left')};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active, theme }) => ($active ? theme.colors.secondary : theme.colors.textSubtle)};
  border-bottom: 2px solid
    ${({ $active, $fullWidth, theme }) =>
      $active ? theme.colors.primary : $fullWidth ? theme.colors.cardBorder : 'transparent'};
  margin-bottom: ${({ $fullWidth }) => ($fullWidth ? '0' : '-1px')};
  cursor: pointer;
  transition: color 0.12s, border-color 0.12s;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.text};
  }
`

export interface UnderlineTabProps {
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
  fullWidth?: boolean
}

export const UnderlineTab: React.FC<UnderlineTabProps> = ({
  children,
  isActive = false,
  onClick,
  fullWidth = false,
}) => (
  <UnderlineTabButton $active={isActive} $fullWidth={fullWidth} onClick={onClick} type="button">
    {children}
  </UnderlineTabButton>
)

export interface UnderlineTabsProps {
  activeIndex: number
  onItemClick: (index: number) => void
  children: React.ReactNode
  /**
   * When true, each tab takes equal share (`flex: 1`) and centers its text —
   * matches the segmented bar look used for Order Book / Trades. The
   * underline border sits under each tab individually. Leave false for
   * tight groups like the Positions panel's tab row.
   */
  fullWidth?: boolean
}

/**
 * Compose with `<UnderlineTab>` children — same API shape as PCS uikit's
 * ButtonMenu/TabMenu, so swapping is a one-line change if we ever want to
 * unify later.
 */
export const UnderlineTabs: React.FC<UnderlineTabsProps> = ({
  activeIndex,
  onItemClick,
  children,
  fullWidth = false,
}) => (
  <UnderlineTabsWrapper $fullWidth={fullWidth}>
    {Children.map(children, (child, index) => {
      if (!child || typeof child !== 'object') return child
      return cloneElement(child as ReactElement<UnderlineTabProps>, {
        isActive: index === activeIndex,
        onClick: () => onItemClick(index),
        fullWidth,
      })
    })}
  </UnderlineTabsWrapper>
)
