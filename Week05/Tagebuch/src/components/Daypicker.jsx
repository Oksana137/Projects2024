import React, { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css"; // Make sure this is included

function Daypicker({ selectedDate, setSelectedDate }) {
  const defaultClassNames = getDefaultClassNames();

  // Function to open the DayPicker modal
  const openDaypickerModal = () => {
    document.getElementById("daypicker_modal").showModal();
  };

  return (
    <div>
      {/* Button to open the DayPicker modal */}
      <button
        className="btn btn-success text-white w-40"
        onClick={openDaypickerModal}
      >
        Add Date
      </button>

      {/* DayPicker Modal Structure */}
      <dialog id="daypicker_modal" className="modal">
        <div className="modal-box relative">
          <form method="dialog">
            {/* Close button for DayPicker modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            classNames={{
              selected: `rounded-full bg-success text-white font-extrabold`, // Highlight the selected day
              today: `text-success font-extrabold`, // Add a border to today's date
              caption_label:
                "font-extrabold text-center font-extrabold text-success", // Custom styles for the month and year label*/
              root: `${defaultClassNames.root} flex flex-col items-center justify-center`, // Add a shadow and padding to the root element
              chevron: `${defaultClassNames.chevron} fill-success`, // Change the color of the chevron
            }}
          />
          <div className="modal-action">
            <button
              className="btn btn-success text-white"
              onClick={() => document.getElementById("daypicker_modal").close()}
            >
              Save Date
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Daypicker;
