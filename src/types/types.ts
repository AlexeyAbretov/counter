export type CounterStateType = {
  value: number;
};

export enum ActionKind {
  Increase = 'INCREASE',
  Decrease = 'DECREASE',
  Reset = 'RESET',
}

export type Action = {
  type: ActionKind;
};

export type DispatchType = (args: Action) => Action;
