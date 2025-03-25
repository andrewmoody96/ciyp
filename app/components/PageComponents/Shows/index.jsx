import { useEffect, useState } from "react";
import {
  addressCheck,
  eventLinkFormatter,
  dateTimeHandler,
  doorTimeFormatter,
} from "./formatters";
import Event from "./Event";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(isSameOrAfter);

// -------------------------SHOWS PAGE-------------------------------
// This page component is responsible for fetching and rendering the upcoming events from the Google Calendar API.
// The component will fetch the events from the API and render them as Event components that will display the event date, venue, time, location, and ticket URL.
// ------------------------------------------------------------------

let eventLocation = "";
let venue = "";
let date = null;
let time = null;
let location = null;
let ogDoors = null;
let doors = null;
let ogURL = null;
let url = null;

// EVENT COMPONENT RENDERER
const eventLoader = (url, doors) => {
  return (
    <Event
      className="w-100"
      description={[date, venue, time, location]}
      tickets={url}
      doorTime={doors}
    />
  );
};

export default function Shows() {
  const [events, setEvents] = useState([]);
  const [isUpcoming, setIsUpcoming] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/shows");
        const jsonData = await res.json();
        if (!jsonData) {
          console.error("load failed");
          setIsUpcoming(false);
        } else {
          if (jsonData.message === "No upcoming events found.") {
            setIsUpcoming(false);
          } else {
            let eventObj = jsonData.events;
            const events = Object.keys(eventObj).map((key) => eventObj[key]);
            let upcoming = [];
            let getNow = dayjs.utc().toISOString();
            let now = getNow.slice(".");
            let end = null;

            events.forEach((event) => {
              // Checks for & Handles All-Day Events
              if (!event.end.dateTime) {
                end = dayjs(event.end.date).toISOString();
              } else {
                end = dayjs(event.end.dateTime).toISOString();
              }

              let compare = dayjs(now).isAfter(end);

              if (compare === false) {
                upcoming.push(event);
                setEvents(upcoming);
                setIsUpcoming(true);
              } else {
                setIsUpcoming(false);
              }
            });
            // console.log(events);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      {!isUpcoming ? (
        <div className="flex flex-col justify-center items-center desktop:w-[45vw]">
          <div className="invisible">dummy div for spacing</div>
          <div className="w-100 desktop:w-[45vw] bg-white/90 rounded-lg justify-center text-center">
            <h2 className="flex flex-col w-auto font-moda text-xl text-center visible p-2">
              No upcoming events.
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {/* UX - only display in col view if events.length < 1? */}
          {events?.map((event) => (
            <div key={event.id}>
              <div className="flex justify-center w-auto">
                <div id="hiddenJS" className="hidden">
                  {(venue = event.summary)}
                  {(date = dateTimeHandler(event.start)[0])}
                  {(time = dateTimeHandler(event.start)[1])}
                  {(eventLocation = `${event.location}`)}
                  {(location = `${addressCheck(eventLocation)}`)};
                  {/* OPTIONAL INFO RENDERING */}
                  {(ogURL = event.description)}
                  {(url = `${eventLinkFormatter(ogURL)}`)}
                  {(ogDoors = event.description)}
                  {(doors = `${doorTimeFormatter(ogDoors)}`)}
                </div>
              </div>
              {eventLoader(url, doors)}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
