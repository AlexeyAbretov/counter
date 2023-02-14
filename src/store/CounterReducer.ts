import { Action, ActionKind, CounterStateType } from '@types';

export const InitialState: CounterStateType = {
  value: 0,
};

export const CounterReducer = (
  state: CounterStateType,
  action: Action,
): CounterStateType => {
  const { type } = action;

  switch (type) {
    case ActionKind.Increase: {
      return {
        ...state,
        value: state.value + Number(COUNTER_STEP),
      };
    }
    case ActionKind.Decrease: {
      return {
        ...state,
        value: state.value - Number(COUNTER_STEP),
      };
    }
    case ActionKind.Reset: {
      return {
        ...state,
        value: 0,
      };
    }

    default: {
      return state;
    }
  }
};
