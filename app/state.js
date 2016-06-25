import createReducer from  './reduxMutator';
import { adder, Multiplier } from  './mutators';

/*
 APPSTATE
 Defines the topolgy of the global state in one place.
 */

export default function createAppState() {
  return {
    added: createReducer(adder),
    multiplied: createReducer(new Multiplier()),
  };
}
