import type { Meta, StoryObj } from '@storybook/react'
import { TopNav } from './TopNav'

const meta: Meta<typeof TopNav> = {
  title: 'Components/TopNav',
  component: TopNav
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    brand: 'Argyle & Ditmas',
    ctaLabel: 'Subscribe',
    links: [
      { href: '#reviews', label: 'Reviews' },
      { href: '#artists', label: 'Artists' },
      { href: '#playlists', label: 'Playlists' },
      { href: '#columns', label: 'Columns' }
    ]
  }
}
