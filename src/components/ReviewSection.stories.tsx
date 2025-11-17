import type { Meta, StoryObj } from '@storybook/react'
import { reviews, trendingTags } from '../data/content'
import { ReviewSection } from './ReviewSection'

const meta: Meta<typeof ReviewSection> = {
  title: 'Sections/ReviewSection',
  component: ReviewSection
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    eyebrow: 'Filters',
    title: 'Latest reviews',
    tags: trendingTags,
    reviews
  }
}
