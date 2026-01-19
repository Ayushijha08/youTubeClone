import { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";

// import Filters from "./Components/Filters";
import {Route, Routes, useLocation} from "react-router-dom"
import VideoPage from "./Components/VideoPage";
import Home from "./Components/Home";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  
  const location = useLocation()
  console.log("videos", videos);
console.log(location.pathname,"location");

  return (
    <div className="App">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setVideos={setVideos}
      />
     
      <Routes>
        <Route path="/" element={<Home setVideos={setVideos} setSearchQuery={setSearchQuery} videos={videos}/>}/>
        <Route path="/video-page" element={<VideoPage setVideos={setVideos} videos={videos}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
