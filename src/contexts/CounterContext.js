
import React from 'react';

export const CounterContextInitialValues = {
    state: {
        counterValue: 0
    },
    dispatch: () => { },
}

export const CounterContext = React.createContext(CounterContextInitialValues);
