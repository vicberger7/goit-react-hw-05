import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const MoviesPage = lazy(() => import("../MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route component={NotFoundPage} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
