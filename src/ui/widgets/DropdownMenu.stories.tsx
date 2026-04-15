import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, within } from "storybook/test";
import { DropdownMenu } from "./DropdownMenu";
import { Button } from "../components";
import { ShareIcon, TwitterIcon } from "../Icons";

const meta: Meta<typeof DropdownMenu> = {
  title: "Widgets/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const ShareButton: Story = {
  args: {
    trigger: (
      <Button variant="light" scale="sm" endIcon={<ShareIcon width="20px" />}>
        Share
      </Button>
    ),
    items: [
      { label: "Copy portfolio link", icon: <ShareIcon width="20px" />, onClick: fn() },
      { label: "Share on X", icon: <TwitterIcon width="20px" />, onClick: fn() },
    ],
  },
  play: async ({ canvas }) => {
    // Panel should not be visible initially
    const trigger = canvas.getByText("Share");
    await expect(trigger).toBeInTheDocument();

    // Open the dropdown (portal renders in document.body)
    await trigger.click();
    const body = within(document.body);
    await expect(body.getByText("Copy portfolio link")).toBeInTheDocument();
    await expect(body.getByText("Share on X")).toBeInTheDocument();
  },
};

export const BottomStart: Story = {
  args: {
    placement: "bottom-start",
    trigger: (
      <Button variant="subtle" scale="sm">
        Options
      </Button>
    ),
    items: [
      { label: "Edit", onClick: fn() },
      { label: "Delete", onClick: fn() },
    ],
  },
};
