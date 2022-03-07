import { Meta, Story } from "@storybook/react";
import Navbar, { Props } from "../components/Navbar/index";
const meta: Meta = {
  title: "Navbar",
  component: Navbar,
};

export default meta;

const Template: Story<Props> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  alt: "Picture",
};
