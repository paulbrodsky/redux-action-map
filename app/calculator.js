const initialState = {
  isCalculating: false,
  value: 0,
};

const calculator = {
  before: () => {
    return {
      isCalculating: true,
    };
  },
  after: () => {
    return {
      isCalculating: false,
    };
  },
  add: (state, payload) => {
    return {
      value: state.value + payload,
    };
  },
  multiply: (state, payload) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        value: payload * state.value || 1,
      }), 2000);
    });
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
