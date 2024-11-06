import React from "react";

const DisplayE = ({ entry, setOpenModul }) => {
  return (
    <>
      <dialog id="my_modal_1" className="modal modal-open">
        <div className="modal-box p-10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                setOpenModul(false);
              }}
            >
              ✕
            </button>
          </form>

          <div className="card card-compact w-96">
            <div className="flex items-center gap-6">
              <div className="avatar">
                <div className="mask mask-squircle h-32 w-32">
                  <img src={entry.image} alt="" />
                </div>
              </div>
              <div>
                <div className="card-title">{entry.title}</div>
                <div className="text-gray-600">
                  <span className="font-bold">Date: </span>
                  {new Date(entry.date).toLocaleString("de-DE", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                </div>
              </div>
            </div>
            <p className="py-8 text-gray-600">{entry.content}</p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DisplayE;
