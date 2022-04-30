import React from 'react'
import './Home.css'
import test from '../images/test.mp4'

const Home = () => {
  return (
    <video src={test} preload="auto" autoPlay playsInline loop muted className="home-video"/>
  );
}

export default Home