/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Button } from '@components';

import { CounterContext } from '@store';
import { ButtonsWrapper } from './styled';

export const ButtonsContainer: React.FC = observer((): JSX.Element => {
  const counter = useContext(CounterContext);

  return (
    <ButtonsWrapper>
      <Button
        title="Уменьшить"
        type="decrease"
        onClick={() => counter.decrement()}
      />
      <Button title="Сбросить" type="reset" onClick={() => counter.reset()} />
      <Button
        title="Увеличить"
        type="increase"
        onClick={() => counter.increment()}
      />
    </ButtonsWrapper>
  );
});
