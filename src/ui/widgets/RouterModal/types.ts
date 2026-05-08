export type TokenSymbol = "ETH" | "WETH" | "USDC" | "USDT" | "WBTC" | "DAI";

export type SourceName =
  | "PCS V3"
  | "PCS V4"
  | "PCS V2"
  | "PCS Inf"
  | "UniV3"
  | "UniV4"
  | "Fluid"
  | "Curve"
  | "Sushi";

export interface RouteEndpoint {
  token: TokenSymbol;
  amount: string;
  usd: string;
}

export interface PoolV4 {
  source: SourceName;
  fee: string;
  pct: number;
}

export interface LegV4 {
  pair: [TokenSymbol, TokenSymbol];
  pools: PoolV4[];
}

export interface BranchV4 {
  pct: number;
  path: TokenSymbol[];
  legs: LegV4[];
}

export interface RouteV4 {
  src: RouteEndpoint;
  dst: RouteEndpoint;
  branches: BranchV4[];
}
