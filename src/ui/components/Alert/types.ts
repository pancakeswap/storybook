import type { MouseEvent, ReactNode } from "react";

export const variants = {
  INFO: "info",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning",
} as const;

export type Variants = (typeof variants)[keyof typeof variants];

export interface AlertProps {
  variant?: Variants;
  title: string | ReactNode;
  children?: ReactNode;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}
