'use strict';

import axios, { CancelToken } from 'axios';
import { CANCEL } from 'redux-saga'; 

const RESULTS_TO_FETCH = 15;

export const fetchVideoResults = async (queryString) => {
    const source = CancelToken.source();

    const getConfig = {
        url: '/search',
        method: 'get',
        baseURL: process.env.API_BASE_URL,
        params: {
            q: queryString,
            key: process.env.API_KEY,
            maxResults: RESULTS_TO_FETCH,
            part: 'snippet'
        },
        cancelToken: source.token
    };
    
    try {
        const request = axios(getConfig);
        request[CANCEL] = () => source.cancel();

        const searchResponse = await request;
        
        return searchResponse.data
                ? searchResponse.data.items
                : [];

    } catch(error) {
        console.error(error);
    }
};
