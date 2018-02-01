'use strict';

import { delay } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';

import {
    SEARCH_VIDEOS,
    UPDATE_VIDEOS_LIST,
    SHOW_LOADER,
    HIDE_LOADER
} from '@AppConstants';

import { fetchVideoResults } from '@VideoService';

function * searchViedeos({ queryString }) {
    try {
        yield call(delay, 300); //For throttling frequent requests
        yield put ({ type: SHOW_LOADER });
        const videosList = yield call (fetchVideoResults, queryString);
        yield put ({ type:UPDATE_VIDEOS_LIST, videosList })
    } catch (error) {
        console.error('Error in saga', error);
    } finally {
        yield put ({ type: HIDE_LOADER });
    }
}

export default [
    takeLatest(SEARCH_VIDEOS, searchViedeos)
];
