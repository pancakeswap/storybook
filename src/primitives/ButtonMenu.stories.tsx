import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { useState } from "react";
import { ButtonMenu } from "./ButtonMenu";
import { ButtonMenuItem } from "./ButtonMenu";

const meta: Meta<typeof ButtonMenu> = {
  title: "Components/ButtonMenu",
  component: ButtonMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonMenu>;

export const Default: Story = {
  args: {
    activeIndex: 0,
    onItemClick: fn(),
    children: [
      <ButtonMenuItem key="1">Button 1</ButtonMenuItem>,
      <ButtonMenuItem key="2">Button 2</ButtonMenuItem>,
      <ButtonMenuItem key="3">Button 3</ButtonMenuItem>,
    ],
  },
  play: async ({ canvas, args }) => {
    await expect(canvas.getByText("Button 1")).toBeInTheDocument();
    await expect(canvas.getByText("Button 2")).toBeInTheDocument();
    await canvas.getByText("Button 2").click();
    await expect(args.onItemClick).toHaveBeenCalledWith(1, expect.anything());
  },
};

export const Subtle: Story = {
  args: {
    activeIndex: 1,
    variant: "subtle",
    children: [
      <ButtonMenuItem key="1">Option A</ButtonMenuItem>,
      <ButtonMenuItem key="2">Option B</ButtonMenuItem>,
      <ButtonMenuItem key="3">Option C</ButtonMenuItem>,
    ],
  },
};

export const SmallScale: Story = {
  args: {
    activeIndex: 0,
    scale: "sm",
    children: [
      <ButtonMenuItem key="1">Small 1</ButtonMenuItem>,
      <ButtonMenuItem key="2">Small 2</ButtonMenuItem>,
    ],
  },
};

export const FullWidth: Story = {
  args: {
    activeIndex: 0,
    fullWidth: true,
    children: [
      <ButtonMenuItem key="1">Tab 1</ButtonMenuItem>,
      <ButtonMenuItem key="2">Tab 2</ButtonMenuItem>,
      <ButtonMenuItem key="3">Tab 3</ButtonMenuItem>,
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    activeIndex: 0,
    disabled: true,
    children: [
      <ButtonMenuItem key="1">Disabled 1</ButtonMenuItem>,
      <ButtonMenuItem key="2">Disabled 2</ButtonMenuItem>,
    ],
  },
};

function InteractiveDemo() {
  const [index, setIndex] = useState(0);
  return (
    <ButtonMenu activeIndex={index} onItemClick={setIndex}>
      <ButtonMenuItem>Market</ButtonMenuItem>
      <ButtonMenuItem>Limit</ButtonMenuItem>
      <ButtonMenuItem>TWAP</ButtonMenuItem>
    </ButtonMenu>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
  play: async ({ canvas }) => {
    await canvas.getByText("Limit").click();
    // After click, "Limit" should become the active button
    await expect(canvas.getByText("Limit")).toBeInTheDocument();
  },
};
