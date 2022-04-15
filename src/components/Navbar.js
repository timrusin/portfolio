import { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick (!click)
  const closeMenu = () => setClick (false)

  return (
    <div className="container sticky">
      <div id="title">
        <Link to="/" onClick={closeMenu}>
          <h1>Tim Rusin</h1>
        </Link>
        <h4>software engineer</h4>
      </div>
      <div className={click ? "navbar active" : "navbar"}>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <nav className="nav-links">
            <Link className="nav-item" to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link className="nav-item" to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link className="nav-item" to="/projects" onClick={closeMenu}>
              Projects
            </Link>
            <Link className="nav-item" to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar