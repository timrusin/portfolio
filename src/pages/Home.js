import React from 'react'
import './Home.css'
import dev_bg_low from '../images/home_videobg_dev_low.mp4'
import audio_bg_low from '../images/home_videobg_audio_low.mp4'

const Home = ( {video} ) => {
  return (
    <div className="home-page-container">
      <video
        src= {dev_bg_low}
        autoPlay
        playsInline
        loop
        muted
        className={video === 'software' ? 'home-video-low' : 'hide-video'}
      />
      <video
        src= {audio_bg_low}
        autoPlay
        playsInline
        loop
        muted
        className={video === 'audio' || video === 'educator' ? 'home-video-low' : 'hide-video'}
      />
    </div>
  );
}

export default Home