import React, { Component } from "react";
import { movies } from "./getMovies";
export default class Banner extends Component {
  render() {
    let idx = Math.floor(Math.random() * movies.results.length);
    let movie = movies.results[idx];

    return (
      <>
        {movie === "" ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="card banner-card">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="card-img-top banner-img"
              alt={movie.title}
            />
            <h1 className="card-title banner-title">{movie.original_title}</h1>
            <p className="card-text banner-text">{movie.overview}</p>
            
          </div>
        )}
      </>
    );
  }
}
