import { Meta, Story } from '@storybook/react'
import Home from '../pages/index'
import { Square } from './Button.stories'

const meta: Meta = {
  title: 'Pages/Home',
  component: Home,
}

export default meta

const Template: Story = (args) => <Home {...args} />

export const Homes = Template.bind({})
Homes.args = {
  children: 'Sheesh',
}
