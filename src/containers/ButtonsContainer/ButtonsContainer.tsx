import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "@components"
import { DecreaseAction, IncreaseAction, ResetAction } from "@store";

import { ButtonsWrapper } from "./styled";

export const ButtonsContainer: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <ButtonsWrapper>
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
        </ButtonsWrapper>
    )
}
