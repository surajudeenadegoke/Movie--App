import React from "react";
import SearchIcon from "../Images/Icon.png";
import "../index.css";

const SearchBar = ({ handleChange, searchMovies }) => {
  // const [searchField, setSearchField] = useState("");
  // const onSearchChange = (event) => {
  //   const searchString = event.target.value.toLocaleLowerCase();
  //   setSearchField(searchString);
  // };

  return (
    <div className="search">
      <input placeholder="Search for movies" onChange={handleChange} />
      <img src={SearchIcon} alt="movie1.Title" onClick={searchMovies} />
    </div>
  );
};

export default SearchBar;
