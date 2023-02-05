import React from "react";
import { Button } from "@components"
import { DecreaseAction, IncreaseAction, ResetAction } from "@store";
import { useDispatch } from "react-redux";
import { Box } from "components/Box";

export const ButtonsContainer: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <Box
            display="flex"
            flexDirection={{
                _: 'column',
                sm: 'column',
                lg: 'row'
            }}
        >
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
        </Box>
    )
}
