import React from 'react';
import { useState, useEffect } from 'react'
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import {movies as movieData} from './utils/movies';


function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [maxLength, setMaxLength] = useState('');
  const [direction, setDirection] = useState('asc');
  
  useEffect(() => {
  
    setMovies(movieData.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
         ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length )
     }));
  }, [search, maxLength]);

  return (
    <>
    
      {/* Header Bar for Searching */}
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        maxLength={maxLength} 
        setMaxLength={setMaxLength}
        movies={movies}
        setMovies ={setMovies}
        direction = {direction}
        setDirection = {setDirection}
      />
      {/* Output the Movies */}
      <Movies movies={movies} />
    </>
  )
}

export default App