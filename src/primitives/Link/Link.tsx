import React from "react";
import { styled } from "styled-components";
import { EXTERNAL_LINK_PROPS } from "../_pcs-shims";
import Text from "../Text/Text";
import type { LinkProps } from "./types";

export const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  font-weight: 600;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;

const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ external, color = "primary", ...props }) => {
  const internalProps = external ? EXTERNAL_LINK_PROPS : {};
  return <StyledLink as="a" color={color} {...internalProps} {...props} />;
};

export default Link;
