import { useRef, useState, useEffect } from "react";
import axios from "axios";
import {
  Link,
  Outlet,
  NavLink,
  useLocation,
  useParams,
} from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmIxNzMxYjhkYzM3NjE0NTgzNTkwMTVjMDM4NjY0MCIsInN1YiI6IjY2MGQ3Y2VlMGI1ZmQ2MDE3YzM5NzQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPXeMjRe-hdLn69UH8Khpx_YTJT4p492TOXh-6gC9rs",
        },
      })
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div className={css.movieDetails}>
      {loading && <Loader />}
      <Link to={backLink.current}>Go Back</Link>
      <div className={css.movieDetailsContainer}>
        <img
          className={css.movieDetailsPoster}
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div className={css.movieDetailsInfo}>
          <h1>{movieDetails.title}</h1>
          <p>User Score: {Math.round(movieDetails.vote_average) * 10}%</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>

          <h3>Genres</h3>
          <ul className={css.genresList}>
            {movieDetails.genres &&
              movieDetails.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
        </div>
      </div>
      <div className={css.addInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink className={css.navInfo} to={`/movies/${movieId}/cast`}>
              Cast
            </NavLink>
          </li>

          <br />
          <li>
            <NavLink className={css.navInfo} to={`/movies/${movieId}/reviews`}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetailsPage;
