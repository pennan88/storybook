import { Meta, Story } from '@storybook/react'
import Modal, { ModalTypes } from '../components/Modal'

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
}

export default meta

const Template: Story<ModalTypes> = (args) => <Modal {...args} />

export const Article = Template.bind({})
Article.args = {
  variant: 'article',
}

export const Image = Template.bind({})
Image.args = {
  variant: 'image',
}
