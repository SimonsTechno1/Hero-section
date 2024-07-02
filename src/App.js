import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import videoSrc from './hero.mp4';
import SideDesign from './side-design.svg';
import Circle from './circle.svg';

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
      
      <div className="left-column">
        <span>
          <h1 className="text-blue-dark md:block lg:hidden text-left">
            Empowering the people <br /> who power the world.
          </h1>
        </span>
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
              <line x1="13.85" y1="13.85" x2="19" y2="19" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </form>
      </div>
      <div className="right-column">
        <div className="video-container">
          <video ref={videoRef} playsInline muted preload="none" loop className="lazyLoad isLoaded">
            <source src={videoSrc} type="video/mp4" />
          </video>
          <button 
            className="video--controls-button" 
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={handleVideoPlayPause}
          >
            {isPlaying ? (
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="16" fill="white"></rect>
                <rect x="8" width="4" height="16" fill="white"></rect>
              </svg>
            ) : (
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8L0 0V16L14 8Z" fill="white"></path>
              </svg>
            )}
          </button>
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
  );
}

export default App;
