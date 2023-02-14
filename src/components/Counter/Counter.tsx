import React from 'react';
import { CounterStyled, CounterType } from './styled';

export const Counter: React.FC<{
  title: string;
  type: CounterType;
}> = ({ title, type }): JSX.Element => {
  return <CounterStyled type={type}>{title}</CounterStyled>;
};
