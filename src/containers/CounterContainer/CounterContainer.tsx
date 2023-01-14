import React, { useContext } from 'react';

import { Counter, CounterType } from '@components';
import { CounterContext } from '@contexts';

export const CounterContainer: React.FC = (): JSX.Element => {
    const {
        state
    } = useContext(CounterContext)

    let type: CounterType = 'lesszero';

    if ( state.counterValue === 0 ) {
        type = 'zero';
    } else if ( state.counterValue > 0 ) {
        type = 'abovezero';
    }

    return (
        <Counter
            title={String(state.counterValue)}
            type={type}
        />
    )
}