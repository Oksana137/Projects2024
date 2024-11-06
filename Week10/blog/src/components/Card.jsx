import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <Link to={`/${card.id}`} className="card bg-base-100 w-96 shadow-xl">
      <figure className="w-full h-72">
        <img
          className="w-full h-full object-cover"
          src={card.cover}
          alt={card.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card.title}</h2>
        <p>{card.content}</p>
      </div>
    </Link>
  );
};

export default Card;
