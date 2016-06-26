import { assign, isUndefined } from 'lodash';

export default function createReducer(actionMap) {
  return (state = actionMap.initialState, action) => {
    if (isUndefined(state) || isUndefined(action)) {
      return;
    }
    if (action.type in actionMap) {
      const newState = assign({}, state);
      actionMap[action.type](newState, action.payload);
      return newState;
    }
    return state;
  };
}

export function createCommand(dispatch, type) {
  return (payload) => dispatch({ type, payload });
}
