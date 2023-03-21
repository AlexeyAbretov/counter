/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { theme } from '@theme';
import { CounterContext, CounterStore } from '@store';
import { render } from '@testing-library/react';
import { CounterContainer } from '../CounterContainer';

const getUi = (store: CounterStore): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CounterContext.Provider value={store}>
        <CounterContainer />
      </CounterContext.Provider>
    </ThemeProvider>
  );
};

describe('CounterContainer', () => {
  it('should render zero', () => {
    const { container } = render(getUi(new CounterStore()));

    expect(container).toMatchSnapshot();
  });

  it('should render lesszero', () => {
    const { container } = render(getUi(new CounterStore(-1)));

    expect(container).toMatchSnapshot();
  });

  it('should render abovezero', () => {
    const { container } = render(getUi(new CounterStore(1)));

    expect(container).toMatchSnapshot();
  });
});
