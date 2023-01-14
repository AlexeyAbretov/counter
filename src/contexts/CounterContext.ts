
import { CounterContextType } from '@types';
import React from 'react';

export const CounterContextInitialValues: CounterContextType = {
    state: {
        counterValue: 0
    },
    dispatch: () => {},
}

export const CounterContext = React.createContext(CounterContextInitialValues);
