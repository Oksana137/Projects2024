import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p>{movie.overview}</p>
        <div className="card-actions justify-end">
          <Link to={`/movie/${movie.id}`}>
            <button className="btn btn-primary">Watch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
