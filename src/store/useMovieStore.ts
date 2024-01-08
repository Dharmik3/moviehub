import { create } from "zustand";
import Movie from "../types/movie.types";
interface movieState {
  movies: Movie[] | null;
  movie: Movie | null;
  setMovies: (movies: Movie[]) => void;
  setMovie: (movie: Movie | null) => void;
}

const useMovieStore = create<movieState>((set) => ({
  movies: null,
  movie: null,
  setMovies: (movies) => {
    set(() => ({ movies: movies }));
  },
  setMovie: (movie) => {
    set(() => ({ movie: movie }));
  },
}));

export default useMovieStore;
