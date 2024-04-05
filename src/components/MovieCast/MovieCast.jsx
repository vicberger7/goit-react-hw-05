function MovieCast({ cast }) {
  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <p>{actor.name}</p>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
