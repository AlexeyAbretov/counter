import styled from "styled-components";

export type CounterType = 'zero' | 'lesszero' | 'abovezero';

export const CounterStyled = styled.div<{
    type: CounterType;
}>`
    font-size: 24px;
    color: black;
    font-weight: bolder;
    ${props => props.type === 'zero' && `
        color: black;
    `}
    ${props => props.type === 'lesszero' && `
        color: red;
    `}
    ${props => props.type === 'abovezero' && `
        color: green;
    `}
`;