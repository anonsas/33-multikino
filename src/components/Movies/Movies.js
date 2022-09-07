import React from 'react';
import './Movies.scss';
import { useContext } from 'react';
import MovieContext from '../../contexts/MovieContext';
import Movie from './Movie';

function Movies() {
  const { movies } = useContext(MovieContext);

  return (
    <div className="card m-4">
      <h5 className="card-header">Movie List</h5>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="movie">
              <div className="movie__content movie__details">
                <p>Title</p>
                <p>Genre</p>
                <p>Year</p>
              </div>
              <div className="movie__actions" style={{ visibility: 'hidden' }}>
                <button type="button" className="btn btn-outline-success">
                  Edit
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Delete
                </button>
              </div>
            </div>
          </li>
          {movies?.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movies;
