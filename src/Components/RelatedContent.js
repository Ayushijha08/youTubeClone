import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";
import './related.css'

const RelatedContent = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_KEY;

  useEffect(() => {
    if (!searchQuery) return;

    axios
      .get(
        `${baseUrl}/search?key=${apiKey}&part=snippet&type=video&q=${searchQuery}&maxResults=15`
      )
      .then((res) => {
        setVideos(res.data.items);
        console.log(res.data.items.length,"lenghth");
        
      })
      
  }, [searchQuery]);

  return (
    <div className="related-container">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default RelatedContent;
