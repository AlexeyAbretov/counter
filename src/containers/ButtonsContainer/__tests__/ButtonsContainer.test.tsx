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
import { fireEvent, render } from '@testing-library/react';
import { ButtonsContainer } from '../ButtonsContainer';

const mockStore = configureStore<CounterStateType>();

const getUi = (store: Store<CounterStateType, AnyAction>): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ButtonsContainer />
      </Provider>
    </ThemeProvider>
  );
};

describe('ButtonsContainer', () => {
  it('should render', () => {
    const { container } = render(
      getUi(
        mockStore({
          ...InitialCounter,
        }),
      ),
    );

    expect(container).toMatchSnapshot();
  });

  it('should call decrement action', () => {
    const store = mockStore({
      ...InitialCounter,
    });

    const { getByText } = render(getUi(store));

    const button = getByText('Уменьшить');

    fireEvent.click(button);

    expect(store.getActions()).toMatchSnapshot();
  });
});
