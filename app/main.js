import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import appState from './state';

import View from './view';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

const reducer = combineReducers(appState);

const store = createStore(reducer, compose(
  applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : _ => _
));

const renderApp = () => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
};

ReactDOM.render(renderApp(), document.getElementById('app'));
