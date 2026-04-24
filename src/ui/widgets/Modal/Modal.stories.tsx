import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { Button } from '../../components/Button'
import { Flex } from '../../components/Box'
import { Text } from '../../components/Text'
import Modal from './Modal'
import { ModalV2 } from './ModalV2'

/**
 * The PCS `Modal` is the titled chrome (header + close button + body slot).
 * The `ModalV2` wrapper owns the overlay, portal, and animation — its
 * `isOpen` prop is controlled by the consumer.
 *
 * Every story here renders the `ModalV2` + `Modal` pair together, which is
 * how downstream widgets (LeverageModal, DepositModal, …) compose them.
 */
const meta = {
  title: 'Widgets/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

/** Static, always-open for layout review in the storybook canvas. */
export const Open: Story = {
  args: { title: 'Modal title', onDismiss: fn() },
  render: (args) => (
    <ModalV2 isOpen onDismiss={args.onDismiss} closeOnOverlayClick>
      <Modal {...args}>
        <Flex flexDirection="column" style={{ gap: 12, minWidth: 320, maxWidth: 420 }}>
          <Text>Modal body content lives here. Pass anything as children.</Text>
          <Button scale="md" onClick={args.onDismiss}>
            OK
          </Button>
        </Flex>
      </Modal>
    </ModalV2>
  ),
}

/**
 * The usage pattern a consumer will typically need: parent state drives
 * `isOpen`, a trigger button opens the modal, dismissal flips it back.
 */
export const Interactive: Story = {
  args: { title: 'Confirm action', onDismiss: fn() },
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <ModalV2 isOpen={open} onDismiss={() => setOpen(false)} closeOnOverlayClick>
          <Modal {...args} onDismiss={() => setOpen(false)}>
            <Flex flexDirection="column" style={{ gap: 12, minWidth: 320, maxWidth: 420 }}>
              <Text>Are you sure you want to continue?</Text>
              <Flex style={{ gap: 8 }}>
                <Button variant="tertiary" scale="md" style={{ flex: 1 }} onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button scale="md" style={{ flex: 1 }} onClick={() => setOpen(false)}>
                  Confirm
                </Button>
              </Flex>
            </Flex>
          </Modal>
        </ModalV2>
      </div>
    )
  },
}

/**
 * Back-button slot — pass `onBack` to render an arrow in the header for
 * multi-step flows (e.g. the deposit wizard).
 */
export const WithBackButton: Story = {
  args: { title: 'Step 2 of 3', onDismiss: fn(), onBack: fn() },
  render: (args) => (
    <ModalV2 isOpen onDismiss={args.onDismiss}>
      <Modal {...args}>
        <Flex flexDirection="column" style={{ gap: 12, minWidth: 320, maxWidth: 420 }}>
          <Text>The ← arrow appears because `onBack` is defined.</Text>
        </Flex>
      </Modal>
    </ModalV2>
  ),
}
