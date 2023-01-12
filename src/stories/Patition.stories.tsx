import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Patition } from '../component/Patition';
import '../index.css';

export default {
  title: 'Example/ patition',
  component: Patition,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Patition>;

const Template: ComponentStory<typeof Patition> = (args) => <Patition {...args}></Patition>;

export const Demo = Template.bind({});
Demo.args = {
  valueInput: 1,
  lenght: 70,
  item: 5,
  lenghtonClick: 10,
};
