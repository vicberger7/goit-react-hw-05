import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmIxNzMxYjhkYzM3NjE0NTgzNTkwMTVjMDM4NjY0MCIsInN1YiI6IjY2MGQ3Y2VlMGI1ZmQ2MDE3YzM5NzQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPXeMjRe-hdLn69UH8Khpx_YTJT4p492TOXh-6gC9rs",
        },
      })
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((error) => {
        console.error("Error fetching movie cast:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ul>
      {loading && <Loader />}
      {cast.map((actor) => (
        <li key={actor.id}>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
