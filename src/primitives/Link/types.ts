import type { AnchorHTMLAttributes } from "react";
import type { TextProps } from "../Text/types";

export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  showExternalIcon?: boolean;
}
