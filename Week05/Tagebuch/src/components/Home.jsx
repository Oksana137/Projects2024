import EntryCards from "./EntryCards";
import TodayDate from "./TodayDate";
import WeekDates from "./WeekDates";
import Entry from "./Entry";
import { useState } from "react";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [addEntry, setAddEntry] = useState(false);

  return (
    <>
      <div className="w-96 m-auto flex justify-between py-10">
        <TodayDate />
        <Entry setAddEntry={setAddEntry} />
      </div>
      <WeekDates
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        addEntry={addEntry}
        setAddEntry={setAddEntry}
      />
      <EntryCards selectedDate={selectedDate} addEntry={addEntry} />
    </>
  );
};

export default Home;
