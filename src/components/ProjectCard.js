import { useState } from 'react';
import Modal from '../components/Modal'
import './ProjectCard.css'

const ProjectCard = (props) => {
const [modal, setModal] = useState (false)
const [active, setActive] = useState (false)

const focus = () => {
  setActive(true) 
  setModal(true)
}
const unFocus = () => {
  setActive(false) 
  setModal(false)
}

  return (
    <div onClick={focus} onMouseLeave={unFocus} className= {active ? "p-card-bg bigger" : "p-card-bg"}>
      <div className={active ? "p-card-title" : "title-hidden"}>{props.title}</div>
      <div className={modal ? "modal-showing" : "modal-hidden"}><Modal {...props} modal={modal}/></div>
      <div className= {active ? "p-card-stack" : "stack-hidden"}>Tech Stack: {props.stack}</div>
      <img className={!active? "p-card-image" : "smaller"} src={props.image} alt={props.alt} />
    </div>
  );
}

export default ProjectCard
