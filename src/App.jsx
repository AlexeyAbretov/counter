import React, { useReducer } from 'react';

import { CounterContext } from '@contexts';
import { CounterContainer } from '@containers';
import { Button } from '@components';

import styles from './App.css';

const CounterReducer = (state, action) => {
    const { type } = action;

    switch (type) {
        case 'INCREASE': {
            return {
                ...state,
                value: state.value + 1
            };
        }
        case 'DECREASE': {
            return {
                ...state,
                value: state.value - 1
            };
        }
        case 'RESET': {
            return {
                ...state,
                value: 0
            };
        }
        default: {
            return state;
        }
    }
}

const InitialCounter = {
    value: 0
}
   
export const App = () => {
    const [state, dispatch] = useReducer(CounterReducer, InitialCounter);

    return (
        <CounterContext.Provider value={{
            state: {
                counterValue: state.value
            },
            dispatch
        }}>
            <div className={styles.App}>
                <CounterContainer />
                <div className={styles.App__buttons}>
                    <Button title="Уменьшить" type='decrease' onClick={() => dispatch({ type: "DECREASE" })}/>
                    <Button title="Сбросить" type='reset' onClick={() => dispatch({ type: "RESET" })}/>
                    <Button title="Увеличить" type='increase' onClick={() => dispatch({ type: "INCREASE" })} />
                </div>
            </div>
        </CounterContext.Provider>
    )
}
