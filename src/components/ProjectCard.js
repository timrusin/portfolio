import { useState } from 'react';
import Modal from '../components/Modal'
import './ProjectCard.css'
// import { ModalFooter, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ProjectCard = (props) => {
const [modal, setModal] = useState (false)

  return (
    <div className="p-card-bg" onClick={() => setModal(!modal)}>
      <div className="p-card-title">{props.title}</div>
      <div className='modal-animation'>{modal && <Modal {...props} />}</div>
      <div className="p-card-stack">Tech Stack: {props.stack}</div>
      <img className="p-card-image" src={props.image} alt={props.alt} />
    </div>
  );
}

export default ProjectCard