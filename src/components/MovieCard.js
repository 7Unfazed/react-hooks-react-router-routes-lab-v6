
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, id }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Link to={`/movie/${id}`}>Details</Link>
    </div>
  );
}

export default MovieCard;
