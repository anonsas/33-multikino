import React from 'react';
import genres from '../data/genres';

function Line({ movie: { title, genre, year } }) {
  console.log(title);
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
          <button type="button" className="movie__actions--edit">
            Edit
          </button>
          <button type="button" className="movie__actions--delete">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Line;
