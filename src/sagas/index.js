'use strict';

import { all } from 'redux-saga/effects';

import appSaga from '@AppSaga';

export default function* rootSaga() {
    yield all([
        ...appSaga
    ]);
}
