
import React from 'react';

const Actors = () => {

  const actors = [
    { id: 1, name: 'Actor 1', movies: ['Movie X', 'Movie Y'] },
    { id: 2, name: 'Actor 2', movies: ['Movie Z', 'Movie W'] },
    
  ];

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
