import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

// base URL for row row_posters
const baseurl = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const fetchUrl = props.fetchUrl;
  const title = props.title;
  const isLargeRow = props.isLargeRow;

  // using React hooks to fetch Data (Run something when component mounts)
  useEffect(() => {
    // if [], run once when the row loads, and not running again
    // if [var] - when a variable is given, everytime that variable changes this will run again n again

    async function fetchData() {
      // ex: http://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en_US
      const request = await axios.get(fetchUrl);
      // setting values to the movies array
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // need to mention dependent varaiables as fuction need to update when they changes

  // Youtube video options
  const opts = {
    optsheight: "390",
    width: "100%",
    playerVars: {
      //'https://developer.google.com/youtube/player_parameters'
      autoplay: 1,
    },
  };

  // function to handle poster onClick
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // hide if a video is already playing
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); // get the ?v=..... part of the url
          setTrailerUrl(urlParams.get("v")); // get the value for a specific url param
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            // why a key: if changes react will only update it : this is for optimization
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} // setting consitional className
            src={`${baseurl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
