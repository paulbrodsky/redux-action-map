const initialState = {
  isCalculating: false,
  value: 0
};

const calculator = {
  before: (state) => {
    state.isCalculating = true;
  },
  after: (state) => {
    state.isCalculating = false;
  },
  add: (state, payload) => {
    state.value += payload;
  },
  multiply: (state, payload) => {
    state.value = payload * state.value || 1;
  },
};

export const actionTypes = {
  add: 'ADD',
  subtract: 'SUBTRACT',
  multiply: 'MULTIPLY',
  divide: 'DIVIDE',
};

export const actionMap = {
  initialState,
  [actionTypes.add]: [calculator.before, calculator.add, calculator.after],
  [actionTypes.multiply]: [calculator.before, calculator.multiply, calculator.after],
};
