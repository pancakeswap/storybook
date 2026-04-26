import type { HTMLAttributes } from "react";
import type { SpaceProps } from "styled-system";
import type { Colors } from "../_pcs-shims";
import type { BoxProps } from "../_pcs-shims";

export interface CardRibbonProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
  variantColor?: keyof Colors;
  text: string;
  ribbonPosition?: "right" | "left";
}

export type CardTheme = {
  background: string;
  boxShadow: string;
  boxShadowActive: string;
  boxShadowSuccess: string;
  boxShadowWarning: string;
  cardHeaderBackground: {
    default: string;
    blue: string;
    bubblegum: string;
    violet: string;
    pale: string;
  };
  dropShadow: string;
};

export interface CardProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  isDisabled?: boolean;
  ribbon?: React.ReactNode;
  borderBackground?: string;
  background?: string;
  innerCardProps?: BoxProps;
}
