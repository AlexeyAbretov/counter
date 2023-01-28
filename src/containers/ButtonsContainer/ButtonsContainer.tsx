import React from "react";
import { Button } from "@components"
import { DecreaseAction, IncreaseAction, ResetAction } from "@store";
import { useDispatch } from "react-redux";

export const ButtonsContainer: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

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
