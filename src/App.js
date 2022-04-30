import React from 'react'
// import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import Credits from './pages/Credits'


const App = () => {
  return (
    <main>
   <Navbar className="nav" />
   {/* <div id="home">
     <Home />
   </div> */}
   <div id="about">
     <About />
   </div>
   <div id="projects">
     <Projects />
   </div>
   <div id="credits">
     <Credits />
   </div>
   <div id="contact">
     <Contact />
   </div>
      
    </main>
  );
}

export default App