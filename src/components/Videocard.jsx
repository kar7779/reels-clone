import React, { useState, useRef } from "react";
import Videoheader from "./Videoheader";
import Videofooter from "./Videofooter";

function Videocard({ chanel, avatarSrc, url, shares, likes, song }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoref = useRef(null);
  const OnvideoPress = () => {
    if (isVideoPlaying) {
      videoref.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoref.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="videocard">
      <Videoheader />
      <video ref={videoref} onClick={OnvideoPress} src={url} />
      <Videofooter
        chanel={chanel}
        avatarSrc={avatarSrc}
        likes={likes}
        shares={shares}
        song={song}
      />
    </div>
  );
}

export default Videocard;
