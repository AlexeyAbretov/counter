/* eslint-disable import/no-extraneous-dependencies */
import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

export class CounterStore {
  value = 0;

  constructor(initialValue = 0) {
    this.value = initialValue;

    makeAutoObservable(this);
  }

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }

  reset() {
    this.value = 0;
  }

  get type() {
    let type = 'lesszero';

    if (this.value === 0) {
      type = 'zero';
    } else if (this.value > 0) {
      type = 'abovezero';
    }

    return type;
  }
}

export const CounterContext = createContext<CounterStore>(null);
