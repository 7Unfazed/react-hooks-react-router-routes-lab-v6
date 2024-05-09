
import React from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams();


  const movie = {
    id: 1,
    title: 'Movie Title',
    time: '2h 30min',
    genres: ['Action', 'Adventure', 'Sci-Fi']
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <p>Genres: {movie.genres.join(', ')}</p>
    </div>
  );
}

export default Movie;
