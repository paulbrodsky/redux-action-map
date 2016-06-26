const initialState = {
  value: 0
};

export const calculator = {
  addBefore: (state, payload) => {
    console.log('addBefore');
  },
  add: (state, payload) => {
    state.value += payload;
  },
  addAfter: (state, payload) => {
    console.log('addAfter');
  },
  multiplyBefore: (state, payload) => {
    console.log('multiplyBefore');
  },
  multiply: (state, payload) => {
    state.value = payload * state.value || 1;
  },
  multiplyAfter: (state, payload) => {
    console.log('multiplyAfter');
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
  ['ADD:BEFORE']: calculator.addBefore,
  [actionTypes.add]: calculator.add,
  [actionTypes.multiply]: calculator.multiply,
};
