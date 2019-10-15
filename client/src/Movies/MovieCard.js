import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props;
  console.log("MovieCard", props);
  return (
    <div className="movie-card">
     
      <h2>{props.info.title}</h2>
      <div className="movie-director">
        Director: <em>{props.info.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.info.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars && stars.map(star => (
        <div key={star} className="movie-star">
          {props.info.star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
