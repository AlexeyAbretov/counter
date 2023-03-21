/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Counter, CounterType } from '@components';
import { CounterContext } from '@store';

export const CounterContainer: React.FC = observer((): JSX.Element => {
  const { value, type } = useContext(CounterContext);

  return <Counter title={String(value)} type={type as CounterType} />;
});
