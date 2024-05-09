
import React from 'react';

const Directors = () => {
  const directors = [
    { id: 1, name: 'Director 1', movies: ['Movie A', 'Movie B'] },
    { id: 2, name: 'Director 2', movies: ['Movie C', 'Movie D'] },
   
  ];

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
