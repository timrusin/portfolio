import React from 'react'
import "./About.css"
import BioPhoto from '../images/Tim _Bio_edited.jpg'


const About = () => {
  return (
    <div className="about-page-container">
      <div className='bio-descriptions-left'>
        <h1>The Software Engineer</h1>
        <div>
          <p>I began my software engineering journey in late 2021
          when I enrolled in the Software Engineering Emmersive
          program withGeneral Assembly.</p>
          <p>tsting asdjaskdj asdjkjasd asjdksajd asdjkkjasd askdjkasjd askdjkasjdkjasd as kasjdkasj </p>
        </div>
      </div>
      <img className="about-image" src={BioPhoto} width="50%" alt="Tim Rusin" />
      <div className="bio-descriptions-right">
        <h1>The Audio Engineer</h1>
        <p>My aduio engineering goes much deeper. I began my audio career back in the early 2000's, have worked with hundreds of artists, an Three-Time Emmy nominated</p>
      </div>
    </div>
  );
}

export default About