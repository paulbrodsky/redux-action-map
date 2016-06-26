import { assign, isUndefined, isArray } from 'lodash';

export default function createReducer(actionMap) {
  return (state = actionMap.initialState, action) => {
    if (isUndefined(state) || isUndefined(action)) {
      return;
    }
    if (action.type in actionMap) {
      const actions = isArray(actionMap[action.type]) ? actionMap[action.type] : [actionMap[action.type]];
      let newState = state;
      for (let i = 0; i < actions.length; i++) {
        newState = assign({}, newState);
        actions[i](newState, action.payload);
      }
      return newState;
    }
    return state;
  };
}
