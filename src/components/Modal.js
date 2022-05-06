import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineHttp } from 'react-icons/md'

import './Modal.css'

const Modal = ({description, git, link,  modal}) => {
  return (
    <div className={modal ? 'modal-container active' : 'modal-container'}>
      <p className="modal-description">{description}</p>
      <div className="modal-links-container">
        <div className="github-logo">
          <a href={git} target="new">
            <FaGithub size={25} />
            <span className="link-titles">source code</span>
          </a>
        </div>
        <a href={link} target="new">
          <MdOutlineHttp size={25}/>
          <span className='link-titles'> deployed site</span>
        </a>
      </div>
    </div>
  );
}


export default Modal