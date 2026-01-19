import React, { useEffect } from "react";
import "./VideoContainer.css";
import VideoCard from "./VideoCard";
import axios from "axios";

const VideoContainer = ({ videos,setIsVideoActive }) => {
  console.log(videos, "inside videocontainer");
  // const apiKey = process.env.REACT_APP_API_KEY;
  // const baseUrl = process.env.REACT_APP_BASE_KEY;
  useEffect(() => {
    console.log("inside useeffect");
    
  }, [videos]);
  return (
    <div className="video-container">
    {/* <div style={{color:'white'}}>hello im rc</div> */}
      {videos.length > 0 &&
        videos.map((video, index) => <VideoCard setIsVideoActive={setIsVideoActive} key={index} video={video} />)}
    </div>
  );
};

export default VideoContainer;
