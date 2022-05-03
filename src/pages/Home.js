import React from 'react'
import './Home.css'
import home_bg_dev from '../images/home_videobg_dev_med.mp4'
import audio_bg_dev from '../images/home_videobg_audio.mp4'

const Home = ( {video} ) => {

  return (
    <div className="home-page-container">
      <video
        src= {home_bg_dev}
        autoPlay
        playsInline
        loop
        muted
        className={video === 'software' ? 'home-video' : 'hide'}
      />
      <video
        src= {audio_bg_dev}
        autoPlay
        playsInline
        loop
        muted
        className={video=== 'audio' ? 'home-video' : 'hide'}
      />
    </div>




  );
}

export default Home