import axios from "axios";
import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import { useNavigate } from "react-router-dom";

function VideoCard({ video,setIsVideoActive }) {
  // const [channelLogo, setChannelLogo] = useState("");
  const [channelDetails, setChannelDetails] = useState({});
  const [videoDetails, setViedoDetails] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_KEY;
   const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(
        `${baseUrl}/channels?key=${apiKey}&part=snippet&part=statistics&part=contentDetails&id=${video?.snippet?.channelId}`
      )
      .then((res) =>
        // setChannelLogo(res.data.items[0].snippet.thumbnails.high.url)
        setChannelDetails(res.data.items[0])
      )
      .catch((err) => console.log(err));
    getVideoDetails();
  }, [video]);

  console.log(video, "video");
  // console.log(channelLogo, "channelLogo");
  function getVideoDetails() {
    axios
      .get(
        `${baseUrl}/videos?key=${apiKey}&part=contentDetails&id=${video.id.videoId}`
      )
      .then(
        (res) => setViedoDetails(res.data.items[0])

        // setChannelLogo(res.data.items[0].snippet.thumbnails.high.url)
      )
      .catch((err) => console.log(err));
  }
  function formatDuration(duration) {
    console.log(duration, "duration");
    let newDuration = duration.slice(2);
    let d = "";
    if (newDuration.indexOf("H") !== -1) {
      d = d + newDuration.substring(0, newDuration.indexOf("H")) + ":";
      console.log("dur", d);
    }

    if (newDuration.indexOf("M") !== -1) {
      d =
        d +
        newDuration.substring(
          newDuration.indexOf("H") + 1,
          newDuration.indexOf("M")
        ) +
        ":";
    }
    if (newDuration.indexOf("S") !== -1) {
      if (newDuration.indexOf("M") === -1) {
        d =
          d +
          "00:" +
          newDuration.substring(
            newDuration.indexOf("M") + 1,
            newDuration.length - 1
          );
      }
    }
    return d;
  }
  function formatViews(views) {
    let newView = "";
    if (views.length >= 7) {
      newView = Math.floor(views / 1000000) + "m " + " views";
    }
    if (views.length >= 3 && views.length <= 7) {
      newView = Math.floor(views / 1000) + "k " + " views";
    }
    if (views.length < 3 ) {
      newView = Math.floor(views / 1000000) +  " Views";
    }
    return newView;
  }
  console.log(videoDetails, "videodetails");

  return (
    <div className="video_card" onClick={()=> {
     
      setIsVideoActive(true)
      navigate(`/video-page?videoId=${video?.id?.videoId}`)}}>

      <div className="thumbnail">
        <img src={video?.snippet?.thumbnails?.high?.url} />
      </div>
      <div className="channel-row">
        <div className="channel-icon">
          <img
            src={
              channelDetails && channelDetails?.snippet?.thumbnails?.high.url
            }
          />
        </div>
        <div className="video-text">
          <h3 className="title">{video?.snippet?.title}</h3>
          <p className="channelTitle">{video?.snippet?.channelTitle}</p>
          <div className="views" style={{ color: "white" }}>
            {Object.keys(channelDetails).length !== 0 &&
              formatViews(channelDetails?.statistics?.viewCount)}
          </div>
          {/* <div style={{ color: "white" }} className="duration">
            { videoDetails && Object.keys(videoDetails).length !== 0 &&
              formatDuration(videoDetails?.contentDetails?.duration)}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
