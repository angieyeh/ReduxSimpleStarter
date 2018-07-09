import React from 'react';

const VideoListItem = ({video, selectedVideo}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={() => selectedVideo(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading"> 
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem; 