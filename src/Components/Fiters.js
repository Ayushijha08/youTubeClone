import React from "react";
import "./filters.css";
import axios from "axios";

const Filters = ({
  setSearchQuery,
  setVideos,
  text,
  activeFilter,
  setActiveFilter,
}) => {
  function handleFilters() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_KEY;

  
    // setSearchQuery(text);
    setActiveFilter(text);

    axios
      .get(
        `${baseUrl}/search?q=${text}&key=${apiKey}&type=video&part=snippet&maxResults=20`
      )
      .then((res) => setVideos(res.data.items))
      .catch((err) => console.log(err));
  }

  return (
    <button       className={`filter-options ${activeFilter === text ? "active" : ""}`}
 onClick={handleFilters}>
      {text}
    </button>
  );
};

export default Filters;
