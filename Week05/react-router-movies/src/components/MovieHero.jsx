import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import options from "../config/apiOptions";

const MovieHero = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    options.signal = controller.signal;

    const fetchMovieById = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          options
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`, error);
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching", error);
      }
    };

    fetchMovieById();
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    movie && (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <p className="py-6">{movie.overview}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieHero;
