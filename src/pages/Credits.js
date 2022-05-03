import React from 'react'
import AlbumCredCard from '../components/AlbumCredCard'
import './Credits.css'
import AlbumCredits from '../data/AlbumCreditsData'


const Credits = () => {
  return (
    <>
      <div className="credits-page-container">
        {AlbumCredits.map(item => {
          return <AlbumCredCard key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}

export default Credits