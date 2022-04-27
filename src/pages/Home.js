import React from 'react'
import './Home.css'
import homeVideo from '../images/IMG_5417.MOV'

const Home = () => {
  return (
    <div className='home-page-container'>
      <video autoplay preload="auto" loop muted playsinline id="home-video">
        <source src={homeVideo} type='video/MOV'/>
      </video>
    </div>
  )
}

export default Home