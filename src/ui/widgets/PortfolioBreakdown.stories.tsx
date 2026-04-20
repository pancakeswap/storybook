import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { PortfolioBreakdown } from "./PortfolioBreakdown";
import type { BreakdownItem } from "./PortfolioBreakdown";

const meta: Meta<typeof PortfolioBreakdown> = {
  title: "Widgets/PortfolioBreakdown",
  component: PortfolioBreakdown,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PortfolioBreakdown>;

const defaultItems: BreakdownItem[] = [
  {
    color: ["#53DEE9", "#1FC7D4"],
    title: "Wallet balance",
    percentage: 62,
    balance: "$4,00.01",
  },
  {
    color: ["#8051D6", "#492286"],
    title: "Positions",
    percentage: 38,
    balance: "$1,492.25",
  },
  {
    color: ["#CBD7EF", "#9A9FD0"],
    title: "Unclaimed rewards",
    percentage: 0,
    balance: "$0",
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Wallet balance")).toBeInTheDocument();
    await expect(canvas.getByText("62%")).toBeInTheDocument();
    await expect(canvas.getByText("$4,00.01")).toBeInTheDocument();
    await expect(canvas.getByText("Positions")).toBeInTheDocument();
    await expect(canvas.getByText("38%")).toBeInTheDocument();
    await expect(canvas.getByText("Unclaimed rewards")).toBeInTheDocument();
  },
};

export const EvenSplit: Story = {
  args: {
    items: [
      { color: ["#53DEE9", "#1FC7D4"], title: "DeFi", percentage: 33, balance: "$1,200.00" },
      { color: ["#8051D6", "#492286"], title: "NFTs", percentage: 33, balance: "$1,200.00" },
      { color: ["#CBD7EF", "#9A9FD0"], title: "Staking", percentage: 34, balance: "$1,236.00" },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { color: ["#53DEE9", "#1FC7D4"], title: "Wallet balance", percentage: 100, balance: "$10,000.00" },
    ],
  },
};

export const SolidColors: Story = {
  args: {
    items: [
      { color: "#1FC7D4", title: "Primary", percentage: 50, balance: "$5,000" },
      { color: "#7645D9", title: "Secondary", percentage: 30, balance: "$3,000" },
      { color: "#ED4B9E", title: "Failure", percentage: 20, balance: "$2,000" },
    ],
  },
};
