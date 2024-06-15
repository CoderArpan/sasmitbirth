import React from 'react';
import './Video.css';

const Video = () => {
    return (
        <div className="video-container">
            <h2 className="video-title">Special Birthday Video</h2>
            <div className="video-wrapper">
                <iframe
                    className="video-frame"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Birthday Video"
                ></iframe>
            </div>
        </div>
    );
}

export default Video;
