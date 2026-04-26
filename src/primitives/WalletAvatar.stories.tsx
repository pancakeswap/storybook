import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { WalletAvatar } from "./WalletAvatar";

const meta: Meta<typeof WalletAvatar> = {
  title: "Widgets/WalletAvatar",
  component: WalletAvatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WalletAvatar>;

const metamaskIcon = "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg";

export const Default: Story = {
  args: {
    address: "0x40Cf56E5bB1C8F11bC1b1cd6a5c7bAdE2E2a5461",
    walletIconUrl: metamaskIcon,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("0x40Cf...5461")).toBeInTheDocument();
    await expect(canvas.getByLabelText("Copy address")).toBeInTheDocument();
    await expect(canvas.getByLabelText("Wallet avatar")).toBeInTheDocument();
  },
};

export const WithCustomAvatar: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    avatarUrl: "https://api.dicebear.com/9.x/pixel-art/svg?seed=0x1234",
    walletIconUrl: metamaskIcon,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("0x1234...5678")).toBeInTheDocument();
    await expect(canvas.getByAltText("Wallet avatar")).toBeInTheDocument();
  },
};

export const WithoutWalletIcon: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("0x1234...5678")).toBeInTheDocument();
  },
};

export const CustomCopyHandler: Story = {
  args: {
    address: "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    walletIconUrl: metamaskIcon,
    onCopy: fn(),
  },
  play: async ({ canvas, args }) => {
    const copyBtn = canvas.getByLabelText("Copy address");
    await copyBtn.click();
    await expect(args.onCopy).toHaveBeenCalledWith("0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef");
  },
};

export const SmallSize: Story = {
  args: {
    address: "0x40Cf56E5bB1C8F11bC1b1cd6a5c7bAdE2E2a5461",
    walletIconUrl: metamaskIcon,
    size: 24,
    fontSize: 20,
  },
};
