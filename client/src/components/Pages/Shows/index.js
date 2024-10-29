import React, { useEffect, useState } from "react";
import { addressCheck, eventLinkFormatter } from "./formatters";
import Event from "./Event";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
dayjs.extend(localizedFormat)
dayjs.extend(utc);
dayjs.extend(isSameOrAfter);

let dateToFormat = "";
let eventLocation = "";
let ogURL = null;
let name = "";
let date = null;
let time = null;
let location = null;
let url = null;

// Event Renderer - renders based on presence of event URL
const eventLoader = (url) => {
  if (url === "null") {
    console.log("NULL");
    return (
      <Event className="w-100" description={[date, name, time, location]} />
    );
  } else {
    console.log("NOT NULL");
    console.log(url);
    return (
      <Event
        className="w-100"
        description={[date, name, time, location, url]}
      />
    );
  }
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
          console.log("load successful");
          let eventObj = jsonData.events;

          const events = Object.keys(eventObj).map((key) => eventObj[key]);

          let upcoming = [];
          let getNow = dayjs.utc().toISOString()
          let now = getNow.slice(".");

          events.forEach((event) => {
            let end = dayjs(event.end.dateTime).toISOString();
            let compare = dayjs(now).isAfter(end);

            if (compare === false) {
              upcoming.push(event);
              setEvents(upcoming);
              setIsUpcoming(true);
            } else {
              setIsUpcoming(false);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      {!isUpcoming ? (
        <div className="flex flex-col justify-center items-center desktop:w-[45vw]">
          <div className="h-[10vh] invisible">dummy div for spacing</div>
          <div className="w-100 desktop:w-[45vw] bg-white/90 rounded-lg justify-center text-center">
            <h2 className="flex flex-col w-auto font-moda text-xl text-center visible p-2">
              No upcoming events.
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center tablet:grid tablet:grid-cols-2 desktop:flex desktop:flex-col">
          {/* only display in col view if events.length < 1? */}
          {events?.map((event) => (
            <div key={event.id}>
              <div className="flex justify-center w-auto">
                <div id="hiddenJS" className="hidden">
                  {(dateToFormat = `${event.start.dateTime}`)}
                  {(name = event.summary)}
                  {(date = dayjs(dateToFormat).format("M/D"))}
                  {(time = dayjs(dateToFormat).format("LT"))}
                  {(eventLocation = `${event.location}`)}
                  {(location = `${addressCheck(eventLocation)}`)};
                  {/* LINK RENDERING */}
                  {(ogURL = event.description)}
                  {(url = `${eventLinkFormatter(ogURL)}`)}
                </div>
              </div>
              {eventLoader(url)}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
