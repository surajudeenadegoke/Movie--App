import React from "react";
import "../index.css";
import CardMovie from "./MovieCard/MovieCard";

const Movies = ({ results }) => {
  console.log(results);
  return (
    <div className="movies-container">
      <CardMovie movies={results} />
    </div>
  );
};

export default Movies;
