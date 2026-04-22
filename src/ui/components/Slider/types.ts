import type { BoxProps } from "../Box/types";

export interface SliderMark {
  value: number;
  label?: string;
}

export default interface SliderProps extends BoxProps {
  name: string;
  min: number;
  max: number;
  value: number;
  step?: number | "any";
  onValueChanged: (newValue: number) => void;
  valueLabel?: string;
  disabled?: boolean;
  marks?: SliderMark[];
}
