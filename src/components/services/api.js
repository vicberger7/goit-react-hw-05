import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmIxNzMxYjhkYzM3NjE0NTgzNTkwMTVjMDM4NjY0MCIsInN1YiI6IjY2MGQ3Y2VlMGI1ZmQ2MDE3YzM5NzQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPXeMjRe-hdLn69UH8Khpx_YTJT4p492TOXh-6gC9rs",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
console.log(url);
