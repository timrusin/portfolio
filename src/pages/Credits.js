import React from 'react'
import AlbumCredCard from '../components/AlbumCredCard'
import './Credits.css'
import AlbumCredits from '../data/AlbumCreditsData'
import JBTVCredits from '../data/JbtvCreditsData'



const Credits = () => {

  const [selection, setSelection] = React.useState("Recoring, Mixing, and Mastering")
  const selected = []

  AlbumCredits.map(item => {
    return item.credit === selection && selected.push(item) 
  })


  return (
    <>
      <div className="album-credits">Album Credits</div>
      <div id="proj-btn-container">
      <button className={selection === 'Recording, Mixing, and Mastering' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('Recording, Mixing, and Mastering')}>Recording/Mixing/Mastering</button>
        <button className={selection === 'Mixing and Mastering' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('Mixing and Mastering')}>Mixing/Mastering</button>
        <button className={selection === 'Mixing' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('Mixing')}>Mixing</button>
        <button className={selection === 'Mastering' ? "proj-btns proj-btns-active" : "proj-btns"} onClick={()=> setSelection('Mastering')}>Mastering</button>
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