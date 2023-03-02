import React from 'react';

import { ButtonStyled, ButtonType } from './styled';

export type ButtonProps = {
  title?: string;
  type: ButtonType;
  onClick?: () => void;
  isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  type,
  isDisabled = false,
  onClick,
}): JSX.Element => {
  return (
    <ButtonStyled renderType={type} disabled={isDisabled} onClick={onClick}>
      {title}
    </ButtonStyled>
  );
};
