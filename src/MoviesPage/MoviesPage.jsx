import { useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmIxNzMxYjhkYzM3NjE0NTgzNTkwMTVjMDM4NjY0MCIsInN1YiI6IjY2MGQ3Y2VlMGI1ZmQ2MDE3YzM5NzQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPXeMjRe-hdLn69UH8Khpx_YTJT4p492TOXh-6gC9rs",
          },
        }
      )
      .then((response) => {
        setSearchResults(response.data.results);
        setSearchParams({ query: searchQuery });
      })
      .catch((error) => {
        console.error("Error searching movies:", error);
      });
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={searchResults} />
    </div>
  );
}

export default MoviesPage;
