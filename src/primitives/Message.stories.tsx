import type { Meta, StoryObj } from '@storybook/react-vite'
import { Message, MessageText } from './Message'
import { Text } from './Text'

function MessagePage() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '32px 24px' }}>
      <Text bold fontSize="20px" style={{ marginBottom: 32 }}>Message</Text>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Message variant="warning"><MessageText>This is a warning message.</MessageText></Message>
        <Message variant="danger"><MessageText>This is a danger message.</MessageText></Message>
        <Message variant="success"><MessageText>This is a success message.</MessageText></Message>
        <Message variant="primary"><MessageText>This is a primary info message.</MessageText></Message>
      </div>
    </div>
  )
}

const meta = { title: 'Components/Message', component: MessagePage, tags: ['autodocs'], parameters: { layout: 'fullscreen' } } satisfies Meta<typeof MessagePage>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'All Variants' }
