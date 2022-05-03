import React from 'react'
import './Home.css'
import home_bg_dev from '../images/home_videobg_dev_med.mp4'
import testVideo from '../images/home_videobg_audio.mp4'

const Home = ({video}) => {
  console.log(video)
let source = null
  video === "software" ? source = home_bg_dev : source = testVideo

  return (
    <div className="home-page-container">
      <video
        src= {source}
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