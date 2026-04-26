import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '../primitives/Box'
import { Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Message, MessageText } from '../primitives/Message'
import { Text } from '../primitives/Text'

export type PerpsErrorVariant = 'primary' | 'success' | 'warning' | 'danger'

export interface PerpsErrorMessageProps {
  /**
   * Visual severity. The consumer maps its domain-specific error
   * classification (e.g. user-rejected → primary, network → danger) to
   * one of these four buckets. The widget never inspects the original
   * error object — keeps the storybook surface free of consumer-specific
   * error types.
   */
  variant: PerpsErrorVariant
  /**
   * Optional bold heading. When omitted the widget renders a single-line
   * message — matches the "user-rejected" understated style in
   * pancake-frontend (no title, just the cancellation note).
   */
  title?: string
  /** Plain-language explanation of what went wrong / what to do next. */
  message: string
  /**
   * Optional raw stack/hex/payload string. When present a "Show details"
   * toggle appears that reveals the text in a monospace box. Consumers
   * should only pass this for kinds where seeing internals helps support
   * (e.g. unexpected RPC errors), never for user-rejection / validation.
   */
  details?: string
  /** Translator for the toggle labels. Defaults to identity. */
  t?: (key: string) => string
}

const Details = styled(Box)`
  margin-top: 6px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.textSubtle};
  word-break: break-all;
  white-space: pre-wrap;
  max-height: 120px;
  overflow: auto;
`

const DetailsToggle = styled(Button).attrs({ variant: 'text', scale: 'xs' })`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`

const identity = (s: string) => s

/**
 * User-facing error display. Never renders raw viem/wagmi stack traces,
 * hex payloads, or provider internals directly — those hide behind a
 * "Show details" disclosure so designers/support can still grab them
 * when needed.
 *
 * The consumer (pancake-frontend) classifies its own error objects and
 * maps them to the `variant` + `title` + `message` + `details` props.
 * Keeps this widget agnostic to error-handling libraries (viem, wagmi,
 * Aster classifier, etc.).
 */
export const PerpsErrorMessage: React.FC<PerpsErrorMessageProps> = ({
  variant,
  title,
  message,
  details,
  t = identity,
}) => {
  const [expanded, setExpanded] = useState(false)

  // Compact form: no title, just a single-line message. Matches the
  // pancake-frontend "user-rejected" style — keeps the message
  // understated since the user explicitly cancelled, not an error.
  if (!title) {
    return (
      <Message variant={variant}>
        <MessageText>{message}</MessageText>
      </Message>
    )
  }

  return (
    <Message variant={variant}>
      <Flex flexDirection="column">
        <MessageText>
          <Text fontSize="13px" bold>
            {title}
          </Text>
        </MessageText>
        <MessageText>
          <Text fontSize="12px">{message}</Text>
        </MessageText>
        {details && (
          <>
            <DetailsToggle onClick={() => setExpanded((v) => !v)}>
              {expanded ? t('Hide details') : t('Show details')}
            </DetailsToggle>
            {expanded && <Details>{details}</Details>}
          </>
        )}
      </Flex>
    </Message>
  )
}
