import { useState } from "react";
import Daypicker from "./Daypicker";
import ImagePicker from "./ImagePicker";
import Error from "./Error";

function Entry({ setAddEntry }) {
  // State um Titel zu speichern
  const [title, setTitle] = useState("");

  // Textarea benutzt State um Eintrag zu speichern
  const [diaryEntry, setDiaryEntry] = useState("");

  // Datumeingabe
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Funktion die URL vom Imagepicker trägt
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  // Funktion für Errorstate
  const [error, setError] = useState("");

  // Funktion öffnet Modal wenn "Add Entry" ist geklickt
  const openModal = () => {
    document.getElementById("my_modal_1").showModal();
  };

  // Function to open the DayPicker modal
  const openDaypicker = () => {
    document.getElementById("daypicker_modal").showModal();
  };

  // Function liest Textarea und updated State
  const handleChange = (event) => {
    setDiaryEntry(event.target.value); // Momentaner Wert der textarea
  };

  // Function to validate fields
  const validateFields = () => {
    if (!title) {
      return "Title is required.";
    }
    if (!diaryEntry) {
      return "Entry text is required.";
    }
    if (!selectedDate) {
      return "Date selection is required.";
    }
    if (!selectedImageUrl) {
      return "Image selection is required.";
    }
    return null; // No errors
  };

  // Function fürs Abschicken
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate before submission
    const errorMessage = validateFields();
    if (errorMessage) {
      setError(errorMessage);
      document.getElementById("error_modal").showModal(); // Open the error modal
      return;
    }

    // Create an entry object with the specified structure
    const entry = {
      title, // Key for the title
      date: selectedDate.toLocaleDateString("en-CA"), // Format date as "YYYY-MM-DD" in the local timezone
      image: selectedImageUrl, // Key for the image URL
      content: diaryEntry, // Key for the diary entry content
    };

    // Save the entry to local storage
    const existingEntries =
      JSON.parse(localStorage.getItem("diaryEntries")) || [];
    existingEntries.push(entry);
    localStorage.setItem("diaryEntries", JSON.stringify(existingEntries));

    // Log all entries in local storage after adding the new one
    console.log(
      "All Entries in Local Storage:",
      JSON.parse(localStorage.getItem("diaryEntries"))
    );

    clearState(); // Clear all fields
    setAddEntry((prev) => !prev); 

    document.getElementById("my_modal_1").close(); // Close the entry modal
  };

  const clearState = () => {
    setTitle(""); // Clear the title state
    setDiaryEntry(""); // Clear the diary entry state
    setSelectedDate(new Date()); // Reset the date state to today's date
    setSelectedImageUrl(null); // Clear the selected image URL state
    setError(""); // Clear the error state
  };

  const closeModal = () => {
    // Reset the error state
    setError("");

    // Close the modal
    document.getElementById("my_modal_1").close();
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button className="btn btn-success text-white" onClick={openModal}>
        &#43; Add Entry
      </button>

      {/* Modal Structure */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box relative">
          <form method="dialog">
            {/* Close button (X) */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Dear Diary...</h3>
          {/* Input Title */}
          <input
            type="text"
            placeholder="What A Day"
            className="input input-bordered w-full mb-4"
            value={title} // Bind the value to the title state
            onChange={(e) => setTitle(e.target.value)} // Update the title state on change
          />
          {/* Textarea Input */}
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="today was a great day..."
            value={diaryEntry} // The value of the textarea comes from the state
            onChange={handleChange} // Handle changes to the textarea
          ></textarea>

          {/* Datum + Display */}
          <div className="flex items-center justify-between mt-4">
            {/* DayPicker Button */}
            <Daypicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />

            {/* Displaying Date */}
            <p className="border border-neutral rounded-lg p-3 w-40 text-right">
              {selectedDate
                ? selectedDate.toLocaleDateString()
                : "No date selected"}
            </p>
          </div>

          {/* Image Upload + Preview */}
          <div className="flex items-center justify-between mt-4">
            <ImagePicker onImageSelect={setSelectedImageUrl} />

            <div className="border border-neutral w-40 h-12 rounded-lg ">
              <div className="w-full h-full rounded-lg  overflow-hidden">
                {selectedImageUrl ? (
                  <img
                    src={selectedImageUrl}
                    alt="Selected"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>No image selected</span>
                )}
              </div>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog" onSubmit={handleSubmit}>
              {/* Button to submit the entry */}
              <button type="submit" className="btn btn-success text-white">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Modal backdrop that closes the modal when clicked */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Error Modal */}
      <Error message={error} onClose={closeModal} />
    </div>
  );
}

export default Entry;
