import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <main>
   <Navbar className="nav" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About id='about'/>}/>
      </Routes>
    </main>
  );
}

export default App