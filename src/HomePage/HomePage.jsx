import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList/MovieList";

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmIxNzMxYjhkYzM3NjE0NTgzNTkwMTVjMDM4NjY0MCIsInN1YiI6IjY2MGQ3Y2VlMGI1ZmQ2MDE3YzM5NzQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPXeMjRe-hdLn69UH8Khpx_YTJT4p492TOXh-6gC9rs",
        },
      })
      .then((response) => {
        setTrendingMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
}

export default HomePage;
