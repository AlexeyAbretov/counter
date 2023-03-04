/* eslint-disable no-undef */
import {
  CounterSliceReducer,
  InitialState,
  increment,
  decrement,
  reset,
} from '../CounterSlice';

describe('CounterSlice tests', () => {
  describe('increment tests', () => {
    it('should add 1', () => {
      expect(CounterSliceReducer(InitialState, increment())).toEqual({
        value: 1,
      });
    });
  });

  describe('decrement tests', () => {
    it('should minus 1', () => {
      expect(CounterSliceReducer(InitialState, decrement())).toEqual({
        value: -1,
      });
    });
  });

  describe('reset tests', () => {
    it('should minus 1', () => {
      expect(
        CounterSliceReducer(
          {
            value: 2,
          },
          reset(),
        ),
      ).toEqual({
        value: 0,
      });
    });
  });
});
