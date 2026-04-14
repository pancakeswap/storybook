import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading } from './Heading'
import { Text } from './Text'

function HeadingPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px' }}>
      <Text bold fontSize="20px" style={{ marginBottom: 32 }}>Heading</Text>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Heading as="h1" scale="xxl">XXL Heading (64px)</Heading>
        <Heading as="h2" scale="xl">XL Heading (40px)</Heading>
        <Heading as="h3" scale="lg">LG Heading (24px)</Heading>
        <Heading as="h4" scale="md">MD Heading (20px)</Heading>
      </div>
    </div>
  )
}

const meta = { title: 'Components/Heading', component: HeadingPage, tags: ['autodocs'], parameters: { layout: 'fullscreen' } } satisfies Meta<typeof HeadingPage>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'Heading' }
