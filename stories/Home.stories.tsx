import { Meta, Story } from '@storybook/react'
import { NextPage } from 'next'
import Home from '../pages/index'

const meta: Meta = {
  title: 'Pages/Home',
  component: Home,
}

export default meta

const Template: Story = (args) => <Home {...args} />

export const Homes = Template.bind({})
Homes.args = {
  children: '',
}
