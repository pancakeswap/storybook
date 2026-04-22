import { m as motion } from "framer-motion";
import type { Variants } from "framer-motion";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { styled } from "styled-components";
import { background, border, layout, position, space, color } from "styled-system";
import type { BoxProps } from "./types";

export { type AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
export type MotionVariants = Variants;

export const MotionBox = styled(motion.div).withConfig({})<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

const Box = styled.div.withConfig({
  shouldForwardProp,
})<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${color}
`;

export default Box;
