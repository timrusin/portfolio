import React from 'react'
import './AlbumCredCard.css'

const AlbumCredCard = (props) => {
    console.log(props)
  return (
    <div className="album-container">
      <img className="album-art" src={props.image} alt={props.alt}></img>
    <a href={props.link} target="new">
      <div className="album-info">
        <h1>{props.artist}</h1>
        <h6>{props.release}</h6>
        <h2>{props.project}</h2>
        <h3>Credit: {props.credit}</h3>
      </div>
    </a>
    </div>
  );
}

export default AlbumCredCard