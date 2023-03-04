/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import React from 'react';
import { theme } from '@theme';
import { AnyAction, Store } from '@reduxjs/toolkit';
import { CounterStateType } from '@types';
import configureStore from 'redux-mock-store';
import { InitialCounter } from '@store';
import { render } from '@testing-library/react';
import { CounterContainer } from '../CounterContainer';

const mockStore = configureStore<CounterStateType>();

const getUi = (store: Store<CounterStateType, AnyAction>): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    </ThemeProvider>
  );
};

describe('CounterContainer', () => {
  it('should render zero', () => {
    const { container } = render(
      getUi(
        mockStore({
          ...InitialCounter,
        }),
      ),
    );

    expect(container).toMatchSnapshot();
  });

  it('should render lesszero', () => {
    const { container } = render(
      getUi(
        mockStore({
          ...InitialCounter,
          value: -1,
        }),
      ),
    );

    expect(container).toMatchSnapshot();
  });
});
