'use strict';

import React from 'react';
import shortid from 'shortid';

import './styles';

const VideosList = (props) => (
    <ul className="csys-videos-list">
        { 
            props.videosList.length
                ? renderVideosListItem(
                        props.videosList,
                        props.activeVideoId,
                        props.onVideoListItemClicked
                    )
                : renderEmptyList()
        }
    </ul>
);

const renderVideosListItem = (videosList, activeVideoId, onVideoListItemClicked) => (
    videosList.map(
        (video, index) => {
            const liClassName = video.id.videoId === activeVideoId 
                                    ? 'active'
                                    : null;

            return (
                <li
                    key={ video.id.videoId || shortid.generate() }
                    className={ liClassName }
                    onClick={ () => { onVideoListItemClicked(index) } }>
                        <img
                            className="video-thumb"
                            src={ video.snippet.thumbnails.default.url }
                            alt="Video Thumbnail" />
                        <div className="video-title">{ video.snippet.title }</div>
                </li>
            );
        }
    )
);

const renderEmptyList = () => (
    <div>Nothing to show</div>
);

export default VideosList;
