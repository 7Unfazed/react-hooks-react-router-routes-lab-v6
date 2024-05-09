
import React from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    
  ];

  return (
    <div>
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </div>
  );
}

export default Home;
