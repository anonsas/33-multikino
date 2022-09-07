import React from 'react';
import genres from '../../data/genres';

function Movie({ movie: { title, genre, year } }) {
  console.log(title, genre, year);

  const editMovieHandler = () => {};
  const deleteMovieHandler = () => {};

  return (
    <li className="list-group-item">
      <div className="movie">
        <div className="movie__content">
          <p className="movie__content--title">{title}</p>
          <p className="movie__content--genre">
            {genres?.find((gen) => gen.id === genre).type}
          </p>
          <p className="movie__content--year">{year}</p>
        </div>
        <div className="movie__actions">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={editMovieHandler}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={deleteMovieHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Movie;
