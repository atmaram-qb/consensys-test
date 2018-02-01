'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchVideos, updateActiveVideo } from '@TestAction';

import './styles';

import VideosList from '@VideosListComponent';
import VideoDetail from '@VideoDetailComponent';
import Loader from '@LoaderComponent';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        }
    }

    render = () => (
        <div className="csys-app-wrapper">
            <section className="search-section">
                <input
                    type="text"
                    value={ this.state.inputText }
                    onChange={ this.handleSearchInputChange } />
                
                <Loader isLoading={ this.props.isLoading } />
            </section>

            <section className="video-section">
                <div className="video-list-wrapper">
                    <VideosList
                        videosList={ this.props.videosList }
                        activeVideoId= { this.props.activeVideoId } 
                        onVideoListItemClicked={ this.handleVideoListItemClick } />
                </div>

                <div className="video-detail-wrapper">
                    <VideoDetail video={ this.props.activeVideo } />
                </div>
            </section>
        </div>
    );

    handleSearchInputChange = (event) => {
        this.setState({
            inputText: event.target.value
        }, () => {
            this.props.searchVideos(this.state.inputText);
        });
    }

    handleVideoListItemClick = (index) => {
        const activeVideo = Object.assign( {}, this.props.videosList[index] );
        this.props.updateActiveVideo( activeVideo.id.videoId, activeVideo.snippet);
    }
}

const mapStateToProps = (state) => ({
    videosList: state.videos.videosList,
    activeVideoId: state.videos.activeVideoId,
    activeVideo: state.videos.activeVideo,
    isLoading: state.videos.isFetching
});

const mapDispatchToProps = (dispatch) => ({
    searchVideos: bindActionCreators(searchVideos, dispatch),
    updateActiveVideo: bindActionCreators(updateActiveVideo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
