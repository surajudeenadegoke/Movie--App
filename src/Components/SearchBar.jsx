import React, { useState } from "react";
import SearchIcon from "../Images/Icon.png";
import "../index.css";

const SearchBar = ({ setMovies }) => {
  const [searchField, setSearchField] = useState("");
  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={searchField}
        onChange={onSearchChange}
      />
      <img
        src={SearchIcon}
        alt="movie1.Title"
        onClick={() => {
          setMovies(searchField);
        }}
      />
    </div>
  );
};

export default SearchBar;
