import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '..';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  title: 'Increase',
  type: 'increase',
};

Playground.argTypes = {
  type: {
    control: { type: 'select', options: ['increase', 'decrease', 'reset'] },
  },
};

export const IncreaseButton = Template.bind({});

IncreaseButton.args = {
  title: 'Increase',
  type: 'increase',
};

export const DecreaseButton = Template.bind({});

DecreaseButton.args = {
  title: 'Decrease',
  type: 'decrease',
};

export const ResetButton = Template.bind({});

ResetButton.args = {
  title: 'Reset',
  type: 'reset',
};
