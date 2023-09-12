import React from "react";
import SearchIcon from "../Images/Icon.png";
import "../index.css";


const SearchBar = ({ searchItem, setSearchItem, setMovies }) => {
  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      <img
        src={SearchIcon}
        alt="movie1.Title"
        onClick={() => {
          setMovies(searchItem);
        }}
      />
    </div>
  );
};

export default SearchBar;
