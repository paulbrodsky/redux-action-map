import { assign, map, isUndefined, forEach } from 'lodash';

function executeMutator(mutator, state, action) {
  const newState = assign({}, state);
  mutator.mutate(newState, action.payload);
  return newState;
}

function getCombinedState(mutator) {
  if (mutator.mutators && mutator.mutators.length > 0) {
    const childState = assign({}, ...map(mutator.mutators, 'initialState'));
    return assign(childState, mutator.initialState);
  }
  return mutator.initialState;
}

export default function createReducer(mutator) {
  const combinedState = getCombinedState(mutator);
  return (state = combinedState, action) => {
    if (isUndefined(state) || isUndefined(action)) {
      return;
    }
    if (mutator.type === action.type) {
      state = executeMutator(mutator, state, action);
    }
    if (mutator.mutators && mutator.mutators.length > 0) {
      forEach(mutator.mutators, m => {
        if (m.type === action.type) {
          state = executeMutator(m, state, action);
          state = executeMutator(mutator, state, action);
        }
      });
    }
    return state;
  };
}

export function createCommand(dispatch, type) {
  return (payload) => dispatch({ type, payload });
}
