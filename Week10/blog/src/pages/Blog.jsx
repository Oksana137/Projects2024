import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Blog = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/posts`)
      .then(function (response) {
        setCards(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {cards && cards.map((card) => <Card key={card.id} card={card} />)}
    </div>
  );
};

export default Blog;
