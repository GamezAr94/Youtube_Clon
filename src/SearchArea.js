import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

const SearchArea = () => {
  const [keyword, setKeyword] = useState("budgies");
  const [videos, setVideos] = useState([]);
  const requestSearch = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?type=video&q=${keyword}&part=snippet&maxResults=25&key=${process.env.API_KEY}`
      )
      .then((res) => {
        const { items } = res.data;
        setVideos(items);
        console.log(items);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="search-area">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestSearch();
        }}
      >
        <label htmlFor="keyword">
          Search
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results videos={videos} />
    </div>
  );
};

export default SearchArea;
