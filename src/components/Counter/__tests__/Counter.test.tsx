/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { it, describe, expect } from 'vitest';

import { theme } from '@theme';
import { Counter, CounterType } from '..';

const getUi = (title: string, type: CounterType): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Counter title={title} type={type} />
    </ThemeProvider>
  );
};

describe('Counter tests', () => {
  it('should render zero type', () => {
    const { container } = render(getUi('0', 'zero'));

    expect(container).toMatchSnapshot();
  });

  it('should render lesszero type', () => {
    const { container } = render(getUi('-1', 'lesszero'));

    expect(container).toMatchSnapshot();
  });

  it('should render abovezero type', () => {
    const { container } = render(getUi('1', 'abovezero'));

    expect(container).toMatchSnapshot();
  });
});
