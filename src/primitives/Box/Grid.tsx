import type { ComponentType } from "react";
import { styled } from "styled-components";
import { flexbox, grid } from "styled-system";
import Box, { MotionBox } from "./Box";
import type { GridProps } from "./types";

const Grid: ComponentType<GridProps> = styled(Box)<GridProps>`
  display: grid;
  ${flexbox}
  ${grid}
`;

export const MotionGrid: ComponentType<GridProps> = styled(MotionBox)<GridProps>`
  display: grid;
  ${flexbox}
  ${grid}
`;

export default Grid;
