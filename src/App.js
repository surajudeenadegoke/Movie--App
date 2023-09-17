import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import SearchBar from "./Components/SearchBar";
const apiKey = "d380cfbd";
const searchQuery = "movies;";
const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState({ searchValue: "", results: [] });

  const fetchMovies = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data);
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  const handleChange = (event) => {
    let search = event.target.value;
    setState((prev) => {
      return {
        ...prev,
        searchValue: search,
      };
    });
    console.log(search)
  };
  const searchMovies = () => {
    console.log(state.searchValue);
  };

  return (
    <div className="container">
      <div className="header-content">
        <Header />
        <SearchBar searchMovies={searchMovies} handleChange={handleChange} />
      </div>
      <Movies />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
