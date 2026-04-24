import React from 'react'
import styled from 'styled-components'
import { Button } from '../ui/components/Button'
import { Flex } from '../ui/components/Box'
import { Message, MessageText } from '../ui/components/Message'
import { Text } from '../ui/components/Text'
import { PerpsPanel } from './primitives'

/**
 * The trading-account panel renders one of four states. Each state is
 * named so the consumer can map their auth/data flow to the right view
 * without sprinkling boolean flags through the props.
 */
export type AccountPanelState =
  | { kind: 'no-wallet' }
  | { kind: 'needs-deposit' }
  | { kind: 'needs-trading' }
  | {
      kind: 'ready'
      /** Pre-formatted equity in quote asset (e.g. "1234.56"). */
      equity: string
      /** Pre-formatted available balance. */
      available: string
      /** Pre-formatted unrealized PnL — caller computes sign + decimals. */
      unrealizedPnl: string
      /** Display the PnL line in success / failure color. */
      pnlSign?: 'positive' | 'negative' | 'zero'
      /** Defaults to "Cross". */
      marginMode?: string
    }

export interface AccountPanelProps {
  /**
   * The user's external EOA — always shown above the equity rows when
   * present. Pre-truncate at the call site (e.g. "0x1234…abcd"); the
   * widget renders the string as-is.
   */
  walletDisplay?: string
  state: AccountPanelState
  /** Disable Deposit / Withdraw buttons (e.g. wallet not connected). */
  canDeposit?: boolean
  canWithdraw?: boolean
  onDeposit?: () => void
  onWithdraw?: () => void
  onEnableTrading?: () => void
  /** Optional translation hook — defaults are English literals. */
  t?: (key: string, options?: Record<string, unknown>) => string
}

const Card = styled(PerpsPanel)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`

const SectionTitle = styled(Text).attrs({ fontSize: '16px' })`
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`

const Row = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`

const Label = styled(Text).attrs({ fontSize: '14px', color: 'textSubtle' })``

const Value = styled(Text).attrs({ fontSize: '14px' })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
`

/**
 * 48px tall pill, 16px radius, dark inset bottom border to match the
 * pancake-frontend design. Primary = brand fill; Secondary = subdued
 * input-background fill with brand text.
 */
const ActionButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  flex: 1;
  height: 48px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: filter 0.12s, transform 0.1s;
  background: ${({ $variant, theme }) => ($variant === 'primary' ? theme.colors.primary : theme.colors.input)};
  color: ${({ $variant, theme }) => ($variant === 'primary' ? theme.colors.invertedContrast : theme.colors.primary)};
  &:hover:not(:disabled) {
    filter: brightness(1.08);
  }
  &:active:not(:disabled) {
    transform: scale(0.98);
    filter: brightness(0.95);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Section = styled(Flex)`
  flex-direction: column;
  gap: 8px;
`

const PnlValue = styled(Value)<{ $sign?: 'positive' | 'negative' | 'zero' }>`
  color: ${({ $sign, theme }) =>
    $sign === 'positive'
      ? theme.colors.success
      : $sign === 'negative'
      ? theme.colors.failure
      : theme.colors.text};
`

const identity = (s: string) => s

export const AccountPanel: React.FC<AccountPanelProps> = ({
  walletDisplay,
  state,
  canDeposit = true,
  canWithdraw = true,
  onDeposit,
  onWithdraw,
  onEnableTrading,
  t = identity,
}) => {
  return (
    <Card>
      <Flex style={{ gap: 8 }}>
        <ActionButton $variant="primary" onClick={onDeposit} disabled={!canDeposit}>
          {t('Deposit')}
        </ActionButton>
        <ActionButton $variant="secondary" onClick={onWithdraw} disabled={!canWithdraw}>
          {t('Withdraw')}
        </ActionButton>
      </Flex>

      {state.kind === 'needs-deposit' && (
        <Message variant="warning">
          <Flex flexDirection="column" style={{ gap: 4 }}>
            <Text fontSize="14px" bold>
              {t('Deposit to get started')}
            </Text>
            <MessageText fontSize="12px">
              {t(
                "Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.",
              )}
            </MessageText>
          </Flex>
        </Message>
      )}

      {state.kind === 'needs-trading' && (
        <>
          <Message variant="warning">
            <Flex flexDirection="column" style={{ gap: 4 }}>
              <Text fontSize="14px" bold>
                {t('Enable Trading to view your Aster balance')}
              </Text>
              <MessageText fontSize="12px">
                {t(
                  "Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.",
                )}
              </MessageText>
            </Flex>
          </Message>
          <Button onClick={onEnableTrading} scale="sm" variant="primary">
            {t('Enable Trading')}
          </Button>
        </>
      )}

      {state.kind === 'ready' && (
        <Section>
          <SectionTitle>{t('Account Equity')}</SectionTitle>
          <Row>
            <Label>{t('Wallet')}</Label>
            <Value>{walletDisplay ?? '—'}</Value>
          </Row>
          <Row>
            <Label>{t('Equity')}</Label>
            <Value>{state.equity || '—'}</Value>
          </Row>
          <Row>
            <Label>{t('Available')}</Label>
            <Value>{state.available || '—'}</Value>
          </Row>
          <Row>
            <Label>{t('Unrealized PnL')}</Label>
            <PnlValue $sign={state.pnlSign}>{state.unrealizedPnl || '—'}</PnlValue>
          </Row>
          <Row>
            <Label>{t('Margin mode')}</Label>
            <Value>{state.marginMode ?? t('Cross')}</Value>
          </Row>
        </Section>
      )}
    </Card>
  )
}
