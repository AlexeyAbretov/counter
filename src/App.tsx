import React, { useReducer } from "react";
import { CounterContainer, ButtonsContainer } from "@containers";
import { CounterContext } from '@contexts';
import styles from './App.css';
import { CounterReducer, InitialCounter } from "@store";

export const App = () => {
    const [state, dispatch] = useReducer(CounterReducer, InitialCounter);
  
    return(
        <CounterContext.Provider value={{
                state: {
                    counterValue: state.value
                },
                dispatch
            }}>
        <div className={styles.App}>
            <CounterContainer />
            <div className={styles.App__buttons}>
                <ButtonsContainer />
            </div>
        </div>
        </CounterContext.Provider>
        
    )
}
