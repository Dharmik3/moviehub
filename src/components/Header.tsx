import React, { useState, useEffect } from "react";
import searchIcon from "../assets/search.svg";
import { Link } from "react-router-dom";
import useMovieStore from "../store/useMovieStore";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { movie, setMovies, setMovie } = useMovieStore();
  const searchMovies = async (title: string) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4d4ed145d3584846f5922b6a467e1f85&query=${title}`
    );
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);
  };
  const handleLogoClick = () => {
    setMovie(null);
  };
  useEffect(() => {
    searchMovies("spider man");
  }, []);

  return (
    <>
      <Link to={`/`} onClick={handleLogoClick} className="logo_link">
        {movie === null ? (
          <h1 className="main_heading">MovieLand</h1>
        ) : (
          <div className="wrapper_modal_heading">
            <h1 className="modal_heading">MovieLand</h1>
          </div>
        )}
      </Link>
      {movie === null ? (
        <div className="search">
          <input
            placeholder="search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={(e) => {
              if (e.keyCode === 13) searchMovies(searchTerm);
            }}
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      ) : null}
    </>
  );
};

export default Header;
