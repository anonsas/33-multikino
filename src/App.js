import { useEffect, useState } from 'react';
import './App.scss';

import MovieContext from './contexts/MovieContext';
import { create, read, destroy } from './utils/localStorage';
import { MovieForm, Movies } from './components/index';
import MovieModal from './components/Movies/MovieModal';

const key = 'movies';

function App() {
  const [movies, setMovies] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  // CREATE
  useEffect(() => {
    if (createData === null) return;
    create(key, createData);
    setLastUpdate(Date.now());
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (deleteData === null) return;
    console.log(deleteData);
    destroy(key, deleteData.id);
    setLastUpdate(Date.now());
  }, [deleteData]);

  // READ
  useEffect(() => {
    setMovies(read(key));
  }, []);

  return (
    <MovieContext.Provider value={{ setCreateData, movies, setDeleteData }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <MovieForm />
          </div>
          <div className="col-8">
            <Movies />
          </div>
        </div>
      </div>
      <MovieModal />
    </MovieContext.Provider>
  );
}

export default App;
