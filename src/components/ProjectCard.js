import { useState } from 'react';
import Modal from '../components/Modal'
import './ProjectCard.css'
// import { ModalFooter, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ProjectCard = (props) => {
const [modal, setModal] = useState (false)
const onMouseLeave = () => setModal(false)
const onMouseEnter = () => setModal(true)

  return (
    <div className="p-card-bg" onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
      <div className="p-card-title">{props.title}</div>
      <div>{modal && <Modal {...props} />}</div>
      <div className="p-card-stack">Tech Stack: {props.stack}</div>
      <img className="p-card-image" src={props.image} alt={props.alt} />
    </div>
  );
}

export default ProjectCard