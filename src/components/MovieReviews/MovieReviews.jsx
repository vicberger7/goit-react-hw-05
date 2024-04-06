import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

function MovieReviews() {
  const { movieId } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmIxNzMxYjhkYzM3NjE0NTgzNTkwMTVjMDM4NjY0MCIsInN1YiI6IjY2MGQ3Y2VlMGI1ZmQ2MDE3YzM5NzQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPXeMjRe-hdLn69UH8Khpx_YTJT4p492TOXh-6gC9rs",
        },
      })
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie reviews:", error);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <ul>
      {loading && <Loader />}
      {results.length > 0 ? (
        results.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <li className={css.noReviews}>
          <p>We do not have any reviews for this movie.</p>
        </li>
      )}
    </ul>
  );
}

export default MovieReviews;
