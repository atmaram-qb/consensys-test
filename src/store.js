'use strict';

import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';

import rootReducers from '@RootReducer';
import rootSaga from '@RootSaga';

const composeEnhancers = process.env.NODE_ENV === 'production'
                                                    ? compose
                                                    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(immutableStateInvariantMiddleware());
}

const configureStore = () => {
    return {
        ...createStore(
            rootReducers,
            composeEnhancers(applyMiddleware(...middlewares))
        ),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

export default configureStore;
