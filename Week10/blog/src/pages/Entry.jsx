import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Entry = () => {
  const [card, setCard] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/posts/${id}`)
      .then(function (response) {
        if (response.data.length > 0) setCard(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {card && (
        <div className="flex flex-col gap-8 max-w-3xl m-auto">
          <h1 className="text-5xl font-bold">{card.title}</h1>
          <img
            src={card.cover}
            className="w-full max-h-96 object-cover rounded-lg shadow-2xl"
          />
          <p className="text-xl">{card.content}</p>
        </div>
      )}
    </>
  );
};

export default Entry;
