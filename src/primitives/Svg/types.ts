/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ElementType, SVGAttributes } from "react";
import type { DefaultTheme } from "styled-components";
import type { SpaceProps } from "styled-system";
export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme;
  spin?: boolean;
}

export type IconComponentType = {
  icon: ElementType<any>;
  fillIcon?: ElementType<any>;
  isActive?: boolean;
  height?: string;
  width?: string;
  activeColor?: string;
  activeBackgroundColor?: string;
} & SvgProps;
