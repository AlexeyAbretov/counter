import React from 'react';

import styles from './Counter.css'

export type CounterType = 'zero' | 'lesszero' | 'abovezero';

const typeCss: {
    [key in CounterType]: string;
} = {
    'zero': styles.Counter_zero,
    'lesszero': styles.Counter_lesszero,
    'abovezero': styles.Counter_abovezero
}

export const Counter: React.FC<{
    title: string;
    type: CounterType;
}> = ({ title, type }): JSX.Element => {
    return (
        <div className={`${styles.Counter} ${typeCss[type] || styles.Counter_zero}`}>{title}</div>
    )
}
