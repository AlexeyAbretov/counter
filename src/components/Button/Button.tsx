import React from 'react';

import { ButtonStyled, ButtonType } from './styled';

export const Button: React.FC<{
  title: string;
  type: ButtonType;
  onClick: () => void;
}> = ({ title, type, ...props }): JSX.Element => {
  return (
    <ButtonStyled renderType={type} {...props}>
      {title}
    </ButtonStyled>
  );
};
