import React from "react";
import { Link } from "react-router-dom";
import useMovieStore from "../store/useMovieStore";
import Movie from "../types/movie.types";

interface Props {
  movie: Movie | null;
}
const MovieCard = ({ movie }: Props) => {
  const setMovie = useMovieStore((state) => state.setMovie);

  return (
    <div className="movie">
      <Link to={`/${movie?.id}`} onClick={(e) => setMovie(movie)}>
        <div>
          <p>{movie?.year}</p>
        </div>
        <div>
          <img
            src={
              movie?.poster_path !== null
                ? `https://image.tmdb.org/t/p/w342/${movie?.poster_path}`
                : "https://via.placeholder.com/400"
            }
            alt={movie?.title}
          />
        </div>
        <div>
          <span>{movie?.vote_average && movie.vote_average.toFixed(1)}</span>
          <h3>{movie?.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
