import type { Meta, StoryObj } from '@storybook/react'
import { playlists } from '../data/content'
import { PlaylistSection } from './PlaylistSection'

const meta: Meta<typeof PlaylistSection> = {
  title: 'Sections/PlaylistSection',
  component: PlaylistSection
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    eyebrow: 'Curation Desk',
    title: 'Playlists & Signals',
    description: 'Short-form mixes and neighborhood transmissions for when albums are too linear.',
    playlists
  }
}
