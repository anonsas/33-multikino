import React from 'react';
import { useContext } from 'react';
import DataContext from './DataContext';
import Line from './Line';

function List() {
  const { movies } = useContext(DataContext);

  return (
    <div className="card m-4">
      <h5 className="card-header">Movie List</h5>
      <div className="card-body">
        <ul className="list-group">
          {movies?.map((movie) => (
            <Line key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
