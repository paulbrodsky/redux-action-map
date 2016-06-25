import { createCommand } from './utils';

/*
 COMMANDS

 */

export default function mathCommands(dispatch) {
  return {
    add: createCommand(dispatch, 'ADD'),
    multiply: createCommand(dispatch, 'MULTIPLY'),
  }
}