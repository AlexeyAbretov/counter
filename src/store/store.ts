import { configureStore } from '@reduxjs/toolkit';
import { CounterSliceReducer, InitialState } from './CounterSlice';

export const store = configureStore({
  reducer: CounterSliceReducer,
  devTools:
    NODE_ENV === 'development'
      ? {
          name: 'AWESOME_REACT_COUNTER',
          trace: true,
          traceLimit: 25,
        }
      : false,
  preloadedState: InitialState,
});
