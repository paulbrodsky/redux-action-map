import { assign, isUndefined, isArray } from 'lodash';

function getActions(actionMap, type) {
  return isArray(actionMap[type])
    ? actionMap[type]
    : [actionMap[type]];
}

export default function createReducer(actionMap) {
  return (state = actionMap.initialState, action) => {
    if (isUndefined(state) || isUndefined(action)) {
      return;
    }
    if (action.type in actionMap) {
      const actions = getActions(actionMap, action.type);
      for (let i = 0; i < actions.length; i++) {
        const newState = actions[i](state, action.payload);
        state = assign({}, state, newState);
      }
    }
    return state;
  };
}

export function createDispatcher(actionMap, types) {
  return (dispatch) => {
    const commands = {};
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      const actions = getActions(actionMap, type);
      for (let j = 0; j < actions.length; j++) {
        const action = actions[j];
        commands[action.name] = (payload) => dispatch({ type, payload });
      }
    }
    return commands;
  };
}
