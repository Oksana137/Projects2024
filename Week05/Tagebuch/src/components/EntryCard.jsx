import { useState } from "react";
import DisplayE from "./DisplayE";

const EntryCard = ({ entry }) => {
  const [openModul, setOpenModul] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setOpenModul(true);
        }}
        key={entry.title}
        className="card bg-entry-blue w-96 shadow-xl hover:cursor-pointer"
      >
        <figure className="px-10 pt-10">
          <img src={entry.image} alt="Task" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{entry.title}</h2>
          <p className="text-gray-600">
            <span className="font-bold">Date: </span>{" "}
            {new Date(entry.date).toLocaleString("de-DE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-600">{entry.content}</p>
        </div>
      </div>
      {openModul && <DisplayE entry={entry} setOpenModul={setOpenModul} />}
    </>
  );
};

export default EntryCard;
