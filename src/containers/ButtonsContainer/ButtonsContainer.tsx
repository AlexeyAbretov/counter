import React, { useContext } from "react";
import { Button } from "@components"
import { CounterContext } from "@contexts";
import { ActionKind } from "@types";

export const ButtonsContainer: React.FC = (): JSX.Element => {
    const { dispatch } = useContext(CounterContext);

    return (
        <>
            <Button 
                title="Уменьшить"
                type='decrease'
                onClick={() => dispatch({ type: ActionKind.Decrease })}
            />
            <Button
                title="Сбросить"
                type='reset'
                onClick={() => dispatch({ type: ActionKind.Reset })}
            />
            <Button
                title="Увеличить"
                type='increase'
                onClick={() => dispatch({ type: ActionKind.Increase })}
            />
        </>
    )
}
