import type { Meta, StoryObj } from '@storybook/react'
import { SiteFooter } from './SiteFooter'

const meta: Meta<typeof SiteFooter> = {
  title: 'Components/SiteFooter',
  component: SiteFooter
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
