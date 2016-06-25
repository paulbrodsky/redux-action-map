import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { assign, isNull } from 'lodash'

import App from './app';

function createReducer(mutator) {
    return (state = mutator.initialState, action) => {
        if (state === null || action.payload === null) {
            return;
        }
        if (action.type === mutator.type) {
            const newState = assign({}, state);
            mutator.mutate(newState, action.payload);
            return newState;
        }
        return state;
    }
}

/*
 MUTATORS
 specify an action type, initial state, and a mutate function
 which is always guaranteed to execute only when:
 - the specified action type is detected
 - the state is not null
 - the payload is not null
 */

const adder = {
    type: 'ADD',

    initialState: { value: 0 },

    mutate: (state, payload) => {
        state.value += payload;
    },
};

class Multiplier {
    constructor() {
        this.type = 'MULTIPLY';
        this.initialState = { value: 1 };
    }

    mutate(state, payload) {
        state.value *= payload;
    }
}

/*
 APPSTATE
 Defines the topolgy of the global state in one place.
 */

const appState = {
    added: createReducer(adder),
    multiplied: createReducer(new Multiplier()),
};

const reducers = combineReducers(appState);

const store = createStore(reducers);

const renderApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

ReactDOM.render(renderApp(), document.getElementById('app'));
