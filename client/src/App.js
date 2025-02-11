import React, { useState } from 'react';
import {Route} from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie"

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [movieData] = useState();

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render = {props =>(<MovieList {...props} movie={movieData}/> )}/>
      <Route path="/movies/:id" render = {props =>(<Movie {...props} movie={movieData} addToSavedList={addToSavedList}/> )}/>
    </div>
  );
};

export default App;
