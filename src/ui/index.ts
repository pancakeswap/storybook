/**
 * Public surface for the basic UI components. Add a re-export here only
 * for components that are stable enough to be consumed downstream by
 * `pancake-frontend` (or other apps). Internal helpers live in
 * `./components/*` and `./widgets/*` and are not part of the published
 * library API.
 */

// ── Components ────────────────────────────────────────────────
export { Button, IconButton } from './components/Button'
export type { ButtonProps, BaseButtonProps, Scale, Variant } from './components/Button'

export { Card, CardBody, CardHeader, CardFooter, CardRibbon } from './components/Card'
export type { CardProps, CardRibbonProps } from './components/Card'

export { Text, TooltipText, PreTitle } from './components/Text'
export type { TextProps } from './components/Text'

export { TabMenu, Tab } from './components/TabMenu'
export type { TabMenuProps, TabProps } from './components/TabMenu'

export { TableView } from './components/TableView'
export type { ITableViewProps, IColumnsType } from './components/TableView/Table'

export { Checkbox } from './components/Checkbox'
export type { CheckboxProps, CheckboxScales } from './components/Checkbox'

export { Toggle } from './components/Toggle'
export type { ToggleProps, ToggleScales } from './components/Toggle'

export { Input, InputGroup } from './components/Input'
export type { InputProps, InputGroupProps, InputScales } from './components/Input'

export { Radio } from './components/Radio'
export type { RadioProps, RadioScales } from './components/Radio'

export { Tag } from './components/Tag'
export type { TagProps, TagVariant, TagScale } from './components/Tag'

export { Heading } from './components/Heading'
export type { HeadingProps, HeadingScales, HeadingTags } from './components/Heading'

export { Link, StyledLink, LinkExternal } from './components/Link'
export type { LinkProps } from './components/Link'

export { Message, MessageText } from './components/Message'
export type { MessageProps } from './components/Message'

export { Collapse } from './components/Collapse'

export { ButtonMenu, ButtonMenuItem } from './components/ButtonMenu'
export type { ButtonMenuProps, ButtonMenuItemProps } from './components/ButtonMenu'

export { Alert, alertVariants } from './components/Alert'

export { Toast, ToastsProvider, useToast, toastTypes } from './components/Toast'

export { Box, Flex, Grid } from './components/Box'

export { default as Slider } from './components/Slider/Slider'

// ── Widgets (UI-level — modals/dropdowns shared across pages) ─
export {
  Modal,
  ModalV2,
  ModalProvider,
  MotionModal,
  BottomDrawer,
  useModal,
  useModalV2,
} from './widgets/Modal'
export type { ModalProps, InjectedModalProps, UseModalV2Props } from './widgets/Modal'

// ── Theme ─────────────────────────────────────────────────────
export { pcsTheme } from './components/theme'
export type { PcsTheme } from './components/theme'
