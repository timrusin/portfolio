import React from 'react'
import './Contact.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaSoundcloud } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact-page-container">
        <h1>Contact page is on its way!</h1>
        <p>for now, you can reach me at timrusin@gmail.com</p>
        <div className="about-icons-container">
          <a href="https://github.com/timrusin" target="new">
            <div className="about-logos">
              <FaGithub size={25} />
            </div>
          </a>
          <a href="https://soundcloud.com/tjblender" target="new">
            <div className="about-logos">
              <FaSoundcloud size={25} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/timrusin/" target="new">
            <div className="about-logos">
              <FaLinkedin size={25} />
            </div>
          </a>
          <a href="https://www.facebook.com/rusinaudio" target="new">
            <div className="about-logos">
              <FaFacebook size={25} />
            </div>
          </a>
        </div>
    </div>
  )
}

export default Contact