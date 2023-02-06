import styled from "styled-components";

import { ThemeType } from "@theme";

export type CounterType = 'zero' | 'lesszero' | 'abovezero';

export const CounterStyled = styled.div<{
    type: CounterType;
}>`
    font-size: 24px;
    color: black;
    font-weight: bolder;
    ${props => props.type === 'zero' && `
        color: ${(props.theme as ThemeType).colors.black};
    `}
    ${props => props.type === 'lesszero' && `
        color: ${(props.theme as ThemeType).colors.red10};;
    `}
    ${props => props.type === 'abovezero' && `
        color: ${(props.theme as ThemeType).colors.green10};;
    `}
`;