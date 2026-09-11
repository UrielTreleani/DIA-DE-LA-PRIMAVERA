import React, { useRef, useState } from 'react'

function VideoControls({src, poster}) {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = ()=>{
        videoRef.current.play();
        setIsPlaying(true);
    }

    const handleEnded = ()=>{
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
    }


  return (
    <div className='video-wrapper'>
        <video ref={videoRef} src={src} poster={poster} onEnded={handleEnded} playsInline className={!isPlaying ?'video' : "hero__video"}></video>
        <img src="/POSTER-HERO.png" alt="algo que decirte" className={!isPlaying ?'hero__video poster' : "playing"}/>
        {
            !isPlaying && (
                <div>
                    <button onClick={handlePlay} className='play-button'>
                        Reproducir<i className="bi bi-play play-icon"></i>
                    </button>
                </div>
            )
        }
    </div>
  )
}

export default VideoControls