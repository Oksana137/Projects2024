import { useEffect, useState } from "react";
import { getEntriesByDate } from "../utils/localStorage";
import EntryCard from "./EntryCard";

const EntryCards = ({ selectedDate, addEntry }) => {
  const [entries, setEntries] = useState(null);
  // console.log(entries);

  useEffect(() => {
    const data = getEntriesByDate(selectedDate);
    setEntries(data);
  }, [selectedDate, addEntry]);

  return (
    <div className="w-96 m-auto pb-8 flex flex-col gap-8">
      {entries &&
        entries.map((entry) => {
          return <EntryCard entry={entry} />;
        })}
    </div>
  );
};

export default EntryCards;
