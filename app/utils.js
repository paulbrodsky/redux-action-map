import { assign, isUndefined } from 'lodash';

const BEFORE_LABEL = 'BEFORE';
const AFTER_LABEL = 'AFTER';

function getBeforeActionType(type) {
  return `${type}:${BEFORE_LABEL}`;
}

function getAfterActionType(type) {
  return `${type}:${AFTER_LABEL}`;
}

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
  return (payload) => {
    dispatch({ type: getBeforeActionType(type), payload });
    dispatch({ type, payload });
    dispatch({ type: getAfterActionType(type), payload });
  };
}
