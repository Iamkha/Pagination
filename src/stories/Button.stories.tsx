import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../component/Button';
import '../index.css';

export default {
  title: 'Example/ button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>;

export const button = Template.bind({});
button.args = {
  Children: 'Kha',
  disabled: false,
};
