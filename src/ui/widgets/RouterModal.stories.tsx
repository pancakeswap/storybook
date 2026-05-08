import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { RouterModalV4, SAMPLE_ROUTE_V4 } from "./RouterModal";

const meta: Meta = {
  title: "Widgets/RouterModal",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type StoryV4 = StoryObj<typeof RouterModalV4>;

export const V4: StoryV4 = {
  name: "v4 — merged routes with leg badges",
  render: (args) => <RouterModalV4 {...args} />,
  args: {
    route: SAMPLE_ROUTE_V4,
    onClose: fn(),
  },
};
