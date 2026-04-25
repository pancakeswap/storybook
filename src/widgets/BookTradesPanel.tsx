import React from 'react'
import styled from 'styled-components'
import { PerpsPanel, UnderlineTab, UnderlineTabs } from './primitives'

export type BookTradesTab = 'book' | 'trades'

export interface BookTradesPanelProps {
  /** Controlled active tab. */
  tab: BookTradesTab
  onTabChange: (tab: BookTradesTab) => void
  /**
   * Order-book content. Both slots are kept mounted; the inactive one is
   * hidden via `display: none` so live WS subscriptions don't tear down
   * on each tab switch and the trades ring buffer keeps filling while
   * the user is on the Book tab.
   */
  bookContent: React.ReactNode
  tradesContent: React.ReactNode
  /** Translator. */
  t?: (key: string) => string
}

const Panel = styled(PerpsPanel)`
  height: 100%;
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

const identity = (s: string) => s

/**
 * Tabbed container for Order Book + Recent Trades — one panel, one
 * header. The two child slots are always mounted (hidden via
 * `display: none` rather than conditional rendering) so live WS
 * subscriptions inside them don't tear down on every tab toggle.
 */
export const BookTradesPanel: React.FC<BookTradesPanelProps> = ({
  tab,
  onTabChange,
  bookContent,
  tradesContent,
  t = identity,
}) => {
  const activeIndex = tab === 'book' ? 0 : 1
  return (
    <Panel>
      <UnderlineTabs
        fullWidth
        activeIndex={activeIndex}
        onItemClick={(i) => onTabChange(i === 0 ? 'book' : 'trades')}
      >
        <UnderlineTab>{t('Order Book')}</UnderlineTab>
        <UnderlineTab>{t('Trades')}</UnderlineTab>
      </UnderlineTabs>
      <Content>
        <Slot $hidden={tab !== 'book'}>{bookContent}</Slot>
        <Slot $hidden={tab !== 'trades'}>{tradesContent}</Slot>
      </Content>
    </Panel>
  )
}
