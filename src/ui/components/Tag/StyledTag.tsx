import type { DefaultTheme } from "styled-components";
import { styled } from "styled-components";
import { space, variant, typography } from "styled-system";
import type { Colors } from "../_pcs-shims";
import { scaleVariants, styleVariants } from "./theme";
import type { TagProps } from "./types";
import { variants } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getOutlineStyles = ({ outline, theme, variant: variantKey = variants.PRIMARY }: ThemedProps) => {
  if (outline) {
    const themeColorKey = styleVariants[variantKey].backgroundColor as keyof Colors;
    const color = theme.colors[themeColorKey];

    return `
      color: ${color};
      background: none;
      border: 2px solid ${color};
    `;
  }

  return "";
};

export const StyledTag = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["variant", "scale", "outline", "textTransform", "startIcon", "endIcon"].includes(prop),
})<ThemedProps>`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${space}
  ${typography}

  ${getOutlineStyles}
`;

export default null;
