import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link, LinkExternal } from './Link'
import { Text } from './Text'

function LinkPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px' }}>
      <Text bold fontSize="20px" style={{ marginBottom: 32 }}>Link</Text>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Link href="#">Internal link</Link>
        <LinkExternal href="https://pancakeswap.finance">PancakeSwap (external)</LinkExternal>
        <Link href="#" small>Small link</Link>
        <Link href="#" bold>Bold link</Link>
      </div>
    </div>
  )
}

const meta = { title: 'Components/Link', component: LinkPage, tags: ['autodocs'], parameters: { layout: 'fullscreen' } } satisfies Meta<typeof LinkPage>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'Link' }
