import type { SourceName, TokenSymbol } from "./types";

interface TokenIconProps {
  size?: number;
}

const TokenETH = ({ size = 32 }: TokenIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: "block" }}>
    <defs>
      <linearGradient id={`eth-bg-${size}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A4C7F4" />
        <stop offset="100%" stopColor="#5C8DEF" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="16" fill={`url(#eth-bg-${size})`} />
    <path d="M16 5 L16 13.2 L22.5 16.1 Z" fill="#fff" fillOpacity="0.9" />
    <path d="M16 5 L9.5 16.1 L16 13.2 Z" fill="#fff" fillOpacity="0.7" />
    <path d="M16 21.1 L16 27 L22.5 17.4 Z" fill="#fff" fillOpacity="0.9" />
    <path d="M16 27 L16 21.1 L9.5 17.4 Z" fill="#fff" fillOpacity="0.7" />
    <path d="M16 19.85 L22.5 16.1 L16 13.2 Z" fill="#fff" fillOpacity="1" />
    <path d="M9.5 16.1 L16 19.85 L16 13.2 Z" fill="#fff" fillOpacity="0.85" />
  </svg>
);

const TokenUSDC = ({ size = 32 }: TokenIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: "block" }}>
    <circle cx="16" cy="16" r="16" fill="#2775CA" />
    <path
      d="M20.5 18.5c0-2.4-1.4-3.2-4.3-3.5-2.1-.3-2.5-.8-2.5-1.7 0-.9.6-1.5 2-1.5 1.2 0 1.9.4 2.2 1.4.1.2.3.3.5.3h1.1c.3 0 .5-.2.5-.5v-.1c-.3-1.5-1.5-2.6-3.1-2.7v-1.7c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5v1.7c-2 .3-3.3 1.6-3.3 3.3 0 2.3 1.4 3.2 4.3 3.5 2 .3 2.6.8 2.6 1.8 0 1-1 1.7-2.3 1.7-1.8 0-2.4-.7-2.6-1.7-.1-.3-.3-.4-.5-.4h-1.1c-.3 0-.5.2-.5.5v.1c.3 1.7 1.4 2.9 3.5 3.2v1.7c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-1.7c2.1-.3 3.5-1.7 3.5-3.6Z"
      fill="#fff"
    />
    <path
      d="M12.5 25.5c-5-1.8-7.5-7.4-5.6-12.3.9-2.6 3-4.5 5.6-5.5.3-.1.4-.3.4-.6V6.2c0-.2-.1-.4-.4-.4 0 0-.1 0-.1.1-6 1.9-9.3 8.3-7.4 14.3 1.1 3.5 3.9 6.2 7.4 7.4.2.1.5 0 .5-.2.1-.1.1-.1.1-.3v-.9c0-.2-.2-.4-.5-.5l-.1-.2Zm7-19.7c-.2-.1-.5 0-.5.2-.1.1-.1.1-.1.3v.9c0 .2.2.4.5.5 5 1.8 7.5 7.4 5.6 12.3-.9 2.6-3 4.5-5.6 5.5-.3.1-.4.3-.4.6v.9c0 .2.1.4.4.4 0 0 .1 0 .1-.1 6-1.9 9.3-8.3 7.4-14.3-1.1-3.6-3.9-6.3-7.4-7.4Z"
      fill="#fff"
    />
  </svg>
);

const TokenWBTC = ({ size = 32 }: TokenIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: "block" }}>
    <circle cx="16" cy="16" r="16" fill="#F7931A" />
    <path
      d="M21.4 14.3c.3-1.9-1.2-2.9-3.2-3.6l.6-2.6-1.6-.4-.6 2.5c-.4-.1-.9-.2-1.3-.3l.6-2.5-1.6-.4-.6 2.6c-.4-.1-.7-.2-1-.2l-2.2-.5-.4 1.7s1.2.3 1.2.3c.6.2.7.6.7.9l-.7 2.9c0 0 .1 0 .2.1h-.2l-1 4.1c-.1.2-.3.5-.7.4 0 0-1.2-.3-1.2-.3l-.8 1.8 2.1.5c.4.1.8.2 1.1.3l-.6 2.6 1.6.4.6-2.6c.4.1.9.2 1.3.3l-.6 2.6 1.6.4.6-2.6c2.7.5 4.7.3 5.6-2.1.7-2-.1-3.1-1.5-3.8 1-.2 1.8-.9 2-2.3Zm-3.6 5c-.5 2-3.9.9-5 .6l.8-3.4c1.1.3 4.7.8 4.2 2.8Zm.5-5c-.5 1.8-3.3.9-4.2.7l.7-3c.9.2 4 .6 3.5 2.3Z"
      fill="#fff"
    />
  </svg>
);

const TokenUSDT = ({ size = 32 }: TokenIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: "block" }}>
    <circle cx="16" cy="16" r="16" fill="#26A17B" />
    <path
      d="M17.9 14.3v-2.1h4.8V9H9.3v3.2H14v2.1c-3.9.2-6.8 1-6.8 1.9 0 1 2.9 1.7 6.8 1.9v6.8h3.9V18c3.9-.2 6.7-.9 6.7-1.9.1-1-2.8-1.7-6.7-1.9Zm0 3.2c-.1 0-1 .1-2 .1-.7 0-1.6-.1-1.9-.1-3.4-.1-5.9-.7-5.9-1.4 0-.7 2.5-1.3 5.9-1.4v2.4c.4 0 1.2.1 2 .1 1 0 1.9-.1 1.9-.1v-2.4c3.4.1 5.9.7 5.9 1.4-.1.6-2.6 1.3-5.9 1.4Z"
      fill="#fff"
    />
  </svg>
);

const TokenDAI = ({ size = 32 }: TokenIconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: "block" }}>
    <circle cx="16" cy="16" r="16" fill="#F4B731" />
    <path
      d="M9.3 9.5h7c4.3 0 7.5 2.3 8.7 5.7h1.7v1.6h-1.3c0 .3.1.6.1.9v.1c0 .3 0 .6-.1.9h1.4v1.6h-1.7c-1.2 3.4-4.4 5.7-8.7 5.7H9.3v-5.7H7.6v-1.6h1.7v-1.9H7.6v-1.6h1.7V9.5Zm1.9 11.3v3.5h4.9c3.2 0 5.6-1.4 6.7-3.5H11.2Zm12.2-1.6H11.2v-1.9h12.2c0 .3.1.5.1.8v.2c-.1.3-.1.6-.1.9Zm-.6-3.6H11.2v-3.5h5.1c3.1.1 5.5 1.5 6.5 3.5Z"
      fill="#fff"
    />
  </svg>
);

const TokenWETH = TokenETH;

export const TOKENS: Record<TokenSymbol, React.FC<TokenIconProps>> = {
  ETH: TokenETH,
  WETH: TokenWETH,
  USDC: TokenUSDC,
  USDT: TokenUSDT,
  WBTC: TokenWBTC,
  DAI: TokenDAI,
};

export const NetworkBadgeETH = ({ size = 14 }: TokenIconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" style={{ display: "block" }}>
    <rect x="0" y="0" width="14" height="14" rx="4" fill="#627EEA" />
    <path d="M7 2.2 L7 5.8 L9.85 7.07 Z" fill="#fff" fillOpacity="0.6" />
    <path d="M7 2.2 L4.15 7.07 L7 5.8 Z" fill="#fff" />
    <path d="M7 9.16 L7 11.78 L9.85 7.6 Z" fill="#fff" fillOpacity="0.6" />
    <path d="M7 11.78 L7 9.16 L4.15 7.6 Z" fill="#fff" />
    <path d="M7 8.62 L9.85 7.07 L7 5.8 Z" fill="#fff" fillOpacity="0.2" />
    <path d="M4.15 7.07 L7 8.62 L7 5.8 Z" fill="#fff" fillOpacity="0.6" />
  </svg>
);

export const SOURCE_COLORS: Record<SourceName, { from: string; to: string }> = {
  "PCS V3": { from: "#1FC7D4", to: "#1FC7D4" },
  "PCS V4": { from: "#7645D9", to: "#7645D9" },
  "PCS Inf": { from: "#1FC7D4", to: "#7645D9" },
  "PCS V2": { from: "#ED4B9E", to: "#ED4B9E" },
  UniV3: { from: "#FF007A", to: "#FF007A" },
  UniV4: { from: "#FF007A", to: "#9B26AF" },
  Fluid: { from: "#3F8EFC", to: "#3F8EFC" },
  Curve: { from: "#FFD800", to: "#F0B90B" },
  Sushi: { from: "#0993EC", to: "#0993EC" },
};
