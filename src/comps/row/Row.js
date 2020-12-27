import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";

// base URL for row row_posters
const baseurl = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const fetchUrl = props.fetchUrl;
  const title = props.title;

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

  //testing
  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            // why a key: if changes react will only update it : this is for optimization
            key={movie.id}
            className="row_poster"
            src={`${baseurl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
