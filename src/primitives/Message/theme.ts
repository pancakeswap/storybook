import type { Variant } from "./types";

const variants = {
  warning: {
    // eslint-disable-next-line no-restricted-syntax -- variant theme table, alpha intentional
    backgroundColor: "#FFB23719",
    borderColor: "warning",
  },
  danger: {
    // eslint-disable-next-line no-restricted-syntax -- variant theme table, alpha intentional
    backgroundColor: "#ED4B9E19",
    borderColor: "failure",
  },
  success: {
    backgroundColor: "rgba(49, 208, 170, 0.1)",
    borderColor: "success",
  },
  primary: {
    backgroundColor: "rgba(118, 69, 217, 0.1)",
    borderColor: "secondary",
  },
  secondary: {
    // eslint-disable-next-line no-restricted-syntax -- variant theme table, alpha intentional
    backgroundColor: "#FFB23719",
    borderColor: "warning",
  },
  primary60: {
    // eslint-disable-next-line no-restricted-syntax -- variant theme table, alpha intentional
    backgroundColor: "#EEFBFC",
    // eslint-disable-next-line no-restricted-syntax -- variant theme table, alpha intentional
    borderColor: "#C1EDF0",
  },
  secondary60: {
    backgroundColor: "secondary10",
    borderColor: "secondary",
  },
  warning60: {
    backgroundColor: "warning10",
    borderColor: "warning20",
    iconColor: "warning60",
  },
} as const satisfies Record<Variant, { backgroundColor: string; borderColor: string; iconColor?: string }>;

export default variants;
