import { createDispatcher } from './utils';
import {
  actionMap as calculatorActionMap,
  actionTypes as calculatorActionTypes,
} from './calculator';

export const calculatorCommands = createDispatcher(
  calculatorActionMap, [calculatorActionTypes.add, calculatorActionTypes.multiply]
);
