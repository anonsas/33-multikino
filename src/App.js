import { useEffect, useState } from 'react';
import './App.scss';
import Create from './components/Create';
import DataContext from './components/DataContext';
import { create } from './utils/localStorage';
import List from './components/List';

const key = 'movies';

function App() {
  const [movies, setMovies] = useState(null);
  const [createData, setCreateData] = useState(null);

  // CREATE
  useEffect(() => {
    if (createData === null) return;
    create(key, createData);
  }, [createData]);

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
