import React from 'react'
import AlbumCredCard from '../components/AlbumCredCard'
import './Credits.css'
import AlbumCredits from '../data/AlbumCreditsData'
import JBTVCredits from '../data/JbtvCreditsData'



const Credits = () => {

  const [selection, setSelection] = React.useState("Recording")
  const selected = []

  AlbumCredits.map(item => {
    return item.credit.includes(selection) && selected.push(item) 
  })


  return (
    <>
      <div className="album-credits">Album Credits</div>
      <div id="proj-btn-container">
        <button className={selection === 'Recording' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('Recording')}>Recording</button>
        <button className={selection === 'Mixing' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('Mixing')}>Mixing</button>
        <button className={selection === 'Mastering' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('Mastering')}>Mastering</button>
        <button className={selection === 'Live' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('Live')}>Live</button>
        <button className={selection === 'Sound Design' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('Sound')}>Sound Design</button>
      </div>
      <div className="credits-page-container">
        {selected.map((item) => {
          return <AlbumCredCard key={item.id} {...item} />;
        })}
      </div>
      <div className="album-credits">JBTV Credits</div>
      <div className="credits-page-container">
        {JBTVCredits.map((item) => {
          return <AlbumCredCard key={item.id}{...item} />
        })}
      </div>
    </>
  );
}

export default Credits