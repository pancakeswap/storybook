import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { TokenDisplay } from "./TokenDisplay";
import type { TokenInfo } from "./TokenDisplay";

const bnb: TokenInfo = {
  symbol: "BNB",
  chainName: "BNB Chain",
  logoUrls: ["https://tokens.pancakeswap.finance/images/symbol/bnb.png"],
  chainLogoUrl: "https://assets.pancakeswap.finance/web/chains/square/56.svg",
};

const cake: TokenInfo = {
  symbol: "CAKE",
  chainName: "BNB Chain",
  logoUrls: ["https://tokens.pancakeswap.finance/images/symbol/cake.png"],
  chainLogoUrl: "https://assets.pancakeswap.finance/web/chains/square/56.svg",
};

const eth: TokenInfo = {
  symbol: "ETH",
  chainName: "Ethereum",
  logoUrls: ["https://tokens.pancakeswap.finance/images/symbol/eth.png"],
  chainLogoUrl: "https://assets.pancakeswap.finance/web/chains/square/1.svg",
};

const usdt: TokenInfo = {
  symbol: "USDT",
  chainName: "Arbitrum",
  logoUrls: ["https://tokens.pancakeswap.finance/images/symbol/usdt.png"],
  chainLogoUrl: "https://assets.pancakeswap.finance/web/chains/square/42161.svg",
};

const unknownToken: TokenInfo = {
  symbol: "UNKNOWN",
  chainName: "Unknown Chain",
  logoUrls: ["https://invalid-url.example/nothing.png"],
};

const meta: Meta<typeof TokenDisplay> = {
  title: "Widgets/TokenDisplay",
  component: TokenDisplay,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TokenDisplay>;

export const Default: Story = {
  args: {
    token: bnb,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("BNB")).toBeInTheDocument();
    await expect(canvas.getByText("BNB Chain")).toBeInTheDocument();
    await expect(canvas.getByAltText("BNB logo")).toBeInTheDocument();
  },
};

export const WithoutChainBadge: Story = {
  args: {
    token: { ...cake, chainLogoUrl: undefined },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("CAKE")).toBeInTheDocument();
  },
};

export const WithoutChainName: Story = {
  args: {
    token: { symbol: "WBTC", logoUrls: ["https://tokens.pancakeswap.finance/images/symbol/wbtc.png"] },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("WBTC")).toBeInTheDocument();
  },
};

export const FallbackIcon: Story = {
  args: {
    token: unknownToken,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("UNKNOWN")).toBeInTheDocument();
  },
};

export const SmallSize: Story = {
  args: {
    token: eth,
    size: 24,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("ETH")).toBeInTheDocument();
  },
};

export const LargeSize: Story = {
  args: {
    token: cake,
    size: 56,
  },
};

export const MultipleTokens: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <TokenDisplay token={bnb} />
      <TokenDisplay token={cake} />
      <TokenDisplay token={eth} />
      <TokenDisplay token={usdt} />
      <TokenDisplay token={unknownToken} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("BNB")).toBeInTheDocument();
    await expect(canvas.getByText("CAKE")).toBeInTheDocument();
    await expect(canvas.getByText("ETH")).toBeInTheDocument();
    await expect(canvas.getByText("USDT")).toBeInTheDocument();
    await expect(canvas.getByText("UNKNOWN")).toBeInTheDocument();
  },
};
