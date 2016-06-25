import { createCommand } from './utils';
import { types } from './types';
/*
 COMMANDS

 */

export default function mathCommands(dispatch) {
  return {
    add: createCommand(dispatch, types.add),
    multiply: createCommand(dispatch, types.multiply),
  }
}