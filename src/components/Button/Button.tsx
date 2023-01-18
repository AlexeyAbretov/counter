import React from 'react';

import styles from './Button.css';

export type ButtonType = 'increase' | 'decrease' | 'reset';

const typeCss: {
    [key in ButtonType]: string;
} = {
    'increase': styles.Button_increase,
    'decrease': styles.Button_decrease,
    'reset': styles.Button_reset
}

export const Button: React.FC<{
    title: string;
    type: ButtonType;
    onClick: () => void;
}> = ({ title, type, ...props }): JSX.Element => {
    return (
        <button className={`${styles.Button} ${typeCss[type] || styles.Button_increase}`} {...props}>{title}</button>
    )
}
