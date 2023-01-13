import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../index.css';
import DataPatition from '../component/DataPatition';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export default {
  title: 'Example/ patition',
  component: DataPatition,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DataPatition>;

const Template: ComponentStory<typeof DataPatition> = (args) => (
  <DataPatition {...args}></DataPatition>
);

export const Demo = Template.bind({});
Demo.args = {
  valueInput: 4,
  items: 5,
  data: 70,
  NumberOfPagesClick: 10,
};
