Action maps allow us to generate reducers and action dispatchers by defining:
- the initial state
- the map of action types to actions

```javascript
export const actionMap = {
  initialState,
  'actionType1': [action1, action2]
  'actionType2': action3,
};
```

- calculator.js: Business logic and corresponding action map
- commands.js: Action dispatchers generated from the calculator action map
- state.js: Definies topology for global app state
- utils.js: Functions to generate reducers from action maps
- view.js: Our calculator app
