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

- calculator
    business logic and corresponding action map
- commands
    action dispatchers generated from the calculator action map
- state
    definies topology for global app state
- utils
    functions to generate reducers from action maps
- view
    our calculator app