import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@components';
import { decrement, increment, reset } from '@store';

import { ButtonsWrapper } from './styled';

export const ButtonsContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <ButtonsWrapper>
      <Button
        title="Уменьшить"
        type="decrease"
        onClick={() => dispatch(decrement())}
      />
      <Button title="Сбросить" type="reset" onClick={() => dispatch(reset())} />
      <Button
        title="Увеличить"
        type="increase"
        onClick={() => dispatch(increment())}
      />
    </ButtonsWrapper>
  );
};
