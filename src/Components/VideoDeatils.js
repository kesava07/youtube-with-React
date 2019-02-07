import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div className="card card-body text-center">Oops... No videos to load please search...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className='mb-2 p-1'>
                <iframe src={videoSrc} allowFullScreen title='Video player' width="100%" height="450"/>
            </div>
            <div className='card card-body p-2 shadow-sm'>
                <h4 className='video_header'>{video.snippet.title}</h4>
                <p className="video_description">{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;