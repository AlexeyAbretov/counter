import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Counter } from '..';

export default {
  title: 'Example/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = args => <Counter {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  title: '0',
  type: 'zero',
};

Playground.argTypes = {
  type: {
    control: { type: 'select', options: ['zero', 'lesszero', 'abovezero'] },
  },
};
