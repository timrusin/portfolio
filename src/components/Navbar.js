import { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick (!click)
  const closeMenu = () => setClick (false)

  return (
    <div className="sticky">
      <div id="title">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          // smooth={true}
          offset={-100}
          duration={500}
          onClick={closeMenu}
        >
          <h1>Tim Rusin</h1>
        </Link>
        <h4 id="sub-title">software & audio engineer, educator</h4>
      </div>
      <div className={click ? "navbar active" : "navbar"}>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <nav className="nav-links">
            <Link
              className={click ? "hide" : "nav-item"}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              className="nav-item"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              className="nav-item"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>

            <Link
              className="nav-item"
              activeClass="active"
              to="credits"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={closeMenu}
            >
              Credits
            </Link>

            <Link
              className="nav-item"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar