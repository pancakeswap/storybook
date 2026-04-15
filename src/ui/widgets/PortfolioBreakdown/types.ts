export interface BreakdownItem {
  /** Gradient color — either a single hex for solid, or [from, to] for gradient */
  color: string | [string, string];
  /** Label, e.g. "Wallet balance" */
  title: string;
  /** Percentage of total (0–100) */
  percentage: number;
  /** Dollar balance string, e.g. "$4,00.01" */
  balance: string;
}

export interface PortfolioBreakdownProps {
  items: BreakdownItem[];
}
