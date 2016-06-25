/*
 MUTATORS
 specify an action type, initial state, and a mutate function
 which is always guaranteed to execute only when:
 - the specified action type is detected
 - the state is not null
 - the payload is not null
 */

export const adder = {
  type: 'ADD',

  initialState: { value: 0 },

  mutate: (state, payload) => {
    state.value += payload;
  },
};

export class Multiplier {
  constructor() {
    this.type = 'MULTIPLY';
    this.initialState = { value: 1 };
  }

  mutate(state, payload) {
    state.value *= payload;
  }
}
