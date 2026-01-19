import React, { useState } from "react";
// import Filters from "./Components/Fiters";
// import Sidebar from "./Components/SideBar";
// import VideoContainer from "./Components/VideoContainer";
// import { btnArr } from "./Components/filterArray/filtersArray";
import Filters from "./Fiters";
import Sidebar from './SideBar';
import VideoContainer from './VideoContainer';
import {btnArr} from './filterArray/filtersArray'
import RelatedContent from "./RelatedContent";

const Home = ({setVideos,setSearchQuery,videos}) => {
    const [activeFilter, setActiveFilter] = useState("All");
 const [IsVideoActive , setIsVideoActive]= useState(false)
  return (
    <div>
      {" "}
      <Sidebar />
      {/* Main content wrapper */}
      <div className="filters">
        {btnArr?.map((btnObj, index) => (
          <Filters
            key={index}
            text={btnObj.text}
            // searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setVideos={setVideos}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        ))}
      </div>
      <VideoContainer videos={videos} setIsVideoActive={setIsVideoActive} />
      {/* <RelatedContent videos={videos} setIsVideoActive={setIsVideoActive}/> */}
    </div>
  );
};

export default Home;
