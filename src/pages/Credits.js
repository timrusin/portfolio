import React from 'react'
import AlbumCredCard from '../components/AlbumCredCard'
import './Credits.css'
import AlbumCredits from '../data/AlbumCreditsData'


const Credits = () => {
  return (
    <div className="credits-page-container">
        <AlbumCredCard credits = {AlbumCredits}/>
    </div>
  )
}

export default Credits