import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails.js'
import FilmList from './FilmList.js'
import TMDB from './TMDB.js'

class App extends Component {
  render() {
    return (
      <div className="film-library">
        < FilmList TMDB={TMDB} />
        < FilmDetails TMDB={TMDB} />        
      </div>
    )
  }
}

export default App;