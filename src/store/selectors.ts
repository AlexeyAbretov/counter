import { CounterStateType } from '@types';

export const getCounterContanerPropsSelector = (
  state: CounterStateType,
): {
  value: number;
  type: string;
} => {
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
};
