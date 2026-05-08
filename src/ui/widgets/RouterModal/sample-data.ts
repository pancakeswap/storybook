import type { RouteV2, RouteV4 } from "./types";

export const SAMPLE_ROUTE_V2: RouteV2 = {
  src: { token: "ETH", amount: "12.5", usd: "$45,210" },
  dst: { token: "USDC", amount: "45,196.32", usd: "$45,196" },
  branches: [
    {
      pct: 40,
      hops: [
        {
          pair: ["ETH", "USDC"],
          source: "PCS V3",
          fee: "0.05%",
          sources: [
            { name: "PCS V3 0.05%", pct: 78.4 },
            { name: "PCS V3 0.30%", pct: 21.6 },
          ],
        },
      ],
    },
    {
      pct: 20,
      hops: [
        {
          pair: ["ETH", "USDC"],
          source: "PCS V3",
          fee: "0.01%",
          sources: [{ name: "PCS V3 0.01%", pct: 100 }],
        },
      ],
    },
    {
      pct: 10,
      hops: [
        {
          pair: ["ETH", "WBTC"],
          source: "PCS V3",
          fee: "0.05%",
          sources: [{ name: "PCS V3 0.05%", pct: 100 }],
        },
        {
          pair: ["WBTC", "USDC"],
          source: "PCS V4",
          fee: "0.05%",
          sources: [
            { name: "PCS V4 0.05%", pct: 64.2 },
            { name: "PCS V4 0.30%", pct: 35.8 },
          ],
        },
      ],
    },
    {
      pct: 10,
      hops: [
        {
          pair: ["ETH", "USDC"],
          source: "Fluid",
          fee: "0.10%",
          sources: [{ name: "Fluid DEX 0.1%", pct: 100 }],
        },
      ],
    },
    {
      pct: 10,
      hops: [
        {
          pair: ["ETH", "USDC"],
          source: "PCS V3",
          fee: "0.30%",
          sources: [{ name: "PCS V3 0.30%", pct: 100 }],
        },
      ],
    },
    {
      pct: 10,
      hops: [
        {
          pair: ["ETH", "USDC"],
          source: "PCS V4",
          fee: "0.30%",
          sources: [
            { name: "PCS V4 0.30%", pct: 84.1 },
            { name: "PCS V4 1.00%", pct: 15.9 },
          ],
        },
      ],
    },
  ],
};

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
