import React from "react";
import "../MovieCard/movieCard.css";
const CardMovie = ({ movie }) => {
  console.log(movie)
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img className="card-img" src={movie.Poster } alt="" />
      </div>

      <div className="card-details-container">
        <div className="card-title-container">
          <span className="title">{movie.Title}</span>
        </div>
        <div className="genre-container">
          <span className="genre">Genre: {movie.Type}</span>
        </div>
        <div className="rating-container">
          <span>Year: {movie.Year} </span>
          <span>ID: {movie.imdbID}
</span>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
