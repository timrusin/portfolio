import React from 'react'
import './Home.css'
import home_bg_dev from '../images/home_videobg_dev_med.mp4'

const Home = () => {
  return (
    <div className="home-page-container">
      <video
        src={home_bg_dev}
        autoPlay
        playsInline
        loop
        muted
        className="home-video"
      />
    </div>
  );
}

export default Home