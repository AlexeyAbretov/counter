import React, { useContext } from 'react';

import { Counter } from '@components';
import { CounterContext } from '@contexts';

export const CounterContainer = () => {
    const {
        state
    } = useContext(CounterContext)

    return (
        <Counter title={state.counterValue} />
    )
}