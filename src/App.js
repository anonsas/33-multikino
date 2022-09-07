import { useEffect, useState } from 'react';
import './App.scss';
import Create from './components/Create';
import DataContext from './components/DataContext';
import { create, read } from './utils/localStorage';
import List from './components/List';

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
    <DataContext.Provider value={{ setCreateData, movies }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
