import React from 'react'
import './Home.css'
import test from '../images/test.MOV'

const Home = () => {
  return (
    <div className="home-page-container">
      <video
        src={test}
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