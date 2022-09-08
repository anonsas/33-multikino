import React, { useContext } from 'react';
import MovieContext from '../contexts/MovieContext';

function Popup() {
  const { messages, setMessages } = useContext(MovieContext);

  if (!messages.length) return;

  const closeMessageHandler = (id) => {
    setMessages((prevState) => prevState.filter((msg) => msg.id !== id));
  };

  return (
    <div className="msg-bin" style={{ position: 'fixed', top: '2rem', right: '2rem' }}>
      {messages.map((message, i) => (
        <div
          key={i}
          className="toast show"
          role="alert"
          style={{ display: 'block', margin: '1rem' }}
        >
          <div className="toast-header">
            <strong className="me-auto">Movies</strong>
            <button
              type="button"
              className="btn-close"
              onClick={() => closeMessageHandler(message.id)}
            ></button>
          </div>
          <div className="toast-body">{message.text}</div>
        </div>
      ))}
    </div>
  );
}

export default Popup;
