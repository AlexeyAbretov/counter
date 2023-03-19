import { CounterStore } from '..';

describe('store tests', () => {
  describe('increment tests', () => {
    it('should add 1', () => {
      const store = new CounterStore();

      store.increment();

      expect(store.value).toEqual(1);
    });
  });

  describe('decrement tests', () => {
    it('should minus 1', () => {
      const store = new CounterStore();

      store.decrement();

      expect(store.value).toEqual(-1);
    });
  });

  describe('reset tests', () => {
    it('should equal 0', () => {
      const store = new CounterStore(2);

      expect(store.value).toEqual(2);

      store.reset();

      expect(store.value).toEqual(0);
    });
  });
});
