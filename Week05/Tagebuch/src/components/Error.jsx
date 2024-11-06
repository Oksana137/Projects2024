import React from "react";

function Error({ message, onClose }) {
  return (
    <dialog id="error_modal" className="modal">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Error</h3>
        <p>{message}</p>
        <div className="modal-action">
          <button className="btn btn-error text-white" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default Error;
