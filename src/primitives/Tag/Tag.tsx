import React from "react";
import { scales } from "./types";
import type { TagProps } from "./types";
import { StyledTag } from "./StyledTag";

const Tag: React.FC<React.PropsWithChildren<TagProps>> = ({
  startIcon,
  endIcon,
  variant = "primary",
  scale = scales.MD,
  outline = false,
  children,
  ...props
}) => (
  <StyledTag variant={variant} scale={scale} outline={outline} {...props}>
    {React.isValidElement(startIcon) &&
      React.cloneElement(startIcon, {
        // @ts-ignore
        mr: "0.5em",
      })}
    {children}
    {React.isValidElement(endIcon) &&
      React.cloneElement(endIcon, {
        // @ts-ignore
        ml: "0.5em",
      })}
  </StyledTag>
);

export default Tag;
