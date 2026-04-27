/**
 * Public surface for the basic UI primitives — published as
 * `@pancakeswap/storybook/primitives`. Add a re-export here only for
 * components stable enough to be consumed downstream by `pancake-frontend`
 * (or other apps). Internal helpers live in `./primitives/*` and are not
 * part of the published library API.
 */

// ── Components ────────────────────────────────────────────────
export { Button, IconButton } from './primitives/Button'
export type { ButtonProps, BaseButtonProps, Scale, Variant } from './primitives/Button'

export { Card, CardBody, CardHeader, CardFooter, CardRibbon } from './primitives/Card'
export type { CardProps, CardRibbonProps } from './primitives/Card'

export { Text, TooltipText, PreTitle } from './primitives/Text'
export type { TextProps } from './primitives/Text'

export { TabMenu, Tab } from './primitives/TabMenu'
export type { TabMenuProps, TabProps } from './primitives/TabMenu'

export { TableView } from './primitives/TableView'
export type { ITableViewProps, IColumnsType } from './primitives/TableView/Table'

export { Checkbox } from './primitives/Checkbox'
export type { CheckboxProps, CheckboxScales } from './primitives/Checkbox'

export { Toggle } from './primitives/Toggle'
export type { ToggleProps, ToggleScales } from './primitives/Toggle'

export { Input, InputGroup } from './primitives/Input'
export type { InputProps, InputGroupProps, InputScales } from './primitives/Input'

export { Radio } from './primitives/Radio'
export type { RadioProps, RadioScales } from './primitives/Radio'

export { Tag } from './primitives/Tag'
export type { TagProps, TagVariant, TagScale } from './primitives/Tag'

export { Heading } from './primitives/Heading'
export type { HeadingProps, HeadingScales, HeadingTags } from './primitives/Heading'

export { Link, StyledLink, LinkExternal } from './primitives/Link'
export type { LinkProps } from './primitives/Link'

export { Message, MessageText } from './primitives/Message'
export type { MessageProps } from './primitives/Message'

export { Collapse } from './primitives/Collapse'

export { ButtonMenu, ButtonMenuItem } from './primitives/ButtonMenu'
export type { ButtonMenuProps, ButtonMenuItemProps } from './primitives/ButtonMenu'

export { Alert, alertVariants } from './primitives/Alert'

export { Toast, ToastsProvider, useToast, toastTypes } from './primitives/Toast'

export { Box, Flex, Grid } from './primitives/Box'

export { default as Slider } from './primitives/Slider/Slider'

// ── Modals / dropdowns (UI-level primitives shared across pages) ─
export {
  Modal,
  ModalV2,
  ModalProvider,
  MotionModal,
  BottomDrawer,
  useModal,
  useModalV2,
} from './primitives/Modal'
export type { ModalProps, InjectedModalProps, UseModalV2Props } from './primitives/Modal'

// ── Theme ─────────────────────────────────────────────────────
export { pcsTheme } from './primitives/theme'
export type { PcsTheme } from './primitives/theme'

// ── Icons ─────────────────────────────────────────────────────
// Re-export the full 253-icon set. Consumers get tree-shaken individual
// icons via named imports (e.g. `import { ChevronDownIcon } from '...'`).
export * from './primitives/Icons'

// ── Contexts / hooks ──────────────────────────────────────────
export { useMatchBreakpoints, MatchBreakpointsProvider } from './contexts'
