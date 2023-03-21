/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { ThemeProvider } from 'styled-components';
import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';

import { theme } from '@theme';
import { CounterContext, CounterStore } from '@store';

import { ButtonsContainer } from '..';

const getUi = (store: CounterStore): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CounterContext.Provider value={store}>
        <ButtonsContainer />
      </CounterContext.Provider>
    </ThemeProvider>
  );
};

describe('ButtonsContainer', () => {
  it('should render', () => {
    const { container } = render(getUi(new CounterStore()));

    expect(container).toMatchSnapshot();
  });

  it('should call decrement action', () => {
    const store = new CounterStore();
    store.decrement = vi.fn();

    const { getByText } = render(getUi(store));

    const button = getByText('Уменьшить');

    fireEvent.click(button);

    expect(store.decrement).toBeCalled();
    expect(store.decrement).toBeCalledTimes(1);
    expect(store.decrement).toBeCalledWith();
  });

  it('should call increment action', () => {
    const store = new CounterStore();
    store.increment = vi.fn();

    const { getByText } = render(getUi(store));

    const button = getByText('Увеличить');

    fireEvent.click(button);

    expect(store.increment).toBeCalled();
    expect(store.increment).toBeCalledTimes(1);
  });

  it('should call reset action', () => {
    const store = new CounterStore();
    store.reset = vi.fn();

    const { getByText } = render(getUi(store));

    const button = getByText('Сбросить');

    fireEvent.click(button);

    expect(store.reset).toBeCalled();
    expect(store.reset).toBeCalledTimes(1);
  });
});
