import * as Popover from '@radix-ui/react-popover'
import { styled } from 'styled-components'

/**
 * Visual port of pancake-frontend's `StyledTooltip` re-expressed on top
 * of `Popover.Content` + `Popover.Arrow`. Radix exposes the resolved
 * placement via `data-side` (top|right|bottom|left) — the original used
 * popper's `data-popper-placement^=`, which we no longer need because
 * Radix gives us the exact side as a discrete attribute.
 */
export const StyledTooltipContent = styled(Popover.Content)`
  padding: 16px;
  font-size: 16px;
  line-height: 130%;
  border-radius: 16px;
  max-width: 320px;
  z-index: 101;
  background: ${({ theme }) => theme.tooltip.background};
  color: ${({ theme }) => theme.tooltip.text};
  box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
  word-wrap: break-word;
  /* Radix sets visibility to 'hidden' until positioned to avoid the
     "render at 0,0 then jump" flash. Nothing to do here. */
`

export const StyledTooltipArrow = styled(Popover.Arrow)`
  fill: ${({ theme }) => theme.tooltip.background};
`
