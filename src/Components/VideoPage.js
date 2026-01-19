import React, { useEffect, useState } from "react";
import "./VideoPage.css";
import likeViewShare from "../images/likeViewShare.svg";
import subscribe_logo from "../images/subscribe_logo.svg";
import menu from "../images/menu.png";
import Youtube from "react-youtube";
import RelatedContent from "./RelatedContent";

const VideoPage = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const videoId = params.get("videoId");

  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_KEY = process.env.REACT_APP_BASE_KEY;

  // 🔹 STATES
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  // 🔹 FETCH VIDEO DETAILS
  useEffect(() => {
    if (!videoId) return;

    fetch(
      `${BASE_KEY}/videos?key=${API_KEY}&part=snippet,statistics&id=${videoId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideoDetails(data.items[0]);
      });
  }, [videoId]);
  console.log(videoDetails, "dataaa");

  // 🔹 FETCH CHANNEL DETAILS (after video loads)
  useEffect(() => {
    if (!videoDetails) return;

    fetch(
      `${BASE_KEY}/channels?key=${API_KEY}&part=snippet,statistics&id=${videoDetails.snippet.channelId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setChannelDetails(data.items[0]);
      });
  }, [videoDetails]);

  // 🔹 FETCH COMMENTS
  useEffect(() => {
    if (!videoId) return;

    fetch(
      `${BASE_KEY}/commentThreads?key=${API_KEY}&part=snippet&videoId=${videoId}&maxResults=25`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data.items || []);
      });
  }, [videoId]);

  return (
    <div className="percent">
      <section className="left">
        <Youtube
          videoId={videoId}
          opts={{ width: "900", height: "520" }}
          style={{
            borderRadius: "15%",
            marginRight: "500px",
          }}
        />

        <div className="video_name">
          <h3>{videoDetails?.snippet?.title}</h3>
          {/* <img src={likeViewShare} alt="" /> */}
        </div>

        {/* CHANNEL INFO */}

       <span className="channelInfo">
  <img
    src={channelDetails?.snippet?.thumbnails?.default?.url}
    className="channel-icon"
    alt=""
  />

  <div className="channel-text">
    <h5 className="channelName">
      {channelDetails?.snippet?.title}
    </h5>

    <p className="subscribers">
      {channelDetails?.statistics?.subscriberCount} subscribers
    </p>
  </div>
</span>

        {/* <img src={subscribe_logo} className="subscribe" alt="" /> */}

        {/* <div id="description">
          <p>{videoDetails?.snippet?.description}</p>
        </div>  */}

        {/* <hr className="border-line" /> */}

        {/* COMMENTS */}
        <div className="comments-container">
          <div className="comments">
            <span>{comments.length} Comments</span>
          </div>
          <div className="comments-list">
            {comments.map((item, index) => (
              <div className="other_comments" key={index}>
                <img
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  className="profile-img"
                  alt=""
                />
                <span className="break">
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                </span>
                <p className="user_comment">
                  {item.snippet.topLevelComment.snippet.textDisplay}
                </p>
              </div>
            ))}{" "}
          </div>
        </div>
      </section>
      <section className="right">
        <RelatedContent searchQuery={videoDetails?.snippet?.title} />
      </section>
    </div>
  );
};

export default VideoPage;
