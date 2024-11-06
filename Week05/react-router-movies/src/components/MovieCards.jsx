import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import options from "../config/apiOptions";

const MovieCards = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    options.signal = controller.signal;

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        );
        if (!response.ok)
          throw Error(`HTTP error! Status: ${response.status}`, error);
        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Error fetching", error);
      }
    };

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="p-8 flex justify-center flex-wrap gap-8">
      {movies &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieCards;
