'use strict';

import {
    UPDATE_VIDEOS_LIST,
    UPDATE_ACTIVE_VIDEO_ID,
    SHOW_LOADER,
    HIDE_LOADER
} from '@AppConstants';

const initialState = {
    videosList: [],
    activeVideoId: '',
    activeVideo: null,
    isFetching: false
}

const videos = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_VIDEOS_LIST:
        const { videosList } = action
            return {
                videosList,
                activeVideoId: videosList[0].id.videoId,
                activeVideo: videosList[0].snippet
            }
        
        case UPDATE_ACTIVE_VIDEO_ID:
            const { activeVideoId, activeVideo } = action;
            
            return Object.assign(
                { },
                state,
                { activeVideoId, activeVideo }
            );

        case SHOW_LOADER:
            return Object.assign(
                {},
                state,
                { isFetching: true }
            );

        case HIDE_LOADER:
            return Object.assign(
                {},
                state,
                { isFetching: false }
            );

        default:
            return state;
    }
}

export default videos;
