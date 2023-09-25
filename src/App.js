import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import CardMovie from "./Components/MovieCard/MovieCard";
import "./index.css";

import SearchBar from "./Components/SearchBar";
const apiKey = "d380cfbd";

const App = () => {
  const [state, setState] = useState({ searchValue: "", results: [] });
  const searchQuery = state.searchValue;
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;
  const fetchMovies = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState((prev) => {
        return { ...prev, results: data.Search };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovies = () => {
    fetchMovies();
  };
  const handleChange = (event) => {
    let search = event.target.value;
    setState((prev) => {
      return {
        ...prev,
        searchValue: search,
      };
    });
  };

  return (
    <div className="container">
      <div className="header-content">
        <Header />
        <SearchBar searchMovies={searchMovies} handleChange={handleChange} />
      </div>

      <div className="movies-container">
        {state.results.map((result) => (
          <CardMovie movie={result} />
        ))}
      </div>
    </div>
  );
};

export default App;
