import type { RouteV4 } from "./types";

export const SAMPLE_ROUTE_V4: RouteV4 = {
  src: { token: "ETH", amount: "12.5", usd: "$45,210" },
  dst: { token: "USDC", amount: "45,196.32", usd: "$45,196" },
  branches: [
    {
      pct: 90,
      path: ["ETH", "USDC"],
      legs: [
        {
          pair: ["ETH", "USDC"],
          pools: [
            { source: "PCS V3", fee: "0.05%", pct: 44.4 },
            { source: "PCS V3", fee: "0.01%", pct: 22.2 },
            { source: "Fluid", fee: "0.10%", pct: 11.1 },
            { source: "PCS V3", fee: "0.30%", pct: 11.1 },
            { source: "PCS V4", fee: "0.30%", pct: 11.2 },
          ],
        },
      ],
    },
    {
      pct: 10,
      path: ["ETH", "WBTC", "USDC"],
      legs: [
        {
          pair: ["ETH", "WBTC"],
          pools: [{ source: "PCS V3", fee: "0.05%", pct: 100 }],
        },
        {
          pair: ["WBTC", "USDC"],
          pools: [
            { source: "PCS V4", fee: "0.05%", pct: 64.2 },
            { source: "PCS V4", fee: "0.30%", pct: 35.8 },
          ],
        },
      ],
    },
  ],
};
