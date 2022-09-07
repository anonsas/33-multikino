import React, { useContext, useState } from 'react';
import genres from '../../data/genres';
import MovieContext from '../../contexts/MovieContext';

function Create() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState(1);
  const [year, setYear] = useState('');

  const { setCreateData } = useContext(MovieContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !year) return alert('Please fill in the blanks');

    setCreateData({ title: title, genre: parseInt(genre), year: year });

    setTitle('');
    setGenre(1);
    setYear('');
  };

  return (
    <div className="card m-4">
      <h5 className="card-header">New Movie</h5>
      <div className="card-body">
        {/* MOVIE TITLE */}
        <div className="mb-3">
          <label className="form-label">Movie Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* MOVIE GENRE */}
        <div className="mb-3">
          <label className="form-label">Genre:</label>
          <select
            className="form-select"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {genres?.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.type}
              </option>
            ))}
          </select>
        </div>

        {/* MOVIE YEAR */}
        <div className="mb-3">
          <label className="form-label">Year:</label>
          <input
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>

        <button
          type="button"
          className="btn btn-outline-success"
          onClick={formSubmitHandler}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Create;
