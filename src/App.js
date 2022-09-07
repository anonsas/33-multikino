import { useEffect, useState } from 'react';
import './App.scss';
import Create from './components/Movies/MovieForm';
import MovieContext from './contexts/MovieContext';
import { create, read } from './utils/localStorage';
import { Movies } from './components/index';

const key = 'movies';

function App() {
  const [movies, setMovies] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  // CREATE
  useEffect(() => {
    if (createData === null) return;
    create(key, createData);
    setLastUpdate(Date.now());
  }, [createData]);

  // READ
  useEffect(() => {
    setMovies(read(key));
  }, []);

  return (
    <MovieContext.Provider value={{ setCreateData, movies }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <Movies />
          </div>
        </div>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
