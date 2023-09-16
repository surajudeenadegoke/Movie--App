import React from "react";
import "../MovieCard/movieCard.css";
const CardMovie = () => {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img
          className="card-img"
          src="https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
          alt=""
        />
      </div>

      <div className="card-details-container">
        <div className="card-title-container">
          <span className="title">My Mother</span>
        </div>
        <div className="genre-container">
          <span className="genre">Genre: Draw, Crime</span>
        </div>
        <div className="rating-container">
          <span>Rating:4.0 </span>
          <span>124 mins</span>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
