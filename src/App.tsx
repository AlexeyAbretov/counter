import React from "react";
import { CounterContainer, ButtonsContainer } from "@containers";
import styles from './App.css';
import { CounterStoreProvider } from "@store";

export const App = () => {
    return (
        <CounterStoreProvider>
            <div className={styles.App}>
                <CounterContainer />
                <div className={styles.App__buttons}>
                    <ButtonsContainer />
                </div>
            </div>
        </CounterStoreProvider>

    )
}
