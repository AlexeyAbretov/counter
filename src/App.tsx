import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { CounterContainer, ButtonsContainer } from "@containers";
import { store } from "@store";
import { theme } from "@theme";

import { GlobalStyles } from "./styles/GlobalStyles";
import { AppButtons, AppStyled } from "./styled";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <AppStyled>
                        <CounterContainer />
                        <AppButtons>
                            <ButtonsContainer />
                        </AppButtons>
                    </AppStyled>
                </ThemeProvider>
            </Provider>
        </>
    )
}
