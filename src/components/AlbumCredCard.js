import React from 'react'
import './AlbumCredCard.css'

const AlbumCredCard = (props) => {
  
  return (
    <div className="album-container">
      <img className="album-art" src={props.image} alt={props.alt}></img>
    <a href={props.link} target="new">
      <div className="album-info">
        <div className='album-artist'>{props.artist}</div>
        <div className='album-project'>{props.project}</div>
        <div className='album-release'>{props.release}</div>
        <div className='album-credit'>{props.credit}</div>
      </div>
    </a>
    </div>
  );
}

export default AlbumCredCard