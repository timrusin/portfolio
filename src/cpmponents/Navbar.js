import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className='nav-links'>
            <Link to="/projects">Projects</Link>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
      </nav>
    </div>
  );
}

export default Navbar