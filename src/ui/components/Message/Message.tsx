import React, { useContext, useMemo } from "react";
import { styled } from "styled-components";
import { space, variant as systemVariant } from "styled-system";
import { Box } from "../_pcs-shims";
import { CheckmarkCircleIcon, ErrorIcon, InfoFilledIcon, WarningIcon } from "../../Icons";
import { Text } from "../Text";
import type { TextProps } from "../Text/types";
import variants from "./theme";
import type { MessageProps } from "./types";

const MessageContext = React.createContext<MessageProps>({ variant: "success" });

const Icons = {
  warning: WarningIcon,
  warning60: WarningIcon,
  danger: ErrorIcon,
  success: CheckmarkCircleIcon,
  primary: InfoFilledIcon,
  primary60: InfoFilledIcon,
  secondary: ErrorIcon,
  secondary60: ErrorIcon,
};

const MessageContainer = styled.div<MessageProps>`
  background-color: gray;
  padding: 16px;
  border-radius: 16px;
  border: solid 1px;
  line-height: 1.4;

  ${space}
  ${systemVariant({
    variants,
  })}
`;

const FlexDiv = styled.div`
  display: flex;
`;

const colors = {
  // these color names should be place in the theme once the palette is finalized
  primary: "text",
  primary60: "#280D5F",
  warning: "#D67E0A",
  success: "#129E7D",
  danger: "failure",
  secondary: "#D67E0A",
  secondary60: "text",
  warning60: "text",
};

export const MessageText: React.FC<React.PropsWithChildren<TextProps>> = ({ children, ...props }) => {
  const ctx = useContext(MessageContext);
  return (
    <Text fontSize="14px" color={colors[ctx?.variant]} {...props}>
      {children}
    </Text>
  );
};

// Map variant border colors to actual CSS values for icon coloring
const iconColors: Record<string, string> = {
  warning: "var(--pcs-colors-warning)",
  danger: "var(--pcs-colors-failure)",
  success: "var(--pcs-colors-success)",
  primary: "var(--pcs-colors-secondary)",
  secondary: "var(--pcs-colors-warning)",
  primary60: "var(--pcs-colors-primary)",
  secondary60: "var(--pcs-colors-text)",
  warning60: "var(--pcs-colors-warning-60)",
};

const Message: React.FC<React.PropsWithChildren<MessageProps>> = ({
  children,
  variant,
  icon,
  action,
  actionInline,
  showIcon = true,
  ...props
}) => {
  const Icon = Icons[variant];
  const providerValue = useMemo(() => ({ variant }), [variant]);
  return (
    <MessageContext.Provider value={providerValue}>
      <MessageContainer variant={variant} {...props}>
        <FlexDiv>
          {showIcon && (
            <Box mr="12px" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              {icon ?? (
                <Icon
                  style={{ color: iconColors[variant] }}
                  width="24px"
                />
              )}
            </Box>
          )}
          <div style={{ flex: 1 }}>
            {children}
            {actionInline && action}
          </div>
        </FlexDiv>
        {!actionInline && action}
      </MessageContainer>
    </MessageContext.Provider>
  );
};

export default Message;
