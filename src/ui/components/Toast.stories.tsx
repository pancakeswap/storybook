import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { Toaster } from "sonner";
import { Toast } from "./Toast";
import { ToastsProvider, useToast } from "./Toast";
import { Button } from "./Button";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastsProvider>
        <Toaster duration={6000} position="top-right" gap={24} />
        <Story />
      </ToastsProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    toast: { id: "1", type: "info", title: "Info", description: "This is an informational message." },
    onRemove: fn(),
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Info")).toBeInTheDocument();
  },
};

export const Success: Story = {
  args: {
    toast: { id: "2", type: "success", title: "Success", description: "Transaction confirmed!" },
    onRemove: fn(),
  },
};

export const Warning: Story = {
  args: {
    toast: { id: "3", type: "warning", title: "Warning", description: "Slippage may be high." },
    onRemove: fn(),
  },
};

export const Danger: Story = {
  args: {
    toast: { id: "4", type: "danger", title: "Error", description: "Transaction failed. Please try again." },
    onRemove: fn(),
  },
};

function ToastDemo() {
  const { toastInfo, toastSuccess, toastWarning, toastError } = useToast();
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button onClick={() => toastInfo("Info", "Informational message")}>Info</Button>
      <Button onClick={() => toastSuccess("Success", "Transaction confirmed!")} variant="success">Success</Button>
      <Button onClick={() => toastWarning("Warning", "High slippage")} variant="tertiary">Warning</Button>
      <Button onClick={() => toastError("Error", "Transaction failed")} variant="danger">Error</Button>
    </div>
  );
}

export const Interactive: Story = {
  render: () => <ToastDemo />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Info")).toBeInTheDocument();
  },
};
