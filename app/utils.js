import { assign, isUndefined, isArray } from 'lodash';
import Promise from 'bluebird';

export const ACTION_TYPES = {
  resolve: 'RESOLVE',
  error: 'ERROR',
};

function getMutators(actionMap, type) {
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
      const mutators = getMutators(actionMap, action.type);
      Promise.each(mutators, (m) => {
        return Promise.resolve(m(state, action.payload))
          .then(s => {
            action.dispatch({ type: ACTION_TYPES.resolve, payload: s });
          })
          .catch(e => {
            action.dispatch({ type: ACTION_TYPES.error, payload: e });
          });
      });
    } else if (action.type === ACTION_TYPES.resolve) {
      return assign({}, state, action.payload);
    } else if (action.type === ACTION_TYPES.error) {
      // todo log error
    }

    return state;
  };
}

export function createDispatcher(actionMap, types) {
  return (dispatch) => {
    const commands = {};
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      const mutators = getMutators(actionMap, type);
      for (let j = 0; j < mutators.length; j++) {
        const mutator = mutators[j];
        commands[mutator.name] = (payload) => dispatch({ type, payload, dispatch });
      }
    }
    return commands;
  };
}
