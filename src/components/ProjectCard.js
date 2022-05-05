import { useState } from 'react';
import Modal from '../components/Modal'
import './ProjectCard.css'

const ProjectCard = (props) => {
const [modal, setModal] = useState (false)
const closeModal = () => setModal(false)
const openModal = () => setModal(true)

  return (
    <div className="p-card-bg">
      <div className="p-card-title">{props.title}</div>
      <div className={modal ? 'modal-button' : 'modal-button-hidden'} onClick={closeModal}>CLOSE</div>
      <div className={modal ? "modal-showing" : "modal-hidden"}><Modal {...props} modal={modal}/></div>
      <div className="p-card-stack">Tech Stack: {props.stack}</div>
      <div className={!modal ? 'modal-button' : 'modal-button-hidden'} onClick={openModal}>MORE INFO</div>
      <img className="p-card-image" src={props.image} alt={props.alt} />
    </div>
  );
}

export default ProjectCard