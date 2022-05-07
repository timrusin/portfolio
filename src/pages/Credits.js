import React from 'react'
import AlbumCredCard from '../components/AlbumCredCard'
import './Credits.css'
import AlbumCredits from '../data/AlbumCreditsData'


const Credits = () => {
  return (
    <>
      <div className="album-credits">Album Credits</div>
      <div className="credits-page-container">
        {AlbumCredits.map((item) => {
          return <AlbumCredCard key={item.id} {...item} />;
        })}
      </div>
      <div className="album-credits">JBTV Credits</div>
      <div className="album-credits jbtv">
        I worked with all of the following artists at JBTV on a personal level as a
        recording, mixing, and mastering engineer for their live to tape TV
        performances.
      </div>
    </>
  );
}

export default Credits