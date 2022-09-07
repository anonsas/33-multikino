import React from 'react';

function Line({ movie: { title, genre, year } }) {
  return <li className="list-group-item">An item</li>;
}

export default Line;
