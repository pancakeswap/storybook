import { styled } from "styled-components";
import type { DefaultTheme } from "styled-components";
import { layout, space, typography } from "styled-system";
import { getThemeValue } from "../_pcs-shims";
import type { TextProps } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color = "text", theme }: ThemedProps) => {
  return getThemeValue(theme, `colors.${color}`, color);
};

const Text = styled.div
  .attrs<TextProps>((props) => {
    const title =
      typeof props.title !== "undefined"
        ? props.title
        : props.ellipsis && typeof props.children === "string"
        ? props.children
        : undefined;
    return {
      ...props,
      title,
    };
  })
  .withConfig({
    shouldForwardProp: (prop) =>
      !["bold", "small", "ellipsis", "strikeThrough", "textTransform"].includes(prop),
  })<TextProps>`
  color: ${getColor};
  font-size: 16px;
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ strikeThrough }) => strikeThrough && `text-decoration: line-through;`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${space}
  ${typography}
  ${layout}

  ${({ small }) => small && `font-size: 14px;`}
`;

Text.defaultProps = {
  color: "text",
  small: false,
  fontSize: "16px",
  ellipsis: false,
};

export default Text;
