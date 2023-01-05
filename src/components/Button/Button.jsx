import React from 'react';

import styles from './Button.css';

const typeCss = {
    'increase': styles.Button_increase,
    'decrease': styles.Button_decrease,
    'reset': styles.Button_reset
}

export const Button = ({ title, type }) => {
    return (
        <button className={`${styles.Button} ${typeCss[type] || styles.Button_increase}`}>{title}</button>
    )
}
