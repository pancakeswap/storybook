import * as Popover from '@radix-ui/react-popover'
import { styled } from 'styled-components'

/**
 * Visual port of pancake-frontend's `StyledTooltip` re-expressed on top
 * of `Popover.Content` + `Popover.Arrow`. Radix exposes the resolved
 * placement via `data-side` (top|right|bottom|left) — the original used
 * popper's `data-popper-placement^=`, which we no longer need because
 * Radix gives us the exact side as a discrete attribute.
 */
/**
 * High-contrast tooltip — dark surface in light mode, light surface in
 * dark mode (per Figma 391:39212-style direction). Color swap is keyed
 * on the `html.dark` class set by Storybook's theme toolbar / consumer
 * theme switcher.
 */
export const StyledTooltipContent = styled(Popover.Content)`
  padding: 16px;
  font-size: 16px;
  line-height: 130%;
  border-radius: 16px;
  max-width: 320px;
  z-index: 101;
  background: #08060B;
  color: #FFFFFF;
  box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
  word-wrap: break-word;

  html.dark & {
    background: #FFFFFF;
    color: #08060B;
  }
`

export const StyledTooltipArrow = styled(Popover.Arrow)`
  fill: #08060B;

  html.dark & {
    fill: #FFFFFF;
  }
`
