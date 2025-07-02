import { useState } from "react";
import PropTypes from "prop-types";

export default function CalModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const icalUrl =
    "https://calendar.google.com/calendar/ical/2035uvnusekdllmhnqo88ek54o%40group.calendar.google.com/public/basic.ics";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(icalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.log("Failed to copy: ", err);
      await navigator.clipboard.writeText(err);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="relative bg-white rounded-lg p-6 shadow-lg w-[97vw] tablet:w-[50vw] desktop:w-[60vw] wide:w-[40vw]"
        >
          <h2 className="text-xl text-center font-bold mb-4">
            Subscribe to Our Calendar
          </h2>
          <p className="mb-4">
            Stay updated with our latest shows and events by subscribing to our
            calendar.
          </p>
          <div className="flex items-center justify-evenly">
            <button className="bg-[#B36551] text-white px-4 py-2 rounded hover:bg-[#A0523D]">
              <a
                href="https://calendar.google.com/calendar/u/1?cid=MjAzNXV2bnVzZWtkbGxtaG5xbzg4ZWs1NG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                target="_blank"
                rel="noreferrer"
                className="mx-auto p-2"
              >
                Google
              </a>
            </button>
            <button
              onClick={handleCopy}
              className="bg-[#B36551] text-white px-4 py-2 rounded hover:bg-[#A0523D]"
            >
              iCal (ICS)
            </button>
          </div>
          {copied && (
            <div className="text-green-600 text-center mt-2 text-sm font-semibold">
              Copied to Clipboard <br /> Please review the instructions below.
            </div>
          )}
          <p className="italic text-center text-xs mt-7">
            iCal requires you to copy the link and paste it into your calendar
            application to create a subscription calendar. For the default iOS
            calendar, please see the instructions listed{" "}
            <a
              href="https://support.apple.com/en-us/102301"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 underline"
            >
              here
            </a>
            .
          </p>
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold bg-transparent border-none cursor-pointer"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
}

CalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
