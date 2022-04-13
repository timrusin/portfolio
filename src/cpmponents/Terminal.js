import React from 'react'
import './Terminal.css'

const Terminal = () => {
  return (
    <div>
      <div className="outer-box">
        <div className="top-bar">
          <div className="dots-container">
            <div className="red">
              <div className="black"></div>
            </div>
            <div className="yellow"></div>
            <div className="green"></div>
           
              <div className="folder-back">
                <div className="folder-middle">
                  <div className="folder-front"></div>
                </div>
              </div>
              <div className='header-text'>
                  <p>portfolio -- node npm start__CFBundleidentifier=com.apple.Terminal</p>
              </div>
           
          </div>
        </div>
        <a> testing</a>
      </div>
    </div>
  );
}

export default Terminal