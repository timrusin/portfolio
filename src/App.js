import React from 'react'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <main>
   <Navbar className="nav" />
   <div id="home">
     <Home />
   </div>
   <div id="about">
     <About />
   </div>
   <div id="projects">
     <Projects />
   </div>
   <div id="contact">
     <Contact />
   </div>
      
    </main>
  );
}

export default App