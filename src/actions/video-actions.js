'use strict';

import { SEARCH_VIDEOS, UPDATE_ACTIVE_VIDEO_ID } from '@AppConstants';

export const searchVideos = (queryString) => ({
    type: SEARCH_VIDEOS,
    queryString
});

export const updateActiveVideo = (activeVideoId, activeVideo) => ({
    type: UPDATE_ACTIVE_VIDEO_ID,
    activeVideoId,
    activeVideo
})
