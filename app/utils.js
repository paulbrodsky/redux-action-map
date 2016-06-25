import { assign, isArray, map, pick, forEach } from  'lodash';

export default function createReducer(mutator) {
  return (state = mutator.initialState, action) => {
    if (state === null || action.payload === null) {
      return;
    }
    const typeArray = mutator.types || [mutator.type];
    if (typeArray.indexOf(action.type) > -1) {
      const newState = assign({}, state);
      if (mutator.types) {
        mutator.mutate(newState, action.type, action.payload);
      }
      else {
        mutator.mutate(newState, action.payload);
      }
      return newState;
    }
    return state;
  }
}

export function createCommand(dispatch, type) {
  return (payload) => dispatch({ type, payload })
}

export function combineMutators(mutators) {
  const types = map(mutators, 'type');
  const initialState = assign({}, ...map(mutators, 'initialState'));
  const mutatorMap = {};
  forEach(mutators, m => mutatorMap[m.type] = m);
  return {
    types,
    initialState,
    mutate: (state, type, payload) => {
      mutatorMap[type].mutate(state, payload);
    },
  };
}