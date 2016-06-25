/*
 COMMANDS

 */

export function mathCommands(dispatch) {
  return {
    add: (p) => dispatch({ type: 'ADD', payload: p }),
    multiply: (p) => dispatch({ type: 'MULTIPLY', payload: p }),
  }
}