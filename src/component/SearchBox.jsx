import { useState } from "react";
import MovieDetails from './MovieDetails';
function SearchBox() {
  const [ query, setQuery] = useState('');
  const [ movies, setMovies ] = useState(null);
  function handleChange(event) {
    setQuery(event.target.value)
  }
  const apiUrl = 'http://www.omdbapi.com/?i=tt3896198'
  async function fetchMoviesApi() {
    const response = await fetch(`${apiUrl}&apikey=b9c16531&s=${query}`);
    const data = await response.json();
    setMovies(data);
  }
  return (
    <>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search......"
          value={query}
          onChange={handleChange} />
        <button className="search-button" onClick={fetchMoviesApi}>
          Search
        </button>
      </div>
      <MovieDetails movie={movies}/>
    </>
  )
}

export default SearchBox;