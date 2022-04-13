import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container">
      <div className="title">
        <Link to="/"><h1>Tim Rusin</h1></Link>
        <h4>software engineer</h4>
      </div>
      <div className="navbar">
        <nav className="nav-links">
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/">Contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar