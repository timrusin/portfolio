import { useState } from 'react'
import "./About.css"
import AudioPhoto from '../images/Tim _Bio_edited.jpg'
import EduImage from '../images/live_sound_class.jpg'
import SoftwareImage from '../images/coding_placeholder.png'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaSoundcloud } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const About = ({setVideo}) => {
  const [audio, setAudio] = useState(false)
  const [software, setSoftware] = useState(true)
  const [educator, setEducator] = useState(false)

  const selectAudio = () => {
    setAudio(true)
    setSoftware(false)
    setEducator(false)
    setVideo('audio')
    
  }
  const selectSoftware = () => {
    setSoftware(true)
    setAudio(false)
    setEducator(false)
    setVideo('software')
  }
  const selectEducator = () => {
    setEducator(true)
    setAudio(false)
    setSoftware(false)
    setVideo('educator')
  }

  return (
    <div className="about-page-container">
      <div className="bio-descriptions">
        <div className="btn-container">
          <button
            onClick={selectSoftware}
            className={software ? "bio-btn-active bio-btn" : "bio-btn"}
          >
            SOFTWARE
          </button>
          <button
            onClick={selectAudio}
            className={audio ? "bio-btn-active bio-btn" : "bio-btn"}
          >
            AUDIO
          </button>
          <button
            onClick={selectEducator}
            className={educator ? "bio-btn-active bio-btn" : "bio-btn"}
          >
            EDUCATOR
          </button>
        </div>
        <div className={software ? "show" : "hide"}>
          <p>
            At the end of 2021 I decided it was time to make a shift to a new
            career in software and web development. I attended General
            Assembly's Software Immersive Bootcamp and completed 420+ contact
            hours of instruction in a matter of 3 months. I learned the ground
            work of HTML, CSS, and Javascript as well as some popular frameworks
            like Angular and React, heavy emphasis on React.
          </p>
          <p>
            We also got into some back-end programming including python,
            relational and non-relational databases and frameworks. I completed
            a handful of projects in the class, learned a ton, and am continuing
            my own self-driven education into the world of software and web
            development on a daily basis.{" "}
          </p>
        </div>
        <div className={audio ? "show" : "hide"}>
          <p>
            I began my audio career back in the early 2000's recording my own
            music as well as other bands and musician friends. I started my own
            mobile recording business while attending Columbia College Chicago
            for Recording Arts which then led me to JBTV Studios with Jerry
            Bryant where I really cut my teeth in the industry.
          </p>
          <p>
            I spent eight years recording, mixing and mastering hundreds of live
            performances that also got me multiple{" "}
            <span className="emphasize">Emmy Nominations.</span> I also spent a
            good amount of time gigging around town doing live sound.
          </p>
          <p>
            This all then led me to a full-time faculty position at Flashpoint
            College in Chicago teaching recording arts. (check out the{" "}
            <span className="bio-secret-btn" onClick={selectEducator}>
              EDUCATOR
            </span>{" "}
            tab for more details). The school unfortunately did not make it
            through the covid-19 pandemic and closed down in May of 2022, which
            has led me to my software development path.
          </p>
        </div>
        <div className={educator ? "show" : "hide"}>
          <p>
            As mentioned in the AUDIO section, I had a ten-year run at
            Flashpoint College Chicago teaching everything from basic audio
            concepts, fundamentals of acoustics, studio recording, live sound
            production, and sound for film. I was also teaching portfolio and
            career development courses by the end of my time at the school as
            well.
          </p>
          <p>
            I was actually tasked to develop the live sound program within the
            Recording Arts department when I was brought on and continued to
            manage it all for nearly eight years.
          </p>
          <p>
            I loved teaching and thought I was in it for the long haul, but the
            universe makes interesting decisions for us sometimes. I would love
            to find myself in some sort of mentoring or teaching role again, but
            for now I have become a student myself as I diver each day into the
            rich world of software development.
          </p>
        </div>
        <div className="about-icons-container">
          <a href="https://github.com/timrusin" target="new">
            <div className="about-logos">
              <FaGithub size={25} />
            </div>
          </a>
          <a href="https://soundcloud.com/tjblender" target="new">
            <div className="about-logos">
              <FaSoundcloud size={25} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/timrusin/" target="new">
            <div className="about-logos">
              <FaLinkedin size={25} />
            </div>
          </a>
          <a href="https://www.facebook.com/rusinaudio" target="new">
            <div className="about-logos">
              <FaFacebook size={25} />
            </div>
          </a>
        </div>
      </div>
      <img
        className={audio ? "about-image show" : "hide"}
        src={AudioPhoto}
        alt="Tim Rusin audio"
      />
      <img
        className={educator ? "about-image show" : "hide"}
        src={EduImage}
        alt="Tim Rusin teaching"
      />
      <img
        className={software ? "about-image show" : "hide"}
        src={SoftwareImage}
        alt="Tim Rusin teaching"
      />
    </div>
  );
}

export default About