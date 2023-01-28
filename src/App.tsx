import React from "react";
import { CounterContainer, ButtonsContainer } from "@containers";
import { Provider } from "react-redux";
import { store } from "@store";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppButtons, AppStyled } from "./styled";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Provider store={store}>
                <AppStyled>
                    <CounterContainer />
                    <AppButtons>
                        <ButtonsContainer />
                    </AppButtons>
                </AppStyled>
            </Provider>
        </>
    )
}
