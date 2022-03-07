import Image from "next/image";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../components/Button/index";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: "Default Text",
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Square = Template.bind({});
Square.args = {
  variant: "Square",
  children: "Square",
};
export const Long = Template.bind({});
Long.args = {
  variant: "Long",
  children: "shesh",
};
export const Small = Template.bind({});
Small.args = {
  variant: "Small",
  children: "small",
};
export const Circle = Template.bind({});

Circle.args = {
  variant: "Circle",
  children: "Circle",
};
