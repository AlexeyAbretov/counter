import { Box, BoxProps } from '../Box';
import React from 'react';

export type CounterType = 'zero' | 'lesszero' | 'abovezero';

const colorByType: {
    [key in CounterType]: string;
} = {
    zero: 'black',
    lesszero: 'red10',
    abovezero: 'green10'
}

export const Counter: React.FC<{
    title: string;
    type: CounterType;
} & BoxProps> = ({ title, type, ...props }): JSX.Element => {
    return (
        <Box
            fontSize={24}
            // @ts-ignore
            color={colorByType[type || 'zero']}
            fontWeight="bolder"
            {...props}
        >
            {title}
        </Box>
    )
}
