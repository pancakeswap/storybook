export interface TokenInfo {
  /** Token ticker symbol, e.g. "BNB" */
  symbol: string;
  /** Network / chain display name, e.g. "BNB Chain" */
  chainName?: string;
  /** Token logo image URL(s) — first successful URL is used */
  logoUrls: string[];
  /** Chain logo image URL (shown as small badge overlay) */
  chainLogoUrl?: string;
}

export interface TokenDisplayProps {
  token: TokenInfo;
  /** Token logo diameter in px. Default 40 */
  size?: number;
  /** Show the chain network badge on the logo. Default true if chainLogoUrl provided */
  showChainLogo?: boolean;
}
