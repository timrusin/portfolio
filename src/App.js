import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './cpmponents/pages/Home'
import Projects from './cpmponents/pages/Projects'
import Navbar from './cpmponents/Navbar'

const App = () => {
  return (
    <>
   <Navbar className="nav" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
       
     
    </>
  );
}

export default App