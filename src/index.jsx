'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from '@RootRouter';

import configStore from '@ReduxStore';

import '@GlobalStyles';

const store = configStore();
const reactRoot = document.getElementById('react-app');

ReactDOM.render(
    (
        <Provider store={ store }>
            <Router />
        </Provider>
    ),
    reactRoot
);
