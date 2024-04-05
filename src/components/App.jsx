import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
import MoviesPage from "../MoviesPage/MoviesPage";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Routes>
    </div>
  );
}

export default App;
