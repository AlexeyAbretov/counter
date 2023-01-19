import React, { useContext } from "react";
import { Button } from "@components"
import { CounterContext } from "@contexts";
import { ActionKind } from "@types";
import { DecreaseAction, IncreaseAction, ResetAction } from "@store";

export const ButtonsContainer: React.FC = (): JSX.Element => {
    const { dispatch } = useContext(CounterContext);

    return (
        <>
            <Button 
                title="Уменьшить"
                type='decrease'
                onClick={() => dispatch(DecreaseAction())}
            />
            <Button
                title="Сбросить"
                type='reset'
                onClick={() => dispatch(ResetAction())}
            />
            <Button
                title="Увеличить"
                type='increase'
                onClick={() => dispatch(IncreaseAction())}
            />
        </>
    )
}
