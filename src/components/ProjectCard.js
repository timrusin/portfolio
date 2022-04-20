import React from 'react'
import './ProjectCard.css'

const ProjectCard = (props) => {
  return (
    <div className="p-card-bg">
      <div className="p-card-title">{props.title}</div>
      <div className="p-card-description">{props.description}</div>
      <img className="p-card-image" src={props.image} alt={props.alt}/>
      <div className="p-card-stack">Stack: {props.stack}</div>
      <div>
          <a href={props.git} target="new">GITHUB REPO</a>
      </div>
      <div>
      <a href={props.link} target="new">VISIT</a>
      </div>
    </div>
  );
}

export default ProjectCard