import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Banner.css";

// base URL for row row_posters
const baseurl = "https://image.tmdb.org/t/p/original/";

function Banner(props) {
  const [movie, setMovie] = useState([]);

  const fetchUrl = props.fetchUrl;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      // setting a random movie for the banner
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // function to truncate descriptions
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseurl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* this is as API may have different infor for different movies */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <p className="banner_description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
