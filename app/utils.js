import { assign } from  'lodash';

export default function createReducer(mutator) {
  return (state = mutator.initialState, action) => {
    if (state === null || action.payload === null) {
      return;
    }
    if (action.type === mutator.type) {
      const newState = assign({}, state);
      mutator.mutate(newState, action.payload);
      return newState;
    }
    return state;
  }
}

export function createCommand(dispatch, type) {
  return (payload) => dispatch({ type, payload })
}