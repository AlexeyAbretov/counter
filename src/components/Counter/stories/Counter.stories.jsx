import React from 'react';

import { Counter } from '..';

export default {
    title: "Example/Counter",
    component: Counter,
}

const Template = args => <Counter {...args} />;

export const Playground = Template.bind({});

Playground.args = {
    title: '0',
    type: 'zero'
}

Playground.argTypes = {
    type: {
        control: { type: 'select', options: ['zero', 'lesszero', 'abovezero'] },
    },
}
