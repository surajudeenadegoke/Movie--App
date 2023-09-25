import React from "react";
import SearchIcon from "../Images/Icon.png";
import "../index.css";

const SearchBar = ({ handleChange, searchMovies }) => {
  return (
    <div className="search">
      <input placeholder="Search for movies" onChange={handleChange} />
      <img src={SearchIcon} alt="movie1.Title" onClick={searchMovies} />
    </div>
  );
};

export default SearchBar;
