import { Action, ActionKind } from "@types";

export const DecreaseAction = (): Action => ({
    type: ActionKind.Decrease 
})

export const IncreaseAction = (): Action => ({
    type: ActionKind.Increase 
})

export const ResetAction = (): Action => ({
    type: ActionKind.Reset 
})