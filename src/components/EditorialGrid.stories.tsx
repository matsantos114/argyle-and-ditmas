import type { Meta, StoryObj } from '@storybook/react'
import { editorialNotes } from '../data/content'
import { EditorialGrid } from './EditorialGrid'

const meta: Meta<typeof EditorialGrid> = {
  title: 'Sections/EditorialGrid',
  component: EditorialGrid
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    notes: editorialNotes
  }
}
