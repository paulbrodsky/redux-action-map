import createReducer from './utils';
import { actionMap as calculatorActionMap } from './calculator';

export default {
  calculator: createReducer(calculatorActionMap),
};
