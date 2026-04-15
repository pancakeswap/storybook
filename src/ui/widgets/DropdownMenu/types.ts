import type { ReactNode } from "react";

export interface DropdownMenuItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface DropdownMenuProps {
  /** The trigger element (e.g. a Button) */
  trigger: ReactNode;
  /** Menu items to display in the panel */
  items: DropdownMenuItem[];
  /** Placement relative to trigger. Default "bottom-end" */
  placement?: "bottom-start" | "bottom-end";
}
