import { CounterStateType } from '@types';
import { createSelector } from '@reduxjs/toolkit';

const getState = (state: CounterStateType) => state;

export const getCounterContanerPropsSelector = createSelector(
  [getState],
  state => {
    let type = 'lesszero';

    if (state.value === 0) {
      type = 'zero';
    } else if (state.value > 0) {
      type = 'abovezero';
    }

    return {
      value: state.value,
      type,
    };
  },
);
