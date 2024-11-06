import { useState } from "react";

const getStartDate = () => {
  const current = new Date();
  return new Date(current.setDate(current.getDate() - current.getDay() + 1));
};

// const getStartDate = () => {
//   const current = new Date();
//   const dayOfWeek = current.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

//   // Calculate how many days to subtract to get to the most recent Monday
//   const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

//   return new Date(current.setDate(current.getDate() + diff));
// };

const WeekDates = ({ selectedDate, setSelectedDate }) => {
  const [startDate, setStartDate] = useState(getStartDate());

  const getCurrentWeek = () => {
    const week = [];
    let startDay = new Date(startDate);

    for (let i = 0; i < 7; i++) {
      week.push({
        weekday: startDay.toLocaleDateString("en-CA", { weekday: "short" }),
        date: startDay.toLocaleDateString("en-CA", { day: "numeric" }),
        localDate: startDay.toLocaleDateString("en-CA"),
      });

      startDay.setDate(startDay.getDate() + 1);
    }

    return week;
  };

  const prevWeekHandle = () => {
    setStartDate((prev) => {
      const date = new Date(prev);
      date.setDate(date.getDate() - 7);
      return date;
    });
  };

  const nextWeekHandle = () => {
    setStartDate((prev) => {
      const date = new Date(prev);
      date.setDate(date.getDate() + 7);
      return date;
    });
  };

  return (
    <ul className="w-[32rem] m-auto flex justify-between items-center mb-8">
      <button className="btn btn-sm btn-circle" onClick={prevWeekHandle}>
        ❮
      </button>
      {getCurrentWeek().map((week) => {
        return (
          <li key={week.localDate}>
            <a
              onClick={() => setSelectedDate(week.localDate)}
              className={`flex flex-col items-center gap-2 border-b-2 border-transparent hover:cursor-pointer no-underline ${
                selectedDate === week.localDate &&
                "border-accent-green text-accent-green"
              }`}
            >
              <span className="text-sm">{week.weekday}</span>
              <span className="font-bold">{week.date}</span>
            </a>
          </li>
        );
      })}
      <button className="btn btn-sm btn-circle" onClick={nextWeekHandle}>
        ❯
      </button>
    </ul>
  );
};

export default WeekDates;
