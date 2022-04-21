import './ProjectCard.css'

const ProjectCard = (props) => {

  return (
    <div className="p-card-bg">
      <div className="p-card-title">{props.title}</div>
      {/* <div className="p-card-description">{props.description}</div> */}
      <div className="p-card-stack">Tech Stack: {props.stack}</div>
      <img className="p-card-image" src={props.image} alt={props.alt} />
    </div>
  );
}

export default ProjectCard