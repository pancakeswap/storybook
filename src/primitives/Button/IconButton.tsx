import { styled } from "styled-components";
import type { PolymorphicComponent } from "../_pcs-shims";
import Button from "./Button";
import type { BaseButtonProps } from "./types";

const IconButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  padding: 2px;
  width: ${({ scale }) => (scale === "xs" ? "auto" : scale === "sm" ? "32px" : "48px")};
`;

export default IconButton;
