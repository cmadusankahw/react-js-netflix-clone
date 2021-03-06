import React from "react";
import "./App.css";

import Row from "./comps/row/Row";
import Banner from "./comps/banner/Banner";
import Nav from "./comps/nav/Nav";
import Footer from "./comps/footer/Footer";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />

      <Banner fetchUrl={requests.fetchNetflixOriginals} />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
