import createReducer from './utils';
import { adder, multiplier, calculator } from './mutators';

/*
 APPSTATE
 Defines the topolgy of the global state in one place.
 */

export default {
  added: createReducer(adder),
  multiplied: createReducer(multiplier),
  total: createReducer(calculator),
};
