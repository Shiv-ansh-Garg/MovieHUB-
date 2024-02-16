//Componenets/MovieCard.js

import React, { Component } from 'react';
import { addToFavourites, removeFromFavourites, deleteMovie } from '../action';

class MovieCard extends Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addToFavourites(movie));
  };

  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  handleDelete = () => {
    const {movie} = this.props;
    console.log('thi.prop.moviess',this.props);
    this.props.dispatch(deleteMovie(movie));
  }

  render() {
    const { movie, isFavourite } = this.props;
    console.log('RaNDOM',this.props);
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-pic" />
        </div>
        <div className="right">
          <div className="title">
            {movie.Title} ({movie.Year})
          </div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            <div className='footer2'>
            {isFavourite ? (
              <button
              className="unfavourite-btn"
              onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
              className="favourite-btn"
              onClick={this.handleFavouriteClick}
              >
              <button className='delete-btn' onClick={this.handleDelete}>Delete</button>
                Favourite
              </button>
            )}
          </div>
            </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
