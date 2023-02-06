import styled from "styled-components";
import { ThemeType } from "theme";

export type ButtonType = 'increase' | 'decrease' | 'reset';

export const ButtonStyled = styled.button<{
    renderType: ButtonType;
}>`
    border: 1px solid aqua;
    border-radius: 6px;
    background-color: transparent;
    width: 140px;
    height: 47px;
    cursor: pointer;
    ${props => props.renderType === "increase" && `
        background-color: ${(props.theme as ThemeType).colors.aqua10};
    `}
    ${props => props.renderType === "decrease" && `
        background-color: ${(props.theme as ThemeType).colors.red10};
    `}
    ${props => props.renderType === "reset" && `
        background-color: ${(props.theme as ThemeType).colors.grey10};
    `}

    &:hover {
        opacity: 0.5;
    }
`;
