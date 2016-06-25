import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { assign, isNull } from 'lodash'

import createAppState from './state';

import App from './app';

const reducers = combineReducers(createAppState());
const store = createStore(reducers);

const renderApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(renderApp(), document.getElementById('app'));
