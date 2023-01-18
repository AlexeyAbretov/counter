import { CounterContext } from "@contexts";
import React, { PropsWithChildren, useReducer } from "react";
import { CounterReducer, InitialCounter } from "./CounterReducer";

export const CounterStoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, InitialCounter);

  return (
    <CounterContext.Provider value={{
      state: {
        counterValue: state.value
      },
      dispatch
    }}>
      {children}
    </CounterContext.Provider>
  );
};