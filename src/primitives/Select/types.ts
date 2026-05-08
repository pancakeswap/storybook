import type { BoxProps } from '../Box'

export interface SelectOption<V = unknown> {
  label: string
  value: V
  imageUrl?: string
  /**
   * Optional secondary text shown ONLY in the dropdown row (after the
   * label), e.g. for a TIF picker "GTC" / description "Good till
   * canceled" — the closed trigger keeps the terse label while the open
   * row spells out what each option means. PAN-11856.
   */
  description?: string
}

export interface SelectProps<V = unknown> extends BoxProps {
  options: SelectOption<V>[]
  onOptionChange?: (option: SelectOption<V>) => void
  placeHolderText?: string
  defaultOptionIndex?: number
  textStyle?: React.CSSProperties
  listStyle?: React.CSSProperties
}
