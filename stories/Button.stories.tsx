import Image from 'next/image'
import { Meta, Story } from '@storybook/react'
import { Button, Props } from '../components/Button/index'

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  // Lägga till en egen background color till storybook
  // parameters: {
  //   backgrounds: {
  //     values: [{ name: 'red', value: '#f00' }],
  //   },
  // },
  argTypes: {
    variant: {},
    children: {
      defaultValue: 'Default Text',
    },
  },
  // Här kan man lägga till en låtas div shjeesh
  // decorators: [
  //   (Story) => (
  //     <div style={{ display: 'flex', width: '100', justifyContent: 'center' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
}

export default meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Square = Template.bind({})
Square.args = {
  variant: 'Square',
  children: 'Square',
}

export const Long = Template.bind({})
Long.args = {
  variant: 'Long',
  children: 'shesh',
}
export const Small = Template.bind({})
Small.args = {
  variant: 'Small',
  children: 'small',
}
export const Circle = Template.bind({})

Circle.args = {
  variant: 'Circle',
  children: 'Circle',
}

export const Test = Template.bind({})
Test.args = {
  ...Square.args,
  children: 'Sheesh',
}
