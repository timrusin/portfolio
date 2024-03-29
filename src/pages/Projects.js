import {useState} from 'react'
import ProjectCard from '../components/ProjectCard';
import Data from '../data/ProjectData'
import './Project.css'

const Projects = () => {
  const [selection, setSelection] = useState('website')

  const selected = []
  Data.map(item => {
    return item.category === selection && selected.push(item) 
  })

  return (
    <>
    <h1 className="projects-title">SOFTWARE PROJECTS</h1>
      <div className="proj-btn-container">
        <button className={selection === 'website' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('website')}>Websites</button>
        <button className={selection === 'game' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('game')}>Game Dev</button>
        <button className={selection === 'application' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('application')}>Applications</button>
      </div>
    <div className="project-page-container">
      {selected.map(item => {
        return <ProjectCard key={item.title}
        {...item}
        />
      })}
    </div>
    </>
  );
}

export default Projects