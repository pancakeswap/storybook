import type { PcsTheme } from "../theme";

export const scales = {
  XS: "xs",
  SM: "sm",
  MD: "md",
} as const;

export type Scales = (typeof scales)[keyof typeof scales];

export interface CheckboxProps {
  scale?: Scales | string;
  colors?: {
    background?: keyof PcsTheme["colors"];
    checkedBackground?: keyof PcsTheme["colors"];
    checkedColor?: keyof PcsTheme["colors"];
    border?: keyof PcsTheme["colors"];
  };
  indeterminate?: boolean;
}
