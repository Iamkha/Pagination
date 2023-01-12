import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../component/Input';
import '../index.css';
import { number } from 'prop-types';

export default {
  title: 'Example/ input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}></Input>;

export const input = Template.bind({});
input.args = {
  type: 'number',
};
