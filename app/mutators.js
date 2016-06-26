import { combineMutators } from './utils';
import { types } from './types';

/*
 MUTATORS
 specify an action type, initial state, and a mutate function
 which is always guaranteed to execute only when:
 - the specified action type is detected
 - the state is not null
 - the payload is not null
 */

export const adder = {
  type: types.add,
  initialState: { value: 0 },
  mutate: (state, payload) => {
    state.value += payload;
  },
};

export const multiplier = {
  type: types.multiply,
  initialState: { value: 10 },
  mutate: (state, payload) => {
    state.value = payload * state.value || 1;
  },
};

export const calculator = {
  mutators: [adder, multiplier],
  initialState: { value: 100,  displayValue: 'Total 100' },
  mutate: (state) => {
    state.displayValue = `Total ${state.value}`;
  },
};
