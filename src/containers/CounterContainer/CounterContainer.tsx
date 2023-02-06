import React from 'react';

import { Counter, CounterType } from '@components';
import { useSelector } from 'react-redux';
import { getCounterContanerPropsSelector } from '@store';

export const CounterContainer: React.FC = (): JSX.Element => {
    const { value, type } = useSelector(getCounterContanerPropsSelector);
    
    return (
        <Counter
            title={String(value)}
            type={type as CounterType}
        />
    )
}