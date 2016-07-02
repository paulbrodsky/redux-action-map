import { assign } from 'lodash';

const initialState = {
  isCalculating: false,
  value: 0,
};

function promiseTimeout(action, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(action()), delay);
  });
}

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
    return promiseTimeout(() => ({
      value: payload * state.value || 1,
    }), 1000);
  },
  resolve: (state, payload) => {
    return assign({}, state, payload);
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
  RESOLVE: calculator.resolve,
};
