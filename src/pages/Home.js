import React from 'react'
import './Home.css'
import homeVideo from '../images/IMG_5417.mp4'

const Home = () => {
  return (
    <div className='home-page-container'>
      <video className="home-video" autoPlay loop muted>
        <source src={homeVideo} type='video/mp4'/>
      </video>
    </div>
  )
}

export default Home