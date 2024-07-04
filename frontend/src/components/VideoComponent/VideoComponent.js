import React from 'react';
import ReactPlayer from 'react-player'
import '../../styles/styles.css';

const VideoComponent = ({ video }) => {
   
  if (!video || !video.videoUrl) {
    return (
      <div className="video-container">
        <p>No video available.</p>
      </div>
    );
  }

  return (
    <div className="video-container">
        
        
        <ReactPlayer
            className='react-player fixed-bottom ' 
            url= {video.videoUrl}
            width='100%'
            height='80%'
            controls = {true}

          />
      
      <h2>{video.title}</h2>
      <p>{video.desc}</p>
    </div>
  );
};

export default VideoComponent;
