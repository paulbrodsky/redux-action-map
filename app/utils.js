import { assign, isUndefined, isArray } from 'lodash';

export default function createReducer(actionMap) {
  return (state = actionMap.initialState, action) => {
    if (isUndefined(state) || isUndefined(action)) {
      return;
    }
    if (action.type in actionMap) {
      const actions = isArray(actionMap[action.type])
        ? actionMap[action.type]
        : [actionMap[action.type]];
      for (let i = 0; i < actions.length; i++) {
        const newState = actions[i](state, action.payload);
        state = assign({}, state, newState);
      }
    }
    return state;
  };
}
