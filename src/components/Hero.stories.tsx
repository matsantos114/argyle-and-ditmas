import type { Meta, StoryObj } from '@storybook/react'
import { heroContent, featuredReview } from '../data/content'
import { Hero } from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: heroContent,
    featured: featuredReview
  }
}
