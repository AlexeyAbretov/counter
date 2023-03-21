/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { it, describe, expect, vi } from 'vitest';

import { theme } from '@theme';
import { Button, ButtonProps } from '..';

const getUi = (props?: ButtonProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        title="I am button"
        type="decrease"
        onClick={vi.fn()}
        {...(props || {})}
      />
    </ThemeProvider>
  );
};

describe('Button tests', () => {
  it('should render correct decrease button', () => {
    const { container } = render(getUi());

    expect(container).toMatchSnapshot();
  });

  it('should render correct increase button', () => {
    const { container } = render(
      getUi({
        type: 'increase',
      }),
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correct reset button', () => {
    const { container } = render(
      getUi({
        type: 'reset',
      }),
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle onClick', () => {
    const onClick = vi.fn();

    const { getByText } = render(
      getUi({
        type: 'reset',
        onClick,
      }),
    );

    const button = getByText('I am button');

    fireEvent.click(button);

    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1);
  });

  it('should not handle onClick', () => {
    const onClick = vi.fn();

    const { getByText } = render(
      getUi({
        type: 'reset',
        onClick,
        isDisabled: true,
      }),
    );

    const button = getByText('I am button');

    fireEvent.click(button);

    expect(onClick).not.toBeCalled();
    expect(onClick).toBeCalledTimes(0);
  });
});
