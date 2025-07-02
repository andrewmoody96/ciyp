import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"; // ES6
import { useState } from "react";

// -----------------------CALENDAR MODAL----------------------------
// Modal to display calendar subscription options.
// ------------------------------------------------------------------

export default function CalModal({ isOpen }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
          <h2 className="text-xl text-center font-bold mb-4">Subscribe to Our Calendar</h2>
          <p className="mb-4">
            Stay updated with our latest shows and events by subscribing to our
            calendar.
          </p>
          <p className="mb-4">
            Click to add either the Google Calendar or iCal link below
          </p>
          <div className="flex items-center justify-between">
            <button
              onClick={() =>
                (window.location.href = "https://linktr.ee/chocolateinyourpocket")
              }
              className="bg-[#B36551] text-white px-4 py-2 rounded hover:bg-[#A0523D]"
            >
              Google 
            </button>
            <FontAwesomeIcon />
            <button
              onClick={() =>
                (window.location.href = "https://linktr.ee/chocolateinyourpocket")
              }
              className="bg-[#B36551] text-white px-4 py-2 rounded hover:bg-[#A0523D]"
            >
              iCal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

CalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
