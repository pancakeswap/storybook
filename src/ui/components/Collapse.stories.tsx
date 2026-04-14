import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Collapse } from './Collapse'
import { Button } from './Button'
import { Text } from './Text'

function CollapsePage() {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '32px 24px' }}>
      <Text bold fontSize="20px" style={{ marginBottom: 32 }}>Collapse</Text>
      <Button variant="light" scale="sm" onClick={() => setOpen(!open)} style={{ marginBottom: 8 }}>
        {open ? 'Collapse' : 'Expand'}
      </Button>
      <Collapse isOpen={open}>
        <div style={{ padding: 16, background: 'var(--pcs-colors-input)', borderRadius: 16 }}>
          <Text fontSize="14px">Collapsible content with smooth height animation.</Text>
          <Text fontSize="14px" color="textSubtle" style={{ marginTop: 8 }}>Any content can go here.</Text>
        </div>
      </Collapse>
    </div>
  )
}

const meta = { title: 'Components/Collapse', component: CollapsePage, tags: ['autodocs'], parameters: { layout: 'fullscreen' } } satisfies Meta<typeof CollapsePage>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'Collapse' }
