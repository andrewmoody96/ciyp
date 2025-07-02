import PropTypes from "prop-types";

// UX - Ability to subscribe to Google Calendar to stay up with Chocolate events

export default function Event({ description, tickets, doorTime, location }) {
  // Description Array
  let date = description[0]; // -- date of event
  let venue = description[1]; // -- event venue
  let time = description[2]; // -- start time

  // Optional Information
  let address = location; // -- event address
  let url = tickets; // -- ticket link ***
  let doors = doorTime; // -- doors open time ***

  return (
    <div className="flex flex-col w-[75vw] tablet:w-[45vw] desktop:w-[30vw]">
      <div className="m-2 px-2 rounded-2xl shadow-[inset_0_1px_5px_0_rgb(0,0,0);] items-center bg-[#B36551]/90 border-4 border-black">
        <span className="p-2 rounded-md flex flex-col" href="">
          <div className="flex flex-col justify-center">
            <h2 className="m-1 text-center text-lg tablet:text-lg text-white font-moda">
              {date} @ {venue}
            </h2>
            {doors === "null" ? (
              <h2 className="m-1 text-center text-md text-white font-moda">
                {time}
              </h2>
            ) : (
              <h2 className="m-1 text-center text-md text-white font-moda">
                {time} - <em>Doors at {doors}</em>
              </h2>
            )}
            {address === "null" ? null : (
              <h2 className="m-1 text-center text-md text-white font-moda">
                {address}
              </h2>
            )}
            {tickets !== "null" ? (
              <h2 className="m-1 text-center text-md text-black font-moda">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={url}
                  className="hover:text-white hover:underline"
                >
                  &#127903; BUY TICKETS
                </a>
              </h2>
            ) : null}
          </div>
        </span>
      </div>
    </div>
  );
}

Event.propTypes = {
  description: PropTypes.array.isRequired,
  tickets: PropTypes.string,
  doorTime: PropTypes.string,
  location: PropTypes.string,
};
