import React from 'react';
import genres from '../../data/genres';
import { useContext } from 'react';
import MovieContext from '../../contexts/MovieContext';

function Movie({ movie }) {
  console.log(movie);
  const { setDeleteData } = useContext(MovieContext);

  const editMovieHandler = () => {};

  return (
    <li className="list-group-item">
      <div className="movie">
        <div className="movie__content">
          <p className="movie__content--title">{movie.title}</p>
          <p className="movie__content--genre">
            {genres?.find((gen) => gen.id === movie.genre).type}
          </p>
          <p className="movie__content--year">{movie.year}</p>
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
            onClick={() => setDeleteData(movie)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Movie;
