/* eslint-disable no-undef */
import { getCounterContanerPropsSelector } from '../selectors';

describe('selectors tests', () => {
  describe('getCounterContanerPropsSelector tests', () => {
    it('should return lesszero type', () => {
      expect(
        getCounterContanerPropsSelector({
          value: -1,
        }),
      ).toEqual({
        value: -1,
        type: 'lesszero',
      });

      expect(
        getCounterContanerPropsSelector({
          value: -5,
        }),
      ).toEqual({
        value: -5,
        type: 'lesszero',
      });
    });

    it('should return abovezero type', () => {
      expect(
        getCounterContanerPropsSelector({
          value: 1,
        }),
      ).toEqual({
        value: 1,
        type: 'abovezero',
      });

      expect(
        getCounterContanerPropsSelector({
          value: 5,
        }),
      ).toEqual({
        value: 5,
        type: 'abovezero',
      });
    });

    it('should return zero type', () => {
      expect(
        getCounterContanerPropsSelector({
          value: 0,
        }),
      ).toEqual({
        value: 0,
        type: 'zero',
      });
    });
  });
});
