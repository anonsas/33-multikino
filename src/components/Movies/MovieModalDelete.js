import React, { useContext } from 'react';
import MovieContext from '../../contexts/MovieContext';

function MovieModalDelete() {
  const { modalDataDelete, setModalDataDelete, setDeleteData } = useContext(MovieContext);

  const submitMovieDelete = () => {
    setDeleteData(modalDataDelete);
    setModalDataDelete(null);
  };

  if (!modalDataDelete) return;

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure?</h5>
            <button
              onClick={() => setModalDataDelete(null)}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setModalDataDelete(null)}
              type="button"
              className="btn btn-secondary"
            >
              Close
            </button>
            <button onClick={submitMovieDelete} type="button" className="btn btn-primary">
              Yes, do it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModalDelete;
