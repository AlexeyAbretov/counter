
export type CounterContextStateType = {
    counterValue: number;
}

export type CounterContextType = {
    dispatch: React.Dispatch<Action>;
    state: CounterContextStateType;
}

export type CounterStateType = {
    value: number;
}

export enum ActionKind {
    Increase = 'INCREASE',
    Decrease = 'DECREASE',
    Reset = 'RESET',
}

export type Action = {
    type: ActionKind
}