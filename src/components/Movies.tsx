import React from "react";
import MovieCard from "./MovieCard";
import useMovieStore from "../store/useMovieStore";

const Movies = () => {
  const movies = useMovieStore((state) => state.movies);
  return (
    <>
      {movies !== null ? (
        <div className="container">
          {movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found!</h2>
        </div>
      )}
    </>
  );
};

export default Movies;
