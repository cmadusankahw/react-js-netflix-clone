import React from 'react';
import './App.css';
import Row from './comps/row/Row';
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1> Netflix Clone </h1>
      < Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      < Row title="NTrending Now" fetchUrl={requests.fetchTrending}/>
      < Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      < Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      < Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      < Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      < Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      < Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
