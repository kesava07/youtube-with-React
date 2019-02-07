import React from 'react';

const VideoItems = ({ video, handleVideoSelect }) => {
    return (
        <div className="my-2" onClick={() => handleVideoSelect(video)}>
            <div className="row videos-section">
                <div className="col-md-5">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} width="100%" height="100%" />
                </div>
                <div className="col-md-7 videoDeatils">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};
export default VideoItems;