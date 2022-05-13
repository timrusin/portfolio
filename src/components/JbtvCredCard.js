import React from 'react'
import './JbtvCredCard.css'
import JBTVCredits from '../data/JbtvCreditsData'

const JbtvCredCard = () => {
  return (
    <div className='jbtv-container'>
        {JBTVCredits.map((item) => {
            return <h1>{item.Artist}</h1> 
        })}
    </div>
  )
}

export default JbtvCredCard