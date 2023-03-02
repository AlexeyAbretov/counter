/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { CounterStateType } from '@types';

export const InitialState: CounterStateType = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: 'counter',
  initialState: InitialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = CounterSlice.actions;

const { reducer: CounterSliceReducer } = CounterSlice;

export { CounterSliceReducer };
