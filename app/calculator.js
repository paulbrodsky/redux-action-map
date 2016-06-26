import { createCommand } from './utils';

const initialState = {
  value: 0
};

export const calculator = {
  add: (state, payload) => {
    state.value += payload;
  },
  multiply: (state, payload) => {
    state.value = payload * state.value || 1;
  },
};

const types = {
  add: 'ADD',
  subtract: 'SUBTRACT',
  multiply: 'MULTIPLY',
  divide: 'DIVIDE',
};

export const actionMap = {
  initialState,
  [types.add]: calculator.add,
  [types.multiply]: calculator.multiply,
  commands: (dispatch) => {
    return {
      add: createCommand(dispatch, types.add),
      multiply: createCommand(dispatch, types.multiply),
    };
  },
};
