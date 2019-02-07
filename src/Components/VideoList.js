import React from 'react';
import VideoItems from './VideoItem';

const VideosList = ({ videos, handleselect }) => {

    const renderedVideos = videos.map((video =>
        <VideoItems
            key={video.id.videoId}
            video={video}
            handleVideoSelect={handleselect}
        />
    ))
    return (
        <div>
            <div className="card card-body shadow-sm">
                <h5 className="text-center">Videos List</h5>
                {renderedVideos}
            </div>
        </div>
    )
};
export default VideosList;