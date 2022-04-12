import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className='nav-links'>
            <Link to="/projects">Projects</Link>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar