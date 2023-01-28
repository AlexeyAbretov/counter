import styled from "styled-components";

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
        background-color: aquamarine;
    `}
    ${props => props.renderType === "decrease" && `
        background-color: indianred;
    `}
    ${props => props.renderType === "reset" && `
        background-color: darkgrey;
    `}

    &:hover {
        opacity: 0.5;
    }
`;
