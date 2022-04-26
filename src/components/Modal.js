import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineHttp } from 'react-icons/md'

import './Modal.css'

const Modal = (props) => {

  return (
    <div className="modal-container">
      <p className="modal-description">{props.description}</p>
      <div className="modal-links-container">
        <div className="github-logo">
          <a href={props.git} target="new">
            <FaGithub size={25} />
            <span className="link-titles">source code</span>
          </a>
        </div>
        <a href={props.link} target="new">
          <MdOutlineHttp size={25}/>
          <span className='link-titles'> deployed site</span>
        </a>
      </div>
    </div>
  );
}


export default Modal