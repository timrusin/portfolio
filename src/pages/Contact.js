import React from 'react'
import './Contact.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaSoundcloud } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className='contact-title'>Would love to hear from you!</div>
        <ContactForm />
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