import { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick (!click)

  return (
    <div className="container sticky">
      <div id="title">
        <Link to="/">
          <h1>Tim Rusin</h1>
        </Link>
        <h4>software engineer</h4>
      </div>
      <div className={click ? "navbar active" : "navbar"}>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <nav className="nav-links">
          <Link to="/" id="home">
            Home
          </Link>
          <Link to="/about" id="about">
            About
          </Link>
          <Link to="/projects" id="projects">
            Projects
          </Link>
          <Link to="/contact" id="contact">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar