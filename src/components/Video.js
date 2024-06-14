import React from 'react';

const Video = () => {
    const videos = [
        {
            url: 'https://www.example.com/video1.mp4', // Replace with your video URL
            title: 'Birthday Celebration 2022'
        },
        {
            url: 'https://www.example.com/video2.mp4', // Replace with your video URL
            title: 'Our Trip to the Mountains'
        },
        {
            url: 'https://www.example.com/video3.mp4', // Replace with your video URL
            title: 'Surprise Party'
        }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2>Videos</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {videos.map((video, index) => (
                    <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                        <video width="320" height="240" controls>
                            <source src={video.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p>{video.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Video;
