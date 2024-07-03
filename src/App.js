import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import videoSrc from './hero.mp4';
import SideDesign from './side-design.svg';
import Circle from './circle.svg';
import SideTriangle from './side-triangle.svg';

function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleVideoPlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container">
      <img src={SideDesign} className="side-design" alt="Side Design" />
      <img src={Circle} className="circle" alt="Circle Design" />
      <img src={SideTriangle} className="side-triangle" alt="Side Triangle" />
      <div className="content">
        <div className="left-column">
          <h1 className="heading">
            Empowering the <br /> people who <br /> power the world.
          </h1>
          <form className="search-form" method="POST">
            <input
              type="search"
              className="search-input"
              placeholder="Search Job Title"
              aria-label="Search Job Title"
              autoComplete="off"
              spellCheck="false"
              pattern="^[^ ].+[^ ]$"
              required
            />
            <button className="search-submit-btn">
              <svg width="28" height="28" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.1129" cy="11.1129" r="9.40323" stroke="#0384FB" strokeWidth="3.41935" />
                <path d="M25.4199 26.4999L17.7264 18.8064" stroke="#0384FB" strokeWidth="3.41935" strokeLinecap="round" />
              </svg>
            </button>
          </form>
        </div>
        <div className="right-column">
          <div className="video-container">
            <video ref={videoRef} playsInline muted preload="none" loop className="lazyLoad isLoaded">
              <source src={videoSrc} type="video/mp4" />
            </video>
            <button className="watch-video-button" onClick={handleVideoPlayPause}>
              Watch Video
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5" cy="12.5" r="12.5" fill="white" />
                <path d="M17 12.5L10.25 16.3971L10.25 8.60289L17 12.5Z" fill="#0384FB" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
