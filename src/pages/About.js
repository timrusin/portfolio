import { useState } from 'react'
import "./About.css"
import BioPhoto from '../images/Tim _Bio_edited.jpg'


const About = () => {
  const [audio, setAudio] = useState(true)
  const [software, setSoftware] = useState(false)
  const [educator, setEducator] = useState(false)

  const selectAudio = () => {
    setAudio(true)
    setSoftware(false)
    setEducator(false)
  }
  const selectSoftware = () => {
    setSoftware(true)
    setAudio(false)
    setEducator(false)
  }
  const selectEducator = () => {
    setEducator(true)
    setAudio(false)
    setSoftware(false)
  }

  return (
    <div className="about-page-container">
      <div className="bio-descriptions">
        <div className="btn-container">
          <button
            onClick={selectAudio}
            className={audio ? "bio-btn-active bio-btn" : "bio-btn"}
          >
            AUDIO
          </button>
          <button
            onClick={selectSoftware}
            className={software ? "bio-btn-active bio-btn" : "bio-btn"}
          >
            SOFTWARE
          </button>
          <button
            onClick={selectEducator}
            className={educator ? "bio-btn-active bio-btn" : "bio-btn"}
          >
            EDUCATOR
          </button>
        </div>
        <div className={audio ? 'show' : 'hide'}>
          <p>
            audio talk
          </p>
          <p>
            some more audio talk here
          </p>
        </div>
        <div className={software ? 'show' : 'hide'}>
          <p>
            software talk here
          </p>
          <p>
            some more software talk here
          </p>
        </div>
      </div>
      <img className="about-image" src={BioPhoto} alt="Tim Rusin" />
    </div>
  );
}

export default About