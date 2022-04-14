import React from 'react'
import './Home.css'
import Projects from './Projects'
import './Home.css'
import Contact from './Contact'
import About from './About'

const Home = () => {
  return (
    <>
    <div className='home-page-container'>
      <h1>Home</h1>
    </div>
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default Home