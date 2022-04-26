import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './Modal.css'

const Modal = (props) => {

  return (
    <div className="modal-container">
      <p className="modal-description">{props.description}</p>
      <div className='github-logo'><FaGithub /><span className='link-titles'>source code</span></div>

    </div>
  );
}


export default Modal