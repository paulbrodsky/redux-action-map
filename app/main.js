import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { assign } from 'lodash'

import App from './app';

function r1(state = 0, action) {
    switch (action.type) {
        case 'r1':
            return state + 1;
        default:
            return state;
    }
}

function r2(state = 0, action) {
    switch (action.type) {
        case 'r2':
            return state + 1;
        default:
            return state;
    }
}

const reducers = combineReducers({r1, r2});
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));
