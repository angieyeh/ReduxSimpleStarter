import React from 'react';
import VideoListItem from './videoListItem.js';

const VideoList = (props) => {
    let videos = props.videos.map((vid) => {
        return (
            <VideoListItem key={vid.etag} video={vid} selectedVideo={props.selectedVideo}/>
        );
    });
    return (
        <ul className="col-md-4 list-group">
            {videos}
        </ul>
    );
};

export default VideoList;