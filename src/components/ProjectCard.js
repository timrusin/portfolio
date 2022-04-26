import { useState } from 'react';
import './ProjectCard.css'
import { ModalFooter, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ProjectCard = (props) => {
const [modal, setModal] = useState (false)

  return (
    <div className="p-card-bg" onClick={() => setModal(!modal)}>
      <div className="p-card-title">{props.title}</div>
      <div className="p-card-stack">Tech Stack: {props.stack}</div>
      <img className="p-card-image" src={props.image} alt={props.alt} />
      <Modal id="modal" isOpen={modal}>
        <ModalHeader toggle={()=>setModal(!modal)}>{props.title}</ModalHeader>
        <ModalBody>
          <div className="p-card-description">{props.description}</div>
        </ModalBody>
        <ModalFooter>
          <a href = {props.git} target="new">
          <Button color="primary" onClick={()=>setModal(!modal)}>
            Source Code
          </Button>{" "}
          </a>
          <a href = {props.link} target="new">
          <Button color="primary" onClick={()=>setModal(!modal)}>
            deployed link
          </Button>{" "}
          </a>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProjectCard