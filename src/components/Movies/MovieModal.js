import React, { useState, useContext, useEffect } from 'react';
import MovieContext from '../../contexts/MovieContext';
import genres from '../../data/genres';

function MovieModal() {
  const { modalData, setModalData, setEditData } = useContext(MovieContext);

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState(1);
  const [year, setYear] = useState('');

  const modalSubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !year) return alert('Please fill in the blanks');

    setEditData({ title: title, genre: parseInt(genre), year: year, id: modalData.id });
    setModalData(null);
  };

  useEffect(() => {
    if (!modalData) return;

    setTitle(modalData.title);
    setGenre(modalData.genre);
    setYear(modalData.year);
  }, [modalData]);

  if (!modalData) return;

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Movie</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setModalData(null)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="card m-4">
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
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setModalData(null)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={modalSubmitHandler}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
