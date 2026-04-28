import React from "react";
import Link from "./Link";
import type { LinkProps } from "./types";
import { OpenNewIcon } from "../Icons";

const LinkExternal: React.FC<React.PropsWithChildren<LinkProps>> = ({
  children,
  showExternalIcon = true,
  color = "primary",
  ...props
}) => {
  return (
    <Link external color={color} {...props}>
      {children}
      {showExternalIcon && <OpenNewIcon style={{ marginLeft: 4, width: 20, height: 20 }} />}
    </Link>
  );
};

export default LinkExternal;
