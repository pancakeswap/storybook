import type { BoxProps } from "../Box/types";

/**
 * `bunny` (default): the classic bunny-thumb slider.
 * `dotted`: percent-based rail with clickable stops at every `dotStep` (default
 * 25%). Matches the storybook `op-slider` design used in the perps OrderPanel.
 */
export type SliderVariant = "bunny" | "dotted";

export default interface SliderProps extends BoxProps {
  name: string;
  min: number;
  max: number;
  value: number;
  step?: number | "any";
  onValueChanged: (newValue: number) => void;
  valueLabel?: string;
  disabled?: boolean;
  /** Visual variant. Defaults to `"bunny"`. */
  variant?: SliderVariant;
  /**
   * Step (in percent of the range) between clickable dots when
   * `variant="dotted"`. Defaults to `25` → stops at 0/25/50/75/100.
   */
  dotStep?: number;
}
