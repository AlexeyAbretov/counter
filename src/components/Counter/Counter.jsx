import React from 'react';

import styles from './Counter.css'

const typeCss = {
    'zero': styles.Counter_zero,
    'lesszero': styles.Counter_lesszero,
    'abovezero': styles.Counter_abovezero
}

export const Counter = ({ title, type }) => {
    return (
        <div className={`${styles.Counter} ${typeCss[type] || styles.Counter_zero}`}>{title}</div>
    )
}
