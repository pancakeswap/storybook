/**
 * _pcs-shims.ts
 *
 * Minimal shims for PancakeSwap UIKit internal modules that don't exist
 * in this repo. Every copied PCS component that had a broken import now
 * points here instead.
 */

import type { ComponentPropsWithRef, ElementType } from "react";
import { styled, keyframes } from "styled-components";
import { space, layout, flexbox } from "styled-system";
import { lightColors, shadows } from "../tokens";

/* ── polymorphic helpers ────────────────────────────────────────── */

export type PolymorphicComponentProps<
  E extends ElementType,
  P,
> = P & { as?: E } & Omit<ComponentPropsWithRef<E>, keyof P | "as">;

export type PolymorphicComponent<
  P,
  D extends ElementType = "button",
> = <E extends ElementType = D>(
  props: PolymorphicComponentProps<E, P>,
) => React.ReactElement | null;

/* ── EXTERNAL_LINK_PROPS ────────────────────────────────────────── */

const EXTERNAL_LINK_PROPS = {
  target: "_blank" as const,
  rel: "noopener noreferrer",
};
export { EXTERNAL_LINK_PROPS };
export default EXTERNAL_LINK_PROPS;

/* ── vars (replacement for ../../css/vars.css) ──────────────────── */

export const vars = {
  colors: {
    gradientBubblegum: lightColors.gradientBubblegum,
    disabled: lightColors.disabled,
  },
  shadows: {
    level1: shadows.level1,
    active: shadows.active,
    success: shadows.success,
    warning: shadows.warning,
    danger: shadows.danger,
    focus: shadows.focus,
  },
};

/* ── Colors type ────────────────────────────────────────────────── */

export type Colors = Record<string, string>;

/* ── BoxProps ────────────────────────────────────────────────────── */

export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

/* ── Box component (styled.div + space + layout) ────────────────── */

export const Box = styled.div<any>`
  ${space}
  ${layout}
`;

/* ── Flex component (Box + display: flex + flexbox) ─────────────── */

export const Flex = styled(Box)<any>`
  display: flex;
  ${flexbox}
`;

/* ── promotedGradient keyframes ─────────────────────────────────── */

export const promotedGradient = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;

/* ── getThemeValue ──────────────────────────────────────────────── */

export function getThemeValue(theme: any, path: string, fallback?: any): any {
  const keys = path.split(".");
  let value: any = theme;
  for (const key of keys) {
    if (value === undefined || value === null) break;
    value = value[key];
  }
  return value ?? fallback;
}

/* ── re-export color sets from tokens ───────────────────────────── */

export { lightColors, darkColors } from "../tokens";

/* ── shouldForwardProp ─────────────────────────────────────────── */

// styled-system prop names that should NOT be forwarded to the DOM
const ssProps = new Set([
  "m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY",
  "p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY",
  "width","height","minWidth","minHeight","maxWidth","maxHeight","display","overflow",
  "fontSize","fontFamily","fontWeight","fontStyle","lineHeight","letterSpacing","textAlign",
  "color","bg","backgroundColor","opacity",
  "border","borderTop","borderRight","borderBottom","borderLeft","borderColor","borderWidth","borderStyle","borderRadius",
  "flex","flexWrap","flexDirection","flexGrow","flexShrink","flexBasis","justifyContent","alignItems","alignSelf","order",
  "gridGap","gridRowGap","gridColumnGap","gridColumn","gridRow","gridArea","gridAutoFlow","gridAutoRows","gridAutoColumns","gridTemplateRows","gridTemplateColumns","gridTemplateAreas",
  "position","zIndex","top","right","bottom","left",
  "size","variant",
]);

export const shouldForwardProp = (prop: string): boolean => !ssProps.has(prop);

/* ── SortArrow / SortDESCIcon (re-exports from our Icons) ───────── */

export { SortArrowIcon as SortArrow, SortDESCIcon } from "../Icons";
