'use strict';

import React from 'react';
import moment from 'moment';

import './styles';

const VideoDetail = (props) => {
    const { video } = props;

    return (
        video
            ? renderVideoDetail(video)
            : renderEmptyDetail()
    );
};

const renderVideoDetail = (video) => (
    <div className="csys-video-detail">
        <img src={ video.thumbnails.high.url } alt="Video Thumbnail" />
        <section className="detail-section">
            <h2 className="video-title">{ video.title }</h2>
            <p className="video-description">{ video.description }</p>
            <ul className="extra-descriptions">
                { renderDescription('Channel', video.channelTitle) }
                { renderDescription('Published At', moment(video.publishedAt).format('MMMM Do YYYY, h:mm:ss a')) }
            </ul>
        </section>
    </div>
);

const renderDescription = (label, field) => (
    <li>
        <div className="description-label">{ label }</div>
        <div className="description-field">{ field }</div>
    </li>
);

const renderEmptyDetail = () => (
    <div>Nothing to show</div>
);

export default VideoDetail;
