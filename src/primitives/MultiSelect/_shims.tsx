/**
 * Local shims for PCS internal dependencies used by MultiSelect.
 */
import { styled } from "styled-components";
import { space, layout, flexbox } from "styled-system";

/* ── useTheme (replaces @pancakeswap/hooks) ───────────────── */
import { useTheme as useSCTheme } from "styled-components";
export function useTheme() {
  const theme = useSCTheme() as any;
  return { theme: { ...theme, colors: theme.colors }, isDark: false };
}

/* ── Box / Flex ───────────────────────────────────────────── */
export const Box = styled.div<any>`${space}${layout}`;
export const Flex = styled(Box)<any>`display:flex;${flexbox}`;

/* ── Column ───────────────────────────────────────────────── */
export const Column = styled.div`display:flex;flex-direction:column;justify-content:flex-start;`;

/* ── Image (simple img wrapper) ───────────────────────────── */
export const Image = styled.img``;

/* ── Icons ────────────────────────────────────────────────── */
export { ArrowDropDownIcon, SearchIcon, CrossIcon } from "../Icons";

/* ── Checkbox (from real PCS copy in components/) ─────────── */
export { Checkbox } from "../Checkbox";
