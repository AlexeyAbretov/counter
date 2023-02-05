import React from 'react';

import { BasicButton, BoxProps } from '../Box';

export type ButtonType = 'increase' | 'decrease' | 'reset';

const colorByType: {
    [key in ButtonType]: string;
} = {
    increase: 'aqua10',
    decrease: 'red10',
    reset: 'grey10'
}

export const Button: React.FC<{
    title: string;
    type: ButtonType;
    onClick: () => void;
} & BoxProps> = ({ title, type, ...props }): JSX.Element => {
    return (<>
        {/** @ts-ignore */}
        <BasicButton
            border={1}
            borderRadius={6}
            borderColor="aqua10"
            width={140}
            height={47}
            cursor="pointer"
            variant="hover"
            bg={colorByType[type || 'increase']}
            {...props}
        >
            {title}
        </BasicButton>
    </>
    )
}
