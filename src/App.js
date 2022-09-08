import { useEffect, useState } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

import MovieContext from './contexts/MovieContext';
import { read, create, update, destroy } from './utils/localStorage';
import { MovieForm, Movies, MovieModal, MovieModalDelete } from './components/index';
import Popup from './helpers/Popup';

const key = 'movies';

function App() {
  const [movies, setMovies] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const [modalData, setModalData] = useState(null);
  const [modalDataDelete, setModalDataDelete] = useState(null);
  const [editData, setEditData] = useState(null);
  const [messages, setMessages] = useState([]);

  // CREATE
  useEffect(() => {
    if (!createData) return;
    create(key, createData);
    setLastUpdate(Date.now());
    makeMsg(`${createData.title} - is added to the list!`);
  }, [createData]);

  // READ
  useEffect(() => {
    setMovies(read(key));
  }, [lastUpdate]);

  // UPDATE
  useEffect(() => {
    if (!editData) return;
    update(key, editData, editData.id);
    setLastUpdate(Date.now());
    makeMsg(`${editData?.title} - is updated!`);
  }, [editData]);

  // DELETE
  useEffect(() => {
    if (!deleteData) return;
    destroy(key, deleteData.id);
    setLastUpdate(Date.now());
    makeMsg(`${deleteData.title} - is removed from the list!`);
  }, [deleteData]);

  const makeMsg = (textMsg) => {
    const msg = {
      id: uuidv4(),
      text: textMsg,
    };
    setMessages((prevState) => [...prevState, msg]);

    setTimeout(() => {
      setMessages((prevState) => prevState.filter((mes) => mes.id !== msg.id));
    }, 2000);
  };

  return (
    <MovieContext.Provider
      value={{
        setCreateData,
        movies,
        setDeleteData,
        modalData,
        setModalData,
        setEditData,
        messages,
        setMessages,
        modalDataDelete,
        setModalDataDelete,
      }}
    >
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
      <Popup />
      <MovieModalDelete />
    </MovieContext.Provider>
  );
}

export default App;
