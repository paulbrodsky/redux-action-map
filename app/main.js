import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import appState from './state';

import Calculator from './calculator';

const reducers = combineReducers(appState);
const store = createStore(reducers);

const renderApp = () => {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
};

ReactDOM.render(renderApp(), document.getElementById('app'));
